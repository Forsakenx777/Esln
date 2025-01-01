import { useParams, useNavigate } from 'react-router-dom';
import { Timer, Trophy, MapPin, User, Shield, Calendar, List } from 'lucide-react';
import { tournaments } from '@/data/tournaments';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

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
        {/* Hero Section */}
        <div className="relative h-[40vh] rounded-xl overflow-hidden mb-8">
          <img 
            src={tournament.image} 
            alt={tournament.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl font-bold mb-2">{tournament.title}</h1>
            <p className="text-xl text-gray-300">{tournament.game}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <h2 className="text-2xl font-bold mb-4">Tournament Overview</h2>
              <p className="text-gray-300 mb-6">{tournament.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-gray-400" />
                  <span>{tournament.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-gray-400" />
                  <span>Prize Pool: {tournament.prize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>{tournament.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-400" />
                  <span>{tournament.organizer}</span>
                </div>
              </div>
            </Card>

            {/* Schedule */}
            {tournament.schedule && (
              <Card>
                <h2 className="text-2xl font-bold mb-4">Tournament Schedule</h2>
                <div className="space-y-4">
                  {tournament.schedule.map((phase, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-lg">
                      <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">{phase.phase}</h3>
                        <p className="text-gray-400">{phase.date}</p>
                        <p className="text-sm text-gray-500">{phase.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Rules */}
            {tournament.rules && (
              <Card>
                <h2 className="text-2xl font-bold mb-4">Tournament Rules</h2>
                <ul className="space-y-2">
                  {tournament.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration Status */}
            <Card>
              <h2 className="text-2xl font-bold mb-4">Registration</h2>
              {tournament.registrationOpen ? (
                <>
                  <p className="text-green-400 mb-4">Registration is open!</p>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => window.open(tournament.googleFormLink, '_blank')}
                  >
                    Register Now
                  </Button>
                </>
              ) : (
                <p className="text-yellow-400">Registration coming soon</p>
              )}
            </Card>

            {/* Requirements */}
            {tournament.requirements && (
              <Card>
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {tournament.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <List className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}