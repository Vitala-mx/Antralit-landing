'use client';

// Partículas estáticas predefinidas - mismas en servidor y cliente
const STATIC_PARTICLES = [
  { id: 0, left: 15, top: 20, delay: 0, duration: 18, size: 3 },
  { id: 1, left: 85, top: 15, delay: 1, duration: 22, size: 2 },
  { id: 2, left: 25, top: 75, delay: 2, duration: 19, size: 2.5 },
  { id: 3, left: 70, top: 80, delay: 3, duration: 21, size: 3 },
  { id: 4, left: 45, top: 35, delay: 4, duration: 20, size: 2 },
  { id: 5, left: 60, top: 50, delay: 5, duration: 19, size: 2.5 },
  { id: 6, left: 10, top: 55, delay: 6, duration: 22, size: 2 },
  { id: 7, left: 90, top: 65, delay: 7, duration: 18, size: 3 },
  { id: 8, left: 35, top: 15, delay: 0.5, duration: 20, size: 2.5 },
  { id: 9, left: 75, top: 35, delay: 1.5, duration: 21, size: 2 },
  { id: 10, left: 20, top: 45, delay: 2.5, duration: 19, size: 3 },
  { id: 11, left: 55, top: 70, delay: 3.5, duration: 20, size: 2 },
  { id: 12, left: 80, top: 25, delay: 4.5, duration: 22, size: 2.5 },
  { id: 13, left: 30, top: 60, delay: 5.5, duration: 18, size: 2 },
  { id: 14, left: 65, top: 15, delay: 6.5, duration: 21, size: 3 },
  { id: 15, left: 12, top: 80, delay: 7.5, duration: 19, size: 2.5 },
  { id: 16, left: 50, top: 25, delay: 1, duration: 20, size: 2 },
  { id: 17, left: 88, top: 45, delay: 2, duration: 22, size: 2.5 },
  { id: 18, left: 28, top: 30, delay: 3, duration: 18, size: 3 },
  { id: 19, left: 72, top: 70, delay: 4, duration: 19, size: 2 },
];

