import Reveal from '@/components/Reveal';

const phases = [
  { phase: 'Phase 1', items: ['Market scan', 'Offer design', 'MVP delivery'] },
  { phase: 'Phase 2', items: ['Agent workflows', 'Client portal', 'Revenue share'] },
  { phase: 'Phase 3', items: ['Scale ops', 'Data flywheel', 'Network effects'] },
];

export default function Roadmap() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="headline text-3xl md:text-5xl">Roadmap</h2>
      </Reveal>
      <div className="mt-6 overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          {phases.map((p) => (
            <div key={p.phase} className="card p-6 w-80 hover:bg-white/10 transition-colors">
              <div className="text-lg font-semibold">{p.phase}</div>
              <div className="divider" />
              <ul className="space-y-2 text-sm opacity-90 list-disc pl-5">
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


