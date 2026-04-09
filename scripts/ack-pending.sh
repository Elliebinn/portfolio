#!/usr/bin/env bash
# ack-pending.sh — list .done signals that lack a corresponding .ack
# 사용: bash scripts/ack-pending.sh

set -euo pipefail

WORKSPACE="$(cd "$(dirname "$0")/.." && pwd)/_workspace"
SIGNALS="$WORKSPACE/signals"

if [ ! -d "$SIGNALS" ]; then
  echo "(no signals dir)"
  exit 0
fi

echo "── PENDING ACKS (worker waiting) ───────────────────────────────"
pending_count=0
for done_file in "$SIGNALS"/*.done "$SIGNALS"/*.pass "$SIGNALS"/*.fail "$SIGNALS"/*.blocked; do
  [ -f "$done_file" ] || continue
  base=$(basename "$done_file")
  # strip extension to compute ack key
  key="${base%.*}"
  ack_file="$SIGNALS/${key}.ack"
  if [ ! -f "$ack_file" ]; then
    pending_count=$((pending_count + 1))
    mtime=$(stat -f '%Sm' -t '%H:%M:%S' "$done_file" 2>/dev/null || stat -c '%y' "$done_file" 2>/dev/null | cut -d' ' -f2 | cut -d. -f1)
    echo ""
    echo "  [$mtime] $base   ⟵  needs ${key}.ack"
    head -20 "$done_file" | sed 's/^/      /'
  fi
done

if [ $pending_count -eq 0 ]; then
  echo "  (none — all signals acknowledged)"
fi

echo ""
echo "── ACKED (already handshaked) ──────────────────────────────────"
acked_count=0
for ack_file in "$SIGNALS"/*.ack; do
  [ -f "$ack_file" ] || continue
  acked_count=$((acked_count + 1))
  base=$(basename "$ack_file")
  result=$(grep '^RESULT:' "$ack_file" 2>/dev/null | head -1 || echo "RESULT: ?")
  echo "  $base   $result"
done
[ $acked_count -eq 0 ] && echo "  (none yet)"
