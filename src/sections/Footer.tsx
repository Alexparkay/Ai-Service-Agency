import { m } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="section pt-10">
      <div className="divider" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="opacity-80 text-sm">© {new Date().getFullYear()} ASA</div>
        <nav className="flex gap-6 text-sm opacity-90">
          {['About', 'Contact', 'Privacy', 'Terms'].map((label) => (
            <a
              key={label}
              href="https://alexkaymakanov.beehiiv.com/"
              target="_blank"
              rel="noreferrer"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          {['twitter', 'github', 'linkedin'].map((icon) => (
            <m.a
              key={icon}
              href="https://alexkaymakanov.beehiiv.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="h-9 w-9 grid place-items-center rounded-full bg-white/10"
            >
              <span className="text-xs capitalize">{icon}</span>
            </m.a>
          ))}
        </div>
      </div>
    </footer>
  );
}


