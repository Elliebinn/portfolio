import type { Lang } from '../i18n/translations';
import ScrollReveal from './motion/ScrollReveal';

const sectionLabel = {
  ko: '03 / 역량',
  en: '03 / Capabilities',
};

const sectionTitle = {
  ko: '금융, 기획, 그리고 기술',
  en: 'Finance, Planning & Technology',
};

const introText = {
  ko: '금융을 이해하는 기획자는 단순한 화면 설계에 그치지 않습니다. 시장의 투자 구조, 사용자의 실제 워크플로우, 그리고 AI 모델의 가능성을 동시에 봅니다.',
  en: 'A planner who understands finance goes beyond screen design. They see market investment structures, real user workflows, and AI model possibilities simultaneously.',
};

const caseStudyLabel = {
  ko: '→ 케이스 스터디',
  en: '→ Case Study',
};

type CapabilityRow = {
  name: string;
  proof: string;
  metric: string;
  link: string | null;
  tags: string[];
};

const capabilityRows: Record<Lang, CapabilityRow[]> = {
  ko: [
    { name: '서비스 기획', proof: '200+ 전략의 정보구조를 재설계하고, 20개+ 페이지를 직접 설계', metric: '20+ 페이지', link: '/ko/projects/quant-platform/', tags: ['FinTech UX', 'System Architecture', 'Design System'] },
    { name: '금융 도메인', proof: '38개 AI 투자 알고리즘 기획, 22~24차 로보어드바이저 심사 전원 통과', metric: '38개 알고리즘', link: '/ko/blog/2024-01-15-ratb-ai-national-exam/', tags: ['Robo-Advisor', 'Algorithm Design', 'RATB'] },
    { name: 'UX 설계', proof: '디자이너 없는 팀에서 와이어프레임부터 디자인 시스템까지 직접 구축', metric: '25개 HTML 목업', link: '/ko/projects/quant-platform/', tags: ['Wireframe', 'Design System', 'HTML Mockup'] },
    { name: '사용자 리서치', proof: '현업 워크플로우를 직접 관찰해서 요청 뒤의 진짜 니즈를 발견', metric: '83% 단축', link: null, tags: ['Workflow Observation', 'Automation', 'Internal Tool'] },
    { name: 'AI 활용', proof: '6개 AI 에이전트 멀티에이전트 시스템 설계, 기획부터 개발까지 Solo build', metric: '6 에이전트', link: '/ko/projects/jujutok/', tags: ['Multi-Agent', 'Solo Build', 'LLM'] },
  ],
  en: [
    { name: 'Service Planning', proof: 'Redesigned IA for 200+ strategies, built 20+ analysis pages from scratch', metric: '20+ pages', link: '/en/projects/quant-platform/', tags: ['FinTech UX', 'System Architecture', 'Design System'] },
    { name: 'Finance Domain', proof: 'Planned 38 AI investment algorithms, passed all robo-advisor national reviews', metric: '38 algorithms', link: '/en/blog/2024-01-15-ratb-ai-national-exam/', tags: ['Robo-Advisor', 'Algorithm Design', 'RATB'] },
    { name: 'UX Design', proof: 'Built wireframes to design system in a team with zero designers', metric: '25 HTML mockups', link: '/en/projects/quant-platform/', tags: ['Wireframe', 'Design System', 'HTML Mockup'] },
    { name: 'User Research', proof: 'Observed real trader workflows to find hidden needs behind feature requests', metric: '−83% time', link: null, tags: ['Workflow Observation', 'Automation', 'Internal Tool'] },
    { name: 'AI Engineering', proof: 'Designed 6-agent multi-agent system, solo-built from planning to deployment', metric: '6 agents', link: '/en/projects/jujutok/', tags: ['Multi-Agent', 'Solo Build', 'LLM'] },
  ],
};

export default function Capabilities({ lang = 'ko' as Lang }: { lang?: Lang }) {
  const rows = capabilityRows[lang] ?? capabilityRows.ko;

  return (
    <section id="stack" className="py-24 max-w-[1440px] mx-auto px-6 md:px-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <ScrollReveal>
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
            {sectionLabel[lang]}
          </span>
          <h2
            className="text-[2.5rem] font-bold text-[var(--color-text)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {sectionTitle[lang]}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="text-lg text-[var(--color-text-muted)] mb-16 max-w-2xl leading-relaxed">
          {introText[lang]}
        </p>
      </ScrollReveal>

      <div className="flex flex-col">
        {rows.map((row, i) => (
          <ScrollReveal key={row.name} delay={i * 80}>
            <div
              className="group border-t border-[var(--color-border,rgba(69,98,114,0.15))] py-6 transition-all duration-500"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Main 3-column grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-[200px_1fr_120px] gap-3 md:gap-8 items-start transition-all duration-500"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  paddingLeft: undefined,
                }}
              >
                <div>
                  <span
                    className="text-lg font-bold text-[var(--color-text)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {row.name}
                  </span>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {row.proof}
                  </p>
                </div>
                <div className="md:text-right">
                  {row.link ? (
                    <a
                      href={row.link}
                      className="font-mono text-sm font-bold text-[var(--color-accent)] hover:underline inline-block transition-transform duration-500 group-hover:scale-[1.05]"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      {row.metric}
                    </a>
                  ) : (
                    <span
                      className="font-mono text-sm font-bold text-[var(--color-accent)] inline-block transition-transform duration-500 group-hover:scale-[1.05]"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      {row.metric}
                    </span>
                  )}
                </div>
              </div>

              {/* Expandable tags row */}
              <div
                className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-500"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="flex flex-wrap gap-2 pt-3 md:pl-[calc(200px+2rem)]">
                  {row.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[rgba(69,98,114,0.08)] text-[var(--color-accent)] text-[10px] font-semibold px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {row.link && (
                    <a
                      href={row.link}
                      className="rounded-full bg-[rgba(69,98,114,0.08)] text-[var(--color-accent)] text-[10px] font-semibold px-2.5 py-1 hover:bg-[rgba(69,98,114,0.15)] transition-colors duration-200"
                    >
                      {caseStudyLabel[lang]}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
        <div className="border-t border-[var(--color-border,rgba(69,98,114,0.15))]" />
      </div>

      <style>{`
        #stack .group:hover {
          background-color: rgba(69, 98, 114, 0.03);
          padding-left: 4px;
        }
      `}</style>
    </section>
  );
}
