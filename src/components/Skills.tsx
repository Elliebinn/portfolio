import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

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
    <section id="stack" className="border-t border-[var(--color-border)] px-6 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 sm:mb-8 text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
          {tr.section}
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-12 sm:gap-y-8">
          {stack.map((s) => (
            <div
              key={s.name}
              className="group border-t border-[var(--color-border)] pt-4 transition-colors hover:border-[var(--color-accent)]"
            >
              <p className="text-sm font-semibold text-[var(--color-text)]">{s.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
