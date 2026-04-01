import { useState } from 'react';
import type { Lang } from '../../i18n/translations';
import { t, getOtherLang } from '../../i18n/translations';

const BASE = '/portfolio';

export default function Navbar({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang);
  const [open, setOpen] = useState(false);
  const otherLang = getOtherLang(lang);

  const navLinks = [
    { label: tr.nav.projects, href: `${BASE}/${lang}/v2/#projects` },
    { label: tr.nav.blog, href: `${BASE}/${lang}/blog/` },
    { label: tr.nav.archive, href: `${BASE}/${lang}/v2/#timeline` },
    { label: tr.nav.stack, href: `${BASE}/${lang}/v2/#stack` },
  ];

  return (
    <>
      {/* Floating pill nav */}
      <nav
        className="fixed top-6 left-1/2 z-50 w-[92%] max-w-5xl -translate-x-1/2 rounded-full px-5 py-3 ed-glass ed-shadow flex items-center justify-between"
      >
        <a
          href={`${BASE}/${lang}/v2/`}
          className="flex items-center gap-2"
          style={{ fontFamily: 'var(--ed-font-display)' }}
        >
          <img
            src="/portfolio/assets/logo-v2-character-circle.png"
            alt="HB"
            style={{ height: '28px', width: '28px', borderRadius: '50%' }}
          />
          <span
            className="text-lg font-extrabold tracking-tight"
            style={{ color: 'var(--ed-primary)' }}
          >
            HB.
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium transition-colors hover:opacity-70"
              style={{
                fontFamily: 'var(--ed-font-display)',
                color: 'var(--ed-on-surface-variant)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`${BASE}/${otherLang}/v2/`}
            className="flex h-8 items-center rounded-full px-3 text-[12px] font-semibold uppercase tracking-wider transition-colors"
            style={{
              color: 'var(--ed-on-surface-variant)',
              backgroundColor: 'var(--ed-surface-container)',
            }}
          >
            {otherLang === 'ko' ? '한국어' : 'EN'}
          </a>
          <a
            href={`${BASE}/${lang}/v2/#contact`}
            className="rounded-full px-6 py-2 text-sm font-bold transition-opacity hover:opacity-90"
            style={{
              fontFamily: 'var(--ed-font-display)',
              background: 'linear-gradient(135deg, #416280, #b9dbfe)',
              color: 'var(--ed-on-primary)',
            }}
          >
            {tr.nav.hireMe}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`${BASE}/${otherLang}/v2/`}
            className="text-[11px] font-semibold uppercase"
            style={{ color: 'var(--ed-on-surface-variant)' }}
          >
            {otherLang === 'ko' ? '한국어' : 'EN'}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{ color: 'var(--ed-on-surface-variant)' }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="fixed top-20 left-1/2 z-40 w-[92%] max-w-5xl -translate-x-1/2 rounded-2xl p-6 ed-glass ed-shadow md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium"
              style={{
                fontFamily: 'var(--ed-font-display)',
                color: 'var(--ed-on-surface-variant)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${BASE}/${lang}/v2/#contact`}
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full py-3 text-center text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, #416280, #b9dbfe)',
              color: 'var(--ed-on-primary)',
            }}
          >
            {tr.nav.hireMe}
          </a>
        </div>
      )}
    </>
  );
}
