import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Cookies() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-32 px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-8">
            Política de Cookies
          </h1>
          <p className="text-gray-500 text-sm mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Se utilizan para recordar tus preferencias y mejorar tu experiencia de navegación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">2. Tipos de Cookies que Usamos</h2>
              <p className="leading-relaxed mt-3">
                <strong className="text-black">Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio.
              </p>
              <p className="leading-relaxed">
                <strong className="text-black">Cookies de Análisis:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio.
              </p>
              <p className="leading-relaxed">
                <strong className="text-black">Cookies de Preferencia:</strong> Recuerdan tus preferencias y configuraciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">3. Control de Cookies</h2>
              <p className="leading-relaxed">
                Puedes controlar y/o eliminar cookies a través de la configuración de tu navegador. La mayoría de navegadores te permiten rechazar cookies o alertarte cuando se envían.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">4. Cookies de Terceros</h2>
              <p className="leading-relaxed">
                Podemos permitir que terceros coloquen cookies en tu dispositivo con fines de análisis y publicidad. Estos terceros tienen sus propias políticas de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">5. Cambios en Esta Política</h2>
              <p className="leading-relaxed">
                Antralit Technologies puede actualizar esta Política de Cookies en cualquier momento. Se recomienda revisar regularmente los cambios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">6. Contacto</h2>
              <p className="leading-relaxed">
                Si tienes preguntas sobre esta Política de Cookies, contacta a: privacy@antralit.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
