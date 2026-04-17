# DESIGN.md

> 혜빈님 포트폴리오 — 디자인 시스템 문서
> 목업 기준: `portfolio-editorial-dense.html`
> 최종 갱신: 2026-04-16

---

## 1. Design Tokens

### 1.1 Color — Dark (Default)

```css
--bg:         #0C0C0B   /* near-black, warm undertone */
--bg-2:       #141413   /* elevated surface */
--fg:         #EDEDE8   /* warm off-white */
--muted:      #93938F   /* secondary text */
--border:     rgba(255,255,255,0.09)   /* 9% hairline */
--accent:     #FF3D00   /* vivid orange — single accent */
--accent-soft:#FF7A5C   /* accent highlight */
```

### 1.2 Color — Light

```css
--bg:         #F0EDE5   /* cream */
--bg-2:       #E8E4DA   /* elevated */
--fg:         #161513   /* deep charcoal */
--muted:      #6B6964   /* warm gray */
--border:     rgba(0,0,0,0.08)
--accent:     #FF3D00   /* same accent, retained across modes */
```

### 1.3 Palette Philosophy
- **Max 1 accent color** per page (orange만 사용).
- No neon, no pure `#000` or `#FFF`.
- Dark/Light 토글 시 accent는 **고정** → 브랜드 일관성.
- Warm undertone 기조 (쿨 그레이 금지).

---

## 2. Typography

### 2.1 Font Stack

| 용도 | 영문 | 한글 | 비고 |
|------|------|------|------|
| **Display (emphasis)** | Syne | **Paperlogy** | 타이틀, 헤딩, 포인트 |
| **Body (base)** | Inter | **Pretendard** | 본문, UI, 버튼 |
| **Mono** | JetBrains Mono | — | 코드, 메트릭 라벨 |

```css
.display { font-family: 'Syne', 'Paperlogy', 'Pretendard', sans-serif; }
.body    { font-family: 'Inter', 'Pretendard', system-ui, sans-serif; }
.mono    { font-family: 'JetBrains Mono', monospace; }
```

### 2.2 Font Loading (CDN)

```html
<!-- Latin -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Korean base -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">

<!-- Korean display (Paperlogy via Noonnu) -->
<style>
@font-face {
  font-family: 'Paperlogy';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-fall@1.1/Paperlogy-8ExtraBold.woff2') format('woff2');
  font-weight: 800; font-display: swap;
}
/* 400, 600, 700 weights 동일 패턴으로 로드 */
</style>
```

### 2.3 Type Scale

| 클래스 | 용도 | 크기 | Weight | Letter-spacing | Line-height |
|--------|------|------|--------|----------------|-------------|
| `hero-title` | Hero H1 | `clamp(72px, 12vw, 176px)` | 700 | -0.05em | 0.88 |
| `section-title` | 섹션 H2 | `clamp(48px, 7vw, 96px)` | 600 | -0.04em | 0.95 |
| `work-title` | 케이스 카드 H3 | `clamp(32px, 4vw, 56px)` | 700 | -0.04em | 0.95 |
| `about-lead` | About 리드 문장 | `clamp(28px, 3vw, 40px)` | 500 | -0.03em | 1.2 |
| `body-lg` | 섹션 본문 | 16px | 400 | -0.01em | 1.62 |
| `body-md` | 카드 본문 | 14-15px | 400 | -0.01em | 1.6 |
| `label` | 섹션 라벨 | 11px | 500 | 0.2em | 1 |
| `metric-value` | 수치 | `clamp(32px, 5vw, 72px)` | 200 | -0.05em | 1 |
| `metric-label` | 수치 설명 | 10px | 500 | 0.2em UPPER | — |

### 2.4 Korean-specific Rules
- 한글 블록은 항상 `word-break: keep-all;` (어중 끊김 방지)
- 한글 자간은 Latin 대비 **조금 덜 타이트하게** (영문 -0.05em → 한글 -0.03em)
- 한글 본문은 Pretendard `font-weight: 400`, 강조는 500 (600 이상은 급해 보임)
- Paperlogy는 **포인트용만** (본문에 쓰면 가독성 ↓)

---

## 3. Spacing

### 3.1 Scale (4px base)

| Token | Value | 용도 |
|-------|-------|------|
| `space-1` | 4px | 인라인 gap |
| `space-2` | 8px | 타이트 gap |
| `space-3` | 12px | 기본 gap |
| `space-4` | 16px | 컴포넌트 내부 |
| `space-5` | 24px | 카드 padding 소 |
| `space-6` | 32px | 카드 padding 중 |
| `space-7` | 48px | 카드 padding 대 |
| `space-8` | 64px | 서브 섹션 간격 |
| `space-9` | 80px | 섹션 head margin |
| `space-10` | 120px | 섹션 padding (py) |
| `space-11` | 180px | 히어로 여백 |

### 3.2 Section Padding
```css
.section { padding: 120px 44px; }        /* 데스크톱 */
@media (max-width: 768px) {
  .section { padding: 80px 20px; }       /* 모바일 */
}
```

---

## 4. Motion

### 4.1 Easing Tokens

```css
--ease:       cubic-bezier(0.25, 0.46, 0.45, 0.94)   /* signature — 모든 전환 기본값 */
--ease-out:   cubic-bezier(0.16, 1, 0.3, 1)          /* scroll reveal */
--ease-spring:cubic-bezier(0.34, 1.56, 0.64, 1)      /* micro bounce (선택적) */
```

### 4.2 Duration
| 용도 | Duration |
|------|----------|
| Hover state | 300ms |
| Card lift | 600ms |
| Nav morph | 600ms |
| Page preloader fade | 600ms |
| Hero line reveal | 1100ms + 150ms stagger |
| Scroll reveal | 900ms |
| Marquee loop | 40s linear infinite |

