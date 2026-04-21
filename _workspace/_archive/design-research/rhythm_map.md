# Layout Rhythm Map / 레이아웃 리듬 지도

> PRD §4.2 원칙 1 "섹션마다 다른 리듬" 을 코드화한 매트릭스.
> 동일한 `density × alignment` 조합이 **연속 2회 반복되면 안 된다** (Don't rule).
> Source: PRD-redesign.md §6.1 / §6.2 / §6.3 / §6.4

## 1. Rhythm Vocabulary (리듬 어휘)

| Axis | Values |
|---|---|
| **Density (밀도)** | `dense` — 정보 밀집, 리스트·타임라인·태그 클라우드 / `sparse` — 여백 중심, 히어로·배너 / `mixed` — 독서 영역 |
| **Alignment (정렬)** | `left` — 좌측 앵커 / `center` — 중앙 정렬 / `sticky` — 좌 스티키 + 우 스크롤 / `timeline` — 수직선 기준 교차 / `full-bleed` — 뷰포트 풀블리드 |
| **Motion Lead (주도 모션)** | I1~I8 중 그 섹션에서 **가장 크게** 쓰이는 1개 (PRD 원칙 5 "섹션당 크게 1개") |

---

## 2. Landing Page Rhythm Map (`/ko/`, `/en/`)

| Order | Section | Density | Alignment | Motion Lead | Sub Motions | Visual Anchor |
|:--:|---|:--:|:--:|:--:|:--:|---|
| 1 | **Hero** | sparse | full-bleed | I5 (split text) | I2, I3, I4, I7 | 거대 타이포 + 그라디언트 백드롭 + 카운트업 |
| 2 | **About** | dense | left (4+7 비대칭) | I1 | — | 대형 인용구 + 스킬 태그 |
| 3 | **Methodology** | dense | sticky (좌 타이틀 / 우 스텝) | I1 | I6 | 긴 스크롤 스텝 스티키 |
| 4 | **Capabilities** | sparse | center | I1 (SVG path draw) | — | 레이더 폴리곤, 선이 그려짐 |
| 5 | **Projects** | sparse | full-bleed | I8 (3D tilt) | I1, I6 | 풀블리드 컬러 배너 + 오버레이 타이포 |
| 6 | **Journey** | dense | timeline (수직 교차) | I1 (line progress) | — | 수직 타임라인, 좌우 교차 |
| 7 | **Skills** | dense | left (tag cloud) | I1 | — | 카테고리 헤더 + 태그 클라우드 |
| 8 | **Certifications** | sparse | left (single-line list) | I1 | — | 한 줄 1개, 좌 아이콘 + 우 메타 |
| 9 | **Contact** | sparse | center | I3 (magnetic CTA) | I1 | 마그네틱 버튼 |
| 10 | **Footer** | dense | left | — | I1 | 미세 호버 |

### 2.1 반복 검증 (Don't-repeat matrix)

인접한 섹션 간 `density × alignment` 동일 여부:

| 경계 | 이전 | 다음 | 중복? |
|---|---|---|:--:|
| 1→2 | sparse/full-bleed | dense/left | ✅ 다름 |
| 2→3 | dense/left | dense/sticky | ✅ 다름 (alignment 변화) |
| 3→4 | dense/sticky | sparse/center | ✅ 다름 |
| 4→5 | sparse/center | sparse/full-bleed | ✅ 다름 (alignment 변화) |
| 5→6 | sparse/full-bleed | dense/timeline | ✅ 다름 |
| 6→7 | dense/timeline | dense/left | ✅ 다름 (alignment 변화) |
| 7→8 | dense/left | sparse/left | ✅ 다름 (density 변화) |
| 8→9 | sparse/left | sparse/center | ✅ 다름 (alignment 변화) |
| 9→10 | sparse/center | dense/left | ✅ 다름 |

**모든 경계 통과. 랜딩 페이지 리듬 맵은 PRD §4.2 원칙 1을 만족한다.**

---

## 3. Project Detail Rhythm Map (`/ko/projects/*`, `/en/projects/*`)

| Order | Section | Density | Alignment | Motion Lead | Note |
|:--:|---|:--:|:--:|:--:|---|
| 1 | **Hero 블록** | sparse | full-bleed | I5 | 풀블리드 컬러 블록 + 오버레이드 거대 타이포 |
| 2 | **Meta Side Rail** (조건부) | dense | sticky (좌 레일) | — | Phase 4 P4.1 결정 |
| 3 | **Overview / Problem** | mixed | left | I1 | 본문 블록 |
| 4 | **Solution / Process** | mixed | left | I1 | 본문 + ColorPlaceholder |
| 5 | **Impact / Metrics** | dense | center | I2 (카운트업) | 숫자 강조 |
| 6 | **Next Project CTA** | sparse | full-bleed | I3 | 하단 풀블리드 링크 |

---

## 4. Blog Index Rhythm Map (`/ko/blog/`, `/en/blog/`, `/blog/`)

| Order | Section | Density | Alignment | Motion Lead |
|:--:|---|:--:|:--:|:--:|
| 1 | Category filter rail | dense | left (chip bar) | — |
| 2 | **Featured hero card** (최신 1개) | sparse | full-bleed | I1 |
| 3 | **Rest list** (조밀 리스트) | dense | left | I1 (staggered) |

---

## 5. Blog Detail Rhythm Map (`/ko/blog/[slug]`, etc.)

| Order | Section | Density | Alignment | Motion Lead |
|:--:|---|:--:|:--:|:--:|
| 1 | Progress bar (상단) | — | full-bleed | I7 |
| 2 | Hero (제목 + 메타) | sparse | center | I1 |
| 3 | Sticky TOC (조건부, ≥2 headings) | dense | sticky (좌 또는 우) | — |
| 4 | 본문 66ch | mixed | center | I1 (최소) |

**본문 내 인터랙션은 의도적으로 최소** (PRD §6.4: "집중 방해 금지").

---

## 6. Rhythm Do's & Don'ts

### Do
- ✅ 인접 섹션은 density 또는 alignment 중 **최소 하나**를 반드시 바꾼다
- ✅ 섹션당 "크게 움직이는" 모션은 **1개만** (Motion Lead)
- ✅ full-bleed는 페이지당 2~3회만 (Hero, Projects, Next CTA)
- ✅ sticky는 "긴 스크롤이 정당한 섹션"에서만 (Methodology, Meta Rail, TOC)

### Don't
- ❌ 동일 `density × alignment` 를 연속 2회 반복 (시각적 단조)
- ❌ 카드 그리드를 모든 섹션에 복제 (Journey는 timeline, Certifications는 list)
- ❌ 모든 섹션 중앙 정렬 (좌/풀블리드/스티키 혼합 필수)
- ❌ full-bleed를 4회 이상 사용 (피로감)
- ❌ 블로그 본문에 마그네틱/틸트 삽입 (독서 방해)

---

## 7. 이력서 페이지 선언 (C9 / AC2)

이력서 페이지(`/ko/resume`, `/en/resume`, `resume-pdf`)는 **이 리듬 맵 적용 대상이 아니다**. 현재 레이아웃·리듬·모션을 **그대로 보존**하며 Phase 3~6 작업 범위에서 제외된다.
