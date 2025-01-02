import { useTournaments } from '@/hooks/useTournaments';
import TournamentGrid from '@/components/tournaments/TournamentGrid';

export default function TournamentsList() {
  const { activeTournaments } = useTournaments();

  return (
    <div className="space-y-24">
      <div>
        <h2 className="text-2xl font-bold text-white mb-8">Active & Upcoming Tournaments</h2>
        {activeTournaments.length > 0 ? (
          <TournamentGrid tournaments={activeTournaments} />
        ) : (
          <p className="text-center text-gray-400">No active tournaments at the moment.</p>
        )}
      </div>
    </div>
  );
}