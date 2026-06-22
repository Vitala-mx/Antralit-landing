'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 navbar-scroll-blur ${isScrolled ? 'scrolled' : ''}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-24 lg:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center py-2 hover-smooth transition-smooth flex-shrink-0">
            <img
              src="/logo.png"
              alt="Antralit Logo"
              className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[200px]"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#soluciones" className="text-sm text-gray-600 transition-smooth relative group scroll-smooth">
              Soluciones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="#productos" className="text-sm text-gray-600 transition-smooth relative group scroll-smooth">
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="#nosotros" className="text-sm text-gray-600 transition-smooth relative group scroll-smooth">
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="#tecnologia" className="text-sm text-gray-600 transition-smooth relative group scroll-smooth">
              Tecnología
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
