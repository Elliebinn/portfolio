import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

const stack = [
  { icon: '🧠', name: 'Service Planning', sub: 'UX, Prototyping' },
  { icon: '🤖', name: 'AI / LLM', sub: 'Claude API, Prompt Eng.' },
  { icon: '🐍', name: 'Python', sub: 'FastAPI, SQLAlchemy' },
  { icon: '⚛️', name: 'React / TS', sub: 'Vite, shadcn/ui' },
  { icon: '🗄️', name: 'ClickHouse', sub: 'MySQL, Pandas' },
  { icon: '📊', name: 'Visualization', sub: 'Plotly, ECharts, recharts' },
  { icon: '⚙️', name: 'n8n / Automation', sub: 'Slack, News Pipeline' },
  { icon: '🐳', name: 'Docker', sub: 'Compose, Deploy' },
];

export default function Skills({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).stack;

  return (
    <section id="stack" className="border-t border-[var(--color-border)] px-6 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 sm:mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          {tr.section}
        </p>

        {/* Desktop: 2x4 grid */}
        <div className="hidden sm:grid grid-cols-2 gap-[1px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4">
          {stack.map((s) => (
            <div key={s.name}
              className="flex flex-col items-center gap-3 bg-[var(--color-bg)] px-4 py-10 transition-colors hover:bg-[var(--color-bg-card)]">
              <span className="text-2xl">{s.icon}</span>
              <p className="text-sm font-semibold">{s.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Mobile: list with icons */}
        <div className="space-y-0 sm:hidden">
          {stack.map((s, i) => (
            <div key={s.name}
              className={`flex items-center justify-between py-4 ${
                i !== stack.length - 1 ? 'border-b border-[var(--color-border)]' : ''
              }`}>
              <div>
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="mt-0.5 font-mono text-[10px] text-[var(--color-text-muted)]">{s.sub}</p>
              </div>
              <span className="text-xl">{s.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
