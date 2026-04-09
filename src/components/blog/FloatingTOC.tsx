/**
 * FloatingTOC — Fixed left-margin TOC for blog detail pages.
 * Default: thin vertical line with dots per heading (h2/h3).
 * Hover: expands to show heading text.
 * Active section dot highlighted with --color-accent.
 * Only visible on xl+ screens (min-width: 1280px).
 * Uses IntersectionObserver + scroll progress from StickyTOC pattern.
 */
import { useEffect, useState, useRef } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  articleSelector?: string;
}

export default function FloatingTOC({ articleSelector = '.prose-custom' }: Props) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});
  const [hovered, setHovered] = useState(false);
  const [isXl, setIsXl] = useState(false);
  const reducedMotion = useRef(false);

  // Detect reduced motion and xl viewport
  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mq = window.matchMedia('(min-width: 1280px)');
    setIsXl(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsXl(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Extract headings from DOM
  useEffect(() => {
    const article = document.querySelector(articleSelector);
    if (!article) return;

    const els = article.querySelectorAll('h2, h3');
    const items: Heading[] = [];

    els.forEach((el, i) => {
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

  // Scroll progress per section
  useEffect(() => {
    if (headings.length < 2 || reducedMotion.current) return;

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

  // Hide when fewer than 2 headings or below xl
  if (headings.length < 2 || !isXl) return null;

  const useTransition = !reducedMotion.current;
  const itemHeight = 22;
  const totalHeight = headings.length * itemHeight;

  return (
    <nav
      aria-label="Table of contents"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {/* Vertical connecting line + dots */}
      <div
        style={{
          position: 'relative',
          width: '1px',
          height: `${totalHeight}px`,
          backgroundColor: 'var(--color-border)',
          flexShrink: 0,
        }}
      >
        {headings.map((h, i) => {
          const isActive = activeId === h.id;
          const dotSize = isActive ? 8 : 6;
          return (
            <button
              key={h.id}
              onClick={() => {
                document.getElementById(h.id)?.scrollIntoView({
                  behavior: reducedMotion.current ? 'auto' : 'smooth',
                });
              }}
              aria-label={h.text}
              style={{
                position: 'absolute',
                left: '50%',
                top: `${i * itemHeight + itemHeight / 2}px`,
                transform: 'translate(-50%, -50%)',
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                borderRadius: '50%',
                backgroundColor: isActive
                  ? 'var(--color-accent)'
                  : 'var(--color-border)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                outline: 'none',
                // Expand click target with pseudo-padding via box-shadow trick
                boxShadow: '0 0 0 6px transparent',
                transition: useTransition
                  ? 'width 150ms ease, height 150ms ease, background-color 150ms ease'
                  : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Text labels — visible on hover */}
      <div
        style={{
          overflow: 'hidden',
          width: hovered ? '180px' : '0px',
          transition: useTransition ? 'width 200ms ease' : 'none',
          display: 'flex',
          flexDirection: 'column',
          height: `${totalHeight}px`,
        }}
      >
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <button
              key={h.id}
              onClick={() => {
                document.getElementById(h.id)?.scrollIntoView({
                  behavior: reducedMotion.current ? 'auto' : 'smooth',
                });
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                paddingLeft: h.level === 3 ? '8px' : '0px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '11px',
                lineHeight: '1.3',
                whiteSpace: 'nowrap',
                color: isActive ? 'var(--color-accent)' : 'var(--color-text-faint)',
                fontWeight: isActive ? '500' : '400',
                transition: useTransition ? 'color 150ms ease' : 'none',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '180px',
                flexShrink: 0,
                height: `${itemHeight}px`,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {h.text}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
