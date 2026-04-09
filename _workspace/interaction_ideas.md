# Interaction & UI Pattern Ideas for Phase 4~5

> **Target pages:** Project Detail, Blog List, Blog Detail
> **Sources:** 21st.dev, awesome-design-md (Linear, Vercel, Notion, Stripe, Framer, Raycast, Superhuman, Cursor), PRD §4.1 references (Linear, Vercel, Rauno, Emil Kowalski)
> **Constraint:** Must respect DESIGN.md §7 Do's/Don'ts, §10 Motion Language, §11 Rhythm Map

---

## A. Project Detail Page (`/ko/projects/*`, `/en/projects/*`)

### A1. Hero Section Scroll-Fade

- **이름:** Hero Parallax Dissolve
- **적용:** Project detail hero section
- **효과:** Hero section의 gradient backdrop + title이 스크롤 시 점진적으로 opacity 0 + translateY(-20px)로 사라지며 아래 본문이 올라옴. Vercel 스타일의 "hero dissolves into content" 패턴.
- **난이도:** 쉬움
- **기존 컴포넌트:** `ScrollProgress` (I7) 훅의 scroll value를 hero opacity에 연동. 신규 컴포넌트 불필요.
- **참고:** Vercel hero section, Linear hero dissolve. 21st.dev의 `scroll-fade-header` 패턴.

### A2. Metric Counter Animation

- **이름:** Impact Metrics CountUp
- **적용:** Project detail "By The Numbers" 섹션 (현재 static)
- **효과:** Metrics 섹션의 숫자가 viewport 진입 시 0에서 최종값까지 카운트업. "83%", "38개" 등. 숫자 뒤의 단위(%, 개, +)는 카운트 시작부터 표시.
- **난이도:** 쉬움
- **기존 컴포넌트:** `CountUp` (I2) 그대로 재사용. 현재 Hero에만 적용되어 있으므로 project detail metrics에 추가 적용만 하면 됨.
- **참고:** Linear metrics section, Notion metric cards. PRD §6.2 "Impact / Metrics → dense · center · I2".

### A3. Walkthrough Step Stagger Reveal

- **이름:** Staggered Step Reveal
- **적용:** Project detail "How It Works" walkthrough steps
- **효과:** 현재 모든 step이 한 번에 보임. 각 step을 `ScrollReveal` + staggered delay (0, 150, 300ms)로 감싸서 스크롤 시 순차적으로 나타나게 함. Screenshot 쪽이 먼저, text가 100ms 후 등장.
- **난이도:** 쉬움
- **기존 컴포넌트:** `ScrollReveal` (I1) 그대로 재사용. delay prop 활용.
- **참고:** Stripe feature walkthrough, Emil Kowalski staggered sections.

### A4. Tech Stack Hover Glow

- **이름:** Stack Icon Ambient Glow
- **적용:** Project detail "Technical Stack" 섹션
- **효과:** 각 기술 스택 아이템에 hover 시 `box-shadow: 0 0 20px var(--color-accent)/15` 가 부드럽게 나타남. 아이콘 없이 텍스트만 있으므로 배경색 shift (`--color-bg-card` → `--color-bg-card-hover`)로 미세 피드백.
- **난이도:** 쉬움
- **기존 컴포넌트:** CSS만. 신규 불필요.
- **참고:** Raycast keyboard shortcuts hover glow, Cursor feature card hover. 21st.dev `hover-card` 패턴.

### A5. Next Project CTA — Full-Bleed Color Block

- **이름:** Next Project Marquee CTA
- **적용:** Project detail 하단 "Next Project" 링크
- **효과:** 현재 `bg-secondary` 위 텍스트만 있음. → full-bleed 컬러 블록(`--color-accent`/8 gradient backdrop) + 우측에 다음 프로젝트의 `ColorPlaceholder` 미니 썸네일 + hover 시 전체 블록이 미세하게 scale(1.005) + arrow가 translate-x 애니메이션. 더 임팩트 있는 전환 유도.
- **난이도:** 보통
- **기존 컴포넌트:** `ScrollReveal` + CSS. `ColorPlaceholder` 재사용.
- **참고:** Linear "next feature" CTA block, Framer full-bleed section transitions.

### A6. Scroll-Linked Section Progress

