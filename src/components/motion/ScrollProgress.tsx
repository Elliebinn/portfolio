/**
 * I7 ScrollProgress — 페이지 배경 크로스페이드 / 블로그 상단 진행률 바
 * I7 ScrollProgress — page background crossfade or top reading progress bar.
 * See PRD §7.1 / DESIGN.md §10.1.
 */
import { type RefObject } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import useReducedMotion from './useReducedMotion';

export interface ScrollProgressProps {
  variant: 'page' | 'bar';
  target?: RefObject<HTMLElement> | null;
  className?: string;
}

export function ScrollProgress({ variant, target, className }: ScrollProgressProps) {
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll(
    target && target.current ? { target: target as RefObject<HTMLElement> } : undefined,
  );
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // PRD §7.2: I7 완전 비활성 on reduce-motion
  if (reduced) return null;

  if (variant === 'page') {
    return (
      <motion.div
        aria-hidden="true"
        className={className}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: -1,
          opacity: scrollYProgress,
        }}
      />
    );
  }

  // variant === 'bar'
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        transformOrigin: 'left',
        scaleX,
        background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light))',
        zIndex: 50,
      }}
    />
  );
}

export default ScrollProgress;
