'use client';

export default function PlatformsInProduction() {
  return (
    <section id="productos" className="px-6 lg:px-8 bg-white py-20 border-t border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-12">
          Plataformas en producción.
        </h2>

        {/* Dark Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-black text-white">
          {/* Left: Product Info */}
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            {/* Status Badge */}
            <p className="text-xs tracking-widest uppercase font-light text-gray-500 mb-8">
              En producción
            </p>

            {/* Product Name */}
            <h3 className="text-5xl lg:text-6xl font-light mb-8 leading-tight">
              VINVILA
            </h3>

            {/* Description */}
            <p className="text-base text-gray-400 font-light leading-relaxed mb-8 max-w-lg">
              Plataforma de salud preventiva para detección temprana de enfermedades y monitoreo continuo de la salud. Diseñada para la atención proactiva — no reactiva.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              <span className="inline-block px-3 py-1.5 bg-gray-900 text-gray-500 text-xs font-light rounded border border-gray-800">
                HL7 / FHIR
              </span>
              <span className="inline-block px-3 py-1.5 bg-gray-900 text-gray-500 text-xs font-light rounded border border-gray-800">
                ML PREDICTIVO
              </span>
              <span className="inline-block px-3 py-1.5 bg-gray-900 text-gray-500 text-xs font-light rounded border border-gray-800">
                MULTI-DISPOSITIVO
              </span>
            </div>

            {/* CTA Button */}
            <button className="w-fit px-8 py-3 bg-white text-black text-xs font-light tracking-wide hover:bg-gray-200 transition duration-200">
              CONOCER MÁS
            </button>
          </div>

          {/* Right: VINVILA Logo/Image */}
          <div className="bg-gray-950 p-0 flex items-center justify-center min-h-96">
            <img
              src="/vinvila-logo.png"
              alt="VINVILA Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
