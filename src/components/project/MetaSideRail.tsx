/**
 * MetaSideRail — PRD §6.2 P4.3
 * Desktop (≥lg): sticky left column alongside project body
 * Mobile: inline block below hero
 */

export interface ProjectMeta {
  period: string;
  role: string;
  impact: string[];
  stack: string[];
}

interface Props {
  meta: ProjectMeta;
}

export default function MetaSideRail({ meta }: Props) {
  const entries: { label: string; content: React.ReactNode }[] = [
    { label: 'Period', content: <span>{meta.period}</span> },
    { label: 'Role', content: <span>{meta.role}</span> },
    {
      label: 'Impact',
      content: (
        <ul className="space-y-1">
          {meta.impact.map((item) => (
            <li key={item} className="text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Stack',
      content: (
        <div className="flex flex-wrap gap-1.5">
          {meta.stack.map((s) => (
            <span
              key={s}
              className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
              style={{
                backgroundColor: 'var(--color-bg-detail)',
                color: 'var(--color-text)',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <aside className="space-y-6">
      {entries.map((e) => (
        <div key={e.label}>
          <p
            className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]"
          >
            {e.label}
          </p>
          <div className="text-sm text-[var(--color-text)]">{e.content}</div>
        </div>
      ))}
    </aside>
  );
}
