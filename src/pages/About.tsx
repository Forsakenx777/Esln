import Container from '@/components/ui/Container';
import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/ui/PageHeader';
import AboutMissionVision from './About/components/AboutMissionVision';
import AboutTeam from './About/components/AboutTeam';
import AboutValues from './About/components/AboutValues';

export default function About() {
  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title="About ESLN"
          description="Building the future of esports in Nepal, one tournament at a time."
        />
        <AboutMissionVision />
        <AboutTeam />
        <AboutValues />
      </Container>
    </PageWrapper>
  );
}