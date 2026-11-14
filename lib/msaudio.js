/* MSGAME · motor común de sonido: música dinámica, efectos y ambiente · mediaservi.com · GPL-3.0
   · MSAudio.musica(carpeta) lee <carpeta>musica.json + musica.mp3 (cortes de la palabra clave MÚSICA):
       .empieza()        entrada y, al acabar, el bucle «juego»
       .cambia('tension') cambia de bucle en la siguiente barra de compás, con fundido corto
                         (.cambia(parte, { ya: true }) corta también la entrada, sin esperar a que acabe;
                         .empieza(parte, { ya: true }) arranca sin la entrada)
       .final()          en la siguiente barra suena el final y la música se acaba
       .para(s)          funde y para
   · MSAudio.fx([carpetas]) lee <carpeta>fx.json de cada carpeta (la primera manda) y .suena(nombre, {v, r, desde}).
     Si «nombre» no existe pero hay «nombre-1», «nombre-2»…, elige una toma al azar.
   · MSAudio.ambiente(url, v) bucle de fondo (pájaros…) con .para().
   · MSAudio.mudo = () => bool (silencia todo) · MSAudio.pausa(bool) congela el reloj de audio · MSAudio.despierta() en cada gesto. */
(function () {
  'use strict';
  const A = { ctx: null, mudo: () => false, nivel: { musica: .55, fx: .9, amb: .32 } };
  let pausado = false;
  function ctx() {
    if (A.ctx) return A.ctx;
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return null;
    try { A.ctx = new C(); } catch (e) { return null; }
    A.sal = A.ctx.createGain(); A.sal.connect(A.ctx.destination);
    const bus = v => { const g = A.ctx.createGain(); g.gain.value = v; g.connect(A.sal); return g; };
    A.bm = bus(A.nivel.musica); A.bf = bus(A.nivel.fx); A.ba = bus(A.nivel.amb);
    return A.ctx;
  }
  const memo = {};
  function buffer(url) {
    if (!memo[url]) memo[url] = fetch(url).then(r => { if (!r.ok) throw new Error(url); return r.arrayBuffer(); })
      .then(b => new Promise((ok, ko) => { const c = ctx(); if (!c) return ko(new Error('sin audio')); c.decodeAudioData(b, ok, ko); }));
    return memo[url];
  }
  function json(url) { return fetch(url).then(r => { if (!r.ok) throw new Error(url); return r.json(); }); }
  A.despierta = function () { const c = ctx(); if (c && c.state === 'suspended' && !pausado) c.resume().catch(() => {}); };
  A.pausa = function (v) { pausado = !!v; const c = ctx(); if (!c) return; if (v) c.suspend().catch(() => {}); else c.resume().catch(() => {}); };
  A.aplica = function () { const c = ctx(); if (!c) return; const m = !!A.mudo(), g = A.sal.gain; if (m !== A._m) { A._m = m; g.cancelScheduledValues(c.currentTime); g.setTargetAtTime(m ? 0 : 1, c.currentTime, .05); } A.despierta(); };
  ['pointerdown', 'keydown', 'touchstart'].forEach(ev => addEventListener(ev, () => A.despierta(), { capture: true, passive: true }));
  setInterval(() => { if (A.ctx) A.aplica(); }, 700);

  /* ---------- música dinámica ---------- */
  A.musica = function (carpeta) {
    const M = { info: null, buf: null, quiere: null, src: null, gan: null, t0: 0, L: 0, a: 0, parte: '', vivo: false };
    const listo = Promise.all([json(carpeta + 'musica.json'), buffer(carpeta + 'musica.mp3')]).then(r => { M.info = r[0]; M.buf = r[1]; if (M.quiere) { const q = M.quiere; M.quiere = null; q(); } }).catch(() => {});
    const corte = n => { const i = M.info; return i[n] && i[n].length === 2 ? i[n] : i.juego; };
    const barra = () => (M.info.tiempo || .5) * 4, fundido = () => Math.min(.35, M.info.fundido || .2);
    function suelta(src, gan, t) { try { gan.gain.cancelScheduledValues(t); gan.gain.setValueAtTime(gan.gain.value, t); gan.gain.linearRampToValueAtTime(0, t + fundido()); src.stop(t + fundido() + .05); } catch (e) {} }
    function bucle(n, t, pegado) {   /* arranca el bucle «n» en el instante t (reloj de audio) */
      const c = ctx(), [a, b] = corte(n), s = c.createBufferSource(), g = c.createGain(); s.buffer = M.buf; s.loop = true; s.loopStart = a; s.loopEnd = b; s.connect(g); g.connect(A.bm);
      if (pegado) g.gain.setValueAtTime(1, t); else { g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(1, t + Math.min(.06, fundido())); } s.start(t, a);
      if (M.src) suelta(M.src, M.gan, t); M.src = s; M.gan = g; M.t0 = t; M.L = b - a; M.a = a; M.parte = n; }
    function siguiente() {   /* próxima barra del bucle que suena */
      const c = ctx(), ahora = c.currentTime + .06; if (!M.src || ahora <= M.t0) return Math.max(ahora, M.t0);
      const br = barra(), p = (ahora - M.t0) % M.L, k = Math.ceil(p / br) * br; return ahora + (Math.min(k, M.L) - p); }
    M.empieza = function (parte, o) {   /* o.ya: sin la entrada, directamente al bucle */
      if (!M.info) { M.quiere = () => M.empieza(parte, o); return M; }
      const c = ctx(); if (!c) return M; A.despierta(); if (M.vivo) { M.parte !== (parte || 'juego') && M.cambia(parte || 'juego'); return M; }
      M.vivo = true; const t = c.currentTime + .08, e = M.info.entrada;
      if (e && e[1] > e[0] && !(o && o.ya)) { const s = c.createBufferSource(), g = c.createGain(); s.buffer = M.buf; s.connect(g); g.connect(A.bm); s.start(t, e[0], e[1] - e[0]); M.src = s; M.gan = g; M.t0 = t; M.L = 1e9; M.parte = 'entrada'; M.ent = { s, g, fin: t + e[1] - e[0] }; M.pend = parte || 'juego';
        M.reloj = setTimeout(function mira() { if (!M.vivo || M.parte !== 'entrada') return; const r = M.ent.fin - c.currentTime; if (r > .25) { M.reloj = setTimeout(mira, Math.max(40, (r - .2) * 1000)); return; } M.src = null; bucle(M.pend, M.ent.fin, M.pend === 'juego' || corte(M.pend)[0] === M.info.entrada[1]); }, Math.max(40, (e[1] - e[0] - .25) * 1000)); }
      else bucle(parte || 'juego', t);
      return M; };
    M.cambia = function (parte, o) { if (!M.vivo || !M.info) return M; if (M.parte === 'entrada') { M.pend = parte; if (o && o.ya && parte !== 'juego') { clearTimeout(M.reloj); M.ent = null; bucle(parte, siguiente()); } return M; } if (M.parte === parte || M.parte === 'final') return M; bucle(parte, siguiente()); return M; };
    M.final = function () {
      if (!M.info) { M.quiere = null; return M; } if (!M.vivo || M.parte === 'final') return M; clearTimeout(M.reloj);
      const c = ctx(), f = M.info.final; if (!f) return M.para(1.2);
      const t = M.parte === 'entrada' ? c.currentTime + .05 : siguiente(), s = c.createBufferSource(), g = c.createGain(); s.buffer = M.buf; s.connect(g); g.connect(A.bm); g.gain.setValueAtTime(1, t); s.start(t, f[0], f[1] - f[0]);
      if (M.src) suelta(M.src, M.gan, t); M.src = s; M.gan = g; M.parte = 'final'; s.onended = () => { if (M.src === s) { M.src = null; M.vivo = false; M.parte = ''; } }; return M; };
    M.para = function (seg) { M.quiere = null; clearTimeout(M.reloj); const c = A.ctx; if (c && M.src) { const t = c.currentTime; try { M.gan.gain.cancelScheduledValues(t); M.gan.gain.setValueAtTime(M.gan.gain.value, t); M.gan.gain.linearRampToValueAtTime(0, t + (seg || .5)); M.src.stop(t + (seg || .5) + .05); } catch (e) {} }
      M.src = null; M.vivo = false; M.parte = ''; return M; };
    M.suena = () => M.vivo;
    M.listo = listo; return M;
  };

  /* ---------- efectos ---------- */
  A.fx = function (carpetas) {
    const F = { cat: {}, listo: null };
    F.listo = Promise.all(carpetas.map(c => json(c + 'fx.json').then(j => ({ c, j })).catch(() => null))).then(L => {
      L.slice().reverse().forEach(o => { if (!o) return; Object.keys(o.j).forEach(k => { F.cat[k] = o.c + (o.j[k].archivo || k + '.mp3'); }); });
      Object.keys(F.cat).forEach(k => buffer(F.cat[k]).catch(() => {})); });
    const ultimo = {};
    F.suena = function (n, o) {
      o = o || {}; const c = ctx(); if (!c) return; A.despierta();
      let k = n; if (!F.cat[k]) { const v = Object.keys(F.cat).filter(q => q.indexOf(n + '-') === 0 && /^\d+$/.test(q.slice(n.length + 1))); if (!v.length) return; k = v[Math.floor(Math.random() * v.length)]; }
      const ahora = performance.now(); if (o.min && ultimo[n] && ahora - ultimo[n] < o.min) return; ultimo[n] = ahora;
      buffer(F.cat[k]).then(b => { const s = c.createBufferSource(), g = c.createGain(); s.buffer = b; s.playbackRate.value = o.r || 1; g.gain.value = o.v == null ? 1 : o.v; s.connect(g); g.connect(A.bf); s.start(c.currentTime + (o.tras || 0), o.desde || 0, o.dur || undefined); }).catch(() => {}); };
    return F;
  };

  /* ---------- ambiente ---------- */
  A.ambiente = function (url, v) {
    const Z = { src: null, gan: null, on: false };
    Z.empieza = function () { if (Z.on) return Z; Z.on = true; const c = ctx(); if (!c) return Z; A.despierta();
      buffer(url).then(b => { if (!Z.on || Z.src) return; const s = c.createBufferSource(), g = c.createGain(); s.buffer = b; s.loop = true; s.connect(g); g.connect(A.ba); g.gain.setValueAtTime(0, c.currentTime); g.gain.linearRampToValueAtTime(v == null ? 1 : v, c.currentTime + 2); s.start(c.currentTime, Math.random() * b.duration); Z.src = s; Z.gan = g; }).catch(() => {}); return Z; };
    Z.para = function () { Z.on = false; const c = A.ctx; if (c && Z.src) { const t = c.currentTime; try { Z.gan.gain.cancelScheduledValues(t); Z.gan.gain.setValueAtTime(Z.gan.gain.value, t); Z.gan.gain.linearRampToValueAtTime(0, t + 1.2); Z.src.stop(t + 1.3); } catch (e) {} } Z.src = null; return Z; };
    return Z;
  };
  window.MSAudio = A;
})();
