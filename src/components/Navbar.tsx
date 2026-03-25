import { useState, useEffect } from 'react';
import type { Lang } from '../i18n/translations';
import { t, getOtherLang } from '../i18n/translations';

const BASE = '/portfolio';

export default function Navbar({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const navLinks = [
    { label: tr.nav.projects, href: `${BASE}/${lang}/#projects` },
    { label: tr.nav.stack, href: `${BASE}/${lang}/#stack` },
    { label: tr.nav.blog, href: `${BASE}/${lang}/blog/` },
    { label: tr.nav.archive, href: `${BASE}/${lang}/#timeline` },
  ];

  useEffect(() => {
    setDark(!document.documentElement.classList.contains('light'));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('light', !next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const otherLang = getOtherLang(lang);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href={`${BASE}/${lang}/`}
          className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          HYEBIN<span className="text-[var(--color-accent)]">.DEV</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Lang toggle */}
          <a
            href={`${BASE}/${otherLang}/`}
            className="flex h-8 items-center rounded-full border border-[var(--color-border)] px-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {otherLang === 'ko' ? '한국어' : 'EN'}
          </a>
          <button onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            aria-label="Toggle theme">
            {dark ? (
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
            ) : (
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            )}
          </button>
          <a href={`${BASE}/${lang}/#contact`}
            className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90">
            {tr.nav.hireMe}
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <a href={`${BASE}/${otherLang}/`}
            className="text-[11px] font-semibold uppercase text-[var(--color-text-muted)]">
            {otherLang === 'ko' ? '한국어' : 'EN'}
          </a>
          <button onClick={toggleTheme} className="text-[var(--color-text-muted)]" aria-label="Toggle theme">
            {dark ? (
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
            ) : (
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-[var(--color-text-muted)]" aria-label="Menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
              {link.label}
            </a>
          ))}
          <a href={`${BASE}/${lang}/#contact`} onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-[var(--color-accent)] py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-white">
            {tr.nav.hireMe}
          </a>
        </div>
      )}
    </nav>
  );
}
