/**
 * StickyTOC — PRD §6.4, P5.4
 * Client-side heading extraction from article DOM.
 * Desktop: sticky column. Mobile: hidden.
 * Auto-hides when fewer than 2 headings.
 * IntersectionObserver highlights the current section.
 * C3: Each TOC item has a thin 2px progress bar on the left
 *     that fills based on scroll progress through that section.
 */
import { useEffect, useState, useRef } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  articleSelector?: string;
  className?: string;
}

export default function StickyTOC({
  articleSelector = '.prose-custom',
  className,
}: Props) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});
  const reducedMotion = useRef(false);

  // Detect reduced motion preference
  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Extract headings from DOM
  useEffect(() => {
    const article = document.querySelector(articleSelector);
    if (!article) return;

    const els = article.querySelectorAll('h2, h3');
    const items: Heading[] = [];

    els.forEach((el, i) => {
      // Ensure each heading has an id
      if (!el.id) {
        el.id = `heading-${i}`;
      }
      items.push({
        id: el.id,
        text: el.textContent?.trim() ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      });
    });

    setHeadings(items);
  }, [articleSelector]);

  // IntersectionObserver for active section
  useEffect(() => {
    if (headings.length < 2) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // C3: Scroll progress per section
  useEffect(() => {
    if (headings.length < 2 || reducedMotion.current) {
      // If reduced motion, set all to 0 (no animation)
      return;
    }

    let rafId: number;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const progress: Record<string, number> = {};

      headings.forEach((h, i) => {
        const el = document.getElementById(h.id);
        if (!el) return;

        const sectionTop = el.getBoundingClientRect().top + scrollY;
        const nextHeading = headings[i + 1];
        const nextEl = nextHeading ? document.getElementById(nextHeading.id) : null;
        const sectionBottom = nextEl
          ? nextEl.getBoundingClientRect().top + scrollY
          : document.documentElement.scrollHeight;

        const sectionHeight = sectionBottom - sectionTop;
        const scrolled = scrollY + viewportH * 0.4 - sectionTop;
        const pct = Math.max(0, Math.min(1, scrolled / sectionHeight));
        progress[h.id] = pct;
      });

      setSectionProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [headings]);

  // Auto-hide when fewer than 2 headings
  if (headings.length < 2) return null;

  return (
    <nav className={className} aria-label="Table of contents">
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
        On this page
      </p>
      <ul className="space-y-1">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          const progress = sectionProgress[h.id] ?? 0;
          return (
            <li key={h.id} className="relative flex items-stretch gap-2">
              {/* C3: Section progress bar */}
              <div className="relative w-1 flex-shrink-0 overflow-hidden rounded-full bg-[var(--color-bg-emphasis)]">
                <div
                  className="absolute inset-x-0 top-0 rounded-full bg-[var(--color-accent)] transition-[height] duration-150"
                  style={{ height: `${progress * 100}%` }}
                  aria-hidden="true"
                />
              </div>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block flex-1 py-0.5 text-[11px] leading-snug transition-colors ${
                  h.level === 3 ? 'pl-2' : ''
                } ${
                  isActive
                    ? 'font-medium text-[var(--color-accent)]'
                    : 'text-[var(--color-text-faint)] hover:text-[var(--color-text)]'
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
