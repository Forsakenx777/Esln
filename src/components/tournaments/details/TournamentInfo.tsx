import { Timer, Trophy, MapPin, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

interface TournamentInfoProps {
  date: string;
  prize: string;
  venue: string;
  organizer: string;
  description: string;
}

export default function TournamentInfo({ 
  date, prize, venue, organizer, description 
}: TournamentInfoProps) {
  const details = [
    { icon: Timer, label: date, title: 'Date' },
    { icon: Trophy, label: prize, title: 'Prize Pool' },
    { icon: MapPin, label: venue, title: 'Venue' },
    { icon: User, label: organizer, title: 'Organizer' }
  ];

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6">Tournament Overview</h2>
      <p className="text-gray-300 mb-8 text-lg leading-relaxed">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <Icon className="w-5 h-5" />
                <span>{detail.title}</span>
              </div>
              <p className="text-lg text-white">{detail.label}</p>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}