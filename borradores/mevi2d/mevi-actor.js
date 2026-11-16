/* Mevi animada por fotogramas ilustrados · mediaservi.com · GPL-3.0
   Tres movimientos: andar (ciclo de 8), saludar y señalar (8 cada uno).
   Fluidez: entre un fotograma y el siguiente se funde el siguiente durante el último tramo,
   así 8 dibujos se ven como un movimiento continuo. No se gira ni se estira la imagen.
   const m = MEVI.crea(contenedor, { ruta:'img/', alto:140, modo:'paseo'|'conecta'|'museo' }) */
(function () {
  'use strict';
  // entra: fotogramas de subida (una vez) · bucle: vaivén · sale: vuelta al reposo
  const SEC = {
    reposo: { bucle: ['saluda1'], fps: 1 },
    andar: { bucle: ['andar1', 'andar2', 'andar3', 'andar4', 'andar5', 'andar6', 'andar7', 'andar8'], fps: 9 },
    saluda: { entra: ['saluda1', 'saluda2'], bucle: ['saluda3', 'saluda7', 'saluda5', 'saluda6', 'saluda2', 'saluda8', 'saluda4', 'saluda8', 'saluda2', 'saluda6', 'saluda5', 'saluda7'], sale: ['saluda2', 'saluda1'], fps: 9, dura: 3.2 },
    senala: { entra: ['senala1', 'senala2', 'senala3', 'senala4'], bucle: ['senala6', 'senala5', 'senala8', 'senala7', 'senala4', 'senala7', 'senala8', 'senala5'], sale: ['senala3', 'senala2', 'senala1'], fps: 7, dura: 3.4 }
  };
  const MODOS = {
    paseo: { gestos: ['saluda', 'saluda', 'senala'], anda: true, cada: [5, 9] },
    conecta: { gestos: ['senala', 'saluda', 'senala'], anda: false, cada: [2, 4] },
    museo: { gestos: ['senala', 'saluda', 'senala'], anda: false, cada: [1.5, 3] }
  };
  const PROP = 282 / 325;
  const suave = t => t * t * (3 - 2 * t);

  function crea(caja, op) {
    op = Object.assign({ ruta: 'img/', ext: '.webp', alto: 140, modo: 'paseo', margen: 0.02, fundido: 0.45 }, op || {});
    const M = MODOS[op.modo] || MODOS.paseo;
    const raiz = document.createElement('div');
    raiz.className = 'mevi-actor'; raiz.setAttribute('aria-hidden', 'true');
    Object.assign(raiz.style, { position: 'absolute', left: '0', bottom: '0', height: op.alto + 'px', width: (op.alto * PROP) + 'px', pointerEvents: 'none', willChange: 'transform' });
    const capa = document.createElement('div');
    Object.assign(capa.style, { position: 'absolute', inset: '0' });
    raiz.appendChild(capa); caja.appendChild(raiz);
    const img = {};
    const nombres = new Set();
    Object.values(SEC).forEach(s => ['entra', 'bucle', 'sale'].forEach(k => (s[k] || []).forEach(n => nombres.add(n))));
    nombres.forEach(n => {
      const i = new Image(); i.decoding = 'async'; i.alt = ''; i.draggable = false; i.src = op.ruta + 'mevi-' + n + op.ext;
      Object.assign(i.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 100%', opacity: '0', zIndex: '0' });
      capa.appendChild(i); img[n] = i;
    });
    // Enseña el fotograma a con el b encima a opacidad k
    let pa = null, pb = null;
    function pinta(a, b, k) {
      if (pa && pa !== a && pa !== b) img[pa].style.opacity = '0';
      if (pb && pb !== a && pb !== b) img[pb].style.opacity = '0';
      img[a].style.opacity = '1'; img[a].style.zIndex = '1';
      if (b && b !== a) { img[b].style.opacity = k.toFixed(3); img[b].style.zIndex = '2'; }
      pa = a; pb = b;
    }
    const azar = (a, b) => a + Math.random() * (b - a);
    const S = { lista: [], fps: 9, t: 0, bucle: false, x: op.x != null ? op.x : 0.1, dir: 1, anda: false, espera: 2, gesto: null, fase: '', tg: 0, parado: false, ant: 'saluda1' };
    function pon(lista, fps, bucle) { S.lista = lista; S.fps = fps; S.bucle = bucle; S.t = 0; }
    function andar() { S.anda = true; S.gesto = null; pon(SEC.andar.bucle, SEC.andar.fps, true); S.espera = azar(M.cada[0], M.cada[1]); }
    function reposo() { S.anda = false; S.gesto = null; pon(SEC.reposo.bucle, 1, true); S.espera = azar(M.cada[0], M.cada[1]); }
    function gesto(g) {
      const q = SEC[g]; S.anda = false; S.gesto = g; S.fase = 'entra'; S.tg = 0;
      // del paseo (de perfil) al gesto (de frente) se pasa con un fundido
      pon([S.ant].concat(q.entra), q.fps, false);
    }
    function siguiente() {
      if (!S.gesto) return;
      const q = SEC[S.gesto];
      if (S.fase === 'entra') { S.fase = 'bucle'; pon(q.bucle, q.fps, true); }
      else if (S.fase === 'sale') { M.anda ? andar() : reposo(); }
    }
    M.anda ? andar() : reposo();

    let ult = performance.now(), raf = 0;
    function paso(ahora) {
      raf = requestAnimationFrame(paso);
      const dt = Math.min(0.05, (ahora - ult) / 1000); ult = ahora;
      if (S.parado || document.hidden) return;
      S.t += dt;
      const L = S.lista, n = L.length;
      const pos = S.t * S.fps;
      let i = Math.floor(pos);
      const f = pos - i;
      if (!S.bucle && i >= n - 1) { pinta(L[n - 1], null, 0); S.ant = L[n - 1]; siguiente(); }
      else {
        const a = L[i % n], b = L[(i + 1) % n];
        const k = f > 1 - op.fundido ? suave((f - (1 - op.fundido)) / op.fundido) : 0;
        pinta(a, b, k); S.ant = a;
      }
      if (S.gesto && S.fase === 'bucle') {
        S.tg += dt;
        if (S.tg >= SEC[S.gesto].dura) { S.fase = 'sale'; pon([S.ant].concat(SEC[S.gesto].sale), SEC[S.gesto].fps, false); }
      }
      const W = caja.clientWidth || 1, w = raiz.offsetWidth;
      if (S.anda) {
        S.x += S.dir * dt * (op.alto * 0.62) / W;
        const lim1 = op.margen, lim2 = 1 - op.margen - w / W;
        if (S.x > lim2) { S.x = lim2; S.dir = -1; }
        if (S.x < lim1) { S.x = lim1; S.dir = 1; }
      }
      if (!S.gesto) { S.espera -= dt; if (S.espera <= 0) gesto(M.gestos[Math.floor(Math.random() * M.gestos.length)]); }
      raiz.style.transform = 'translate3d(' + (S.x * W).toFixed(1) + 'px,0,0)';
      capa.style.transform = (S.anda && S.dir < 0) ? 'scaleX(-1)' : 'none';
    }
    raf = requestAnimationFrame(paso);
    return {
      raiz, gesto: g => SEC[g] && SEC[g].entra && gesto(g),
      para() { S.parado = true; }, sigue() { S.parado = false; ult = performance.now(); },
      quita() { cancelAnimationFrame(raf); raiz.remove(); }
    };
  }
  window.MEVI = { crea, SEC };
})();
