import { useNavigate, useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: 'About Us',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Team', href: '/about#team' }
    ]
  },
  {
    title: 'Tournaments',
    links: [
      { label: 'Active Events', href: '/tournaments' },
      { label: 'Past Events', href: '/past-events' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Join the Community', href: '/tournaments' },
      { label: 'Become a Partner', href: '/about#team' }
    ]
  }
];

export default function FooterLinks() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (href: string) => {
    const [path, hash] = href.split('#');
    navigate(path);
    
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      {footerLinks.map((column, index) => (
        <div key={index}>
          <h4 className="font-bold text-white mb-6">{column.title}</h4>
          <ul className="space-y-4">
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <button
                  onClick={() => handleClick(link.href)}
                  className={`text-gray-400 hover:text-white transition-colors duration-300 ${
                    location.pathname === link.href.split('#')[0] ? 'text-white' : ''
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}