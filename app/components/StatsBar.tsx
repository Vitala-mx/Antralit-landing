'use client';

export default function StatsBar() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200 overflow-x-hidden w-full">
      <div className="w-full max-w-7xl mx-auto py-10 sm:py-14 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-28 w-full sm:w-auto">
            <div className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl font-bold text-black break-words">4+</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-2 sm:mt-4 font-medium">
                Verticales
              </p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl font-bold text-black break-words">100%</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-2 sm:mt-4 font-medium">
                Zero Trust
              </p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl font-bold text-black break-words">∞</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-2 sm:mt-4 font-medium">
                Escalabilidad
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden lg:flex flex-col items-center gap-3 md:ml-auto flex-shrink-0">
            <p className="text-xs text-gray-500 tracking-widest uppercase font-medium">
              Scroll
            </p>
            <div className="flex flex-col items-center gap-1">
              <svg
                className="w-4 h-6 text-gray-400 animate-bounce"
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
