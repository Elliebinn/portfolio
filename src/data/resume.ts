/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ★ Resume — Single Source of Truth
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * 이 파일 하나를 수정하면 아래 4곳이 모두 업데이트됩니다:
 *   1. Web 이력서       → src/pages/ko/resume.astro       (자동, Astro 빌드 시)
 *   2. PDF 이력서       → src/pages/ko/resume-pdf.astro   (자동, Astro 빌드 시)
 *   3. Obsidian 원본    → ~/Desktop/obsidian/hyebin-vault/3-career/resume/resume-common.md
 *                        (npm run sync:resume 실행 필요)
 *   4. LinkedIn About ko → ~/Desktop/obsidian/hyebin-vault/3-career/linkedin-about.md
 *                        (npm run sync:resume 실행 필요, ko 섹션만. en은 수동 유지)
 *
 * 업데이트 워크플로우:
 *   1) 이 파일(resume.ts) 수정
 *   2) `npm run sync:resume`  (Obsidian 파일 두 개 regenerate)
 *   3) `npm run resume:audit` (4개 파일 일관성 검사)
 *   4) Web/PDF는 Astro dev 서버 또는 빌드로 자동 반영됨
 *
 * 포맷 규칙:
 *   - 불릿 문자열 안에서 **단어**는 bold로 렌더링됩니다 (모든 렌더러 공통).
 *   - Markdown과 같은 문법이지만 Astro/HTML 렌더러가 <strong>으로 변환.
 *   - LinkedIn 제너레이터는 bold 마커를 평문으로 strip합니다 (LinkedIn About은 bold 미지원).
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

// ─── Types ──────────────────────────────────────────────────────────────

export type ResumeProject = {
  title: string;
  /** Optional italic description line shown under the project title */
  description?: string;
  bullets: string[]; // use **bold** markers inline
};

export type ResumeJob = {
  company: string;
  department?: string;
  org?: string; // subline under company (e.g. "에셋플러스자산운용 자회사 · 정규직")
  period: string; // "2025.03 - 현재"
  projects: ResumeProject[];
};

export type ResumeSideProject = {
  title: string;
  sub: string; // "AI 주식 분석 플랫폼"
  role: string; // "1인 기획 · 풀스택 개발"
  quote: string;
  bullets: string[];
};

export type ResumeEducation = {
  name: string;
  degree: string;
  period: string;
};

export type ResumeCertification = {
  name: string;
  date: string;
};

export type ResumeSkillRow = {
  label: string; // "기획 · UX"
  items: string; // joined string "서비스 기획 · 정보구조(IA) 설계 · ..."
};

export type ResumeData = {
  name: { ko: string; en: string };
  role: string; // "AI Product Planner · Finance Domain"
  headline: {
    /** Lead line of the hero heading (web only) */
    lead: string;
    /** Accent line that wraps to a new line (web only) */
    accent: string;
  };
  contact: {
    phone: string;
    email: string;
    github: string;
    githubUrl: string;
    portfolio: string;
    portfolioUrl: string;
    linkedinUrl?: string;
    location?: string;
  };
  summary: {
    lead: string; // one-sentence positioning
    body: string; // multi-sentence context
  };
  jobs: ResumeJob[];
  sideProject: ResumeSideProject;
  education: ResumeEducation[];
  certifications: ResumeCertification[];
  skills: ResumeSkillRow[];
  language: {
    primary: string;
    note?: string;
  };
  /** LinkedIn About — fields that only appear in the LinkedIn ko section */
  linkedin: {
    headline: string; // "[💼금융을 알고, AI로 직접 만드는 기획자]"
    intro: string; // "AI 서비스 기획자 우혜빈입니다. ..."
    currentRole: string[]; // bullet points
    expertise: string[];
    achievements: string[];
  };
};

// ─── Data ───────────────────────────────────────────────────────────────

