import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';
import ScrollReveal from './motion/ScrollReveal';

export default function Certifications({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).certifications;

  return (
    <section
      id="certifications"
      className="px-6 py-16 sm:px-10 sm:py-28"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
            {tr.section}
          </p>
        </ScrollReveal>

        {/* Minimal list — one cert per row */}
        <div className="divide-y divide-[var(--color-bg-detail)]">
          {tr.items.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="flex items-center gap-4 py-4">
                {/* Left icon */}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: 'var(--color-bg-detail)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Name */}
                <p className="flex-1 text-sm font-semibold text-[var(--color-text)]">
                  {cert.name}
                </p>

                {/* Right meta */}
                <p className="shrink-0 font-mono text-[10px] text-[var(--color-text-faint)]">
                  {cert.date} · {cert.org}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
