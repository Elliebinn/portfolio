import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  ColorPlaceholder — PRD §8.1                                        */
/*  Fills image slots with design-token-based visuals until real       */
/*  images are supplied. Swap by replacing with <img> later.           */
/* ------------------------------------------------------------------ */

export type PlaceholderVariant = "gradient" | "geometric" | "label" | "minimal";
export type AspectRatio = "video" | "square" | "4/5" | "16/9";

interface Props {
  variant: PlaceholderVariant;
  /** CSS custom-property names, e.g. ['--color-accent','--color-bg-secondary'] */
  colors?: string[];
  /** Overlay text (project name, keyword, etc.) */
  label?: string;
  aspectRatio?: AspectRatio;
  className?: string;
  children?: ReactNode;
}

const ASPECT: Record<AspectRatio, string> = {
  video: "16 / 9",
  square: "1 / 1",
  "4/5": "4 / 5",
  "16/9": "16 / 9",
};

/* Defaults pulled from the design-token palette */
const DEFAULT_COLORS = ["--color-accent", "--color-bg-secondary"];

function css(token: string) {
  return `var(${token})`;
}

/* ---- Variant renderers ---- */

function GradientFill({ colors }: { colors: string[] }) {
  const [a, b, c] = colors;
  const bg = c
    ? `linear-gradient(135deg, ${css(a)}, ${css(b)}, ${css(c)})`
    : `linear-gradient(135deg, ${css(a)}, ${css(b)})`;

  return (
    <div
      className="absolute inset-0"
      style={{ background: bg }}
      aria-hidden="true"
    />
  );
}

function GeometricFill({ colors }: { colors: string[] }) {
  const [a, b] = colors;
  return (
    <div className="absolute inset-0" aria-hidden="true" style={{ backgroundColor: css(a) }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid lines */}
        {[80, 160, 240, 320].map((x) => (
          <line
            key={`v${x}`}
            x1={x} y1={0} x2={x} y2={300}
            stroke={css(b || "--color-outline-variant")}
            strokeWidth={0.5}
            opacity={0.25}
          />
        ))}
        {[75, 150, 225].map((y) => (
          <line
            key={`h${y}`}
            x1={0} y1={y} x2={400} y2={y}
            stroke={css(b || "--color-outline-variant")}
            strokeWidth={0.5}
            opacity={0.25}
          />
        ))}
        {/* Accent circle */}
        <circle
          cx={280}
          cy={100}
          r={60}
          fill="none"
          stroke={css(b || "--color-accent-light")}
          strokeWidth={1}
          opacity={0.35}
        />
        {/* Diagonal */}
        <line
          x1={0} y1={300} x2={200} y2={0}
          stroke={css(b || "--color-outline-variant")}
          strokeWidth={0.5}
          opacity={0.2}
        />
      </svg>
    </div>
  );
}

function LabelFill({ colors, label }: { colors: string[]; label?: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ backgroundColor: css(colors[0]) }}
      aria-hidden="true"
    >
      {label && (
        <span
          className="font-display text-3xl md:text-5xl font-bold tracking-tight opacity-20 select-none"
          style={{ color: css(colors[1] || "--color-on-accent") }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

function MinimalFill({ colors }: { colors: string[] }) {
  return (
    <div
      className="absolute inset-0"
      style={{ backgroundColor: css(colors[0]) }}
      aria-hidden="true"
    >
      {/* Subtle noise via CSS */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

/* ---- Main component ---- */

export default function ColorPlaceholder({
  variant,
  colors = DEFAULT_COLORS,
  label,
  aspectRatio = "video",
  className = "",
  children,
}: Props) {
  const wrapStyle: CSSProperties = {
    aspectRatio: ASPECT[aspectRatio],
  };

  const Fill = {
    gradient: GradientFill,
    geometric: GeometricFill,
    label: LabelFill,
    minimal: MinimalFill,
  }[variant];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={wrapStyle}
      role="img"
      aria-label={label || "Placeholder image"}
    >
      <Fill colors={colors} label={label} />
      {children}
    </div>
  );
}
