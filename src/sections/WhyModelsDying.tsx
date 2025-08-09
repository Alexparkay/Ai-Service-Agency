import { m } from 'framer-motion';
import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';
import Parallax from '@/components/Parallax';

const cards = [
  {
    title: 'AI Automation Agencies',
    front: 'Scale with compute, not headcount',
    back: 'Margins improve as models and tooling compound. The best operators win by process.',
  },
  {
    title: 'Traditional Agencies',
    front: 'Billable hours are capped',
    back: 'Linear scaling, rate pressure, and client churn as automation expectations rise.',
  },
  {
    title: 'Quick Stats',
    front: '90% tasks partially automatable',
    back: 'Strategic layers retain value while rote execution gets automated away.',
  },
];

export default function WhyModelsDying() {
  return (
    <section className="section relative">
      {/* Decorative image band */}
      <Parallax offset={35} className="absolute inset-x-0 -z-10 top-6">
        <div className="container-gutter">
          <div className="h-36 md:h-40 rounded-3xl overflow-hidden opacity-25">
            <SmartImage src={["/growth/leaf-1.jpg", "/growth/leaf-2.jpg"]} alt="Nature band" rounded="rounded-3xl" />
          </div>
        </div>
      </Parallax>
      <Reveal>
        <h2 className="headline text-3xl md:text-5xl">Why Current Models Are Dying</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {cards.map((card, idx) => (
          <m.div
            key={card.title}
            className="relative h-56 md:h-72 [perspective:1000px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="absolute inset-0 card p-6 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)] transition-transform duration-500">
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="text-xl font-semibold">{card.title}</div>
                <p className="opacity-80 mt-2">{card.front}</p>
              </div>
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="text-xl font-semibold">{card.title}</div>
                <p className="opacity-80 mt-2">{card.back}</p>
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}


