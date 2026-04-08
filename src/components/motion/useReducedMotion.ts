/**
 * useReducedMotion — prefers-reduced-motion 미디어 쿼리 구독 훅
 * useReducedMotion — React hook subscribing to prefers-reduced-motion media query.
 * See PRD §7.2 / DESIGN.md §10.4 (Reduced-Motion Matrix).
 */
import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Returns `true` when the user requests reduced motion.
 * SSR-safe: always returns `false` on the server / first render.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }
    const mql = window.matchMedia(QUERY);
    setReduced(mql.matches);

    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    }
    // Safari < 14 fallback
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, []);

  return reduced;
}

export default useReducedMotion;
