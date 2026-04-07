import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

const stackByLang = {
  en: [
    { name: 'Service Planning', sub: 'IA Design, Requirements Spec' },
    { name: 'UX Design', sub: 'Wireframe, Design System' },
    { name: 'AI Agent Design', sub: 'Multi-Agent, Prompt Eng.' },
    { name: 'AI Tools', sub: 'Claude Code, Claude API, n8n' },
    { name: 'Prototyping', sub: 'Python, React, FastAPI' },
    { name: 'Data', sub: 'SQL, ClickHouse, Pandas' },
    { name: 'Visualization', sub: 'Plotly, ECharts, recharts' },
    { name: 'Finance Domain', sub: '7 Certifications, RATB' },
  ],
  ko: [
    { name: '서비스 기획', sub: '정보구조 설계, 요건정의서' },
    { name: 'UX 설계', sub: '와이어프레임, 디자인 시스템' },
    { name: 'AI 에이전트 설계', sub: '멀티에이전트, 프롬프트 엔지니어링' },
    { name: 'AI 도구 활용', sub: 'Claude Code, Claude API, n8n' },
    { name: '프로토타이핑', sub: 'Python, React, FastAPI' },
    { name: '데이터', sub: 'SQL, ClickHouse, Pandas' },
    { name: '시각화', sub: 'Plotly, ECharts, recharts' },
    { name: '금융 도메인', sub: '자격증 7개, RATB' },
  ],
};

export default function Skills({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).stack;
  const items = stackByLang[lang];

  return (
    <section id="stack" className="px-6 py-16 sm:py-28" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 sm:mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
          {tr.section}
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {items.map((s) => (
            <div
              key={s.name}
              className="group rounded-xl bg-[var(--color-bg-card)] p-4 shadow-ambient-sm transition-all hover:shadow-ambient"
            >
              <p className="text-sm font-semibold text-[var(--color-text)]">{s.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)]">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
