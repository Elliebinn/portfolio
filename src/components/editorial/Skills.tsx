import type { Lang } from '../../i18n/translations';
import { t } from '../../i18n/translations';

const stack = [
  { name: 'Service Planning', sub: 'UX, Prototyping' },
  { name: 'AI / LLM', sub: 'Claude API, Prompt Eng.' },
  { name: 'Python', sub: 'FastAPI, SQLAlchemy' },
  { name: 'React / TS', sub: 'Vite, shadcn/ui' },
  { name: 'ClickHouse', sub: 'MySQL, Pandas' },
  { name: 'Visualization', sub: 'Plotly, ECharts, recharts' },
  { name: 'n8n / Automation', sub: 'Slack, News Pipeline' },
  { name: 'Docker', sub: 'Compose, Deploy' },
];

export default function Skills({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).stack;

  return (
    <section
      id="stack"
      className="px-6 py-20 sm:py-28"
      style={{ backgroundColor: 'var(--ed-surface-container-low)' }}
    >
      <div className="mx-auto max-w-7xl">
        <p
          className="mb-10 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
        >
          {tr.section}
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-x-12">
          {stack.map((s) => (
            <div
              key={s.name}
              className="group pt-5 transition-colors"
              style={{ borderTop: '1px solid var(--ed-outline-variant)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = 'var(--ed-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = 'var(--ed-outline-variant)';
              }}
            >
              <p
                className="text-sm font-bold sm:text-base"
                style={{ color: 'var(--ed-on-surface)', fontFamily: 'var(--ed-font-display)' }}
              >
                {s.name}
              </p>
              <p
                className="mt-1.5 text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
