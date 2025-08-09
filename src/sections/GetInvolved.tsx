import Reveal from '@/components/Reveal';

const options = [
  {
    title: 'Transform Your Agency',
    desc: 'Audit, blueprint, and deploy AI-native workflows to 10x output.',
    cta: 'Start Transformation',
  },
  {
    title: 'Learn & Launch',
    desc: 'Get the ASA curriculum and starter stack. Build your first AI agency.',
    cta: 'Get the Stack',
  },
];

export default function GetInvolved() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="headline text-3xl md:text-5xl">How to Get Involved</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {options.map((o) => (
          <a
            key={o.title}
            className="card p-6 hover:bg-white/10 transition-colors"
            href="https://alexkaymakanov.beehiiv.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-xl font-semibold">{o.title}</div>
            <p className="opacity-80 mt-2">{o.desc}</p>
            <div className="mt-6">
              <span className="btn">{o.cta}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


