import { useState } from 'react';
import type { Lang } from '../i18n/translations';
import { t, getOtherLang } from '../i18n/translations';

const BASE = '/portfolio';

export default function Navbar({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: tr.nav.projects, href: `${BASE}/${lang}/#projects` },
    { label: tr.nav.stack, href: `${BASE}/${lang}/#stack` },
    { label: tr.nav.blog, href: `${BASE}/${lang}/blog/` },
    { label: tr.nav.archive, href: `${BASE}/${lang}/#timeline` },
  ];

  const otherLang = getOtherLang(lang);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass ghost-border border-t-0 border-l-0 border-r-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href={`${BASE}/${lang}/`}
          className="flex items-center gap-2"
        >
          <img
            src="/portfolio/assets/logo-v2-character-circle.png"
            alt="HB."
            className="nav-logo"
            style={{ height: '28px', width: '28px', borderRadius: '50%' }}
          />
          <span
            className="text-base font-semibold tracking-[0.15em] text-[var(--color-text)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            HB.
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`${BASE}/${otherLang}/`}
            className="flex h-8 items-center rounded-full px-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-card-hover)]"
          >
            {otherLang === 'ko' ? '한국어' : 'EN'}
          </a>
          <a href={`${BASE}/${lang}/#contact`}
            className="rounded-full gradient-primary px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-[var(--color-on-accent)] transition-opacity hover:opacity-90">
            {tr.nav.hireMe}
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <a href={`${BASE}/${otherLang}/`}
            className="text-[11px] font-semibold uppercase text-[var(--color-text-muted)]">
            {otherLang === 'ko' ? '한국어' : 'EN'}
          </a>
          <button onClick={() => setOpen(!open)} className="text-[var(--color-text-muted)]" aria-label="Menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-[var(--color-bg-card)] px-6 py-6 md:hidden shadow-ambient">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-sm uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
              {link.label}
            </a>
          ))}
          <a href={`${BASE}/${lang}/#contact`} onClick={() => setOpen(false)}
            className="mt-4 block rounded-full gradient-primary py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-[var(--color-on-accent)]">
            {tr.nav.hireMe}
          </a>
        </div>
      )}
    </nav>
  );
}
