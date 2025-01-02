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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tournament Not Found</h1>
          <Button onClick={() => navigate('/')} className="mt-4">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Container className="pt-16 pb-8">
        {/* Hero Section */}
        <div className="relative h-[50vh] rounded-xl overflow-hidden mb-12">
          <img 
            src={tournament.image} 
            alt={tournament.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-5xl font-bold mb-2">{tournament.title}</h1>
            <p className="text-2xl">{tournament.game}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <Card>
              <h2 className="text-3xl font-bold text-white mb-4">Tournament Overview</h2>
              <p className="text-gray-300 mb-6">{tournament.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Timer, label: tournament.date },
                  { icon: Trophy, label: `Prize Pool: ${tournament.prize}` },
                  { icon: MapPin, label: tournament.venue },
                  { icon: User, label: tournament.organizer },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white">
                    <item.icon className="w-6 h-6 text-gray-400" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Schedule */}
            {tournament.schedule && (
              <Card>
                <h2 className="text-3xl font-bold text-white mb-4">Tournament Schedule</h2>
                <div className="space-y-6">
                  {tournament.schedule.map((phase, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-gray-800 rounded-lg">
                      <Calendar className="w-6 h-6 text-gray-400" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{phase.phase}</h3>
                        <p className="text-gray-400">{phase.date}</p>
                        <p className="text-sm text-gray-500">{phase.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Registration */}
            <Card>
              <h2 className="text-3xl font-bold text-white mb-4">Registration</h2>
              {tournament.registrationOpen ? (
                <div className="space-y-4">
                  <p className="text-green-400">Registration is open!</p>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => window.open(tournament.googleFormLink, '_blank')}
                  >
                    Register Now
                  </Button>
                </div>
              ) : (
                <p className="text-yellow-400">Registration coming soon</p>
              )}
            </Card>

             {/* Rules */}
            {tournament.rules && (
              <Card>
                <h2 className="text-3xl font-bold text-white mb-4">Tournament Rules</h2>
                <ul className="space-y-4">
                  {tournament.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield className="w-6 h-6 text-gray-400" />
                      <span className="text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Requirements */}
            {tournament.requirements && (
              <Card>
                <h2 className="text-3xl font-bold text-white mb-4">Requirements</h2>
                <ul className="space-y-4">
                  {tournament.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <List className="w-6 h-6 text-gray-400" />
                      <span className="text-gray-300">{req}</span>
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
