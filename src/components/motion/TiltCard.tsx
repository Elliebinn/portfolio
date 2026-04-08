/**
 * I8 TiltCard — hover 시 3D tilt (CSS perspective + spring)
 * I8 TiltCard — 3D tilt on hover using CSS perspective and spring physics.
 * See PRD §7.1 / DESIGN.md §10.1.
 */
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import useReducedMotion from './useReducedMotion';

export interface TiltCardProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

const SPRING = { stiffness: 150, damping: 15, mass: 1 };
const MOBILE_QUERY = '(max-width: 767px)';

export function TiltCard({ children, intensity = 10, className }: TiltCardProps) {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);
  const rotateX = useTransform(sy, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(sx, [0, 1], [-intensity, intensity]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mql = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener?.('change', handler);
    return () => mql.removeEventListener?.('change', handler);
  }, []);

  const disabled = reduced || isMobile;

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
