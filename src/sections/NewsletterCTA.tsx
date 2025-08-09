import Reveal from '@/components/Reveal';
import { m } from 'framer-motion';

export default function NewsletterCTA() {
  return (
    <section className="section">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="headline text-3xl md:text-5xl">Join the AI Agency Revolution</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="subheadline mt-2">Weekly strategies, tools, and updates</p>
        </Reveal>
        <m.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid md:grid-cols-[1fr_1fr_auto] gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="bg-white/10 rounded-full px-4 py-3 placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white/10 rounded-full px-4 py-3 placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40"
          />
          <a
            className="btn"
            href="https://alexkaymakanov.beehiiv.com/"
            target="_blank"
            rel="noreferrer"
          >
            Subscribe
          </a>
        </m.form>
      </div>
    </section>
  );
}


