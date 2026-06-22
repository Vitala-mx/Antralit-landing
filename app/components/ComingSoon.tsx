'use client';

export default function ComingSoon() {
  return (
    <section className="px-6 lg:px-8 bg-white py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
          {/* Left */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase font-medium mb-4">
              En desarrollo
            </p>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-400 leading-tight">
              Próximamente
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              ANTRALIT TECHNOLOGIES
            </p>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase font-medium mb-4">
              En desarrollo
            </p>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-400 leading-tight">
              Próximamente
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              ANTRALIT TECHNOLOGIES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
