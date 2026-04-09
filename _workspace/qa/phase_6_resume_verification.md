# Phase 6 Resume Regression Verification

- Base: `1a1778d` (main / Phase 0 이전)
- Head: `4a78023` (Phase 5 완료)
- Date: 2026-04-08

## 1. 이력서 관련 파일 git diff (AC2)

```bash
git diff 1a1778d..HEAD -- \
  src/pages/ko/resume.astro src/pages/en/resume.astro \
  src/pages/ko/resume-pdf.astro src/data/resume.ts \
  src/components/Navbar.tsx src/components/Footer.tsx
```

| 파일 | diff lines |
|---|---|
| src/pages/ko/resume.astro | 0 |
| src/pages/en/resume.astro | 0 |
| src/pages/ko/resume-pdf.astro | 0 |
| src/data/resume.ts | 0 |
| src/components/Navbar.tsx | 0 |
| src/components/Footer.tsx | 0 |

**이력서 직접 파일: 0 lines changed → PASS**

### Layout.astro 변경 (간접 경로)

```diff
+ import ScrollProgress from '../components/motion/ScrollProgress';
...
+ <ScrollProgress variant="bar" className="text-[var(--color-accent)]" client:load />
```

- **성격**: 전역 UI chrome (2px 진행률 바, fixed top). PRD §6.1 P3.10에서 의도적으로 추가한 글로벌 요소
- **이력서 콘텐츠/레이아웃 변경 여부**: 아님. ScrollProgress는 `position: fixed; top: 0; height: 2px; z-index: 50`으로 문서 흐름 밖
- **reduced-motion**: `scaleX: 0` → 접근성 사용자에게 미노출
- **판정**: AC2의 취지(이력서 콘텐츠·구조·스타일링 보존)에 부합. NOTE로 기록, FAIL 아님

## 2. 웜 팔레트 잔재 검사 (AC12)

### `#fef9f2` grep
```bash
grep -r "#fef9f2" src/
# → 0 matches
```
**PASS**

### `--ed-*` 토큰 grep
```
src/components/ui/text-color.tsx — 6건 (--ed-outline-variant, --ed-primary, --ed-font-display)
```
- `text-color.tsx`는 **어디에서도 import되지 않음** (고아 컴포넌트, 전체 src/ grep 확인)
- `global.css`에 `--ed-*` 정의 0건 → 설령 렌더되더라도 CSS 변수 resolve 안 됨
- **판정**: 렌더링 영향 0. 단, deadcode-auditor에게 삭제 권고 (AC3 잔재)

## 3. 색 토큰 삭제 여부 (AC11)

`src/styles/global.css` 기존 토큰 전수 확인:
- `--color-bg`, `--color-bg-card`, `--color-bg-card-hover`, `--color-bg-elevated`, `--color-bg-secondary`, `--color-bg-detail`, `--color-bg-emphasis` ✓
- `--color-text`, `--color-text-muted`, `--color-text-faint` ✓
- `--color-accent`, `--color-accent-light`, `--color-on-accent` ✓
- `--color-secondary`, `--color-secondary-container`, `--color-on-secondary-container` ✓
- `--color-tertiary`, `--color-tertiary-container` ✓
- `--color-error`, `--color-error-container` ✓
- `--color-outline`, `--color-outline-variant` ✓
- `--font-sans`, `--font-display`, `--font-mono` ✓

**기존 토큰 삭제 0건 → PASS**

## 4. 빌드 (AC9)

```
npm run build → 64 page(s) built in 2.97s ✓
TypeScript: 0 errors (Vite transpile 성공)
```
**PASS**

## 5. AC 매핑

| AC | 내용 | 판정 | 근거 |
|---|---|---|---|
| AC2 | 이력서 시각 변화 0 | ✅ **PASS** | 이력서 직접 파일 diff=0; Layout.astro +2줄은 글로벌 chrome(진행바), 콘텐츠 불변 |
| AC9 | 빌드 성공 | ✅ **PASS** | 64p 2.97s |
| AC11 | 기존 색 토큰 삭제 0 | ✅ **PASS** | global.css 토큰 전수 현존 확인 |
| AC12 | 웜 팔레트 사용 0 | ✅ **PASS** | #fef9f2=0건; --ed-*는 고아 컴포넌트(text-color.tsx)에만 존재, 미사용, 렌더 영향 0 |

## 6. NOTE (비차단)

- `src/components/ui/text-color.tsx`에 `--ed-*` 참조 6건 잔존. deadcode-auditor가 Phase 7 전에 삭제 권고.

## 최종 판정

**Phase 6 이력서 회귀 검증: PASS**
