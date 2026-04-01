export type Lang = 'en' | 'ko';

const translations = {
  en: {
    nav: {
      projects: 'Projects',
      stack: 'Stack',
      blog: 'Blog',
      archive: 'Archive',
      hireMe: 'Hire Me',
    },
    hero: {
      available: 'Open for AI service planning & consulting',
      description:
        'AI-powered financial service planner. 38 robo-advisor algorithms launched, S&P mutual fund shipped, internal ops efficiency improved by <strong>83%</strong>. Currently leading service planning & UX for a quant strategy platform while building an AI investment research product.',
      location: 'Location',
      locationValue: 'Seoul / Remote',
      expertise: 'Expertise',
      expertiseValue: 'AI Service Planning & Full-Stack',
    },
    about: {
      section: '01 / Narrative',
      heading:
        "Precision is not just a goal; it's a prerequisite. I build AI systems that feel like",
      headingAccent: 'financial co-pilots.',
      col1: 'From mutual fund planning to robo\u2011advisor design, I leverage deep domain expertise in finance to architect AI agents that are production\u2011grade, reliable, and genuinely useful. 38 algorithms launched at KOSCOM Testbed, with a top annual return of 19.5%.',
      col2: 'On the side, I solo\u2011built JujuTok — a multi\u2011agent AI stock analysis platform with 6 specialized agents, a 4\u2011persona debate system, and real\u2011time SSE streaming. 31,000+ LOC, 147 test cases, one engineer.',
    },
    projects: {
      section: '02 / Curated Works',
      heading: 'The Gallery',
      items: [
        {
          label: 'AI Multi-Agent Platform',
          title: 'JujuTok — AI Stock Research',
          description:
            'A multi-agent AI system featuring 6 specialized agents analyzing stocks in parallel, a 4-persona debate system, and real-time SSE streaming. FastAPI + React 19 + Claude API. 31,000+ LOC, 147 test cases, built solo.',
          tags: ['React 19', 'TypeScript', 'FastAPI', 'Claude API', 'SSE', 'MySQL', 'Docker'],
          linkLabel: 'View Case Study',
        },
        {
          label: 'Quant Strategy Platform',
          title: 'Quant Strategy Platform',
          description:
            'Internal quant strategy analysis platform for asset management. Designed tag-based strategy taxonomy for 200+ strategies, portfolio holdings navigation, and migrated 20+ pages to v2 design using Claude Code workflow.',
          tags: ['Service Planning', 'UX Design', 'ClickHouse', 'Claude Code'],
          linkLabel: 'View Case Study',
        },
      ],
    },
    blog: {
      section: 'Writings',
      heading: 'From the Blog',
      viewAll: 'View all',
      pageTitle: 'Blog',
      pageDescription: 'Project retrospectives, technical decisions, and planning insights.',
      backToBlog: 'Back to Blog',
    },
    stack: {
      section: '03 / Technical Stack',
    },
    timeline: {
      section: '04 / Timeline',
      items: [
        {
          period: '2025.03 — Present',
          title: 'AI Service Planner — Alphabridge',
          org: 'Subsidiary of AssetPlus Asset Management',
          description:
            'Leading service planning & UX for internal quant platform. Planning Voyager AI Research product. Launched RATB 22nd\u201125th robo-advisor algorithms (38 total). Built n8n + Slack news monitoring automation.',
        },
        {
          period: '2023.09 — 2025.03',
          title: 'AI Asset Management Team — AssetPlus',
          org: 'AssetPlus Asset Management',
          description:
            'Planned AI-powered ETF & mutual fund products (S&P500 Growth/Dividend Focus 30). Designed internal ops system reducing trade time from 1hr+ to ~10min (83% reduction).',
        },
        {
          period: '2017.08 — 2019.05',
          title: 'Johns Hopkins University',
          org: 'B.A. Economics (Minor: Marketing)',
          description:
            'Studied economics and marketing at Johns Hopkins University. Built foundation in quantitative analysis and financial theory.',
        },
        {
          period: '2016.01 — 2017.05',
          title: 'Fullerton College',
          org: 'A.A. Economics',
          description:
            'Completed associate degree in economics before transferring to Johns Hopkins.',
        },
      ],
    },
    certifications: {
      section: '05 / Certifications',
      items: [
        { name: 'Securities Investment Advisory', date: '2024.05', org: 'KOFIA' },
        { name: 'Derivatives Investment Advisory', date: '2024.02', org: 'KOFIA' },
        { name: 'Fund Investment Advisory', date: '2023.12', org: 'KOFIA' },
        { name: 'AFPK', date: '2022.04', org: 'Korea FP Association' },
        { name: 'Investment Asset Manager', date: '2021.12', org: 'KOFIA' },
      ],
    },
    contact: {
      section: '06 / Connect',
      heading: "Let's Build.",
      sloganWords: ['Plan.', 'Build.', 'Prove.'] as readonly string[],
      tagline: 'Structure meets execution — from strategy to shipping.',
    },
    footer: {
      copy: 'Hyebin Woo. Designed for precision.',
    },
  },

  ko: {
    nav: {
      projects: '프로젝트',
      stack: '기술 스택',
      blog: '블로그',
      archive: '연혁',
      hireMe: '채용 문의',
    },
    hero: {
      available: 'AI 서비스 기획 · 컨설팅 가능',
      description:
        'AI 기반 금융 서비스 기획자. 로보어드바이저 38개 알고리즘 기획·출시, S&P 공모펀드 실제 출시, 내부 운용시스템 효율 <strong>83%</strong> 개선. 현재 퀀트 전략 분석 플랫폼의 서비스 기획·UX 개선을 주도하며, AI 투자 리서치 플랫폼을 기획하고 있습니다.',
      location: '위치',
      locationValue: '서울 / 원격',
      expertise: '전문 분야',
      expertiseValue: 'AI 서비스 기획 & 풀스택',
    },
    about: {
      section: '01 / 소개',
      heading:
        '정밀함은 목표가 아니라 전제 조건입니다. 진짜',
      headingAccent: '금융 코파일럿을 만듭니다.',
      col1: '공모펀드 기획부터 로보어드바이저 설계까지, 금융 도메인 전문성을 바탕으로 프로덕션 수준의 AI 에이전트를 만듭니다. KOSCOM 테스트베드에서 38개 알고리즘을 출시했으며, 최고 연간 수익률 19.5%를 달성했습니다.',
      col2: '사이드 프로젝트로 주주톡(JujuTok)을 1인 풀스택 개발 — 6개 전문 에이전트, 4인 페르소나 토론 시스템, 실시간 SSE 스트리밍. 31,000줄 이상, 147개 테스트 케이스.',
    },
    projects: {
      section: '02 / 주요 작품',
      heading: '갤러리',
      items: [
        {
          label: 'AI 멀티에이전트 플랫폼',
          title: '주주톡 — AI 주식 분석',
          description:
            '6개 전문 AI 에이전트가 종목을 병렬 분석하고, 4명의 투자 페르소나가 실시간 토론을 벌여 다각도 투자 판단을 제공하는 웹 플랫폼. FastAPI + React 19 + Claude API. 31,000줄 이상, 147개 테스트 케이스, 1인 풀스택 개발.',
          tags: ['React 19', 'TypeScript', 'FastAPI', 'Claude API', 'SSE', 'MySQL', 'Docker'],
          linkLabel: '케이스 스터디 보기',
        },
        {
          label: '퀀트 전략 플랫폼',
          title: '퀀트 전략 플랫폼',
          description:
            '자산운용사 사내 퀀트 전략 분석 플랫폼. 200개+ 전략의 태그 기반 분류 체계 설계, 포트폴리오 Holdings 네비게이션 재설계, Claude Code 활용 워크플로우로 20개+ 분석 페이지 v2 디자인 전환.',
          tags: ['서비스 기획', 'UX 설계', 'ClickHouse', 'Claude Code'],
          linkLabel: '케이스 스터디 보기',
        },
      ],
    },
    blog: {
      section: '글',
      heading: '최근 블로그',
      viewAll: '전체 보기',
      pageTitle: '블로그',
      pageDescription: '프로젝트 회고, 기술적 의사결정, 기획 인사이트를 기록합니다.',
      backToBlog: '블로그로 돌아가기',
    },
    stack: {
      section: '03 / 기술 스택',
    },
    timeline: {
      section: '04 / 연혁',
      items: [
        {
          period: '2025.03 — 현재',
          title: 'AI서비스기획본부 — 알파브릿지',
          org: '에셋플러스자산운용 자회사',
          description:
            '사내 퀀트 플랫폼 서비스 기획·UX 개선 주도. Voyager AI Research 기획. RATB 22~25차 로보어드바이저 알고리즘 38개 기획·출시. n8n + Slack 뉴스 모니터링 자동화 구축.',
        },
        {
          period: '2023.09 — 2025.03',
          title: 'AI자산운용팀 — 에셋플러스자산운용',
          org: '에셋플러스자산운용',
          description:
            'AI 기반 ETF·공모펀드 상품 기획 (S&P500 성장/배당 포커스 30). 내부 운용지원 시스템 기획 — 매매·운용시간 1시간+ → 10분 내외 (83% 단축).',
        },
        {
          period: '2017.08 — 2019.05',
          title: 'Johns Hopkins University',
          org: '경제학 학사 (부전공: 마케팅)',
          description:
            'Johns Hopkins University에서 경제학과 마케팅을 전공. 정량 분석 및 금융 이론의 기초를 다짐.',
        },
        {
          period: '2016.01 — 2017.05',
          title: 'Fullerton College',
          org: '경제학 준학사',
          description:
            'Johns Hopkins 편입 전 경제학 준학사 과정 수료.',
        },
      ],
    },
    certifications: {
      section: '05 / 자격증',
      items: [
        { name: '증권투자권유자문인력', date: '2024.05', org: '금융투자협회' },
        { name: '파생상품투자권유자문인력', date: '2024.02', org: '한국금융투자협회' },
        { name: '펀드투자권유자문인력', date: '2023.12', org: '금융투자협회' },
        { name: 'AFPK', date: '2022.04', org: '한국FP협회' },
        { name: '투자자산운용사', date: '2021.12', org: '금융투자협회' },
      ],
    },
    contact: {
      section: '06 / 연락',
      heading: '함께 만들어요.',
      sloganWords: ['Plan.', 'Build.', 'Prove.'] as readonly string[],
      tagline: '구조를 세우고, 직접 만들고, 숫자로 증명합니다.',
    },
    footer: {
      copy: '우혜빈. 정밀함을 위해 설계됨.',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}

export function getOtherLang(lang: Lang): Lang {
  return lang === 'en' ? 'ko' : 'en';
}
