'use client';

export default function StatsBar() {
  return (
    <section className="px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-16 sm:gap-20 lg:gap-28">
            <div className="text-center sm:text-left">
              <p className="text-5xl font-bold text-black">4+</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-4 font-medium">
                Verticales
              </p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-5xl font-bold text-black">100%</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-4 font-medium">
                Zero Trust
              </p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-5xl font-bold text-black">∞</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-4 font-medium">
                Escalabilidad
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-3 mt-8 md:mt-0 md:ml-auto">
            <p className="text-xs text-gray-500 tracking-widest uppercase font-medium">
              Scroll
            </p>
            <div className="flex flex-col items-center gap-1">
              <svg
                className="w-5 h-8 text-gray-400 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
