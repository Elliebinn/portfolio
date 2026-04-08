import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';
import ColorPlaceholder from './placeholders/ColorPlaceholder';
import ScrollReveal from './motion/ScrollReveal';

const quote = {
  ko: '금융을 이해하는 기획자, 기술로 검증하는 실행자.',
  en: 'A planner who understands finance, an executor who proves with technology.',
};

const aboutText = {
  en: {
    heading: 'A planner who understands',
    accent1: 'finance,',
    mid: 'an executor who proves with',
    accent2: 'technology.',
    suffix: '',
    body: "Planned 38 AI investment algorithms and managed 200+ accounts simultaneously at AssetPlus Asset Management. I find problems users haven\u2019t articulated, redesign information architecture from scratch, and build when needed. Designed 20+ analysis pages without a designer, and solo\u2011built an AI multi\u2011agent stock analysis platform from planning to development.",
    location: 'Seoul, KR // Remote',
  },
  ko: {
    heading: '금융을 이해하는',
    accent1: '기획자,',
    mid: '기술로 검증하는',
    accent2: '실행자.',
    suffix: '',
    body: '에셋플러스자산운용에서 AI 투자 알고리즘 38개를 기획하고, 200개 이상의 운용 계좌를 동시에 관리했어요. 사용자가 말하지 않은 문제를 찾아 정보구조를 다시 설계하고, 필요하면 직접 만듭니다. 디자이너 없는 팀에서 20개 이상의 분석 페이지를 설계했고, AI 멀티에이전트 주식 분석 플랫폼을 혼자 기획부터 개발까지 해봤어요.',
    location: '서울 // 원격',
  },
};

const skills = {
  ko: ['서비스 기획', '정보구조 설계', 'AI 에이전트', '금융 도메인', 'UX 설계', '프로토타이핑'],
  en: ['Service Planning', 'Information Architecture', 'AI Agents', 'Finance Domain', 'UX Design', 'Prototyping'],
};

export default function About({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).about;
  const txt = aboutText[lang];

  return (
    <section id="about" className="px-6 py-16 sm:py-28" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[280px_1fr]">
          {/* Photo — 4-col equivalent */}
          <div className="hidden lg:block">
            <ScrollReveal>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[var(--color-bg-card)] shadow-ambient">
                <ColorPlaceholder
                  variant="gradient"
                  colors={["--color-accent", "--color-bg-secondary"]}
                  className="h-full w-full"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
                {txt.location}
              </p>
            </ScrollReveal>
          </div>

          {/* Text — 7-col equivalent */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <p className="mb-4 sm:mb-6 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
                {tr.section}
              </p>
            </ScrollReveal>

            {/* Blockquote */}
            <ScrollReveal delay={100}>
              <blockquote
                className="mb-8 sm:mb-10 border-l-[3px] pl-5 py-2 text-xl sm:text-2xl italic leading-relaxed text-[var(--color-text)]"
                style={{ borderColor: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
              >
                {quote[lang]}
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2
                className="mb-6 sm:mb-8 text-2xl font-bold leading-normal sm:text-3xl lg:text-4xl text-[var(--color-text)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {txt.heading}{txt.heading ? ' ' : ''}
                <span className="text-[var(--color-accent)]">
                  {txt.accent1}
                </span>{' '}
                {txt.mid}{' '}
                <span className="text-[var(--color-accent)]">
                  {txt.accent2}
                </span>
                {txt.suffix}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mb-8 sm:mb-10 text-sm leading-[1.9] text-[var(--color-text-muted)]">
                {txt.body}
              </p>
            </ScrollReveal>

            {/* Skill tags */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-3">
                {skills[lang].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[var(--color-secondary-container)] px-3 py-1.5 text-[11px] font-medium text-[var(--color-on-secondary-container)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
