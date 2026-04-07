import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

export default function Hero({ lang = 'en' as Lang }: { lang?: Lang }) {
  const roles = lang === 'ko'
    ? 'AI 서비스 기획  /  금융 도메인  /  UX 설계'
    : 'AI Service Planning  /  Finance Domain  /  UX Design';

  const location = 'Seoul, South Korea';

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden px-6 sm:px-10"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Info bar — top area */}
      <div className="absolute left-6 right-6 sm:left-10 sm:right-10 top-24 sm:top-28 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] sm:text-[13px] tracking-wide text-[var(--color-text-faint)]">
          {roles}
        </p>
        <p className="text-[11px] sm:text-[13px] tracking-wide text-[var(--color-text-faint)]">
          {location}
        </p>
      </div>

      {/* Giant text — anchored to absolute bottom */}
      {/* Mobile */}
      <h1
        className="absolute bottom-16 left-4 right-4 sm:hidden font-black leading-[0.82] tracking-[-0.05em] text-[15vw] text-[var(--color-text)]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
      >
        <span className="text-[var(--color-bg-emphasis)]">Portfolio</span><br />
        <span className="text-[var(--color-bg-emphasis)]">by </span>Hyebin<br />Woo
      </h1>
      {/* Desktop */}
      <h1
        className="absolute bottom-0 left-0 right-0 hidden sm:block px-4 font-black leading-[0.82] tracking-[-0.05em] text-[11.5vw] text-[var(--color-text)]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
      >
        <span className="text-[var(--color-bg-emphasis)]">Portfolio by</span><br />
        Hyebin Woo
      </h1>
    </section>
  );
}
