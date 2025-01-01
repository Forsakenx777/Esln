import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export default function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const baseStyles = "fixed bottom-4 right-4 p-4 rounded-lg shadow-lg backdrop-blur-sm border transition-all duration-300 z-50";
  const variants = {
    success: "bg-green-500/10 border-green-500/20 text-green-400",
    error: "bg-red-500/10 border-red-500/20 text-red-400",
    info: "bg-blue-500/10 border-blue-500/20 text-blue-400"
  };

  if (!isVisible) return null;

  return (
    <div className={cn(baseStyles, variants[type])}>
      <div className="flex items-center gap-2">
        <p>{message}</p>
        <button onClick={() => setIsVisible(false)} className="p-1 hover:opacity-80">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}