import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

interface RegistrationCardProps {
  registrationOpen: boolean;
  googleFormLink?: string;
}

export default function RegistrationCard({ registrationOpen, googleFormLink }: RegistrationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>
        {registrationOpen ? (
          <>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <p className="text-green-400">Registration is open!</p>
            </div>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => window.open(googleFormLink, '_blank')}
            >
              Register Now
            </Button>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <p className="text-yellow-400">Registration coming soon</p>
          </div>
        )}
      </Card>
    </motion.div>
  );
}