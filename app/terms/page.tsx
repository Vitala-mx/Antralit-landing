import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-32 px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-8">
            Términos y Condiciones
          </h1>
          <p className="text-gray-500 text-sm mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">1. Aceptación de Términos</h2>
              <p className="leading-relaxed">
                Al acceder y utilizar este sitio web, aceptas estar vinculado por estos Términos y Condiciones. Si no aceptas estos términos, por favor no utilices este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">2. Licencia de Uso</h2>
              <p className="leading-relaxed">
                Antralit Technologies te otorga una licencia limitada, no exclusiva, revocable para acceder y utilizar este sitio web para propósitos legales. Está prohibido:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Reproducir o duplicar contenido sin permiso</li>
                <li>Usar el sitio para fines ilegales o no autorizados</li>
                <li>Acceder sin autorización a sistemas o redes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">3. Descargo de Responsabilidad</h2>
              <p className="leading-relaxed">
                Este sitio se proporciona "tal como está". Antralit Technologies no garantiza que el sitio esté libre de errores o que funcione sin interrupciones. No somos responsables por daños derivados del uso o imposibilidad de usar este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">4. Limitación de Responsabilidad</h2>
              <p className="leading-relaxed">
                En la máxima medida permitida por la ley, Antralit Technologies no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso de este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">5. Modificaciones</h2>
              <p className="leading-relaxed">
                Antralit Technologies se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor cuando se publiquen en el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mt-8 mb-4">6. Contacto</h2>
              <p className="leading-relaxed">
                Para preguntas sobre estos Términos y Condiciones, contacta a: legal@antralit.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
