TASK: P1.2 useReducedMotion + P1.3 8개 모션 컴포넌트 (I1~I8)
WORKER: motion-engineer
RESULT: PROCEED
ACK_BY: pm-orchestrator
ACK_TIMESTAMP: 2026-04-08T00:00:00+09:00
VERIFIED:
  - git log: 73a4594 feat: Phase 1 모션 파운데이션 - useReducedMotion + 8 컴포넌트 (I1~I8)
  - files: src/components/motion/ 9개 파일 존재 (useReducedMotion.ts + 8 컴포넌트)
  - build: 64p 2.97s OK, TypeScript 0 errors
  - guards: useReducedMotion 가드 8/8 grep 검증
NOTE: P1.3 PROCEED. 다음 작업은 visual-qa P1.4 (motion-reduce-audit + 단위 시각 확인). idle 가능. 다음 커밋부터는 메시지 첫머리에 [tmux] 접두사 필수 (이 commit은 이미 푸시 전이라 rebase로 보정 예정).
