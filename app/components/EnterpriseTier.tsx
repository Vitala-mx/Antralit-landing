'use client';

interface Capability {
  icon: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: '▦',
    title: 'Plataformas SaaS',
    description: 'Productos multi-tenant construidos para escala, rendimiento y fiabilidad. Software empresarial en producción.'
  },
  {
    icon: '◉',
    title: 'Soluciones de Salud',
    description: 'Plataformas especializadas para detección temprana, monitoreo y atención preventiva.'
  },
  {
    icon: '⬡',
    title: 'Inteligencia Artificial',
    description: 'Modelos predictivos y sistemas de automatización integrados en nuestros productos.'
  },
  {
    icon: '⚲',
    title: 'Infraestructura Cloud',
    description: 'Arquitecturas resilientes y optimizadas para alta disponibilidad y escalabilidad global.'
  },
  {
    icon: '▤',
    title: 'Analítica Avanzada',
    description: 'Motor de datos que extrae inteligencia real de información compleja en tiempo real.'
  },
  {
    icon: '⊞',
    title: 'APIs y Integraciones',
    description: 'Interfaces seguras y documentadas para conectar ecosistemas empresariales.'
  },
  {
    icon: '⊠',
    title: 'Aplicaciones Empresariales',
    description: 'Soluciones nativas y multiplataforma diseñadas para operaciones críticas.'
  },
  {
    icon: '+',
    title: 'Seguridad Zero Trust',
    description: 'Arquitectura de seguridad integrada desde el diseño, no agregada después.'
  }
];

export default function EnterpriseTier() {
  return (
    <section className="px-6 lg:px-8 bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gray-300"></div>
            <p className="text-xs tracking-widest text-gray-400 uppercase font-light">
              Capacidades
            </p>
          </div>

          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight">
                Productos SaaS
              </h2>
              <p className="text-xl text-gray-350 font-light leading-tight">
                infraestructura de clase mundial.
              </p>
            </div>

            {/* Metrics - Compact */}
            <div className="flex gap-12 ml-8">
              <div>
                <p className="text-2xl lg:text-3xl font-light text-black">8</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-light mt-1">
                  Capacidades Core
                </p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-light text-black">∞</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-light mt-1">
                  Escalabilidad
                </p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-light text-black">99.9%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-light mt-1">
                  Disponibilidad
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 font-light max-w-2xl">
            Nuestros productos están construidos con estándares de seguridad, auditabilidad y escala empresarial — sin concesiones.
          </p>
        </div>

        {/* Grid Continua - Bordes Compartidos */}
        <div className="border border-gray-200">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-gray-200">
            {capabilities.slice(0, 4).map((capability, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition duration-200">
                <div className="text-2xl text-gray-600 mb-4 font-light">{capability.icon}</div>
                <h3 className="text-sm font-light text-black mb-2 leading-tight">
                  {capability.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {capabilities.slice(4, 8).map((capability, index) => (
              <div key={index + 4} className="p-6 hover:bg-gray-50 transition duration-200">
                <div className="text-2xl text-gray-600 mb-4 font-light">{capability.icon}</div>
                <h3 className="text-sm font-light text-black mb-2 leading-tight">
                  {capability.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
