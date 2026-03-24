import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

export default function Hero({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).hero;

  const currentStatus = lang === 'ko'
    ? 'AI 투자 리서치 플랫폼을 만들고 있습니다'
    : 'Currently building an AI investment research platform';

  return (
    <section id="home" className="relative flex min-h-[70vh] flex-col px-6 pt-24 pb-12 md:pt-28">
      {/* Background watermark — hidden on small mobile */}
      <div className="pointer-events-none absolute top-16 left-6 select-none hidden sm:block">
        <span className="text-[12rem] font-black leading-none text-[var(--color-text)] opacity-[0.03] sm:text-[18rem]" style={{ fontFamily: 'var(--font-display)' }}>
          혜빈
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl flex-1">
        <p className="mb-4 sm:mb-6 inline-block rounded-full bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[var(--color-accent-light)] uppercase sm:bg-transparent sm:px-0 sm:py-0">
          {tr.available}
        </p>

        <h1 className="mb-4 sm:mb-8 text-5xl sm:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          Hyebin Woo
        </h1>

        {/* Description */}
        <p className="max-w-lg text-sm sm:text-[15px] leading-relaxed text-[var(--color-text-muted)]"
          dangerouslySetInnerHTML={{ __html: tr.description }} />

        {/* CTA buttons — visible on mobile */}
        <div className="mt-6 flex items-center gap-3 sm:mt-8 md:hidden">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white">
            View Projects
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </a>
          <a href="#contact" className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)]">
            Contact
          </a>
        </div>

        {/* Desktop: location + expertise tags */}
        <div className="mt-12 hidden gap-8 md:grid lg:grid-cols-2">
          <div />
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{tr.location}</p>
              <p className="text-sm font-semibold">{tr.locationValue}</p>
            </div>
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{tr.expertise}</p>
              <a href="#projects" className="border-b border-[var(--color-text)] text-sm font-semibold transition-colors hover:text-[var(--color-accent-light)]">
                {tr.expertiseValue}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Current status + scroll hint — anchored to bottom */}
      <div className="relative z-10 mx-auto w-full max-w-7xl mt-auto flex flex-col items-center gap-4 pt-8">
        <p className="font-mono text-[11px] tracking-[0.15em] text-[var(--color-text-muted)]">
          {currentStatus}
        </p>
        <a href="#about" className="group flex flex-col items-center gap-1" aria-label="Scroll down">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] opacity-50 transition-opacity group-hover:opacity-100">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="animate-bounce text-[var(--color-text-muted)] opacity-50 transition-opacity group-hover:opacity-100"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
