/**
 * StickyTOC — PRD §6.4, P5.4
 * Client-side heading extraction from article DOM.
 * Desktop: sticky column. Mobile: hidden.
 * Auto-hides when fewer than 2 headings.
 * IntersectionObserver highlights the current section.
 */
import { useEffect, useState } from 'react';

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

  // Auto-hide when fewer than 2 headings
  if (headings.length < 2) return null;

  return (
    <nav className={className} aria-label="Table of contents">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
        On this page
      </p>
      <ul className="space-y-1.5">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block text-[13px] leading-snug transition-colors ${
                  h.level === 3 ? 'pl-3' : ''
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
