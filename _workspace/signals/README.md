# Worker Signals — Sentinel 프로토콜

이 디렉토리는 **팀원 ↔ pm-orchestrator 사이의 유일한 신뢰 채널**입니다.
tmux capture-pane은 휘발성이라 신뢰할 수 없고, OMC 팀 SendMessage도
외부 `claude --agent` 프로세스에는 닿지 않습니다. 진실은 항상 여기에 있습니다.

## 파일명 규칙

```
{phase}_{step}_{worker}.{status}
```

- `phase`: p0, p1, p2, …
- `step`: p0.1, p0.2, …
- `worker`: design-architect, frontend-executor, motion-engineer, visual-qa, deadcode-auditor
- `status`:
  - `done` — 작업 완료, 후속 작업 가능
  - `pass` — 검증 결과 PASS (visual-qa 등)
  - `fail` — 검증 결과 FAIL (visual-qa 등)
  - `blocked` — 작업 중 차단, 수동 개입 필요

## 파일 내용 (필수)

각 signal 파일은 **반드시** 다음 항목을 포함한 plain text:

```
TASK: {phase}.{step} {짧은 설명}
WORKER: {worker name}
STATUS: done | pass | fail | blocked
TIMESTAMP: {ISO 8601}
COMMIT: {git rev-parse HEAD if relevant else "n/a"}
ARTIFACTS:
  - path1
  - path2
EVIDENCE: {한 줄 검증 가능한 증거 — file count, line count, build pages, etc}
NEXT_HINT: {pm-orchestrator가 다음에 할 일에 대한 짧은 힌트}
```

## ACK 핸드셰이크 (필수)

워커는 `.done`을 쓰고 끝내지 않는다. **반드시 pm-orchestrator의 `.ack` 파일을
기다린 후에만** turn을 종료할 수 있다. 이렇게 해야 워커 pane이 살아 있는 동안
pm-orchestrator가 결과를 놓치지 않는다.

핸드셰이크 순서:
1. 워커: 작업 완료 → `signals/{step}_{worker}.done` 작성
2. 워커: 한 번의 Bash 호출로 ack 폴링 (블로킹, 최대 10분):
   ```bash
   for i in $(seq 1 60); do
     [ -f _workspace/signals/{step}_{worker}.ack ] && break
     sleep 10
   done
   cat _workspace/signals/{step}_{worker}.ack 2>/dev/null || echo "ACK_TIMEOUT"
   ```
3. 워커: ack 파일을 cat 으로 읽어 결과 확인 (PROCEED / RETRY / BLOCKED)
4. 워커: ack 의 RESULT 라인에 따라:
   - PROCEED → 정상 종료, idle
   - RETRY → ack 의 NOTE 를 읽고 수정 작업 후 다시 .done 작성 (동일 핸드셰이크 반복)
   - BLOCKED → idle 상태로 다음 지시 대기 (pm-orchestrator가 새 메시지 보냄)

핸드셰이크를 건너뛰고 idle 되면 pm-orchestrator가 작업을 "유실"로 간주하고 재할당한다.

## ACK 파일 형식 (pm-orchestrator → worker)

파일명: `signals/{step}_{worker}.ack`
내용:
```
TASK: {원래 task}
WORKER: {worker name}
RESULT: PROCEED | RETRY | BLOCKED
ACK_BY: pm-orchestrator
ACK_TIMESTAMP: {ISO 8601}
VERIFIED:
  - git log: {commit hash 확인 결과}
  - files: {파일 존재/크기 확인 결과}
  - build: {빌드 결과 확인}
NOTE: {RETRY 면 무엇을 고쳐야 하는지, PROCEED 면 다음 단계 힌트}
```

## 워커 의무

1. `.done` 작성 후 반드시 `.ack` 폴링
2. ACK_TIMEOUT 시에도 idle 금지 — "ACK_TIMEOUT" 한 줄 출력 후 추가 지시 대기
3. signal 없이 idle 되면 작업 완료 인정 안 됨

## pm-orchestrator 의무

1. 작업 지시 시 signal 파일명 + ack 폴링 명령 명시
2. `signals/` 폴더를 주기적으로 polling (`scripts/team-status.sh` 또는 `ls _workspace/signals/`)
3. 새 `.done` 발견 즉시:
   - 디스크 증거 검증 (git log, ls, 파일 내용)
   - PROCEED 면 `.ack` 작성 + 다음 단계 dispatch
   - RETRY 면 `.ack` 에 수정 지시 작성 (워커 자동 재시도)
   - BLOCKED 면 `.ack` 작성 + 사용자에게 보고
4. 사용자 보고 시 반드시 signal/ack 내용 + git log/ls 디스크 증거 함께 첨부
