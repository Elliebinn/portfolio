#!/usr/bin/env bash
# team-status.sh — pm-orchestrator's reality check tool
# 6개 pane의 활성 상태 + signal 파일 + 최근 git log 한 화면에 표시
#
# 사용: bash scripts/team-status.sh

set -euo pipefail

SESSION="portfolio-claude"
WORKSPACE="$(cd "$(dirname "$0")/.." && pwd)/_workspace"

echo "================================================================"
echo "  TEAM STATUS @ $(date '+%Y-%m-%d %H:%M:%S')"
echo "================================================================"

echo ""
echo "── PANES (last 3 lines each) ───────────────────────────────────"
if tmux has-session -t "$SESSION" 2>/dev/null; then
  for pane in 0 1 2 3 4 5; do
    title=$(tmux display-message -p -t "$SESSION:0.$pane" '#{pane_title}' 2>/dev/null || echo "?")
    echo ""
    echo "[$pane] $title"
    tmux capture-pane -t "$SESSION:0.$pane" -p 2>/dev/null \
      | grep -v '^\s*$' \
      | grep -v '^\[OMC' \
      | grep -v '^\s*Update available' \
      | grep -v '^\s*⏵⏵' \
      | tail -3 \
      | sed 's/^/    /'
  done
else
  echo "  (no tmux session $SESSION)"
fi

echo ""
echo "── SIGNALS ─────────────────────────────────────────────────────"
if [ -d "$WORKSPACE/signals" ]; then
  signals=$(find "$WORKSPACE/signals" -type f -name '*.done' -o -name '*.pass' -o -name '*.fail' -o -name '*.blocked' 2>/dev/null | sort)
  if [ -z "$signals" ]; then
    echo "  (no signals yet)"
  else
    for f in $signals; do
      base=$(basename "$f")
      mtime=$(stat -f '%Sm' -t '%H:%M:%S' "$f" 2>/dev/null || stat -c '%y' "$f" 2>/dev/null | cut -d' ' -f2 | cut -d. -f1)
      echo "  $mtime  $base"
    done
  fi
else
  echo "  (no signals dir)"
fi

echo ""
echo "── RECENT COMMITS ──────────────────────────────────────────────"
git -C "$(dirname "$WORKSPACE")" log --oneline -5

echo ""
echo "── _workspace/ ARTIFACTS (top level) ───────────────────────────"
ls -la "$WORKSPACE" 2>/dev/null | grep -v '^total' | grep -v 'refs' | grep -v ' \.$' | grep -v ' \.\.$' | awk '{printf "  %6s  %s\n", $5, $NF}'

echo ""
echo "================================================================"
