import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Layout from '@/components/layout/Layout';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Tournaments = lazy(() => import('@/pages/Tournaments'));
const TournamentDetails = lazy(() => import('@/pages/TournamentDetails'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/Termsofservice'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'tournaments',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Tournaments />
          </Suspense>
        ),
      },
      {
        path: 'tournament/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TournamentDetails />
          </Suspense>
        ),
      },
      {
        path: 'privacy-policy',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: 'terms-of-service',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TermsOfService />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}