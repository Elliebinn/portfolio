# Images Wishlist

> 실제 이미지 투입 시 참조할 위시리스트. 현재 `<ColorPlaceholder>`로 대체 중.
> Reference for real image assets when ready. Currently using `<ColorPlaceholder>`.

---

## Landing Page

### Hero / About Profile
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/about-profile.png` |
| **사용처** | About 섹션 (데스크톱, lg 이상) |
| **권장 해상도** | 680×900px (aspect 3/4) |
| **포맷** | WebP or PNG |
| **톤/무드** | 프로페셔널, 자연광, 중립 배경. DESIGN.md의 "Structured Cloud" 톤과 일치 |
| **대체 텍스트** | "Hyebin Woo - AI 서비스 기획자" |

### Methodology Dashboard
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/landing/methodology-dashboard.jpg` |
| **사용처** | 방법론 섹션 (aspect-video) |
| **권장 해상도** | 1440×810px (16:9) |
| **포맷** | WebP or JPG |
| **톤/무드** | 실제 기획 프로세스 스크린샷 또는 다이어그램. 깔끔한 UI, 차분한 색조 |
| **대체 텍스트** | "기획 프로세스 대시보드" |

### Project Thumbnails (4개)

#### 퀀트 전략 분석 플랫폼
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/landing/project-quant.jpg` |
| **사용처** | 랜딩 프로젝트 카드 (aspect-video) |
| **권장 해상도** | 1200×675px (16:9) |
| **포맷** | WebP or JPG |
| **톤/무드** | 대시보드 전체 화면 캡처. 데이터 밀도가 보이는 구도 |
| **대체 텍스트** | "퀀트 전략 분석 플랫폼 대시보드" |

#### 주주톡: AI 주식 분석
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/landing/project-jujutok.jpg` |
| **사용처** | 랜딩 프로젝트 카드 (aspect-video) |
| **권장 해상도** | 1200×675px (16:9) |
| **포맷** | WebP or JPG |
| **톤/무드** | 다크 모드 앱 화면. AI 분석 결과가 보이는 구도 |
| **대체 텍스트** | "주주톡 AI 주식 분석 화면" |

#### RATB 로보어드바이저
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/landing/project-ratb.jpg` |
| **사용처** | 랜딩 프로젝트 카드 (aspect-video) |
| **권장 해상도** | 1200×675px (16:9) |
| **포맷** | WebP or JPG |
| **톤/무드** | 알고리즘 성과 차트 또는 심사 프로세스 다이어그램 |
| **대체 텍스트** | "RATB 로보어드바이저 운용 현황" |

#### AI 운용지원 시스템
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/landing/project-aum.jpg` |
| **사용처** | 랜딩 프로젝트 카드 (aspect-video) |
| **권장 해상도** | 1200×675px (16:9) |
| **포맷** | WebP or JPG |
| **톤/무드** | 자동화 워크플로우 Before/After 또는 시간 절감 시각화 |
| **대체 텍스트** | "AI 운용지원 시스템 대시보드" |

---

## Project Detail Pages

### Quant Platform Hero
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/landing/quant/hero-v2.jpg` |
| **사용처** | 프로젝트 상세 히어로 (aspect-video) |
| **권장 해상도** | 1920×1080px (16:9) |
| **포맷** | WebP or JPG |
| **톤/무드** | 대시보드 풀 스크린샷. 밝은 테마, 데이터 테이블 + 차트 구도 |
| **대체 텍스트** | "퀀트 플랫폼 대시보드 전체 화면" |

### Quant Platform Before/After
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/landing/quant/before-v2.jpg`, `after-v2.jpg` |
| **사용처** | 프로젝트 상세 비교 섹션 (aspect-video) |
| **권장 해상도** | 1200×675px (16:9) 각각 |
| **포맷** | WebP or JPG |
| **톤/무드** | Before: 레거시 UI (복잡, 밀도 높음). After: 리디자인 UI (정돈, 여백) |
| **대체 텍스트** | "기존 인터페이스" / "새 대시보드" |

### JuJuTok Paradox Visual
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/landing/jujutok/paradox-visual.jpg` |
| **사용처** | 리서치 인사이트 섹션 (h-96, rounded-3rem, grayscale) |
| **권장 해상도** | 1440×576px (약 2.5:1) |
| **포맷** | WebP or JPG |
| **톤/무드** | 추상적/개념적 이미지. 다층 분석, 편향 시각화. grayscale + opacity-30 처리됨 |
| **대체 텍스트** | "편향을 드러내는 다층 분석 이미지" |

---

## Data-Driven Screenshots (src/data/projects.ts)

> 이 이미지들은 실제 제품 스크린샷으로, 이미 존재합니다.
> Phase 2에서 ColorPlaceholder로 교체하지 않았습니다.

### JuJuTok App Screenshots (유지)
- `public/assets/projects/jujutok/home-dark.png` - 홈 화면 (다크)
- `public/assets/projects/jujutok/home.png` - 홈 화면 (라이트)
- `public/assets/projects/jujutok/stock-analysis-dark.png` - 종목 분석
- `public/assets/projects/jujutok/debate-view.png` - 토론 화면
- `public/assets/projects/jujutok/analysis-result.png` - 분석 결과

### Quant Platform Screenshots (유지)
- `public/assets/projects/quant-platform/dashboard-fullview.png` - 대시보드 전체
- `public/assets/projects/quant-platform/dashboard-overview.png` - 대시보드 개요
- `public/assets/projects/quant-platform/before-after/*.png` - Before/After 비교 8장

---

## Blog

### Author Avatar
| 항목 | 값 |
|---|---|
| **현재 파일** | `public/assets/logo-v2-character-circle.png` |
| **사용처** | 블로그 포스트 저자 아바타 (40×40, rounded-full) |
| **권장 해상도** | 80×80px (2x retina) |
| **포맷** | PNG (투명 배경) |
| **톤/무드** | 캐릭터 로고. 현재 사용 중, 교체 불필요 |
| **대체 텍스트** | "HB." |

---

## Notes

- 모든 이미지는 WebP 우선, fallback으로 JPG/PNG
- Retina 대응: 표시 크기의 2x 해상도 권장
- `loading="lazy"` 적용 (Hero 제외)
- 실제 이미지 투입 시 ColorPlaceholder → `<img>` 교체, props만 제거하면 됨