export const resume: ResumeData = {
  name: {
    ko: '우혜빈',
    en: 'Hye Bin Woo',
  },
  role: 'AI Product Planner · Finance Domain',
  headline: {
    lead: '금융 도메인을 알고,',
    accent: 'AI로 직접 만드는 서비스 기획자.',
  },
  contact: {
    phone: '010-4999-1517',
    email: 'elliebinn@gmail.com',
    github: 'github.com/Elliebinn',
    githubUrl: 'https://github.com/Elliebinn',
    portfolio: 'elliebinn.github.io',
    portfolioUrl: 'https://elliebinn.github.io',
    linkedinUrl: 'https://www.linkedin.com/in/hyebin-woo-62a261291/',
    location: '서울 · 원격',
  },
  summary: {
    lead: '금융 도메인을 알고, AI로 직접 만드는 서비스 기획자입니다.',
    body:
      '에셋플러스자산운용에서 AI 공모펀드 운용지원 시스템을 기획해 매매·운용시간을 **83% 단축**시켰고, **38개 AI 투자 알고리즘**의 로보어드바이저 심사를 통과시켰습니다. 현재는 퀀트 리서치팀이 매일 사용하는 전략 모니터링·운용 관리 대시보드를 처음부터 다시 설계하고 있으며, 화면 설계부터 AI 코딩 도구를 활용한 구현까지 직접 수행합니다. 사이드 프로젝트로 AI 멀티에이전트 주식 분석 플랫폼을 1인으로 기획·개발했습니다.',
  },
  jobs: [
    {
      company: '알파브릿지',
      department: 'AI서비스기획본부',
      org: '에셋플러스자산운용 자회사 · 정규직',
      period: '2025.03 - 현재',
      projects: [
        {
          title: '전략 모니터링 · 성과 분석 · 운용 관리 대시보드 서비스 기획',
          bullets: [
            '펀드 운용 경험을 바탕으로 사용자 요청 뒤 진짜 니즈를 파악하여 **리밸런싱 포인트 네비게이션, 태그 기반 전략 분류** 등 요청에 없던 기능 선제 설계',
            '200개+ 전략 탐색 구조를 **태그 기반 분류 체계로 재편**하고, 사이드바 13개 메뉴를 워크플로우 기반으로 재구조화',
            '디자인 시스템 직접 구축(DESIGN.md 문서화) 후 AI 코딩 도구로 HTML 목업 25개를 20개+ 분석 페이지로 일관되게 전환',
            '외부 UX/UI 디자이너 2인 피드백(2.5/5, 3.9/5)을 7개 요구사항으로 분해한 뒤, Bloomberg·Morningstar 등 14개 레퍼런스를 참조해 개선',
          ],
        },
        {
          title: '프레임워크 마이그레이션 스프린트 (NiceGUI → Vite)',
          bullets: [
            '내부 사용자 확장으로 NiceGUI 서버 부하 한계에 도달하자 20+ 페이지 전체를 React(Vite)로 재구축. **3주 견적 작업을 5일에 완료** (약 70% 단축)',
            '이주 전 선제적으로 구축한 Living PRD, 자체 개발 Claude Code 스킬 **mockup-apply**, 의미 기반 CSS 변수 토큰을 재활용하여 반복 작업 제거',
            '빌드 시간 8s → **741ms**, HMR 즉시. URL·디자인 토큰 100% 유지로 사용자 공지 없이 무중단 배포',
          ],
        },
        {
          title: 'AI 구현 품질 관리 워크플로우 구축',
          bullets: [
            '**mockup-apply**: HTML 목업을 코드에 적용할 때 ADD/CHANGE/KEEP 판단 프레임워크로 변경 범위 체계화, 기존 기능 100% 보존',
            '**frontend-checkpoint**: git stash 기반 변경 전·후 스크린샷 자동 비교 + 11개 체크포인트로 UI 변경 정량 추적',
            '두 프로세스를 Claude Code 스킬로 체계화하여 반복 실행 가능한 워크플로우로 구축',
          ],
        },
      ],
    },
    {
      company: '에셋플러스자산운용',
      department: 'AI자산운용팀',
      org: '정규직 (2024.12 - 2025.03 알파브릿지 파견 겸직)',
      period: '2023.09 - 2025.03',
      projects: [
        {
          title: '로보어드바이저 AI 알고리즘 기획 및 운용심사 (RATB 22~24차)',
          description:
            'KOSCOM 로보어드바이저 테스트베드에서 AI 투자 알고리즘의 운용 능력을 심사받는 과정. 참여 신청부터 사전심사·본심사·재운용심사까지 전 과정을 PM으로 주도.',
          bullets: [
            '**38개 AI 투자 알고리즘**의 사전심사~본심사~재운용심사 전 과정 관리 및 심사 발표 직접 수행',
            'AI 전략 검증 과정에서 반복되는 작업의 병목을 파악하고 자동화 가능 영역을 식별하여 검증 프로세스 효율화에 기여',
            '22~24차 운용심사 및 재운용심사 전 알고리즘 통과 / 최고 수익률 **1년 기준 19.5%** (2024.12 기준)',
          ],
        },
        {
          title: 'AI 기반 금융 투자 상품 기획 (공모펀드 · 외부 컨설팅)',
          bullets: [
            '**S&P500 AI 공모펀드 출시**: 같은 유니버스에서 투자 목적에 따라 AI 종목 선정 기준을 다르게 적용해 성장주·배당주 포커스를 분리한 구조 설계. 현재 실제 고객 자금 운용 중',
            '**외부 자산운용사·증권사 대상 AI 포트폴리오 컨설팅**: 비정형 데이터(뉴스)를 LLM으로 분석하여 투자 유니버스 구성, AI 모델로 종목 선별. LLM 기반 XAI(종목 선정 근거 자연어 설명) 포함 기획서 작성 후 **다올자산운용 MOU 체결**',
          ],
        },
        {
          title: 'AI 운용지원 시스템 기획',
          bullets: [
            'AI 공모펀드 4개의 일일 매매·운용·성과분석 업무를 위한 내부 시스템 기획. 운용역 실제 워크플로우를 관찰해 자동화 가능한 단계와 사람 판단이 필요한 단계를 분리하고 요건정의서 작성',
            '매매·운용시간 평균 1시간+ → 10분 내외로 단축 (**83% 감소**)',
          ],
        },
      ],
    },
  ],
  sideProject: {
    title: '주주톡',
    sub: 'AI 주식 분석 플랫폼',
    role: '1인 기획 · 풀스택 개발',
    quote: '단일 AI의 편향을 시스템 구조로 해결할 수 있을까?',
    bullets: [
      '6개 AI 에이전트(거시·기술·공시·뉴스·재무·온체인)로 분석 축 분리, 4명 투자 페르소나(가치·성장·거시·모멘텀)가 3라운드 토론하는 구조 설계',
      '서비스 컨셉·정보구조·UX 플로우 직접 설계 후 FastAPI + React 19 + Claude API로 풀스택 구현',
    ],
  },
  education: [
    {
      name: 'Johns Hopkins University',
      degree: 'B.A. Economics · Minor in Marketing',
      period: '2017.08 - 2019.05',
    },
    {
      name: 'Fullerton College',
      degree: 'A.A. Economics',
      period: '2016.01 - 2017.05',
    },
  ],
  certifications: [
    { name: 'SQL 개발자 (SQLD)', date: '2026.03' },
    { name: '증권투자권유자문인력', date: '2024.05' },
    { name: '파생상품투자권유자문인력', date: '2024.02' },
    { name: '펀드투자권유자문인력', date: '2023.12' },
    { name: 'AFPK', date: '2022.04' },
    { name: '투자자산운용사', date: '2021.12' },
  ],
  skills: [
    {
      label: '기획 · UX',
      items: '서비스 기획 · 정보구조(IA) 설계 · UX 재설계 · 디자인 시스템 구축 · 요건정의서 작성',
    },
    {
      label: 'AI · 개발',
      items:
        'Claude Code · Claude API · AI 에이전트 설계 · 프롬프트 엔지니어링 · Python · FastAPI · React · TypeScript · SQL · n8n 자동화',
    },
    {
      label: '데이터 · 시각화',
      items: 'ClickHouse · MySQL · Pandas · Plotly · ECharts · Highcharts',
    },
  ],
  language: {
    primary: '한국어 (모국어) · 영어 (비즈니스 고급)',
    note: '미국 대학 졸업 (Johns Hopkins University)',
  },
  linkedin: {
    headline: '[💼금융을 알고, AI로 직접 만드는 기획자]',
    intro:
      'AI 서비스 기획자 우혜빈입니다.\n에셋플러스자산운용에서 AI 공모펀드 운용지원 시스템을 기획하고, 지금은 그 도메인 지식을 기획과 직접 구현에 연결하고 있어요.',
    currentRole: [
      '전략 모니터링·성과 분석·운용 관리 내부 대시보드 서비스 기획 및 UX 개선 주도',
      '프론트 0명 팀에서 화면 설계부터 AI 코딩 도구로 직접 구현까지',
      'AI 멀티에이전트 주식 분석 플랫폼 (주주톡) 1인 기획 · 풀스택 개발 중',
    ],
    expertise: [
      '서비스 기획 · UX 설계 · 정보구조(IA) 재설계',
      '금융 도메인 이해 기반 기획 (공모펀드 · ETF · 퀀트 리서치 환경)',
      'AI 에이전트 설계 · 프롬프트 엔지니어링',
      '디자인 시스템 구축 · AI 기반 프론트엔드 구현',
    ],
    achievements: [
      '로보어드바이저 알고리즘 38개 기획 및 운용심사 수행 (RATB 22~24차)',
      'S&P500 AI 공모펀드 실제 출시',
      '내부 운용지원 시스템 기획 → 매매운용시간 83% 단축',
      '전략 모니터링·성과 분석 대시보드 UX 재설계 — 200개+ 전략 탐색 구조 개편, 리밸런싱 포인트 네비게이션 신규 기획, 20+ 페이지 디자인 전환',
      '프론트엔드 프레임워크 이주 (NiceGUI → React/Vite) — 3주 예상 작업을 5일에 완료, 빌드 8초가 741ms로 단축되고 URL·디자인 토큰 100% 유지해 무중단 배포',
    ],
  },
};

// ─── Render Helpers ─────────────────────────────────────────────────────

/**
 * Convert **bold** markers to HTML <strong> tags.
 * Used by both Astro pages and markdown-to-HTML paths.
 */
export function boldToHtml(text: string, strongClass = ''): string {
  const attr = strongClass ? ` class="${strongClass}"` : '';
  return text.replace(/\*\*([^*]+)\*\*/g, `<strong${attr}>$1</strong>`);
}

/**
 * Strip **bold** markers entirely. Used for LinkedIn About (no bold support).
 */
export function stripBold(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1');
}

/**
 * Keep **bold** markers as-is. Used for Markdown output (resume-common.md).
 */
export function keepBold(text: string): string {
  return text;
}
