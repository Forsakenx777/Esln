import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '/Public/Images/logo.png';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/people/Esports-League-Nepal/61568314285888/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/esln.2024/?utm_source=ig_web_button_share_sheet', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UC7C1uYr_yinSR6IgxVKeYxw', label: 'YouTube' }
];

export default function SocialLinks() {
  const navigate = useNavigate();

  return (
    <div className="lg:col-span-1">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1 mb-4 opacity-100 hover:opacity-90 transition-opacity"
      >
        <img src={logo} alt="Your Logo" className="w-16 h-16" />
      </button>
      <p className="text-gray-400 mb-4 text-sm">
        Building the future of esports in Nepal, one tournament at a time.
      </p>
      <div className="flex gap-2">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
            >
              <Icon className="w-4 h-4 text-white/80" />
            </a>
          );
        })}
      </div>
    </div>
  );
}