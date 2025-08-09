import { m } from 'framer-motion';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import SmartImage from '@/components/SmartImage';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] overflow-hidden flex items-center" id="hero">
      <div className="absolute inset-0 opacity-20 bg-[url('/textures/leaves.svg')] bg-cover bg-center" />

      <div className="section relative z-10">
        <div className="max-w-4xl">
          <Reveal>
            <h1 className="headline font-space">
              Every Agency Will Be an AI Company by 2026
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="subheadline mt-6">
              The $13.8 Trillion Opportunity You’re Not Seeing
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="https://alexkaymakanov.beehiiv.com/" target="_blank" rel="noreferrer" className="btn mt-10">Start Learning</a>
          </Reveal>
        </div>
      </div>

      {/* Floating icons */}
      <Parallax offset={60} className="pointer-events-none">
        <m.div
          className="absolute right-10 top-24 w-16 h-16 rounded-xl bg-white/10 border border-white/10"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </Parallax>
      <Parallax offset={90} className="pointer-events-none">
        <m.div
          className="absolute left-16 bottom-24 w-24 h-24 rounded-full bg-white/10 border border-white/10"
          animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </Parallax>

      {/* Decorative parallax image */}
      <Parallax offset={40}>
        <div className="absolute top-12 right-8 w-[40vw] max-w-xl opacity-30">
          <SmartImage src={["/growth/hero.jpg", "/growth/leaf-1.jpg", "/growth/leaf-2.jpg"]} alt="Botanical" />
        </div>
      </Parallax>
    </section>
  );
}


