import { useParams, useNavigate } from 'react-router-dom';
import { tournaments } from '@/data/tournaments';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TournamentHero from '@/components/tournaments/TournamentHero';
import TournamentInfo from '@/components/tournaments/details/TournamentInfo';
import TournamentSchedule from '@/components/tournaments/details/TournamentSchedule';
import TournamentRules from '@/components/tournaments/details/TournamentRules';
import TournamentRegistration from '@/components/tournaments/details/TournamentRegistration';

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
        <TournamentHero 
          title={tournament.title}
          game={tournament.game}
          image={tournament.image}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TournamentInfo
              date={tournament.date}
              prize={tournament.prize}
              venue={tournament.venue}
              organizer={tournament.organizer}
              description={tournament.description}
            />

            {tournament.schedule && (
              <TournamentSchedule schedule={tournament.schedule} />
            )}

            {tournament.rules && (
              <TournamentRules rules={tournament.rules} />
            )}
          </div>

          <div>
            <TournamentRegistration
              registrationOpen={tournament.registrationOpen}
              googleFormLink={tournament.googleFormLink}
              requirements={tournament.requirements}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}