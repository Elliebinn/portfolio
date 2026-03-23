export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          HYEBIN.DEV &copy; {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          <a href="#home" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
            Home
          </a>
          <a href="#projects" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
            Projects
          </a>
          <a href="#contact" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
