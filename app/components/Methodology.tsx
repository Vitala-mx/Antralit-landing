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
    <section id="tecnologia" className="px-4 sm:px-6 lg:px-8 bg-white py-12 sm:py-16 lg:py-20 border-t border-gray-200 scroll-mt-20 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 bg-gray-300"></div>
            <p className="text-xs tracking-widest text-gray-500 uppercase font-light">
              Metodología
            </p>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-black leading-tight mb-2 sm:mb-3 break-words">
              Cómo construimos.
            </h2>
            <p className="text-lg sm:text-xl text-gray-350 font-light leading-relaxed">
              Productos que duran.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border border-gray-200 p-12 min-h-64 flex flex-col justify-between transition-all duration-300 ease-in-out cursor-pointer ${
                hoveredIndex === index
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              {/* Top line accent */}
              <div className={`w-12 h-0.5 mb-8 transition-all duration-300 ease-in-out ${
                hoveredIndex === index
                  ? 'bg-gray-600'
                  : 'bg-transparent'
              }`}></div>

              {/* Step Number */}
              <p className={`text-xs tracking-widest uppercase font-light mb-6 transition-colors duration-300 ease-in-out ${
                hoveredIndex === index
                  ? 'text-gray-500'
                  : 'text-gray-400'
              }`}>
                {step.number}
              </p>

              {/* Title */}
              <h3 className={`text-2xl lg:text-3xl font-light mb-6 leading-tight transition-colors duration-300 ease-in-out ${
                hoveredIndex === index
                  ? 'text-white'
                  : 'text-black'
              }`}>
                {step.title}
              </h3>

              {/* Description */}
              <p className={`text-base font-light leading-relaxed transition-colors duration-300 ease-in-out ${
                hoveredIndex === index
                  ? 'text-gray-300'
                  : 'text-gray-600'
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
