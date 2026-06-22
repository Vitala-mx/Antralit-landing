import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-32 px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-8">
            Aviso de Privacidad
          </h1>
          <p className="text-gray-500 text-sm mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">1. Introducción</h2>
              <p className="leading-relaxed">
                Antralit Technologies ("nosotros", "nuestro", "Antralit") está comprometido con la protección de tu privacidad. Este Aviso de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">2. Información que Recopilamos</h2>
              <p className="leading-relaxed">
                Podemos recopilar información sobre ti de varias maneras, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Información que proporcionas voluntariamente a través de formularios</li>
                <li>Información de tu dispositivo y navegación</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">3. Cómo Usamos tu Información</h2>
              <p className="leading-relaxed">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Comunicarnos contigo</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">4. Protección de Datos</h2>
              <p className="leading-relaxed">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">5. Contacto</h2>
              <p className="leading-relaxed">
                Si tienes preguntas sobre este Aviso de Privacidad, puedes contactarnos en: privacy@antralit.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
