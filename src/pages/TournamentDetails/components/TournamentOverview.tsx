import { Timer, Trophy, MapPin, User } from 'lucide-react';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

interface TournamentOverviewProps {
  date: string;
  prize: string;
  venue: string;
  organizer: string;
  description: string;
}

export default function TournamentOverview({ 
  date, prize, venue, organizer, description 
}: TournamentOverviewProps) {
  const details = [
    { icon: Timer, label: date },
    { icon: Trophy, label: `Prize Pool: ${prize}` },
    { icon: MapPin, label: venue },
    { icon: User, label: organizer }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6">Tournament Overview</h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">{description}</p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-lg">
                <Icon className="w-6 h-6 text-white/60" />
                <span className="text-gray-200">{detail.label}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
}