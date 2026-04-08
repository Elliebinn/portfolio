---
name: prd-phase-runner
description: "PRD-redesign.md의 Phase 0~7을 팀 모드로 실행하는 오케스트레이터. pm-orchestrator를 리더로 design-architect/frontend-executor/motion-engineer/visual-qa/deadcode-auditor 5명을 TeamCreate으로 묶고, Phase별 작업을 TaskCreate으로 분배한다. 사용자 승인 게이트와 acceptance criteria 검증을 강제한다. PRD 실행, Phase 시작, 디자인 리뉴얼 작업을 시작하면 반드시 이 스킬을 사용한다."
---

# PRD Phase Runner

`PRD-redesign.md`를 실행 가능한 팀 작업으로 풀어내는 메인 오케스트레이터.

## 역할

이 스킬은 Phase별 팀 구성·작업 분배·게이트·산출물 위치를 정의한다. pm-orchestrator가 이 스킬을 따라 실제 팀을 운영한다.

## 필수 규칙 — 도구 선택

> **절대로 Agent 도구(서브에이전트)를 사용하지 마라.**
> **반드시 TeamCreate 도구로 팀을 구성하라.**
>
> TeamCreate를 사용해야 각 팀원이 독립 프로세스로 tmux pane에 표시되어
> 사용자가 실시간으로 진행 상황을 볼 수 있다. Agent 도구는 내부 서브프로세스로
> 돌아가서 사용자에게 보이지 않는다. 이 규칙은 예외 없이 항상 적용된다.

## 전제 조건

- `portfolio/.claude/agents/`에 6개 에이전트 정의 존재 (pm-orchestrator, design-architect, frontend-executor, motion-engineer, visual-qa, deadcode-auditor)
- `PRD-redesign.md` 루트에 존재
- **tmux 세션 `portfolio-claude` 가 미리 떠 있어야 한다** — `./setup-harness.sh dev`로 생성. 6개 pane이 tiled로 배치되고 각 pane이 `claude --agent <name>` 으로 독립 실행 중이어야 한다.
- 현재 활성 pane은 `pm-orchestrator` (leader pane). 사용자가 "Phase 0 시작" 또는 "PRD 실행" 신호를 보냄

## 팀 구성 (모든 Phase 공통)

```
TeamCreate({
  team_name: "portfolio-redesign",
  leader: "pm-orchestrator",
  members: [
    "design-architect",
    "frontend-executor",
    "motion-engineer",
    "visual-qa",
    "deadcode-auditor"
  ],
  model: "opus"
})
```

> **시각화**: tmux 세션 `portfolio-claude`의 6개 pane이 각 팀원에 1:1 매핑된다. TeamCreate 호출 시 각 멤버는 해당 pane(독립 `claude --agent <name>` 프로세스)에서 실행되며, 사용자는 한 화면에서 6명 전원의 작업을 실시간으로 본다.

## Phase별 워크플로우

### Phase 0 — Prep (코드 변경 없음 + 안전 삭제)

| 작업 | 담당 | 의존 | 산출물 |
|---|---|---|---|
| P0.1 토큰 전수 추출 | design-architect | — | `_workspace/design_tokens_extracted.json` |
| P0.2 DESIGN.md 초안 (한/영) | design-architect | P0.1 | `DESIGN.md` |
| P0.3 dead code 후보 + 안전 검증 | deadcode-auditor | — | `_workspace/deadcode_audit.md` |
| **GATE 0-A** | pm-orchestrator | P0.2, P0.3 | 사용자 승인 (DESIGN.md + 삭제 리스트) |
| P0.4 dead code 일괄 삭제 | deadcode-auditor | GATE 0-A | git rm + 빌드 검증 |
| P0.5 이력서 회귀 + 빌드 검증 | visual-qa | P0.4 | `_workspace/qa/phase_0_*` |
| **GATE 0-B** | pm-orchestrator | P0.5 | AC2/AC3/AC9 PASS 확인 |

