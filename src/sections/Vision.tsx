import Reveal from '@/components/Reveal';

export default function Vision() {
  return (
    <section className="relative section">
      <div className="absolute inset-0 -z-10 opacity-20">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => ((e.currentTarget.style.display = 'none'))}
        >
          <source src="/video/leaf-loop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="card p-8">
        <Reveal>
          <h2 className="headline text-3xl md:text-5xl">Vision for 2026</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="text-4xl font-bold">10k+</div>
            <div className="opacity-80 text-sm">AI-native agencies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">95%</div>
            <div className="opacity-80 text-sm">Client retention</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">$13.8T</div>
            <div className="opacity-80 text-sm">Value unlocked</div>
          </div>
        </div>
      </div>
    </section>
  );
}


