import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import type { Schedule } from '../../types';

interface TournamentScheduleProps {
  schedule: Schedule[];
}

export default function TournamentSchedule({ schedule }: TournamentScheduleProps) {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-8">Tournament Schedule</h2>
      <div className="space-y-6">
        {schedule.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="relative pl-8 border-l-2 border-white/10"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white/20 border-2 border-white" />
            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-white/60" />
                <h3 className="font-semibold text-lg">{phase.phase}</h3>
              </div>
              <p className="text-white/80 mb-1">{phase.date}</p>
              <p className="text-gray-400">{phase.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}