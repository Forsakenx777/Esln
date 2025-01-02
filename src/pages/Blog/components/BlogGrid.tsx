import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog-posts';
import BlogPostCard from './BlogPostCard';

export default function BlogGrid() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 gap-8"
    >
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <BlogPostCard {...post} />
        </motion.div>
      ))}
    </motion.div>
  );
}