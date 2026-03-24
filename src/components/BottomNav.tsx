import type { Lang } from '../i18n/translations';

const BASE = '/portfolio';

export default function BottomNav({ lang = 'en' as Lang }: { lang?: Lang }) {
  const items = [
    { label: 'Projects', href: `${BASE}/${lang}/#projects`, icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    )},
    { label: 'Stack', href: `${BASE}/${lang}/#stack`, icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )},
    { label: 'Blog', href: `${BASE}/blog/`, icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )},
    { label: 'Contact', href: `${BASE}/${lang}/#contact`, icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1 px-3 py-1.5 text-[var(--color-text-muted)] transition-colors active:text-[var(--color-accent-light)]"
          >
            {item.icon}
            <span className="text-[9px] font-medium uppercase tracking-wider">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
