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
    <section className="px-4 sm:px-6 lg:px-8 band band-divider py-12 sm:py-16 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="eyebrow mb-5">Capacidades</div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 sm:mb-8 gap-6 sm:gap-0">
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-ink leading-tight break-words">
                Productos SaaS
              </h2>
              <p className="text-lg sm:text-xl text-ink-muted font-light leading-tight">
                infraestructura de clase mundial.
              </p>
            </div>

            {/* Metrics - Compact */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-12 flex-shrink-0 w-full lg:w-auto">
              <div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-ink">8</p>
                <p className="text-xs text-ink-faint uppercase tracking-widest font-light mt-1 break-words">
                  Capacidades
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-ink">∞</p>
                <p className="text-xs text-ink-faint uppercase tracking-widest font-light mt-1 break-words">
                  Escalabilidad
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-ink">99.9%</p>
                <p className="text-xs text-ink-faint uppercase tracking-widest font-light mt-1 break-words">
                  Disponibilidad
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-ink-muted font-light max-w-2xl leading-relaxed">
            Nuestros productos están construidos con estándares de seguridad, auditabilidad y escala empresarial — sin concesiones.
          </p>
        </div>

        {/* Rejilla continua de borde compartido. Eran dos filas
            escritas a mano con divide-x/divide-y; en una rejilla de 4
            columnas divide-y también pinta la línea superior de los
            items 2-4 de la primera fila, así que salía doblada contra
            el borde del contenedor. El patrón correcto es: el
            contenedor cierra arriba e izquierda, cada celda cierra
            derecha y abajo. Ni líneas dobles ni huecos, y funciona
            igual con 1, 2 o 4 columnas. */}
        <div className="border-t border-l border-hairline overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group border-r border-b border-hairline p-5 sm:p-6 transition-colors duration-300 hover:bg-canvas-lift"
              >
                <div className="text-2xl text-ink-faint mb-3 sm:mb-4 font-light transition-colors duration-300 group-hover:text-accent">
                  {capability.icon}
                </div>
                <h3 className="text-sm font-light text-ink-soft mb-2 leading-tight transition-colors duration-300 group-hover:text-ink">
                  {capability.title}
                </h3>
                <p className="text-xs text-ink-muted font-light leading-relaxed">
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
