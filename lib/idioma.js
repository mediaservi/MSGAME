/* MSGAME · idioma de los juegos · NORMA de idiomas (26-11-2026) · mediaservi.com · GPL-3.0
   - Textos y subtítulos, siempre en el idioma elegido en la consola (cualquiera de la lista).
   - Español, inglés y catalán son nativos. Los demás se traducen solos (traducción automática, con caché en el aparato).
   - Voces: catalán con la voz catalana; español y las demás lenguas de España (gallego, euskera…) con la española;
     el resto del mundo, con la inglesa. Los textos de origen de la traducción son los del idioma de las voces.
   Uso en un juego:
     const UL = MSIDIOMA.elegido(), LG = MSIDIOMA.base(UL);           // idioma de pantalla e idioma de voces y textos de origen
     const TR = UL !== LG ? MSIDIOMA.traductor(LG, UL) : null;       // TR.get(texto) → traducción o null (y la pide)
     TR.pide([...textos]); TR.listo(() => repinta());                 // traduce por adelantado; avisa cuando llega algo nuevo
     MSIDIOMA.sigue(l => …);                                          // dentro de MSGAME: el idioma cambia en la consola con el juego abierto */
(function () {
  'use strict';
  const NATIVOS = ['es', 'en', 'ca'], ESPANA = ['es', 'gl', 'eu', 'ast', 'an', 'oc'];
  const EMB = /[?&]emb=1/.test(location.search);
  const limpia = l => String(l || '').toLowerCase().split(/[-_]/)[0];
  function elegido() {
    let l = (location.search.match(/[?&]lang=([a-z]{2,3})\b/) || [])[1];
    if (!l && EMB) try { l = parent.document.documentElement.lang; } catch (e) {}
    if (!l) try { l = localStorage.getItem('VJSHOW_LANG'); } catch (e) {}
    return limpia(l || navigator.language || 'es') || 'es';
  }
  const base = l => NATIVOS.includes(l) ? l : ESPANA.includes(l) ? 'es' : 'en';
  /* dentro de MSGAME sigue el idioma de la consola al momento */
  function sigue(cb) {
    if (!EMB) return;
    try { const de = parent.document.documentElement; let ant = limpia(de.lang); new MutationObserver(() => { const l = limpia(de.lang); if (l && l !== ant) { ant = l; cb(l); } }).observe(de, { attributes: true, attributeFilter: ['lang'] }); } catch (e) {}
  }
  /* ---------- traductor ---------- */
  const GLN = { zh: 'zh-CN', he: 'iw' }, TRS = {};
  function traductor(src, dst) {
    const id = src + '>' + dst; if (TRS[id]) return TRS[id];
    const CL = 'MSG_TR_' + src + '_' + dst; let C = {}; try { C = JSON.parse(localStorage.getItem(CL) || '{}'); } catch (e) {}
    const pend = new Set(), cola = [], avisos = []; let tq = 0, fallo = false;
    const guarda = () => { try { localStorage.setItem(CL, JSON.stringify(C)); } catch (e) {} };
    /* los números van aparte: «Ya tenemos 1 de 4» y «… 2 de 4» comparten traducción */
    const clave = s => { const n = []; const k = s.replace(/\d+(?:[.,]\d+)?/g, m => { n.push(m); return String(7770 + n.length); }); return n.length && n.length <= 9 ? [k, n] : [s, null]; };
    function get(s) {
      if (s == null) return null; s = String(s); if (!/[A-Za-zÀ-ÿͰ-￿]{2}/.test(s)) return s;
      const [k, n] = clave(s), v = C[k];
      if (v !== undefined) return n ? v.replace(/777([1-9])/g, (m, d) => n[d - 1] !== undefined ? n[d - 1] : m) : v;
      pide([s], true); return null;
    }
    function pide(arr, ya) {   /* ya: lo que está en pantalla ahora pasa delante */
      for (const s0 of arr) { if (typeof s0 !== 'string' || !s0.trim() || s0.length > 1500) continue; const k = clave(s0)[0]; if (C[k] !== undefined) continue; if (pend.has(k)) { if (ya) { const i = cola.indexOf(k); if (i > 0) { cola.splice(i, 1); cola.unshift(k); } } continue; } pend.add(k); ya ? cola.unshift(k) : cola.push(k); }
      if (!tq && cola.length) tq = setTimeout(() => { tq = 0; vacia(); }, 120);   /* v18.60 · sin reiniciar la espera: un juego pide en cada fotograma y la cola no salía nunca */
    }
    const duerme = ms => new Promise(r => setTimeout(r, ms));
    async function gtx(arr) {
      const u = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + src + '&tl=' + (GLN[dst] || dst) + '&dt=t&q=' + encodeURIComponent(arr.join('\n'));
      const r = await fetch(u); if (!r.ok) throw new Error('HTTP ' + r.status);
      const j = await r.json(), out = (j[0] || []).map(x => x[0] || '').join('').split('\n').map(x => x.trim());
      if (out.length === arr.length) return out; if (arr.length === 1) return [out.join(' ')];
      const h = arr.length >> 1; return [...await gtx(arr.slice(0, h)), ...await gtx(arr.slice(h))];
    }
    /* tres peticiones a la vez: con todo el juego por traducir, en unos segundos está */
    let hilos = 0;
    function vacia() { while (hilos < 3 && cola.length) { hilos++; hilo().finally(() => { hilos--; if (cola.length) vacia(); }); } }
    async function hilo() {
      while (cola.length) {
        const lote = []; let len = 0; while (cola.length && lote.length < 40) { const l2 = encodeURIComponent(cola[0]).length + 3; if (lote.length && len + l2 > 1800) break; lote.push(cola.shift()); len += l2; }
        let ok = false;
        for (let a = 0; a < 6 && !ok; a++) { try { const out = await gtx(lote); lote.forEach((k, i) => { if (out[i]) C[k] = out[i]; pend.delete(k); }); ok = true; } catch (e) { if (!navigator.onLine) { fallo = true; break; } await duerme(Math.min(30000, 1200 * Math.pow(2, a))); } }
        if (!ok) { lote.forEach(k => pend.delete(k)); if (fallo) { cola.length = 0; break; } }
        guarda(); avisos.forEach(f => { try { f(); } catch (e) {} }); await duerme(150);
      }
    }
    return TRS[id] = { get, pide, listo: f => avisos.push(f), src, dst, estado: () => ({ cola: cola.length, hilos, cache: Object.keys(C).length }) };
  }
  /* los idiomas de la consola de MSGAME, cada uno con su nombre en su lengua */
  const LISTA = [['es', 'Español'], ['en', 'English'], ['ca', 'Català'], ['fr', 'Français'], ['de', 'Deutsch'], ['it', 'Italiano'], ['pt', 'Português'], ['nl', 'Nederlands'], ['pl', 'Polski'], ['ru', 'Русский'], ['uk', 'Українська'], ['tr', 'Türkçe'], ['ar', 'العربية'], ['he', 'עברית'], ['zh', '中文'], ['ja', '日本語'], ['ko', '한국어'], ['hi', 'हिन्दी'], ['id', 'Bahasa Indonesia'], ['sv', 'Svenska'], ['da', 'Dansk'], ['no', 'Norsk'], ['fi', 'Suomi'], ['cs', 'Čeština'], ['ro', 'Română'], ['el', 'Ελληνικά'], ['hu', 'Magyar'], ['th', 'ไทย'], ['vi', 'Tiếng Việt'], ['eu', 'Euskara'], ['gl', 'Galego']];
  /* v18.60 · lo mismo para cualquier juego en una línea:
       const J = MSIDIOMA.juego({ repinta, cambia, dic });
       J.UL idioma de pantalla · J.LG idioma de voces (es / en / ca)
       J.U(texto en J.LG) → en el idioma de pantalla (si aún no ha llegado, el mismo texto)
       J.E(texto en español) → igual, pasando antes por dic[J.LG][texto] (traducción nativa al inglés o al catalán)
     Lo ya traducido no se vuelve a traducir, y si cambia el idioma en la consola con el juego abierto, J se pone al día y llama a cambia(l). */
  function juego(op) {
    op = op || {}; const J = { hecho: new Set() }, avisa = () => { try { op.repinta && op.repinta(); } catch (e) {} };
    const pon = l => { J.UL = limpia(l) || 'es'; J.LG = base(J.UL); J.tr = J.UL !== J.LG ? traductor(J.LG, J.UL) : null; J.tres = J.UL !== 'es' ? traductor('es', J.UL) : null; [J.tr, J.tres].forEach(t => { if (t && !t._jv) { t._jv = 1; t.listo(avisa); } }); J.hecho.clear(); if (J.paso) J.paso.clear(); };
    pon(elegido());
    /* hecho: textos ya en el idioma de pantalla · paso: textos de paso (traducción aún en camino) que no se vuelven a traducir */
    J.paso = new Set(); const ya = (s, fin) => { (fin ? J.hecho : J.paso).add(s); return s; };
    J.U = s => { if (typeof s !== 'string' || !J.tr || J.hecho.has(s) || J.paso.has(s)) return s; const r = J.tr.get(s); return r == null ? s : ya(r, 1); };
    J.E = s => { if (typeof s !== 'string' || J.UL === 'es' || J.hecho.has(s) || J.paso.has(s)) return s; const d = op.dic && op.dic[J.LG] && op.dic[J.LG][s];
      if (J.LG === 'es') { const r = J.tr.get(s); return r == null ? s : ya(r, 1); }
      if (d != null) { if (!J.tr) return ya(d, 1); const r = J.tr.get(d); return r == null ? ya(d, 0) : ya(r, 1); }
      const r = J.tres.get(s); return r == null ? s : ya(r, 1); };
    /* ya(texto, final): marca un texto montado a mano (con huecos) para que no se vuelva a traducir */
    J.ya = ya;
    J.pide = arr => { if (J.tr) J.tr.pide(arr.filter(s => typeof s === 'string')); };
    J.pon = l => { pon(l); document.documentElement.lang = J.UL; try { op.cambia && op.cambia(J.UL); } catch (e) {} avisa(); };
    sigue(J.pon); document.documentElement.lang = J.UL;
    return J;
  }
  window.MSIDIOMA = { elegido, base, sigue, traductor, juego, NATIVOS, LISTA };
})();
