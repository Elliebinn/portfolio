import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

export default function Journey({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).timeline;

  return (
    <section id="timeline" className="border-t border-[var(--color-border)] px-6 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
          {tr.section}
        </p>

        {/* Desktop: horizontal divider style */}
        <div className="hidden lg:block">
          {tr.items.map((item, i) => (
            <div
              key={i}
              className="border-t border-[var(--color-border)] py-12"
            >
              <div className="grid items-start gap-8 lg:grid-cols-[180px_280px_1fr]">
                <p className="font-mono text-xs text-[var(--color-text-muted)]">{item.period}</p>
                <div>
                  <h3
                    className="text-xl font-bold tracking-tight sm:text-2xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>
                  {'org' in item && item.org && (
                    <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">{item.org}</p>
                  )}
                </div>
                <p className="text-sm leading-[1.8] text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: vertical timeline with circle dots */}
        <div className="lg:hidden relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[var(--color-border)]" />

          {tr.items.map((item, i) => (
            <div key={i} className={`relative ${i !== tr.items.length - 1 ? 'pb-14' : ''}`}>
              {/* Circle dot */}
              <div
                className={`absolute -left-12 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-[2.5px] ${
                  i === 0
                    ? 'border-[var(--color-accent)] bg-[var(--color-bg)]'
                    : 'border-[var(--color-text-muted)]/30 bg-[var(--color-bg)]'
                }`}
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    i === 0 ? 'bg-[var(--color-accent)]' : 'bg-transparent'
                  }`}
                />
              </div>

              <p className="mb-1.5 font-mono text-[11px] font-medium text-[var(--color-accent-light)]">
                {item.period}
              </p>
              <h3
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.title}
              </h3>
              {'org' in item && item.org && (
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{item.org}</p>
              )}
              <p className="mt-3 text-sm leading-[1.8] text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
