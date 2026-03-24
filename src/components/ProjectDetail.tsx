import type { Lang } from '../i18n/translations';
import {
  TrendingUp, Landmark, Globe, Newspaper, Pickaxe, Sparkles,
  Brain, Cog, Search, Shuffle, MessageSquare, Lightbulb,
  ArrowRight, ExternalLink, Github, ChevronRight,
} from 'lucide-react';

const BASE = '/portfolio';

const agentIcons: Record<string, typeof TrendingUp> = {
  technical: TrendingUp,
  fundamental: Landmark,
  macro: Globe,
  news: Newspaper,
  commodity: Pickaxe,
  related: Sparkles,
};

const flowIcons = [Search, Shuffle, MessageSquare, Lightbulb];

type Agent = { id: string; key: string; name: string; description: string; tags: string[] };
type FlowStep = { title: string; subtitle: string };
type Screenshot = { src: string; alt: string; caption: string };

export interface ProjectData {
  slug: string;
  label: string;
  title: string;
  titleAccent: string;
  status: string;
  deployId: string;

  // Act 1: Problem
  problem: {
    heading: string;
    paragraphs: string[];
  };

  // Act 2: Solution walkthrough
  walkthrough: {
    heading: string;
    steps: { label: string; title: string; description: string; screenshot?: string }[];
  };

  // Act 3: Technical depth
  overview: string;
  highlights: { icon: 'brain' | 'cog'; title: string; description: string }[];
  agents: Agent[];
  debate: {
    title: string;
    titleAccent: string;
    description: string;
    personas: string[];
    features: { title: string; description: string }[];
    screenshot?: string;
  };
  stack: { category: string; name: string }[];
  flow: FlowStep[];

  // Act 4: Metrics
  metrics: { value: string; label: string }[];

  // CTA
  cta: {
    heading: string;
    subtext: string;
    githubUrl: string;
    githubLabel: string;
  };

  screenshots: {
    hero: string;
  };
}

export default function ProjectDetail({ project, lang }: { project: ProjectData; lang: Lang }) {
  const highlightIcons = { brain: Brain, cog: Cog };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

      {/* ═══ Hero ═══ */}
      <section className="relative border-b border-[var(--color-border)] px-6 pt-28 pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            {project.label}
          </p>
          <h1
            className="mb-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
            <span className="text-[var(--color-accent-light)]">{project.titleAccent}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-[var(--color-text-muted)]">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              {project.status}
            </span>
            <span className="font-mono opacity-50">{project.deployId}</span>
          </div>
        </div>
      </section>

      {/* ═══ Act 1: The Problem ═══ */}
      <section className="border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            01 The Problem
          </p>
          <div className="max-w-3xl">
            <h2
              className="mb-8 text-2xl font-bold leading-snug sm:text-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.problem.heading}
            </h2>
            {project.problem.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-sm leading-[1.9] text-[var(--color-text-muted)]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Act 2: Solution Walkthrough ═══ */}
      <section className="border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            02 How It Works
          </p>
          <h2
            className="mb-16 text-2xl font-bold sm:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.walkthrough.heading}
          </h2>

          <div className="space-y-20">
            {project.walkthrough.steps.map((step, i) => (
              <div key={i} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
                {/* Screenshot */}
                <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] [direction:ltr]">
                  {step.screenshot ? (
                    <img
                      src={`${BASE}${step.screenshot}`}
                      alt={step.title}
                      className="w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center">
                      <p className="font-mono text-xs text-[var(--color-text-muted)]">Screenshot</p>
                    </div>
                  )}
                </div>
                {/* Text */}
                <div className="[direction:ltr]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-accent)]/30 text-xs font-bold text-[var(--color-accent-light)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                      {step.label}
                    </span>
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold sm:text-2xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-[var(--color-text-muted)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Act 3: Technical Depth ═══ */}

      {/* Overview + Highlights */}
      <section className="border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            03 Architecture
          </p>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            <span dangerouslySetInnerHTML={{ __html: project.overview }} />
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((h) => {
              const Icon = highlightIcons[h.icon];
              return (
                <div
                  key={h.title}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                    <Icon size={20} className="text-[var(--color-accent-light)]" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold">{h.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{h.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agent Architecture */}
      <section className="border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            04 Agent Architecture
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.agents.map((agent) => {
              const Icon = agentIcons[agent.key] || Sparkles;
              return (
                <div
                  key={agent.id}
                  className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors hover:bg-[var(--color-bg-card-hover)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[var(--color-text-muted)]">{agent.id}</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                      <Icon size={16} className="text-[var(--color-accent-light)]" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold">{agent.name}</h3>
                  <p className="mb-4 text-xs leading-relaxed text-[var(--color-text-muted)]">{agent.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--color-border)] px-2 py-0.5 font-mono text-[9px] uppercase text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Debate System */}
      <section className="border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              {project.debate.screenshot ? (
                <img
                  src={`${BASE}${project.debate.screenshot}`}
                  alt="Debate System"
                  className="w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center">
                  <MessageSquare size={48} className="text-[var(--color-text-muted)]/20" />
                </div>
              )}
              <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] p-4">
                {project.debate.personas.map((p) => (
                  <span
                    key={p}
                    className="rounded-md bg-[var(--color-accent)]/10 px-3 py-1.5 text-[10px] font-medium text-[var(--color-accent-light)]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
                05 The Debate System
              </p>
              <h2
                className="mb-6 text-3xl font-bold italic sm:text-4xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.debate.title}
                <span className="text-[var(--color-accent-light)]">{project.debate.titleAccent}</span>
              </h2>
              <p className="mb-8 text-sm leading-[1.8] text-[var(--color-text-muted)]">
                {project.debate.description}
              </p>
              <ul className="space-y-5">
                {project.debate.features.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-accent-light)]" />
                    <div>
                      <p className="mb-1 text-sm font-bold">{f.title}</p>
                      <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            06 Technical Stack
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {project.stack.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 text-center transition-colors hover:bg-[var(--color-bg-card-hover)]"
              >
                <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-[var(--color-accent-light)]">
                  {s.category}
                </p>
                <p className="text-sm font-bold">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            07 Data Flow
          </p>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {project.flow.map((step, i) => {
                const Icon = flowIcons[i] || Lightbulb;
                return (
                  <div key={i} className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                      <Icon size={24} className="text-[var(--color-accent-light)]" />
                    </div>
                    <h4 className="mb-1 text-sm font-bold">{step.title}</h4>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                      {step.subtitle}
                    </p>
                    {i < project.flow.length - 1 && (
                      <ArrowRight size={14} className="mx-auto mt-4 text-[var(--color-text-muted)]/30 hidden lg:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Act 4: Metrics ═══ */}
      <section className="border-b border-[var(--color-border)] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            08 By The Numbers
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-center"
              >
                <p className="mb-2 text-3xl font-bold text-[var(--color-accent-light)]" style={{ fontFamily: 'var(--font-display)' }}>
                  {m.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 sm:flex sm:items-center sm:justify-between sm:p-12">
            <div className="mb-6 sm:mb-0">
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                {project.cta.heading}
              </h2>
              <p className="text-sm text-[var(--color-text-muted)]">{project.cta.subtext}</p>
            </div>
            <a
              href={project.cta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--color-bg-card-hover)]"
            >
              <Github size={16} />
              {project.cta.githubLabel}
              <ExternalLink size={12} className="opacity-50" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
