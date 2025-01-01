import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from '@/components/ui/Container';
import Navigation from './Navigation';
import logo from '/Public/Images/logo.png';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const handleNavigation = (sectionId: string) => {
    // Only handle section scrolling on homepage
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 text-white"
          >
            <img src={logo} alt="ESLN Logo" className="w-24 h-24" />
          </a>

          {/* Navigation */}
          <Navigation onNavigate={handleNavigation} />
        </div>
      </Container>
    </header>
  );
}