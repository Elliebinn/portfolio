/**
 * I5 SplitText — Hero 헤드라인을 글자 단위로 stagger reveal
 * I5 SplitText — Hero headline revealed per-character with stagger.
 * See PRD §7.1 / DESIGN.md §10.1.
 */
import { useEffect, useState, type ElementType } from 'react';
import useReducedMotion from './useReducedMotion';

export interface SplitTextProps {
  text: string;
  as?: ElementType;
  delay?: number;
  className?: string;
}

const DURATION_MS = 900;
const STAGGER_MS = 30;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

export function SplitText({
  text,
  as: Tag = 'h1',
  delay = 400,
  className,
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    if (reduced) {
      setStarted(true);
      return;
    }
    const t = window.setTimeout(() => setStarted(true), delay);
    return () => window.clearTimeout(t);
  }, [reduced, delay]);

  const Component = Tag as ElementType;

  if (reduced) {
    return <Component className={className}>{text}</Component>;
  }

  // Array.from handles surrogate pairs / combining marks safely
  const chars = Array.from(text);

  return (
    <Component className={className} aria-label={text}>
      {chars.map((ch, i) => {
        const isSpace = ch === ' ' || ch === '\u00A0';
        const style: React.CSSProperties = {
          display: 'inline-block',
          whiteSpace: 'pre',
          opacity: started ? 1 : 0,
          transform: started ? 'translateY(0)' : 'translateY(0.4em)',
          transition: `opacity ${DURATION_MS}ms ${EASING} ${i * STAGGER_MS}ms, transform ${DURATION_MS}ms ${EASING} ${i * STAGGER_MS}ms`,
          willChange: 'opacity, transform',
        };
        return (
          <span key={i} aria-hidden="true" style={style}>
            {isSpace ? '\u00A0' : ch}
          </span>
        );
      })}
    </Component>
  );
}

export default SplitText;
