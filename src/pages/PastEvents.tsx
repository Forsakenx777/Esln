import PageWrapper from '@/components/layout/PageWrapper';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import TournamentGrid from '@/components/tournaments/TournamentGrid';
import { useTournaments } from '@/hooks/useTournaments';

export default function PastEvents() {
  const { pastTournaments } = useTournaments();

  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title="Past Events"
          description="Relive the excitement of our previous tournaments and championships."
        />
        
        {pastTournaments.length > 0 ? (
          <TournamentGrid tournaments={pastTournaments} />
        ) : (
          <p className="text-center text-gray-400">No past tournaments yet.</p>
        )}
      </Container>
    </PageWrapper>
  );
}