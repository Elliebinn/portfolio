---
name: verify-resume-untouched
description: "이력서 페이지(/ko/resume, /en/resume, resume-pdf 및 그 의존 컴포넌트)가 현재 작업 브랜치에서 시각적·코드적으로 0 변화임을 검증한다. PRD AC2와 C9, 리스크 R1을 강제하는 게이트. 이력서 회귀가 단 1픽셀이라도 감지되면 작업 중단 신호를 보낸다. Phase 종료마다, dead code 삭제 직후, 그리고 motion 컴포넌트가 글로벌 CSS를 건드릴 때 반드시 호출한다."
---

# Verify Resume Untouched

이력서 페이지의 시각적/코드적 회귀 0을 강제 검증하는 게이트. visual-qa가 모든 Phase 종료에서 호출하고, deadcode-auditor가 삭제 후 즉시 호출한다.

## 왜 이 스킬이 필요한가

- PRD가 가장 강하게 강조하는 제약: 이력서는 "건드리지 않음"이 아니라 "0 변화 증명"
- 글로벌 CSS, 공통 컴포넌트, 토큰 변경 등 간접 경로로도 회귀가 발생할 수 있다
- 사람 눈으로 전/후 비교는 누락이 잦으므로 자동화가 필수

## 검증 대상

**페이지:**
- `src/pages/ko/resume.astro`
- `src/pages/en/resume.astro`
- `src/pages/ko/resume-pdf.astro` (존재 시)
- `src/pages/en/resume-pdf.astro` (존재 시)

**의존 컴포넌트:** 위 페이지들이 import하는 모든 컴포넌트 (사전 grep으로 추출)

## 절차

### 1단계 — 코드 diff 검증

```bash
# 작업 시작 시점의 베이스 커밋 (예: HEAD~N 또는 branch base)
git diff --stat <base> -- src/pages/ko/resume.astro src/pages/en/resume.astro
git diff --stat <base> -- src/pages/ko/resume-pdf.astro src/pages/en/resume-pdf.astro 2>/dev/null
```

- 결과가 비어 있어야 PASS
- 변경 라인이 1개라도 있으면 FAIL → pm-orchestrator에 즉시 알림

### 2단계 — 의존 컴포넌트 추출 + diff

```
Read 이력서 페이지 → import 문 추출 → 각 컴포넌트 경로 git diff
```

- 의존 컴포넌트가 변경되었어도 이력서 렌더링이 동일하다면 시각 비교(3단계)에서 최종 판정

### 3단계 — 시각 비교 (frontend-checkpoint 또는 screenshot 스킬)

```
1. git stash (현재 작업 보존)
2. base 커밋 체크아웃 (또는 main)
3. 이력서 페이지 4개 스크린샷 (모바일 + 데스크톱)
4. 작업 브랜치 복귀 + git stash pop
5. 동일 페이지 재촬영
6. pixelmatch 또는 동등 도구로 diff
```

- diff 픽셀 0 → PASS
- diff 픽셀 > 0 → FAIL, diff 이미지를 `_workspace/qa/resume_regression_*.png`에 저장

### 4단계 — 빌드 산출물 비교 (선택)

`dist/ko/resume/index.html`과 `dist/en/resume/index.html`의 HTML diff. 토큰만 비교하면 빠르다.

## 산출물

```
_workspace/qa/
  resume_diff_phase_{N}.txt          # git diff 결과 (반드시 empty)
  resume_screenshots_phase_{N}/       # before/after 캡처
  resume_visual_diff_phase_{N}.md    # 판정 (PASS/FAIL + 증거)
```

## 출력 형식

```markdown
# Resume Regression Check — Phase {N}

- Code diff: PASS (0 lines changed)
- Component diff: PASS (no dependent component touched) | FAIL (Hero.tsx changed but resume rendering identical via visual)
- Visual diff (mobile): PASS (0 pixels)
- Visual diff (desktop): PASS (0 pixels)

**Verdict: PASS** — 이력서 회귀 없음
```

## 사용 도구

- Bash (git, diff)
- Read, Grep (의존성 추출)
- 스킬 폴백: `frontend-checkpoint`, `screenshot`
- Write (리포트)

## 호출 예시

```
"이력서 회귀 체크해줘"
"Phase 3 끝났으니 resume verification"
"editorial 삭제 후 이력서 안 깨졌는지 확인"
```

## 실패 시 대응

FAIL이면:
1. 즉시 pm-orchestrator에 SendMessage
2. 어느 단계(코드/의존/시각)에서 FAIL인지 명시
3. diff 증거 경로 첨부
4. 작업 중단 권고
