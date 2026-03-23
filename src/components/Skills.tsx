const planning = [
  { name: 'Service Design', level: 90 },
  { name: 'Agent Architecture', level: 85 },
  { name: 'Prompt Engineering', level: 95 },
];

const engineering = [
  { name: 'Full-stack Web', level: 80 },
  { name: 'Backend & DB', level: 85 },
  { name: 'Deployment & AI Ops', level: 75 },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-mono text-xs text-[var(--color-text-muted)]">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs tracking-widest text-[var(--color-accent-light)] uppercase">
          The Toolkit
        </p>
        <h2 className="mb-16 text-4xl font-bold italic sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>Dual Proficiency</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* AI Planning */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-lg">
                🧠
              </span>
              <h3 className="text-xl font-bold">AI Planning</h3>
            </div>
            <div className="space-y-5">
              {planning.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          {/* Product Engineering */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-lg">
                ⚡
              </span>
              <h3 className="text-xl font-bold">Product Engineering</h3>
            </div>
            <div className="space-y-5">
              {engineering.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
