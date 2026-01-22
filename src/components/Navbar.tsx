import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CLIENTS } from '../consts';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { BDS_IMOLA } = CLIENTS;
  const navLinks = BDS_IMOLA.NAVLINKS;
  const { ASSETS } = BDS_IMOLA;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-stone-100 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={ASSETS.LOGO} alt={ASSETS.LOGO_ALT} className="h-28" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({HREF, NAME}) => (
              <a
                key={NAME}
                href={HREF}
                onClick={(e: any) => handleScroll(e, HREF)}
                className="text-shoe-black hover:text-shoe-brown px-3 py-2 text-sm font-medium transition-colors"
              >
                {NAME}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({HREF, NAME}) => (
              <a
                key={NAME}
                href={HREF}
                className="block px-3 py-4 text-base font-medium border-b border-stone-50 last:border-0"
                onClick={(e: any) => handleScroll(e, HREF)}
              >
                {NAME}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};