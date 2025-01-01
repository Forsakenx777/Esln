import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

export default function AboutMissionVision() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid md:grid-cols-2 gap-8 mb-24"
    >
      <Card className="p-8 hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          To create a thriving esports ecosystem in Nepal by providing professional platforms,
          opportunities, and resources for gamers to showcase their talents and pursue their
          passion professionally.
        </p>
      </Card>

      <Card className="p-8 hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
        <p className="text-gray-300 leading-relaxed">
          To establish Nepal as a recognized force in the global esports landscape and nurture
          the next generation of professional gamers, content creators, and industry leaders.
        </p>
      </Card>
    </motion.div>
  );
}