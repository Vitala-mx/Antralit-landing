'use client';

export default function FounderSection() {
  return (
    <section className="px-6 lg:px-8 bg-white py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-center">
          {/* Left - Founder Info */}
          <div className="lg:col-span-1">
            <p className="text-xs tracking-widest text-gray-500 uppercase font-light mb-2">
              Fundador
            </p>
            <h3 className="text-2xl lg:text-3xl font-light text-black leading-tight mb-1">
              Luis Rojas
            </h3>
            <p className="text-sm text-gray-400 font-light">
              CEO & Founder
            </p>
          </div>

          {/* Right - Philosophy Quote */}
          <div className="lg:col-span-2">
            <p className="text-sm lg:text-base font-light text-gray-600 leading-relaxed italic">
              "Software sin compromiso. Infraestructura que no falla. Innovación que anticipa."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