**호출 스킬:** `extract-design-tokens`, `verify-resume-untouched`

### Phase 1 — Motion Foundation

| 작업 | 담당 | 산출물 |
|---|---|---|
| P1.1 `npm install motion` | frontend-executor | package.json |
| P1.2 `useReducedMotion.ts` | motion-engineer | hook |
| P1.3 8개 모션 컴포넌트 작성 | motion-engineer | I1~I8 |
| P1.4 단위 시각 확인 (storybook 없음 → dev 서버 페이지) | motion-engineer + visual-qa | 캡처 |
| GATE 1 | visual-qa | AC5 + AC9 + `motion-reduce-audit` 0 FAIL |

**호출 스킬:** `motion-reduce-audit`

### Phase 2 — ColorPlaceholder

| 작업 | 담당 | 산출물 |
|---|---|---|
| P2.1 ColorPlaceholder 4 variant | frontend-executor | component |
| P2.2 이미지 위치 인벤토리 | frontend-executor | `_workspace/image_inventory.md` |
| P2.3 임시 교체 (1차) | frontend-executor | 페이지 수정 |
| P2.4 IMAGES-WISHLIST.md | design-architect + frontend-executor | 루트 파일 |
| GATE 2 | visual-qa | AC9 + 깨진 이미지 0 + `verify-resume-untouched` |

### Phase 3 — Landing Redesign

| 작업 | 담당 |
|---|---|
| P3.1~P3.9 9개 섹션 재설계 | frontend-executor (구현) + motion-engineer (모션 통합) |
| P3.10 I1/I7 전역 적용 | motion-engineer |
| GATE 3 | visual-qa: AC5/AC9/AC11/AC12 + 이력서 회귀 + Lighthouse smoke test |

> 9개 섹션은 한 번에 몰지 않고 3개 단위로 끊어서 GATE 미니체크. frontend-executor 큐가 너무 길면 design-architect 협업.

### Phase 4 — Project Detail

| 작업 | 담당 |
|---|---|
| P4.1 메타 필드 사전 조사 (jujutok, quant-platform 모두) | frontend-executor → 결과 보고 |
| **GATE 4-A** | pm-orchestrator: 메타 필드 존재 여부에 따라 사이드 레일 구현 분기 결정 (사용자 결정 또는 자동) |
| P4.2~P4.6 구현 | frontend-executor + motion-engineer |
| GATE 4-B | visual-qa: AC1(콘텐츠) + AC9 + 이력서 회귀 |

### Phase 5 — Blog Redesign

| 작업 | 담당 |
|---|---|
| P5.1 MDX heading 구조 샘플링 | frontend-executor |
| **GATE 5-A** | pm-orchestrator: TOC 자동 표시 임계값 결정 |
| P5.2~P5.6 구현 | frontend-executor + motion-engineer |
| GATE 5-B | visual-qa: AC13(MDX 렌더링) + AC1 + AC9 + 이력서 회귀 |

### Phase 6 — A11y & Polish

| 작업 | 담당 |
|---|---|
| P6.1 reduced-motion 전수 검증 | visual-qa (스킬: `motion-reduce-audit`) |
| P6.2 키보드 탐색 수동 테스트 | visual-qa |
| P6.3 스크린 리더 호환 | visual-qa + 글로벌 reviewer 협업 |
| P6.4 모바일 반응형 조정 | frontend-executor |
| P6.5 미세 폴리시 (`make-interfaces-feel-better` 스킬) | frontend-executor |
| GATE 6 | visual-qa: AC6 + AC8(≥95) + AC14 |

### Phase 7 — Final QA

| 작업 | 담당 |
|---|---|
| P7.1 빌드 | visual-qa (`npm run build`) |
| P7.2 Lighthouse Perf ≥80 | visual-qa |
| P7.3 frontend-checkpoint 전/후 비교 | visual-qa |
| P7.4 이력서 시각 변화 0 최종 | visual-qa (`verify-resume-untouched`) |
| P7.5 web-design-guidelines 감사 | visual-qa |
| P7.6 글로벌 reviewer 최종 리뷰 | pm-orchestrator → 글로벌 reviewer 호출 |
| **GATE 7 (FINAL)** | pm-orchestrator: AC1~AC14 전수 PASS 확인 후 사용자에게 완료 보고 |

