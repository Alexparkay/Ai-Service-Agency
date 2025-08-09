import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ParallaxProps = {
  children: React.ReactNode;
  offset?: number;
  className?: string;
};

export default function Parallax({ children, offset = 100, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <m.div ref={ref} style={{ y }} className={className}>
      {children}
    </m.div>
  );
}


