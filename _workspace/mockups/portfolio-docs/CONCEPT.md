# CONCEPT.md

> 혜빈님 포트폴리오 웹사이트 — 컨셉 & 포지셔닝 문서
> 최종 갱신: 2026-04-16

---

## 1. Vision (한 줄)

**"AI 서비스 기획자가 신뢰를 얻는 방식 — 기획서와 목업과 지표 감사로 증명하는 포트폴리오."**

---

## 2. Positioning

### 2.1 Who
- **역할**: AI Service Planner / Product Manager
- **도메인**: Finance × AI (금융 + AI 하이브리드)
- **경력 단계**: Mid-career (2022~Now, 3-4년차 PM)
- **차별점**: PRD만 쓰는 PM이 아니라 **HTML 목업을 직접 만들고 지표 산식까지 감사하는 풀스택 기획자**

### 2.2 Target Audience (읽는 사람)
| 우선순위 | 타겟 | 니즈 |
|---------|------|------|
| 1순위 | AI 서비스 회사 채용담당자 (한/영) | PM 역량의 증거 빠르게 스캔 |
| 2순위 | 핀테크 PM 팀 리더 | 도메인 경험 깊이 확인 |
| 3순위 | 디자이너·개발자 동료 | 협업 방식 파악 |
| 4순위 | 본인 (portfolio-as-thinking) | 자기 정리와 업데이트 |

### 2.3 Core Message
| 메시지 | 증거 |
|-------|------|
| **문제 정의부터 시작한다** | "add search" → taxonomy 사례 |
| **직접 만들 수 있다** | HTML 목업 32개, 주주톡 31K LOC |
| **지표를 감사한다** | METRICS_AUDIT 14개 지표 교차 검증 |
| **금융 도메인 실무** | 38개 AI 알고리즘, 200+ 계좌 운용 |

---

## 3. Tone & Aesthetic

### 3.1 Design Tone Triad

```
Editorial Precision × Finance Trust × AI Confidence
```

- **Editorial Precision**: 매거진 같은 타이포 리듬, 자간·여백의 의도성
- **Finance Trust**: 과장 없는 수치, 보수적 컬러 팔레트
- **AI Confidence**: 현대적 인터랙션 (프리로더, 커서, 테마 토글) — 단, 절제

### 3.2 Reference Sites (Inspiration)
| 사이트 | 어떤 부분을 참고했나 |
|--------|------------------|
| dvdrod.com | 케이스 카드 구조(메타 좌 / 블롭 우), 3-상태 네비, 커서 라벨 |
| karri.saarinen.com | 보더리스 Swiss precision |
| theuxda.com/portfolio | 금융 도메인의 문제-먼저 스토리텔링 |
| jiwonko.com | 타이포 주도 에디토리얼 |
| 토스(박현우) | 한국 핀테크 감각 |

### 3.3 Anti-Patterns (하지 말 것)
- ❌ 디자이너 포트폴리오 흉내 (블롭 과다, 화려한 3D, 장식적 모션)
- ❌ 스타트업 랜딩 톤 (제품 판매 같은 hype)
- ❌ 기술 나열 프레이밍 ("Figma + Notion + Slack 사용")
- ❌ 자기 자랑 프레이밍 ("저는 대단합니다")
- ❌ 과도한 미니멀 (경력 확립되기 전엔 비어 보임)

---

## 4. Content Strategy

### 4.1 Density Strategy — "적은 프로젝트, 높은 밀도"

프로젝트 수 대신 **4가지 축**으로 밀도를 만든다:

| 축 | 콘텐츠 | 분량 목표 |
|----|--------|----------|
| **Case Studies** | AED, 주주톡, RATB | 2-3개 풀 트리트먼트 |
| **Methodology** | 4단계 프로세스 (문제 발견/구조 설계/해상도/검증) | 섹션 하나 + 필요 시 독립 페이지 |
| **Artifacts** | PRD, DESIGN.md, METRICS_AUDIT | 카드 미리보기 + 링크 |
| **Writing/Notes** | 블로그 글, 짧은 생각 | 10+ 글 누적 |

### 4.2 Narrative Framework (각 케이스 스터디)

```
Judgment → Process → Artifacts → Outcome → Reflection
(판단)    (과정)    (문서증거)  (지표)    (회고)
```

**"뭘 만들었나"가 아니라 "왜 이 판단을 내렸나"로 시작**하는 것이 원칙.

### 4.3 Voice
- **한국어**: 담담하고 구체적. 확신 있지만 과시하지 않음. "~습니다" 체 통일.
- **영어**: 타이트하고 간결. 수식어 최소화. Declarative.
- **혼용 규칙**: 헤드라인은 영문(임팩트), 본문은 한영 혼용 OK.

---

## 5. Success Criteria

### 5.1 정성적
- [ ] 채용담당자가 30초 스캔 후 **"이 사람 뭘 하는 사람이다"**를 한 문장으로 말할 수 있다
- [ ] "디자이너처럼 보인다"가 아니라 **"생각 깊은 PM이다"** 인상
- [ ] 경쟁 포트폴리오 대비 **케이스 스터디 깊이**에서 차별화

### 5.2 정량적
- [ ] 데스크톱 LCP < 2.0초
- [ ] Lighthouse Accessibility 95+
- [ ] 모바일 Tap target 모두 ≥ 44px
- [ ] `prefers-reduced-motion` 준수 100%

---

## 6. Non-Goals (명시적 제외)

- 블로그 플랫폼화 (포트폴리오 포커스 유지)
- 고객/클라이언트 리뷰 섹션 (PM 컨텍스트엔 부적절)
- Dark-only / Light-only 강제 (토글 제공)
- 다국어 서비스 수준의 i18n (한/영 2종 유지)
- 이메일 구독, 뉴스레터 (Out of scope)

---

## 7. Information Architecture

```
/ (Home)
├── Hero
├── Skill Marquee
├── Selected Work (3 cards)
│   ├── /work/aed
│   ├── /work/jujutok
│   └── /work/ratb
├── How I Think (Methodology)
├── Writing (blog teaser)
├── Artifacts (PRD/DESIGN/METRICS cards)
├── About
└── Contact

/about (Deep dive)
/writing (Blog index)
/writing/[slug]
/work/[slug] (Full case study)
```

---

## 8. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| 커스텀 커서가 디자이너 같다는 인상 | Medium | 커서 비활성 옵션 또는 subtle하게 조정 |
| 다크모드가 금융 신뢰감 손상 | Medium | Light 모드로 기본 변경 가능하게 토글 제공 |
| 프로젝트 3개 = 빈약 | High | Writing/Artifacts/Methodology로 밀도 보완 |
| Paperlogy 폰트 CDN 장애 | Low | Pretendard fallback 필수 |
| 실제 회사명(AssetPlus)/전략명 노출 | Medium | 익명화된 PRD/METRICS 스니펫만 공개 |
