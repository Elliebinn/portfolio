import type { Lang } from '../../i18n/translations';
import { t } from '../../i18n/translations';

export default function Certifications({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).certifications;

  return (
    <section
      className="px-6 py-20 sm:py-28"
      style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
    >
      <div className="mx-auto max-w-7xl">
        <p
          className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
        >
          {tr.section}
        </p>

        <div>
          {tr.items.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
              style={{
                borderTop: i === 0 ? '2px solid var(--ed-primary)' : '1px solid var(--ed-outline-variant)',
              }}
            >
              <p
                className="text-sm font-bold"
                style={{ color: 'var(--ed-on-surface)', fontFamily: 'var(--ed-font-display)' }}
              >
                {cert.name}
              </p>
              <p
                className="text-xs font-medium"
                style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
              >
                {cert.date} · {cert.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
