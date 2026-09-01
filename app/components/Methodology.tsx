'use client';

import { useState } from 'react';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

const steps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Investigación de Mercado',
    description: 'Análisis profundo del segmento vertical, necesidades no resueltas y oportunidades de producto. Identificamos dónde fallan las soluciones existentes.'
  },
  {
    number: '02',
    title: 'Arquitectura de Producto',
    description: 'Decisiones de arquitectura, selección tecnológica y roadmap de features. Base sólida para escala global desde el primer día.'
  },
  {
    number: '03',
    title: 'Diseño de Experiencia',
    description: 'Interfaces diseñadas para operadores en situaciones críticas: claras, intuitivas y resilientes. Usabilidad bajo presión.'
  },
  {
    number: '04',
    title: 'Ingeniería de Clase Mundial',
    description: 'Desarrollo con estándares de seguridad, testing y código review en cada commit. Zero compromises en calidad.'
  },
  {
    number: '05',
    title: 'Lanzamiento en Producción',
    description: 'Deployment seguro con zero downtime, monitoreo 24/7 y soporte operacional. Lanzamiento que es el inicio, no el fin.'
  },
  {
    number: '06',
    title: 'Evolución Continua',
    description: 'Iteración basada en datos de usuarios reales. Mejora constante, features nuevas y optimización de rendimiento. Producto vivo.'
  }
];

export default function Methodology() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tecnologia" className="px-4 sm:px-6 lg:px-8 band-deep band-divider py-12 sm:py-16 lg:py-20 scroll-mt-20 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="eyebrow mb-5 sm:mb-6">Metodología</div>

          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-ink leading-tight mb-2 sm:mb-3 break-words">
              Cómo construimos.
            </h2>
            <p className="text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              Productos que duran.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full overflow-hidden border-t border-l border-hairline">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-active={hoveredIndex === index}
              className="panel border-r border-b p-6 sm:p-8 lg:p-12 min-h-72 sm:min-h-80 lg:min-h-96 flex flex-col justify-between cursor-pointer"
            >
              {/* Filete superior: en reposo es una línea corta y apagada,
                  al activarse se estira y toma el acento. Es el gesto
                  que sustituye a la inversión de fondo del tema claro
                  — sobre negro, invertir seis paneles a blanco
                  destrozaba el ritmo de la página. */}
              <div className={`h-px mb-6 sm:mb-8 transition-all duration-500 ease-out ${
                hoveredIndex === index
                  ? 'w-24 bg-accent'
                  : 'w-12 bg-hairline-strong'
              }`}></div>

              {/* Step Number */}
              <p className={`text-xs tracking-[0.2em] uppercase font-light mb-4 sm:mb-6 transition-colors duration-300 ease-in-out ${
                hoveredIndex === index ? 'text-accent' : 'text-ink-faint'
              }`}>
                {step.number}
              </p>

              {/* Title */}
              <h3 className={`text-xl sm:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 leading-tight transition-colors duration-300 ease-in-out break-words ${
                hoveredIndex === index ? 'text-ink' : 'text-ink-soft'
              }`}>
                {step.title}
              </h3>

              {/* Description */}
              <p className={`text-sm sm:text-base font-light leading-relaxed transition-colors duration-300 ease-in-out ${
                hoveredIndex === index ? 'text-ink-soft' : 'text-ink-muted'
              }`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
