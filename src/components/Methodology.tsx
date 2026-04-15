import type { Lang } from '../i18n/translations';
import ScrollReveal from './motion/ScrollReveal';

const steps = {
  ko: [
    { num: '01', title: '문제 발견', desc: "사용자가 '검색 추가해주세요'라고 하면, 그 뒤에 있는 근본 원인(분류 체계 부재)을 찾습니다." },
    { num: '02', title: '구조 설계', desc: 'ETF 유니버스를 4그룹(성장/가치/배당/섹터+테마)으로 분류하고, 투자자 성향별 배분 로직을 설계합니다.' },
    { num: '03', title: '해상도 높이기', desc: "'비중 이탈 시 리밸런싱'이라는 한 줄을, 개발자가 질문 없이 구현할 수 있는 수준으로 구체화합니다." },
    { num: '04', title: '검증 후 확장', desc: '22→23→24차로 알고리즘을 2개→8개→28개로 검증하며 확장합니다. 22~24차 전원 통과.' },
  ],
  en: [
    { num: '01', title: 'Problem Discovery', desc: "When users ask 'add search,' I find the root cause behind it (missing taxonomy)." },
    { num: '02', title: 'Structure Design', desc: 'Classify ETF universe into 4 groups (Growth/Value/Dividend/Sector+Theme) and design allocation logic by investor profile.' },
    { num: '03', title: 'Raise Resolution', desc: "Turn a one-liner like 'rebalance on weight deviation' into specs developers can implement without questions." },
    { num: '04', title: 'Validate & Scale', desc: 'Scale algorithms from 2 to 8 to 28 across rounds 22-24. All passed regulatory review.' },
  ],
};

const sectionLabel = {
  ko: '02 / 기획 프로세스',
  en: '02 / Planning Process',
};

const sectionTitle = {
  ko: '문제 발견에서 검증까지',
  en: 'From Discovery to Validation',
};

const vizLabel = {
  ko: '기획 프로세스 v2',
  en: 'Planning Process v2',
};

const RING_RADIUS = 15;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS; // ~94.25

function ProgressRing({ num }: { num: string }) {
  return (
    <div className="relative flex-shrink-0 w-12 h-12 group-hover:[--ring-offset:0] [--ring-offset:94]">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="absolute inset-0"
        style={{ transform: 'rotate(-90deg)' }}
        aria-hidden="true"
      >
        {/* Background track */}
        <circle
          cx="24"
          cy="24"
          r={RING_RADIUS}
          fill="none"
          stroke="var(--color-bg-detail)"
          strokeWidth="2.5"
        />
        {/* Animated fill */}
        <circle
          cx="24"
          cy="24"
          r={RING_RADIUS}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          className="ring-fill"
          style={{
            strokeDashoffset: RING_CIRCUMFERENCE,
            transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-xs font-bold"
        style={{ color: 'var(--color-accent)' }}
      >
        {num}
      </span>
    </div>
  );
}

export default function Methodology({ lang = 'ko' as Lang }: { lang?: Lang }) {
  const items = steps[lang] ?? steps.ko;

  return (
    <section id="methodology" className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <style>{`
        .methodology-step:hover .ring-fill {
          stroke-dashoffset: 0 !important;
        }
      `}</style>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky title + process flow diagram */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal>
              <div className="flex flex-col gap-4 mb-8">
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
              <div className="bg-[var(--color-bg-card)] p-8 rounded-xl shadow-ambient">
                {/* Process flow diagram: P1 → P2 → P3 → P4 */}
                <div className="flex items-center justify-center gap-0 py-6">
                  {['P1', 'P2', 'P3', 'P4'].map((label, idx) => (
                    <div key={label} className="flex items-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{
                          backgroundColor: 'var(--color-accent)',
                          color: 'var(--color-on-accent)',
                        }}
                      >
                        {label}
                      </div>
                      {idx < 3 && (
                        <div
                          className="w-8 h-px flex-shrink-0"
                          style={{ backgroundColor: 'var(--color-bg-detail)' }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(159, 64, 61, 0.2)' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(69, 98, 114, 0.2)' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#d3e4ff' }} />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-text-faint)] uppercase tracking-wider">
                    {vizLabel[lang]}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: scrolling steps */}
          <div className="lg:col-span-7 flex flex-col gap-0">
            {items.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div
                  className={`methodology-step relative flex gap-6 items-start group py-12 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-2 ${
                    i < items.length - 1 ? 'border-b border-[var(--color-border)]' : ''
                  }`}
                >
                  {/* Accent indicator bar */}
                  <div
                    className="absolute left-0 top-0 w-[3px] h-full opacity-0 group-hover:opacity-100 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  <ProgressRing num={step.num} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