- **이름:** Section Progress Dots
- **적용:** Project detail — right side fixed column (desktop only)
- **효과:** 우측에 작은 점 내비게이션 (5~7개, 각 섹션 대응). 현재 스크롤 위치에 해당하는 점이 `--color-accent`로 활성화. 클릭하면 해당 섹션으로 smooth scroll. Vercel의 dot navigation 변형.
- **난이도:** 보통
- **기존 컴포넌트:** `StickyTOC`의 IntersectionObserver 로직 재활용 가능. 신규 `SectionDots.tsx` 필요.
- **참고:** Superhuman section dots, Apple product page scroll indicators. 21st.dev `scroll-spy-dots`.

### A7. Before/After Screenshot Slider

- **이름:** Comparison Slider
- **적용:** Project detail walkthrough — before/after screenshot pairs
- **효과:** 현재 before/after가 나란히 놓여 있음. 드래그 가능한 세로 디바이더로 한 이미지 위에 overlay 비교. 마우스/터치로 디바이더를 좌우로 밀어 before/after 비교.
- **난이도:** 보통
- **기존 컴포넌트:** 신규 `ComparisonSlider.tsx` 필요. 단, 접근성(키보드, reduced-motion) 대응 필수.
- **참고:** 21st.dev `image-comparison-slider`, Framer image comparison component.

---

## B. Blog List Page (`/ko/blog/`, `/en/blog/`, `/blog/`)

### B1. Featured Card Hover Parallax

- **이름:** Featured Card Inner Parallax
- **적용:** Blog list — featured hero card (첫 번째 큰 카드)
- **효과:** Featured card hover 시 배경 이미지(또는 ColorPlaceholder)가 마우스 방향 반대로 미세하게 이동 (3~5px). 텍스트 레이어는 고정. 깊이감 생성.
- **난이도:** 보통
- **기존 컴포넌트:** `TiltCard` (I8)의 perspective 로직을 2D parallax 변형으로 재사용 가능. 또는 `ParallaxImage` (I6) 로직을 hover-based로 변형.
- **참고:** Stripe blog featured card, Notion feature card hover. 21st.dev `parallax-card`.

### B2. Category Filter — Active Morph

- **이름:** Filter Pill Morph
- **적용:** Blog list category filter 칩들
- **효과:** 현재 active 필터는 `bg-accent`으로 즉시 전환. → active indicator가 pill 뒤에서 slide animation으로 이동 (framer-motion `layoutId` 패턴). 선택한 카테고리로 배경이 부드럽게 슬라이드.
- **난이도:** 보통
- **기존 컴포넌트:** 신규. `motion`의 `layoutId` 또는 CSS View Transitions API. 약 5KB 이하 추가.
- **참고:** Linear tab indicator slide, Raycast command palette tabs. 21st.dev `animated-tabs`, `sliding-pill`.

### B3. Blog Card Stagger-In

- **이름:** Masonry Stagger Reveal
- **적용:** Blog list — rest posts (featured 아래 리스트)
- **효과:** 현재 모든 카드가 한 번에 보임. 각 카드를 `ScrollReveal` + 행 기준 staggered delay (row * 100ms)로 감싸기. 위에서 아래로 물결치듯 나타남.
- **난이도:** 쉬움
- **기존 컴포넌트:** `ScrollReveal` (I1) 그대로. index 기반 delay 계산만.
- **참고:** Emil Kowalski stagger patterns, Pinterest card reveal. 21st.dev `stagger-children`.

### B4. Empty State — Category No Results

- **이름:** Empty Filter Feedback
- **적용:** Blog list — 카테고리 필터 결과가 0건일 때
- **효과:** 현재 0건이면 빈 공간만 보임. 부드러운 fade-in으로 "이 카테고리에 아직 글이 없어요" 메시지 + subtle illustration (SVG geometric from `ColorPlaceholder` geometric variant 재활용).
- **난이도:** 쉬움
- **기존 컴포넌트:** CSS fade + `ColorPlaceholder` geometric variant.
- **참고:** Notion empty state, Linear empty list illustration.

---

## C. Blog Detail Page (`/ko/blog/[slug]`, etc.)

### C1. Reading Progress Bar Enhancement

