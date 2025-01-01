import { useParams, useNavigate } from 'react-router-dom';
import { tournaments } from '@/data/tournaments';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import HeroSection from './components/HeroSection';
import TournamentOverview from './components/TournamentOverview';
import ScheduleTimeline from './components/ScheduleTimeline';
import RegistrationCard from './components/RegistrationCard';

export default function TournamentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tournament = tournaments.find(t => t.id === id);

  if (!tournament) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tournament Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Container>
        <HeroSection 
          title={tournament.title}
          game={tournament.game}
          image={tournament.image}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TournamentOverview
              date={tournament.date}
              prize={tournament.prize}
              venue={tournament.venue}
              organizer={tournament.organizer}
              description={tournament.description}
            />

            {tournament.schedule && (
              <ScheduleTimeline schedule={tournament.schedule} />
            )}
          </div>

          <div className="space-y-8">
            <RegistrationCard
              registrationOpen={tournament.registrationOpen}
              googleFormLink={tournament.googleFormLink}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}