'use client';

import Link from 'next/link';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  const footerLink = "text-gray-400 text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block";

  return (
    <footer className="bg-black text-white border-t border-gray-900 overflow-x-hidden">
      {/* Main Footer */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12">
            {/* Columna 1 - Empresa */}
            <div>
              <img
                src="/logo.png"
                alt="Antralit Logo"
                className="h-8 w-auto mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
                Infraestructura digital para el futuro. Software empresarial para organizaciones donde fallar no es una opción.
              </p>
            </div>

            {/* Columna 2 - Soluciones */}
            <div>
              <h4 className="text-xs tracking-widest uppercase font-light mb-6 text-gray-300">
                Soluciones
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#soluciones" className={footerLink}>
                    Software para Salud
                  </a>
                </li>
                <li>
                  <a href="#soluciones" className={footerLink}>
                    Plataformas Financieras
                  </a>
                </li>
                <li>
                  <a href="#soluciones" className={footerLink}>
                    Sistemas de Seguridad
                  </a>
                </li>
                <li>
                  <a href="#soluciones" className={footerLink}>
                    Inteligencia Artificial
                  </a>
                </li>
                <li>
                  <a href="#soluciones" className={footerLink}>
                    Infraestructura Empresarial
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3 - Compañía */}
            <div>
              <h4 className="text-xs tracking-widest uppercase font-light mb-6 text-gray-300">
                Compañía
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#nosotros" className={footerLink}>
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#tecnologia" className={footerLink}>
                    Tecnología
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@antralit.com" className={footerLink}>
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/antralit-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLink}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4 - Legal */}
            <div>
              <h4 className="text-xs tracking-widest uppercase font-light mb-6 text-gray-300">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className={footerLink}>
                    Aviso de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={footerLink}>
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className={footerLink}>
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className={footerLink}>
                    Aviso Legal
                  </Link>
                </li>
                <li>
                  <Link href="/credits" className={footerLink}>
                    Licencias y Créditos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-900 my-12"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <p className="text-gray-500 text-xs font-light">
              © {currentYear} Antralit Technologies. Todos los derechos reservados.
            </p>
            <div className="flex items-center">
              <a
                href="https://linkedin.com/company/antralit-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm font-light transition-all duration-300 hover:translate-x-1 inline-block hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
