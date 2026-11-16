/* Mevi animada por fotogramas ilustrados · mediaservi.com · GPL-3.0
   Sin girar ni estirar la imagen: cada movimiento es una secuencia de dibujos (andar en 8 fotogramas,
   saludar y «ven, pulsa» en 3–4) y entre un gesto y otro hay un fundido corto.
   const m = MEVI.crea(contenedor, { ruta:'img/', alto:140, modo:'paseo'|'conecta'|'museo' }) */
(function () {
  'use strict';
  // Secuencias: fotogramas (nombres de archivo) y fotogramas por segundo; bucle o una vez
  const SEC = {
    reposo: { f: ['reposo'], fps: 1 },
    andar: { f: ['andar1', 'andar2', 'andar3', 'andar4', 'andar5', 'andar6', 'andar7', 'andar8'], fps: 9, bucle: true },
    saluda: { f: ['saluda3', 'saluda1', 'saluda2', 'saluda1', 'saluda2', 'saluda1', 'saluda2', 'saluda3'], fps: 6 },
    invita: { f: ['invita1', 'invita2', 'invita3', 'invita4', 'invita3', 'invita2', 'invita1', 'invita2', 'invita3', 'invita4', 'invita3', 'invita2'], fps: 7 },
    pulgar: { f: ['pulgar'], fps: 1, dura: 1.8 },
    senala: { f: ['senala'], fps: 1, dura: 2.2 },
    celebra: { f: ['celebra'], fps: 1, dura: 1.2, salto: true }
  };
  const MODOS = {
    paseo: { gestos: ['saluda', 'pulgar', 'celebra', 'saluda', 'invita'], anda: true, cada: [5, 9] },
    conecta: { gestos: ['senala', 'saluda', 'senala', 'pulgar'], anda: false, cada: [2.5, 4.5] },
    museo: { gestos: ['invita', 'invita', 'senala', 'saluda'], anda: false, cada: [1.5, 3] }
  };
  const PROP = 640 / 760;   // proporción del lienzo de cada fotograma

  function crea(caja, op) {
    op = Object.assign({ ruta: 'img/', ext: '.webp', alto: 140, modo: 'paseo', margen: 0.02, mira: 1 }, op || {});
    const M = MODOS[op.modo] || MODOS.paseo;
    const raiz = document.createElement('div');
    raiz.className = 'mevi-actor'; raiz.setAttribute('aria-hidden', 'true');
    Object.assign(raiz.style, { position: 'absolute', left: '0', bottom: '0', height: op.alto + 'px', width: (op.alto * PROP) + 'px', pointerEvents: 'none', willChange: 'transform' });
    const capa = document.createElement('div');
    Object.assign(capa.style, { position: 'absolute', inset: '0' });
    raiz.appendChild(capa); caja.appendChild(raiz);
    // Todas las imágenes precargadas y apiladas; se enseña una
    const img = {};
    const nombres = new Set(); Object.values(SEC).forEach(s => s.f.forEach(n => nombres.add(n)));
    nombres.forEach(n => {
      const i = new Image(); i.decoding = 'async'; i.alt = ''; i.draggable = false; i.src = op.ruta + 'mevi-' + n + op.ext;
      Object.assign(i.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 100%', opacity: '0' });
      capa.appendChild(i); img[n] = i;
    });
    let visible = null;
    function muestra(n, fundido) {
      if (n === visible) return;
      const a = img[visible], b = img[n];
      const tr = fundido ? 'opacity .14s linear' : 'none';
      b.style.transition = tr; if (a) a.style.transition = tr;
      b.style.opacity = '1'; if (a) a.style.opacity = '0';
      visible = n;
    }
    const azar = (a, b) => a + Math.random() * (b - a);
    const S = { sec: 'reposo', t: 0, x: op.x != null ? op.x : 0.1, dir: 1, espera: 1.5, parado: false };
    function pon(sec) { S.sec = sec; S.t = 0; muestra(SEC[sec].f[0], true); }
    function duracion(s) { const q = SEC[s]; return q.dura || q.f.length / q.fps; }
    if (M.anda) { pon('andar'); S.espera = azar(3, 6); } else { pon('reposo'); }

    let ult = performance.now(), raf = 0;
    function paso(ahora) {
      raf = requestAnimationFrame(paso);
      const dt = Math.min(0.05, (ahora - ult) / 1000); ult = ahora;
      if (S.parado || document.hidden) return;
      S.t += dt;
      const q = SEC[S.sec];
      const i = q.bucle ? Math.floor(S.t * q.fps) % q.f.length : Math.min(q.f.length - 1, Math.floor(S.t * q.fps));
      muestra(q.f[i], false);
      const W = caja.clientWidth || 1, w = raiz.offsetWidth;
      let y = 0;
      if (S.sec === 'andar') {
        // avanza a la velocidad del paso
        S.x += S.dir * dt * (op.alto * 0.55) / W;
        const lim1 = op.margen, lim2 = 1 - op.margen - w / W;
        if (S.x > lim2) { S.x = lim2; S.dir = -1; }
        if (S.x < lim1) { S.x = lim1; S.dir = 1; }
        S.espera -= dt;
        if (S.espera <= 0) pon(M.gestos[Math.floor(Math.random() * M.gestos.length)]);
      } else if (S.sec === 'reposo') {
        S.espera -= dt;
        if (S.espera <= 0) pon(M.gestos[Math.floor(Math.random() * M.gestos.length)]);
      } else {
        if (q.salto) y = -Math.sin(Math.min(1, S.t / duracion(S.sec)) * Math.PI) * op.alto * 0.18;
        if (S.t >= duracion(S.sec)) {
          if (M.anda) { pon('andar'); S.espera = azar(M.cada[0], M.cada[1]); }
          else { pon('reposo'); S.espera = azar(M.cada[0], M.cada[1]); }
        }
      }
      const mira = S.sec === 'andar' ? S.dir : 1;
      raiz.style.transform = 'translate3d(' + (S.x * W).toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
      capa.style.transform = mira < 0 ? 'scaleX(-1)' : 'none';
    }
    raf = requestAnimationFrame(paso);
    return {
      raiz, gesto: s => SEC[s] && pon(s),
      para() { S.parado = true; }, sigue() { S.parado = false; ult = performance.now(); },
      quita() { cancelAnimationFrame(raf); raiz.remove(); }
    };
  }
  window.MEVI = { crea, SEC };
})();
