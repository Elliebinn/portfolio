import type { Lang } from '../../i18n/translations';
import { t } from '../../i18n/translations';

export default function Hero({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang);

  const tagline = lang === 'ko'
    ? 'AI 서비스 기획자 · 풀스택 빌더'
    : 'AI Service Planner · Full-Stack Builder';

  const heading1 = lang === 'ko' ? '기획하고,' : 'I plan,';
  const headingAccent = lang === 'ko' ? '직접 만들고,' : 'build,';
  const heading2 = lang === 'ko' ? '증명합니다.' : 'and prove it.';

  const description = lang === 'ko'
    ? 'AI 기반 금융 서비스 기획자. 로보어드바이저 38개 알고리즘 기획·출시, S&P 공모펀드 실제 출시, 내부 운용시스템 효율 83% 개선.'
    : 'AI-powered financial service planner. 38 robo-advisor algorithms launched, S&P mutual fund shipped, internal ops efficiency improved by 83%.';

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 md:flex-row md:items-center">
          {/* Text — 60% */}
          <div className="space-y-8 md:w-3/5">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-wider"
              style={{
                backgroundColor: 'var(--ed-secondary-container)',
                color: 'var(--ed-on-secondary-container)',
                fontFamily: 'var(--ed-font-body)',
              }}
            >
              {tagline}
            </span>

            <h1
              className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl ed-tracking"
              style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
            >
              {heading1}
              <br />
              <span style={{ color: 'var(--ed-primary)' }} className="italic">
                {headingAccent}
              </span>
              <br />
              {heading2}
            </h1>

            <p
              className="max-w-xl text-lg leading-relaxed sm:text-xl"
              style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
            >
              {description}
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="rounded-full px-8 py-4 text-lg font-bold transition-opacity hover:opacity-90 ed-hero-gradient"
                style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-primary)' }}
              >
                {lang === 'ko' ? '프로젝트 보기' : 'View Projects'}
              </a>
              <a
                href="#about"
                className="rounded-full px-8 py-4 text-lg font-bold transition-colors"
                style={{
                  fontFamily: 'var(--ed-font-display)',
                  backgroundColor: 'var(--ed-surface-container-highest)',
                  color: 'var(--ed-on-surface)',
                }}
              >
                {lang === 'ko' ? '소개' : 'About Me'}
              </a>
            </div>
          </div>

          {/* Visual — 40% */}
          <div className="relative md:w-2/5">
            <div
              className="aspect-[4/5] overflow-hidden rounded-3xl ed-shadow"
              style={{
                backgroundColor: 'var(--ed-surface-container-high)',
                transform: 'rotate(2deg)',
              }}
            >
              <img
                src="/portfolio/assets/about-profile.png"
                alt="Hyebin Woo"
                className="h-full w-full object-cover"
                style={{ mixBlendMode: 'multiply', opacity: 0.85 }}
              />
            </div>
            {/* Decorative blur */}
            <div
              className="absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-full blur-3xl"
              style={{ backgroundColor: 'var(--ed-tertiary-container)', opacity: 0.5 }}
            />
            <div
              className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full blur-3xl"
              style={{ backgroundColor: 'var(--ed-primary-container)', opacity: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
