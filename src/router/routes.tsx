import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Layout from '@/components/layout/Layout';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Tournaments = lazy(() => import('@/pages/Tournaments'));
const TournamentDetails = lazy(() => import('@/pages/TournamentDetails'));
const PastEvents = lazy(() => import('@/pages/PastEvents'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/Blog/components/BlogPost'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/Termsofservice'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { 
        index: true, 
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        )
      },
      { 
        path: 'about', 
        element: (
          <SuspenseWrapper>
            <About />
          </SuspenseWrapper>
        )
      },
      { 
        path: 'tournaments', 
        element: (
          <SuspenseWrapper>
            <Tournaments />
          </SuspenseWrapper>
        )
      },
      { 
        path: 'tournament/:id', 
        element: (
          <SuspenseWrapper>
            <TournamentDetails />
          </SuspenseWrapper>
        )
      },
      { 
        path: 'past-events', 
        element: (
          <SuspenseWrapper>
            <PastEvents />
          </SuspenseWrapper>
        )
      },
      { 
        path: 'blog', 
        element: (
          <SuspenseWrapper>
            <Blog />
          </SuspenseWrapper>
        )
      },
      { 
        path: 'blog/:slug', 
        element: (
          <SuspenseWrapper>
            <BlogPost />
          </SuspenseWrapper>
        )
      },
      { 
        path: 'privacy-policy', 
        element: (
          <SuspenseWrapper>
            <PrivacyPolicy />
          </SuspenseWrapper>
        )
      },
      { 
        path: 'terms-of-service', 
        element: (
          <SuspenseWrapper>
            <TermsOfService />
          </SuspenseWrapper>
        )
      },
      { 
        path: '*', 
        element: (
          <SuspenseWrapper>
            <NotFound />
          </SuspenseWrapper>
        )
      }
    ],
  },
];