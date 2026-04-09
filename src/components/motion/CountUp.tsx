/**
 * I2 CountUp — 뷰포트 진입 시 1회 카운트업 (requestAnimationFrame)
 * I2 CountUp — one-shot animated counter using requestAnimationFrame.
 * See PRD §7.1 / DESIGN.md §10.1.
 */
import { useEffect, useRef, useState } from 'react';
import useReducedMotion from './useReducedMotion';

export interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
  className?: string;
  duration?: number;
}

const DEFAULT_DURATION = 2800;

// easeOutExpo
const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function CountUp({
  value,
  prefix = '',
  suffix = '',
  format,
  className,
  duration = DEFAULT_DURATION,
}: CountUpProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<number>(reduced ? value : 0);
  const firedRef = useRef<boolean>(false);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const run = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        const eased = easeOutExpo(t);
        setDisplay(Math.round(value * eased));
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDisplay(value);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced, value, duration]);

  const shown = format ? format(display) : String(display);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

export default CountUp;
