# PRD.md

> 혜빈님 포트폴리오 — Product Requirements Document
> 목업 기준: `portfolio-editorial-dense.html`
> 최종 갱신: 2026-04-17

---

## 0. Overview

### 0.1 Scope
- **대상 페이지**: Landing (/), Case Study Detail (/work/[slug]), Writing Index (/writing), Writing Detail (/writing/[slug]), Resume (/resume), About (/about)
- **기준 목업**: `portfolio-editorial-dense.html`
- **기준 문서**: CONCEPT.md, DESIGN.md

### 0.2 Tech Stack (권장)
| 영역 | 선택 | 근거 |
|------|------|------|
| Framework | Astro 5 + Islands | 정적 + 선택적 React. 현재 혜빈님 사이트 기반 유지 |
| Styling | Tailwind 4 + CSS Variables | DESIGN.md 토큰 직매핑 |
| Interactive | React 19 (islands) | 커서, 네비, 테마 토글 |
| Motion | Motion (Framer Motion) | 스프링 + ease 커스텀 |
| Content | MDX (writing, case studies) | 마크다운 + 컴포넌트 |
| Icon | @phosphor-icons/webcomponents v2.1 | 이모지 대체 |
| Fonts | Syne + Inter + Paperlogy + Pretendard | DESIGN.md 4.1 참조 |

### 0.3 Non-Goals (명시적 제외)
- 서버사이드 인증
- 댓글/커뮤니티 기능
- CMS (MDX로 충분)
- 3개국 이상의 i18n (한/영 2종만)

---

## 1. Landing Page (/)

### 1.1 Section Requirements

| # | Section | Must-have | Nice-to-have |
|---|---------|-----------|-------------|
| 01 | Preloader | 1회 세션 재생, 이름 슬라이드 업, 프로그레스 바 | `sessionStorage` 저장으로 첫 방문만 |
| 02 | Fixed Nav | 3-상태(default/scrolled/mobile), 테마 토글, CTA 버튼 | Keyboard 탐색 시 포커스 링 |
| 03 | Hero | min-height 100svh, 상단 메타, 거대 타이틀, 서브타이틀, 메트릭 옵션 | 타이틀 라인별 stagger reveal |
| 04 | Skill Marquee | 무한 가로 스크롤, hover pause | 2배 복제로 seamless loop |
| 05 | Selected Work | 3개 케이스 카드, 각각 메타+비주얼 2열 | 반응형: 모바일 1열 스택 |
| 06 | How I Think | 4단계 프로세스, sticky 왼쪽 + 스크롤 오른쪽 | Phosphor 아이콘 단계별 |
| 07 | Writing Teaser | 최근 4개 글, hover 시 arrow + 배경 | 카테고리 태그 |
| 08 | Artifacts | PRD/DESIGN/METRICS 3카드, 코드 프리뷰 | Syntax highlighting |
| 09 | About | 5/7 split grid, lead + KV + skills pill | Phosphor 아이콘 |
| 10 | Contact | 거대 타이포 CTA, 3개 링크, 푸터 | 이메일 클립보드 복사 |

### 1.2 Interaction Spec

#### Custom Cursor
- **해상도**: Arrow 22×26px, Label 4px padding × 10px
- **Lerp factor**: 0.5 (즉시성 + 부드러움)
- **Blend mode**: `mix-blend-mode: difference`
- **Hide conditions**: `@media (hover: none)`, `prefers-reduced-motion`
- **Label states**: "Guest" (기본), "View case" (카드), "Copy" (이메일), "Visit" (외부 링크)

#### Nav Morph
- **Trigger**: `scrollY > 60px`
- **Default**: 풀-width, padding 16px 44px, transparent bg
- **Scrolled**: 중앙 정렬 pill, `backdrop-blur(20px)`, border, 섀도우 0 2px 24px rgba(0,0,0,0.3)
- **Transition**: 600ms `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

#### Theme Toggle
- **Default**: dark (첫 방문)
- **Persist**: `localStorage['hb-theme']`
- **Override system preference**: yes (명시적 토글만 존중)
- **Accent retained**: 양 모드에서 `#FF3D00` 고정

#### Scroll Reveal
- IntersectionObserver, threshold 0.15
- `.reveal { opacity: 0; transform: translateY(32px); }`
- `.reveal.visible { opacity: 1; transform: translateY(0); }`
- Once-only (observe 후 unobserve)

### 1.3 Responsive Behavior
- `< 768px`: 섹션 padding 80px 20px, work 카드 세로 스택, about grid 1열
- `< 1024px`: work 카드 세로 스택 (2열 X), metric 3개 → 2줄
- `< 480px`: hero title `clamp(48px, 10vw, 72px)`, preloader 축소

---

## 2. Case Study Detail (/work/[slug])

### 2.1 Structure (in order)

