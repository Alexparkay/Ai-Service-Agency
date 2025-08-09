import { m } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import SmartImage from '@/components/SmartImage';

export default function WhyThisMatters() {
  return (
    <section id="why" className="section relative">
      <Parallax offset={30} className="absolute -right-8 -top-10 w-[36vw] max-w-md opacity-25 rotate-6">
        <SmartImage src="/growth/leaf-1.jpg" alt="Leaf" />
      </Parallax>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Reveal>
            <h2 className="headline text-3xl md:text-5xl">Why This Matters</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 subheadline">
              AI-native agencies are capturing value previously locked behind headcount and hourly
              billing. As automation scales, service margins compound.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 text-5xl md:text-7xl font-extrabold font-space">
              <AnimatedCounter to={13.8} decimals={1} suffix="T" />
            </div>
            <p className="text-sm opacity-80 mt-2">Estimated GDP impact by 2030</p>
          </Reveal>
        </div>
        <div>
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card p-6"
          >
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold">x3</div>
                <div className="opacity-80">Output per head</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold">-60%</div>
                <div className="opacity-80">Time-to-value</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold">95%</div>
                <div className="opacity-80">Retention</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold">+40%</div>
                <div className="opacity-80">Gross margin</div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}


