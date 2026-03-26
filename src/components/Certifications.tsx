import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

export default function Certifications({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).certifications;

  return (
    <section id="certifications" className="border-t border-[var(--color-border)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
          {tr.section}
        </p>

        <div>
          {tr.items.map((cert, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--color-border)] py-3${i === 0 ? ' border-t' : ''}`}
            >
              <p className="text-sm font-semibold">{cert.name}</p>
              <p className="font-mono text-[10px] text-[var(--color-text-muted)]">
                {cert.date} · {cert.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
