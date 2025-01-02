import { motion } from 'framer-motion';
import TournamentCard from '@/components/sections/tournaments/TournamentCard';
import type { Tournament } from '@/types/tournament';

interface TournamentGridProps {
  tournaments: Tournament[];
}

export default function TournamentGrid({ tournaments }: TournamentGridProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 gap-8"
    >
      {tournaments.map((tournament, index) => (
        <motion.div
          key={tournament.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <TournamentCard {...tournament} />
        </motion.div>
      ))}
    </motion.div>
  );
}