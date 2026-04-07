import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

const BASE = '/portfolio';

const projectLinks = [
  '/en/projects/quant-platform/',
  '/en/projects/jujutok/',
];

const projectImages = [
  '/assets/projects/quant-platform/dashboard-fullview.png',
  '/assets/projects/jujutok/stock-analysis-dark.png',
];

export default function Projects({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).projects;

  return (
    <section id="projects" className="px-6 py-16 sm:py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
          {tr.section}
        </p>

        <div className="mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>
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
                className="overflow-hidden rounded-xl bg-[var(--color-bg-card)] shadow-ambient"
                style={{ direction: 'ltr' }}
              >
                {projectImages[i] ? (
                  <img
                    src={`${BASE}${projectImages[i]}`}
                    alt={p.title}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="text-center p-16">
                    <p className="font-mono text-xs text-[var(--color-text-faint)]">PROJECT PREVIEW</p>
                  </div>
                )}
              </div>

              <div style={{ direction: 'ltr' }}>
                <p className="mb-3 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
                  {p.label}
                </p>
                <h3 className="mb-4 text-2xl font-bold sm:text-3xl text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>
                  {p.title}
                </h3>
                <p className="mb-6 text-sm leading-[1.8] text-[var(--color-text-muted)]">
                  {p.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[var(--color-secondary-container)] px-3 py-1 text-[10px] font-medium text-[var(--color-on-secondary-container)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`${BASE}${lang === 'ko' ? projectLinks[i].replace('/en/', '/ko/') : projectLinks[i]}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-light)]">
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
