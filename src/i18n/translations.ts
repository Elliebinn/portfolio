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
        '금융을 알고, AI로 직접 만드는 서비스 기획자. 에셋플러스자산운용에서 AI 공모펀드 운용지원 시스템을 기획했고, 현재는 퀀트 리서치팀의 전략 모니터링·운용 관리 화면을 처음부터 다시 설계하고 있습니다. 사이드 프로젝트로 AI 멀티에이전트 주식 분석 플랫폼을 1인 기획·개발 중.',
      location: '위치',
      locationValue: '서울 / 원격',
      expertise: '전문 분야',
      expertiseValue: 'AI 서비스 기획 & 풀스택',
    },
    about: {
      section: '01 / 소개',
      heading: '금융을 알면 기획이 달라집니다.',
      headingAccent: '요청이 오기 전에 보이는 것들이 있어요.',
      col1: '에셋플러스자산운용에서 AI 공모펀드 운용지원 시스템을 기획하며 금융 현업을 경험했습니다. 지금은 퀀트 리서처들이 매일 쓰는 전략 모니터링·성과 분석 대시보드를 처음부터 다시 설계하고 있어요. 프론트 0명인 팀에서, 화면 설계부터 AI 코딩 도구를 활용한 구현까지 직접 합니다.',
      col2: '사이드 프로젝트로 주주톡(JujuTok)을 1인 풀스택 개발 중 — 6개 전문 AI 에이전트, 4인 투자 페르소나 토론 시스템, 실시간 SSE 스트리밍. 31,000줄 이상, 147개 테스트 케이스.',
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
          label: '케이스 스터디 / 서비스 기획',
          title: '퀀트 리서처의 불편을 직접 고친 이야기',
          description:
            '리서처 4명이 매일 쓰는 도구. 프론트 0명, 디자이너 0명. 펀드 운용 경험에서 나온 기획 판단으로 요청에 없던 기능을 만들고, HTML 목업 25개로 20개 이상의 페이지를 직접 설계했어요.',
          tags: ['서비스 기획', 'AI 구현', '디자인 시스템', '사내 도구'],
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
          period: '2025.04 — 현재',
          title: '알파브릿지',
          org: 'AI서비스기획본부 · 에셋플러스자산운용 자회사',
          description:
            '<strong>전략 모니터링·성과 분석·운용 관리 대시보드</strong> 서비스 기획 및 UX 개선 주도.<br/>프론트·디자이너 없는 환경에서 화면 설계부터 AI 코딩 도구로 직접 구현.',
        },
        {
          period: '2023.09 — 2025.03',
          title: '에셋플러스자산운용',
          org: 'AI자산운용팀',
          description:
            '<strong>S&P500 AI 공모펀드 출시</strong> 및 ETF 기획.<br/>AI 공모펀드 운용지원 시스템 기획 — 매매·운용시간 <strong>83% 단축</strong>.<br/>RATB 22~24차 로보어드바이저 알고리즘 38개 기획 및 운용심사 수행.',
        },
        {
          period: '2017.08 — 2019.05',
          title: 'Johns Hopkins University',
          org: '경제학 학사 (부전공: 마케팅)',
          description:
            '금융·시장 구조 이해를 바탕으로 현재 AI 금융 서비스 기획에 연결.<br/>마케팅 부전공을 통해 사용자 관점과 제품 포지셔닝 사고 습득.',
        },
        {
          period: '2016.01 — 2017.05',
          title: 'Fullerton College',
          org: '경제학',
          description: 'Johns Hopkins University 편입 준비.',
        },
      ],
    },
    certifications: {
      section: '05 / 자격증',
      items: [
        { name: 'SQL 개발자', date: '2026.03', org: '한국데이터산업진흥원' },
        { name: '증권투자권유자문인력', date: '2024.05', org: '금융투자협회' },
        { name: '파생상품투자권유자문인력', date: '2024.02', org: '한국금융투자협회' },
        { name: '펀드투자권유자문인력', date: '2023.12', org: '금융투자협회' },
        { name: 'AFPK', date: '2022.04', org: '한국FP협회' },
        { name: '투자자산운용사', date: '2021.12', org: '금융투자협회' },
        { name: '증권투자권유대행인', date: '2020.11', org: '금융투자협회' },
        { name: '펀드투자권유대행인', date: '2020.10', org: '금융투자협회' },
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
