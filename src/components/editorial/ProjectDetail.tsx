import type { Lang } from '../../i18n/translations';
import type { ProjectData } from '../ProjectDetail';
import {
  TrendingUp, Landmark, Globe, Newspaper, Pickaxe, Sparkles,
  Brain, Cog, Github, ExternalLink, ChevronRight, ArrowRight, ArrowLeft,
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

export default function ProjectDetail({ project, lang }: { project: ProjectData; lang: Lang }) {
  const highlightIcons: Record<string, typeof Brain> = { brain: Brain, cog: Cog };

  return (
    <div style={{ backgroundColor: 'var(--ed-surface)', color: 'var(--ed-on-surface)' }}>

      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden">
        {/* Full-width cover image area */}
        <div
          className="mx-6 mt-28 overflow-hidden rounded-3xl sm:mx-auto sm:max-w-6xl"
          style={{ backgroundColor: 'var(--ed-surface-container)' }}
        >
          {project.screenshots?.hero ? (
            <img
              src={`${BASE}${project.screenshots.hero}`}
              alt={project.title}
              className="aspect-[21/9] w-full object-cover"
            />
          ) : (
            <div
              className="flex aspect-[21/9] items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--ed-surface-container), var(--ed-surface-container-high))' }}
            >
              <p
                className="text-base font-medium"
                style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
              >
                {project.title}
              </p>
            </div>
          )}
        </div>

        {/* Text content below image */}
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-24">
          <span
            className="mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{
              backgroundColor: 'var(--ed-secondary-container)',
              color: 'var(--ed-on-secondary-container)',
              fontFamily: 'var(--ed-font-body)',
            }}
          >
            {project.label}
          </span>

          <h1
            className="mb-6 text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            {project.title}
            <span style={{ color: 'var(--ed-primary)' }}>{project.titleAccent}</span>
          </h1>

          <p
            className="mb-10 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
          >
            {project.heroSubtitle || project.overview.replace(/<[^>]*>/g, '').slice(0, 160)}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.cta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-opacity hover:opacity-90"
              style={{
                fontFamily: 'var(--ed-font-display)',
                background: 'linear-gradient(135deg, #416280, #b9dbfe)',
                color: 'var(--ed-on-primary)',
              }}
            >
              <Github size={16} />
              {project.cta.githubLabel}
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-colors"
              style={{
                fontFamily: 'var(--ed-font-display)',
                backgroundColor: 'var(--ed-surface-container-highest)',
                color: 'var(--ed-on-surface)',
              }}
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* ═══ Challenge + Solution ═══ */}
      {project.challenge && project.solution && (
        <section
          className="px-6 py-16 sm:py-24"
          style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Challenge */}
              <div>
                <p
                  className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {project.challenge.label}
                </p>
                <h2
                  className="mb-6 text-2xl font-bold sm:text-3xl ed-tracking"
                  style={{ fontFamily: 'var(--ed-font-display)' }}
                >
                  {project.challenge.heading}
                </h2>
                <p
                  className="mb-8 text-sm leading-[1.9]"
                  style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {project.challenge.description}
                </p>
                <div className="pt-4" style={{ borderTop: '2px solid var(--ed-primary)' }}>
                  <p
                    className="text-4xl font-extrabold"
                    style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-primary)' }}
                  >
                    {project.challenge.metricValue}
                  </p>
                  <p
                    className="mt-1 text-xs font-medium"
                    style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                  >
                    {project.challenge.metricLabel}
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <p
                  className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {project.solution.label}
                </p>
                <h2
                  className="mb-6 text-2xl font-bold sm:text-3xl ed-tracking"
                  style={{ fontFamily: 'var(--ed-font-display)' }}
                >
                  {project.solution.heading}
                </h2>
                <p
                  className="mb-8 text-sm leading-[1.9]"
                  style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {project.solution.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {project.solution.badges.map((b) => (
                    <div
                      key={b.title}
                      className="rounded-2xl p-4"
                      style={{ backgroundColor: 'var(--ed-surface-white)' }}
                    >
                      <p
                        className="text-sm font-bold"
                        style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-on-surface)' }}
                      >
                        {b.title}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                      >
                        {b.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ How It Works — walkthrough ═══ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
          >
            {lang === 'ko' ? '솔루션' : 'The Solution'}
          </p>
          <h2
            className="mb-16 text-2xl font-bold sm:text-3xl ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            {project.walkthrough.heading}
          </h2>

          <div className="space-y-24">
            {project.walkthrough.steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-10 md:gap-14 ${
                  i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Screenshot */}
                <div className="w-full md:w-1/2">
                  <div
                    className="overflow-hidden rounded-3xl ed-shadow group"
                    style={{ backgroundColor: 'var(--ed-surface-container)' }}
                  >
                    {step.video ? (
                      <video
                        src={`${BASE}${step.video}`}
                        autoPlay loop muted playsInline
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
                      <div
                        className="flex aspect-video items-center justify-center"
                        style={{ backgroundColor: 'var(--ed-surface-container-high)' }}
                      >
                        <p className="text-sm" style={{ color: 'var(--ed-on-surface-variant)' }}>Screenshot</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: 'var(--ed-primary-container)',
                        color: 'var(--ed-primary)',
                        fontFamily: 'var(--ed-font-display)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                    >
                      {step.label}
                    </span>
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold sm:text-2xl ed-tracking"
                    style={{ fontFamily: 'var(--ed-font-display)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-[1.8]"
                    style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Agent Architecture ═══ */}
      <section
        id="architecture"
        className="px-6 py-16 sm:py-24"
        style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
          >
            {lang === 'ko' ? '에이전트 아키텍처' : 'Agent Architecture'}
          </p>
          <h2
            className="mb-12 text-2xl font-bold sm:text-3xl ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            {lang === 'ko' ? '인텔리전스 앙상블' : 'The Intelligence Ensemble'}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.agents.map((agent) => {
              const Icon = agentIcons[agent.key] || Sparkles;
              return (
                <div
                  key={agent.id}
                  className="group rounded-2xl p-6 transition-colors"
                  style={{ backgroundColor: 'var(--ed-surface-white)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--ed-surface-container-highest)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--ed-surface-white)';
                  }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                    >
                      {agent.id}
                    </span>
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-xl"
                      style={{ backgroundColor: 'var(--ed-primary-container)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--ed-primary)' }} />
                    </div>
                  </div>
                  <h3
                    className="mb-2 font-bold"
                    style={{ fontFamily: 'var(--ed-font-display)' }}
                  >
                    {agent.name}
                  </h3>
                  <p
                    className="mb-4 text-xs leading-relaxed"
                    style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                  >
                    {agent.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase"
                        style={{
                          backgroundColor: 'var(--ed-surface-container)',
                          color: 'var(--ed-on-surface-variant)',
                        }}
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

      {/* ═══ Debate System ═══ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p
                className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
              >
                {lang === 'ko' ? '토론 시스템' : 'Debate System'}
              </p>
              <h2
                className="mb-6 text-2xl font-bold italic sm:text-3xl ed-tracking"
                style={{ fontFamily: 'var(--ed-font-display)' }}
              >
                {project.debate.title}
                <span style={{ color: 'var(--ed-primary)' }}>{project.debate.titleAccent}</span>
              </h2>
              <p
                className="mb-8 text-sm leading-[1.8]"
                style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
              >
                {project.debate.description}
              </p>
              <ul className="space-y-5">
                {project.debate.features.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <ChevronRight size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--ed-primary)' }} />
                    <div>
                      <p className="mb-1 text-sm font-bold" style={{ fontFamily: 'var(--ed-font-display)' }}>
                        {f.title}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--ed-on-surface-variant)' }}>
                        {f.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div>
              <div
                className="overflow-hidden rounded-3xl ed-shadow"
                style={{ backgroundColor: 'var(--ed-surface-container)' }}
              >
                {project.debate.screenshot ? (
                  <img
                    src={`${BASE}${project.debate.screenshot}`}
                    alt="Debate System"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex aspect-[4/3] flex-col items-center justify-between p-8">
                    <div className="flex w-full justify-between">
                      <span className="rounded-xl px-3 py-1.5 text-[10px] font-bold" style={{ backgroundColor: 'var(--ed-primary-container)', color: 'var(--ed-primary)' }}>BULL</span>
                      <span className="rounded-xl px-3 py-1.5 text-[10px] font-bold" style={{ backgroundColor: 'var(--ed-secondary-container)', color: 'var(--ed-secondary)' }}>BEAR</span>
                    </div>
                    <span className="text-6xl font-bold" style={{ color: 'var(--ed-outline-variant)' }}>VS</span>
                    <div className="flex w-full justify-between">
                      <span className="rounded-xl px-3 py-1.5 text-[10px] font-bold" style={{ backgroundColor: 'var(--ed-tertiary-container)', color: 'var(--ed-tertiary)' }}>QUANT</span>
                      <span className="rounded-xl px-3 py-1.5 text-[10px] font-bold" style={{ backgroundColor: 'var(--ed-surface-container-highest)', color: 'var(--ed-on-surface-variant)' }}>MACRO</span>
                    </div>
                  </div>
                )}
              </div>
              {/* Persona badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.debate.personas.map((p, i) => {
                  const bgs = [
                    'var(--ed-primary-container)',
                    'var(--ed-secondary-container)',
                    'var(--ed-tertiary-container)',
                    'var(--ed-surface-container-highest)',
                  ];
                  const colors = [
                    'var(--ed-primary)',
                    'var(--ed-secondary)',
                    'var(--ed-tertiary)',
                    'var(--ed-on-surface-variant)',
                  ];
                  return (
                    <span
                      key={p}
                      className="rounded-full px-3 py-1.5 text-[10px] font-semibold"
                      style={{ backgroundColor: bgs[i], color: colors[i] }}
                    >
                      {p}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Impact & Metrics ═══ */}
      <section
        className="px-6 py-16 sm:py-24"
        style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
      >
        <div className="mx-auto max-w-5xl">
          <h2
            className="mb-12 text-center text-2xl font-bold sm:text-3xl ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            {lang === 'ko' ? '임팩트 & 결과' : 'Impact & Results'}
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: 'var(--ed-surface-white)' }}
              >
                <p
                  className="mb-2 text-3xl font-extrabold"
                  style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-primary)' }}
                >
                  {m.value}
                </p>
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Tech Stack ═══ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: 'var(--ed-outline-variant)' }} />
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
            >
              Built With
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: 'var(--ed-outline-variant)' }} />
          </div>
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {project.stack.map((s) => (
              <div key={s.name} className="text-center">
                <p className="text-sm font-bold" style={{ fontFamily: 'var(--ed-font-display)' }}>{s.name}</p>
                <p className="mt-1 text-xs" style={{ color: 'var(--ed-on-surface-variant)' }}>{s.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <a
              href={`${BASE}/${lang}/v2/`}
              className="inline-flex items-center gap-2 text-sm font-bold"
              style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-primary)' }}
            >
              <ArrowLeft size={16} />
              {lang === 'ko' ? '이전 프로젝트' : 'Previous Project'}
            </a>

            <div className="text-center sm:text-right">
              <h3
                className="mb-2 text-xl font-bold sm:text-2xl"
                style={{ fontFamily: 'var(--ed-font-display)' }}
              >
                {project.cta.heading}
              </h3>
              <p
                className="mb-4 text-sm"
                style={{ color: 'var(--ed-on-surface-variant)' }}
              >
                {project.cta.subtext}
              </p>
              <a
                href={project.cta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-opacity hover:opacity-90"
                style={{
                  fontFamily: 'var(--ed-font-display)',
                  backgroundColor: 'var(--ed-secondary)',
                  color: 'var(--ed-on-secondary)',
                }}
              >
                <Github size={16} />
                {project.cta.githubLabel}
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
