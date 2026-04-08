# DESIGN.md — Hyebin Woo Portfolio

> **Theme / 테마:** The Structured Cloud — cool-neutral editorial precision
> **Source of truth / 단일 진실:** `src/styles/global.css`
> **Bilingual / 이중 언어:** 한국어 + English (each section written in both)
> **Scope / 범위:** Landing, project detail, blog (랜딩·프로젝트 상세·블로그). **이력서 페이지는 이 문서의 적용 대상이 아니다 (No visual change. See §7 & §11).**
> **Format / 포맷:** awesome-design-md 9 sections + 2 extensions (Motion Language, Layout Rhythm Map) — from PRD-redesign.md §5.
> **Non-negotiable:** PRD §4.2 원칙 5개, §6.1 리듬 테이블, §7 인터랙션 스펙, C1~C9 제약을 위반할 수 없다.

---

## Table of Contents

1. [Visual Theme & Atmosphere](#1-visual-theme--atmosphere)
2. [Color Palette & Roles](#2-color-palette--roles)
3. [Typography Rules](#3-typography-rules)
4. [Component Stylings](#4-component-stylings)
5. [Layout Principles](#5-layout-principles)
6. [Depth & Elevation](#6-depth--elevation)
7. [Do's and Don'ts](#7-dos-and-donts)
8. [Responsive Behavior](#8-responsive-behavior)
9. [Agent Prompt Guide](#9-agent-prompt-guide)
10. [Motion Language](#10-motion-language-extension)
11. [Layout Rhythm Map](#11-layout-rhythm-map-extension)

---

## 1. Visual Theme & Atmosphere

### 🇰🇷 한국어

이 포트폴리오의 시각 언어는 **"The Structured Cloud — 구조화된 구름"**. 차가운 네이비-블루 악센트(`#456272`)가 엷은 구름색 배경(`#f7f9fb`) 위에 또렷하게 얹히는, **에디토리얼 금융 리포트**의 톤이다. 2025년형 포트폴리오가 자주 기대는 따뜻한 베이지·샌드·테라코타 팔레트(warm editorial)를 **의도적으로 거부**하고, 대신 구름·안개·도해(diagram)의 냉색 회청톤을 선택했다.

분위기는 "가벼운 종이 위에 그어진 정밀 도면"에 가깝다. 선(border)은 거의 쓰지 않는다. 대신 배경 명도 스텝(`#f7f9fb` → `#f0f4f7` → `#e1e9ee` → `#d9e4ea`) 으로 레이어를 쌓아 "섹션이 눌려 있는" 감각을 만든다 (No-Line Rule). 그림자는 한 번만, 아주 옅게(`rgba(42,52,57,0.06)` 이하) 떨어뜨려 떠 있음을 느끼게만 한다.

텍스트는 절대 `#000000`이 아니다. 본문은 `#2a3439`, 메타는 `#566166`/`#717c82` 의 3단 무채색 체계다. 네이비 악센트는 **인터랙티브·CTA·브랜드 앵커** 에만 등장하고, 장식으로 퍼지지 않는다. 타이포그래피는 Geist Sans 단일 패밀리(Noto Sans KR 한글 폴백)로 압축하여, 한영 전환 시 글자 리듬이 일관되게 흐른다.

무엇보다 이 페이지는 **스크롤이 주인공**(PRD §4.2 원칙 2). 정적 블록이 쌓인 카탈로그가 아니라, 독자가 아래로 내려갈 때마다 섹션이 밀도·정렬·모션을 바꾸는 **에디토리얼 매거진**이다.

**Key Characteristics**
- Cool-neutral cloud palette (`#f7f9fb`·`#f0f4f7`·`#e1e9ee`·`#d9e4ea`) — warm editorial 금지
- Singular brand accent: professional navy-blue `#456272` — 장식 금지, 인터랙티브 전용
- No-Line Rule: 1px 보더 대신 배경 명도 스텝으로 레이어 분리
- Whisper shadows: `0 12px 40px rgba(42,52,57,0.06)` (ambient), `0 4px 16px rgba(42,52,57,0.04)` (sm)
- Single font family: Geist Sans + Noto Sans KR — 한/영 리듬 일관
- Editorial rhythm: 섹션마다 밀도·정렬이 달라진다 (§11)
- Scroll-first motion: 섹션당 "크게" 움직이는 모션 1개만 (§10)
- 이력서 페이지는 이 시스템을 **이미 반영한 스냅샷**으로 고정되어 있으며 리뉴얼에서 **변경되지 않는다**

### 🇺🇸 English

The portfolio's visual language is **"The Structured Cloud."** A cool navy-blue accent (`#456272`) lands crisply on a faint cloud-surface background (`#f7f9fb`), producing the tone of an **editorial financial report**. The portfolio deliberately **rejects** the warm beige-sand-terracotta palette that dominates 2025 editorial portfolios, and instead commits to the cool blue-gray of cloud, fog, and diagram.

The mood is closer to "a precise schematic drawn on thin paper." Borders are avoided; instead, layers are stacked through background luminance steps (`#f7f9fb` → `#f0f4f7` → `#e1e9ee` → `#d9e4ea`), producing a pressed, sectioned feel (**No-Line Rule**). Shadows appear once, barely (`rgba(42,52,57,0.06)` max) — they hint at float rather than announce it.

Text is never pure `#000000`. Body runs `#2a3439`, meta runs `#566166`/`#717c82` — a three-tier achromatic ladder. The navy accent shows up only on **interactive elements, CTAs, and brand anchors** — it never decorates. Typography collapses to a single family (Geist Sans with Noto Sans KR fallback for Korean), so Korean and English share the same rhythmic pulse.

Above all, **scroll is the protagonist** (PRD §4.2 principle 2). This is not a stacked block catalog; it is an **editorial magazine** where each section re-tunes density, alignment, and motion as the reader descends.

**Key Characteristics**
- Cool-neutral cloud palette — warm editorial forbidden
- Single brand accent (`#456272`), interactive-only
- No-Line Rule — background-step layering instead of 1px rules
- Whisper ambient shadows, used sparingly
- One font family (Geist Sans + Noto Sans KR) for unified Korean/English rhythm
- Editorial rhythm (see §11) — no two adjacent sections share `density × alignment`
- Scroll-driven motion (see §10) — one "large" motion per section
- Resume pages are a frozen snapshot of this system and are **not touched** by this redesign

---

## 2. Color Palette & Roles

### 🇰🇷 한국어

총 **23개** 의 `--color-*` 토큰이 `src/styles/global.css`에서 정의된다. 모두 `@theme` 블록 내부에 있으며, 기존 값은 **절대 수정/삭제하지 않는다** (PRD C1, AC11). 새 토큰은 추가 가능하나, **웜 팔레트(`#fef9f2`·`--ed-*`)는 추가 금지** (PRD C3, AC12).

### 🇺🇸 English

`src/styles/global.css` defines **23** `--color-*` tokens inside the `@theme` block. Existing values must **not be modified or removed** (PRD C1, AC11). New tokens may be added, but **no warm-palette entries** (`#fef9f2`, `--ed-*`) (PRD C3, AC12).

### 2.1 Surface System — No-Line Layering

| Token | Hex | Role (한국어 / English) | Resume |
|---|---|---|:--:|
| `--color-bg` | `#f7f9fb` | 페이지 기본 배경 / page canvas (body default) | ✅ |
| `--color-bg-card` | `#ffffff` | 카드·패널 표면 / card & panel surface | ✅ |
| `--color-bg-card-hover` | `#f0f4f7` | 카드 호버 상태 / card hover state | — |
| `--color-bg-elevated` | `#ffffff` | 모달·팝오버 표면 / modal & popover | — |
| `--color-bg-secondary` | `#f0f4f7` | 대체 섹션 배경 / alternating section background | ✅ |
| `--color-bg-detail` | `#e1e9ee` | 칩·기간 pill / chip & period pill background | ✅ |
| `--color-bg-emphasis` | `#d9e4ea` | 디바이더·강조 strip / divider & emphasis strip | ✅ |

**No-Line Rule:** 카드 간 구분은 `bg-card (#ffffff)` → `bg-secondary (#f0f4f7)` → `bg-detail (#e1e9ee)` 의 **배경 스텝** 으로만 만든다. `1px solid` border는 원칙상 사용하지 않는다.

### 2.2 Text System (never pure black / 순흑 금지)

| Token | Hex | Role | Contrast vs `--color-bg` | Resume |
|---|---|---|---|:--:|
| `--color-text` | `#2a3439` | 본문·헤딩 기본 / primary body & heading | ~12.5:1 (AAA) | ✅ |
| `--color-text-muted` | `#566166` | 보조 텍스트·불릿 본문 / secondary & list body | ~6.7:1 (AAA large) | ✅ |
| `--color-text-faint` | `#717c82` | 메타·타임스탬프·레이블 / meta, timestamps, labels | ~4.9:1 (AA) | ✅ |

### 2.3 Brand Accent — Professional Navy-Blue

| Token | Hex | Role | Resume |
|---|---|---|:--:|
| `--color-accent` | `#456272` | 브랜드 1차·CTA·링크·활성 / primary brand, CTA, link, active state | ✅ |
| `--color-accent-light` | `#385666` | 그라디언트 파트너 / gradient partner for `.gradient-primary` | — |
| `--color-on-accent` | `#f1f9ff` | 악센트 위 텍스트 / text on accent surfaces | ✅ |

> **규칙:** 악센트는 **장식이 아니라 기능**. 프로젝트 카드 테두리 색처럼 "색으로 카테고리 구분" 하지 않는다 (사용자 피드백 `feedback_no_borders`).

### 2.4 Secondary / Tertiary / Status

| Token | Hex | Role | Resume |
|---|---|---|:--:|
| `--color-secondary` | `#506076` | 2차 브랜드 / secondary brand | — |
| `--color-secondary-container` | `#d3e4fe` | 스킬 태그 배경 / skill tag background | ✅ |
| `--color-on-secondary-container` | `#435368` | 스킬 태그 텍스트 / skill tag text | ✅ |
| `--color-tertiary` | `#5c5d78` | 3차 UI / tertiary UI | — |
| `--color-tertiary-container` | `#ddddfe` | 3차 컨테이너 / tertiary container | — |
| `--color-error` | `#9f403d` | 에러 텍스트 / error text | — |
| `--color-error-container` | `#fe8983` | 에러 컨테이너 / error container | — |
| `--color-border` | `rgba(113,124,130,0.15)` | 고스트 보더 (예외적 사용만) / ghost border, exceptional use | — |
| `--color-outline` | `#717c82` | 폼 아웃라인·포커스 / form outline, focus | — |
| `--color-outline-variant` | `#a9b4b9` | 비활성 아웃라인 / disabled outline | — |

### 2.5 Forbidden palette (AC12 — 웜 팔레트 0건)

**Never use:** `#fef9f2`, any `--ed-*` variable, warm beige/terracotta/pink/gold accents.

| Forbidden | Why |
|---|---|
| `#fef9f2` (warm paper) | PRD C3 — editorial legacy |
| `--ed-surface`, `--ed-primary`, `--ed-secondary`, ... (24 tokens) | To be deleted in Phase 0 P0.4 |
| Warm orange / terracotta / pink accents | Contradicts "The Structured Cloud" |

---

## 3. Typography Rules

### 🇰🇷 한국어

현재 `global.css`는 **단일 Geist Sans 패밀리**만 사용한다. `--font-sans`와 `--font-display`는 값이 동일하며, 한글은 Noto Sans KR 폴백으로 자연스럽게 이어진다. `--font-mono`는 Outfit 로 (장식·라벨 대문자용). **중요:** PRD 초안에 언급된 Plus Jakarta Sans / Be Vietnam Pro 는 **코드에 존재하지 않는다** — 그것은 `editorial.css` 의 `--ed-font-*` 잔재이며 이 DESIGN.md는 **코드가 진실** 원칙(PRD §5)을 따른다.

### 🇺🇸 English

`global.css` uses a **single Geist Sans family**. `--font-sans` and `--font-display` share the same value; Korean falls through gracefully to Noto Sans KR. `--font-mono` is Outfit (used for uppercase labels & numeric accents). **Important:** Plus Jakarta Sans / Be Vietnam Pro mentioned in early PRD drafts **do not exist in code** — those are leftover `--ed-font-*` entries in `editorial.css`. This DESIGN.md follows the "code is truth" rule (PRD §5).

### 3.1 Font Families

| Token | Stack | Use |
|---|---|---|
| `--font-sans` | `'Geist Sans', 'Noto Sans KR', ui-sans-serif, system-ui, sans-serif` | 본문·기본 / body default (applied via `body`) |
| `--font-display` | `'Geist Sans', 'Noto Sans KR', ui-sans-serif, system-ui, sans-serif` | 헤딩·이름·CTA / headings, brand name, CTA |
| `--font-mono` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | 레이블 대문자·숫자 / uppercase labels, numerics |

### 3.2 Hierarchy (Korean & English share the same scale)

| Role | Size (px / rem) | Weight | Line Height | Tracking | Use |
|---|---|---|---|---|---|
| Display Hero | 72 / 4.5 | 800 (extrabold) | 1.05 | −2.0px | 랜딩 Hero 메인 헤드라인 / landing hero headline |
| Display Large | 56 / 3.5 | 800 | 1.1 | −1.5px | 프로젝트 상세 Hero / project detail hero |
| Display Medium | 40 / 2.5 | 700 | 1.15 | −1.0px | 섹션 타이틀 / section titles |
| Heading 1 | 32 / 2.0 | 700 | 1.2 | −0.8px | Blog post title, sub-hero |
| Heading 2 | 24 / 1.5 | 700 | 1.3 | −0.5px | 카드 타이틀 / card titles, MDX `##` |
| Heading 3 | 20 / 1.25 | 600 | 1.4 | −0.3px | 메타 헤더 / meta header, MDX `###` |
| Body Large | 18 / 1.125 | 400 | 1.7 | 0 | Intro / hero subtitle |
| Body | 16 / 1.0 | 400 | 1.7 | 0 | 본문 기본 / default body |
| Body Small | 15 / 0.9375 | 400 | 1.6 | 0 | 카드 본문 / card body, blog list |
| Caption | 13 / 0.8125 | 500 | 1.5 | 0 | 메타·태그 / meta, tags |
| Micro Label | 11 / 0.6875 | 700 | 1.4 | 1.6px | 대문자 레이블 / uppercase rail labels |
| Mono Label | 12 / 0.75 | 500 | 1.4 | 1.2px | 숫자·기술 라벨 / numeric, tech labels |

### 3.3 Korean ↔ English rules (한영 병기 규칙)

- 한영 병기 시 **줄바꿈**으로 분리 (슬래시 금지 — 사용자 피드백 `9ca9e43`).
- 영문 패러그래프의 em dash (`—`) 는 **사용 금지** (사용자 피드백 `feedback_no_em_dash`, commit `c80b6fe`). 대신 `·`, `-`, 또는 새 문장으로 끊는다.
- 한글 본문은 `word-break: keep-all` 또는 `break-keep` 유지 (단어 중간 끊김 방지).
- 이모지는 블로그 본문에서 5~7개 허용(사용자 피드백 `feedback_blog_tone`), 그 외 UI에는 **금지**.

### 3.4 Principles

- **One family, two polls:** Geist Sans 가 `sans`와 `display` 양쪽을 담당. 추가 폰트 로드 금지.
- **Negative tracking at scale:** 24px 이상에서 트래킹 음수, 16px 이하에서는 0.
- **Three-weight default:** 400 (read) / 600 (UI emphasis) / 700 (heading) — 800 은 Hero 한정.
- **Never pure black:** `--color-text` (`#2a3439`) 가 최대 어둠.
- **No uppercase body:** 대문자는 micro label·brand marker 한정 (`tracking-widest uppercase`).

---

## 4. Component Stylings

### 4.1 Buttons

#### Primary CTA (filled accent)
- Background: `--color-accent` (`#456272`)
- Text: `--color-on-accent` (`#f1f9ff`)
- Padding: 10px 20px (standard) / 12px 24px (hero)
- Radius: `rounded-full` (pill, hero·contact) or `rounded-xl` (inline)
- Shadow: `.shadow-ambient-sm` on hover only
- Hover: `opacity: 0.92`, optional `I3` magnetic offset (hero & contact)
- Focus: `2px solid var(--color-outline)` outline, 2px offset
- Disabled: `opacity: 0.5`, no magnetic

#### Ghost CTA (transparent with accent text)
- Background: `transparent`
- Text: `--color-accent`
- Padding: 10px 20px
- Hover: background `--color-bg-card-hover` (`#f0f4f7`)
- Use: secondary actions, "View all", next-project link

#### Gradient CTA (rare, hero only)
- Utility: `.gradient-primary` (`linear-gradient(135deg, --color-accent, --color-accent-light)`)
- Text: `--color-on-accent`
- Use: final "Start a conversation" CTA in Contact section

### 4.2 Cards & Containers

Cards on the landing page follow the **No-Line Rule**: the separation from the page comes from `--color-bg-card` (`#ffffff`) sitting on `--color-bg` (`#f7f9fb`), optionally lifted by `.shadow-ambient-sm`.

| Variant | Background | Elevation | Radius | Example |
|---|---|---|---|---|
| Flat card | `--color-bg-card` | none | `rounded-xl` (12px) | Skills category, Education |
| Elevated card | `--color-bg-card` | `.shadow-ambient-sm` | `rounded-xl` | Contact form, tool chips |
| Floating card | `--color-bg-card` | `.shadow-ambient` | `rounded-2xl` (16px) | Hero stat cards, project hero |
| Inset panel | `--color-bg-secondary` | — | `rounded-xl` | Tool list, quote blocks |
| Detail chip | `--color-bg-detail` | — | `rounded-full` | Period pills, status tags |
| Emphasis strip | `--color-bg-emphasis` | — | 2px height | Section rule, divider bar |

> **No `border: 1px solid ...`** on cards. If a divider is absolutely required, use `bg-[var(--color-bg-emphasis)]` height-2 strip instead.

### 4.3 Inputs & Forms

- Background: `--color-bg-card` (`#ffffff`)
- Text: `--color-text`
- Placeholder: `--color-text-faint`
- Border: `1px solid var(--color-border)` (ghost, one of the few exceptions to no-line)
- Radius: `rounded-lg` (8px)
- Padding: 12px 16px
- Focus: outline `2px solid var(--color-accent)`, offset 2px, remove default ring
- Error: text `--color-error`, border `--color-error-container`

### 4.4 Navigation (Navbar)

- Background: `.glass` utility — `rgba(247,249,251,0.7)` + `backdrop-filter: blur(20px)`
- Links: `Body Small` 15px weight 500, text `--color-text-muted`
- Active / hover: text shifts to `--color-accent`
- Logo: `.nav-logo` — no filter, raw SVG
- Height: 64px desktop / 56px mobile
- Scroll state: background opacity rises from 0.7 → 0.9 after 80px scroll (I7)

### 4.5 Tags & Badges

- Skill tag: `bg-[var(--color-secondary-container)]` text `--color-on-secondary-container`, `rounded-full`, 12px/weight 600
- Category chip: `bg-[var(--color-bg-detail)]` text `--color-text-muted`, `rounded-full`, 11px uppercase tracking-widest
- Project tag rail: vertical list of chips, left-aligned on project hero

### 4.6 Image / ColorPlaceholder (per PRD §8)

`<ColorPlaceholder>` replaces real images during this redesign.

| Variant | Behavior |
|---|---|
| `gradient` | Linear/radial gradient between 2–3 brand tokens |
| `geometric` | SVG shapes (circle, line, grid) over solid brand color |
| `label` | Huge `Display Medium` typography over solid `--color-accent` |
| `minimal` | Single `--color-bg-secondary` fill with micro noise |

**Radius:** `rounded-xl` (12px) unless full-bleed.
**Aspect ratio:** `video` (16/9), `square`, `4/5`, `16/9`.
**Treatment:** no border, no inner shadow — flat surface that lets typography do the talking.

---

## 5. Layout Principles

### 🇰🇷 한국어

레이아웃은 **에디토리얼 매거진 그리드** 이다 (PRD §4.1 Direction C). 모든 섹션이 같은 12컬럼 상자에 끼워지지 않는다. 섹션마다 `density × alignment` 가 바뀐다 (§11). max-width는 `1200~1440px` 범위에서 섹션별로 다르게 호흡한다.

### 🇺🇸 English

Layout follows an **editorial-magazine grid** (PRD §4.1 Direction C). Sections are not jammed into a uniform 12-column box — each one re-tunes `density × alignment` (see §11). Max-width breathes between `1200–1440px` depending on the section.

### 5.1 Containers & Max-Width

| Container | Max Width | Padding X | Use |
|---|---|---|---|
| `container-narrow` | 720px | 24px | Blog post body (66ch ≈ 720px) |
| `container-default` | 1200px | 32px | Standard section (About, Skills, Contact) |
| `container-wide` | 1440px | 40px | Hero, Projects banner, Methodology |
| `full-bleed` | 100vw | 0 | Project hero banner, next-project CTA |

### 5.2 Grid System

- **Base unit:** 8px (Tailwind default)
- **Column grid:** CSS Grid `grid-cols-12` available but **default is asymmetric** — About uses `4+7`, Methodology uses `5+7 sticky`.
- **Gutter:** `gap-8` (32px) desktop / `gap-6` (24px) tablet / `gap-4` (16px) mobile.
- **Section vertical padding:** `py-32` (128px) desktop / `py-20` (80px) tablet / `py-16` (64px) mobile.

### 5.3 Spacing Scale (Tailwind)

| Token | px | Use |
|---|---|---|
| `gap-1` | 4 | Inline icon to text |
| `gap-2` | 8 | Tag cluster |
| `gap-3` | 12 | Form label ↔ input |
| `gap-4` | 16 | Standard flex gap |
| `gap-6` | 24 | Card internal padding |
| `gap-8` | 32 | Grid gutter |
| `gap-12` | 48 | Section internal rhythm |
| `gap-16` | 64 | Sub-section separation |
| `gap-24` | 96 | Section vertical split |
| `gap-32` | 128 | Section padding (desktop) |

**No custom `--space-*` tokens** live in `global.css` — Tailwind scale is the source.

### 5.4 Whitespace Philosophy

- **Cloud as whitespace:** the pale `#f7f9fb` background IS the whitespace — content emerges from it.
- **Compressed text, expanded surroundings:** display headlines run tight (−1.5px), but the dark padding around them is vast.
- **Section isolation via background step, not border:** adjacent sections alternate `--color-bg` ↔ `--color-bg-secondary` via `.section-alt:nth-child(even)`.

### 5.5 Radius Scale (Tailwind — no CSS vars)

| Class | px | Use |
|---|---|---|
| `rounded-sm` | 2 | Micro labels, inline code |
| `rounded-md` | 6 | Small buttons |
| `rounded-lg` | 8 | Inputs, form fields |
| `rounded-xl` | 12 | **Standard card radius** |
| `rounded-2xl` | 16 | Hero cards, feature panels |
| `rounded-full` | 9999 | Pills, chips, CTA buttons, avatars |

---

## 6. Depth & Elevation

### 🇰🇷 한국어

그림자 시스템은 **"있는 듯 없는 듯"** 이 원칙. `global.css` 는 두 개의 유틸리티 클래스만 정의한다: `.shadow-ambient`, `.shadow-ambient-sm`. 불투명도는 0.04~0.06 을 절대 넘지 않는다. "떠 있음" 은 느끼게만 하고, "카드처럼 튀어나옴" 으로는 만들지 않는다.

### 🇺🇸 English

The shadow system follows **"felt, not seen."** `global.css` defines only two utility classes — `.shadow-ambient` and `.shadow-ambient-sm` — and opacity never exceeds 0.06. Elevation is suggested, not announced.

### 6.1 Elevation Levels

| Level | Class / Value | Use | Where |
|:--:|---|---|---|
| 0 — Flat | no shadow | Body background, section blocks | Every section by default |
| 1 — Inset | `--color-bg-secondary` background shift | Nested panels, quote blocks | About quote, Methodology steps |
| 2 — Ambient Sm | `.shadow-ambient-sm` = `0 4px 16px rgba(42,52,57,0.04)` | Small CTA pills, badges | Resume PDF button, hero CTAs |
| 3 — Ambient | `.shadow-ambient` = `0 12px 40px rgba(42,52,57,0.06)` | Floating cards, hero stats | Hero metric cards, project cards |
| 4 — Glass | `.glass` = `rgba(247,249,251,0.7)` + `backdrop-filter: blur(20px)` | Sticky navbar only | `<Navbar />` |

**No Level 5.** No modal stacks. No drop shadows darker than 0.06 opacity.

### 6.2 Depth Philosophy

- **Depth comes from luminance, not shadow.** Rely on `--color-bg` → `--color-bg-secondary` → `--color-bg-detail` → `--color-bg-emphasis` background stepping before reaching for a shadow.
- **Shadows are reserved for "actually floating" elements** — navbar (glass), hero metric cards, magnetic buttons. Static content does not get a shadow.
- **Never stack two shadow utilities.** Compose depth with a background step + a single shadow, not two shadows.

---

## 7. Do's and Don'ts

### 🇰🇷 한국어 — 원칙 (PRD §4.2 + 사용자 피드백 반영)

### Do (해야 할 것)

- ✅ `global.css` 의 기존 `--color-*` 토큰만 사용하라 (PRD C1, AC11).
- ✅ **섹션마다** density·alignment 를 바꿔라 (PRD 원칙 1, §11 리듬 맵 준수).
- ✅ **스크롤을 주인공** 으로 만들어라 — IntersectionObserver 기반 I1 을 전역 적용 (PRD 원칙 2).
- ✅ **섹션당 "크게" 움직이는 모션은 1개만** (PRD 원칙 5). 나머지는 미세 모션.
- ✅ **이미지는 콘텐츠** — `<ColorPlaceholder>` 도 "주인공" 처럼 배치 (풀블리드·오버레이 타이포).
- ✅ **모션은 의미 전달 수단** — 장식 모션 금지, 모든 모션에 의도가 있어야 한다 (PRD 원칙 4).
- ✅ `prefers-reduced-motion: reduce` 를 **모든** 모션 컴포넌트에서 대응 (PRD §7.2, AC6, C7).
- ✅ 카드 구분은 **배경 명도 스텝** 으로 한다 (No-Line Rule, 사용자 피드백 `feedback_no_borders`).
- ✅ 한영 병기 시 **줄바꿈 분리**, 슬래시 금지.
- ✅ 이력서 페이지를 건드려야 할 것 같으면 **멈추고 `verify-resume-untouched` 스킬로 검증**.

### Don't (하지 말 것)

- ❌ **웜 팔레트 금지** — `#fef9f2`, `--ed-*`, warm beige/terracotta/pink/gold 절대 추가 금지 (PRD C3, AC12).
- ❌ **editorial 컴포넌트 참조 금지** — `src/components/editorial/` 의 어떤 것도 import 하지 않는다 (Phase 0 P0.4 삭제 예정).
- ❌ **섹션 간 동일 리듬 반복 금지** — 인접 섹션이 동일한 `density × alignment` 조합이면 안 된다 (§11 검증).
- ❌ **이력서 페이지 수정 금지** — `/ko/resume`, `/en/resume`, `resume-pdf` 시각 변화 0 (PRD C9, AC2).
- ❌ **순흑 (`#000000`)·순백 최대 본문 텍스트 금지** — `--color-text` 가 최대 어둠.
- ❌ **1px solid border 남용 금지** — 입력 폼·예외적 고스트 보더만 허용.
- ❌ **em dash (`—`) 사용 금지** (사용자 피드백 `feedback_no_em_dash`). 대신 `·`, `-`, 또는 새 문장.
- ❌ **카드 좌측 컬러 보더로 카테고리 구분 금지** (사용자 피드백 `feedback_no_borders`).
- ❌ **이모지 UI 배치 금지** (사용자 피드백 `feedback_design_direction`). 블로그 본문 내 5~7개만 예외.
- ❌ **모션 라이브러리 무차별 import 금지** — `motion` 패키지에서 필요한 것만 tree-shake (번들 < 50KB gzip, AC10).
- ❌ **`shadow-ambient` 2회 중첩 금지** — depth 는 luminance + 단일 shadow 로만.
- ❌ **full-bleed 섹션 4회 이상 사용 금지** — 페이지당 2~3회까지.
- ❌ **블로그 본문 안에 tilt·magnetic·parallax 삽입 금지** — 독서 방해 (PRD §6.4).
- ❌ **Plus Jakarta Sans / Be Vietnam Pro 참조 금지** — 코드에 존재하지 않는다. Geist Sans + Noto Sans KR 만 사용.

### 🇺🇸 English

### Do
- ✅ Use only existing `--color-*` tokens from `global.css` (PRD C1, AC11).
- ✅ Re-tune density and alignment **per section** (PRD principle 1, rhythm map in §11).
- ✅ Make **scroll the protagonist** — IntersectionObserver-driven I1 everywhere (PRD principle 2).
- ✅ Allow **only one "large" motion per section** (PRD principle 5); the rest stays micro.
- ✅ Treat images as **content**, not decoration — `<ColorPlaceholder>` full-bleed with overlaid typography.
- ✅ Make sure **every motion carries meaning** — no decorative motion (PRD principle 4).
- ✅ Respect `prefers-reduced-motion: reduce` in **every** motion component (PRD §7.2, AC6, C7).
- ✅ Separate cards with **background luminance steps**, not borders (No-Line Rule).
- ✅ Split Korean/English bilingual text on **line breaks**, never slashes.
- ✅ If a task looks like it touches a resume page, **stop and run the `verify-resume-untouched` skill**.

### Don't
- ❌ No warm palette. `#fef9f2`, `--ed-*`, warm beige/terracotta/pink/gold are forbidden (PRD C3, AC12).
- ❌ No importing anything from `src/components/editorial/` — it is scheduled for deletion in Phase 0 P0.4.
- ❌ No two adjacent sections sharing the same `density × alignment` combination (§11 enforces this).
- ❌ **Do not modify resume pages.** Visual delta on `/ko/resume`, `/en/resume`, `resume-pdf` must be zero (PRD C9, AC2).
- ❌ No pure black `#000000` or pure white `#ffffff` for primary text — `--color-text` is the darkest.
- ❌ No gratuitous `1px solid` borders outside form inputs and exceptional ghost outlines.
- ❌ **No em dash (`—`)** (user feedback `feedback_no_em_dash`). Use `·`, `-`, or a new sentence.
- ❌ No left-side colored card borders as category markers (user feedback `feedback_no_borders`).
- ❌ No decorative emojis in UI (user feedback `feedback_design_direction`); blog body may carry 5–7.
- ❌ No blanket imports from `motion` — tree-shake (bundle < 50KB gzip, AC10).
- ❌ No stacking two shadow utilities — depth = luminance + a single shadow.
- ❌ No more than 2–3 full-bleed sections per page.
- ❌ No tilt / magnetic / parallax inside blog body (breaks reading).
- ❌ No references to Plus Jakarta Sans or Be Vietnam Pro — those fonts are **not loaded** in code.

---

## 8. Responsive Behavior

### 8.1 Breakpoints (Tailwind defaults — no custom)

| Name | Width | Container | Section Padding | Grid |
|---|---|---|---|---|
| `sm` | ≥ 640px | 100% − 24px | `py-16` (64px) | Single column |
| `md` | ≥ 768px | 100% − 32px | `py-20` (80px) | Two-column begins |
| `lg` | ≥ 1024px | 1024px | `py-24` (96px) | Full asymmetric grid |
| `xl` | ≥ 1280px | 1200px | `py-32` (128px) | Magazine rhythm |
| `2xl` | ≥ 1536px | 1440px | `py-32` | Full editorial spread |

### 8.2 Collapsing Strategy

| Element | Desktop (≥ lg) | Tablet (md) | Mobile (< md) |
|---|---|---|---|
| Hero headline | 72px Display Hero | 56px Display Large | 40px Display Medium |
| About grid | 4+7 asymmetric | 5+7 asymmetric | Single column stacked |
| Methodology | Sticky 5+7 | Sticky 4+8 | Stacked (no sticky) |
| Projects banner | Full-bleed + tilt | Full-bleed no tilt | Standard card |
| Journey timeline | Left/right alternating | Left-aligned | Left-aligned |
| Sticky TOC (blog) | Right sticky | Hidden | Hidden |
| Meta side rail | Left sticky | Inline under hero | Inline under hero |
| Navbar | Horizontal links | Horizontal condensed | Hamburger + `<BottomNav>` |

### 8.3 Touch & Motion

- **Touch targets ≥ 44×44** (WCAG 2.5.5).
- **Mobile motion pruning (< 768px):** I3 (magnetic), I4 (cursor spotlight), I6 (parallax), I8 (tilt) are **disabled**. I7 (scroll progress) runs at reduced strength.
- **Hover replacements:** on mobile, hover states fall back to tap-highlight via `:active`.

### 8.4 Reduced Motion

`prefers-reduced-motion: reduce` globally disables I3/I4/I6/I7/I8 and collapses I1/I2/I5 to final-state (PRD §7.2). See §10.4 for the full matrix.

---

## 9. Agent Prompt Guide

### 🇰🇷 한국어 (에이전트에게 복사해서 쓰라고 줄 빠른 참조)

### 9.1 Quick Color Reference

```
Page background:       #f7f9fb   (--color-bg)
Alt section bg:        #f0f4f7   (--color-bg-secondary)
Card bg:               #ffffff   (--color-bg-card)
Chip bg:               #e1e9ee   (--color-bg-detail)
Divider:               #d9e4ea   (--color-bg-emphasis)

Heading text:          #2a3439   (--color-text)
Body text muted:       #566166   (--color-text-muted)
Meta text faint:       #717c82   (--color-text-faint)

Primary accent:        #456272   (--color-accent)
Accent hover/gradient: #385666   (--color-accent-light)
Text on accent:        #f1f9ff   (--color-on-accent)

Skill tag bg:          #d3e4fe   (--color-secondary-container)
Skill tag text:        #435368   (--color-on-secondary-container)

Shadow ambient:        0 12px 40px rgba(42,52,57,0.06)
Shadow ambient sm:     0 4px 16px rgba(42,52,57,0.04)
```

### 9.2 Font Quick Reference

```
Display:  Geist Sans 800, tracking -1.0 ~ -2.0px, leading 1.05
Heading:  Geist Sans 700, tracking -0.5 ~ -0.8px, leading 1.25
Body:     Geist Sans 400, leading 1.7
Micro:    Outfit 500 uppercase, tracking 1.2px
Korean:   Noto Sans KR fallback (automatic)
```

### 9.3 Example Prompts (to paste into Claude / Cursor)

**Hero section:**
> "Build a full-bleed hero on `var(--color-bg)`. Headline 72px Geist Sans weight 800, leading 1.05, tracking −2px, color `var(--color-text)`. Subtitle 18px weight 400, line-height 1.7, color `var(--color-text-muted)`. Primary CTA: filled `var(--color-accent)` pill button with `var(--color-on-accent)` text, apply `I3` magnetic hook. Stats: three numbers in `Display Medium` 40px wrapped in `CountUp` (I2). Apply `SplitText` (I5) to headline. All motion must respect `useReducedMotion`."

**Project card (full-bleed banner):**
> "Full-bleed project banner section. Background: `ColorPlaceholder variant='gradient'` using `[--color-accent, --color-accent-light]`. Overlay typography: project title in `Display Large` 56px weight 800 color `var(--color-on-accent)`, tags rail on the left as `rounded-full` chips with `bg-[var(--color-bg-card)]/20` backdrop-blur. Wrap card in `TiltCard` (I8) desktop only."

**Blog post reader:**
> "Blog post body, max-width 720px (`66ch`), font Geist Sans 18px weight 400 leading 1.7 color `var(--color-text)`. Headings `h2` 32px weight 700 tracking −0.8px, `h3` 24px weight 700 tracking −0.5px. Sticky TOC on right column ≥ lg only, listing MDX `h2/h3` with current-section highlight. Progress bar at top via `ScrollProgress` (I7). **No tilt, magnetic, or parallax inside the body.**"

**Section alternating background:**
> "Use `.section-alt` class chain so every even section switches to `var(--color-bg-secondary)`. Do not add borders between sections."

### 9.4 Forbidden one-liners

When in doubt, **delete** the following from any generated code:

```
border: 1px solid
#fef9f2
--ed-
Plus Jakarta Sans
Be Vietnam Pro
em dash "—"
box-shadow: 0 ... rgba(0,0,0,0.1)+   (too strong)
resume.astro edits                    (forbidden by C9/AC2)
```

### 🇺🇸 English

This guide is safe to paste directly into any AI agent prompt. The tables above are machine-readable; keep them in sync with `global.css`.

---

## 10. Motion Language (Extension)

> Inherits PRD §7 (Interaction Spec). This section is the **code-side contract** for the 8 interactions.

### 🇰🇷 한국어

모션은 장식이 아니다. PRD §4.2 원칙 4 ("모션은 의미 전달 수단") 와 원칙 5 ("기본값은 조용함") 를 조합하면: 각 섹션은 **큰 모션 1개 + 미세 모션 N개** 로 구성된다. 큰 모션은 섹션 의도를 시각화하고, 미세 모션은 공간감을 보존한다. `useReducedMotion` 훅은 **모든** 모션 컴포넌트에 강제된다.

### 🇺🇸 English

Motion is not decoration. Combining PRD §4.2 principle 4 ("motion carries meaning") and principle 5 ("quiet by default") yields: each section has **one large motion + N micro motions**. The large motion visualizes intent; micro motions preserve spatial feedback. Every motion component **must** call `useReducedMotion`.

### 10.1 Interaction Matrix (PRD §7.1 전재)

| # | Name | Strength | Location | Trigger | Duration | Easing |
|:--:|---|---|---|---|---|---|
| I1 | Scroll Reveal | 기본 (전역) / base (global) | 모든 섹션 타이틀·본문 / all section titles & bodies | `IntersectionObserver threshold 0.2` | 600ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| I2 | Count Up | 히어로 / hero | Hero stats (38, 200+, 20+) | Viewport enter (once) | 1800ms | `easeOutExpo` |
| I3 | Magnetic Button | 미세 / micro | Hero CTA, Contact CTA | `mousemove` proximity | instant | `spring(stiffness 150, damping 15)` |
| I4 | Cursor Spotlight | 미세 / micro | Hero background only (desktop) | `mousemove` | instant | `linear` |
| I5 | Text Split Reveal | 히어로 / hero | Hero main headline | Page load + 400ms | 900ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| I6 | Image Parallax | 미세 / micro | Full-bleed color blocks | `scroll` | scroll-linked | `linear` |
| I7 | Section Bg Crossfade / Reading Progress | 분위기 / ambient | Landing bg, blog top bar | `scroll progress` | scroll-linked | `linear` |
| I8 | Project Card 3D Tilt | 프로젝트 히어로 / project hero | Projects section cards | `hover` | instant | `spring` |

### 10.2 Strength Philosophy

- **Base (I1):** Every piece of content reveals as it enters the viewport. Never skipped. `translateY(12px) → 0` + `opacity 0 → 1`.
- **Hero-scale (I2, I5):** Reserved for landing hero and project detail hero. Never used in middle sections.
- **Micro (I3, I4, I6):** Subtle spatial feedback. Desktop only. Mobile → disabled.
- **Ambient (I7):** Scroll-linked background or progress bar. Visible but never attention-grabbing.
- **Project-only (I8):** The only hover-driven motion. Not used on buttons or cards elsewhere.

### 10.3 Per-section Motion Budget

| Section | Motion Lead | Sub Motions | Motion budget justification |
|---|---|---|---|
| Hero | I5 (split text) | I2, I3, I4, I7 | Entry moment — max expressiveness allowed once |
| About | I1 | — | Reading focus, no distractions |
| Methodology | I1 | I6 | Long scroll requires spatial anchor |
| Capabilities | I1 (SVG path draw as I1 variant) | — | Motion = the draw itself |
| Projects | I8 | I1, I6 | Interactive pivot — hover tilt justifies itself |
| Journey | I1 (timeline line progress) | — | Line progress IS the narrative |
| Skills | I1 (staggered) | — | Tag cloud reveal |
| Certifications | I1 | — | List, minimal |
| Contact | I3 (magnetic CTA) | I1 | Final CTA pull |
| Footer | — | I1 | Static |
| Project detail Hero | I5 | I6 | Mirrors landing hero |
| Project detail body | I1 | — | Reading focus |
| Blog list | I1 | — | Staggered cards |
| Blog post | I7 (top progress bar) | I1 (minimal) | **No I3/I6/I8 inside body** |

### 10.4 Reduced-Motion Matrix (PRD §7.2 — enforced globally)

| # | `prefers-reduced-motion: reduce` | Mobile (< 768px) |
|:--:|---|---|
| I1 | `opacity: 1` 즉시 (no translate) | enabled |
| I2 | Final number immediately | enabled |
| I3 | **Disabled** | **Disabled** |
| I4 | **Disabled** | **Disabled** |
| I5 | Immediate visible (no split) | enabled |
| I6 | **Disabled** | **Disabled** |
| I7 | **Disabled** | Reduced strength |
| I8 | **Disabled** | **Disabled** |

**Enforcement:** every motion component calls `useReducedMotion()` from `src/components/motion/useReducedMotion.ts` (Phase 1 P1.2). The `motion-reduce-audit` skill will verify this at the end of Phase 6.

### 10.5 Keyboard & Focus

Keyboard focus rings **always remain visible**, regardless of motion setting. The motion layer never replaces focus feedback with "subtler" alternatives. `outline: 2px solid var(--color-outline); outline-offset: 2px;` is the baseline.

---

## 11. Layout Rhythm Map (Extension)

> 상세 지도: `_workspace/rhythm_map.md`.
> 이 섹션은 PRD §6.1 테이블을 **DESIGN.md 내부에 고정**하여, 프론트엔드 작업자가 매번 PRD로 돌아가지 않아도 참조할 수 있게 한다.

### 🇰🇷 한국어

"섹션마다 다른 리듬" (PRD §4.2 원칙 1) 은 이 포트폴리오의 유일한 존재 이유에 가깝다. 같은 `density × alignment` 조합이 인접 섹션에서 반복되는 순간 "모듈 쌓기" 로 되돌아간다. 이 맵은 그것을 막는 방호벽이다.

### 🇺🇸 English

"A different rhythm per section" (PRD §4.2 principle 1) is arguably this portfolio's entire reason to exist. The moment two adjacent sections share the same `density × alignment`, it degrades back to a "stacked module" portfolio. This map is the guardrail that prevents that.

### 11.1 Rhythm Vocabulary

| Axis | Values |
|---|---|
| **Density** | `dense` (information-rich) · `sparse` (airy hero-like) · `mixed` (reading body) |
| **Alignment** | `left` · `center` · `sticky` (left sticky + right scroll) · `timeline` (vertical line cross) · `full-bleed` (100vw) |
| **Motion Lead** | One of I1–I8, the largest motion active in the section |

### 11.2 Landing Page Rhythm Map (PRD §6.1 table, preserved)

| # | Section | Density | Alignment | Motion Lead | Sub Motions | Visual Anchor |
|:--:|---|:--:|:--:|:--:|:--:|---|
| 1 | **Hero** | sparse | full-bleed | I5 | I2, I3, I4, I7 | 거대 타이포 + 그라디언트 백드롭 + 카운트업 |
| 2 | **About** | dense | left (4+7 asymmetric) | I1 | — | 대형 인용구 + 스킬 태그 재배치 |
| 3 | **Methodology** | dense | sticky (left title · right scroll steps) | I1 | I6 | 긴 스크롤 스티키 스텝 |
| 4 | **Capabilities** | sparse | center | I1 (SVG path draw) | — | 레이더 폴리곤 그려짐 |
| 5 | **Projects** | sparse | full-bleed | I8 | I1, I6 | 풀블리드 컬러 배너 + 오버레이드 타이포 + 태그 rail |
| 6 | **Journey** | dense | timeline (vertical crossing) | I1 (line progress) | — | 수직 타임라인, 좌우 교차 |
| 7 | **Skills** | dense | left (tag cloud) | I1 | — | 카테고리 헤더 + 태그 클라우드 |
| 8 | **Certifications** | sparse | left (single-line list) | I1 | — | 한 줄 1개, 좌 아이콘 + 우 메타 |
| 9 | **Contact** | sparse | center | I3 (magnetic CTA) | I1 | 마그네틱 버튼 |
| 10 | **Footer** | dense | left | — | I1 | 미세 호버 |

### 11.3 Adjacency Check (Don't-repeat Matrix)

| Boundary | Previous | Next | Different? |
|---|---|---|:--:|
| 1 → 2 | sparse/full-bleed | dense/left | ✅ |
| 2 → 3 | dense/left | dense/sticky | ✅ (alignment) |
| 3 → 4 | dense/sticky | sparse/center | ✅ (both) |
| 4 → 5 | sparse/center | sparse/full-bleed | ✅ (alignment) |
| 5 → 6 | sparse/full-bleed | dense/timeline | ✅ (both) |
| 6 → 7 | dense/timeline | dense/left | ✅ (alignment) |
| 7 → 8 | dense/left | sparse/left | ✅ (density) |
| 8 → 9 | sparse/left | sparse/center | ✅ (alignment) |
| 9 → 10 | sparse/center | dense/left | ✅ (both) |

**All 9 adjacencies pass. Landing page rhythm map is valid.**

### 11.4 Project Detail Rhythm Map (PRD §6.2)

| # | Section | Density | Alignment | Motion Lead |
|:--:|---|:--:|:--:|:--:|
| 1 | Hero block | sparse | full-bleed | I5 |
| 2 | Meta Side Rail (conditional, PRD P4.1) | dense | sticky (left rail) | — |
| 3 | Overview / Problem | mixed | left | I1 |
| 4 | Solution / Process | mixed | left | I1 |
| 5 | Impact / Metrics | dense | center | I2 (count up) |
| 6 | Next Project CTA | sparse | full-bleed | I3 |

### 11.5 Blog Index Rhythm Map (PRD §6.3)

| # | Section | Density | Alignment | Motion Lead |
|:--:|---|:--:|:--:|:--:|
| 1 | Category filter rail | dense | left (chip bar) | — |
| 2 | Featured hero card (latest) | sparse | full-bleed | I1 |
| 3 | Rest list | dense | left | I1 (staggered) |

### 11.6 Blog Post Rhythm Map (PRD §6.4)

| # | Section | Density | Alignment | Motion Lead |
|:--:|---|:--:|:--:|:--:|
| 1 | Top progress bar | — | full-bleed | I7 |
| 2 | Hero (title + meta) | sparse | center | I1 |
| 3 | Sticky TOC (conditional, ≥ 2 headings) | dense | sticky (right column, desktop only) | — |
| 4 | Body (66ch) | mixed | center | I1 (minimal) |

**In-body interactions are deliberately minimal** (PRD §6.4: "집중 방해 금지"). Never insert magnetic / tilt / parallax inside blog body.

### 11.7 Resume Pages — Exempt Declaration

이력서 페이지 (`/ko/resume`, `/en/resume`, `resume-pdf`) 는 **이 리듬 맵의 적용 대상이 아니다**.
Resume pages (`/ko/resume`, `/en/resume`, `resume-pdf`) are **out of scope** for this rhythm map.

- 현재 레이아웃·밀도·정렬·모션이 **그대로 보존** 된다.
- Phase 3 ~ 6 작업 범위에서 제외된다 (PRD C9, AC2, §2.2).
- 작업자는 이력서 페이지를 수정할 것 같으면 **즉시 중단하고** `verify-resume-untouched` 스킬로 검증한다.
- The `frontend-executor` agent must treat these paths as read-only.

---

## Changelog

| Date | Author | Change |
|---|---|---|
| 2026-04-08 | design-architect (Phase 0 P0.1+P0.2) | Initial version. Extracted 23 color + 3 font tokens from `global.css`. Inscribed PRD §6.1 rhythm table. References studied: linear.app, vercel, notion, framer (listed; framer file available in `_workspace/refs/`). |

---

**End of DESIGN.md**
