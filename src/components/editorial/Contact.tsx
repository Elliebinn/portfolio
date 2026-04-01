import type { Lang } from '../../i18n/translations';
import { t } from '../../i18n/translations';

const links = [
  { label: 'Email', href: 'mailto:elliebinn@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hyebin-woo-62a261291/' },
  { label: 'GitHub', href: 'https://github.com/Elliebinn' },
];

export default function Contact({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).contact;
  const words = tr.sloganWords;

  const ctaText = lang === 'ko' ? '대화 시작하기' : 'Start a Conversation';
  const ctaSub = lang === 'ko'
    ? '구조를 세우고, 직접 만들고, 숫자로 증명합니다.'
    : 'Structure meets execution — from strategy to shipping.';

  return (
    <section
      id="contact"
      className="px-6 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl text-center">
        {/* Slogan */}
        <h2
          className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl ed-tracking"
          style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
        >
          {words[0]} {words[1]}{' '}
          <span style={{ color: 'var(--ed-primary)' }}>{words[2]}</span>
        </h2>

        <p
          className="mx-auto mb-12 max-w-xl text-base sm:text-lg"
          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
        >
          {ctaSub}
        </p>

        {/* CTA button */}
        <a
          href="mailto:elliebinn@gmail.com"
          className="mb-12 inline-block rounded-full px-10 py-4 text-lg font-bold transition-opacity hover:opacity-90"
          style={{
            fontFamily: 'var(--ed-font-display)',
            backgroundColor: 'var(--ed-secondary)',
            color: 'var(--ed-on-secondary)',
          }}
        >
          {ctaText}
        </a>

        {/* Links */}
        <div className="flex items-center justify-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
