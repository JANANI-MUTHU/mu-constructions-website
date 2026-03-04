import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: 'projects-smart' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleProjectsClick = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/projects');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2a2a2a]/80 backdrop-blur-md shadow-lg'
          : 'bg-[#2a2a2a]/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 group">
              {/* Logo Image */}
              <img 
                src={logoImage} 
                alt="MU Constructions Logo" 
                className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg filter brightness-110 contrast-110"
              />
              {/* Logo Text */}
              <div className="flex flex-col leading-tight">
                <span className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold tracking-wide text-[#d4b896] transition-colors duration-300 group-hover:text-[#e8d4b0]">
                    MU
                  </span>
                  <span className="text-3xl md:text-4xl font-semibold tracking-wide text-[#f5f1e8]">
                    Constructions
                  </span>
                </span>
                <span className="mt-0.5 text-[11px] md:text-xs font-medium tracking-widest text-[#e8e3da]/95 uppercase">
                   & Immoveables
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              item.href === 'projects-smart' ? (
                <button
                  key={item.name}
                  onClick={handleProjectsClick}
                  className="relative text-[#e8e3da] hover:text-[#d4b896] transition-colors duration-300 text-sm font-medium tracking-wide uppercase group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-[#e8e3da] hover:text-[#d4b896] transition-colors duration-300 text-sm font-medium tracking-wide uppercase group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-[#e8e3da] hover:text-[#d4b896] transition-colors duration-300 text-sm font-medium tracking-wide uppercase group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#d4b896] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-transparent border border-[#d4b896] text-[#d4b896] hover:bg-[#d4b896] hover:text-[#2a2a2a] transition-all duration-300 text-sm font-medium tracking-wide uppercase"
            >
              Get a Free Estimate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#e8e3da] hover:text-[#d4b896] focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#d4b896]/20">
            <div className="px-2 pt-4 pb-6 space-y-3">
              {menuItems.map((item) => (
                item.href === 'projects-smart' ? (
                  <button
                    key={item.name}
                    onClick={() => { handleProjectsClick(); setIsMobileMenuOpen(false); }}
                    className="block px-4 py-2 text-[#e8e3da] hover:text-[#d4b896] hover:bg-[#d4b896]/10 transition-all duration-300 text-sm font-medium tracking-wide uppercase"
                  >
                    {item.name}
                  </button>
                ) : item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[#e8e3da] hover:text-[#d4b896] hover:bg-[#d4b896]/10 transition-all duration-300 text-sm font-medium tracking-wide uppercase"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[#e8e3da] hover:text-[#d4b896] hover:bg-[#d4b896]/10 transition-all duration-300 text-sm font-medium tracking-wide uppercase"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 px-4 py-2.5 mt-4 bg-transparent border border-[#d4b896] text-[#d4b896] hover:bg-[#d4b896] hover:text-[#2a2a2a] transition-all duration-300 text-sm font-medium tracking-wide uppercase text-center"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
