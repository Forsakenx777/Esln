import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <ParticlesBackground />
      <HeroContent />
    </div>
  );
}