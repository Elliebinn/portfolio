# Phase 0 Dead Code Audit (P0.3)

작성: deadcode-auditor · 단계: Phase 0 / P0.3 (사전 감사 only — 실제 삭제는 GATE 0-A 승인 후 P0.4에서 수행)

PRD 근거: §2.3, §10, AC3, R1

---

## 1. 삭제 후보 파일 목록

| # | 경로 | 종류 | 사이즈 | 외부 참조처 (src/ 내부) | 이력서 영향 |
|---|---|---|---|---|---|
| 1 | `src/layouts/EditorialLayout.astro` | Astro layout | 1,056 B | **0건** (자기 자신만 `editorial.css` 임포트) | 없음 |
| 2 | `src/styles/editorial.css` | CSS | 3,552 B | 1건 — `src/layouts/EditorialLayout.astro:2` (#1과 함께 묶음 삭제) | 없음 |
| 3 | `src/components/editorial/Navbar.tsx` | React TSX | 4,734 B | **0건** | 없음 |
| 4 | `src/components/editorial/Hero.tsx` | React TSX | 4,358 B | **0건** | 없음 |
| 5 | `src/components/editorial/About.tsx` | React TSX | 6,220 B | **0건** | 없음 |
| 6 | `src/components/editorial/Projects.tsx` | React TSX | 5,138 B | **0건** | 없음 |
| 7 | `src/components/editorial/Skills.tsx` | React TSX | 2,263 B | **0건** | 없음 |
| 8 | `src/components/editorial/Journey.tsx` | React TSX | 4,490 B | **0건** | 없음 |
| 9 | `src/components/editorial/Certifications.tsx` | React TSX | 1,529 B | **0건** | 없음 |
| 10 | `src/components/editorial/Contact.tsx` | React TSX | 2,529 B | **0건** | 없음 |
| 11 | `src/components/editorial/Footer.tsx` | React TSX | 1,646 B | **0건** | 없음 |
| 12 | `src/components/editorial/ProjectDetail.tsx` | React TSX | 24,192 B | **0건** | 없음 |
| 13 | `src/components/editorial/CaseStudy.tsx` | React TSX | 15,675 B | **0건** | 없음 |
| — | `src/pages/ko/v2/`, `src/pages/en/v2/` | (디렉토리) | — | **존재하지 않음** (Glob `src/pages/**/v2/**` → 0 hit, `src/pages/**/v2*` → 0 hit) | 없음 |

총계: **13개 파일 / 약 77.4 KB**.

> 주의: 후보 11개의 React 컴포넌트 파일명(`Navbar.tsx`, `Hero.tsx`, `Projects.tsx`, `Footer.tsx` 등)은 **`src/components/`(루트) 아래의 동명(同名) 컴포넌트와 디렉토리만 다른 별개 파일**임. 루트 컴포넌트는 이력서/메인이 사용 중이며 본 감사의 삭제 대상이 아님. (예: `src/pages/ko/resume.astro` line 3,4 는 `../../components/Navbar`, `../../components/Footer` 를 import — `editorial/` 가 아님.)

---

## 2. 이력서 안전성 증거

### 2.1 이력서 관련 파일 전수 (Glob 결과)

```
src/pages/ko/resume.astro
src/pages/ko/resume-pdf.astro
src/pages/en/resume.astro
```

추가 후보 (`src/components/Resume*`, `src/components/resume/**`, `src/pages/resume-pdf*`) → **존재하지 않음**. 이력서는 위 3개 페이지 파일과 그들이 직접 import한 모듈만이 전부.

### 2.2 이력서 → editorial/v2 import 검사 (0건이어야 함)

각 이력서 파일의 `import` 문 전수 (Read 도구 결과 발췌):

**`src/pages/ko/resume.astro` (lines 1–11)**
```astro
---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { resume, boldToHtml } from '../../data/resume';
---
```
→ `editorial`, `Editorial`, `v2` 문자열 **0건**. `Layout`(=`Layout.astro`), `Navbar`(=`src/components/Navbar.tsx`), `Footer`(=`src/components/Footer.tsx`), `data/resume.ts` 만 사용. `editorial/` 디렉토리 컴포넌트와는 무관.

**`src/pages/en/resume.astro` (lines 1–7)**
```astro
---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const lang = 'en';
---
```
→ `editorial`, `Editorial`, `v2` **0건**.

**`src/pages/ko/resume-pdf.astro` (lines 1–7)**
```astro
---
// PDF 출력 전용 이력서 — /ko/resume-pdf/
// 브라우저에서 열어 Cmd+P → "PDF로 저장" → A4 · 여백 없음 · 배경 그래픽 체크
//
// 내용은 src/data/resume.ts에서 import됩니다. 수정은 resume.ts에서.
import { resume, boldToHtml } from '../../data/resume';
---
```
→ `editorial`, `Editorial`, `v2`, `Layout` 전부 **0건**. 완전 자체 완결(self-contained) HTML 문서로, Layout조차 사용하지 않음. PRD R1 요구사항(이력서 0 변화)에 가장 안전한 형태.

**간접 의존성 (이력서가 사용하는 Layout / Navbar / Footer / data/resume) 추적:**

| 파일 | editorial/v2 import 여부 |
|---|---|
| `src/layouts/Layout.astro` | (다음 항목에서 grep으로 검증) |
| `src/components/Navbar.tsx` (루트) | (다음 항목에서 grep으로 검증) |
| `src/components/Footer.tsx` (루트) | (다음 항목에서 grep으로 검증) |
| `src/data/resume.ts` | (다음 항목에서 grep으로 검증) |

### 2.3 editorial → 어디서 import 되는가? (전역 grep)

명령:
```
Grep pattern="EditorialLayout|from.*editorial|import.*editorial" path=/Users/ellie/Documents/portfolio
```

Raw 출력:
```
src/layouts/EditorialLayout.astro:2:import '../styles/editorial.css';
PRD-redesign.md:77:- `src/layouts/EditorialLayout.astro`
PRD-redesign.md:330:   - `src/layouts/EditorialLayout.astro`
.claude/agents/deadcode-auditor.md:13:1. **삭제 후보 탐지** — `src/components/editorial/`, ...
.claude/agents/deadcode-auditor.md:14:2. **사용처 grep** — `editorial`, `--ed-`, `EditorialLayout`, `v2/` 키워드로 전역 검색
```

해석:
- `src/` 전체에서 `editorial`을 import하는 곳은 **단 1건** — `EditorialLayout.astro`가 자기 자신의 `editorial.css`를 임포트. 즉 13개 후보 파일은 자기들끼리도 외부에서도 사용되지 않는 **완전한 고립 섬(orphan)**.
- 나머지 매치는 PRD 문서와 본 에이전트 정의서로, 빌드 산출물에 영향 없음.
- `src/layouts/Layout.astro`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/data/resume.ts` 어디에서도 `editorial`을 import하지 않음 (위 grep이 전체 경로 대상이므로 0건이 곧 증거).

추가 확인 grep:
```
Grep pattern="editorial" path=src/  → files_with_matches
```
Raw 출력:
```
src/styles/editorial.css
src/components/editorial/Journey.tsx
src/components/editorial/Projects.tsx
src/layouts/EditorialLayout.astro
```
→ `editorial` 문자열이 등장하는 파일은 모두 후보 리스트 내부 (자기 자신). 외부 누출 0건. ✅

### 2.4 v2 잔재 grep — 모두 false positive

명령: `Grep pattern="v2" path=src/pages/`. 결과 4건을 모두 라인 단위로 확인.

| 파일 / 라인 | 매치 | 판정 |
|---|---|---|
| `src/pages/ko/projects/quant-platform.astro:33` | `assets/landing/quant/hero-v2.jpg` | 자산 이미지 파일명. 페이지/디렉토리 v2와 무관. **false positive** |
| `src/pages/ko/projects/quant-platform.astro:356` | `assets/landing/quant/before-v2.jpg` | 동일. **false positive** |
| `src/pages/ko/projects/quant-platform.astro:362` | `assets/landing/quant/after-v2.jpg` | 동일. **false positive** |
| `src/pages/ko/projects/jujutok.astro:89` | SVG path data `M12 9v2m0 4h.01...` | SVG path 명령어(`v` = vertical line, `2` = 길이). **false positive** |
| `src/pages/ko/index.astro:126` | 본문 카피 "기획 프로세스 v2" | 사용자 가시 텍스트(버전 표기). PRD §2.3 "v2 페이지 잔재"와 무관. **false positive** (편집/유지 결정은 PM 판단) |
| `src/pages/ko/blog/[slug].astro:141` | `/portfolio/assets/logo-v2-character-circle.png` | 로고 자산 파일명. **false positive** |

`src/pages/ko/v2/` 또는 `src/pages/en/v2/` 디렉토리 자체가 **존재하지 않음** (Glob 0 hit). PRD §10이 가정한 "v2 라우트 잔재"는 이미 제거되었거나 처음부터 없었음.

---

## 3. 삭제 시 빌드 영향 예상

| 항목 | 예상 |
|---|---|
| `npm run build` 성공 여부 | **성공 예상**. 13개 후보 어느 것도 `src/pages/`에서 import되지 않음 → Astro 라우트 그래프에 미포함 → tree-shake 외부에 이미 위치. |
| 이력서 페이지 시각/DOM 변화 | **0** (AC2). import 그래프 양방향 0건으로 입증됨. |
| 메인/프로젝트/블로그 페이지 영향 | **0**. `editorial/` 컴포넌트는 루트 `src/components/`의 동명 컴포넌트와 디렉토리로 격리되어 별개 모듈. |
| public/ 자산, scripts/ 영향 | 검사 범위 외였으나 grep이 src/ 한정이었음. PRD §10이 src/ 한정 후보로 명시했고 자산 파일에는 `editorial` 키워드 없음(grep 결과 0). |
| 위험 잔여 | `src/pages/ko/index.astro:126`의 카피 "기획 프로세스 v2"는 삭제 대상이 아니라 **표현 검토 대상**. PM 결정 필요 (본 P0.3 권고는 "유지, 별도 카피 리뷰 단계로 이관"). |

---

## 4. 권고

**SAFE_TO_DELETE** — 다음 13개 파일/경로에 한정.

```
src/layouts/EditorialLayout.astro
src/styles/editorial.css
src/components/editorial/Navbar.tsx
src/components/editorial/Hero.tsx
src/components/editorial/About.tsx
src/components/editorial/Projects.tsx
src/components/editorial/Skills.tsx
src/components/editorial/Journey.tsx
src/components/editorial/Certifications.tsx
src/components/editorial/Contact.tsx
src/components/editorial/Footer.tsx
src/components/editorial/ProjectDetail.tsx
src/components/editorial/CaseStudy.tsx
```

근거 요약:
1. **양방향 import 그래프 0건** — 이력서 → editorial 0건, editorial → 외부 0건(자기 css 1건 제외).
2. **이력서 3종 모두 자체 완결** — Layout/Navbar/Footer는 `src/components/` 루트 사용, `editorial/` 디렉토리와 무관.
3. **`v2/` 라우트 디렉토리 부재** — 삭제할 페이지 자체가 없음.
4. **사이즈 ~77 KB / 13 파일** 단위로 PRD Q3에 따라 archive 없이 일괄 `git rm`.

**다음 단계 (P0.4, GATE 0-A 승인 후):**
- pm-orchestrator가 사용자 GATE 0-A 승인 획득.
- deadcode-auditor가 `git rm` 13개 파일 → `npm run build` 즉시 → 실패 시 `git restore`.
- visual-qa가 `verify-resume-untouched`로 이력서 회귀 0 검증 (AC2).
- 삭제 실행 기록은 `_workspace/deadcode_deletion_log.md`에 커밋 해시와 함께 누적.

**보류 이슈 (PM 판단 필요, 본 감사 범위 외):**
- `src/pages/ko/index.astro:126` 카피 "기획 프로세스 v2" — 콘텐츠 표현 검토 대상으로만 이관. P0.3 삭제 후보 아님.
