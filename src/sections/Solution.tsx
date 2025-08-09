import Reveal from '@/components/Reveal';

export default function Solution() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="headline text-3xl md:text-5xl">Solution Overview</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card p-6">
          <div className="font-semibold">CD Player</div>
          <p className="opacity-80 text-sm mt-1">One-off projects with linear scaling.</p>
        </div>
        <div className="card p-6">
          <div className="font-semibold">Restaurant</div>
          <p className="opacity-80 text-sm mt-1">Experience engine with compounding margin.</p>
        </div>
      </div>
    </section>
  );
}


