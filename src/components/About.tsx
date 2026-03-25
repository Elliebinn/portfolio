import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

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

const aboutText = {
  en: {
    heading: 'Bridging the gap between',
    accent1: 'Financial Strategy',
    mid: 'and',
    accent2: 'AI Engineering.',
    suffix: '',
    body: "My journey began planning mutual funds and ETFs at AssetPlus Asset Management. I designed 38 robo\u2011advisor algorithms, shipped an S&P500 AI mutual fund, and cut internal operations time by 83%. Today I lead service planning for a quant strategy platform at Alphabridge while solo\u2011building JujuTok, an AI multi\u2011agent stock analysis platform.",
    location: 'Seoul, KR // Remote',
  },
  ko: {
    heading: '',
    accent1: '금융 전략',
    mid: '과',
    accent2: 'AI 엔지니어링',
    suffix: '의 간극을 메웁니다.',
    body: '에셋플러스자산운용에서 공모펀드·ETF 기획으로 시작한 여정입니다. 38개 로보어드바이저 알고리즘을 기획·출시하고, S&P500 AI 공모펀드를 실제 출시했으며, 내부 운용시간을 83% 단축했습니다. 현재 알파브릿지에서 퀀트 전략 플랫폼의 서비스 기획을 주도하며, 사이드 프로젝트로 AI 멀티에이전트 주식 분석 플랫폼(주주톡)을 1인 풀스택 개발 중입니다.',
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
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              {txt.location}
            </p>
          </div>

          {/* Text + Stats */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 sm:mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              {tr.section}
            </p>

            <p className="mb-6 text-lg sm:text-xl font-medium italic text-[var(--color-text-muted)]">
              "I grow ideas into products."
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

            {/* Stats: mobile = vertical stack, sm = 2 col, lg = 3 col */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {st.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-5"
                >
                  <p
                    className="text-3xl font-bold sm:text-2xl lg:text-3xl"
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
