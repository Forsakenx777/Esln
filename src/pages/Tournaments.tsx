import Container from '@/components/ui/Container';
import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/ui/PageHeader';
import TournamentsList from './Tournaments/components/TournamentsList';

export default function Tournaments() {
  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title="Tournaments"
          description="Compete in Nepal's most prestigious esports tournaments and make your mark in gaming history."
        />
        <TournamentsList />
      </Container>
    </PageWrapper>
  );
}