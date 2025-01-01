import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

const values = [
  {
    title: "Excellence",
    description: "We strive for the highest standards in everything we do."
  },
  {
    title: "Community",
    description: "Building and nurturing a supportive gaming community."
  },
  {
    title: "Innovation",
    description: "Constantly evolving and adapting to industry changes."
  }
];

export default function AboutValues() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <Card className="p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}