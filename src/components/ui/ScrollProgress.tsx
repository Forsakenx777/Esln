import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}