'use client';

export default function FounderSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 band band-divider py-10 sm:py-14 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left - Founder Info */}
          <div className="lg:col-span-1 min-w-0">
            <div className="eyebrow mb-4 sm:mb-5">Fundador</div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-ink leading-tight mb-2 break-words">
              Luis Rojas
            </h3>
            <p className="text-sm text-ink-faint font-light mb-3 sm:mb-4 tracking-wide">
              CEO &amp; Founder
            </p>
            <p className="text-xs text-ink-muted font-light leading-relaxed">
              Fundador de Antralit Technologies. Enfocado en el desarrollo de plataformas SaaS, inteligencia artificial e infraestructura digital para industrias críticas.
            </p>
          </div>

          {/* Right - Philosophy Quote & Description */}
          {/* La cita se apoya en un filete vertical en vez de en la
              cursiva sola: sobre negro la itálica gris pierde peso. */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-w-0 lg:border-l lg:border-hairline lg:pl-8 xl:pl-12">
            <p className="text-base lg:text-lg font-light text-ink-soft leading-relaxed break-words">
              &ldquo;Construimos tecnología con una visión de largo plazo: sistemas escalables, seguros y preparados para resolver problemas reales.&rdquo;
            </p>
            <p className="text-xs lg:text-sm text-ink-muted font-light leading-relaxed">
              Enfoque integral en salud, seguridad, finanzas e infraestructura. Cada decisión arquitectónica prioriza confiabilidad, escalabilidad y anticipación de problemas — no reacción ante ellos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
