import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { TournamentStatus } from '../common/TournamentStatus';
import { TournamentRequirements } from './TournamentRequirements';

interface TournamentRegistrationProps {
  registrationOpen: boolean;
  googleFormLink?: string;
  requirements?: string[];
}

export default function TournamentRegistration({ 
  registrationOpen, 
  googleFormLink,
  requirements 
}: TournamentRegistrationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="p-8 sticky top-24">
        <h2 className="text-2xl font-bold mb-6">Registration</h2>
        
        <div className="mb-6">
          <TournamentStatus isOpen={registrationOpen} />
        </div>

        {requirements && requirements.length > 0 && (
          <TournamentRequirements requirements={requirements} />
        )}

        {registrationOpen && googleFormLink && (
          <Button
            variant="primary"
            className="w-full"
            onClick={() => window.open(googleFormLink, '_blank')}
          >
            Register Now
          </Button>
        )}
      </Card>
    </motion.div>
  );
}