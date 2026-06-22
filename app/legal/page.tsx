import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Legal() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-32 px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-8">
            Aviso Legal
          </h1>
          <p className="text-gray-500 text-sm mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">1. Identificación de la Empresa</h2>
              <p className="leading-relaxed">
                Antralit Technologies es una empresa dedicada al desarrollo de plataformas SaaS y software empresarial. Todos los derechos reservados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">2. Propiedad Intelectual</h2>
              <p className="leading-relaxed">
                Todo el contenido de este sitio web, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de Antralit Technologies o de sus proveedores de contenido y está protegido por leyes de derechos de autor internacionales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">3. Restricciones de Uso</h2>
              <p className="leading-relaxed">
                Se prohíbe reproducir, duplicar, copiar, vender, revender o explotar cualquier porción de este sitio sin permiso expreso de Antralit Technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">4. Enlaces Externos</h2>
              <p className="leading-relaxed">
                Este sitio puede contener enlaces a sitios de terceros. Antralit Technologies no es responsable del contenido, precisión o prácticas de privacidad de estos sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">5. Limitación de Responsabilidad</h2>
              <p className="leading-relaxed">
                Antralit Technologies no garantiza la exactitud, integridad o puntualidad de la información en este sitio. El acceso y uso de este sitio es bajo tu propio riesgo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">6. Jurisdicción</h2>
              <p className="leading-relaxed">
                Este Aviso Legal se rige por las leyes aplicables en la jurisdicción de operación de Antralit Technologies. Cualquier disputa será resuelta en los tribunales competentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">7. Contacto</h2>
              <p className="leading-relaxed">
                Para consultas legales, contacta a: legal@antralit.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