```
┌─────────────────────────────────────┐
│  [Back to Work ←]    [Next Project →]│  ← Pill Nav
├─────────────────────────────────────┤
│                                     │
│  № 01 · 2025 — Now                  │
│  AED — Alpha Engine                 │  ← Hero (큰 타이틀)
│  Dashboard                          │
│                                     │
│  A tool used daily by 4 researchers.│
│                                     │
│  [Company] [Role] [Duration] [Team] │  ← 메타 4개
├─────────────────────────────────────┤
│  Hero Image (16:10, full-bleed)     │
├─────────────────────────────────────┤
│  📊 Metrics Bar                     │
│  32 mockups · 20+ pages · 1.1.8    │
├─────────────────────────────────────┤
│  01 / Context                       │
│  "전략은 쏟아지는데, 보여줄 화면이    │  ← 문제 정의
│   없었습니다"                        │
│   (왜 이 프로젝트가 필요했나)         │
├─────────────────────────────────────┤
│  02 / Problem (4 카드 2×2)           │
│  4가지 Problem, 하나의 플랫폼으로     │
├─────────────────────────────────────┤
│  03 / Approach                      │
│  "Figma 대신 HTML, 회의 대신 목업"   │
│  (Tab 구조: 목업 비교/Slack/Before-After/문서) │
├─────────────────────────────────────┤
│  04 / Process (Scrollytelling)      │
│  각 단계: Problem → Thinking →       │
│  Decision → Outcome                 │
├─────────────────────────────────────┤
│  05 / Artifacts                     │
│  PRD, DESIGN.md, METRICS 카드 3개    │
│  (클릭 시 독립 뷰어 모달 또는 페이지) │
├─────────────────────────────────────┤
│  06 / Platform Walkthrough          │
│  디바이스 목업으로 주요 화면 투어      │
├─────────────────────────────────────┤
│  07 / Impact                        │
│  거대 숫자 에디토리얼 (38 / 200+ / −83%) │
├─────────────────────────────────────┤
│  08 / Learnings                     │
│  3개 러닝 카드                       │
├─────────────────────────────────────┤
│  Next: JujuTok →  (거대 링크 배너)  │
└─────────────────────────────────────┘
```

### 2.2 Must-have Interactions
- **Reading progress bar**: 스크롤 연동, 상단 2px
- **Sticky section anchors**: 우측 얇은 ToC (현재 섹션 하이라이트)
- **Scrollytelling**: Process 섹션은 좌측 sticky 이미지 + 우측 스크롤 콘텐츠
- **Artifact preview modal**: 카드 클릭 시 MD 전문 뷰어 (다크 코드블록)
- **Image lightbox**: 큰 이미지 클릭 시 풀스크린
- **Next project 링크**: 다음 케이스로 자동 prefetch

### 2.3 Content Schema (MDX frontmatter)

```yaml
---
slug: aed
number: "01"
title: "AED — Alpha Engine Dashboard"
subtitle: "Redesigning how quant researchers work"
year: "2025 — Now"
company: "AssetPlus Asset Mgmt."
role: "AI Service Planner"
duration: "10 months"
team: "4 researchers · 2 engineers"
status: "Live · v1.1.8"
tags: [fintech, dashboard, ia, solo-design]
metrics:
  - value: "32"
    label: "Mockups shipped"
  - value: "20+"
    label: "Pages designed"
  - value: "−83%"
    label: "Ops time reduced"
next: "jujutok"
---
```

---

## 3. Resume Page (/resume)

### 3.1 Concept
- **목적**: 면접/채용 제출용 + 스크롤 읽기 둘 다 대응
- **톤**: 랜딩보다 절제된 에디토리얼. 커서·블롭 없음. **문서 모드**.
- **기본 동작**: Light 모드 강제 (프린트 친화). 다크 옵션 없음.
- **URL-first**: 공유 링크로 한 화면에 모든 정보 스캔 가능해야 함.

### 3.2 Structure

```
┌─────────────────────────────────────┐
│  [← Portfolio]     [Download PDF]   │  ← 얇은 네비
├─────────────────────────────────────┤
│                                     │
│  Hyebin Woo                         │  ← 거대 이름 (Paperlogy)
│  AI Service Planner · Seoul         │
│                                     │
│  elliebinn@gmail.com · LinkedIn · GitHub │
│                                     │
├─────────────────────────────────────┤
│  SUMMARY                            │
│  "금융을 이해하는 기획자,             │
│   기술로 검증하는 실행자."            │
│   (3-4줄, AI PM 포지셔닝)             │
├─────────────────────────────────────┤
│  EXPERIENCE                         │  ← 가장 큰 비중
│                                     │
│  2022 — Now  AssetPlus (여기 현재)   │
│              AI Service Planner      │
│              · Key achievement 1      │
│              · Key achievement 2      │
│              · Key achievement 3      │
│                                     │
│  2021 — 2022 AssetPlus (이전 역할)   │
│              Operations                │
│              · ...                   │
├─────────────────────────────────────┤
│  EDUCATION                          │
│  2021 — 2022  Johns Hopkins          │
│              M.S. Finance             │
│  2015 — 2020  Fullerton College      │
│              B.A. Business            │
├─────────────────────────────────────┤
│  SELECTED PROJECTS                  │
│  AED, JujuTok, RATB 각 2-3줄 요약    │
│  (각 링크 → case study 상세)         │
├─────────────────────────────────────┤
│  CERTIFICATIONS & SKILLS            │
│  투자자산운용사 · SQLD · ADsP         │
│  Service Planning · AI · Finance...  │
├─────────────────────────────────────┤
│  LANGUAGES                          │
│  Korean (Native)                    │
│  English (Professional)             │
└─────────────────────────────────────┘
```

