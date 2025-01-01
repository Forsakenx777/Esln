import { motion } from 'framer-motion';
import TournamentCard from '@/components/sections/tournaments/TournamentCard';
import { tournaments } from '@/data/tournaments';

export default function TournamentsList() {
  const activeTournaments = tournaments.filter(t => t.registrationOpen);
  const upcomingTournaments = tournaments.filter(t => !t.registrationOpen);

  return (
    <div className="space-y-24">
      {/* Active Tournaments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-white mb-8">Active Tournaments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {activeTournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <TournamentCard {...tournament} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Tournaments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-white mb-8">Upcoming Tournaments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingTournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <TournamentCard {...tournament} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}