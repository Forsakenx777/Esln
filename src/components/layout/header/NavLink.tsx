import React, { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function NavLink({ href, children, className, onClick, ...props }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-gray-300 hover:text-white transition-colors duration-300",
        className
      )}
      {...props}  // Pass remaining props, including tabIndex
    >
      {children}
    </a>
  );
}
