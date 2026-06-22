'use client';

import { useEffect } from 'react';

export default function DebugOverflow() {
  useEffect(() => {
    const checkOverflow = () => {
      const vw = window.innerWidth;
      console.log('\n🔍 VERIFICACIÓN DE OVERFLOW\n');
      console.log(`📱 Viewport width: ${vw}px`);
      console.log(`📄 Document width: ${document.documentElement.scrollWidth}px\n`);

      const problems: any[] = [];

      // Buscar todas las secciones
      document.querySelectorAll('section, main, [role="main"]').forEach((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const scrollWidth = element.scrollWidth;

        if (scrollWidth > vw) {
          problems.push({
            elemento: element.tagName,
            clase: element.className.substring(0, 60),
            scrollWidth,
            exceso: scrollWidth - vw
          });

          console.log(`❌ ${element.tagName} OVERFLOW: ${scrollWidth}px (exceso: ${scrollWidth - vw}px)`);
          element.style.outline = '3px solid red';
        }
      });

      if (problems.length === 0) {
        console.log('✅ NO HAY OVERFLOW - Sitio responsive correcto\n');
      } else {
        console.log(`\n❌ ${problems.length} elementos con overflow:\n`);
        console.table(problems);
      }
    };

    setTimeout(checkOverflow, 500);
    window.addEventListener('resize', () => setTimeout(checkOverflow, 500));
  }, []);

  return null;
}
