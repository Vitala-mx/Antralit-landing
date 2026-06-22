'use client';

export default function Hero() {
  const lineAnimationStyle = `
    @keyframes glow1 {
      0% { stroke: #d0d0d0; stroke-width: 0.8; }
      50% { stroke: #888888; stroke-width: 1.2; }
      100% { stroke: #d0d0d0; stroke-width: 0.8; }
    }
    @keyframes glow2 {
      0% { stroke: #d0d0d0; stroke-width: 0.8; }
      50% { stroke: #888888; stroke-width: 1.2; }
      100% { stroke: #d0d0d0; stroke-width: 0.8; }
    }
    @keyframes glow3 {
      0% { stroke: #d0d0d0; stroke-width: 0.8; }
      50% { stroke: #888888; stroke-width: 1.2; }
      100% { stroke: #d0d0d0; stroke-width: 0.8; }
    }
    @keyframes glow4 {
      0% { stroke: #d0d0d0; stroke-width: 0.8; }
      50% { stroke: #888888; stroke-width: 1.2; }
      100% { stroke: #d0d0d0; stroke-width: 0.8; }
    }
    @keyframes glow5 {
      0% { stroke: #d0d0d0; stroke-width: 0.8; }
      50% { stroke: #888888; stroke-width: 1.2; }
      100% { stroke: #d0d0d0; stroke-width: 0.8; }
    }
    .flow-line-1 { animation: glow1 6s ease-in-out infinite; }
    .flow-line-2 { animation: glow2 6s ease-in-out infinite 1s; }
    .flow-line-3 { animation: glow3 6s ease-in-out infinite 2s; }
    .flow-line-4 { animation: glow4 6s ease-in-out infinite 3s; }
    .flow-line-5 { animation: glow5 6s ease-in-out infinite 0.5s; }

    /* Mobile optimization - Increased visibility on smaller screens */
    @media (max-width: 768px) {
      svg line { opacity: 0.8 !important; }
      svg circle { opacity: 0.7 !important; }
      svg text { opacity: 0.85 !important; }

      /* Central node - Extra prominent on mobile */
      svg circle[cx="250"][cy="120"] {
        opacity: 0.95 !important;
        filter: drop-shadow(0 0 6px rgba(208, 208, 208, 0.4));
      }

      /* Particle dots - More visible */
      .hero-particles circle { opacity: 0.5 !important; }
    }

    /* Desktop - Keep original subtle aesthetic */
    @media (min-width: 769px) {
      svg line { opacity: 0.5; }
      svg circle { opacity: 0.6; }
      svg text { opacity: 0.7; }
    }
  `;

  return (
    <section className="pt-24 pb-12 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden">
      <style>{lineAnimationStyle}</style>
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Main flex container - vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start lg:relative">
          {/* Left Content - Text section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            {/* Subtitle */}
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="h-px w-8 bg-gray-300"></div>
              <p className="text-xs tracking-widest text-gray-500 uppercase font-medium">
                Tecnología empresarial
              </p>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-1 md:gap-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-black leading-tight animate-slide-up animate-delay-100">
                Desarrollamos
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-black leading-tight animate-slide-up animate-delay-200">
                Infraestructura
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-black leading-tight animate-slide-up animate-delay-300">
                Digital Para
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-400 leading-tight animate-slide-up animate-delay-400">
                El Futuro.
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed font-normal animate-fade-in animate-delay-300">
              Antralit Technologies diseña y desarrolla plataformas de software inteligentes para salud, finanzas, seguridad e infraestructura empresarial crítica.
            </p>
          </div>

          {/* Right Content - Network Diagram */}
          <div className="w-full lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full lg:border-l lg:border-gray-200">
            <div className="w-full h-40 sm:h-48 md:h-64 lg:h-full flex items-center justify-center lg:p-12 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Background particles */}
            <defs>
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
              </filter>
            </defs>

            {/* Subtle particle dots */}
            <circle className="hero-particles" cx="80" cy="60" r="1.5" fill="#d0d0d0" opacity="0.3"></circle>
            <circle className="hero-particles" cx="420" cy="100" r="1" fill="#d0d0d0" opacity="0.3"></circle>
            <circle className="hero-particles" cx="450" cy="200" r="1.2" fill="#d0d0d0" opacity="0.3"></circle>
            <circle className="hero-particles" cx="100" cy="350" r="1" fill="#d0d0d0" opacity="0.3"></circle>
            <circle className="hero-particles" cx="400" cy="420" r="1.5" fill="#d0d0d0" opacity="0.3"></circle>
            <circle className="hero-particles" cx="150" cy="70" r="0.8" fill="#d0d0d0" opacity="0.25"></circle>
            <circle className="hero-particles" cx="350" cy="450" r="1" fill="#d0d0d0" opacity="0.25"></circle>
            <circle className="hero-particles" cx="50" cy="250" r="1.2" fill="#d0d0d0" opacity="0.25"></circle>

            {/* Connection lines from center IA */}
            <line className="flow-line-1" x1="250" y1="120" x2="150" y2="200" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-2" x1="250" y1="120" x2="350" y2="200" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-3" x1="250" y1="120" x2="180" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-4" x1="250" y1="120" x2="300" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-5" x1="250" y1="120" x2="420" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>

            {/* Peripheral connections */}
            <line className="flow-line-1" x1="150" y1="200" x2="180" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-2" x1="150" y1="200" x2="300" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-3" x1="350" y1="200" x2="300" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-4" x1="350" y1="200" x2="420" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-5" x1="180" y1="320" x2="300" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>
            <line className="flow-line-1" x1="300" y1="320" x2="420" y2="320" stroke="#d0d0d0" strokeWidth="0.8" opacity="0.5"></line>


            {/* Central node IA */}
            <circle cx="250" cy="120" r="8" fill="#000000"></circle>
            <text x="250" y="145" textAnchor="middle" fill="#000000" fontSize="11" fontWeight="500" letterSpacing="0.3">IA</text>

            {/* Peripheral nodes - Level 2 */}
            <circle cx="150" cy="200" r="7" fill="#000000"></circle>
            <text x="150" y="225" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="500" letterSpacing="0.2">SEGURIDAD</text>

            <circle cx="350" cy="200" r="7" fill="#000000"></circle>
            <text x="350" y="225" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="500" letterSpacing="0.2">DATOS</text>

            {/* Peripheral nodes - Level 3 */}
            <circle cx="180" cy="320" r="7" fill="#000000"></circle>
            <text x="180" y="345" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="500" letterSpacing="0.2">SALUD</text>

            <circle cx="300" cy="320" r="7" fill="#000000"></circle>
            <text x="300" y="345" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="500" letterSpacing="0.2">FINANZAS</text>

            <circle cx="420" cy="320" r="7" fill="#000000"></circle>
            <text x="420" y="345" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="500" letterSpacing="0.2">INFRAESTRUCTURA</text>

            {/* Bottom labels */}
            <text x="30" y="480" textAnchor="start" fill="#999999" fontSize="9" fontWeight="400" letterSpacing="0.2">ART-REST-CORE / v2.1</text>
            <text x="470" y="480" textAnchor="end" fill="#999999" fontSize="9" fontWeight="400" letterSpacing="0.2">SECURE</text>
          </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:block absolute bottom-8 right-0 pr-12">
        <p className="text-xs tracking-widest text-gray-400 uppercase font-light">Scroll</p>
      </div>
    </section>
  );
}
