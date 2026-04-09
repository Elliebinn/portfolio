/**
 * A6 Section Progress Dots — fixed right-side dot navigation for project detail (desktop only).
 * Uses IntersectionObserver to track active section. Click to smooth-scroll.
 * Respects prefers-reduced-motion.
 */
import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../motion/useReducedMotion';

interface DotSection {
  id: string;
  label: string;
}

interface SectionDotsProps {
  sections: DotSection[];
}

export default function SectionDots({ sections }: SectionDotsProps) {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry with greatest intersection ratio
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        }
        if (best) {
          setActiveId(best.target.id);
        }
      },
      { threshold: [0, 0.25, 0.5], rootMargin: '-20% 0px -40% 0px' },
    );

    for (const el of elements) {
      observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <nav
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex"
      aria-label="Section navigation"
    >
      {sections.map((s) => {
        const isActive = s.id === activeId;
        return (
          <button
            key={s.id}
            onClick={() => handleClick(s.id)}
            className="group relative flex items-center"
            aria-label={s.label}
            aria-current={isActive ? 'true' : undefined}
          >
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-[var(--color-bg-card)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] opacity-0 shadow-ambient-sm transition-opacity duration-200 group-hover:opacity-100">
              {s.label}
            </span>
            {/* Dot */}
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-outline-variant)',
                boxShadow: isActive ? '0 0 8px var(--color-accent)' : 'none',
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
