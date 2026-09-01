'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#tecnologia', label: 'Tecnología' },
];

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
            {/* El PNG es trazo negro sobre transparente: se invierte por
                CSS en vez de mantener un segundo archivo en blanco. */}
            <img
              src="/logo.png"
              alt="Antralit Logo"
              className="logo-invert h-8 sm:h-10 md:h-14 lg:h-16 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[200px]"
            />
          </a>

          {/* Navigation Links — reposo en gris frío, hover a blanco puro
              con el subrayado creciendo desde la izquierda. */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-ink-muted hover:text-ink transition-smooth relative group scroll-smooth"
              >
                {label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 text-ink-soft" aria-label="Abrir menú">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
