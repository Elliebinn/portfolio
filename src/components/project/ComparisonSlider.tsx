/**
 * A7 Before/After Comparison Slider — draggable vertical divider for before/after image comparison.
 * Keyboard accessible (left/right arrows), reduced-motion safe.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import useReducedMotion from '../motion/useReducedMotion';

interface ComparisonSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

export default function ComparisonSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  alt = 'Comparison',
}: ComparisonSliderProps) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percentage
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  // Mouse events
  const onMouseDown = useCallback(() => {
    dragging.current = true;
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      updatePosition(e.clientX);
    };
    const onMouseUp = () => {
      dragging.current = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [updatePosition]);

  // Touch events
  const onTouchStart = useCallback(() => {
    dragging.current = true;
  }, []);

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current) return;
      updatePosition(e.touches[0].clientX);
    };
    const onTouchEnd = () => {
      dragging.current = false;
    };

    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [updatePosition]);

  // Keyboard
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 2;
    if (e.key === 'ArrowLeft') {
      setPosition((p) => Math.max(0, p - step));
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      setPosition((p) => Math.min(100, p + step));
      e.preventDefault();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full select-none overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* After image (full width, behind) */}
      <img
        src={afterSrc}
        alt={`${alt} - ${afterLabel}`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={`${alt} - ${beforeLabel}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw' }}
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 cursor-ew-resize"
        style={{
          left: `${position}%`,
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--color-on-accent)',
          boxShadow: '0 0 8px rgba(0,0,0,0.3)',
          transition: reduced ? 'none' : undefined,
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Handle */}
        <div
          className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{
            backgroundColor: 'var(--color-on-accent)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L2 8L5 13" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L14 8L11 13" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute left-3 top-3 z-20 rounded-md bg-[var(--color-bg-card)]/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 z-20 rounded-md bg-[var(--color-accent)]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] backdrop-blur-sm">
        {afterLabel}
      </span>
    </div>
  );
}
