import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, animate, useMotionValueEvent } from 'framer-motion';

type AnimatedCounterProps = {
  from?: number;
  to: number;
  duration?: number; // seconds
  prefix?: string;
  suffix?: string;
  decimals?: number; // number of decimal places
  className?: string;
};

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const spring = useSpring(count, { stiffness: 100, damping: 20 });
  const [displayValue, setDisplayValue] = useState<number>(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, duration]);

  useMotionValueEvent(spring, 'change', (latest) => {
    setDisplayValue(Number(latest.toFixed(decimals)));
  });

  return (
    <span className={className}>{`${prefix}${displayValue.toLocaleString()}${suffix}`}</span>
  );
}


