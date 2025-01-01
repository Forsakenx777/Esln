import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Main Title with 3D effect */}
        <div className="relative perspective-1000">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight animate-fade-in text-white transform-style-3d hover:rotate-x-10 transition-transform duration-500">
            Future of Esports
          </h1>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl -z-10" />
        </div>
        
        <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto animate-slide-up">
          Where passion becomes Profession
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/tournaments')}
          >
            <span className="relative z-10">Explore Tournaments</span>
          </Button>
        </div>
      </div>
    </div>
  );
}