import { useNavigate } from 'react-router-dom';
import Container from '@/components/ui/Container';
import TournamentCard from './TournamentCard';
import Button from '@/components/ui/Button';
import { tournaments } from '@/data/tournaments';

export default function Tournaments() {
  const navigate = useNavigate();
  // Only show first 2 tournaments on homepage
  const displayedTournaments = tournaments.slice(0, 2);

  return (
    <section id="tournaments" className="py-24 bg-black">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Tournaments</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Compete in Nepal's most prestigious esports tournaments and make your mark in gaming history
          </p>
          <Button 
            variant="secondary"
            onClick={() => navigate('/tournaments')}
            className="hover:scale-105 transition-transform duration-300"
          >
            See All Tournaments
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} {...tournament} />
          ))}
        </div>
      </Container>
    </section>
  );
}