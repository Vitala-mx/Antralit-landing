'use client';

import { useState } from 'react';

interface SolutionCard {
  icon: string;
  title: string;
  description: string;
  hoverDescription: string;
  tags: string[];
  svgType: 'health' | 'finance' | 'security' | 'ai';
}

const solutions: SolutionCard[] = [
  {
    icon: '⊞',
    title: 'Software para Salud',
    description: 'Plataformas clínicas inteligentes',
    hoverDescription: 'Sistemas diseñados para detección temprana, monitoreo continuo e integración nativa con infraestructura sanitaria existente. Construidos para el hospital del futuro.',
    tags: ['HL7 / FHIR', 'ML PREDICTIVO', 'HIPAA'],
    svgType: 'health'
  },
  {
    icon: '⬈',
    title: 'Plataformas Financieras',
    description: 'Infraestructura financiera de alta fiabilidad',
    hoverDescription: 'Infraestructura financiera de alta fiabilidad para análisis en tiempo real, cumplimiento normativo, automatización operativa y toma de decisiones críticas.',
    tags: ['SOC 2 TYPE II', 'REAL-TIME ANALYTICS', 'API-FIRST'],
    svgType: 'finance'
  },
  {
    icon: '🛡',
    title: 'Sistemas de Seguridad',
    description: 'Defensa digital de grado empresarial',
    hoverDescription: 'Defensa digital de grado empresarial con arquitectura zero trust, monitoreo inteligente, respuesta a amenazas y protección de activos críticos.',
    tags: ['ZERO TRUST', 'SIEM', 'THREAT INTEL'],
    svgType: 'security'
  },
  {
    icon: '⚙',
    title: 'Inteligencia Artificial',
    description: 'IA para flujos de trabajo críticos',
    hoverDescription: 'IA aplicada a flujos de trabajo críticos, automatización avanzada, modelos operativos inteligentes e integración con sistemas empresariales.',
    tags: ['MLOps', 'LLM INTEGRATION', 'EDGE AI'],
    svgType: 'ai'
  }
];

