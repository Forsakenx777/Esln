import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

interface TournamentRulesProps {
  rules: string[];
}

export default function TournamentRules({ rules }: TournamentRulesProps) {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6">Tournament Rules</h2>
      <ul className="space-y-4">
        {rules.map((rule, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="flex items-start gap-3"
          >
            <Shield className="w-5 h-5 text-white/60 mt-1" />
            <span className="text-gray-300">{rule}</span>
          </motion.li>
        ))}
      </ul>
    </Card>
  );
}