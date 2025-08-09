import { useState } from 'react';
import { m } from 'framer-motion';

type SmartImageProps = {
  src: string | string[];
  alt: string;
  className?: string;
  rounded?: string; // e.g. 'rounded-2xl'
};

export default function SmartImage({ src, alt, className, rounded = 'rounded-2xl' }: SmartImageProps) {
  const candidates = Array.isArray(src) ? src : [src];
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <div className={`relative overflow-hidden ${rounded} ${className ?? ''}`}>
      {!loaded && !error && <div className="absolute inset-0 bg-white/5 animate-pulse" />}
      {!error && (
        <m.img
          src={candidates[idx]}
          alt={alt}
          className={`w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (idx < candidates.length - 1) {
              setIdx((i) => i + 1);
            } else {
              setError(true);
            }
          }}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )}
      {error && (
        <div className="absolute inset-0 grid place-items-center text-xs opacity-60">
          Image unavailable
        </div>
      )}
    </div>
  );
}


