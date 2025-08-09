import { useEffect } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { m } from 'framer-motion';

type CarouselProps = {
  children: React.ReactNode[] | React.ReactNode;
  options?: EmblaOptionsType;
};

export default function Carousel({ children, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', ...options });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      // placeholder for custom logic
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {Array.isArray(children)
          ? children.map((child, idx) => (
              <m.div
                key={idx}
                className="min-w-0 flex-[0_0_90%] md:flex-[0_0_70%] lg:flex-[0_0_55%] xl:flex-[0_0_45%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                {child}
              </m.div>
            ))
          : children}
      </div>
    </div>
  );
}


