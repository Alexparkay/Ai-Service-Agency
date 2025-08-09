import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
import BigPicture from './sections/BigPicture';
import Problem from './sections/Problem';
import WhyThisMatters from './sections/WhyThisMatters';
import WhyModelsDying from './sections/WhyModelsDying';
import TheSolution from './sections/TheSolution';
import BusinessModel from './sections/BusinessModel';
import GetInvolved from './sections/GetInvolved';
import ToolsStack from './sections/ToolsStack';
import WhyNow from './sections/WhyNow';
import Roadmap from './sections/Roadmap';
import Vision from './sections/Vision';
import NewsletterCTA from './sections/NewsletterCTA';
import Footer from './sections/Footer';
import BackgroundArt from './components/BackgroundArt';

export default function App() {
  // Set body fonts
  useEffect(() => {
    document.body.classList.add('font-inter');
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className="min-h-screen">
        <BackgroundArt />
        <Hero />
        <BigPicture />
        <Problem />
        <WhyThisMatters />
        <WhyModelsDying />
        <TheSolution />
        <BusinessModel />
        <GetInvolved />
        <ToolsStack />
        <WhyNow />
        <Roadmap />
        <Vision />
        <NewsletterCTA />
        <Footer />
      </main>
    </AnimatePresence>
  );
}


