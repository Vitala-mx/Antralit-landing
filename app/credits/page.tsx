import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Credits() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-light text-ink leading-tight mb-8">
            Licencias y Créditos
          </h1>
          <p className="text-ink-faint text-sm mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none text-ink-soft font-light leading-relaxed space-y-6">
            <section>
              <h2 className="text-2xl font-light text-ink mt-8 mb-4">Tecnologías Utilizadas</h2>
              <p className="leading-relaxed">
                Este sitio web fue desarrollado utilizando tecnologías modernas y de código abierto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-ink mt-8 mb-4">Frontend</h2>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong className="text-ink">Next.js</strong> - Framework React con SSR (MIT License)</li>
                <li><strong className="text-ink">React</strong> - Librería UI (MIT License)</li>
                <li><strong className="text-ink">Tailwind CSS</strong> - Framework CSS (MIT License)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-ink mt-8 mb-4">Fuentes</h2>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong className="text-ink">Space Grotesk</strong> - Tipografía de Google Fonts (OFL License)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-ink mt-8 mb-4">Licencias de Código Abierto</h2>
              <p className="leading-relaxed mt-3">
                Este proyecto utiliza código de terceros bajo las siguientes licencias de código abierto:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>MIT License</li>
                <li>Open Font License (OFL)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Para obtener copias completas de estas licencias, consulta los archivos LICENSE en los repositorios de cada proyecto respectivo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-ink mt-8 mb-4">Créditos</h2>
              <p className="leading-relaxed">
                Este sitio web fue desarrollado por Antralit Technologies. Agradecemos a todos los desarrolladores de las librerías y frameworks de código abierto que hicieron posible este proyecto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-ink mt-8 mb-4">Atribuciones</h2>
              <p className="leading-relaxed">
                Todos los logotipos, marcas registradas y nombres de productos mencionados en este sitio son propiedad de sus respectivos dueños.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-ink mt-8 mb-4">Contacto</h2>
              <p className="leading-relaxed">
                Para preguntas sobre licencias y créditos, contacta a: legal@antralit.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
