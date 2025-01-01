import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
      {/* Footer Copyright */}
      <p>© {new Date().getFullYear()} ESLN. All rights reserved.</p>
      
      {/* Navigation Links */}
      <div className="flex gap-6">
        {/* Link to Privacy Policy */}
        <Link
          to="/privacy-policy" // React Router route
          className="hover:text-white transition-colors"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </Link>
        {/* Link to Terms of Service */}
        <Link
          to="/terms-of-service" // React Router route
          className="hover:text-white transition-colors"
          aria-label="Terms of Service"
        >
          Terms of Service
        </Link>
      </div>
      
      {/* Developer Attribution */}
      <div className="flex items-center gap-2 text-gray-400">
        <span>Made with ❤️ by</span>
        <a
          href="https://www.sandeshshrestha.xyz"
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sandesh's website"
        >
          Sandesh
        </a>
      </div>
    </div>
  );
}
