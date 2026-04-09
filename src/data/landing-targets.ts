/**
 * 공고별 맞춤 랜딩 페이지 데이터
 *
 * - 각 entry는 /ko/for/[company] 라우트에서 사용됨
 * - source: career-planner/reports/{n}-{company}-*.md Block E 기반
 * - 컬러/문구/프로젝트 매칭 이유를 데이터로 주입하여 회사별 고유 경험 생성
 * - noIndex: true → 검색엔진 미노출 (링크 아는 사람만 접근)
 */

export interface LandingTarget {
  /** 회사 표시명 */
  company: string;
  /** 공고 직무명 */
  role: string;
  /** 공고 링크 */
  jobUrl?: string;
  /** 공고 링크 버튼 라벨 (없으면 기본값) */
  jobUrlLabel?: string;

  /** 1순위 헤드라인 — 첫 화면에 큰 글씨로 */
  headline: string;
  /** 서브 헤드라인 — 3~4줄 이내 */
  subheadline: string;

  /**
   * 회사 아이덴티 시그널 컬러.
   * 본 사이트 톤을 유지하되 CTA · 헤어라인 · 수치 강조에만 한정 적용.
   */
  brand: {
    /** primary hex (예: Toss Blue `#0064FF`) */
    primary: string;
    /** 살짝 깔리는 배경 틴트 — 8~12% 투명도 컬러 (예: `rgba(0,100,255,0.06)`) */
    tint: string;
    /** 브랜드 공식 명칭 — alt text/주석용 */
    label: string;
  };

  /** 증거 포인트 — 3개가 최적. 모바일에서도 한 줄에 들어감 */
  proofPoints: { label: string; value: string; detail?: string }[];

  /** "왜 이 회사에" 메시지 — Hero 바로 다음 섹션으로 배치됨 */
  whyCompany: string;

  /** JD 키워드 기반 재배치된 역량 — 각 항목에 근거 프로젝트/경험 연결 */
  highlightSkills: {
    name: string;
    /** 근거 — 프로젝트 slug 또는 짧은 증거 문구 */
    evidence: string;
  }[];

  /**
   * 강조할 프로젝트 — 공고와 어떻게 매칭되는지 한 줄 설명 포함.
   * slug는 src/data/projects.ts 기준.
   */
  projectMatches: {
    slug: string;
    title: string;
    whyMatch: string;
  }[];

  /** CTA 섹션의 직접적 지원 메시지 (예: "... 포지션에 지원합니다.") */
  ctaMessage: string;

  /** 검색엔진 노출 여부 */
  noIndex: boolean;
  /** 리포트 작성일 — 신선도 표시용 */
  updatedAt: string;
}

export const landingTargets: Record<string, LandingTarget> = {
  tossbank: {
    company: '토스뱅크',
    role: 'Product Manager (LLM)',
    jobUrl:
      'https://toss.im/career/job-detail?job_id=7569679003&sub_position_id=7611090003&company=%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC',
    jobUrlLabel: '토스뱅크 채용 페이지 ↗',

    headline: 'LLM을 금융 제품에 직접 연결해본 사람입니다.',
    subheadline:
      '에셋플러스에서 AI 공모펀드 2건을 End-to-End로 출시하고, KOSCOM RATB에서 38개 AI 투자 알고리즘의 운용심사 전 과정을 PM으로 주도해 전원 통과시켰습니다. 사이드로는 6개 에이전트가 토론하는 멀티에이전트 주식 분석 플랫폼을 1인으로 만들었습니다.',

    brand: {
      primary: '#0064FF', // Toss Blue
      tint: 'rgba(0, 100, 255, 0.06)',
      label: 'Toss Blue',
    },

    proofPoints: [
      {
        label: 'AI 투자 알고리즘',
        value: '38',
        detail: 'KOSCOM RATB 22~24차 운용심사 전원 통과',
      },
      {
        label: 'AI 공모펀드',
        value: '2',
        detail: 'S&P500 AI 공모펀드 출시 · 현재 고객 자금 운용',
      },
      {
        label: '운용시간 단축',
        value: '83%',
        detail: '1시간+ → 10분 · AI 운용지원 시스템 기획',
      },
    ],

    whyCompany:
      '토스뱅크는 AI 네이티브 은행을 실제로 표방하는 유일한 1금융권이고, 제가 에셋플러스에서 쌓은 "금융 × AI × 빌더" 세 축이 가장 자연스럽게 제품으로 연결되는 곳입니다. LLM이 금융 규제 안에서 어디까지 자동화할 수 있는지를 End-to-End로 실험해본 기획자는 시장에 드물고, 그 실전을 토스뱅크의 스케일에서 다시 검증해보고 싶습니다.',

    highlightSkills: [
      { name: 'LLM · 멀티에이전트 설계', evidence: '주주톡 6 에이전트 구조 설계' },
      { name: 'ML 제품 End-to-End 리딩', evidence: 'RATB 38개 알고리즘 심사 PM' },
      { name: '금융 도메인 · 규제', evidence: '투자자산운용사 외 자격증 6개' },
      { name: 'Data Scientist · 퀀트 협업', evidence: '알파브릿지 리서치팀 대시보드' },
      { name: '프로덕트 임팩트 측정', evidence: '운용시간 83% 단축' },
      { name: '풀스택 빌더', evidence: 'Python · FastAPI · React · Claude API' },
      { name: '프롬프트 엔지니어링', evidence: '주주톡 3 라운드 토론 구조' },
      { name: 'AI 공모펀드 기획', evidence: 'S&P500 AI 공모펀드 2건 출시' },
    ],

    projectMatches: [
      {
        slug: 'jujutok',
        title: '주주톡',
        whyMatch:
          '6개 AI 에이전트가 토론하는 멀티에이전트 구조를 1인으로 기획·설계·구현. 공고의 "LLM · AI Agent 활용 서비스 경험"을 프로덕션 단위로 증명.',
      },
      {
        slug: 'quant-platform',
        title: '퀀트 리서치 플랫폼',
        whyMatch:
          '퀀트 리서치팀의 200+ 전략 탐색 구조를 IA부터 재설계하고 UX 플로우·디자인 시스템까지 End-to-End로 리딩. 공고의 "복잡한 도메인 요구사항 설계" 스코프와 정합.',
      },
    ],

    ctaMessage: '토스뱅크 Product Manager (LLM) 포지션에 지원합니다.',

    noIndex: true,
    updatedAt: '2026-04-09',
  },
};

/**
 * 정적 경로 생성용 — [company].astro 에서 import
 */
export function getLandingTargetSlugs(): string[] {
  return Object.keys(landingTargets);
}
