const stats = [
  { value: '19.5%', label: 'Annual Returns', sub: 'Fund Performance' },
  { value: '6+', label: 'AI Agents Built', sub: 'Multi-Agent System' },
  { value: 'Full', label: 'Stack Engineer', sub: 'Frontend → Backend → LLM' },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs tracking-widest text-[var(--color-accent-light)] uppercase">
          About Me
        </p>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — photo placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <div className="flex h-full items-center justify-center text-sm text-[var(--color-text-muted)]">
                Photo
              </div>
              {/* Replace with: <img src="/portfolio/assets/profile.jpg" alt="Hyebin Woo" className="h-full w-full object-cover" /> */}
            </div>
          </div>

          {/* Right — text */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold leading-snug sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
              Bridging the gap between{' '}
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
                Financial Strategy
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-r from-[var(--color-accent-light)] to-purple-300 bg-clip-text text-transparent">
                AI Engineering.
              </span>
            </h2>

            <p className="mb-8 leading-relaxed text-[var(--color-text-muted)]">
              My journey began in the complex world of mutual funds and ETFs. I navigated
              robo&#8209;advisor planning before teaching myself the architecture of the web.
              Today, I combine that domain expertise with a full&#8209;stack engineering mindset
              to create AI agents that don't just chat, but solve real economic problems.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-center"
                >
                  <p className="text-2xl font-bold text-[var(--color-accent-light)]">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[var(--color-text)]">{s.label}</p>
                  <p className="mt-0.5 text-[10px] text-[var(--color-text-muted)]">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
