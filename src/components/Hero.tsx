import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

export default function Hero({ lang = 'en' as Lang }: { lang?: Lang }) {
  const title = lang === 'ko' ? '포트폴리오' : 'Portfolio';
  const presented = 'Presented By: Hyebin Woo';

  const roles = lang === 'ko'
    ? 'AI 서비스 기획  /  풀스택 빌더  /  금융 도메인'
    : 'AI Service Planning  /  Full-Stack Builder  /  Finance Domain';

  const location = 'Seoul, South Korea';

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden px-6 sm:px-10"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Info bar — top area */}
      <div className="absolute left-6 right-6 sm:left-10 sm:right-10 top-24 sm:top-28 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] sm:text-[13px] tracking-wide text-gray-500">
          {roles}
        </p>
        <p className="text-[11px] sm:text-[13px] tracking-wide text-gray-500">
          {location}
        </p>
      </div>

      {/* Giant text — anchored to absolute bottom */}
      {/* Mobile */}
      <h1
        className="absolute bottom-16 left-4 right-4 sm:hidden text-black font-black leading-[0.82] tracking-[-0.05em] text-[15vw]"
        style={{ fontFamily: "'Inter', 'Geist Sans', sans-serif", fontWeight: 900 }}
      >
        <span className="text-gray-300">Portfolio</span><br />
        <span className="text-gray-300">by </span>Hyebin<br />Woo
      </h1>
      {/* Desktop */}
      <h1
        className="absolute bottom-0 left-0 right-0 hidden sm:block px-4 text-black font-black leading-[0.82] tracking-[-0.05em] text-[11.5vw]"
        style={{ fontFamily: "'Inter', 'Geist Sans', sans-serif", fontWeight: 900 }}
      >
        <span className="text-gray-300">Portfolio by</span><br />
        Hyebin Woo
      </h1>
    </section>
  );
}
