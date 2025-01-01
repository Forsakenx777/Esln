import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  game: string;
  image: string;
}

export default function HeroSection({ title, game, image }: HeroSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[50vh] rounded-xl overflow-hidden mb-8"
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 p-8"
      >
        <h1 className="text-5xl font-bold mb-2">{title}</h1>
        <p className="text-2xl text-gray-300">{game}</p>
      </motion.div>
    </motion.div>
  );
}