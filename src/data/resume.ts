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
  role: 'AI Product Manager · Finance Domain',
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
      '에셋플러스자산운용에서 AI 공모펀드 운용지원 시스템을 기획하여 매매·운용시간 **83% 단축**을 이끌었고, **38개 AI 투자 알고리즘**의 로보어드바이저 심사를 **PM으로 주도**했습니다.\n현재는 퀀트 리서치팀이 매일 사용하는 전략 모니터링·운용 관리 대시보드를 처음부터 다시 설계하고 있으며,\n화면 설계부터 AI 코딩 도구를 활용한 구현·**품질 검증까지 직접 책임지고** 수행합니다. 사이드 프로젝트로 AI 멀티에이전트 주식 분석 서비스를 1인으로 기획·개발하고 있습니다.',
  },
  jobs: [
    {
      company: '알파브릿지',
      department: 'AI서비스기획본부',
      org: '에셋플러스자산운용 자회사 · 정규직',
      period: '2025.03 - 현재',
      projects: [
        {
          title: '전략 모니터링·성과 분석·운용 관리 대시보드 서비스 기획',
          bullets: [
            '리서처 워크플로우를 관찰해 표면 요청 뒤 근본 니즈를 진단. "검색 추가" 요청을 분류 체계 부재로, "달력 변경" 요청을 리밸런싱 일자 점프로 재정의하여 선제 설계',
            '467개 전략의 탐색 구조를 유니버스 × 태그 분류로 재편. 탭 3개로 분산된 분석 흐름을 성과요약 + 매매탐색 2페이지로 통합',
            '화면 구현 중 샤프지수 산식 오류 등 지표 품질 문제를 직접 감지하여 **10개 지표 산식을 표준화**하고 461개 지표를 단일 glossary로 통합',
            '목업 시안을 Slack으로 공유하는 피드백 사이클을 구축하여 1~2일 내 반영. UX/UI 전문가 평가 **2.5에서 3.9**/5로 개선',
          ],
        },
        {
          title: 'AI 도구 활용 구현 및 품질 관리',
          bullets: [
            'NiceGUI 서버 부하 한계 도달 시 React(Vite) 전환을 결정. 선제적으로 준비한 PRD·디자인 토큰·자체제작 스킬의 재활용으로 **3주 견적을 1주일에 완료**',
            'AI 구현 중 기존 기능 유실 문제를 발견하고 변경 범위(**ADD/CHANGE/KEEP**)와 시각 회귀 검증이라는 품질 기준을 정의. AI에 맡길 영역과 사람이 판단할 영역을 분리하는 검증 워크플로우를 체계화',
          ],
        },
      ],
    },
    {
      company: '에셋플러스자산운용',
      department: 'AI자산운용팀',
      org: '정규직 (2023.09 - 2025.03 알파브릿지 파견 겸직)',
      period: '2023.09 - 2025.03',
      projects: [
        {
          title: '로보어드바이저 AI 알고리즘 기획 및 운용심사 (RATB 22~24차)',
          description:
            'KOSCOM 로보어드바이저 테스트베드에서 AI 투자 알고리즘의 운용 능력을 심사받는 과정. 참여 신청부터 사전심사·본심사·운용심사까지 전 과정을 PM으로 주도.',
          bullets: [
            '**38개 AI 투자 알고리즘**의 심사 전 과정을 관리하고 심사위원회 발표를 직접 수행. 퀀트팀과 협업하여 투자 유니버스 확장 방향을 제안',
            '금융 AI 규제 심사기준에 맞춰 알고리즘 적합성을 검증하고, 반복 병목을 파악하여 검증 프로세스를 효율화',
            '22~24차 운용심사 및 사후운용심사 전 알고리즘 통과. 최고 수익률 **1년 기준 19.5%** (2024.12 기준)',
          ],
        },
        {
          title: 'AI 기반 금융 투자 상품 기획 (공모펀드 · 외부 컨설팅)',
          bullets: [
            '**S&P500 AI 공모펀드 2건 출시 지원**: 성장주·배당주 포커스를 분리한 펀드의 제안서 작성 및 기획서 정리. 현재 실제 상장·운용 중',
            '**외부 자산운용사 대상 AI 포트폴리오 컨설팅**: AI 포트폴리오 운용 프로세스를 고객사 관점의 상품 기획안으로 정리. 고객사 피드백에서 XAI(종목 선정 근거 설명) 필요성을 파악하여 제안·반영. **다올자산운용 MOU 체결**',
          ],
        },
        {
          title: 'AI 운용지원 시스템 기획',
          bullets: [
            '운용역 워크플로우를 관찰하여 자동화 가능 단계와 사람 판단이 필요한 단계를 분리하고 요건정의서를 작성. AI 공모펀드 4개의 일일 매매·운용·성과분석 시스템 기획을 주도',
            '매매·운용시간 평균 1시간 이상에서 10분 내외로 단축 (**83% 감소**)',
          ],
        },
      ],
    },
  ],
  sideProject: {
    title: '주주곰',
    sub: 'AI 주식 분석 서비스 (개인 프로젝트)',
    role: '1인 기획 · 개발 진행 중',
    quote: '',
    bullets: [
      '단일 AI의 편향 문제를 해결하기 위해 6개 에이전트로 분석 축을 분리하고, 4명의 투자 페르소나가 3라운드 토론하는 다관점 검증 구조를 설계',
      '점수가 아니라 판단 근거와 다음 행동까지 연결하는 것을 핵심 가치로 설정. 분석 완료 후 관심종목 담기·알림 설정·토론 시작으로 이어지는 액션 루프를 설계',
      '초보 투자자가 정보에 압도되지 않도록 결론 1줄·핵심 근거 3개·에이전트별 상세의 3단계 정보 계층으로 단계적 공개 방식을 적용',
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
      items: '서비스 기획 · 정보구조(IA) 설계 · UX 재설계 · 요건정의서 작성',
    },
    {
      label: 'AI · 도구',
      items: 'Claude Code/API · AI 에이전트 설계 · Python(학습 중) · SQL · GitHub',
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
      '프론트 0명 팀에서 화면 설계부터 AI 코딩 도구로 구현·검증까지 직접 책임',
      'AI 멀티에이전트 주식 분석 서비스 (주주곰) 1인 기획·개발 중',
    ],
    expertise: [
      '서비스 기획 · UX 설계 · 정보구조(IA) 재설계',
      '금융 도메인 이해 기반 기획 (공모펀드 · ETF · 퀀트 리서치 · 금융 AI 규제)',
      'AI 에이전트 설계 · AI 도구 활용 구현',
    ],
    achievements: [
      '로보어드바이저 알고리즘 38개 심사를 PM으로 주도 (RATB 22~24차)',
      'S&P500 AI 공모펀드 2건 출시 지원',
      '내부 운용지원 시스템 기획 주도, 매매운용시간 83% 단축',
      '전략 모니터링·성과 분석 대시보드 — 467개 전략 IA 재설계, 10개 지표 표준화, 20+ 페이지 전환',
      '프레임워크 이주 (NiceGUI에서 React/Vite) — 3주 견적을 1주일에 완료',
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
