/**
 * I6 ParallaxImage — scroll-linked translate 패럴럭스 이미지
 * I6 ParallaxImage — scroll-linked translate parallax for full-bleed color blocks.
 * See PRD §7.1 / DESIGN.md §10.1.
 */
import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import useReducedMotion from './useReducedMotion';

type ImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>;

export interface ParallaxImageProps extends ImgProps {
  src: string;
  alt: string;
  intensity?: number;
  className?: string;
}

const MOBILE_QUERY = '(max-width: 767px)';

export function ParallaxImage({
  src,
  alt,
  intensity = 20,
  className,
  ...rest
}: ParallaxImageProps) {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mql = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener?.('change', handler);
    return () => mql.removeEventListener?.('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  if (reduced || isMobile) {
    return <img src={src} alt={alt} className={className} {...rest} />;
  }

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        {...rest}
      />
    </div>
  );
}

export default ParallaxImage;