- **이름:** Gradient Progress Bar
- **적용:** Blog detail 상단 progress bar
- **효과:** 현재 `ScrollProgress` (I7)이 상단 바로 구현됨. → 단색 대신 `.gradient-primary` (accent → accent-light) 그라디언트를 진행률 바에 적용. 끝까지 읽으면 마지막 10%에서 살짝 pulse 효과.
- **난이도:** 쉬움
- **기존 컴포넌트:** `ScrollProgress` (I7) CSS만 수정.
- **참고:** Superhuman reading progress, Stripe docs progress bar.

### C2. Heading Anchor Hover Preview

- **이름:** Heading Link Tooltip
- **적용:** Blog detail 본문 내 `h2`, `h3` headings
- **효과:** MDX heading에 hover 시 좌측에 `#` link 아이콘이 fade-in. 클릭하면 URL이 해당 heading anchor로 업데이트 (공유 가능). 이미 StickyTOC가 있으므로 시너지.
- **난이도:** 쉬움
- **기존 컴포넌트:** CSS `:hover` + MDX rehype plugin (existing heading id). 신규 JS 불필요.
- **참고:** Vercel docs heading anchors, Mintlify heading links. 21st.dev `anchor-heading`.

### C3. Sticky TOC — Scroll Progress Indicator

- **이름:** TOC Section Progress
- **적용:** Blog detail — StickyTOC component
- **효과:** 현재 StickyTOC는 active heading만 highlight. → 각 TOC 항목 좌측에 thin vertical bar (2px width, `--color-accent`) 가 해당 섹션의 스크롤 진행률에 따라 채워짐. 전체 글의 구조적 진행 시각화.
- **난이도:** 보통
- **기존 컴포넌트:** `StickyTOC` + `ScrollProgress` 로직 결합. `StickyTOC` 수정.
- **참고:** Linear docs TOC, Cursor changelog TOC progress. 21st.dev `toc-progress-bar`.

### C4. Code Block Copy Button

- **이름:** Code Copy with Feedback
- **적용:** Blog detail 본문 내 code blocks (```코드```)
- **효과:** 코드 블록 우상단에 copy 버튼. 클릭 시 "Copied!" 텍스트가 0.8초간 fade-in/out. 버튼은 hover 시에만 나타남 (clean).
- **난이도:** 쉬움
- **기존 컴포넌트:** 신규 `CopyButton.tsx` (경량, ~20 lines). MDX `pre` 태그에 자동 주입 가능.
- **참고:** Vercel docs code blocks, Stripe API docs, Supabase docs. 21st.dev `copy-button`.

### C5. Image Lightbox / Zoom

- **이름:** Blog Image Zoom
- **적용:** Blog detail 본문 내 이미지
- **효과:** 본문 이미지 클릭 시 overlay로 확대 (medium-zoom 패턴). 배경 dim + 이미지가 viewport 중앙으로 smooth scale-up. ESC 또는 배경 클릭으로 닫기. 스크린샷이 많은 기술 블로그에서 필수.
- **난이도:** 보통
- **기존 컴포넌트:** 신규. `medium-zoom` 라이브러리 (2KB gzip) 또는 자체 구현 (~40 lines).
- **참고:** Notion image zoom, 21st.dev `image-zoom`. Vercel blog image expand.

### C6. Series Navigation — Prev/Next

- **이름:** Series Stepper
- **적용:** Blog detail — 시리즈 포스트 하단
- **효과:** 현재 시리즈 포스트 목록이 있음. → prev/next 화살표 버튼을 좌우에 배치하여 시리즈 내 순차 이동 강조. 현재 포스트 위치를 "3/7" 같은 indicator로 표시. 전체 시리즈 진행률 mini-bar.
- **난이도:** 쉬움
- **기존 컴포넌트:** CSS + 기존 seriesPosts 데이터.
- **참고:** Stripe blog series navigation, Mintlify docs prev/next.

---

## D. Cross-Page / Global Ideas

### D1. Page Transition Fade

- **이름:** Page Cross-Fade
- **적용:** 모든 페이지 간 전환
- **효과:** Astro View Transitions API (`transition:animate="fade"`)로 페이지 간 부드러운 cross-fade. 300ms. 현재는 hard reload.
- **난이도:** 쉬움 (Astro 내장)
- **기존 컴포넌트:** Astro `<ViewTransitions />` 컴포넌트. Layout.astro에 추가만.
- **참고:** Framer page transitions, Astro docs. 모든 reference site (Linear, Vercel)가 사용.