## 데이터 전달 프로토콜

**조합:** 메시지 기반(SendMessage) + 태스크 기반(TaskCreate) + 파일 기반(`_workspace/`)

**파일 경로 컨벤션:**
```
_workspace/
  design_tokens_extracted.json
  design_tokens_summary.md
  rhythm_map.md
  deadcode_audit.md
  deadcode_deletion_log.md
  image_inventory.md
  status_phase_{N}.md
  acceptance_check_phase_{N}.md
  qa/
    phase_{N}_ac_check.md
    phase_{N}_screenshots/
    phase_{N}_lighthouse.json
    resume_diff_phase_{N}.txt
    resume_visual_diff_phase_{N}.md
    motion_reduce_audit.md
```

## 에러 핸들링

| 상황 | 대응 |
|---|---|
| 팀원 작업 1회 실패 | pm-orchestrator가 같은 팀원에게 1회 재시도 지시 |
| 재실패 | pm-orchestrator가 사용자에게 보고 + 대안 제시 (다른 팀원, 스코프 축소, 사용자 결정) |
| 이력서 회귀 감지 | 모든 작업 즉시 중단, git status/diff로 원인 추적, 사용자 보고 |
| AC 미달 | 해당 Phase GATE 차단, 누가 어떤 항목을 어떻게 수정해야 하는지 visual-qa가 명시 |
| 빌드 실패 | 마지막 변경 git revert 후 재시도, 원인 분석 보고 |
| 사용자 응답 대기 중 | pm-orchestrator는 새 작업 시작 금지 |

## 게이트 신호 (사용자에게 묻는 명시적 시점)

1. **GATE 0-A** — DESIGN.md 초안 + 삭제 리스트 검토
2. **GATE 4-A** — 메타 필드 부재 시 사이드 레일 생략 vs 본문 추출 결정
3. **GATE 5-A** — TOC heading 임계값
4. **GATE 7 (FINAL)** — 최종 머지/배포 승인

그 외 GATE(0-B, 1, 2, 3, 4-B, 5-B, 6)는 AC PASS 시 자동 진행, FAIL 시에만 사용자 통지.

## 테스트 시나리오

### 정상 흐름

```
사용자: "Phase 0 시작"
→ pm-orchestrator: TeamCreate("portfolio-redesign", ...)
→ design-architect: extract-design-tokens 호출 → JSON 저장
→ design-architect: DESIGN.md 초안 작성
→ deadcode-auditor: grep 감사 → audit 리포트
→ pm-orchestrator: GATE 0-A 사용자 승인 요청
→ 사용자: "OK"
→ deadcode-auditor: git rm + npm run build
→ visual-qa: phase_0 검증 (AC2/AC3/AC9)
→ pm-orchestrator: GATE 0-B 통과, Phase 1 진행 신호 대기
```

### 에러 흐름 — 이력서 회귀 감지

```
Phase 3 P3.10 직후
→ visual-qa: verify-resume-untouched 실행
→ 결과: FAIL (Hero.tsx의 글로벌 클래스가 resume에도 적용됨)
→ visual-qa → pm-orchestrator: 즉시 알림 + diff 첨부
→ pm-orchestrator: TaskUpdate으로 frontend-executor 작업 일시중단
→ pm-orchestrator → frontend-executor: 글로벌 클래스를 컴포넌트 스코프로 변경
→ frontend-executor: 수정 → 빌드
→ visual-qa: 재검증 → PASS
→ Phase 3 GATE 진행
```

## 호출 예시

```
"PRD 실행 시작"
"Phase 0 GO"
"디자인 리뉴얼 시작해줘"
"prd-phase-runner Phase 1"
```
