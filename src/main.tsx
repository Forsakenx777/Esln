import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/layout/ErrorBoundary';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
          <AnimatePresence mode="wait">
            <App />
          </AnimatePresence>
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}