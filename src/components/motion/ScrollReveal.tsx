/**
 * I1 ScrollReveal — IntersectionObserver 기반 fade-up 리빌
 * I1 ScrollReveal — fade + translateY reveal driven by IntersectionObserver.
 * See PRD §7.1 / DESIGN.md §10.1.
 */
import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import useReducedMotion from './useReducedMotion';

export interface ScrollRevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

const DURATION_MS = 600;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const TRANSLATE_Y = 16;

export function ScrollReveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [reduced]);

  const style = reduced
    ? { opacity: 1 }
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${TRANSLATE_Y}px)`,
        transition: `opacity ${DURATION_MS}ms ${EASING} ${delay}ms, transform ${DURATION_MS}ms ${EASING} ${delay}ms`,
        willChange: 'opacity, transform' as const,
      };

  const Component = Tag as ElementType;
  return (
    <Component ref={ref as never} className={className} style={style}>
      {children}
    </Component>
  );
}

export default ScrollReveal;
