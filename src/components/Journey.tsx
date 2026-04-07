import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

export default function Journey({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).timeline;

  return (
    <section id="timeline" className="px-6 py-16 sm:py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
          {tr.section}
        </p>

        {/* Desktop: horizontal divider style */}
        <div className="hidden lg:block">
          {tr.items.map((item, i) => (
            <div
              key={i}
              className={`${i === 0 ? '' : 'mt-8'} rounded-xl bg-[var(--color-bg-card)] p-8 shadow-ambient-sm`}
            >
              <div className="grid items-baseline gap-x-8 lg:grid-cols-[160px_280px_1fr]">
                <p className="font-mono text-xs text-[var(--color-accent)]">{item.period}</p>
                <div>
                  <h3
                    className="text-lg font-bold tracking-tight sm:text-xl text-[var(--color-text)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>
                  {'org' in item && item.org && (
                    <p className="mt-1.5 text-xs text-[var(--color-text-faint)]">{item.org}</p>
                  )}
                </div>
                <p className="ml-auto text-right text-sm leading-[1.8] text-[var(--color-text-muted)]" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden relative pl-12">
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[var(--color-bg-emphasis)]" />

          {tr.items.map((item, i) => (
            <div key={i} className={`relative ${i !== tr.items.length - 1 ? 'pb-14' : ''}`}>
              <div
                className={`absolute -left-12 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-[2.5px] ${
                  i === 0
                    ? 'border-[var(--color-accent)] bg-[var(--color-bg)]'
                    : 'border-[var(--color-outline-variant)] bg-[var(--color-bg)]'
                }`}
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    i === 0 ? 'bg-[var(--color-accent)]' : 'bg-transparent'
                  }`}
                />
              </div>

              <p className="mb-1.5 font-mono text-[11px] font-medium text-[var(--color-accent)]">
                {item.period}
              </p>
              <h3
                className="text-lg font-bold tracking-tight text-[var(--color-text)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.title}
              </h3>
              {'org' in item && item.org && (
                <p className="mt-1 text-xs text-[var(--color-text-faint)]">{item.org}</p>
              )}
              <p className="mt-3 text-sm leading-[1.8] text-[var(--color-text-muted)]" dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
