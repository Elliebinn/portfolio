import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

export default function Certifications({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).certifications;

  return (
    <section id="certifications" className="px-6 py-28" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
          {tr.section}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tr.items.map((cert, i) => (
            <div
              key={i}
              className="rounded-xl bg-[var(--color-bg-card)] p-4 shadow-ambient-sm"
            >
              <p className="text-sm font-semibold text-[var(--color-text)]">{cert.name}</p>
              <p className="mt-1 font-mono text-[10px] text-[var(--color-text-faint)]">
                {cert.date} · {cert.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
