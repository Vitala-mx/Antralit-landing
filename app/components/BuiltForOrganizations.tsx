'use client';

import { useEffect, useRef, useState } from 'react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: '▦',
    title: 'Arquitectura Empresarial',
    description: 'Sistemas diseñados para escala institucional, regulatorio exigente y entornos donde el tiempo de inactividad no es tolerable.'
  },
  {
    icon: '◉',
    title: 'Seguridad como Fundamento',
    description: 'Zero Trust por defecto. Modelos de amenazas integrados en el proceso de desarrollo, no añadidos después del hecho.'
  },
  {
    icon: '⬈',
    title: 'Escalabilidad por Diseño',
    description: 'Infraestructura construida horizontalmente desde el primer sprint. Crece con su organización sin refactorizaciones costosas.'
  },
  {
    icon: '⚲',
    title: 'Centrado en el Operador',
    description: 'Interfaces diseñadas para personas reales bajo presión real. La claridad no es un lujo cuando las decisiones importan.'
  }
];

interface CounterProps {
  end: number;
  suffix: string;
  decimals: number;
}

function AnimatedCounter({ end, suffix, decimals }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1200;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      current = Math.min(increment * stepCount, end);
      setCount(current);

      if (stepCount >= steps) {
        clearInterval(interval);
        setCount(end);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, end]);

  const displayValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count);

  return (
    <p
      ref={ref}
      className="text-5xl lg:text-6xl font-light text-black mb-3 transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(16px)',
      }}
    >
      {displayValue}{suffix}
    </p>
  );
}

export default function BuiltForOrganizations() {
  return (
    <section id="nosotros" className="px-6 lg:px-8 bg-white py-20 border-t border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-8 bg-gray-300"></div>
            <p className="text-xs tracking-widest text-gray-500 uppercase font-light">
              Por qué Antralit
            </p>
          </div>

          <div className="max-w-3xl mb-8 animate-slide-up animate-delay-100">
            <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-3">
              Arquitectura de Producto
            </h2>
            <p className="text-xl text-gray-350 font-light leading-relaxed">
              sin concesiones.
            </p>
          </div>

          <p className="text-base text-gray-500 font-light max-w-2xl animate-fade-in animate-delay-200">
            Nuestros productos están diseñados para verticales donde el downtime es crítico, la seguridad no es negociable y la escala es fundamental.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 pb-20 border-b border-gray-200">
          <div>
            <AnimatedCounter end={4} suffix="+" decimals={0} />
            <p className="text-xs tracking-widest text-gray-500 uppercase font-light">
              Verticales de Industria
            </p>
          </div>
          <div>
            <AnimatedCounter end={100} suffix="%" decimals={0} />
            <p className="text-xs tracking-widest text-gray-500 uppercase font-light">
              Zero Trust
            </p>
          </div>
          <div>
            <AnimatedCounter end={99.9} suffix="%" decimals={1} />
            <p className="text-xs tracking-widest text-gray-500 uppercase font-light">
              SLA Objetivo
            </p>
          </div>
          <div>
            <AnimatedCounter end={0} suffix="" decimals={0} />
            <p className="text-xs tracking-widest text-gray-500 uppercase font-light">
              Concesiones
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 hover:border-gray-400 transition duration-300">
              {/* Icon */}
              <div className="mb-6 text-2xl text-gray-600 font-light">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-light text-black mb-3 leading-tight">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
