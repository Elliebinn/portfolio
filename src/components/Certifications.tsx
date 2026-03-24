import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

export default function Certifications({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).certifications;

  return (
    <section id="certifications" className="border-t border-[var(--color-border)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          {tr.section}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tr.items.map((cert, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-4">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-sm">
                📜
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{cert.name}</p>
                <p className="font-mono text-[10px] text-[var(--color-text-muted)]">
                  {cert.date} · {cert.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
