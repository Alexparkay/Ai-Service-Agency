import Reveal from '@/components/Reveal';

const indicators = [
  'Foundation model costs falling',
  'Enterprise demand for automation',
  'APIs → agents → workflows',
  'Data network effects',
  'Real-time inference on edge',
  'Tooling maturity inflection',
];

export default function WhyNow() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="headline text-3xl md:text-5xl">Why Now</h2>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {indicators.map((i) => (
          <div
            key={i}
            className="card p-4 flex items-center gap-3 text-sm bg-gradient-to-br from-white/5 to-transparent"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 ring-1 ring-emerald-300/30">✓</span>
            <span className="opacity-90">{i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


