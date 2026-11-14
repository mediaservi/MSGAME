/* MSGAME · capas de ambiente: dos capas sutiles de movimiento por juego (niebla, nubes, humo, motas, nieve, vapor…)
   según el fondo y la temática, por encima del escenario y por debajo de los marcadores, sin tapar la jugada · mediaservi.com · GPL-3.0
   AMB.pon(clave, host)  enciende las capas de esa clave (p. ej. 'hit:halloween', 'shoot:alpine', 'osaka'); host opcional (otro contenedor)
   AMB.quita()           las apaga */
(function () {
  'use strict';
  const TAU = Math.PI * 2;
  /* ---------- qué lleva cada juego: dos capas, con su color y su fuerza ---------- */
  const P = {
    'hit:halloween': [['niebla', { c: '150,110,200', a: .2 }], ['motas', { c: '255,150,60', a: .55, n: 18, sube: 1 }]],
    'hit:zombies': [['humo', { c: '110,220,120', a: .12 }], ['nieve', { c: '170,175,165', a: .35, n: 40, v: .35 }]],
    'hit:aliens': [['estrellas', { a: .8 }], ['humo', { c: '120,110,255', a: .1 }]],
    'hit:sports': [['haz', { c: '255,235,190', a: .1, de: [[.07, .02], [.93, .02]] }], ['motas', { c: '255,230,170', a: .45, n: 24 }]],
    'hit:disco': [['niebla', { c: '190,120,255', a: .2 }], ['bokeh', { a: .16 }]],
    'shoot:western': [['niebla', { c: '235,170,110', a: .14, y0: .72 }], ['nubes', { c: '255,215,170', a: .16 }]],
    'shoot:galaxy': [['humo', { c: '170,90,255', a: .09 }], ['motas', { c: '200,220,255', a: .55, n: 30 }]],
    'shoot:zombieland': [['niebla', { c: '120,255,160', a: .16, y0: .74 }], ['motas', { c: '170,255,120', a: .6, n: 14 }]],
    'shoot:haunted': [['niebla', { c: '170,185,215', a: .22, y0: .7 }], ['nubes', { c: '120,110,160', a: .18 }]],
    'shoot:alpine': [['nieve', { c: '255,255,255', a: .55, n: 70, v: .55 }], ['niebla', { c: '190,210,255', a: .16, y0: .74 }]],
    'shoot:warfront': [['nieve', { c: '120,110,100', a: .3, n: 30, v: .25 }], ['motas', { c: '255,140,50', a: .55, n: 14, sube: 1 }]],
    'race:runner': [['niebla', { c: '120,140,255', a: .14, y0: .66 }], ['motas', { c: '140,220,255', a: .5, n: 22, sube: 1 }]],
    'race:dirty': [['niebla', { c: '230,150,80', a: .16, y0: .7 }], ['haz', { c: '255,200,120', a: .07, de: [[.86, .05]] }]],
    'paint': [['sombras', { a: .1 }], ['motas', { c: '255,245,220', a: .35, n: 16 }]],
    'wheel': [['bokeh', { a: .12, cs: ['255,200,90', '255,110,170', '120,220,255'] }], ['destellos', { c: '255,240,200', a: .8 }]],
    'bowl': [['niebla', { c: '200,120,255', a: .14, y0: .55 }], ['haz', { c: '255,120,240', a: .06, de: [[.2, .02], [.8, .02]] }]],
    'duck': [['destellos', { c: '255,230,160', a: .75 }], ['motas', { c: '255,220,180', a: .35, n: 16 }]],
    'ballhop': [['haz', { c: '170,120,255', a: .07, de: [[.12, .02], [.88, .02]] }], ['motas', { c: '200,160,255', a: .45, n: 20 }]],
    'basket': [['haz', { c: '120,200,255', a: .07, de: [[.1, .02], [.9, .02]] }], ['motas', { c: '170,220,255', a: .45, n: 20 }]],
    'osaka': [['vapor', { c: '255,250,240', a: .14 }], ['petalos', { c: '255,180,205', a: .6, n: 16 }]],
    'walk': [['sombras', { a: .09 }], ['petalos', { c: '255,240,170', a: .5, n: 12 }]],
    'golf': [['sombras', { a: .08 }], ['motas', { c: '255,255,220', a: .35, n: 16 }]]
  };
  /* ---------- sprites suaves (cacheados) ---------- */
  const SPR = {};
  function puff(c) { if (SPR[c]) return SPR[c]; const s = 128, e = document.createElement('canvas'); e.width = e.height = s; const x = e.getContext('2d'), g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0, `rgba(${c},1)`); g.addColorStop(.45, `rgba(${c},.55)`); g.addColorStop(1, `rgba(${c},0)`); x.fillStyle = g; x.fillRect(0, 0, s, s); return (SPR[c] = e); }
  const rnd = (a, b) => a + Math.random() * (b - a);
  /* ---------- tipos de capa ---------- */
  const TIPOS = {
    niebla(o) { const y0 = o.y0 == null ? .68 : o.y0, L = Array.from({ length: 7 }, (_, i) => ({ u: i / 7 + rnd(0, .1), y: rnd(y0, 1.02), r: rnd(.35, .6), v: rnd(.006, .016) * (i % 2 ? 1 : -1), f: rnd(0, TAU) }));
      return (x, W, H, t) => { const sp = puff(o.c); L.forEach(p => { const u = ((p.u + t * p.v) % 1.6 + 1.6) % 1.6 - .3, rr = p.r * W, yy = p.y * H + Math.sin(t * .2 + p.f) * H * .015; x.globalAlpha = o.a * (.75 + .25 * Math.sin(t * .3 + p.f)); x.save(); x.translate(u * W, yy); x.scale(1, .32); x.drawImage(sp, -rr, -rr, rr * 2, rr * 2); x.restore(); }); }; },
    nubes(o) { const L = Array.from({ length: 6 }, (_, i) => ({ u: i / 6 + rnd(0, .1), y: rnd(.02, .24), r: rnd(.18, .32), v: rnd(.004, .009), f: rnd(0, TAU) }));
      return (x, W, H, t) => { const sp = puff(o.c); L.forEach(p => { const u = ((p.u + t * p.v) % 1.5) - .25, rr = p.r * W; x.globalAlpha = o.a; x.save(); x.translate(u * W, p.y * H); x.scale(1, .38); x.drawImage(sp, -rr, -rr, rr * 2, rr * 2); x.drawImage(sp, -rr * .4, -rr * 1.1, rr * 1.3, rr * 1.3); x.restore(); }); }; },
    humo(o) { const L = Array.from({ length: 8 }, (_, i) => ({ u: i * .17, y: rnd(.25, .8), r: rnd(.2, .34), v: rnd(.008, .02), f: rnd(0, TAU) }));
      return (x, W, H, t) => { const sp = puff(o.c); L.forEach(p => { const u = ((p.u + t * p.v) % 1.4) - .2, rr = p.r * H * 1.4, yy = (p.y + .03 * Math.sin(t * .25 + p.f)) * H; x.globalAlpha = o.a * (.7 + .3 * Math.sin(t * .4 + p.f)); x.save(); x.translate(u * W, yy); x.scale(1.6, .6); x.drawImage(sp, -rr, -rr, rr * 2, rr * 2); x.restore(); }); }; },
    sombras(o) { const L = Array.from({ length: 3 }, (_, i) => ({ u: i / 3, y: rnd(.2, .8), r: rnd(.35, .55), v: rnd(.012, .02) }));   /* sombras de nubes que pasan */
      return (x, W, H, t) => { const sp = puff('10,14,30'); L.forEach(p => { const u = ((p.u + t * p.v) % 1.8) - .4, rr = p.r * W; x.globalAlpha = o.a; x.save(); x.translate(u * W, p.y * H); x.scale(1, .55); x.drawImage(sp, -rr, -rr, rr * 2, rr * 2); x.restore(); }); }; },
    motas(o) { const n = o.n || 20, L = Array.from({ length: n }, () => ({ u: Math.random(), y: Math.random(), s: rnd(.6, 1.6), v: rnd(.01, .03), f: rnd(0, TAU), w: rnd(.6, 1.8) }));   /* polvo en la luz, polen, luciérnagas o ascuas (sube) */
      return (x, W, H, t, dt) => { const sp = puff(o.c), base = Math.max(1.6, H * .0045); L.forEach(p => { p.y -= (o.sube ? p.v : p.v * .25) * dt; p.u += Math.sin(t * .5 + p.f) * .004 * dt; if (p.y < -.05) { p.y = 1.05; p.u = Math.random(); }
        const r = base * p.s * (o.sube ? 1.2 : 1), a = o.a * (.45 + .55 * Math.max(0, Math.sin(t * p.w + p.f))); x.globalAlpha = a; x.drawImage(sp, p.u * W - r * 2.5, p.y * H - r * 2.5, r * 5, r * 5); }); }; },
    bokeh(o) { const cs = o.cs || ['255,80,200', '80,200,255', '255,220,80', '160,90,255'], L = Array.from({ length: 12 }, (_, i) => ({ u: Math.random(), y: Math.random(), r: rnd(.03, .07), c: cs[i % cs.length], f: rnd(0, TAU), v: rnd(.004, .01) }));
      return (x, W, H, t) => { x.globalCompositeOperation = 'lighter'; L.forEach(p => { const rr = p.r * H, u = ((p.u + t * p.v) % 1.2) - .1, yy = (p.y + .02 * Math.sin(t * .3 + p.f)) * H; x.globalAlpha = o.a * (.4 + .6 * Math.max(0, Math.sin(t * .7 + p.f))); x.drawImage(puff(p.c), u * W - rr, yy - rr, rr * 2, rr * 2); }); x.globalCompositeOperation = 'source-over'; }; },
    estrellas(o) { const L = Array.from({ length: 40 }, () => ({ u: Math.random(), y: Math.random() * .42, s: rnd(.5, 1.4), f: rnd(0, TAU), w: rnd(1, 3) }));
      return (x, W, H, t) => { x.fillStyle = '#fff'; L.forEach(p => { const a = Math.max(0, Math.sin(t * p.w + p.f)); if (a < .05) return; x.globalAlpha = o.a * a; const s = Math.max(1, H * .0028 * p.s); x.fillRect(p.u * W - s / 2, p.y * H - s / 2, s, s); }); }; },
    nieve(o) { const n = o.n || 50, sp0 = o.v || .5, L = Array.from({ length: n }, () => ({ u: Math.random(), y: Math.random(), s: rnd(.5, 1.5), f: rnd(0, TAU) }));   /* nieve o ceniza */
      return (x, W, H, t, dt) => { const sp = puff(o.c), base = Math.max(1.4, H * .004); L.forEach(p => { p.y += sp0 * (.06 + p.s * .05) * dt; p.u += Math.sin(t * .8 + p.f) * .01 * dt; if (p.y > 1.03) { p.y = -.03; p.u = Math.random(); } const r = base * p.s; x.globalAlpha = o.a * (.5 + p.s * .3); x.drawImage(sp, p.u * W - r * 2, p.y * H - r * 2, r * 4, r * 4); }); }; },
    haz(o) { const de = o.de || [[.1, 0], [.9, 0]];   /* haces de luz de focos que barren despacio */
      return (x, W, H, t) => { x.globalCompositeOperation = 'lighter'; de.forEach(([u, v], i) => { const cx = u * W, cy = v * H, an = Math.PI / 2 + (u < .5 ? -.45 : .45) + Math.sin(t * (.18 + i * .05) + i * 2) * .28, L = H * 1.3, w = H * .2;
        const g = x.createLinearGradient(cx, cy, cx + Math.cos(an) * L, cy + Math.sin(an) * L); g.addColorStop(0, `rgba(${o.c},${o.a})`); g.addColorStop(1, `rgba(${o.c},0)`); x.globalAlpha = 1; x.fillStyle = g; x.beginPath(); x.moveTo(cx, cy);
        x.lineTo(cx + Math.cos(an - .12) * L, cy + Math.sin(an - .12) * L); x.lineTo(cx + Math.cos(an + .12) * L, cy + Math.sin(an + .12) * L); x.closePath(); x.fill(); void w; }); x.globalCompositeOperation = 'source-over'; }; },
    vapor(o) { const L = Array.from({ length: 10 }, (_, i) => ({ u: (i + .5) / 10 + rnd(-.03, .03), k: Math.random(), v: rnd(.05, .09), f: rnd(0, TAU) }));   /* vapor de los puestos que sube y se deshace */
      return (x, W, H, t, dt) => { const sp = puff(o.c); L.forEach(p => { p.k += p.v * dt; if (p.k > 1) { p.k = 0; p.u = Math.random(); } const yy = H * (1.02 - p.k * .55), rr = H * (.05 + p.k * .14), xx = (p.u + Math.sin(p.k * 5 + p.f) * .02) * W; x.globalAlpha = o.a * Math.sin(p.k * Math.PI); x.drawImage(sp, xx - rr, yy - rr, rr * 2, rr * 2); }); }; },
    petalos(o) { const n = o.n || 14, L = Array.from({ length: n }, () => ({ u: Math.random(), y: Math.random(), s: rnd(.7, 1.3), f: rnd(0, TAU), r: rnd(1, 3) }));   /* pétalos u hojitas que caen girando */
      return (x, W, H, t, dt) => { x.fillStyle = `rgb(${o.c})`; const base = H * .007; L.forEach(p => { p.y += (.05 + p.s * .02) * dt; p.u += (.012 + Math.sin(t * .9 + p.f) * .02) * dt; if (p.y > 1.04) { p.y = -.04; p.u = Math.random() * 1.1 - .1; } if (p.u > 1.05) p.u = -.05;
        x.globalAlpha = o.a; x.save(); x.translate(p.u * W, p.y * H); x.rotate(t * p.r + p.f); x.scale(1, Math.abs(Math.sin(t * p.r * .8 + p.f)) * .7 + .3); x.beginPath(); x.ellipse(0, 0, base * p.s * 1.4, base * p.s * .8, 0, 0, TAU); x.fill(); x.restore(); }); }; },
    destellos(o) { const L = Array.from({ length: 10 }, () => ({ u: Math.random(), y: Math.random() * .7, k: Math.random() * 3, d: rnd(1.6, 3.2) }));   /* destellos de estrella que aparecen y se apagan */
      return (x, W, H, t, dt) => { x.globalCompositeOperation = 'lighter'; x.strokeStyle = `rgb(${o.c})`; x.lineCap = 'round'; L.forEach(p => { p.k += dt; if (p.k > p.d) { p.k = 0; p.u = Math.random(); p.y = Math.random() * .7; } const q = p.k / .7; if (q > 1) return; const a = Math.sin(q * Math.PI), s = H * .018 * a, xx = p.u * W, yy = p.y * H;
        x.globalAlpha = o.a * a; x.lineWidth = Math.max(1, H * .0022); x.beginPath(); x.moveTo(xx - s, yy); x.lineTo(xx + s, yy); x.moveTo(xx, yy - s); x.lineTo(xx, yy + s); x.stroke(); x.globalAlpha = o.a * a * .5; x.drawImage(puff(o.c), xx - s, yy - s, s * 2, s * 2); }); x.globalCompositeOperation = 'source-over'; }; }
  };
  /* ---------- motor ---------- */
  const A = { clave: '', capas: [], raf: 0, cv: null, x: null, t: 0, last: 0 };
  function lienzo(host) { if (!A.cv) { const c = document.createElement('canvas'); c.id = 'gmAmb'; c.setAttribute('aria-hidden', 'true'); A.cv = c; A.x = c.getContext('2d'); }
    const h = host || document.body; if (A.cv.parentNode !== h) h.appendChild(A.cv); A.cv.classList.toggle('dentro', !!host); return A.cv; }
  function mide() { const c = A.cv, k = .5, w = Math.max(1, Math.round((c.parentNode === document.body ? innerWidth : c.parentNode.clientWidth) * k)), h = Math.max(1, Math.round((c.parentNode === document.body ? innerHeight : c.parentNode.clientHeight) * k)); if (c.width !== w || c.height !== h) { c.width = w; c.height = h; } }
  function paso(now) { A.raf = 0; if (!A.capas.length || !A.cv) return; const dt = Math.min(.05, (now - (A.last || now)) / 1000); A.last = now; A.raf = requestAnimationFrame(paso); if (document.hidden) return;
    const pausa = window.AMB_PAUSA && window.AMB_PAUSA(); if (!pausa) A.t += dt; mide(); const x = A.x, W = A.cv.width, H = A.cv.height; x.clearRect(0, 0, W, H);
    A.capas.forEach(f => { x.save(); try { f(x, W, H, A.t, pausa ? 0 : dt); } catch (e) {} x.restore(); }); }
  const AMB = {
    claves: () => Object.keys(P),
    pon(clave, host) { const def = P[clave] || P[String(clave).split(':')[0]]; if (!def) { AMB.quita(); return; } lienzo(host); if (clave === A.clave && A.capas.length) return; A.clave = clave; A.capas = def.map(([tp, o]) => TIPOS[tp](o)); A.t = 0; A.last = 0; if (!A.raf) A.raf = requestAnimationFrame(paso); },
    quita() { A.capas = []; A.clave = ''; if (A.raf) cancelAnimationFrame(A.raf); A.raf = 0; if (A.cv) { A.x.clearRect(0, 0, A.cv.width, A.cv.height); if (A.cv.parentNode) A.cv.parentNode.removeChild(A.cv); } }
  };
  window.AMB = AMB;
})();
