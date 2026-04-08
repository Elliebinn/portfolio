import type { Lang } from '../i18n/translations';
import SplitText from './motion/SplitText';
import CountUp from './motion/CountUp';
import CursorSpotlight from './motion/CursorSpotlight';
import MagneticButton from './motion/MagneticButton';

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

const STATS: Record<Lang, StatItem[]> = {
  ko: [
    { value: 38, suffix: '개', label: 'AI 투자 알고리즘 기획' },
    { value: 200, suffix: '+', label: '동시 운용 계좌 관리' },
    { value: 20, suffix: '+', label: '페이지 정보구조 재설계' },
  ],
  en: [
    { value: 38, label: 'AI Investment Algorithms Planned' },
    { value: 200, suffix: '+', label: 'Accounts Managed' },
    { value: 20, suffix: '+', label: 'Pages Redesigned' },
  ],
};

export default function Hero({ lang = 'en' as Lang }: { lang?: Lang }) {
  const roles =
    lang === 'ko'
      ? 'AI 서비스 기획  /  금융 도메인  /  UX 설계'
      : 'AI Service Planning  /  Finance Domain  /  UX Design';

  const location = 'Seoul, South Korea';
  const stats = STATS[lang] ?? STATS.en;

  const handleScrollDown = () => {
    const hero = document.getElementById('home');
    if (!hero) return;
    const next = hero.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-secondary) 100%)',
      }}
    >
      {/* I4 CursorSpotlight background layer */}
      <CursorSpotlight
        color="rgba(69, 98, 114, 0.07)"
        size={500}
        className="z-0"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex h-full flex-col px-6 sm:px-10">
        {/* Info bar — top */}
        <div className="flex flex-col gap-2 pt-24 sm:flex-row sm:items-center sm:justify-between sm:pt-28">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-faint)] sm:text-[13px]">
            {roles}
          </p>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-[13px]">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
            {location}
          </p>
        </div>

        {/* Giant text — centered vertically */}
        <div className="flex flex-1 flex-col justify-center py-12">
          {/* Portfolio by */}
          <span
            className="mb-[-2vw] block text-[clamp(3rem,10vw,8rem)] font-extrabold leading-none tracking-tight text-[var(--color-bg-emphasis)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Portfolio by
          </span>

          {/* I5 SplitText: Hyebin Woo */}
          <SplitText
            text="Hyebin Woo"
            as="h1"
            delay={300}
            className="text-[clamp(4.5rem,15vw,14rem)] font-extrabold leading-[0.85] tracking-tighter text-[var(--color-text)]"
          />

          {/* I2 CountUp stats */}
          <div className="mt-16 flex flex-wrap gap-x-16 gap-y-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex cursor-default flex-col gap-2"
              >
                <span
                  className="text-4xl font-extrabold tracking-tight text-[var(--color-text)] md:text-5xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <CountUp value={stat.value} suffix={stat.suffix ?? ''} />
                </span>
                <span className="text-[0.625rem] font-bold uppercase tracking-widest text-[var(--color-text-faint)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* I3 MagneticButton scroll indicator */}
        <div className="flex justify-center pb-10">
          <MagneticButton
            onClick={handleScrollDown}
            strength={0.3}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-text-faint)]/20 text-[var(--color-text-faint)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Scroll down"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="transition-transform group-hover:translate-y-0.5"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
