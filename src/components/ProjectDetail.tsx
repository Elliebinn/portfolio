import type { Lang } from '../i18n/translations';
import {
  TrendingUp, Landmark, Globe, Newspaper, Pickaxe, Sparkles,
  Brain, Cog, Search, Shuffle, MessageSquare, Lightbulb,
  ArrowRight, ExternalLink, Github, ChevronRight,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import ScrollReveal from './motion/ScrollReveal';
import CountUp from './motion/CountUp';
import MetaSideRail, { type ProjectMeta } from './project/MetaSideRail';
import SectionDots from './project/SectionDots';

const BASE = '';

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

export interface ProjectData {
  slug: string;
  label: string;
  title: string;
  titleAccent: string;
  status: string;
  deployId: string;
  heroSubtitle?: string;

  problem: {
    heading: string;
    paragraphs: string[];
  };

  challenge?: {
    label: string;
    heading: string;
    description: string;
    metricValue: string;
    metricLabel: string;
  };

  solution?: {
    label: string;
    heading: string;
    description: string;
    badges: { title: string; subtitle: string }[];
  };

  walkthrough: {
    heading: string;
    steps: { label: string; title: string; description: string; screenshot?: string; screenshotAfter?: string; video?: string }[];
  };

  designerFeedback?: {
    heading: string;
    description: string;
    feedbacks: { reviewer: string; score: string; comment: string }[];
    process: string;
    result: string;
  };

  overview: string;
  highlights: { icon: 'brain' | 'cog'; title: string; description: string }[];
  agents?: Agent[];
  debate?: {
    title: string;
    titleAccent: string;
    description: string;
    personas: string[];
    features: { title: string; description: string }[];
    screenshot?: string;
  };
  stack: { category: string; name: string }[];
  flow: FlowStep[];
  metrics: { value: string; label: string }[];

  cta: {
    heading: string;
    subtext: string;
    githubUrl: string;
    githubLabel: string;
  };

  screenshots: {
    hero: string;
  };

  meta?: ProjectMeta;
  nextProject?: {
    slug: string;
    title: string;
    label: string;
  };
}

export default function ProjectDetail({ project, lang }: { project: ProjectData; lang: Lang }) {
  const highlightIcons = { brain: Brain, cog: Cog };
  const heroRef = useRef<HTMLElement>(null);

  // A1: Hero Parallax Dissolve — fade out hero on scroll
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const hero = heroRef.current;
    if (!hero) return;

    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroH = hero.offsetHeight;
        // Fade over first 60% of hero height
        const progress = Math.min(1, scrollY / (heroH * 0.6));
        hero.style.opacity = String(1 - progress);
        hero.style.transform = `translateY(${-progress * 20}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen text-[var(--color-text)]" style={{ backgroundColor: 'var(--color-bg)' }}>

      {/* A6: Section Progress Dots (desktop only) */}
      <SectionDots sections={[
        { id: 'challenge', label: 'Challenge' },
        { id: 'walkthrough', label: 'Walkthrough' },
        { id: 'architecture', label: 'Architecture' },
        { id: 'tech-stack', label: 'Stack' },
        { id: 'metrics', label: 'Metrics' },
      ]} />

      {/* ═══ Hero — gradient inspired by Pencil mockup ═══ */}
      <section ref={heroRef} className="relative overflow-hidden border-b border-[var(--color-border)]/50" style={{ willChange: 'opacity, transform' }}>
        {/* Gradient backdrop */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/8 via-transparent to-transparent" />
          <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/6 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              {project.status}
            </span>
          </div>
          <h1
            className="mb-5 text-5xl font-bold leading-[1.0] sm:text-7xl lg:text-8xl tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title.replace(' — ', '')}
            {project.title.includes('—') && <br className="hidden sm:block" />}
            <span className="text-[var(--color-accent)]">{project.titleAccent}</span>
          </h1>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-[var(--color-text-muted)]">
            {project.heroSubtitle || project.overview.replace(/<[^>]*>/g, '').slice(0, 140) + '…'}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.cta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-on-accent)] transition-colors hover:bg-[var(--color-accent)]"
            >
              <Github size={16} />
              {project.cta.githubLabel}
            </a>
            <a
              href="#architecture"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--color-bg-card)]"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* ═══ MetaSideRail — conditional ═══ */}
      {project.meta && (
        <section className="border-b border-[var(--color-border)]/50 px-6 py-10 lg:hidden">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <MetaSideRail meta={project.meta} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ═══ Challenge + Solution — 2-column from Pencil ═══ */}
      {project.challenge && project.solution ? (
        <section id="challenge" className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Challenge */}
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  {project.challenge.label}
                </p>
                <h2
                  className="mb-6 text-2xl font-bold leading-snug sm:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.challenge.heading}
                </h2>
                <p className="mb-8 text-sm leading-[1.9] text-[var(--color-text-muted)]">
                  {project.challenge.description}
                </p>
                <div>
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    Core Metric
                  </p>
                  <p className="text-4xl font-bold text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {project.challenge.metricValue}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {project.challenge.metricLabel}
                  </p>
                </div>
              </div>
              {/* Solution */}
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  {project.solution.label}
                </p>
                <h2
                  className="mb-6 text-2xl font-bold leading-snug sm:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.solution.heading}
                </h2>
                <p className="mb-8 text-sm leading-[1.9] text-[var(--color-text-muted)]">
                  {project.solution.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.solution.badges.map((b) => (
                    <div
                      key={b.title}
                      className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3"
                    >
                      <p className="text-sm font-bold">{b.title}</p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">{b.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Fallback: original Problem section */
        <section className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
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
      )}

      {/* ═══ How It Works — walkthrough with screenshots (kept) ═══ */}
      <section id="walkthrough" className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
            02 How It Works
          </p>
          <h2
            className="mb-16 text-2xl font-bold sm:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.walkthrough.heading}
          </h2>

          <div className="space-y-24">
            {project.walkthrough.steps.map((step, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 150, 300)}>
              <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
                {/* Screenshot */}
                {step.screenshotAfter ? (
                  <div className="[direction:ltr] grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
                      <div className="px-3 py-1.5 border-b border-[var(--color-border)]/50 bg-[var(--color-bg-card)]">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">Before</span>
                      </div>
                      <img
                        src={`${BASE}${step.screenshot}`}
                        alt={`${step.title} - Before`}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    <div className="group overflow-hidden rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-card)]">
                      <div className="px-3 py-1.5 border-b border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)]">After</span>
                      </div>
                      <img
                        src={`${BASE}${step.screenshotAfter}`}
                        alt={`${step.title} - After`}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                <div className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] transition-all duration-300 hover:border-[var(--color-accent)]/20 [direction:ltr]">
                  {step.video ? (
                    <video
                      src={`${BASE}${step.video}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full object-cover"
                    />
                  ) : step.screenshot ? (
                    <img
                      src={`${BASE}${step.screenshot}`}
                      alt={step.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center">
                      <p className="font-mono text-xs text-[var(--color-text-muted)]">Screenshot</p>
                    </div>
                  )}
                </div>
                )}
                {/* Text */}
                <div className="[direction:ltr]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-accent)]/30 text-xs font-bold text-[var(--color-accent)]">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Designer Feedback ═══ */}
      {project.designerFeedback && (
        <section className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
              03 외부 피드백
            </p>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              {project.designerFeedback.heading}
            </h2>
            <p className="mb-12 text-sm leading-[1.9] text-[var(--color-text-muted)] max-w-2xl">
              {project.designerFeedback.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              {project.designerFeedback.feedbacks.map((f) => (
                <div key={f.reviewer} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-bold">{f.reviewer}</span>
                    <span className="text-2xl font-bold text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-display)' }}>{f.score}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">"{f.comment}"</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-6">
              <p className="text-sm leading-[1.9] text-[var(--color-text-muted)] mb-4">{project.designerFeedback.process}</p>
              <div className="flex items-center gap-3">
                <ArrowRight size={14} className="text-[var(--color-accent)]" />
                <span className="text-sm font-bold text-[var(--color-accent)]">{project.designerFeedback.result}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ Architecture — overview + highlights ═══ */}
      <section id="architecture" className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
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
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors hover:bg-[var(--color-bg-card)]"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                    <Icon size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold">{h.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{h.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Agent Architecture — "The Intelligence Ensemble" ═══ */}
      {project.agents && project.agents.length > 0 && (
      <section className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
            04 Agent Architecture
          </p>
          <h2
            className="mb-12 text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Intelligence Ensemble
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.agents.map((agent) => {
              const Icon = agentIcons[agent.key] || Sparkles;
              return (
                <div
                  key={agent.id}
                  className="group cursor-pointer rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all duration-200 hover:bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/20"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[var(--color-text-muted)]">{agent.id}</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 transition-colors group-hover:bg-[var(--color-accent)]/20">
                      <Icon size={16} className="text-[var(--color-accent)]" />
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
      )}

      {/* ═══ Debate System — dark bg treatment from Pencil ═══ */}
      {project.debate && (
      <section className="relative overflow-hidden border-b border-[var(--color-border)]/50">
        {/* Subtle dark overlay for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[var(--color-bg-card)]" />
        <div className="relative z-10 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text side */}
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  05 The Debate System
                </p>
                <h2
                  className="mb-6 text-3xl font-bold italic sm:text-4xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.debate.title}
                  <span className="text-[var(--color-accent)]">{project.debate.titleAccent}</span>
                </h2>
                <p className="mb-8 text-sm leading-[1.8] text-[var(--color-text-muted)]">
                  {project.debate.description}
                </p>
                <ul className="space-y-5">
                  {project.debate.features.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
                      <div>
                        <p className="mb-1 text-sm font-bold">{f.title}</p>
                        <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{f.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Visual side — debate arena */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]">
                  {project.debate.screenshot ? (
                    <img
                      src={`${BASE}${project.debate.screenshot}`}
                      alt="Debate System"
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    /* Fallback: VS arena visualization */
                    <div className="flex aspect-[4/3] flex-col items-center justify-between p-8">
                      <div className="flex w-full justify-between">
                        <span className="rounded-md bg-green-500/20 px-3 py-1.5 text-[10px] font-bold text-green-400">BULL</span>
                        <span className="rounded-md bg-red-500/20 px-3 py-1.5 text-[10px] font-bold text-red-400">BEAR</span>
                      </div>
                      <span className="text-6xl font-bold text-[var(--color-text-muted)]/20">VS</span>
                      <div className="flex w-full justify-between">
                        <span className="rounded-md bg-blue-500/20 px-3 py-1.5 text-[10px] font-bold text-blue-400">QUANT</span>
                        <span className="rounded-md bg-purple-500/20 px-3 py-1.5 text-[10px] font-bold text-purple-400">MACRO</span>
                      </div>
                    </div>
                  )}
                </div>
                {/* Persona badges under the screenshot */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.debate.personas.map((p, i) => {
                    const colors = [
                      'bg-green-500/10 text-green-400',
                      'bg-red-500/10 text-red-400',
                      'bg-blue-500/10 text-blue-400',
                      'bg-purple-500/10 text-purple-400',
                    ];
                    return (
                      <span
                        key={p}
                        className={`rounded-md px-3 py-1.5 text-[10px] font-medium ${colors[i] || 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'}`}
                      >
                        {p}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ═══ Technical Stack ═══ */}
      <section id="tech-stack" className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Label with horizontal lines */}
          <div className="mb-14 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
              Built with Modern Standards
            </p>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {project.stack.map((s) => (
              <div key={s.name} className="stack-glow-item text-center rounded-lg px-3 py-4 transition-all duration-300 cursor-default hover:bg-[var(--color-bg-card)] hover:shadow-[0_0_20px_rgba(69,98,114,0.15)]">
                <p className="text-sm font-bold">{s.name}</p>
                <p className="mt-1 font-mono text-[10px] tracking-wider text-[var(--color-text-muted)]">
                  {s.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Data Flow ═══ */}
      <section className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
            The Data Journey
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {project.flow.map((step, i) => {
              const Icon = flowIcons[i] || Lightbulb;
              return (
                <div key={i} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]">
                    <Icon size={22} className="text-[var(--color-accent)]" />
                  </div>
                  <h4 className="mb-1 text-sm font-bold">{step.title}</h4>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                    {step.subtitle}
                  </p>
                  {i < project.flow.length - 1 && (
                    <ArrowRight size={14} className="absolute -right-4 top-5 hidden text-[var(--color-text-muted)]/30 lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Metrics ═══ */}
      <section id="metrics" className="border-b border-[var(--color-border)]/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
            By The Numbers
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.metrics.map((m) => {
              const numMatch = m.value.match(/(\d+(?:\.\d+)?)/);
              const numVal = numMatch ? parseFloat(numMatch[1]) : null;
              const prefix = numMatch ? m.value.slice(0, numMatch.index) : '';
              const suffix = numMatch ? m.value.slice((numMatch.index ?? 0) + numMatch[1].length) : '';
              return (
                <div
                  key={m.label}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-center"
                >
                  <p className="mb-2 text-3xl font-bold text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {numVal !== null ? (
                      <CountUp value={numVal} prefix={prefix} suffix={suffix} />
                    ) : (
                      m.value
                    )}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                    {m.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <ScrollReveal>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              {project.cta.heading}
            </h2>
            <p className="mb-8 text-sm text-[var(--color-text-muted)]">{project.cta.subtext}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={project.cta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--color-bg-card)]"
              >
                <Github size={16} />
                {project.cta.githubLabel}
                <ExternalLink size={12} className="opacity-50" />
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ Next Project CTA — A5 fullbleed block ═══ */}
      {project.nextProject && (
        <ScrollReveal>
          <a
            href={`${BASE}/${lang}/projects/${project.nextProject.slug}/`}
            className="next-project-cta group relative block overflow-hidden border-t border-[var(--color-border)]/50"
          >
            {/* Gradient backdrop */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/8 via-[var(--color-bg-secondary)] to-[var(--color-bg-secondary)] transition-opacity duration-500 group-hover:opacity-80" />
            <div className="pointer-events-none absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-[var(--color-accent)]/6 blur-[100px] transition-transform duration-700 group-hover:scale-110" />

            <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-6 px-6 py-16 sm:py-20 lg:py-24">
              {/* Mini thumbnail */}
              <div className="hidden shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)]/50 sm:block sm:h-20 sm:w-20 lg:h-24 lg:w-24" style={{ backgroundColor: 'var(--color-bg-detail)' }}>
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent)]/5">
                  <ArrowRight size={20} className="text-[var(--color-accent)]/40" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
                  {project.nextProject.label}
                </p>
                <h3
                  className="text-2xl font-bold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)] sm:text-3xl lg:text-4xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.nextProject.title}
                </h3>
              </div>

              <ArrowRight
                size={28}
                className="next-project-arrow shrink-0 text-[var(--color-text-faint)] transition-all duration-300 group-hover:translate-x-3 group-hover:text-[var(--color-accent)]"
              />
            </div>
          </a>
        </ScrollReveal>
      )}
    </div>
  );
}
