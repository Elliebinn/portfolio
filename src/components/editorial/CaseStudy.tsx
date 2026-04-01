import type { Lang } from '../../i18n/translations';
import type { CaseStudyData } from '../CaseStudy';
import { ArrowRight, ArrowLeft, Layers, GitBranch, CheckCircle, Zap, Lightbulb, Target } from 'lucide-react';

const BASE = '/portfolio';

export default function CaseStudy({ project, lang }: { project: CaseStudyData; lang: Lang }) {
  const metaLabels = lang === 'ko'
    ? { role: '역할', team: '팀 구성', period: '기간', impact: '임팩트' }
    : { role: 'Role', team: 'Team', period: 'Period', impact: 'Impact' };

  const sectionLabels = lang === 'ko'
    ? {
        problems: '문제 발견', problemsHeading: '왜 리디자인이 필요했는가',
        decisions: '핵심 의사결정', process: '실행 프로세스',
        results: '임팩트', retrospective: '회고',
        before: 'Before', after: 'After',
        relatedPosts: '관련 블로그', readMore: '자세히 읽기',
      }
    : {
        problems: 'Problem Discovery', problemsHeading: 'Why Redesign Was Necessary',
        decisions: 'Key Decisions', process: 'Process',
        results: 'Impact Measured', retrospective: 'Lessons Learned',
        before: 'Before', after: 'After',
        relatedPosts: 'Related Posts', readMore: 'Read more',
      };

  const processIcons = [Layers, GitBranch, CheckCircle, Zap];
  const retroIcons = [Lightbulb, Target, Zap];

  return (
    <div style={{ backgroundColor: 'var(--ed-surface)', color: 'var(--ed-on-surface)' }}>

      {/* ═══ Hero ═══ */}
      <section className="px-6 pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-6 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
          >
            {project.label}
          </p>
          <h1
            className="mb-8 text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            {project.title}
            {project.titleAccent && (
              <span style={{ color: 'var(--ed-primary)' }}> {project.titleAccent}</span>
            )}
          </h1>
          <p
            className="mb-16 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
          >
            {project.subtitle}
          </p>

          {/* Meta */}
          <div
            className="grid grid-cols-2 gap-8 pt-8 sm:grid-cols-4"
            style={{ borderTop: '2px solid var(--ed-primary)' }}
          >
            {([
              { label: metaLabels.role, value: project.meta.role },
              { label: metaLabels.team, value: project.meta.team },
              { label: metaLabels.period, value: project.meta.period },
              { label: metaLabels.impact, value: project.meta.impact },
            ] as const).map((item) => (
              <div key={item.label}>
                <p
                  className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm font-bold"
                  style={{ fontFamily: 'var(--ed-font-display)' }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 01 Problems ═══ */}
      <section
        className="px-6 py-16 sm:py-24"
        style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
          >
            01 — {sectionLabels.problems}
          </p>
          <h2
            className="mb-16 text-2xl font-bold sm:text-4xl ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            {sectionLabels.problemsHeading}
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {project.problems.map((problem, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: 'var(--ed-surface-white)' }}
              >
                <div
                  className="mb-4 flex h-8 w-8 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'var(--ed-primary-container)' }}
                >
                  <span className="text-xs font-bold" style={{ color: 'var(--ed-primary)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3
                  className="mb-2 text-base font-bold"
                  style={{ fontFamily: 'var(--ed-font-display)' }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-sm leading-[1.7]"
                  style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 02 Key Decisions — Before/After ═══ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
          >
            02 — {sectionLabels.decisions}
          </p>

          <div className="space-y-24">
            {project.decisions.map((decision, i) => (
              <div key={i}>
                <h3
                  className="mb-8 text-xl font-bold sm:text-3xl ed-tracking"
                  style={{ fontFamily: 'var(--ed-font-display)' }}
                >
                  {decision.title}
                </h3>

                <div className="mb-6 grid gap-6 sm:grid-cols-2">
                  {/* Before */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--ed-error)' }} />
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.15em]"
                        style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                      >
                        {sectionLabels.before}
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-2xl ed-ghost-border">
                      <img src={`${BASE}${decision.beforeImg}`} alt={`${decision.title} — before`} className="w-full" loading="lazy" />
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--ed-primary)' }} />
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.15em]"
                        style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
                      >
                        {sectionLabels.after}
                      </p>
                    </div>
                    <div
                      className="overflow-hidden rounded-2xl"
                      style={{ border: '1px solid rgba(65, 98, 128, 0.2)' }}
                    >
                      <img src={`${BASE}${decision.afterImg}`} alt={`${decision.title} — after`} className="w-full" loading="lazy" />
                    </div>
                  </div>
                </div>

                <p
                  className="max-w-3xl text-sm leading-[1.8]"
                  style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {decision.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 03 Process ═══ */}
      <section
        className="px-6 py-16 sm:py-24"
        style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--ed-primary)', fontFamily: 'var(--ed-font-body)' }}
          >
            03 — {sectionLabels.process}
          </p>
          <h3
            className="mb-4 text-xl font-bold sm:text-3xl ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            {project.process.heading}
          </h3>
          <p
            className="mb-12 max-w-3xl text-sm leading-[1.8]"
            style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
          >
            {project.process.description}
          </p>

          {project.process.steps && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              {project.process.steps.map((step, i) => {
                const Icon = processIcons[i % processIcons.length];
                const isLast = i === project.process.steps!.length - 1;
                return (
                  <div key={i} className="flex flex-1 items-start gap-4 sm:flex-col sm:items-center sm:text-center">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: isLast ? 'var(--ed-primary)' : 'var(--ed-surface-white)',
                      }}
                    >
                      <Icon size={20} style={{ color: isLast ? 'var(--ed-on-primary)' : 'var(--ed-primary)' }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ fontFamily: 'var(--ed-font-display)' }}>{step.title}</p>
                      <p className="mt-1 text-xs" style={{ color: 'var(--ed-on-surface-variant)' }}>{step.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══ 04 Results ═══ */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2
            className="mb-12 text-2xl font-extrabold italic sm:text-4xl ed-tracking"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            {sectionLabels.results}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
              >
                <p
                  className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                >
                  {m.label}
                </p>
                <p
                  className="text-3xl font-extrabold sm:text-4xl"
                  style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-primary)' }}
                >
                  {m.value}
                </p>
                {m.detail && (
                  <p className="mt-2 text-xs" style={{ color: 'var(--ed-on-surface-variant)' }}>{m.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 05 Retrospective ═══ */}
      <section
        className="px-6 py-16 sm:py-24"
        style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 sm:grid-cols-[280px_1fr]">
            <h2
              className="text-2xl font-extrabold sm:text-3xl ed-tracking"
              style={{ fontFamily: 'var(--ed-font-display)' }}
            >
              {project.retrospective.heading}
            </h2>

            <div>
              {project.retrospective.items.map((item, i) => {
                const Icon = retroIcons[i % retroIcons.length];
                return (
                  <div
                    key={i}
                    className="flex gap-4 py-6"
                    style={{ borderTop: '1px solid var(--ed-outline-variant)' }}
                  >
                    <div
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: 'var(--ed-primary-container)' }}
                    >
                      <Icon size={14} style={{ color: 'var(--ed-primary)' }} />
                    </div>
                    <p
                      className="text-sm leading-[1.8]"
                      style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
                    >
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related blog */}
          <div className="mt-20 pt-12" style={{ borderTop: '1px solid var(--ed-outline-variant)' }}>
            <p
              className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
            >
              {sectionLabels.relatedPosts}
            </p>
            <div>
              {project.blogLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="group flex items-center justify-between py-4 transition-colors"
                  style={{ borderTop: '1px solid var(--ed-outline-variant)' }}
                >
                  <span
                    className="text-sm transition-opacity group-hover:opacity-70"
                    style={{ color: 'var(--ed-on-surface-variant)' }}
                  >
                    {link.title}
                  </span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    style={{ color: 'var(--ed-primary)' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Nav ═══ */}
      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <a
            href={`${BASE}/${lang}/v2/`}
            className="inline-flex items-center gap-2 text-sm font-bold"
            style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-primary)' }}
          >
            <ArrowLeft size={16} />
            {lang === 'ko' ? '홈으로' : 'Back Home'}
          </a>
        </div>
      </section>
    </div>
  );
}
