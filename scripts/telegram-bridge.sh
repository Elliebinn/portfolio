#!/usr/bin/env bash
# telegram-bridge.sh — Telegram ↔ tmux pm-orchestrator bridge daemon
#
# 동작:
#   1. 10초마다 Telegram getUpdates 폴링
#   2. 화이트리스트(혜빈님 chat_id)에서 온 메시지만 처리
#   3. 메시지를 portfolio-claude pane 0 (pm-orchestrator)에 자동 주입
#   4. 처리 결과를 다시 텔레그램으로 ACK
#
# 사용:
#   bash scripts/telegram-bridge.sh start    # 백그라운드 시작
#   bash scripts/telegram-bridge.sh stop     # 중단
#   bash scripts/telegram-bridge.sh status   # 상태
#   bash scripts/telegram-bridge.sh tail     # 로그 따라보기

set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONFIG_FILE="$HOME/.claude/.omc-config.json"
OFFSET_FILE="$ROOT/_workspace/telegram-bridge.offset"
PID_FILE="$ROOT/_workspace/telegram-bridge.pid"
LOG_FILE="$ROOT/_workspace/telegram-bridge.log"
INBOX_FILE="$ROOT/_workspace/telegram_inbox.md"

ALLOWED_CHAT_ID="5339933558"   # 우혜빈 (private)
TMUX_TARGET="portfolio-claude.0"  # pm-orchestrator pane
POLL_INTERVAL=10
PREFIX_RAW="/pm"

TOKEN="$(jq -r '.notifications.telegram.botToken' "$CONFIG_FILE" 2>/dev/null)"
if [ -z "$TOKEN" ] || [ "$TOKEN" = "null" ]; then
  echo "ERROR: Telegram bot token not found in $CONFIG_FILE"
  exit 1
fi

API="https://api.telegram.org/bot${TOKEN}"

log() {
  echo "[$(date '+%H:%M:%S')] $*" >> "$LOG_FILE"
}

send_telegram() {
  local text="$1"
  curl -s "$API/sendMessage" \
    --data-urlencode "chat_id=$ALLOWED_CHAT_ID" \
    --data-urlencode "parse_mode=Markdown" \
    --data-urlencode "text=$text" > /dev/null
}

inject_to_pane() {
  local msg="$1"
  local tmp
  tmp=$(mktemp)
  printf '%s' "$msg" > "$tmp"
  tmux load-buffer "$tmp"
  tmux paste-buffer -t "$TMUX_TARGET"
  sleep 0.3
  tmux send-keys -t "$TMUX_TARGET" Enter
  rm -f "$tmp"
}

run_daemon() {
  log "=== bridge started (pid=$$, target=$TMUX_TARGET, allowed_chat=$ALLOWED_CHAT_ID) ==="

  local offset
  offset=$(cat "$OFFSET_FILE" 2>/dev/null || echo "0")

  while true; do
    if [ ! -f "$PID_FILE" ] || [ "$(cat "$PID_FILE")" != "$$" ]; then
      log "pid file mismatch, exiting"
      break
    fi

    local response
    response=$(curl -s --max-time 30 "$API/getUpdates?offset=$offset&timeout=25" 2>/dev/null || echo '{"ok":false}')

    local ok
    ok=$(echo "$response" | jq -r '.ok // false')
    if [ "$ok" != "true" ]; then
      log "getUpdates failed: $(echo "$response" | jq -c '.description // .')"
      sleep $POLL_INTERVAL
      continue
    fi

    local count
    count=$(echo "$response" | jq '.result | length')
    if [ "$count" -gt 0 ]; then
      while IFS= read -r line; do
        local update_id chat_id text from_name
        update_id=$(echo "$line" | jq -r '.update_id')
        chat_id=$(echo "$line" | jq -r '.message.chat.id // empty')
        text=$(echo "$line" | jq -r '.message.text // empty')
        from_name=$(echo "$line" | jq -r '.message.from.first_name // "unknown"')

        offset=$((update_id + 1))
        echo "$offset" > "$OFFSET_FILE"

        [ -z "$chat_id" ] && continue
        [ -z "$text" ] && continue

        if [ "$chat_id" != "$ALLOWED_CHAT_ID" ]; then
          log "REJECTED chat_id=$chat_id from=$from_name text=$text"
          send_telegram "⛔ 등록되지 않은 사용자입니다 (chat_id: $chat_id)"
          continue
        fi

        log "RECV from=$from_name text=$text"

        # 명령 분기
        case "$text" in
          /start*)
            send_telegram "👋 *PM Orchestrator Bridge 활성*

