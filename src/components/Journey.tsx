import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';
import ScrollReveal from './motion/ScrollReveal';

const BASE = '/portfolio';

export default function Journey({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).timeline;
  const items = tr.items;
  const resumeLabel = lang === 'ko' ? '이력서에서 자세히 보기' : 'View Full Resume';

  return (
    <section id="timeline" className="px-6 py-16 sm:py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-baseline justify-between mb-16 lg:mb-20">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
              {tr.section}
            </p>
            <a
              href={`${BASE}/${lang}/resume/`}
              className="text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              {resumeLabel} →
            </a>
          </div>
        </ScrollReveal>

        {/* ─── Desktop: center-line alternating timeline (lg+) ─── */}
        <div className="hidden lg:block relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ backgroundColor: 'var(--color-bg-emphasis)' }}
          />

          {items.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`relative flex items-start ${i !== 0 ? 'mt-16' : ''}`}>
                  {/* Left content or spacer */}
                  <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : ''}`}>
                    {isLeft && (
                      <TimelineCard item={item} align="right" />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1 z-10">
                    <div
                      className="h-4 w-4 rounded-full border-[3px]"
                      style={{
                        borderColor: 'var(--color-accent)',
                        backgroundColor: i === 0 ? 'var(--color-accent)' : 'var(--color-bg)',
                      }}
                    />
                  </div>

                  {/* Right content or spacer */}
                  <div className={`w-1/2 ${!isLeft ? 'pl-12' : ''}`}>
                    {!isLeft && (
                      <TimelineCard item={item} align="left" />
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ─── Mobile/Tablet: left-aligned vertical timeline (< lg) ─── */}
        <div className="lg:hidden relative pl-12">
          {/* Left vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-[2px]"
            style={{ backgroundColor: 'var(--color-bg-emphasis)' }}
          />

          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={`relative ${i !== items.length - 1 ? 'pb-14' : ''}`}>
                {/* Dot */}
                <div className="absolute -left-12 top-0.5 flex h-6 w-6 items-center justify-center">
                  <div
                    className="h-4 w-4 rounded-full border-[3px]"
                    style={{
                      borderColor: 'var(--color-accent)',
                      backgroundColor: i === 0 ? 'var(--color-accent)' : 'var(--color-bg)',
                    }}
                  />
                </div>

                <p
                  className="mb-1.5 text-[11px] font-medium uppercase tracking-widest"
                  style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}
                >
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
                <p
                  className="mt-3 text-sm leading-[1.8] text-[var(--color-text-muted)]"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Timeline Card (desktop) ─── */

interface TimelineItem {
  period: string;
  title: string;
  org?: string;
  description: string;
}

function TimelineCard({ item, align }: { item: TimelineItem; align: 'left' | 'right' }) {
  return (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <p
        className="mb-2 text-[11px] font-medium uppercase tracking-widest"
        style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}
      >
        {item.period}
      </p>
      <h3
        className="text-xl font-bold tracking-tight text-[var(--color-text)]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {item.title}
      </h3>
      {'org' in item && item.org && (
        <p className="mt-1.5 text-xs text-[var(--color-text-faint)]">{item.org}</p>
      )}
      <p
        className="mt-3 text-sm leading-[1.8] text-[var(--color-text-muted)]"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  );
}
