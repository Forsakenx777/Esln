import { Timer, Trophy, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface TournamentCardProps {
  id: string;
  title: string;
  game: string;
  prize: string;
  date: string;
  registrationOpen: boolean;
  image: string;
  venue: string;
  description: string;
}

export default function TournamentCard({
  id,
  title,
  game,
  prize,
  date,
  registrationOpen,
  image,
  venue,
  description
}: TournamentCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden" hover>
        {/* Image Container */}
        <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
          <img 
            src={image} 
            alt={`${title} tournament`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          {registrationOpen && (
            <span className="absolute bottom-4 right-4 px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full backdrop-blur-sm border border-green-500/20">
              Registration Open
            </span>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400">{game}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <Timer className="w-4 h-4 text-gray-400" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Trophy className="w-4 h-4 text-gray-400" />
              <span>{prize}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{venue}</span>
            </div>
          </div>

          <p className="text-gray-400 line-clamp-2">{description}</p>

          <Button
            variant="primary"
            className="w-full mt-4"
            onClick={() => navigate(`/tournament/${id}`)}
          >
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}