export default function DarkNetworkSection() {
  const particles = STATIC_PARTICLES;

  const animationStyle = `
    @keyframes radarPulse {
      0% {
        r: 60px;
        stroke-width: 1px;
        opacity: 0.8;
      }
      100% {
        r: 120px;
        stroke-width: 1px;
        opacity: 0;
      }
    }
    @keyframes radarPulseSecondary {
      0% {
        r: 35px;
        stroke-width: 0.8px;
        opacity: 0.6;
      }
      100% {
        r: 85px;
        stroke-width: 0.8px;
        opacity: 0;
      }
    }
    @keyframes floatParticle {
      0% {
        transform: translateY(0px);
        opacity: 0;
      }
      10% {
        opacity: 0.4;
      }
      90% {
        opacity: 0.4;
      }
      100% {
        transform: translateY(-100vh);
        opacity: 0;
      }
    }
    .radar-primary {
      animation: radarPulse 5s linear infinite;
    }
    .radar-secondary {
      animation: radarPulseSecondary 5.5s linear infinite;
    }
    .dark-net .floating-particle {
      position: absolute;
      background: #4a5566;
      border-radius: 50%;
      animation: floatParticle linear infinite;
      pointer-events: none;
    }

    /* OJO: estos selectores estaban sin acotar ("svg line", "svg
       circle", "svg path"). Esta hoja se inyecta en el documento
       entero, así que reescribían el trazo y la opacidad de TODOS los
       SVG del sitio — los diagramas del hero, los de Soluciones — y
       ninguno de ellos tiene nada que ver con esta red. Ahora todo
       cuelga de .dark-net. */
    @media (max-width: 768px) {
      .dark-net svg line {
        opacity: 0.6 !important;
        stroke: #38455a !important;
      }

      .dark-net svg circle[data-node] {
        opacity: 0.9 !important;
        fill: #3d4a5e !important;
        filter: drop-shadow(0 0 6px rgba(53, 200, 224, 0.18));
      }

      .dark-net svg path {
        stroke: #232d3d !important;
        stroke-width: 1.2px !important;
      }
    }

    @media (min-width: 769px) {
      .dark-net svg line   { opacity: 0.45; }
      .dark-net svg circle { opacity: 0.6; }
    }
  `;

  return (
    // Es la sección más profunda de la página: el resto de bandas van
    // del #05070b al #0f141d y esta cae por debajo, hasta el negro. El
    // degradado evita que se lea como un rectángulo pegado.
    <section
      className="dark-net px-4 sm:px-6 lg:px-8 text-ink py-24 sm:py-32 lg:py-48 relative overflow-hidden w-full max-w-full"
      style={{ background: 'linear-gradient(165deg, #060d1a 0%, #03070f 45%, #000205 100%)' }}
    >
      <style>{animationStyle}</style>

      {/* Halo de acento: da un foco de color frío al centro de la
          sección sin tocar la legibilidad del texto. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(53,200,224,0.10), transparent 65%)' }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `floatParticle ${particle.duration}s linear infinite`,
            animationDelay: `-${particle.delay}s`,
          }}
        />
      ))}

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#141c28" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] flex items-center justify-center">
          <svg
            viewBox="0 0 1400 800"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Definir filtros para glow */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Líneas de conexión - más finas */}
            <line x1="280" y1="280" x2="480" y2="380" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="280" y1="280" x2="700" y2="320" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="280" y1="280" x2="1050" y2="280" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />

            <line x1="480" y1="380" x2="700" y2="320" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="480" y1="380" x2="700" y2="520" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />

            <line x1="700" y1="320" x2="1050" y2="280" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="700" y1="320" x2="1050" y2="500" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />

            <line x1="1050" y1="500" x2="700" y2="520" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="1050" y1="280" x2="1200" y2="120" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />

            <line x1="480" y1="380" x2="150" y2="580" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="700" y1="520" x2="400" y2="680" stroke="#2b374a" strokeWidth="0.8" strokeLinecap="round" />

            {/* Nodo principal — el único con acento: es el centro de la
                red y el pulso de radar sale de él. El resto son masas
                frías que se apagan con la distancia. */}
            <circle className="radar-primary" cx="280" cy="280" r="60" fill="none" stroke="var(--accent)" />
            <circle data-node cx="280" cy="280" r="60" fill="#1b2635" opacity="0.6" filter="url(#glow)" />

            {/* Nodos secundarios - Medianos */}
            <circle data-node cx="480" cy="380" r="35" fill="#16202e" opacity="0.55" />

            <circle className="radar-secondary" cx="700" cy="320" r="32" fill="none" stroke="#2b374a" />
            <circle data-node cx="700" cy="320" r="32" fill="#16202e" opacity="0.55" />

            <circle data-node cx="1050" cy="280" r="30" fill="#16202e" opacity="0.55" />

            <circle data-node cx="1050" cy="500" r="28" fill="#16202e" opacity="0.55" />

            {/* Nodos terciarios - Pequeños */}
            <circle data-node cx="700" cy="520" r="18" fill="#101825" opacity="0.5" />

            <circle data-node cx="150" cy="580" r="16" fill="#101825" opacity="0.5" />

            <circle data-node cx="1200" cy="120" r="14" fill="#101825" opacity="0.5" />

            <circle data-node cx="400" cy="680" r="12" fill="#0b111c" opacity="0.45" />
          </svg>
        </div>

        {/* Vision Text Section */}
        <div className="mt-12 sm:mt-16 lg:mt-32 max-w-4xl mx-auto">
          {/* Vision Label */}
          <div className="eyebrow mb-8 sm:mb-12">Nuestra Visión</div>

          {/* Cita. El fragmento destacado iba en text-gray-600, que
              sobre negro se hundía hasta ser ilegible: el énfasis
              pasa al acento, que es lo que la frase pedía. */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-ink leading-tight mb-8 sm:mb-12 break-words">
            &ldquo;Creemos que el software debe <span className="text-accent">prevenir problemas,</span> no simplemente reaccionar.&rdquo;
          </h2>

          {/* Divider */}
          <div className="h-px bg-hairline mb-8 sm:mb-12"></div>

          {/* Two Column Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <p className="text-sm sm:text-base font-light text-ink-muted leading-relaxed">
              La mayoría del software reacciona. Antralit construye sistemas que anticipan: plataformas que detectan el riesgo antes de que se convierta en incidente, y la oportunidad antes de que sea evidente.
            </p>
            <p className="text-sm sm:text-base font-light text-ink-muted leading-relaxed">
              Trabajamos en la frontera de la IA, la infraestructura de datos y el software empresarial para dar a las organizaciones la inteligencia que necesitan para actuar con precisión — no con retrospectiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
