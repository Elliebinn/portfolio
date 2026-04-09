import type { Lang } from '../i18n/translations';
import { ArrowRight, Layers, GitBranch, CheckCircle, Lightbulb, Target, Zap } from 'lucide-react';

const BASE = '';

export interface CaseStudyData {
  slug: string;
  label: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  meta: {
    role: string;
    team: string;
    period: string;
    impact: string;
  };
  problems: {
    title: string;
    description: string;
  }[];
  decisions: {
    title: string;
    reason: string;
    beforeImg: string;
    afterImg: string;
  }[];
  process: {
    heading: string;
    description: string;
    steps?: { title: string; subtitle: string }[];
  };
  metrics: {
    value: string;
    label: string;
    detail?: string;
  }[];
  retrospective: {
    heading: string;
    items: string[];
  };
  blogLinks: {
    title: string;
    url: string;
  }[];
}

interface Props {
  project: CaseStudyData;
  lang: Lang;
}

export default function CaseStudy({ project, lang }: Props) {
  const metaLabels =
    lang === 'ko'
      ? { role: '역할', team: '팀 구성', period: '기간', impact: '임팩트' }
      : { role: 'Role', team: 'Team', period: 'Period', impact: 'Impact' };

  const sectionLabels =
    lang === 'ko'
      ? {
          problems: '문제 발견',
          problemsHeading: '왜 리디자인이 필요했는가',
          decisions: '핵심 의사결정',
          process: '실행 프로세스',
          results: '임팩트',
          retrospective: '회고',
          before: 'Before',
          after: 'After',
          relatedPosts: '관련 블로그',
          readMore: '자세히 읽기',
        }
      : {
          problems: 'Problem Discovery',
          problemsHeading: 'Why Redesign Was Necessary',
          decisions: 'Key Decisions',
          process: 'Process',
          results: 'Impact Measured',
          retrospective: 'Lessons Learned',
          before: 'Before',
          after: 'After',
          relatedPosts: 'Related Posts',
          readMore: 'Read more',
        };

  const processIcons = [Layers, GitBranch, CheckCircle, Zap];
  const retroIcons = [Lightbulb, Target, Zap];

  return (
    <div className="min-h-screen">
      {/* Hero — deep navy gradient */}
      <section
        className="px-6 pb-20 pt-32 sm:pb-32 sm:pt-44"
        style={{ background: 'linear-gradient(180deg, #080D1A 0%, #0B1120 100%)' }}
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-8 text-xs uppercase tracking-[0.2em]"
            style={{ color: '#7C3AED', fontFamily: 'var(--font-mono)' }}
          >
            {project.label}
          </p>
          <h1
            className="mb-8 text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}
          >
            {project.title}
            {project.titleAccent && (
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
                {' '}{project.titleAccent}
              </span>
            )}
          </h1>
          <p
            className="mb-16 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: '#8B8FA3' }}
          >
            {project.subtitle}
          </p>

          {/* Meta row */}
          <div
            className="grid grid-cols-2 gap-8 border-t pt-8 sm:grid-cols-4"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {([
              { label: metaLabels.role, value: project.meta.role },
              { label: metaLabels.team, value: project.meta.team },
              { label: metaLabels.period, value: project.meta.period },
              { label: metaLabels.impact, value: project.meta.impact },
            ] as const).map((item) => (
              <div key={item.label}>
                <p
                  className="mb-2 text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: '#5B5F73', fontFamily: 'var(--font-mono)' }}
                >
                  {item.label}
                </p>
                <p className="text-sm font-medium" style={{ color: '#C8CBD9' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 Problem — asymmetric layout like Stitch */}
      <section
        className="px-6 py-20 sm:py-32"
        style={{ background: '#0A0E1A' }}
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-4 text-xs uppercase tracking-[0.2em]"
            style={{ color: '#7C3AED', fontFamily: 'var(--font-mono)' }}
          >
            01 — {sectionLabels.problems}
          </p>
          <h2
            className="mb-16 text-2xl font-bold sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}
          >
            {sectionLabels.problemsHeading}
          </h2>

          {/* Problem cards — Stitch-style with subtle backgrounds */}
          <div className="grid gap-4 sm:grid-cols-3">
            {project.problems.map((problem, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ background: '#111628', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: 'rgba(124,58,237,0.15)' }}
                >
                  <span className="text-xs font-bold" style={{ color: '#A78BFA' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3
                  className="mb-2 text-base font-bold"
                  style={{ color: '#FAFAFA', fontFamily: 'var(--font-display)' }}
                >
                  {problem.title}
                </h3>
                <p className="text-sm leading-[1.7]" style={{ color: '#7B7F93' }}>
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Key Decisions — Before/After with labels */}
      <section
        className="px-6 py-20 sm:py-32"
        style={{ background: '#080D1A' }}
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-4 text-xs uppercase tracking-[0.2em]"
            style={{ color: '#7C3AED', fontFamily: 'var(--font-mono)' }}
          >
            02 — {sectionLabels.decisions}
          </p>

          <div className="space-y-24">
            {project.decisions.map((decision, i) => (
              <div key={i}>
                <h3
                  className="mb-8 text-xl font-bold sm:text-3xl"
                  style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}
                >
                  {decision.title}
                </h3>

                <div className="mb-6 grid gap-6 sm:grid-cols-2">
                  {/* Before */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: '#EF4444' }}
                      />
                      <p
                        className="text-[11px] uppercase tracking-[0.15em]"
                        style={{ color: '#7B7F93', fontFamily: 'var(--font-mono)' }}
                      >
                        {sectionLabels.before}
                      </p>
                    </div>
                    <div
                      className="overflow-hidden rounded-xl"
                      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <img
                        src={`${BASE}${decision.beforeImg}`}
                        alt={`${decision.title} — before`}
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: '#7C3AED' }}
                      />
                      <p
                        className="text-[11px] uppercase tracking-[0.15em]"
                        style={{ color: '#A78BFA', fontFamily: 'var(--font-mono)' }}
                      >
                        {sectionLabels.after}
                      </p>
                    </div>
                    <div
                      className="overflow-hidden rounded-xl"
                      style={{ border: '1px solid rgba(124,58,237,0.2)' }}
                    >
                      <img
                        src={`${BASE}${decision.afterImg}`}
                        alt={`${decision.title} — after`}
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <p
                  className="max-w-3xl text-sm leading-[1.8]"
                  style={{ color: '#8B8FA3' }}
                >
                  {decision.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Process — flow diagram style */}
      <section
        className="px-6 py-20 sm:py-32"
        style={{ background: '#0A0E1A' }}
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-4 text-xs uppercase tracking-[0.2em]"
            style={{ color: '#7C3AED', fontFamily: 'var(--font-mono)' }}
          >
            03 — {sectionLabels.process}
          </p>
          <h3
            className="mb-4 text-xl font-bold sm:text-3xl"
            style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}
          >
            {project.process.heading}
          </h3>
          <p
            className="mb-12 max-w-3xl text-sm leading-[1.8]"
            style={{ color: '#8B8FA3' }}
          >
            {project.process.description}
          </p>

          {/* Flow steps */}
          {project.process.steps && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              {project.process.steps.map((step, i) => {
                const Icon = processIcons[i % processIcons.length];
                return (
                  <div key={i} className="flex flex-1 items-start gap-4 sm:flex-col sm:items-center sm:text-center">
                    {i > 0 && (
                      <div className="hidden text-[#3B3F54] sm:block sm:absolute sm:left-[-20px]">→</div>
                    )}
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ background: i === project.process.steps!.length - 1 ? '#7C3AED' : '#111628', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <Icon size={20} color={i === project.process.steps!.length - 1 ? '#FFFFFF' : '#A78BFA'} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#FAFAFA' }}>{step.title}</p>
                      <p className="mt-1 text-xs" style={{ color: '#5B5F73' }}>{step.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 04 Results — Impact cards like Stitch */}
      <section
        className="px-6 py-20 sm:py-32"
        style={{ background: '#080D1A' }}
      >
        <div className="mx-auto max-w-5xl">
          <h2
            className="mb-12 text-2xl font-black italic sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}
          >
            {sectionLabels.results}
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ background: '#111628', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p
                  className="mb-1 text-[10px] uppercase tracking-[0.15em]"
                  style={{ color: '#5B5F73', fontFamily: 'var(--font-mono)' }}
                >
                  {metric.label}
                </p>
                <p
                  className="text-3xl font-black sm:text-4xl"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {metric.value}
                </p>
                {metric.detail && (
                  <p className="mt-2 text-xs" style={{ color: '#5B5F73' }}>{metric.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Retrospective — two-column like Stitch */}
      <section
        className="px-6 py-20 sm:py-32"
        style={{ background: '#0A0E1A' }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 sm:grid-cols-[280px_1fr]">
            {/* Left: heading */}
            <div>
              <h2
                className="text-2xl font-black sm:text-3xl"
                style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}
              >
                {project.retrospective.heading}
              </h2>
            </div>

            {/* Right: items with icons */}
            <div className="space-y-0">
              {project.retrospective.items.map((item, i) => {
                const Icon = retroIcons[i % retroIcons.length];
                return (
                  <div
                    key={i}
                    className="flex gap-4 border-t py-6"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: 'rgba(124,58,237,0.12)' }}
                    >
                      <Icon size={14} color="#A78BFA" />
                    </div>
                    <p className="text-sm leading-[1.8]" style={{ color: '#8B8FA3' }}>
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related blog posts */}
          <div className="mt-20 border-t pt-12" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p
              className="mb-6 text-xs uppercase tracking-[0.2em]"
              style={{ color: '#5B5F73', fontFamily: 'var(--font-mono)' }}
            >
              {sectionLabels.relatedPosts}
            </p>

            <div className="space-y-0">
              {project.blogLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="group flex items-center justify-between border-t py-4 transition-colors"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span className="text-sm transition-colors" style={{ color: '#8B8FA3' }}>
                    <span className="transition-colors group-hover:text-[#A78BFA]">{link.title}</span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    style={{ color: '#A78BFA' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