### 3.3 Must-have Features
- **PDF 다운로드 버튼** 우상단 (브라우저 print dialog 호출, 프린트 CSS 최적화)
- **Single column 가독성**: max-width 720px, 본문 16px 1.65 line-height
- **연도 타임라인**: 왼쪽 사이드바 120px 고정, mono 폰트로 연도만
- **섹션 라벨**: UPPERCASE + tracking-widest, 11px
- **페이지 네비 없음**: 스크롤만으로 완독 가능
- **링크 표시**: 외부 링크에 `↗` 아이콘 자동 삽입

### 3.4 Print CSS
```css
@media print {
  body { background: white; color: black; cursor: auto; }
  .nav, .back-link, .download-btn { display: none; }
  section { break-inside: avoid; }
  a::after { content: " (" attr(href) ")"; font-size: 10px; color: #666; }
}
```

---

## 4. Writing Pages

### 4.1 Index (/writing)
- **레이아웃**: 랜딩의 Writing teaser를 확장한 긴 리스트
- **필터**: 카테고리 (Planning / Deep-dive / Skill / Project) 필러 바
- **정렬**: 최신순 기본, 연도 그룹 헤더 (2026 / 2025 / 2024)
- **글 엔트리**: `N/XX · 제목 · 카테고리 · 읽기 시간` + subtitle

### 4.2 Detail (/writing/[slug])
- **구조**: MDX 렌더링, single column 720px
- **폰트**: 본문 17px, Pretendard
- **컴포넌트**: `<Callout>`, `<Code>`, `<Image>`, `<Quote>` 허용
- **TOC**: 우측 sticky (1024px+), 섹션 하이라이트
- **Footer**: 이전/다음 글 + 태그 + 공유 버튼

---

## 5. About Page (/about)

### 5.1 Purpose
랜딩 About 섹션의 **확장판**. 배경·관심사·영향 받은 것 등 personal 측면 심화.

### 5.2 Sections
1. **Opening Statement** — 거대 타이포 1문장
2. **Career Narrative** — Johns Hopkins → AssetPlus → 주주톡 flow
3. **Methodology Deep Dive** — 4단계 프로세스 각각 상세
4. **Reading / Influences** — 책/논문/사람 영향받은 것
5. **Workspace** — 도구, 환경, 일하는 방식
6. **Currently / Now Page** — 지금 뭐에 관심 있는지 (자주 업데이트)

---

## 6. Performance & A11y

### 6.1 Performance Budget
- LCP ≤ 2.0s (데스크톱) / 2.5s (모바일)
- CLS ≤ 0.1
- FID ≤ 100ms
- 폰트 로드: `font-display: swap` 필수
- 이미지: WebP/AVIF 우선, lazy loading 기본

### 6.2 Accessibility Targets
- Lighthouse A11y ≥ 95
- WCAG 2.1 AA 준수
- Keyboard-only 탐색 100% 가능
- Screen reader: 모든 랜드마크 + aria-label

---

## 7. Implementation Phases

| Phase | 기간 | 내용 |
|-------|------|------|
| **Phase 0** | 1일 | 디자인 토큰 반영, 폰트 로딩, 기본 레이아웃 |
| **Phase 1** | 3-5일 | 랜딩 페이지 풀 구현 + 인터랙션 |
| **Phase 2** | 3-4일 | Case Study Detail 템플릿 + AED 1건 |
| **Phase 3** | 2일 | Resume 페이지 + Print CSS |
| **Phase 4** | 2일 | Writing Index + Detail 템플릿 |
| **Phase 5** | 1-2일 | About Page 확장 |
| **Phase 6** | 1일 | A11y + Performance 최적화 |
| **Phase 7** | 1일 | 나머지 2개 케이스 스터디 이식 |

---

## 8. Success Metrics (Post-launch)

- [ ] 30초 스캔 테스트 (5명 대상): "AI PM 맞나요?" 긍정 응답 5/5
- [ ] 케이스 스터디 평균 체류 시간 > 2분
- [ ] 모바일 completion rate > 60%
- [ ] Lighthouse 모든 카테고리 ≥ 95

---

## 9. Open Questions

- [ ] 케이스 스터디 `/work/aed` 에 실제 iframe 목업 임베드할지 결정
- [ ] Resume PDF는 수동 유지 vs 자동 생성 (react-pdf)
- [ ] Writing RSS 피드 필요 여부
- [ ] Contact form 추가 여부 (현재는 이메일만)
