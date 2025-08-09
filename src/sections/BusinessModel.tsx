import Reveal from '@/components/Reveal';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function BusinessModel() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="headline text-3xl md:text-5xl">Business Model Revolution</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card p-6">
          <div className="text-lg font-semibold">Fixed Fees</div>
          <div className="divider" />
          <ul className="space-y-2 text-sm opacity-90 list-disc pl-5">
            <li>Linear pricing</li>
            <li>Churn on underperformance</li>
            <li>Low compounding margin</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-lg font-semibold">Revenue Share</div>
          <div className="divider" />
          <ul className="space-y-2 text-sm opacity-90 list-disc pl-5">
            <li>Aligned incentives</li>
            <li>Sticky contracts</li>
            <li>Compounding profitability</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="card p-6 text-center">
          <div className="text-sm opacity-80">Retention</div>
          <div className="text-3xl font-bold">
            <AnimatedCounter to={95} suffix="%" />
          </div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-sm opacity-80">Revenue Share</div>
          <div className="text-3xl font-bold">
            <AnimatedCounter to={70} suffix="%" />
          </div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-sm opacity-80">Gross Margin</div>
          <div className="text-3xl font-bold">
            <AnimatedCounter to={60} suffix="%" />
          </div>
        </div>
      </div>
    </section>
  );
}


