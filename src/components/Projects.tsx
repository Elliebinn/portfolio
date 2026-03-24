import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

const BASE = '/portfolio';

const projectLinks = [
  '/en/projects/jujutok/',
  '/blog/debate-system-design/',
];

const projectImages = [
  '/assets/projects/jujutok/stock-analysis-dark.png',
  null,
];

export default function Projects({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).projects;

  return (
    <section id="projects" className="border-t border-[var(--color-border)] px-6 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          {tr.section}
        </p>

        <div className="mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            {tr.heading}
          </h2>
        </div>

        <div className="space-y-24">
          {tr.items.map((p, i) => (
            <div
              key={i}
              className={`grid items-center gap-10 lg:grid-cols-2`}
              style={i % 2 !== 0 ? { direction: 'rtl' as const } : {}}
            >
              <div
                className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
                style={{ direction: 'ltr' }}
              >
                {projectImages[i] ? (
                  <img
                    src={`${BASE}${projectImages[i]}`}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <p className="mb-2 text-5xl">{i === 0 ? '📈' : '💬'}</p>
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">PROJECT</p>
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">PREVIEW</p>
                  </div>
                )}
              </div>

              <div style={{ direction: 'ltr' }}>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  {p.label}
                </p>
                <h3 className="mb-4 text-2xl font-bold sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                  {p.title}
                </h3>
                <p className="mb-6 text-sm leading-[1.8] text-[var(--color-text-muted)]">
                  {p.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[10px] text-[var(--color-text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`${BASE}${lang === 'ko' && i === 0 ? '/ko/projects/jujutok/' : projectLinks[i]}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-light)] transition-colors hover:text-[var(--color-text)]">
                  + {p.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
