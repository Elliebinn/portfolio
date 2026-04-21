# Motion Reduce Audit — 2026-04-08

- Scope: `src/components/motion/*` (I1~I8 + useReducedMotion)
- Commit: `6807cb1` (HEAD at audit time)
- Method: 정적 분석 (useReducedMotion import + hook call + 분기 + PRD §7.2 규칙 매핑 + 모바일 가드)

## 결과 매트릭스

| # | Component | import | hook() | branch | PRD §7.2 규칙 | mobile guard | verdict |
|---|---|---|---|---|---|---|---|
| I1 | ScrollReveal.tsx | ✓ | ✓ (L26) | ✓ (L56) | ✓ `{ opacity: 1 }` + `setVisible(true)` (L31-33) | n/a | **PASS** |
| I2 | CountUp.tsx | ✓ | ✓ (L31) | ✓ (L37) | ✓ `setDisplay(value)` 즉시 최종값 (L37-40), 초기 `useState(reduced?value:0)` | n/a | **PASS** |
| I3 | MagneticButton.tsx | ✓ | ✓ (L27) | ✓ `disabled = reduced \|\| isMobile` (L45) | ✓ early return으로 listener·motion.button 미렌더 (L47-53) | ✓ `(max-width: 767px)` (L19,38) | **PASS** |
| I4 | CursorSpotlight.tsx | ✓ | ✓ (L22) | ✓ `if (reduced \|\| !enabled) return null` (L54) | ✓ null 반환 → mousemove 리스너 미등록 (L36 early return) | ✓ `(min-width: 768px) and (pointer: fine)` (L15) | **PASS** |
| I5 | SplitText.tsx | ✓ | ✓ (L26) | ✓ `if (reduced) return <Component>{text}</Component>` (L40-42) | ✓ 즉시 완전 표시 (stagger 우회) | n/a | **PASS** |
| I6 | ParallaxImage.tsx | ✓ | ✓ (L28) | ✓ `if (reduced \|\| isMobile) return <img/>` (L47-49) | ✓ motion.img·useScroll 미렌더 | ✓ `(max-width: 767px)` (L19,34) | **PASS** |
| I7 | ScrollProgress.tsx | ✓ | ✓ (L17) | ✓ `page` variant → `reduced && return null` (L25); `bar` variant → `scaleX: reduced ? 0 : scaleX` (L53) | ✓ page 완전 비활성 / bar 강도 0 (PRD "강도 축소" 허용) | n/a (전역 UI) | **PASS** |
| I8 | TiltCard.tsx | ✓ | ✓ (L20) | ✓ `disabled = reduced \|\| isMobile` (L40) → plain div (L42-44) | ✓ motion.div·listener 미렌더 | ✓ `(max-width: 767px)` (L17,33) | **PASS** |

## useReducedMotion 훅 검증

- `src/components/motion/useReducedMotion.ts`
- `matchMedia('(prefers-reduced-motion: reduce)')` 구독 ✓
- SSR-safe 초기값 `false` + `typeof window` 가드 ✓
- `change` 리스너 cleanup + Safari <14 `addListener` fallback ✓

## PRD §7.2 규칙 준수 요약

| 규칙 | 적용 컴포넌트 | 확인 |
|---|---|---|
| 즉시 최종 상태 표시 | I1 ScrollReveal, I2 CountUp, I5 SplitText | ✓ |
| 완전 비활성 (early return / plain element) | I3, I4, I6, I8, I7(page) | ✓ |
| 강도 축소 | I7(bar) scaleX=0 | ✓ |
| 모바일 가드 (min-width 768 / max-width 767) | I3, I4, I6, I8 | ✓ |

## Summary

**8 PASS / 0 FAIL** — 모든 모션 컴포넌트가 `prefers-reduced-motion: reduce` 및 모바일에서 PRD §7.2 규칙을 준수한다. AC6 게이트 통과.
