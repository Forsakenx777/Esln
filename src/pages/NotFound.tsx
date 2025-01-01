import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-gray-400 mb-8">Page Not Found</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          variant="primary"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}