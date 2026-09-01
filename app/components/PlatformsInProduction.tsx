'use client';

export default function PlatformsInProduction() {
  return (
    <section id="productos" className="px-4 sm:px-6 lg:px-8 band band-divider py-12 sm:py-16 lg:py-20 scroll-mt-20 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="eyebrow mb-5">Producto</div>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-ink leading-tight mb-8 sm:mb-12 break-words">
          Plataformas en producción.
        </h2>

        {/* En el tema claro este bloque destacaba por ser el único
            oscuro. Sobre negro esa carta ya no existe: ahora separa una
            superficie apenas más clara que la banda, un filete de 1px y
            el resplandor de acento del hover. La sombra proyectada se
            retira — sobre negro no separa nada y solo emborrona el
            borde. */}
        <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-canvas-raised text-ink overflow-hidden border border-hairline transition-colors duration-500 hover:border-hairline-strong">
          {/* Resplandor de acento que aparece al pasar el cursor */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          {/* Left: Product Info */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-16 flex flex-col justify-center min-h-80 sm:min-h-96">
            {/* Status Badge — con punto vivo: "en producción" es un
                estado, y un indicador latiendo lo comunica mejor que
                un texto gris. */}
            <p className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase font-light text-ink-muted mb-6 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              En producción
            </p>

            {/* Product Name */}
            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-light mb-6 sm:mb-8 leading-tight break-words tracking-tight">
              VINVILA
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-ink-soft font-light leading-relaxed mb-6 sm:mb-8">
              Plataforma de salud preventiva para detección temprana de enfermedades y monitoreo continuo de la salud. Diseñada para la atención proactiva — no reactiva.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
              {['HL7 / FHIR', 'ML PREDICTIVO', 'MULTI-DISPOSITIVO'].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1.5 bg-white/[0.03] text-ink-muted text-xs font-light tracking-wide border border-hairline whitespace-nowrap transition-colors duration-300 hover:border-accent/50 hover:text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: VINVILA Logo/Image */}
          {/* El arte de Vinvila ya es oscuro, así que encaja sin más
              tratamiento; solo se separa del panel con un filete. */}
          <div className="relative z-10 flex items-center justify-center min-h-64 sm:min-h-96 w-full overflow-hidden border-t border-hairline lg:border-t-0 lg:border-l">
            <img
              src="/vinvila-logo.png"
              alt="VINVILA Logo"
              className="w-full h-full object-cover max-w-full transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