### D2. Scroll-to-Top Floating Button

- **이름:** Scroll Top FAB
- **적용:** 프로젝트 상세 + 블로그 상세 (긴 페이지)
- **효과:** 스크롤 500px 이상 내려가면 우하단에 작은 원형 버튼 fade-in. 클릭 시 smooth scroll to top. `prefers-reduced-motion` 시 즉시 이동.
- **난이도:** 쉬움
- **기존 컴포넌트:** 신규 `ScrollToTop.tsx` (~25 lines). `useReducedMotion` 재활용.
- **참고:** Notion scroll-to-top, Superhuman FAB.

---

## Priority Matrix

| ID | Name | Impact | Effort | Priority |
|:--:|---|:--:|:--:|:--:|
| A2 | Impact Metrics CountUp | 🔥 높음 | 쉬움 | **P0** |
| A3 | Walkthrough Step Stagger | 🔥 높음 | 쉬움 | **P0** |
| B3 | Blog Card Stagger Reveal | 🔥 높음 | 쉬움 | **P0** |
| C1 | Gradient Progress Bar | 🟡 중간 | 쉬움 | **P0** |
| C2 | Heading Anchor Hover | 🟡 중간 | 쉬움 | **P0** |
| C4 | Code Block Copy Button | 🔥 높음 | 쉬움 | **P0** |
| D1 | Page Transition Fade | 🔥 높음 | 쉬움 | **P0** |
| B2 | Filter Pill Morph | 🟡 중간 | 보통 | **P1** |
| C3 | TOC Section Progress | 🟡 중간 | 보통 | **P1** |
| A1 | Hero Parallax Dissolve | 🟡 중간 | 쉬움 | **P1** |
| A5 | Next Project CTA Block | 🟡 중간 | 보통 | **P1** |
| C5 | Blog Image Zoom | 🔥 높음 | 보통 | **P1** |
| C6 | Series Stepper | 🟡 중간 | 쉬움 | **P1** |
| A4 | Tech Stack Hover Glow | 🟢 낮음 | 쉬움 | **P2** |
| A6 | Section Progress Dots | 🟢 낮음 | 보통 | **P2** |
| A7 | Before/After Slider | 🟢 낮음 | 보통 | **P2** |
| B1 | Featured Card Parallax | 🟢 낮음 | 보통 | **P2** |
| B4 | Empty Filter Feedback | 🟢 낮음 | 쉬움 | **P2** |
| D2 | Scroll-to-Top FAB | 🟢 낮음 | 쉬움 | **P2** |

**P0 (7)**: 즉시 적용 가능, 기존 컴포넌트 재사용, 최대 효과
**P1 (6)**: 보통 난이도, 새 컴포넌트 소량 필요, 높은 효과
**P2 (6)**: nice-to-have, 여유 있을 때 구현

---

## Implementation Notes

### Bundle Budget Check
- P0 전체: **0KB 추가** (기존 컴포넌트 + CSS만)
- P1 전체: `motion layoutId` (~3KB) + `medium-zoom` (~2KB) = **~5KB gzip**
- P2 전체: `ComparisonSlider` (~1KB) = **~1KB gzip**
- **총 예상: ~6KB gzip** — AC10 (< 50KB gzip 증가) 충분히 충족

### Reduced Motion Compliance
모든 아이디어가 `prefers-reduced-motion: reduce` 시:
- CountUp → 즉시 최종값
- Stagger → 즉시 표시 (delay 0)
- Parallax/Tilt → 비활성
- Progress bar → static 100% width
- Page transition → 즉시 전환
- Image zoom → 즉시 overlay (no scale animation)

### Resume Impact: **없음**
모든 아이디어는 project detail / blog 페이지에만 적용. 이력서 페이지 코드에 대한 변경 0.

---

## E. Reference Insights (from awesome-design-md deep scan)

> Stripe, Raycast, Superhuman, Cursor, Framer DESIGN.md 정독 결과 중 우리 프로젝트에 적용 가능한 패턴 요약.

