import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/ui/PageHeader';
import BlogGrid from './Blog/components/BlogGrid';

export default function Blog() {
  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title="Blog"
          description="Stay updated with the latest news, insights, and stories from the Nepali esports scene."
        />
        <BlogGrid />
      </Container>
    </PageWrapper>
  );
}