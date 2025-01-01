import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
}

export default function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'default',
  ...props 
}: ButtonProps) {
  const baseStyles = "relative backdrop-blur-md rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-100";
  
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/20"
  };
  
  const sizes = {
    default: "px-6 py-2",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}