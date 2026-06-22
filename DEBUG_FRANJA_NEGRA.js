// 🔍 SCRIPT DE DEBUG PARA ENCONTRAR LA FRANJA NEGRA
// Ejecuta esto en la consola del navegador (F12 > Console > pega esto)

console.log('🔍 INICIANDO BÚSQUEDA DE OVERFLOW...\n');

const vw = window.innerWidth;
const vh = window.innerHeight;

console.log(`📱 Viewport: ${vw}x${vh}`);
console.log(`📄 Document width: ${document.documentElement.clientWidth}`);
console.log(`📄 Document scroll width: ${document.documentElement.scrollWidth}\n`);

const overflowElements = [];

document.querySelectorAll('*').forEach((el) => {
  const rect = el.getBoundingClientRect();
  const scrollWidth = el.scrollWidth;
  const clientWidth = el.clientWidth;
  const offsetWidth = el.offsetWidth;

  // Criterio 1: scrollWidth > viewport width
  if (scrollWidth > vw) {
    overflowElements.push({
      elemento: el,
      tag: el.tagName,
      clase: el.className,
      id: el.id,
      scrollWidth: scrollWidth,
      clientWidth: clientWidth,
      offsetWidth: offsetWidth,
      rectRight: Math.round(rect.right),
      exceso: scrollWidth - vw + 'px',
      problema: 'scrollWidth > vw'
    });
  }

  // Criterio 2: element extends beyond viewport
  if (rect.right > vw + 5) {
    if (!overflowElements.find(e => e.elemento === el)) {
      overflowElements.push({
        elemento: el,
        tag: el.tagName,
        clase: el.className,
        id: el.id,
        scrollWidth: scrollWidth,
        clientWidth: clientWidth,
        offsetWidth: offsetWidth,
        rectRight: Math.round(rect.right),
        exceso: Math.round(rect.right - vw) + 'px',
        problema: 'element rect.right > vw'
      });
    }
  }
});

console.log(`\n❌ ELEMENTOS CON OVERFLOW DETECTADOS: ${overflowElements.length}\n`);

if (overflowElements.length === 0) {
  console.log('✅ NO HAY OVERFLOW VISIBLE');
} else {
  overflowElements.forEach((item, index) => {
    console.log(`\n[${index + 1}] ${item.tag} ${item.clase ? '.' + item.clase.split(' ')[0] : ''} ${item.id ? '#' + item.id : ''}`);
    console.log(`    Problema: ${item.problema}`);
    console.log(`    scrollWidth: ${item.scrollWidth}px (viewport: ${vw}px)`);
    console.log(`    Exceso: ${item.exceso}`);
    console.log(`    Contenido: ${item.elemento.innerHTML.substring(0, 80)}`);

    // Marcar visualmente
    item.elemento.style.outline = '3px solid red';
    item.elemento.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
  });

  console.log('\n\n📌 ELEMENTOS MARCADOS EN ROJO EN LA PÁGINA');
  console.log('💾 DETALLES COPIADOS - Pega esta información al reportar:');
  console.table(overflowElements.map(e => ({
    'Tag': e.tag,
    'Clase': e.clase.substring(0, 40),
    'scrollWidth': e.scrollWidth + 'px',
    'Viewport': vw + 'px',
    'Exceso': e.exceso,
    'Problema': e.problema
  })));
}

// Búsqueda adicional de elementos con background oscuro
console.log('\n\n🎨 BUSCANDO ELEMENTOS CON FONDO OSCURO...\n');

const darkElements = [];
document.querySelectorAll('*').forEach(el => {
  const bgColor = window.getComputedStyle(el).backgroundColor;
  const rect = el.getBoundingClientRect();

  // Si es negro o muy oscuro Y ocupa espacio horizontal
  if (bgColor.includes('rgb') && (bgColor === 'rgb(0, 0, 0)' || bgColor === 'rgba(0, 0, 0, 1)')) {
    if (el.scrollWidth > 100 && el.offsetHeight > 100) {
      darkElements.push({
        elemento: el,
        tag: el.tagName,
        clase: el.className,
        scrollWidth: el.scrollWidth,
        offsetWidth: el.offsetWidth,
        rectRight: Math.round(rect.right)
      });
    }
  }
});

if (darkElements.length > 0) {
  console.log(`⚫ ENCONTRADOS ${darkElements.length} ELEMENTOS OSCUROS GRANDES:\n`);
  darkElements.forEach((item, i) => {
    console.log(`[${i + 1}] ${item.tag} | ancho: ${item.scrollWidth}px | rect.right: ${item.rectRight}px`);
  });
}

console.log('\n\n✅ DEBUG COMPLETADO');
console.log('📸 Los elementos rojos en la página muestran el overflow');
