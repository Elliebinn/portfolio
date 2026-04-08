# Design Tokens Summary / 디자인 토큰 요약

**Source:** `src/styles/global.css` (primary) + `src/styles/editorial.css` (legacy, to delete)
**Theme:** The Structured Cloud
**Extracted at:** 2026-04-08
**Resume impact legend:** `yes` = 이력서 페이지가 직접/간접적으로 사용, 변경 금지 / `no` = 이력서 미참조

---

## 1. Color Tokens (23)

### 1.1 Surface System (No-Line Rule)

| Token | Value | Role | Resume Impact |
|---|---|---|---|
| `--color-bg` | `#f7f9fb` | page background (body default) | **yes** |
| `--color-bg-card` | `#ffffff` | card / elevated panel | **yes** |
| `--color-bg-card-hover` | `#f0f4f7` | card hover state | no |
| `--color-bg-elevated` | `#ffffff` | modal / popover surface | no |
| `--color-bg-secondary` | `#f0f4f7` | alt section background (tool chip bg in resume) | **yes** |
| `--color-bg-detail` | `#e1e9ee` | period pill background | **yes** |
| `--color-bg-emphasis` | `#d9e4ea` | divider / rule line / section strip | **yes** |

### 1.2 Border

| Token | Value | Role | Resume Impact |
|---|---|---|---|
| `--color-border` | `rgba(113,124,130,0.15)` | ghost border | no |
| `--color-outline` | `#717c82` | form outline / focus | no |
| `--color-outline-variant` | `#a9b4b9` | disabled outline | no |

### 1.3 Text (never pure black)

| Token | Value | Role | Resume Impact |
|---|---|---|---|
| `--color-text` | `#2a3439` | primary text (body default) | **yes** |
| `--color-text-muted` | `#566166` | secondary text / bullet body | **yes** |
| `--color-text-faint` | `#717c82` | tertiary / meta text | **yes** |

### 1.4 Accent (Professional Navy-Blue)

| Token | Value | Role | Resume Impact |
|---|---|---|---|
| `--color-accent` | `#456272` | primary brand | **yes** |
| `--color-accent-light` | `#385666` | gradient partner | no |
| `--color-on-accent` | `#f1f9ff` | text on accent (CTA) | **yes** |

### 1.5 Secondary

| Token | Value | Role | Resume Impact |
|---|---|---|---|
| `--color-secondary` | `#506076` | secondary brand | no |
| `--color-secondary-container` | `#d3e4fe` | skill tag background | **yes** |
| `--color-on-secondary-container` | `#435368` | skill tag text | **yes** |

### 1.6 Tertiary / Status

| Token | Value | Role | Resume Impact |
|---|---|---|---|
| `--color-tertiary` | `#5c5d78` | tertiary UI | no |
| `--color-tertiary-container` | `#ddddfe` | tertiary container | no |
| `--color-error` | `#9f403d` | error text | no |
| `--color-error-container` | `#fe8983` | error container | no |

---

## 2. Typography Tokens (3)

| Token | Value | Role | Resume Impact |
|---|---|---|---|
| `--font-sans` | `'Geist Sans', 'Noto Sans KR', ui-sans-serif, system-ui, sans-serif` | body default (via `body`) | **yes** (indirect) |
| `--font-display` | `'Geist Sans', 'Noto Sans KR', ui-sans-serif, system-ui, sans-serif` | headings, name, CTA | **yes** |
| `--font-mono` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | numeric / label caps | no |

> **참고:** `--font-sans`와 `--font-display` 값이 현재 동일하다. PRD C2가 명시한 Plus Jakarta Sans / Be Vietnam Pro는 **코드에 존재하지 않는다**. 이는 `editorial.css`의 `--ed-font-*`에만 남아 있는 잔재이며 DESIGN.md는 **코드 기준(Geist + Noto Sans KR)** 으로 작성한다.

---

## 3. Shadow Utilities (2)

| Class | Value | Role | Resume Impact |
|---|---|---|---|
| `.shadow-ambient` | `0 12px 40px rgba(42,52,57,0.06)` | floating elements | no |
| `.shadow-ambient-sm` | `0 4px 16px rgba(42,52,57,0.04)` | small floating CTA (resume PDF button 포함) | **yes** |

---

## 4. Utility Classes (4)

| Class | Role | Resume Impact |
|---|---|---|
| `.glass` | navbar backdrop blur `rgba(247,249,251,0.7)` | indirect (global nav) |
| `.ghost-border` | subtle 1px border | no |
| `.gradient-primary` | `linear-gradient(135deg, accent, accent-light)` | no |
| `.section-alt` | `nth-child(even)` 배경 전환 | no |

---

## 5. Radius / Space / Ease / Duration

**없음.** global.css에 custom property 형태의 radius/space/ease/duration 토큰은 **정의되어 있지 않다**. 전부 Tailwind 스케일(`rounded-xl`, `gap-4`, `duration-300`, `ease-out`)과 PRD §7.1 인터랙션별 하드코딩(`cubic-bezier(0.22, 1, 0.36, 1)`, `spring(stiffness 150, damping 15)`)에 의존한다.

> Phase 1에서 필요 시 `--ease-standard`, `--duration-reveal` 등을 **추가(never 기존 삭제)** 할 수 있으나 현재 문서화할 값은 없다.

---

## 6. Warm Palette Findings (삭제 대상)

- `#fef9f2` hex 등장: **1건** (`src/styles/editorial.css:5 (--ed-surface)`)
- `--ed-*` prefix 토큰: **24개** (전부 `editorial.css` 내부)
- ✅ **이력서 페이지는 `--ed-*` 토큰을 참조하지 않음** (Grep 검증 완료 — P0.1 안전 선언)
- Phase 0 P0.4에서 `editorial.css` 완전 삭제 후 `--ed-*` 0건이 되어야 AC12 충족

---

## 7. Resume-Impacted Token Set (변경 절대 금지)

이력서 페이지(`src/pages/ko/resume.astro`, `src/pages/en/resume.astro`, `resume-pdf.astro`)가 **직접** 참조하는 토큰:

```
--color-bg                         --color-text
--color-bg-card                    --color-text-muted
--color-bg-secondary               --color-text-faint
--color-bg-detail                  --color-accent
--color-bg-emphasis                --color-on-accent
--color-secondary-container        --color-on-secondary-container
--font-display                     .shadow-ambient-sm
```

**총 14개 직접 의존 + `--font-sans`(body 상속) = 15개.** frontend-executor는 이 15개의 hex/value를 **수정하지 않는다.**

---

## 8. Totals

| Category | Count |
|---|---|
| Color tokens | 23 |
| Font tokens | 3 |
| Shadow utilities | 2 |
| Utility classes | 4 |
| Resume-impacted (yes) | 14 (+ 1 indirect) |
| Resume-safe (no) | 13 |
| Legacy `--ed-*` to delete | 24 |
