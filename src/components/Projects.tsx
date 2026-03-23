const techStack = [
  'React', 'TypeScript', 'FastAPI', 'Claude API', 'SSE', 'MySQL', 'Docker',
];

const features = [
  '6 AI agents (Technical, Fundamental, Macro, News, Commodity, Related)',
  '4-persona debate system with real-time streaming',
  'Supervisor synthesis with weighted scoring',
  'Full-stack: DB schema → REST API → React UI',
];

const smallProjects = [
  {
    icon: '📊',
    title: 'Portfolio Optimizer Agent',
    description:
      'A specialized LLM agent designed to rebalance portfolios based on real-time ETF market data and user risk tolerance.',
    tags: ['Python', 'Claude API'],
  },
  {
    icon: '📄',
    title: 'Semantic Document Parser',
    description:
      'High-performance extraction pipeline for financial disclosure documents using LLM orchestration.',
    tags: ['LangChain', 'GPT-4'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs tracking-widest text-[var(--color-accent-light)] uppercase">
          Selected Case Studies
        </p>
        <h2 className="mb-16 text-4xl font-bold sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>Engineered Works</h2>

        {/* Featured project */}
        <div className="mb-12 grid gap-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 lg:grid-cols-2 lg:p-10">
          {/* Screenshot placeholder */}
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] min-h-[300px]">
            <div className="text-center text-sm text-[var(--color-text-muted)]">
              <p className="mb-2 text-4xl">📈</p>
              <p>JujuTok Screenshot</p>
              <p className="text-xs mt-1">Demo GIF / Screenshot</p>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 font-mono text-xs text-[var(--color-text-muted)] uppercase">
              Technical Architecture
            </p>
            <p className="mb-1 text-sm text-[var(--color-accent-light)]">
              6 Specialized Agents
            </p>
            <p className="mb-4 text-xs text-[var(--color-text-muted)]">
              Focusing on high-frequency AI reasoning and streaming financial data.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-[var(--color-text-muted)]">
              Real-time SSE Streaming
            </h3>
            <p className="mb-6 text-xs text-[var(--color-text-muted)]">
              Providing token-by-token feedback loops for LLM analysis pipelines.
            </p>

            <a
              href="https://github.com/Elliebinn/jujutok"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-light)] transition-colors hover:text-[var(--color-text)]"
            >
              Explore Architecture
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured title + details */}
        <div className="mb-12">
          <h3 className="mb-3 text-2xl font-bold">
            JujuTok — AI Stock Research
          </h3>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            A multi-agent system featuring a 4-persona debate mechanism for objective
            stock analysis using Claude API and real-time SSE.
          </p>

          {/* Tech stack pills */}
          <div className="mb-6 flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Smaller project cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {smallProjects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors hover:bg-[var(--color-bg-card-hover)]"
            >
              <p className="mb-3 text-3xl">{p.icon}</p>
              <h4 className="mb-2 text-lg font-semibold">{p.title}</h4>
              <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {p.description}
              </p>
              <div className="flex gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
