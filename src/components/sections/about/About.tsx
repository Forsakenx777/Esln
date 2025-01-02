import { Trophy, Target, Users, Star, Shield, Rocket } from 'lucide-react';
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
  },
  {
    icon: Star,
    title: 'Professional Standards',
    description: 'Experience tournaments organized following international esports standards and best practices.'
  },
  {
    icon: Shield,
    title: 'Fair Play',
    description: 'Compete in a regulated environment with strict anti-cheat measures and professional referees.'
  },
  {
    icon: Rocket,
    title: 'Growth Opportunities',
    description: 'Get exposure to professional teams, sponsors, and opportunities in the esports industry.'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <Container>
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Why Choose ESLN?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're building the future of Nepali esports, providing a comprehensive platform for gamers to compete, grow, and succeed.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
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