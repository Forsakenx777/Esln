import { Trophy, Target, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Container from '@/components/ui/Container';
import FeatureCard from './FeatureCard';
import { IconWrapper } from './IconWrapper';
import { FeatureAnimation } from './animations';

const features = [
  {
    icon: Trophy,
    title: 'Premier Tournaments',
    description: 'Experience top-tier esports competitions with professional organization, substantial prize pools, and nationwide recognition.'
  },
  {
    icon: Target,
    title: 'Skill Development',
    description: 'Access coaching, workshops, and training programs designed to elevate your gaming skills to professional standards.'
  },
  {
    icon: Users,
    title: 'Vibrant Community',
    description: 'Join a thriving network of players, teams, and enthusiasts who share your passion for competitive gaming.'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <Container>
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose ESLN?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We're building the future of Nepali esports, providing a comprehensive platform for gamers to compete, grow, and succeed.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={FeatureAnimation.getClassName(inView)}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                IconWrapper={IconWrapper}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}