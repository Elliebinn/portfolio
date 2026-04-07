import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

const stats = {
  en: [
    { value: '38', label: 'AI Investment Algorithms Planned' },
    { value: '200+', label: 'Accounts Managed Simultaneously' },
    { value: '20+', label: 'Pages Redesigned from Scratch' },
  ],
  ko: [
    { value: '38개', label: 'AI 투자 알고리즘 기획' },
    { value: '200+', label: '동시 운용 계좌 관리' },
    { value: '20+', label: '페이지 정보구조 재설계' },
  ],
};

const aboutText = {
  en: {
    heading: 'A planner who understands',
    accent1: 'finance,',
    mid: 'an executor who proves with',
    accent2: 'technology.',
    suffix: '',
    body: "Planned 38 AI investment algorithms and managed 200+ accounts simultaneously at AssetPlus Asset Management. I find problems users haven\u2019t articulated, redesign information architecture from scratch, and build when needed. Designed 20+ analysis pages without a designer, and solo\u2011built an AI multi\u2011agent stock analysis platform from planning to development.",
    location: 'Seoul, KR // Remote',
  },
  ko: {
    heading: '금융을 이해하는',
    accent1: '기획자,',
    mid: '기술로 검증하는',
    accent2: '실행자.',
    suffix: '',
    body: '에셋플러스자산운용에서 AI 투자 알고리즘 38개를 기획하고, 200개 이상의 운용 계좌를 동시에 관리했어요. 사용자가 말하지 않은 문제를 찾아 정보구조를 다시 설계하고, 필요하면 직접 만듭니다. 디자이너 없는 팀에서 20개 이상의 분석 페이지를 설계했고, AI 멀티에이전트 주식 분석 플랫폼을 혼자 기획부터 개발까지 해봤어요.',
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
