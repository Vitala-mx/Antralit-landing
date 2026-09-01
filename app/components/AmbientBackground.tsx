'use client';

import { useEffect, useRef } from 'react';

/**
 * Fondo ambiental del sitio.
 *
 * Se monta una sola vez en el layout y vive fijo detrás de todo el
 * documento (z-index -10), así que todas las secciones translúcidas de
 * arriba lo dejan pasar. Antes la página era #ffffff plano de principio
 * a fin: el contenido estaba bien, pero no había ninguna profundidad
 * sobre la que apoyarse.
 *
 * Todo el aspecto vive en globals.css (.ambient-*). Aquí solo está lo
 * que el CSS no puede saber: dónde está el cursor. Se escribe en las
 * variables --mx/--my y el foco de luz las lee — nunca se re-renderiza
 * React por mover el ratón, que es lo que convertiría un detalle bonito
 * en un problema de rendimiento.
 */
export default function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sin puntero fino (móvil/tablet) no hay foco que seguir, y en
    // movimiento reducido tampoco: se ahorra el listener por completo.
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || still) return;

    let frame = 0;
    let pending: { x: number; y: number } | null = null;

    const paint = () => {
      frame = 0;
      if (!pending || !rootRef.current) return;
      rootRef.current.style.setProperty('--mx', `${pending.x}px`);
      rootRef.current.style.setProperty('--my', `${pending.y}px`);
      spotRef.current?.classList.add('is-active');
      pending = null;
    };

    // Se coalescen los eventos en un solo frame: pointermove dispara
    // decenas de veces por segundo y solo interesa la última posición.
    const onMove = (e: PointerEvent) => {
      pending = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => spotRef.current?.classList.remove('is-active');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // El <i> interior de cada masa no es decorativo por capricho: el
  // contenedor lleva la deriva y el hijo la deformación, y separarlos
  // permite que las dos animaciones corran a ritmos distintos sin
  // pisarse la propiedad transform.
  return (
    <div ref={rootRef} className="ambient-root" aria-hidden="true">
      <div className="lg-base" />

      <div className="lg-blob lg-blob-1"><i /></div>
      <div className="lg-blob lg-blob-2"><i /></div>
      <div className="lg-blob lg-blob-3"><i /></div>
      <div className="lg-blob lg-blob-4"><i /></div>

      <div className="lg-grid" />

      <div className="lg-pane lg-pane-1" />
      <div className="lg-pane lg-pane-2" />
      <div className="lg-pane lg-pane-3" />

      <div ref={spotRef} className="ambient-spotlight" />
      <div className="ambient-vignette" />
    </div>
  );
}