### 4.3 Motion Principles
1. **Transform + opacity 만** 애니메이션 (GPU composite)
2. `width`, `height`, `top`, `left` 애니메이션 금지
3. 모든 모션은 `prefers-reduced-motion: reduce` 시 **즉시 완료 상태**로 스킵
4. 히어로 reveal은 **프리로더 종료 직후** 트리거 (중첩 방지)

---

## 5. Components

### 5.1 Nav (3-상태)

| 상태 | 트리거 | 스타일 |
|------|--------|--------|
| Default | 페이지 상단 (`scrollY <= 60`) | `padding: 16px 44px`, 배경 투명 |
| Scrolled | `scrollY > 60` | 중앙 정렬 pill, backdrop-blur, 보더, 섀도우 |
| Mobile (<768px) | 반응형 | 우측 햄버거 버튼, 펼침 시 풀스크린 오버레이 |

### 5.2 Custom Cursor

| 요소 | 스펙 |
|------|------|
| 기본 화살표 | 22×26px, `fg` 색, `clip-path` 다각형 |
| 라벨 pill | 아래 8px, `bg`/`fg` 반전, 4x10 padding, 100px radius |
| Blend mode | `mix-blend-mode: difference` (다크/라이트 가독) |
| Lerp factor | 0.5 (즉시성 + 부드러움 밸런스) |
| Hide on | `@media (hover: none)` (터치 디바이스) |

### 5.3 Case Study Card

```
┌─────────────────────┬───────────────────┐
│  № 01 / AED         │                   │
│                     │   [gradient]      │
│  Title H3           │   [blob 1 + 2]    │
│  Subtitle           │   [corner arrow]  │
│  ───────────────    │   [mock preview]  │
│  Meta  · Metrics    │                   │
└─────────────────────┴───────────────────┘
```

| 스펙 | 값 |
|------|-----|
| Border-radius | 20px |
| Padding | 48px (데스크톱) / 24px (모바일) |
| Min-height | 480px |
| Background | `--bg-2` |
| Hover | BG 5% lighter, corner arrow 45° rotate, blob scale 1.2x opacity 0.9 |
| Transition | `all 600ms var(--ease)` |

### 5.4 Skill Pill

| 스펙 | 값 |
|------|-----|
| Font-size | 12px |
| Padding | 6px 14px |
| Border | `1px solid var(--border)` |
| Radius | 100px |
| Hover | border → `--accent`, color → `--accent` |

### 5.5 Artifact Card (PRD/DESIGN/METRICS)

```
┌──────────────────────────┐
│ [icon] LABEL             │
│ Title                    │
│ Subtitle                 │
│ ┌────────────────────┐   │
│ │ [code preview]     │   │
│ │ dark bg, monospace │   │
│ └────────────────────┘   │
│ ──────────────────       │
│ Metric · Metric · Metric │
└──────────────────────────┘
```

---

## 6. Responsive Breakpoints

| Breakpoint | Width | 주 변경 |
|------------|-------|---------|
| `xs` | < 480px | Nav 로고만, 메트릭 세로 스택 |
| `sm` | 480-768px | 섹션 padding 20px, 카드 padding 24px |
| `md` | 768-1024px | About grid 1열, Work 카드 세로 스택 |
| `lg` | 1024-1440px | 기본 데스크톱 레이아웃 |
| `xl` | > 1440px | max-width 1400px 유지, 여백 자연 증가 |

---

## 7. Accessibility

| 항목 | 기준 |
|------|------|
| 콘트라스트 | Text vs BG ≥ AA (4.5:1). Accent on BG ≥ 3:1 |
| Focus ring | 키보드 탐색 시 `outline: 2px solid var(--accent)` + `outline-offset: 4px` |
| Tap target | 모든 인터랙티브 요소 ≥ 44×44px |
| Reduced motion | `prefers-reduced-motion: reduce` 시 모든 애니메이션 제거 |
| 커스텀 커서 | 터치 디바이스에서 자동 비활성 + `cursor: default` 복원 |
| Alt text | 모든 이미지에 필수 |
| Landmark | `<nav>`, `<main>`, `<section id>`, `<footer>` |
| 언어 | `<html lang="ko">` (영문 텍스트 많아도 주 사용자 한국어) |

---

## 8. Icon System

**Phosphor Icons** (webcomponents v2.1) 전용. 이모지 사용 금지.

```html
<script type="module" src="https://unpkg.com/@phosphor-icons/webcomponents@2.1"></script>

<ph-arrow-up-right weight="regular" size="20"></ph-arrow-up-right>
<ph-magnifying-glass weight="light" size="22"></ph-magnifying-glass>
<ph-hand-waving weight="fill" size="14"></ph-hand-waving>
```

**Weight 규칙**:
- 본문 라인 안: `regular`
- 메쏘드 섹션(편집 감성): `light`
- 액세트 CTA 안: `fill`

---

## 9. Theme Toggle

```js
// localStorage key: 'hb-theme'
// values: 'dark' | 'light'
// default: 'dark' (first visit)

document.documentElement.setAttribute('data-theme', saved || 'dark');
```

사용자 선호 우선. System preference는 **무시** (명시적 토글만).

---

## 10. File Structure

```
portfolio-docs/
├── CONCEPT.md       ← 비전, 포지셔닝, 톤
├── DESIGN.md        ← 이 파일 (토큰 + 컴포넌트)
└── PRD.md           ← 섹션별 요구사항 + 인터랙션

portfolio-editorial-dense.html  ← 구현 목업
```
