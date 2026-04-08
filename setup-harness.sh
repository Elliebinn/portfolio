#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Portfolio Redesign — Claude Code 에이전트 팀 하네스
#
# 사용법:
#   ./setup-harness.sh dev      # 세션 생성 + tiled + attach
#   ./setup-harness.sh claude   # 세션만 생성
#   ./setup-harness.sh tiled    # 기존 세션의 window를 tiled로 합침
#   ./setup-harness.sh attach   # 기존 세션에 접속
#   ./setup-harness.sh stop     # 세션 종료
#   ./setup-harness.sh status   # 상태 확인
# ─────────────────────────────────────────────────────────────

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ═══ CONFIG ════════════════════════════════════════════════════
PROJECT_NAME="portfolio"
CLAUDE_SESSION="${PROJECT_NAME}-claude"

# 에이전트 정의: "window_name|relative_dir|command"
# 첫 번째 항목이 leader pane (pm-orchestrator)
CLAUDE_WINDOWS=(
  "pm-orchestrator|.|claude --agent pm-orchestrator"
  "design-architect|.|claude --agent design-architect"
  "frontend-executor|.|claude --agent frontend-executor"
  "motion-engineer|.|claude --agent motion-engineer"
  "visual-qa|.|claude --agent visual-qa"
  "deadcode-auditor|.|claude --agent deadcode-auditor"
)

# tiled 시 leader pane(pm-orchestrator)을 가장 넓게 두고 싶다면 여기에 이름
LEADER_PANE="pm-orchestrator"

# ═══ 색상 ══════════════════════════════════════════════════════
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

log_info()  { echo -e "${GREEN}$*${NC}"; }
log_warn()  { echo -e "${YELLOW}$*${NC}"; }
log_error() { echo -e "${RED}$*${NC}"; }

# ═══ 핵심 함수 ════════════════════════════════════════════════

create_session() {
  local session_name="$1"
  shift
  local -a windows=("$@")

  if tmux has-session -t "$session_name" 2>/dev/null; then
    log_warn "세션 이미 존재: $session_name (스킵)"
    return 0
  fi

  local first=true
  for entry in "${windows[@]}"; do
    IFS='|' read -r name dir cmd <<< "$entry"
    local target_dir="$SCRIPT_DIR/$dir"

    if $first; then
      tmux new-session -d -s "$session_name" -n "$name" -c "$target_dir"
      first=false
    else
      tmux new-window -t "$session_name" -n "$name" -c "$target_dir"
    fi
    tmux send-keys -t "$session_name:$name" "$cmd" Enter
  done

  log_info "세션 시작: $session_name"
  for entry in "${windows[@]}"; do
    IFS='|' read -r name _ _ <<< "$entry"
    echo "  - $name"
  done
}

kill_session() {
  local session_name="$1"
  if tmux has-session -t "$session_name" 2>/dev/null; then
    tmux kill-session -t "$session_name"
    log_info "세션 종료: $session_name"
  else
    log_warn "세션 없음: $session_name"
  fi
}

# ═══ 커맨드 ════════════════════════════════════════════════════

cmd_claude() {
  create_session "$CLAUDE_SESSION" "${CLAUDE_WINDOWS[@]}"
}

cmd_dev() {
  cmd_claude
  cmd_tiled
  log_info "접속: tmux attach -t $CLAUDE_SESSION (또는 switch-client)"
  if [ -n "${TMUX:-}" ]; then
    tmux switch-client -t "$CLAUDE_SESSION"
  else
    tmux attach -t "$CLAUDE_SESSION"
  fi
}

cmd_stop() {
  kill_session "$CLAUDE_SESSION"
}

cmd_status() {
  echo -e "${CYAN}=== $PROJECT_NAME 하네스 상태 ===${NC}"
  if tmux has-session -t "$CLAUDE_SESSION" 2>/dev/null; then
    echo -e "${GREEN}● $CLAUDE_SESSION${NC}"
    tmux list-windows -t "$CLAUDE_SESSION" -F "    #{window_name}" 2>/dev/null
    echo ""
    echo -e "${CYAN}Panes:${NC}"
    tmux list-panes -s -t "$CLAUDE_SESSION" -F "  #{window_name}: #{pane_id} (#{pane_width}x#{pane_height})" 2>/dev/null
  else
    echo -e "${RED}○ $CLAUDE_SESSION (없음)${NC}"
    echo "  → ./setup-harness.sh dev 로 시작"
  fi
}

cmd_tiled() {
  local session="$CLAUDE_SESSION"
  tmux has-session -t "$session" 2>/dev/null || { log_error "세션 없음: $session"; return 1; }

  # 모든 window를 첫 번째 window의 pane으로 병합
  local windows first_window="" pane_count=0
  windows=$(tmux list-windows -t "$session" -F "#{window_index}:#{window_name}")

  while IFS= read -r win; do
    local idx="${win%%:*}"
    if [ -z "$first_window" ]; then
      first_window="$idx"
      pane_count=$((pane_count + 1))
      continue
    fi
    tmux join-pane -s "$session:$idx" -t "$session:$first_window" -h 2>/dev/null || \
    tmux join-pane -s "$session:$idx" -t "$session:$first_window" -v 2>/dev/null || true
    pane_count=$((pane_count + 1))
  done <<< "$windows"

  tmux select-layout -t "$session:$first_window" tiled 2>/dev/null
  log_info "$session: ${pane_count}개 pane tiled 배치"
}

cmd_attach() {
  tmux has-session -t "$CLAUDE_SESSION" 2>/dev/null || { log_error "세션 없음: $CLAUDE_SESSION"; return 1; }
  if [ -n "${TMUX:-}" ]; then
    tmux switch-client -t "$CLAUDE_SESSION"
  else
    tmux attach -t "$CLAUDE_SESSION"
  fi
}

usage() {
  echo -e "${CYAN}$PROJECT_NAME 에이전트 하네스${NC}"
  echo "사용법: $(basename "$0") <command>"
  echo ""
  echo "Commands:"
  echo -e "  ${GREEN}dev${NC}       세션 생성 + tiled + attach (권장)"
  echo -e "  ${GREEN}claude${NC}    세션만 생성 (window 분리 상태)"
  echo -e "  ${GREEN}tiled${NC}     기존 세션 window를 한 화면 pane으로 합침"
  echo -e "  ${GREEN}attach${NC}    세션 접속"
  echo -e "  ${GREEN}stop${NC}      세션 종료"
  echo -e "  ${GREEN}status${NC}    상태 확인"
}

case "${1:-}" in
  claude)  cmd_claude ;;
  dev)     cmd_dev ;;
  tiled)   cmd_tiled ;;
  attach)  cmd_attach ;;
  stop)    cmd_stop ;;
  status)  cmd_status ;;
  *)       usage ;;
esac
