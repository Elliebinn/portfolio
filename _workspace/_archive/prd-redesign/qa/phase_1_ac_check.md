# Phase 1 AC Check

- Phase: 1 (useReducedMotion + 8 모션 컴포넌트 I1~I8)
- Base: `1a1778d` (main)
- Head: `6807cb1`
- Motion commit (P1.3): `73a4594`

## AC 매핑

### AC5 — 인터랙션 8종 정의: **PASS**
`src/components/motion/` 전수 존재 (정적 코드 확인):
1. I1 ScrollReveal.tsx
2. I2 CountUp.tsx
3. I3 MagneticButton.tsx
4. I4 CursorSpotlight.tsx
5. I5 SplitText.tsx
6. I6 ParallaxImage.tsx
7. I7 ScrollProgress.tsx
8. I8 TiltCard.tsx

모두 export된 named + default 컴포넌트, Props 인터페이스 명시, PRD §7.1 규격 준수.

### AC9 — prefers-reduced-motion 가드: **PASS**
`_workspace/qa/motion_reduce_audit.md` 참조.
- 8/8 컴포넌트 `useReducedMotion` import + hook call + 분기 + §7.2 규칙 준수
- 4/4 데스크톱 전용 컴포넌트(I3/I4/I6/I8)에 mobile matchMedia 가드
- useReducedMotion 훅 SSR-safe, change listener + Safari fallback cleanup
- **0 FAIL**

### AC2 — 이력서 회귀 0: **PASS**
```bash
git diff 1a1778d..6807cb1 -- \
  src/pages/ko/resume.astro src/pages/en/resume.astro \
  src/pages/ko/resume-pdf.astro src/data/resume.ts \
  src/components/Navbar.tsx src/components/Footer.tsx \
  src/layouts/Layout.astro | wc -l
# → 0
```
이력서 렌더 경로 0 lines changed. Phase 1은 신규 `src/components/motion/` 추가만 수행했고 공통 컴포넌트·레이아웃·이력서 데이터에 touch 없음.

## 빌드

```
npm run build
→ 64 page(s) built in 3.09s ✓
→ Astro build Complete
→ TypeScript 0 errors (Vite transpile 성공)
```

## 최종 판정

**Phase 1 GATE: PASS**

| AC | 상태 |
|---|---|
| AC2 이력서 회귀 | ✅ PASS (diff=0) |
| AC5 인터랙션 8종 | ✅ PASS (8/8 존재) |
| AC9 reduce-motion 가드 | ✅ PASS (8/8 가드 + 모바일 가드) |
| Build | ✅ 64p 3.09s |
| TypeScript | ✅ 0 errors |

Phase 2 (ColorPlaceholder) 진입 가능.