사용법:
\`/pm <메시지>\` — pm-orchestrator에게 직접 메시지 전송
\`/status\` — 현재 작업 상태
\`/signals\` — pending ACK 목록
\`/log\` — 최근 로그 5줄

예: \`/pm Phase 2 진행해줘\`"
            ;;
          /status*)
            local status_text
            status_text=$(cd "$ROOT" && git log --oneline -3 2>/dev/null)
            send_telegram "*Git log (최근 3개)*
\`\`\`
$status_text
\`\`\`"
            ;;
          /signals*)
            local sig_text
            sig_text=$(cd "$ROOT" && bash scripts/ack-pending.sh 2>/dev/null | head -30)
            send_telegram "*Pending signals*
\`\`\`
$sig_text
\`\`\`"
            ;;
          /log*)
            local log_text
            log_text=$(tail -5 "$LOG_FILE" 2>/dev/null)
            send_telegram "*Bridge log*
\`\`\`
$log_text
\`\`\`"
            ;;
          /pm\ *|/pm)
            local pm_msg="${text#/pm}"
            pm_msg="${pm_msg# }"
            if [ -z "$pm_msg" ]; then
              send_telegram "❓ 메시지가 비어있어요. 예: \`/pm Phase 2 시작해\`"
              continue
            fi
            local prefixed="[텔레그램 from 혜빈님] $pm_msg"
            inject_to_pane "$prefixed"
            log "INJECTED: $pm_msg"
            send_telegram "✅ pm-orchestrator pane에 주입됨:
\`\`\`
$pm_msg
\`\`\`"
            # 받은 메시지도 inbox에 누적
            mkdir -p "$(dirname "$INBOX_FILE")"
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] $pm_msg" >> "$INBOX_FILE"
            ;;
          *)
            # /pm 없이 보낸 일반 메시지도 pm-orchestrator에 주입
            local prefixed="[텔레그램 from 혜빈님] $text"
            inject_to_pane "$prefixed"
            log "INJECTED (raw): $text"
            send_telegram "✅ 주입됨:
\`\`\`
$text
\`\`\`"
            mkdir -p "$(dirname "$INBOX_FILE")"
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] $text" >> "$INBOX_FILE"
            ;;
        esac
      done < <(echo "$response" | jq -c '.result[]')
    fi

    sleep $POLL_INTERVAL
  done

  log "=== bridge stopped ==="
}

case "${1:-}" in
  start)
    if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
      echo "Bridge already running (pid=$(cat "$PID_FILE"))"
      exit 0
    fi
    mkdir -p "$(dirname "$PID_FILE")"
    nohup bash "$0" __daemon__ >> "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    echo "Bridge started (pid=$!)"
    echo "Log: $LOG_FILE"
    ;;
  __daemon__)
    echo $$ > "$PID_FILE"
    run_daemon
    rm -f "$PID_FILE"
    ;;
  stop)
    if [ -f "$PID_FILE" ]; then
      pid=$(cat "$PID_FILE")
      kill "$pid" 2>/dev/null && echo "Stopped pid=$pid" || echo "Process not running"
      rm -f "$PID_FILE"
    else
      echo "Not running"
    fi
    ;;
  status)
    if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
      echo "RUNNING (pid=$(cat "$PID_FILE"))"
      echo "offset: $(cat "$OFFSET_FILE" 2>/dev/null || echo 0)"
      echo "log tail:"
      tail -5 "$LOG_FILE" 2>/dev/null
    else
      echo "NOT RUNNING"
    fi
    ;;
  tail)
    tail -f "$LOG_FILE"
    ;;
  *)
    echo "Usage: $0 {start|stop|status|tail}"
    exit 1
    ;;
esac
