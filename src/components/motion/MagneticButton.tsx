/**
 * I3 MagneticButton — 커서 근접 시 자석처럼 당겨지는 버튼 (스프링)
 * I3 MagneticButton — button that magnetically follows the cursor via spring physics.
 * See PRD §7.1 / DESIGN.md §10.1.
 */
import { useEffect, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import useReducedMotion from './useReducedMotion';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export interface MagneticButtonProps extends ButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

const SPRING = { stiffness: 150, damping: 15, mass: 1 };
const MOBILE_QUERY = '(max-width: 767px)';

export function MagneticButton({
  children,
  strength = 0.4,
  className,
  ...rest
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

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
    return (
      <button ref={ref} className={className} {...rest}>
        {children}
      </button>
    );
  }

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((event.clientX - cx) * strength);
    y.set((event.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export default MagneticButton;
