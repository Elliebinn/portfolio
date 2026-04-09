/**
 * 공고별 맞춤 랜딩 페이지 데이터
 *
 * - 각 entry는 /ko/for/[company] 라우트에서 사용됨
 * - source: career-planner/reports/{n}-{company}-*.md Block E 기반
 * - noIndex: true → 검색엔진 미노출 (링크 아는 사람만 접근)
 */

export interface LandingTarget {
  /** 회사 표시명 */
  company: string;
  /** 공고 직무명 */
  role: string;
  /** 공고 링크 (있으면) */
  jobUrl?: string;
  /** 1순위 헤드라인 — 첫 화면에 큰 글씨로 */
  headline: string;
  /** 서브 헤드라인 — 3~4줄 이내 */
  subheadline: string;
  /** 강조할 프로젝트 slug 배열 (portfolio/src/data/projects.ts 기준) */
  highlightProjects: string[];
  /** JD 키워드 기반 재배치된 역량 — 6~8개 */
  highlightSkills: string[];
  /** 증거 포인트 — 숫자 중심, 3~5개 */
  proofPoints: { label: string; value: string; detail?: string }[];
  /** "왜 이 회사에" 메시지 — 1문단 */
  whyCompany: string;
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
    headline: 'LLM을 금융 제품에 직접 연결해본 사람입니다.',
    subheadline:
      '에셋플러스에서 AI 공모펀드 2건을 End-to-End로 출시하고, KOSCOM RATB에서 38개 AI 투자 알고리즘의 운용심사 전 과정을 PM으로 주도해 전원 통과시켰습니다. 사이드로는 6개 에이전트가 토론하는 멀티에이전트 주식 분석 플랫폼을 1인으로 만들었습니다.',
    highlightProjects: ['jujutok', 'quant-platform'],
    highlightSkills: [
      'LLM · 멀티에이전트 설계',
      'ML 제품 End-to-End 리딩',
      '금융 규제 · 도메인 설계',
      'Data Scientist · ML Engineer 협업',
      '프로덕트 실험 · 임팩트 측정',
      '풀스택 빌더 (Python · FastAPI · React)',
      'Claude API · 프롬프트 엔지니어링',
      '금융 자격증 6개',
    ],
    proofPoints: [
      {
        label: 'AI 투자 알고리즘',
        value: '38개',
        detail: 'KOSCOM RATB 22~24차 사전·본·재운용심사 전원 통과',
      },
      {
        label: 'AI 공모펀드',
        value: '2건',
        detail: 'S&P500 AI 공모펀드 실제 출시 · 현재 고객 자금 운용 중',
      },
      {
        label: '운용시간 단축',
        value: '83%',
        detail: '1시간+ → 10분 · AI 운용지원 시스템 기획',
      },
      {
        label: '주주톡',
        value: '31K LOC',
        detail: '6 에이전트 · 4 페르소나 · 3 라운드 토론 · 1인 풀스택 · 1개월',
      },
      {
        label: '최고 수익률',
        value: '19.5%',
        detail: 'RATB 기준 1년 수익률 (2024.12)',
      },
    ],
    whyCompany:
      '토스뱅크는 AI 네이티브 은행을 실제로 표방하는 유일한 1금융권이고, 제가 에셋플러스에서 쌓은 "금융 × AI × 빌더" 세 축이 가장 자연스럽게 제품으로 연결되는 곳이라고 생각합니다. 특히 LLM이 금융 규제 안에서 어디까지 자동화할 수 있는지를 End-to-End로 실험해본 기획자는 시장에 드물고, 그 실전을 토스뱅크의 스케일에서 다시 검증해보고 싶습니다.',
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
