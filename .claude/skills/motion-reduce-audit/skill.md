---
name: motion-reduce-audit
description: "src/components/motion/의 모든 모션 컴포넌트가 useReducedMotion 가드를 가지고 있고, prefers-reduced-motion: reduce 시 PRD §7.2 규칙대로 동작하는지 정적 분석한다. AC6과 리스크 R7을 강제하는 게이트. motion 디렉토리가 변경되거나 Phase 6 진입 시 반드시 호출. reduced-motion, 접근성, 모션 가드, a11y 모션 등을 언급하면 이 스킬을 사용한다."
---

# Motion Reduce Audit

8개 인터랙션 컴포넌트(I1~I8)가 `prefers-reduced-motion: reduce` 환경에서 PRD §7.2 규칙을 준수하는지 정적 분석으로 검증한다.

## 왜 이 스킬이 필요한가

- PRD §7.2는 인터랙션마다 다른 reduce 동작을 요구한다 (즉시 표시 vs 완전 비활성)
- 컴포넌트가 많아질수록 가드 누락이 쉽고, 런타임 테스트만으로는 모든 케이스를 잡기 어렵다
- AC6은 측정 가능한 증거가 필요하다

## 검사 대상

```
src/components/motion/
  ScrollReveal.tsx       (I1: opacity 즉시 1)
  CountUp.tsx            (I2: 즉시 최종값)
  MagneticButton.tsx     (I3: 완전 비활성)
  CursorSpotlight.tsx    (I4: 완전 비활성)
  SplitText.tsx          (I5: 즉시 표시)
  ParallaxImage.tsx      (I6: 완전 비활성)
  ScrollProgress.tsx     (I7: 완전 비활성)
  TiltCard.tsx           (I8: 완전 비활성)
  useReducedMotion.ts    (공통 훅)
```

## 정적 분석 규칙

각 컴포넌트에 대해:

1. **`useReducedMotion` import 존재** — 없으면 FAIL
2. **`useReducedMotion()` 호출 존재** — 없으면 FAIL
3. **반환값 분기 존재** — `if (reduced)` / `reduced ? ... : ...` 패턴 1개 이상
4. **PRD 규칙 매핑**:
   - I1, I5: 분기 후 `opacity: 1` 또는 `style={{opacity: 1}}` 즉시 적용 코드 존재
   - I2: 분기 후 카운트 최종값을 직접 set하는 코드 존재 (rAF 루프 우회)
   - I3, I4, I6, I7, I8: 분기 후 이벤트 리스너/모션 컴포넌트 자체 렌더링 안 됨 (early return 또는 조건부 렌더)

5. **모바일 분기** (768px 미만)
   - I3, I4, I6, I8: `window.matchMedia('(min-width: 768px)')` 또는 동등 가드
   - I7: 강도 축소 분기

## 절차

```
1. Glob src/components/motion/*.tsx
2. 각 파일 Read
3. AST가 아니라 grep 패턴으로 충분 (정적 분석 lite):
   - "useReducedMotion" import
   - "useReducedMotion()" 호출
   - 분기 키워드 (if/?:)
4. PRD §7.2 규칙 표와 매핑
5. _workspace/qa/motion_reduce_audit.md 작성
```

## 출력 형식

```markdown
# Motion Reduce Audit — {date}

| Component | useReducedMotion import | hook call | branch | PRD §7.2 rule | mobile guard | verdict |
|---|---|---|---|---|---|---|
| ScrollReveal.tsx | ✓ | ✓ | ✓ | ✓ (opacity:1) | n/a | PASS |
| CountUp.tsx | ✓ | ✓ | ✓ | ✓ (final value) | n/a | PASS |
| MagneticButton.tsx | ✓ | ✓ | ✗ | ✗ (still bound) | ✗ | **FAIL** |
| ... |

**Summary:** 7 PASS / 1 FAIL
**Action:** MagneticButton.tsx에 reduced 분기 추가 + 모바일 가드
```

## 사용 도구

- Glob (모션 디렉토리 스캔)
- Read (각 파일 정독)
- Grep (패턴 검사)
- Write (리포트)

## 호출 예시

```
"모션 컴포넌트 reduce 가드 감사"
"Phase 6 접근성 검증 motion 부분"
"MagneticButton에 reduce 가드 있는지 확인"
```

## 실패 시 대응

FAIL이 1개라도 있으면:
1. motion-engineer에 SendMessage로 누락 컴포넌트 + 누락 항목 명시
2. visual-qa는 AC6를 FAIL로 마킹
3. 수정 후 재실행, 0 FAIL이 될 때까지 반복
