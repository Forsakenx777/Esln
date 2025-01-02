import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroContent() {
  const navigate = useNavigate();

  const stats = [
    { icon: Trophy, label: 'Tournaments', value: '10+' },
    { icon: Users, label: 'Players', value: '1000+' },
    { icon: Globe, label: 'Prize Pool', value: '₹100K+' }
  ];

  return (
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-8"
      >
        {/* Main Title with 3D effect */}
        <div className="relative perspective-1000">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white transform-style-3d hover:rotate-x-10 transition-transform duration-500"
          >
            Future of Esports
          </motion.h1>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl -z-10" />
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto"
        >
          Where Passion Becomes Profession
        </motion.p>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-white/80 mb-2" />
              <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-white/60">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/tournaments')}
            className="group"
          >
            <span className="flex items-center gap-2">
              Explore Tournaments
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}