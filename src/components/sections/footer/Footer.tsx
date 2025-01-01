import Container from '@/components/ui/Container';
import Contact from './Contact';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      <Container>
        {/* Contact Section */}
        <Contact />

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand and Social Links */}
            <SocialLinks />
            
            {/* Links Sections */}
            <FooterLinks />
          </div>
          
          {/* Copyright */}
          <Copyright />
        </div>
      </Container>
    </footer>
  );
}