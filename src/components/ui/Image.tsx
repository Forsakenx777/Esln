import { useImageLazyLoading } from '@/hooks/useImageLazyLoading';
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ src, alt, className, ...props }: ImageProps) {
  const imgRef = useImageLazyLoading();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <LoadingSpinner size="sm" />
        </div>
      )}
      <img
        ref={imgRef}
        data-src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        {...props}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-400">
          Failed to load image
        </div>
      )}
    </div>
  );
}