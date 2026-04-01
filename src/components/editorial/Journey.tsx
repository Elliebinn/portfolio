import type { Lang } from '../../i18n/translations';
import { t } from '../../i18n/translations';

const dotColors = ['var(--ed-primary)', 'var(--ed-secondary)', 'var(--ed-tertiary)', 'var(--ed-outline)'];

export default function Journey({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).timeline;

  return (
    <section id="timeline" className="px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Desktop: 3-column editorial strip */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[200px_1fr] items-end gap-12 mb-16">
            <h2
              className="text-3xl font-bold sm:text-4xl ed-tracking"
              style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
            >
              {lang === 'ko' ? '여정' : 'Journey'}
            </h2>
          </div>

          {tr.items.map((item, i) => (
            <div
              key={i}
              className="grid items-start gap-8 py-10 lg:grid-cols-[200px_280px_1fr]"
              style={{ borderTop: '1px solid var(--ed-outline-variant)', borderTopWidth: i === 0 ? '2px' : '1px' }}
            >
              <p
                className="text-sm font-medium"
                style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
              >
                {item.period}
              </p>
              <div>
                <h3
                  className="text-xl font-bold sm:text-2xl ed-tracking"
                  style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
                >
                  {item.title}
                </h3>
                {'org' in item && item.org && (
                  <p
                    className="mt-1.5 text-sm"
                    style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                  >
                    {item.org}
                  </p>
                )}
              </div>
              <p
                className="text-sm leading-[1.8]"
                style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline with dots */}
        <div className="lg:hidden">
          <h2
            className="mb-12 text-3xl font-bold ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
          >
            {lang === 'ko' ? '여정' : 'Journey'}
          </h2>

          <div className="relative pl-12">
            {/* Vertical line */}
            <div
              className="absolute left-[7px] top-2 bottom-2 w-0.5"
              style={{ backgroundColor: 'var(--ed-surface-container-highest)' }}
            />

            {tr.items.map((item, i) => (
              <div key={i} className={`relative ${i !== tr.items.length - 1 ? 'pb-12' : ''}`}>
                {/* Dot */}
                <div
                  className="absolute -left-12 top-1 h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: dotColors[i] || dotColors[3],
                    boxShadow: i === 0 ? `0 0 12px ${dotColors[0]}60` : 'none',
                  }}
                />

                <p
                  className="mb-1.5 text-xs font-semibold"
                  style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {item.period}
                </p>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
                >
                  {item.title}
                </h3>
                {'org' in item && item.org && (
                  <p
                    className="mt-1 text-xs"
                    style={{ color: 'var(--ed-on-surface-variant)' }}
                  >
                    {item.org}
                  </p>
                )}
                <p
                  className="mt-3 text-sm leading-[1.8]"
                  style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