function SVGDiagram({ type }: { type: 'health' | 'finance' | 'security' | 'ai' }) {
  if (type === 'health') {
    return (
      <svg className="w-24 h-24 opacity-80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes pulse { 0%, 100% { r: 5; opacity: 0.9; } 50% { r: 5.5; opacity: 1; } }
          @keyframes lineIn { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
          .pulse { animation: pulse 2s ease-in-out infinite; }
          .lineIn { stroke-dasharray: 1000; animation: lineIn 1.2s ease-out forwards; }
          .group:hover .pulse { animation: pulse 0.8s ease-in-out infinite; }
        `}</style>
        <g className="group">
          <line x1="60" y1="20" x2="35" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="60" y1="20" x2="85" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="35" y1="50" x2="35" y2="90" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="85" y1="50" x2="85" y2="90" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="35" y1="90" x2="85" y2="90" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <circle cx="60" cy="20" r="5" fill="currentColor" className="pulse" />
          <circle cx="35" cy="50" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="85" cy="50" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="35" cy="90" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="85" cy="90" r="4" fill="currentColor" opacity="0.6" className="pulse" />
        </g>
      </svg>
    );
  }
  if (type === 'finance') {
    return (
      <svg className="w-24 h-24 opacity-80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes pulse { 0%, 100% { r: 5; opacity: 0.9; } 50% { r: 5.5; opacity: 1; } }
          @keyframes lineIn { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
          .pulse { animation: pulse 2s ease-in-out infinite; }
          .lineIn { stroke-dasharray: 1000; animation: lineIn 1.2s ease-out forwards; }
          .group:hover .pulse { animation: pulse 0.8s ease-in-out infinite; }
        `}</style>
        <g className="group">
          <line x1="30" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="50" y1="50" x2="70" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="70" y1="40" x2="90" y2="60" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="50" y1="50" x2="60" y2="80" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="70" y1="40" x2="80" y2="80" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <circle cx="30" cy="30" r="5" fill="currentColor" className="pulse" />
          <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="70" cy="40" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="90" cy="60" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="60" cy="80" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="80" cy="80" r="4" fill="currentColor" opacity="0.6" className="pulse" />
        </g>
      </svg>
    );
  }
  if (type === 'security') {
    return (
      <svg className="w-24 h-24 opacity-80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes pulse { 0%, 100% { r: 5; opacity: 0.9; } 50% { r: 5.5; opacity: 1; } }
          @keyframes lineIn { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
          .pulse { animation: pulse 2s ease-in-out infinite; }
          .lineIn { stroke-dasharray: 1000; animation: lineIn 1.2s ease-out forwards; }
          .group:hover .pulse { animation: pulse 0.8s ease-in-out infinite; }
        `}</style>
        <g className="group">
          <path d="M 60 15 L 90 35 L 90 65 Q 60 85 60 85 Q 30 65 30 35 L 60 15" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" className="lineIn" />
          <line x1="60" y1="15" x2="60" y2="55" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <line x1="45" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
          <circle cx="60" cy="25" r="5" fill="currentColor" className="pulse" />
          <circle cx="45" cy="40" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="60" cy="55" r="4" fill="currentColor" opacity="0.6" className="pulse" />
          <circle cx="75" cy="40" r="4" fill="currentColor" opacity="0.6" className="pulse" />
        </g>
      </svg>
    );
  }
  // AI type - radial network
  return (
    <svg className="w-24 h-24 opacity-80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse { 0%, 100% { r: 5; opacity: 0.9; } 50% { r: 5.5; opacity: 1; } }
        @keyframes lineIn { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .lineIn { stroke-dasharray: 1000; animation: lineIn 1.2s ease-out forwards; }
        .group:hover .pulse { animation: pulse 0.8s ease-in-out infinite; }
      `}</style>
      <g className="group">
        <line x1="60" y1="60" x2="60" y2="20" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
        <line x1="60" y1="60" x2="95" y2="45" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
        <line x1="60" y1="60" x2="90" y2="85" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
        <line x1="60" y1="60" x2="30" y2="85" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
        <line x1="60" y1="60" x2="25" y2="45" stroke="currentColor" strokeWidth="0.8" opacity="0.4" className="lineIn" />
        <circle cx="60" cy="60" r="5" fill="currentColor" className="pulse" />
        <circle cx="60" cy="20" r="4" fill="currentColor" opacity="0.6" className="pulse" />
        <circle cx="95" cy="45" r="4" fill="currentColor" opacity="0.6" className="pulse" />
        <circle cx="90" cy="85" r="4" fill="currentColor" opacity="0.6" className="pulse" />
        <circle cx="30" cy="85" r="4" fill="currentColor" opacity="0.6" className="pulse" />
        <circle cx="25" cy="45" r="4" fill="currentColor" opacity="0.6" className="pulse" />
      </g>
    </svg>
  );
}

export default function WhatWeBuild() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="soluciones" className="px-6 lg:px-8 bg-white py-24 border-t border-gray-200 relative overflow-hidden scroll-mt-20">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[
          { left: 8, top: 15, opacity: 0.3 },
          { left: 22, top: 28, opacity: 0.2 },
          { left: 35, top: 42, opacity: 0.25 },
          { left: 48, top: 12, opacity: 0.3 },
          { left: 62, top: 35, opacity: 0.2 },
          { left: 75, top: 22, opacity: 0.28 },
          { left: 88, top: 48, opacity: 0.24 },
          { left: 15, top: 62, opacity: 0.26 },
          { left: 42, top: 75, opacity: 0.22 },
          { left: 68, top: 68, opacity: 0.3 },
          { left: 85, top: 82, opacity: 0.2 },
          { left: 12, top: 88, opacity: 0.27 },
          { left: 55, top: 55, opacity: 0.23 },
          { left: 78, top: 65, opacity: 0.25 },
          { left: 28, top: 52, opacity: 0.29 },
          { left: 92, top: 18, opacity: 0.21 },
          { left: 5, top: 38, opacity: 0.26 },
          { left: 45, top: 88, opacity: 0.24 },
          { left: 70, top: 8, opacity: 0.28 },
          { left: 38, top: 18, opacity: 0.22 }
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-300 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 relative">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="h-px w-16 bg-gray-300"></div>
            <p className="text-xs tracking-widest text-gray-400 uppercase font-light">
              Lo que construimos
            </p>
          </div>

          <div className="flex items-start justify-between">
            <div className="flex-1 animate-slide-up animate-delay-100">
              <h2 className="text-6xl lg:text-7xl font-light text-black leading-tight mb-1">
                Productos SaaS para
              </h2>
              <p className="text-2xl text-gray-350 font-light leading-tight">
                industrias críticas.
              </p>
            </div>

            <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-light ml-8 animate-fade-in animate-delay-200">
              Plataformas especializadas para verticales donde el fallo no es una opción y la escala es arquitectura.
            </p>
          </div>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border border-gray-200 border-r-0 last:border-r border-b lg:border-b-0
                         p-8 min-h-96 cursor-pointer relative animate-slide-up will-change-transform
                         transition-all duration-500 ease-in-out hover:shadow-2xl ${
                           hoveredIndex === index
                             ? 'bg-black border-black text-white z-10 scale-105'
                             : 'bg-white hover:bg-gray-50'
                         }`}
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: `slideUp 0.8s ease-out forwards`,
              }}
            >
              {/* Icon - Top Right */}
              <div className={`absolute top-6 right-6 text-3xl transition-all duration-500 ease-in-out ${
                hoveredIndex === index ? 'opacity-100 text-white' : 'opacity-40 text-gray-400'
              }`}>
                {solution.icon}
              </div>

              {/* Card Number */}
              <p className={`text-xs tracking-widest uppercase mb-6 font-light transition-all duration-500 ease-in-out ${
                hoveredIndex === index ? 'text-gray-500' : 'text-gray-300'
              }`}>
                0{index + 1}
              </p>

              {/* Diagram - SVG specific to card type */}
              <div className={`mb-8 h-32 flex items-center justify-center transition-all duration-500 ease-in-out ${
                hoveredIndex === index ? 'opacity-20' : 'opacity-100'
              }`}>
                <SVGDiagram type={solution.svgType} />
              </div>

              {/* Title */}
              <h3 className={`text-lg font-light mb-2 leading-tight transition-all duration-500 ease-in-out ${
                hoveredIndex === index ? 'text-white' : 'text-black'
              }`}>
                {solution.title}
              </h3>

              {/* Description - Normal state */}
              <p className={`text-xs mb-8 leading-relaxed font-light transition-all duration-500 ease-in-out ${
                hoveredIndex === index
                  ? 'opacity-0 absolute pointer-events-none'
                  : 'text-gray-600 opacity-100 h-auto'
              }`}>
                {solution.description}
              </p>

              {/* Hover Description - Hidden until hover */}
              <p className={`text-xs mb-8 leading-relaxed font-light transition-all duration-500 ease-in-out ${
                hoveredIndex === index
                  ? 'text-gray-300 opacity-100 h-auto'
                  : 'opacity-0 absolute pointer-events-none h-0'
              }`}>
                {solution.hoverDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 transition-all duration-500">
                {solution.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`inline-block px-2 py-0.5 text-xs font-light rounded-sm transition-all duration-500 ease-in-out border ${
                      hoveredIndex === index
                        ? 'bg-gray-900 text-gray-300 border-gray-700'
                        : 'bg-gray-100 text-gray-600 border-gray-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
