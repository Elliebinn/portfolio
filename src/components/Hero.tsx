export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.07] blur-[120px]" />
      </div>

      <div className="relative z-10 text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-[var(--color-accent-light)] uppercase">
          AI Service Planner &middot; Product Engineer
        </p>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
          Hyebin Woo{' '}
          <span className="text-[var(--color-text-muted)]">(우혜빈)</span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
          I design and build AI&#8209;powered financial products — from prompt
          engineering to full&#8209;stack deployment.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-card)]"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
