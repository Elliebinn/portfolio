import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';
import ColorPlaceholder from './placeholders/ColorPlaceholder';
import TiltCard from './motion/TiltCard';

const BASE = '';

const projectLinks = [
  '/en/projects/quant-platform/',
  '/en/projects/jujutok/',
];

const BANNER_COLORS: string[][] = [
  ['--color-bg-detail', '--color-accent'],
  ['--color-accent', '--color-bg-detail'],
];

export default function Projects({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).projects;

  return (
    <section
      id="projects"
      className="py-16 sm:py-28"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Section header — constrained */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
          {tr.section}
        </p>
        <h2
          className="mb-16 text-4xl font-bold text-[var(--color-text)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {tr.heading}
        </h2>
      </div>

      {/* Project banners — full-bleed */}
      <div className="space-y-20">
        {tr.items.map((p, i) => {
          const href = `${BASE}${lang === 'ko' ? projectLinks[i].replace('/en/', '/ko/') : projectLinks[i]}`;
          const colors = BANNER_COLORS[i] ?? BANNER_COLORS[0];

          return (
            <TiltCard key={i} intensity={4} className="group">
              <a href={href} className="block">
                {/* Banner with ColorPlaceholder background */}
                <div className="relative overflow-hidden">
                  <ColorPlaceholder
                    variant="minimal"
                    colors={colors}
                    aspectRatio="16/9"
                    className="sm:!aspect-[21/9]"
                  />

                  {/* Overlaid content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
                    {/* Top: label */}
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-faint)] sm:text-xs">
                      {p.label}
                    </p>

                    {/* Bottom: title + description + tags */}
                    <div>
                      <h3
                        className="mb-3 text-2xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {p.title}
                      </h3>
                      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                        {p.description}
                      </p>

                      {/* Tag rail */}
                      <div className="flex flex-wrap items-center gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-3 py-1 text-[10px] font-medium"
                            style={{
                              backgroundColor: 'var(--color-bg-secondary)',
                              color: 'var(--color-text)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="ml-auto hidden text-sm font-medium text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-accent-light)] sm:inline-flex sm:items-center sm:gap-1">
                          {p.linkLabel}
                          <svg
                            width="14"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="transition-transform group-hover:translate-x-0.5"
                          >
                            <path d="M5 12h14m-6-6l6 6-6 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
