const BASE = '/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Hyebin Woo. Designed for precision.
        </p>
        <div className="flex gap-8">
          <a href={`${BASE}/#projects`} className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
            Projects
          </a>
          <a href={`${BASE}/blog/`} className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
            Blog
          </a>
          <a href={`${BASE}/#contact`} className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
