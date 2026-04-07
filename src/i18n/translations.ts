export type Lang = 'en' | 'ko';

const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      stack: 'Expertise',
      blog: 'Blog',
      resume: 'Resume',
      archive: 'Archive',
      hireMe: 'Hire Me',
    },
    hero: {
      available: 'Open for AI Service Planning & PM roles',
      description:
        'I turn complex financial structures into experiences users can understand. Planned 38 AI investment algorithms and passed national regulatory review. Designed an ops system that cut trade time by 83%. Currently redesigning the information architecture of a quant strategy platform used daily by researchers.',
      location: 'Location',
      locationValue: 'Seoul / Remote',
      expertise: 'Expertise',
      expertiseValue: 'AI Service Planning · Finance Domain',
    },
    about: {
      section: '01 / Narrative',
      heading:
        'A planner who understands finance,',
      headingAccent: 'an executor who proves with technology.',
      col1: 'Planned 38 AI investment algorithms and managed 200+ accounts simultaneously at AssetPlus Asset Management. I find the problems users haven\u2019t articulated yet, redesign information architecture from scratch, and define requirements that developers can build without questions.',
      col2: 'I don\u2019t just plan — I build when needed. Designed and implemented 20+ analysis pages without a designer, and solo\u2011built an AI multi\u2011agent stock analysis platform from planning to development.',
    },
    projects: {
      section: '02 / Projects',
      heading: 'Projects',
      items: [
        {
          label: 'Service Planning · Information Architecture',
          title: 'Redesigning How Quant Researchers Work',
          description:
            'A tool used daily by 4 researchers. No frontend dev, no designer. Redesigned the taxonomy of 200+ strategies with a tag-based system, and built features users hadn\u2019t asked for \u2014 based on domain knowledge from fund operations.',
          tags: ['Service Planning', 'Information Architecture', 'Design System', 'Internal Tool'],
          linkLabel: 'View Case Study',
        },
        {
          label: 'AI Service Design · Solo Planning + Dev',
          title: 'JujuTok — Solving AI Bias by Design',
          description:
            '"A single AI opinion looks objective but may be biased." Designed a system where 6 AI agents analyze from different angles and 4 investment personas debate before reaching a conclusion. Planned and built end-to-end.',
          tags: ['AI Agent Design', 'Bias Mitigation', 'Service Planning', 'Multi-Persona'],
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
      section: '03 / Expertise',
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
      home: '홈',
      projects: '프로젝트',
      stack: '역량',
      blog: '블로그',
      resume: '이력서',
      archive: '연혁',
      hireMe: '채용 문의',
    },
    hero: {
      available: 'AI 서비스 기획 · PM 포지션 오픈',
      description:
        '복잡한 금융 구조를 사용자가 이해할 수 있는 경험으로 바꿉니다. 에셋플러스자산운용에서 AI 투자 알고리즘 38개를 기획하고 운용심사를 통과시켰고, 운용지원 시스템을 설계해 매매·운용시간을 83% 단축했습니다. 지금은 퀀트 리서치팀이 매일 쓰는 전략 분석 플랫폼의 정보구조를 처음부터 다시 설계하고 있어요.',
      location: '위치',
      locationValue: '서울 / 원격',
      expertise: '전문 분야',
      expertiseValue: 'AI 서비스 기획 · 금융 도메인',
    },
    about: {
      section: '01 / 소개',
      heading: '금융을 이해하는 기획자,',
      headingAccent: '기술로 검증하는 실행자.',
      col1: '에셋플러스자산운용에서 AI 공모펀드와 로보어드바이저 알고리즘을 기획하며, "왜 이 구조인가"를 심사관 앞에서 설명하는 훈련을 했어요. 200개 이상의 운용 계좌를 관리하면서 프로세스를 설계했고, 사용자가 말하지 않은 문제를 찾아 정보구조를 다시 그리는 일을 하고 있어요.',
      col2: '기획만 하는 사람은 아니에요. 필요하면 직접 만듭니다. 디자이너 없는 팀에서 20개 이상의 분석 페이지를 설계하고 구현했고, AI 멀티에이전트 주식 분석 플랫폼을 혼자 기획부터 개발까지 해봤어요.',
    },
    projects: {
      section: '02 / 프로젝트',
      heading: '프로젝트',
      items: [
        {
          label: '서비스 기획 · 정보구조 재설계',
          title: '퀀트 리서처의 불편을 직접 고친 이야기',
          description:
            '리서처 4명이 매일 쓰는 도구. 프론트 0명, 디자이너 0명. 200개+ 전략의 탐색 구조를 태그 기반으로 재설계하고, 펀드 운용 경험에서 나온 기획 판단으로 요청에 없던 기능을 만들었어요.',
          tags: ['서비스 기획', '정보구조 설계', '디자인 시스템', '사내 도구'],
          linkLabel: '케이스 스터디 보기',
        },
        {
          label: 'AI 서비스 설계 · 1인 기획+개발',
          title: '주주톡 — AI 편향을 구조로 해결하기',
          description:
            '"AI 하나의 의견은 객관적으로 보이지만 편향일 수 있다" — 이 문제를 시스템 구조로 풀었어요. 6개 AI 에이전트로 분석 축을 분리하고, 4명의 투자 페르소나가 토론하는 구조를 설계. 기획부터 개발까지 직접 수행.',
          tags: ['AI 에이전트 설계', '편향 해소 구조', '서비스 기획', '멀티페르소나'],
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
      section: '03 / 역량',
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
