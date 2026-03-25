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
      {/* Top left info */}
      <div className="pt-24 sm:pt-28">
        <p className="text-[11px] text-gray-400 tracking-wide">2026</p>
        <p className="mt-1 text-[15px] font-bold text-black">{title}</p>
        <p className="mt-0.5 text-[12px] text-gray-400">{presented}</p>
      </div>

      {/* Info bar — just above the giant name */}
      <div className="absolute left-6 right-6 sm:left-10 sm:right-10 bottom-[42vw] sm:bottom-[12vw] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] sm:text-[13px] tracking-wide text-gray-500">
          {roles}
        </p>
        <p className="text-[11px] sm:text-[13px] tracking-wide text-gray-500">
          {location}
        </p>
      </div>

      {/* Giant name — anchored to absolute bottom */}
      {/* Mobile */}
      <h1
        className="absolute bottom-16 left-4 right-4 sm:hidden text-black font-black leading-[0.82] tracking-[-0.05em] text-[18vw]"
        style={{ fontFamily: "'Inter', 'Geist Sans', sans-serif", fontWeight: 900 }}
      >
        Hyebin<br />Woo
      </h1>
      {/* Desktop */}
      <h1
        className="absolute bottom-0 left-0 right-0 hidden sm:block px-4 text-black font-black leading-[0.82] tracking-[-0.05em] text-[14vw]"
        style={{ fontFamily: "'Inter', 'Geist Sans', sans-serif", fontWeight: 900 }}
      >
        Hyebin Woo
      </h1>
    </section>
  );
}
