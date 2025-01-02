import { Timer, Trophy, MapPin } from 'lucide-react';
import { TournamentDetailItem } from '../common/TournamentDetailItem';

interface TournamentDetailsProps {
  date: string;
  prize: string;
  venue: string;
}

export default function TournamentDetails({ date, prize, venue }: TournamentDetailsProps) {
  const details = [
    { icon: Timer, label: date },
    { icon: Trophy, label: prize },
    { icon: MapPin, label: venue }
  ];

  return (
    <div className="space-y-2">
      {details.map((detail, index) => (
        <TournamentDetailItem
          key={index}
          icon={detail.icon}
          label={detail.label}
        />
      ))}
    </div>
  );
}