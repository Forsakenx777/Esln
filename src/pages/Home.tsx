import Hero from '../components/sections/hero/Hero';
import About from '../components/sections/about/About';
import Tournaments from '../components/sections/tournaments/Tournaments';
import CallToAction from '../components/sections/cta/CallToAction';
import FAQ from '../components/sections/faq/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tournaments />
      <CallToAction />
      <FAQ />
    </>
  );
}