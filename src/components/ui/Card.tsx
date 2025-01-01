import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = false, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        role="region"
        className={cn(
          "backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6",
          hover && "transition-colors duration-300 hover:bg-white/10",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;