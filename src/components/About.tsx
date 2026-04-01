import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

const stats = {
  en: [
    { value: '38', label: 'Robo-Advisor Algorithms Shipped' },
    { value: '83%', label: 'Ops Time Reduced' },
    { value: 'Solo', label: '31K+ LOC Full-Stack' },
  ],
  ko: [
    { value: '38개', label: '로보어드바이저 알고리즘 출시' },
    { value: '83%', label: '운용시간 단축' },
    { value: '1인', label: '31K+ LOC 풀스택 개발' },
  ],
};

const aboutText = {
  en: {
    heading: 'A planner who reads data, an',
    accent1: 'executor',
    mid: 'who',
    accent2: 'builds to the end.',
    suffix: '',
    body: "Started in finance — planned mutual funds and ETFs at AssetPlus Asset Management, designed 38 robo\u2011advisor algorithms, and shipped an S&P500 AI fund. Built a system that cut operations time by 83%. Now I lead service planning, UX, and frontend for a quant strategy platform at Alphabridge, while solo\u2011building JujuTok — an AI multi\u2011agent stock analysis platform.",
    location: 'Seoul, KR // Remote',
  },
  ko: {
    heading: '데이터를 읽는',
    accent1: '기획자,',
    mid: '끝까지 만드는',
    accent2: '실행자.',
    suffix: '',
    body: '금융에서 시작했어요. 에셋플러스자산운용에서 공모펀드와 ETF를 기획하고, 38개 로보어드바이저 알고리즘을 직접 설계해서 출시했어요. 운용시간을 83% 줄이는 시스템도 만들었고요. 지금은 알파브릿지에서 퀀트 전략 플랫폼의 서비스 기획·UX·프론트를 맡고 있고, 사이드로 AI 멀티에이전트 주식 분석 플랫폼(주주톡)을 혼자 만들고 있어요.',
    location: '서울 // 원격',
  },
};

export default function About({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).about;
  const txt = aboutText[lang];
  const st = stats[lang];

  return (
    <section id="about" className="border-t border-[var(--color-border)] px-6 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Mobile: single column / Desktop: photo + text */}
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[340px_1fr]">
          {/* Photo — hidden on mobile per design, shows on lg */}
          <div className="hidden lg:block">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <img
                src="/portfolio/assets/about-profile.png"
                alt="Hyebin Woo illustration"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              {txt.location}
            </p>
          </div>

          {/* Text + Stats */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 sm:mb-6 text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              {tr.section}
            </p>

            <p className="mb-6 text-lg sm:text-xl font-medium italic text-[var(--color-text-muted)]">
              "Serious about planning. Relentless about building."
            </p>

            <h2
              className="mb-6 sm:mb-8 text-2xl font-bold leading-normal sm:text-3xl lg:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {txt.heading}{txt.heading ? ' ' : ''}
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
                {txt.accent1}
              </span>{' '}
              {txt.mid}{' '}
              <span className="bg-gradient-to-r from-[var(--color-accent-light)] to-purple-300 bg-clip-text text-transparent">
                {txt.accent2}
              </span>
              {txt.suffix}
            </h2>

            <p className="mb-8 sm:mb-10 text-sm leading-[1.9] text-[var(--color-text-muted)]">
              {txt.body}
            </p>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-6 lg:gap-10">
              {st.map((s) => (
                <div
                  key={s.label}
                  className="border-t-2 border-[var(--color-accent)] pt-4"
                >
                  <p
                    className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
