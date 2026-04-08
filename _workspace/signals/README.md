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

## 워커 의무

작업이 끝나면 **반드시** 마지막 단계로 signal 파일을 생성한 후에만
"completed"를 외칠 수 있습니다. signal 없이 끝났다고 말하면 pm-orchestrator는
재작업을 지시합니다.

## pm-orchestrator 의무

1. 작업 지시 시 signal 파일명을 명시
2. 작업 결과 보고 시 반드시 signal 파일 내용을 인용 (chat 한 줄에 의존 금지)
3. 사용자에게 보고할 때 디스크 증거(git log, ls)를 함께 첨부
