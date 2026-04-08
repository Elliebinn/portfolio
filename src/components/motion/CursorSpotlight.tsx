/**
 * I4 CursorSpotlight — 커서를 따라오는 Hero 배경 라이트 스팟 (데스크톱 전용)
 * I4 CursorSpotlight — Hero background radial spotlight that tracks the cursor (desktop only).
 * See PRD §7.1 / DESIGN.md §10.1.
 */
import { useEffect, useRef, useState } from 'react';
import useReducedMotion from './useReducedMotion';

export interface CursorSpotlightProps {
  color?: string;
  size?: number;
  className?: string;
}

const DESKTOP_QUERY = '(min-width: 768px) and (pointer: fine)';

export function CursorSpotlight({
  color = 'rgba(255, 255, 255, 0.12)',
  size = 400,
  className,
}: CursorSpotlightProps) {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mql = window.matchMedia(DESKTOP_QUERY);
    setEnabled(mql.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mql.addEventListener?.('change', handler);
    return () => mql.removeEventListener?.('change', handler);
  }, []);

  useEffect(() => {
    if (reduced || !enabled) return;
    const node = ref.current;
    if (!node) return;
    const parent = node.parentElement;
    if (!parent) return;

    const handler = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      node.style.setProperty('--spot-x', `${px}px`);
      node.style.setProperty('--spot-y', `${py}px`);
    };

    parent.addEventListener('mousemove', handler);
    return () => parent.removeEventListener('mousemove', handler);
  }, [reduced, enabled]);

  if (reduced || !enabled) return null;

  const style: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${color}, transparent 70%)`,
  };

  return <div ref={ref} aria-hidden="true" className={className} style={style} />;
}

export default CursorSpotlight;
