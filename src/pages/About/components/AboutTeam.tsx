import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

const team = [
  {
    name: "Forsaken",
    role: "Founder & CEO",
    image: "https://avatars.githubusercontent.com/u/12322728?v=4"
  },
  {
    name: "John Doe",
    role: "Tournament Director",
    image: "https://i.pravatar.cc/150?img=68"
  },
  {
    name: "Jane Smith",
    role: "Community Manager",
    image: "https://i.pravatar.cc/150?img=47"
  }
];

export default function AboutTeam() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-24"
      id="team"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-12">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <Card className="p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full blur-lg opacity-20" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto relative z-10 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}