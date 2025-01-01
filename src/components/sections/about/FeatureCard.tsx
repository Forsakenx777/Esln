import { LucideIcon } from 'lucide-react';
import Card from '@/components/ui/Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-8 hover:bg-white/10 transition-colors duration-300" hover>
      <Icon className="w-12 h-12 text-white mb-6" />
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
}