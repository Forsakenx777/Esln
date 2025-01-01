import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "min-h-screen pt-20 pb-32 bg-gradient-to-b from-black via-gray-900 to-black",
        className
      )}
    >
      {children}
    </motion.div>
  );
}