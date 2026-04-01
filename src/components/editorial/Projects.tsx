import type { Lang } from '../../i18n/translations';
import { t } from '../../i18n/translations';
import { ArrowRight } from 'lucide-react';

const BASE = '/portfolio';

const projectMeta = [
  {
    link: '/en/v2/projects/jujutok/',
    koLink: '/ko/v2/projects/jujutok/',
    image: '/assets/projects/jujutok/stock-analysis-dark.png',
    category: { en: 'AI Multi-Agent Platform', ko: 'AI 멀티에이전트 플랫폼' },
  },
  {
    link: '/en/v2/projects/quant-platform/',
    koLink: '/ko/v2/projects/quant-platform/',
    image: null,
    category: { en: 'Quant Strategy Platform', ko: '퀀트 전략 플랫폼' },
  },
];

export default function Projects({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).projects;

  return (
    <section id="projects" className="px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <h2
          className="mb-20 text-center text-4xl font-extrabold tracking-tight sm:text-5xl ed-tracking"
          style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
        >
          {tr.heading}
        </h2>

        {/* Alternating editorial layout */}
        <div className="space-y-32 sm:space-y-40">
          {tr.items.map((p, i) => {
            const meta = projectMeta[i];
            const href = `${BASE}${lang === 'ko' ? meta.koLink : meta.link}`;
            const isReversed = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-10 md:gap-16 ${
                  isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div
                    className="overflow-hidden rounded-3xl ed-shadow group"
                    style={{ backgroundColor: 'var(--ed-surface-container)' }}
                  >
                    {meta.image ? (
                      <img
                        src={`${BASE}${meta.image}`}
                        alt={p.title}
                        className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="flex aspect-video items-center justify-center"
                        style={{ backgroundColor: 'var(--ed-surface-container-high)' }}
                      >
                        <p
                          className="text-sm font-medium"
                          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                        >
                          {lang === 'ko' ? '프로젝트 미리보기' : 'Project Preview'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="w-full space-y-5 md:w-1/2">
                  <p
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
                  >
                    {meta.category[lang]}
                  </p>
                  <h3
                    className="text-3xl font-bold sm:text-4xl ed-tracking"
                    style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed sm:text-lg"
                    style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                  >
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: 'var(--ed-surface-container)',
                          color: 'var(--ed-on-surface-variant)',
                          fontFamily: 'var(--ed-font-body)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={href}
                    className="group/link inline-flex items-center gap-2 pt-2 font-bold transition-colors"
                    style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-primary)' }}
                  >
                    {p.linkLabel}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
