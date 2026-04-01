import type { Lang } from '../../i18n/translations';
import { t } from '../../i18n/translations';

const aboutText = {
  en: {
    heading: 'Bridging Financial Strategy & AI Engineering',
    body: "My journey began planning mutual funds and ETFs at AssetPlus Asset Management. I designed 38 robo-advisor algorithms, shipped an S&P500 AI mutual fund, and cut internal operations time by 83%. Today I lead service planning for a quant strategy platform at Alphabridge while solo-building JujuTok, an AI multi-agent stock analysis platform.",
    quote: '"I grow ideas into products."',
  },
  ko: {
    heading: '금융 전략과 AI 엔지니어링의 간극을 메웁니다',
    body: '에셋플러스자산운용에서 공모펀드·ETF 기획으로 시작한 여정입니다. 38개 로보어드바이저 알고리즘을 기획·출시하고, S&P500 AI 공모펀드를 실제 출시했으며, 내부 운용시간을 83% 단축했습니다. 현재 알파브릿지에서 퀀트 전략 플랫폼의 서비스 기획을 주도하며, 사이드 프로젝트로 AI 멀티에이전트 주식 분석 플랫폼(주주톡)을 1인 풀스택 개발 중입니다.',
    quote: '"아이디어를 제품으로 키워냅니다."',
  },
};

const stats = {
  en: [
    { value: '38', label: 'Robo-Advisor Algorithms' },
    { value: '83%', label: 'Ops Efficiency Gain' },
    { value: '31K+', label: 'Lines of Code (Solo)' },
  ],
  ko: [
    { value: '38개', label: '로보어드바이저 알고리즘' },
    { value: '83%', label: '운용 효율 개선' },
    { value: '31K+', label: '코드 라인 (1인 개발)' },
  ],
};

const values = {
  en: [
    {
      title: 'Domain-Driven Planning',
      description: 'Finance domain expertise shapes every AI product decision — from algorithm design to UX flows.',
      bg: 'var(--ed-surface-container-low)',
      large: true,
    },
    {
      title: 'Build to Prove',
      description: "Ideas stay ideas until they ship. I prototype, build, and measure.",
      bg: 'var(--ed-secondary-container)',
      color: 'var(--ed-on-secondary-container)',
    },
    {
      title: 'Full-Stack Execution',
      description: 'No designer? No developer? I handle planning, design, and engineering end-to-end.',
      bg: 'var(--ed-tertiary-container)',
      color: 'var(--ed-on-tertiary-container)',
    },
  ],
  ko: [
    {
      title: '도메인 기반 기획',
      description: '금융 도메인 전문성이 모든 AI 프로덕트 의사결정을 이끕니다 — 알고리즘 설계부터 UX 플로우까지.',
      bg: 'var(--ed-surface-container-low)',
      large: true,
    },
    {
      title: '만들어서 증명',
      description: '아이디어는 출시되어야 의미가 있습니다. 직접 프로토타이핑하고, 만들고, 측정합니다.',
      bg: 'var(--ed-secondary-container)',
      color: 'var(--ed-on-secondary-container)',
    },
    {
      title: '풀스택 실행력',
      description: '디자이너가 없으면? 개발자가 없으면? 기획부터 디자인, 엔지니어링까지 직접.',
      bg: 'var(--ed-tertiary-container)',
      color: 'var(--ed-on-tertiary-container)',
    },
  ],
};

export default function About({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).about;
  const txt = aboutText[lang];
  const st = stats[lang];
  const vals = values[lang];

  return (
    <section id="about" className="px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Quote */}
        <p
          className="mb-6 text-lg font-medium italic sm:text-xl"
          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
        >
          {txt.quote}
        </p>

        {/* Heading */}
        <h2
          className="mb-8 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl ed-tracking"
          style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
        >
          {txt.heading}
        </h2>

        {/* Body */}
        <p
          className="mb-16 max-w-3xl text-base leading-[1.9] sm:text-lg"
          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
        >
          {txt.body}
        </p>

        {/* Stats strip — border-top style */}
        <div className="mb-20 grid grid-cols-3 gap-6 lg:gap-10">
          {st.map((s) => (
            <div
              key={s.label}
              className="pt-5"
              style={{ borderTop: '2px solid var(--ed-primary)' }}
            >
              <p
                className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
              >
                {s.value}
              </p>
              <p
                className="mt-2 text-xs font-medium uppercase tracking-widest sm:text-sm"
                style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values — bento-style with bg color shifts */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {vals.map((v, i) => (
            <div
              key={v.title}
              className={`rounded-3xl p-8 sm:p-10 ${v.large ? 'sm:col-span-2' : ''}`}
              style={{
                backgroundColor: v.bg,
                color: v.color || 'var(--ed-on-surface)',
              }}
            >
              <h3
                className="mb-3 text-xl font-bold sm:text-2xl"
                style={{ fontFamily: 'var(--ed-font-display)' }}
              >
                {v.title}
              </h3>
              <p
                className="text-sm leading-relaxed sm:text-base"
                style={{
                  color: v.color ? undefined : 'var(--ed-on-surface-variant)',
                  fontFamily: 'var(--ed-font-body)',
                  opacity: v.color ? 0.85 : 1,
                }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