### E1. Stripe — Blue-Tinted Ambient Shadows
- **패턴:** `rgba(50,50,93,0.25)` 기반 다중 레이어 쉐도우. 차가운 톤의 브랜드 쉐도우.
- **적용 가능:** 프로젝트 상세 스크린샷 카드. 현재 `shadow-ambient` (`rgba(42,52,57,0.06)`)과 톤이 유사 — 우리 시스템과 자연스럽게 호환.
- **결론:** 현재 시스템이 이미 이 방향. 추가 작업 불필요.

### E2. Stripe — Light Weight Display Headlines (weight 300)
- **패턴:** Display size에서 weight 300 사용 → 자신감 있으되 소리치지 않는 느낌.
- **적용 가능:** 프로젝트 상세 Hero subtitle, 블로그 상세 hero subtitle에 weight 300~400 적용 고려.
- **결론:** 현재 우리는 800/700 위주. **블로그 상세 hero subtitle을 weight 400으로** 이미 사용 중이므로 추가 불필요. 향후 "quiet authority" 변형이 필요하면 참고.

### E3. Superhuman — Ultra-Tight Display Line-Height (0.96)
- **패턴:** 헤드라인 line-height 0.96으로 텍스트 블록을 건축적으로 압축.
- **적용 가능:** 프로젝트 상세 Hero title (`leading-[1.0]` → `leading-[0.96]`), 블로그 목록 featured card title.
- **결론:** 미세 조정이지만 고급감에 큰 영향. **P1 추천.**

### E4. Cursor — Warm oklab Borders
- **패턴:** `rgba(38,37,30,0.1)` 따뜻한 톤의 보더. 차가운 gray 보더보다 유기적.
- **적용 가능:** 우리 시스템은 `rgba(113,124,130,0.15)` (cool-neutral). No-Line Rule 상 보더 사용이 제한적이므로 직접 적용보다는 "참고용". 블로그 상세 인용구 좌측 보더에 warm 터치를 줄 수 있으나, DESIGN.md §7 "웜 팔레트 금지"와 충돌 가능.
- **결론:** **현재 시스템 유지.** warm 톤 금지 원칙 준수.

### E5. Framer — Full-Width Screenshot as Hero Art
- **패턴:** 프로덕트 스크린샷을 full-bleed로 배치하여 시각적 주인공으로. 8px-12px radius + ambient shadow.
- **적용 가능:** 프로젝트 상세 walkthrough 스크린샷을 더 크게 (현재 `grid-cols-2` → full-width 옵션 추가). 블로그 목록 featured card 이미지를 더 크게.
- **결론:** **A3 (Walkthrough Stagger)와 결합** 가능. 스크린샷 크기 확대는 Phase 4 폴리시에서 고려.

### E6. Raycast — Opacity-Based Hover States
- **패턴:** Hover 시 색상 교체 대신 opacity 변화 (1.0 → 0.6). 우아하고 미세.
- **적용 가능:** 프로젝트 상세 agent card hover, 블로그 목록 카드 hover, tech stack hover.
- **결론:** 현재 우리는 `hover:bg-card-hover` 배경 전환. Opacity 방식은 더 미세하나 접근성(contrast ratio) 주의 필요. **A4 (Tech Stack Hover Glow)에 통합** — hover 시 opacity 0.85 + subtle bg shift 조합.

### Cross-Reference Summary

| Reference | 우리에게 가장 유용한 패턴 | 이미 적용됨? |
|---|---|:--:|
| **Stripe** | Blue-tinted shadows, light-weight display | ✅ shadow 톤 유사 |
| **Raycast** | Opacity hover, backdrop blur nav | ✅ `.glass` nav |
| **Superhuman** | Ultra-tight line-height (0.96) | ⏳ 미세 조정 가치 |
| **Cursor** | Warm canvas, aggressive tracking | ❌ warm 금지 / ✅ tracking 유사 |
| **Framer** | Full-bleed screenshots, extreme compression | ⏳ walkthrough 확대 고려 |

**핵심 결론:** 우리 디자인 시스템("The Structured Cloud")은 이미 Stripe + Vercel 방향에 있다. 추가로 가져올 것: Superhuman의 0.96 line-height (미세 폴리시), Framer의 full-bleed screenshot 강조 (Phase 4), Raycast의 opacity hover (A4에 통합).
