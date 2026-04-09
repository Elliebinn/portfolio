#!/usr/bin/env bash
# tg-reply.sh — Claude → Telegram 답장 전송
# 사용: bash scripts/tg-reply.sh "메시지 내용"

set -uo pipefail

CONFIG_FILE="$HOME/.claude/.omc-config.json"
CHAT_ID="5339933558"

TOKEN="$(jq -r '.notifications.telegram.botToken' "$CONFIG_FILE" 2>/dev/null)"
if [ -z "$TOKEN" ] || [ "$TOKEN" = "null" ]; then
  echo "ERROR: Telegram bot token not found"
  exit 1
fi

MSG="${1:-}"
if [ -z "$MSG" ]; then
  echo "Usage: $0 \"message\""
  exit 1
fi

curl -s "https://api.telegram.org/bot${TOKEN}/sendMessage" \
  --data-urlencode "chat_id=$CHAT_ID" \
  --data-urlencode "parse_mode=Markdown" \
  --data-urlencode "text=$MSG" | jq -r '.ok // "failed"'
