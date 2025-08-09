import { m } from 'framer-motion';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import SmartImage from '@/components/SmartImage';

const markets = [
  { label: 'AI Services', value: 90 },
  { label: 'Traditional Services', value: 45 },
  { label: 'Software-Only', value: 65 },
];

export default function BigPicture() {
  return (
    <section className="section relative">
      <Parallax offset={40} className="absolute -left-10 top-1/3 w-[30vw] max-w-sm opacity-20 -rotate-3">
        <SmartImage src="/growth/leaf-2.jpg" alt="Leaf" />
      </Parallax>
      <Reveal>
        <h2 className="headline text-3xl md:text-5xl">The Big Picture</h2>
      </Reveal>
      <div className="mt-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="subheadline">
            A convergence of AI, data access, and automation tooling is creating a new class of
            agencies: AI-native service businesses with software-like margins.
          </p>
          <p className="opacity-80">
            As orchestration and context improve, more of the delivery pipeline becomes automated,
            shifting value capture to strategy, data, and outcomes.
          </p>
        </div>
        <div className="card p-6">
          <div className="space-y-3">
            {markets.map((market, i) => (
              <div key={market.label}>
                <div className="flex justify-between text-sm opacity-80">
                  <span>{market.label}</span>
                  <span>{market.value}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden mt-1">
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${market.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="h-full bg-brand-offwhite rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


