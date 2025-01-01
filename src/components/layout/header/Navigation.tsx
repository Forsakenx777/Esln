import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { navigationLinks } from './navigationData';

interface NavigationProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      onNavigate?.(href.replace('#', ''));
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white"
        aria-label="Toggle menu"
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Navigation Menu - Responsive for both Mobile and Desktop */}
      <div
        className={`${
          isOpen
            ? 'absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-black/95 z-50'
            : 'hidden lg:block'
        }`}
      >
        {/* Mobile Close Button */}
        {isOpen && (
          <div className="p-4 flex justify-end lg:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        )}

        {/* Navigation Links */}
        <nav className={`
          ${isOpen 
            ? 'flex flex-col items-center justify-center gap-8 min-h-[80vh]' 
            : 'flex items-center gap-8'
          }
        `}>
          <div className={`
            ${isOpen
              ? 'flex flex-col items-center gap-8 text-xl'
              : 'flex items-center gap-6'
            }
          `}>
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link.href);
                }}
                className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                  location.pathname === link.href ? 'text-white font-semibold' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Register Button */}
          <Button variant="primary">Register Now</Button>
        </nav>
      </div>
    </>
  );
}