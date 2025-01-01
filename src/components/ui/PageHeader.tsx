import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16 px-4"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}