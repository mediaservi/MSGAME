/* Mevi animada con poses ilustradas · mediaservi.com · GPL-3.0
   Cada pose es una imagen recortada (fondo transparente). Mevi cambia de pose con un pequeño rebote,
   respira en reposo, saluda moviendo la mano, da saltitos al andar y pasea de lado a lado.
   const m = MEVI.crea(contenedor, { ruta:'img/', alto:120, modo:'paseo'|'conecta'|'museo' });
   m.pose('saluda') · m.para() · m.sigue() */
(function () {
  'use strict';
  const POSES = ['reposo', 'saluda', 'senala', 'invita', 'pulgar', 'celebra', 'andar1', 'andar2'];
  // Ancla de cada pose (fracción del ancho desde la izquierda donde están los pies) para que no "salte" al cambiar
  const MODOS = {
    // Portada: pasea por la franja y de vez en cuando se para y hace un gesto mirando al público
    paseo: { gestos: ['saluda', 'pulgar', 'celebra', 'saluda', 'invita'], anda: true, cada: [5, 9] },
    // Conecta: quieta junto a las redes; señala y saluda de vez en cuando
    conecta: { gestos: ['senala', 'saluda', 'senala', 'pulgar'], anda: false, cada: [3.5, 6] },
    // Museo: invita a pulsar
    museo: { gestos: ['invita', 'senala', 'invita', 'saluda'], anda: false, cada: [3, 5] }
  };
  const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  function crea(caja, op) {
    op = Object.assign({ ruta: 'img/', ext: '.webp', alto: 140, modo: 'paseo', margen: 0.04 }, op || {});
    const M = MODOS[op.modo] || MODOS.paseo;
    const raiz = document.createElement('div');
    raiz.className = 'mevi-actor';
    raiz.setAttribute('aria-hidden', 'true');
    Object.assign(raiz.style, { position: 'absolute', left: '0', bottom: '0', height: op.alto + 'px', width: (op.alto / 1.2) + 'px', pointerEvents: 'none', willChange: 'transform' });
    const cuerpo = document.createElement('div');
    Object.assign(cuerpo.style, { position: 'absolute', inset: '0', transformOrigin: '50% 100%' });
    const sombra = document.createElement('div');
    Object.assign(sombra.style, { position: 'absolute', left: '22%', right: '22%', bottom: '-3%', height: '7%', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(0,0,0,.45),transparent)' });
    raiz.appendChild(sombra); raiz.appendChild(cuerpo);
    const img = {};
    POSES.forEach(p => {
      const i = new Image(); i.decoding = 'async'; i.alt = ''; i.draggable = false;
      i.src = op.ruta + 'mevi-' + p + op.ext;
      Object.assign(i.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 100%', opacity: p === 'reposo' ? '1' : '0' });
      cuerpo.appendChild(i); img[p] = i;
    });
    caja.appendChild(raiz);

    const S = { pose: 'reposo', antes: 'reposo', tPose: 0, x: 0.5, dir: 1, andando: false, espera: 2, t: 0, parado: false, gesto: 0 };
    function pose(p) {
      if (!img[p] || p === S.pose) return;
      img[S.pose].style.opacity = '0'; img[p].style.opacity = '1';
      S.antes = S.pose; S.pose = p; S.tPose = 0;
    }
    const azar = (a, b) => a + Math.random() * (b - a);
    function cerebro(dt) {
      S.espera -= dt;
      if (S.gesto > 0) { S.gesto -= dt; if (S.gesto <= 0) { S.espera = azar(M.cada[0], M.cada[1]); S.andando = M.anda; } return; }
      if (S.espera <= 0) {
        S.andando = false; S.gesto = 2.6;
        pose(M.gestos[Math.floor(Math.random() * M.gestos.length)]);
        return;
      }
      if (!S.andando && S.pose !== 'reposo') pose('reposo');
    }
    let ult = performance.now(), raf = 0;
    function paso(ahora) {
      raf = requestAnimationFrame(paso);
      const dt = Math.min(0.05, (ahora - ult) / 1000); ult = ahora;
      if (S.parado) return;
      S.t += dt; S.tPose += dt;
      cerebro(dt);
      const W = caja.clientWidth || 1, w = raiz.offsetWidth;
      let sx = 1, sy = 1, y = 0, rot = 0;
      if (S.andando) {
        // andar a saltitos, balanceándose de un pie a otro
        const f = 'andar1';
        if (S.pose !== f) { img[S.pose].style.opacity = '0'; img[f].style.opacity = '1'; S.pose = f; }
        const k = Math.abs(Math.sin(S.t * 3.2 * Math.PI));
        y = -k * op.alto * 0.05; sy = 1 - (1 - k) * 0.03; sx = 1 + (1 - k) * 0.025; rot = Math.sin(S.t * 3.2 * Math.PI) * 4;
        S.x += S.dir * dt * (op.alto * 0.55) / W;
        const m = op.margen, lim1 = m, lim2 = 1 - m - w / W;
        if (S.x > lim2) { S.x = lim2; S.dir = -1; }
        if (S.x < lim1) { S.x = lim1; S.dir = 1; }
      } else {
        // respira; al entrar en una pose, rebote corto (aplasta y estira)
        const r = Math.sin(S.t * 2.1);
        sy = 1 + r * 0.012; sx = 1 - r * 0.008;
        if (S.tPose < 0.35) { const k = S.tPose / 0.35; const b = Math.sin(k * Math.PI) * (1 - k); sy += b * 0.12; sx -= b * 0.08; y = -Math.sin(ease(k) * Math.PI) * op.alto * 0.04; }
        if (S.pose === 'saluda') rot = Math.sin(S.t * 7) * 2.2;          // balanceo del saludo
        if (S.pose === 'celebra') y -= Math.abs(Math.sin(S.t * 5)) * op.alto * 0.12;
        if (S.pose === 'invita') { const k = (Math.sin(S.t * 4) + 1) / 2; rot = -k * 3; sy += k * 0.015; }
        if (S.pose === 'senala') rot = Math.sin(S.t * 3) * 1.2;
      }
      const giro = (S.andando ? S.dir : (op.mira || 1)) < 0 ? -1 : 1;
      raiz.style.transform = 'translate3d(' + (S.x * W).toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
      cuerpo.style.transform = 'scale(' + (sx * giro).toFixed(4) + ',' + sy.toFixed(4) + ') rotate(' + rot.toFixed(2) + 'deg)';
      sombra.style.transform = 'scaleX(' + (1 + y / op.alto * 2).toFixed(3) + ')';
      sombra.style.opacity = (1 + y / op.alto * 3).toFixed(2);
    }
    if (op.modo === 'paseo') { S.x = 0.1; S.andando = true; S.espera = azar(3, 6); }
    else { S.x = op.x != null ? op.x : 0.5; S.espera = 1.2; }
    raf = requestAnimationFrame(paso);
    return {
      raiz, pose: p => { S.gesto = 2.6; S.andando = false; pose(p); },
      para() { S.parado = true; }, sigue() { S.parado = false; ult = performance.now(); },
      quita() { cancelAnimationFrame(raf); raiz.remove(); }
    };
  }
  window.MEVI = { crea, POSES };
})();
