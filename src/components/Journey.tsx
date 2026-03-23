const timeline = [
  {
    title: 'AI Service Planner',
    org: 'Current Focus',
    period: 'Present',
    description:
      'Leading knowledge into development of AI-driven fintech. Orchestrate automated agent pipelines for production clients.',
    accent: true,
  },
  {
    title: 'ETF Planning Specialist',
    org: 'Asset Management',
    period: '2022 — 2024',
    description:
      'Managed mutual fund structures and ETF listing strategies. Pioneered robo-advisor integration.',
  },
  {
    title: 'Finance & Self-Teaching',
    org: 'Academic & Personal Growth',
    period: '2019 — 2022',
    description:
      'Studied economics at a national university. Self-taught Python/JavaScript/React/FastAPI/LLM/Docker/Git and began engineering.',
  },
];

export default function Journey() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-xs tracking-widest text-[var(--color-accent-light)] uppercase">
          Professional Timeline
        </p>
        <h2 className="mb-16 text-4xl font-bold italic sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>The Journey</h2>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="relative border-l-2 border-[var(--color-border)] pl-8">
          {timeline.map((item, i) => (
            <div key={item.title} className={`relative pb-12 ${i === timeline.length - 1 ? 'pb-0' : ''}`}>
              {/* Dot */}
              <div
                className={`absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 ${
                  item.accent
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                    : 'border-[var(--color-text-muted)] bg-[var(--color-bg)]'
                }`}
              />

              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                {item.accent && (
                  <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Present
                  </span>
                )}
              </div>
              <p className="mb-2 text-sm text-[var(--color-text-muted)]">
                {item.org}
                <span className="ml-3 font-mono text-xs">{item.period}</span>
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
