import { useEffect, useRef } from 'react';
import type { Lang } from '../i18n/translations';
import ScrollReveal from './motion/ScrollReveal';
import useReducedMotion from './motion/useReducedMotion';

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

const radarLabels = {
  ko: ['AI 활용', '서비스 기획', 'UX 설계', '리서치', '금융 도메인'],
  en: ['AI Utilization', 'Service Planning', 'UX Design', 'Research', 'Finance Domain'],
};

const capabilities = {
  ko: [
    { title: '서비스 기획', desc: '문제 정의, 정보구조 설계, 요건정의서 작성까지 기획 전 과정을 수행합니다.', icon: 'M3 7h18M3 12h18M3 17h18' },
    { title: '사용자 리서치', desc: '현업 워크플로우를 직접 관찰해서 요청 뒤의 진짜 니즈를 발견합니다.', icon: 'M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z' },
    { title: 'UX 설계', desc: '와이어프레임부터 디자인 시스템 구축, 20개+ 페이지를 직접 설계합니다.', icon: 'M4 6h16M4 12h16M4 18h16' },
    { title: 'AI 활용', desc: 'Claude Code, 멀티에이전트 설계, 프롬프트 엔지니어링으로 기획을 검증합니다.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  ],
  en: [
    { title: 'Service Planning', desc: 'From problem definition to information architecture to requirements specification.', icon: 'M3 7h18M3 12h18M3 17h18' },
    { title: 'User Research', desc: 'Observing real workflows to discover the true needs behind requests.', icon: 'M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z' },
    { title: 'UX Design', desc: 'From wireframes to design systems, designing 20+ pages hands-on.', icon: 'M4 6h16M4 12h16M4 18h16' },
    { title: 'AI Utilization', desc: 'Validating plans with Claude Code, multi-agent design, and prompt engineering.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  ],
};

export default function Capabilities({ lang = 'ko' as Lang }: { lang?: Lang }) {
  const reduced = useReducedMotion();
  const radarRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = radarRef.current;
    if (!svg) return;

    if (reduced) {
      svg.classList.add('is-visible');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      svg.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, [reduced]);

  const items = capabilities[lang] ?? capabilities.ko;
  const labels = radarLabels[lang] ?? radarLabels.ko;

  return (
    <section id="stack" className="py-24 max-w-[1440px] mx-auto px-6 md:px-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: radar chart */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <ScrollReveal>
            <p className="text-lg text-[var(--color-text-muted)] mb-12 max-w-md leading-relaxed">
              {introText[lang]}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div
              className="p-12 rounded-full aspect-square flex items-center justify-center relative"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100" ref={radarRef} data-radar="">
                <polygon
                  className="radar-grid"
                  fill="rgba(69, 98, 114, 0.1)"
                  points="50,10 90,40 75,90 25,90 10,40"
                  stroke="rgba(69, 98, 114, 0.3)"
                  strokeWidth="0.5"
                />
                <polygon
                  className="radar-grid"
                  fill="none"
                  points="50,20 80,45 68,80 32,80 20,45"
                  stroke="rgba(69, 98, 114, 0.3)"
                  strokeWidth="0.5"
                />
                <polygon
                  className="radar-grid"
                  fill="none"
                  points="50,30 70,50 61,70 39,70 30,50"
                  stroke="rgba(69, 98, 114, 0.3)"
                  strokeWidth="0.5"
                />
                <polygon
                  className="radar-value"
                  fill="rgba(69, 98, 114, 0.4)"
                  points="50,15 85,35 70,85 30,75 15,45"
                  stroke="#456272"
                  strokeWidth="1"
                />
              </svg>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase text-[var(--color-text)]">
                {labels[0]}
              </div>
              <div className="absolute top-1/3 right-0 text-xs font-bold uppercase translate-x-4 text-[var(--color-text)]">
                {labels[1]}
              </div>
              <div className="absolute bottom-4 right-1/4 text-xs font-bold uppercase text-[var(--color-text)]">
                {labels[2]}
              </div>
              <div className="absolute bottom-4 left-1/4 text-xs font-bold uppercase text-[var(--color-text)]">
                {labels[3]}
              </div>
              <div className="absolute top-1/3 left-0 text-xs font-bold uppercase -translate-x-4 text-[var(--color-text)]">
                {labels[4]}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: capability cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 80}>
              <div
                className="p-8 rounded-xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-ambient cursor-pointer group h-full"
                style={{ backgroundColor: 'var(--color-bg-secondary)' }}
              >
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="text-[var(--color-accent)] group-hover:scale-110 transition-transform"
                >
                  <path d={cap.icon} />
                </svg>
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">{cap.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
