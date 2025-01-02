import { motion } from 'framer-motion';
import { RegistrationBadge } from '../common/RegistrationBadge';

interface TournamentImageProps {
  image: string;
  title: string;
  registrationOpen: boolean;
}

export default function TournamentImage({ image, title, registrationOpen }: TournamentImageProps) {
  return (
    <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
      <motion.img 
        src={image} 
        alt={`${title} tournament`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      {registrationOpen && (
        <div className="absolute bottom-4 right-4">
          <RegistrationBadge />
        </div>
      )}
    </div>
  );
}