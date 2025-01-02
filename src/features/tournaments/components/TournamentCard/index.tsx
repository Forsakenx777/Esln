import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import TournamentImage from './TournamentImage';
import TournamentDetails from './TournamentDetails';
import type { Tournament } from '../../types';

interface TournamentCardProps extends Tournament {}

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
        <TournamentImage
          image={image}
          title={title}
          registrationOpen={registrationOpen}
        />

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400">{game}</p>
          </div>
          
          <TournamentDetails
            date={date}
            prize={prize}
            venue={venue}
          />

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