import { LucideIcon } from 'lucide-react';

interface TournamentDetailItemProps {
  icon: LucideIcon;
  label: string;
}

export function TournamentDetailItem({ icon: Icon, label }: TournamentDetailItemProps) {
  return (
    <div className="flex items-center gap-2 text-gray-300">
      <Icon className="w-4 h-4 text-gray-400" />
      <span>{label}</span>
    </div>
  );
}