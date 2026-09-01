'use client';

export default function ComingSoon() {
  return (
    <section className="px-6 lg:px-8 band py-20 band-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
          {[0, 1].map((slot) => (
            <div key={slot}>
              <div className="eyebrow mb-5">En desarrollo</div>
              <h3 className="text-4xl lg:text-5xl font-light text-ink-faint leading-tight">
                Próximamente
              </h3>
              <p className="text-sm text-ink-muted tracking-[0.2em] mt-4 font-light">
                ANTRALIT TECHNOLOGIES
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
