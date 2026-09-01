'use client';

export default function Hero() {
  const lineAnimationStyle = `
    /* Las líneas ya no laten de gris a gris: van del gris frío al
       acento, así el diagrama se lee como una red con tráfico y no
       como un dibujo estático. Una sola animación parametrizada por
       retardo — antes eran cinco keyframes idénticos copiados.
       Sobre negro el reposo baja a un azul apagado: si se dejara el
       gris claro del tema anterior, la red se leería más fuerte que
       el titular. */
    @keyframes flowGlow {
      0%, 100% { stroke: #232d3d; stroke-width: 0.8; }
      50%      { stroke: var(--accent); stroke-width: 1.4; }
    }
    .flow-line-1,
    .flow-line-2,
    .flow-line-3,
    .flow-line-4,
    .flow-line-5 { animation: flowGlow 6s ease-in-out infinite; }
    .flow-line-1 { animation-delay: 0s; }
    .flow-line-2 { animation-delay: 1s; }
    .flow-line-3 { animation-delay: 2s; }
    .flow-line-4 { animation-delay: 3s; }
    .flow-line-5 { animation-delay: 0.5s; }

    /* Nodos: anillo de acento que respira alrededor del punto. */
    @keyframes nodeRing {
      0%, 100% { r: 8;  opacity: 0.35; }
      50%      { r: 14; opacity: 0; }
    }
    .node-ring { animation: nodeRing 4s ease-out infinite; transform-box: fill-box; }
    .node-ring-2 { animation-delay: 1.3s; }
    .node-ring-3 { animation-delay: 2.6s; }

    /* OJO: estos selectores estaban sin acotar ("svg line", "svg
       circle"...). Como esta hoja se inyecta en el documento entero,
       apagaban al 0.5-0.7 de opacidad TODOS los SVG del sitio,
       incluidos los diagramas de Soluciones y Metodología — parte de la
       falta de contraste venía de aquí. Ahora todo cuelga de .hero-net
       y solo afecta al hero.
       (Y nada de escribir la etiqueta de estilo literal en este
       comentario: el servidor la escapa, el cliente no, y React tira
       un error de hidratación por el texto que no coincide.) */
    @media (max-width: 768px) {
      .hero-net line   { opacity: 0.85 !important; }
      .hero-net circle { opacity: 0.8 !important; }
      .hero-net text   { opacity: 0.9 !important; }

      .hero-net circle[cx="250"][cy="120"] {
        opacity: 1 !important;
        filter: drop-shadow(0 0 10px rgba(53, 200, 224, 0.55));
      }

      .hero-net .hero-particles { opacity: 0.5 !important; }
    }

    /* Escritorio: sobre negro los nodos claros ya destacan solos, así
       que las líneas bajan de opacidad respecto al tema claro. El
       nodo central lleva un halo permanente — es el único punto de
       luz del diagrama y ordena la lectura. */
    @media (min-width: 769px) {
      .hero-net line   { opacity: 0.55; }
      .hero-net circle { opacity: 0.9; }
      .hero-net text   { opacity: 0.75; }
    }

    .hero-net .node-core {
      filter: drop-shadow(0 0 12px rgba(53, 200, 224, 0.35));
    }
  `;

  return (
    <section className="pt-24 pb-12 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden relative">
      <style>{lineAnimationStyle}</style>
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Main flex container - vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start lg:relative">
          {/* Left Content - Text section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            {/* Subtitle — el filete pasa a degradado de acento: es el
                primer punto de color de la página y ancla el resto. */}
            <div className="eyebrow animate-fade-in">
              Tecnología empresarial
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-1 md:gap-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-ink leading-tight animate-slide-up animate-delay-100">
                Desarrollamos
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-ink leading-tight animate-slide-up animate-delay-200">
                Infraestructura
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-ink leading-tight animate-slide-up animate-delay-300">
                Digital Para
              </h1>
              {/* El cierre del titular es el único texto con color de la
                  mitad superior: arranca en el gris del cuerpo y sube
                  hasta el acento, de modo que la frase parece
                  encenderse en su última palabra. */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight animate-slide-up animate-delay-400 bg-gradient-to-r from-ink-muted via-accent-deep to-accent bg-clip-text text-transparent">
                El Futuro.
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-ink-soft max-w-lg leading-relaxed font-light animate-fade-in animate-delay-300">
              Antralit Technologies diseña y desarrolla plataformas de software inteligentes para salud, finanzas, seguridad e infraestructura empresarial crítica.
            </p>
          </div>

          {/* Right Content - Network Diagram */}
          <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-none lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full lg:border-l lg:border-hairline mx-auto">
            <div className="w-full h-56 sm:h-64 md:h-80 lg:h-full flex items-center justify-center lg:p-12 overflow-hidden">
            <svg className="hero-net w-full h-full" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Background particles */}
            <defs>
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
              </filter>
            </defs>

            {/* Subtle particle dots */}
            <circle className="hero-particles" cx="80" cy="60" r="1.5" fill="#3d4859" opacity="0.6"></circle>
            <circle className="hero-particles" cx="420" cy="100" r="1" fill="#3d4859" opacity="0.6"></circle>
            <circle className="hero-particles" cx="450" cy="200" r="1.2" fill="#3d4859" opacity="0.6"></circle>
            <circle className="hero-particles" cx="100" cy="350" r="1" fill="#3d4859" opacity="0.6"></circle>
            <circle className="hero-particles" cx="400" cy="420" r="1.5" fill="#3d4859" opacity="0.6"></circle>
            <circle className="hero-particles" cx="150" cy="70" r="0.8" fill="#3d4859" opacity="0.5"></circle>
            <circle className="hero-particles" cx="350" cy="450" r="1" fill="#3d4859" opacity="0.5"></circle>
            <circle className="hero-particles" cx="50" cy="250" r="1.2" fill="#3d4859" opacity="0.5"></circle>

            {/* Connection lines from center IA */}
            <line className="flow-line-1" x1="250" y1="120" x2="150" y2="200" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-2" x1="250" y1="120" x2="350" y2="200" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-3" x1="250" y1="120" x2="180" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-4" x1="250" y1="120" x2="300" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-5" x1="250" y1="120" x2="420" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>

            {/* Peripheral connections */}
            <line className="flow-line-1" x1="150" y1="200" x2="180" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-2" x1="150" y1="200" x2="300" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-3" x1="350" y1="200" x2="300" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-4" x1="350" y1="200" x2="420" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-5" x1="180" y1="320" x2="300" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>
            <line className="flow-line-1" x1="300" y1="320" x2="420" y2="320" stroke="#232d3d" strokeWidth="0.8"></line>


            {/* Nodo central IA — anillo de acento expandiéndose sobre un
                punto en acento. Los nodos pasan de tinta oscura a luz:
                sobre negro el diagrama se dibuja con puntos claros. */}
            <circle className="node-ring" cx="250" cy="120" r="8" fill="none" stroke="var(--accent)" strokeWidth="1"></circle>
            <circle className="node-core" cx="250" cy="120" r="8" fill="var(--accent)"></circle>
            <text x="250" y="145" textAnchor="middle" fill="#e6ebf2" fontSize="11" fontWeight="400" letterSpacing="0.3">IA</text>

            {/* Peripheral nodes - Level 2 */}
            <circle cx="150" cy="200" r="7" fill="#dbe2ec"></circle>
            <text x="150" y="225" textAnchor="middle" fill="#8d97a6" fontSize="10" fontWeight="400" letterSpacing="0.2">SEGURIDAD</text>

            <circle cx="350" cy="200" r="7" fill="#dbe2ec"></circle>
            <text x="350" y="225" textAnchor="middle" fill="#8d97a6" fontSize="10" fontWeight="400" letterSpacing="0.2">DATOS</text>

            {/* Peripheral nodes - Level 3 */}
            <circle cx="180" cy="320" r="7" fill="#dbe2ec"></circle>
            <text x="180" y="345" textAnchor="middle" fill="#8d97a6" fontSize="10" fontWeight="400" letterSpacing="0.2">SALUD</text>

            <circle cx="300" cy="320" r="7" fill="#dbe2ec"></circle>
            <text x="300" y="345" textAnchor="middle" fill="#8d97a6" fontSize="10" fontWeight="400" letterSpacing="0.2">FINANZAS</text>

            <circle cx="420" cy="320" r="7" fill="#dbe2ec"></circle>
            <text x="420" y="345" textAnchor="middle" fill="#8d97a6" fontSize="10" fontWeight="400" letterSpacing="0.2">INFRAESTRUCTURA</text>

            {/* Bottom labels */}
            <text x="30" y="480" textAnchor="start" fill="#4e5867" fontSize="9" fontWeight="400" letterSpacing="0.2">ART-REST-CORE / v2.1</text>
            <text x="470" y="480" textAnchor="end" fill="#4e5867" fontSize="9" fontWeight="400" letterSpacing="0.2">SECURE</text>
          </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:block absolute bottom-8 right-0 pr-12">
        <p className="text-xs tracking-widest text-ink-faint uppercase font-light">Scroll</p>
      </div>
    </section>
  );
}
