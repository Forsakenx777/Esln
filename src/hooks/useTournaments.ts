import { tournaments } from '@/data/tournaments';
import { isEventEnded } from '@/utils/dateUtils';

export function useTournaments() {
  const pastTournaments = tournaments.filter(tournament => isEventEnded(tournament.date));
  const activeTournaments = tournaments.filter(tournament => !isEventEnded(tournament.date));

  return {
    pastTournaments,
    activeTournaments
  };
}