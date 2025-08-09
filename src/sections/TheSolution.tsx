import Reveal from '@/components/Reveal';
import SmartImage from '@/components/SmartImage';

// Removed case studies per request; replacing with a single visual metaphor card

export default function TheSolution() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <Reveal>
            <h2 className="headline text-3xl md:text-5xl">The Solution</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="subheadline">
              Replace the CD player (one-off services) with a high-end restaurant (experience engine):
              Client Interface → AI Backend → Results.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card p-6">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="font-bold">Client Interface</div>
                  <div className="opacity-80 text-sm">Portals, intake, feedback</div>
                </div>
                <div>
                  <div className="font-bold">AI Backend</div>
                  <div className="opacity-80 text-sm">Agents, tools, memory</div>
                </div>
                <div>
                  <div className="font-bold">Results</div>
                  <div className="opacity-80 text-sm">Deliverables, metrics</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="card overflow-hidden">
              <div className="relative min-h-[260px]">
                <SmartImage src={["/growth/leaf-3.jpg", "/growth/leaf-2.jpg", "/growth/hero.jpg"]} alt="Solution Visual" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              </div>
              <div className="p-6 grid md:grid-cols-3 gap-4 text-sm leading-relaxed">
                <div>
                  <div className="font-bold">Client Interface</div>
                  <div className="opacity-80">Portals, intake, feedback</div>
                </div>
                <div>
                  <div className="font-bold">AI Backend</div>
                  <div className="opacity-80">Agents, tools, memory</div>
                </div>
                <div>
                  <div className="font-bold">Results</div>
                  <div className="opacity-80">Deliverables, metrics</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


