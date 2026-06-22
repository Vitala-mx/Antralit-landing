'use client';

export default function FounderSection() {
  return (
    <section className="px-6 lg:px-8 bg-white py-14 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left - Founder Info */}
          <div className="lg:col-span-1">
            <p className="text-xs tracking-widest text-gray-500 uppercase font-light mb-3">
              Fundador
            </p>
            <h3 className="text-2xl lg:text-3xl font-light text-black leading-tight mb-2">
              Luis Rojas
            </h3>
            <p className="text-sm text-gray-400 font-light mb-4">
              CEO & Founder
            </p>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Especialista en infraestructura digital empresarial con 15+ años construyendo sistemas de clase mundial.
            </p>
          </div>

          {/* Right - Philosophy Quote & Description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-sm lg:text-base font-light text-gray-600 leading-relaxed italic">
              "Software sin compromiso. Infraestructura que no falla. Innovación que anticipa."
            </p>
            <p className="text-xs lg:text-sm text-gray-500 font-light leading-relaxed">
              Cada línea de código en Antralit está escrita con la premisa de que nuestros usuarios operan en ambientes donde el error no es una opción. Construimos para precisión, confiabilidad y anticipación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
