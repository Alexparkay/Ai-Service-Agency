import { m, useScroll, useTransform } from 'framer-motion';
import SmartImage from '@/components/SmartImage';

export default function BackgroundArt() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -60]);
  const y2 = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Large soft-light image gradient */}
      <m.div
        style={{ y: y1 }}
        className="absolute -top-20 -right-10 w-[70vw] h-[70vh] opacity-30 mix-blend-soft-light"
        aria-hidden
      >
        <div className="w-full h-full rounded-full blur-2xl overflow-hidden">
          <SmartImage
            src={['/growth/gradient-1.jpg', '/growth/gradient-1.png', '/growth/hero.jpg', '/growth/bg-1.jpg']}
            alt="Gradient"
            className="w-full h-full"
            rounded="rounded-full"
          />
        </div>
      </m.div>

      {/* Secondary washed image */}
      <m.div
        style={{ y: y2 }}
        className="absolute bottom-[-10vh] left-[-10vw] w-[55vw] h-[55vh] opacity-20 mix-blend-soft-light"
        aria-hidden
      >
        <div className="w-full h-full rounded-3xl blur-xl overflow-hidden">
          <SmartImage
            src={['/growth/gradient-2.jpg', '/growth/gradient-2.png', '/growth/leaf-2.jpg', '/growth/bg-2.jpg']}
            alt="Gradient 2"
            className="w-full h-full"
          />
        </div>
      </m.div>
    </div>
  );
}


