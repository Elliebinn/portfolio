const BASE = '';

export default function Footer() {
  return (
    <footer className="px-6 py-6" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
            &copy; {new Date().getFullYear()} Hyebin Woo
          </p>
          <div className="flex gap-8">
            <a href={`${BASE}/#projects`} className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)] hover:text-[var(--color-accent)]">
              Projects
            </a>
            <a href={`${BASE}/blog/`} className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)] hover:text-[var(--color-accent)]">
              Blog
            </a>
            <a href={`${BASE}/#contact`} className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)] hover:text-[var(--color-accent)]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
