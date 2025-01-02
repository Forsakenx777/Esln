import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

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
        
        {/* Registration Status */}
        <div className="mb-6">
          {registrationOpen ? (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <p className="text-green-400">Registration is open!</p>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <p className="text-yellow-400">Registration coming soon</p>
            </div>
          )}
        </div>

        {/* Requirements */}
        {requirements && requirements.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Requirements</h3>
            <ul className="space-y-2">
              {requirements.map((req, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Register Button */}
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