/* MEVILAND · motor (render, modelos, sonido, voz, Mevi, mando) · MSGAME · mediaservi.com · GPL-3.0 */
'use strict';
const T = THREE;
T.ColorManagement.legacyMode = false;   /* colores en hex tratados como sRGB: tonos vivos y fieles */
const EMB = /[?&]emb=1/.test(location.search);
const LITE = /[?&]cal=0/.test(location.search) || /webOS|SmartTV|Tizen|CrKey/i.test(navigator.userAgent);
const PK = '../packs/meviland/';
const $ = id => document.getElementById(id);
const ST = $('st'), CV = $('cv');
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, k) => a + (b - a) * k, rnd = (a, b) => a + Math.random() * (b - a), ri = n => Math.floor(Math.random() * n);
const baraja = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = ri(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const suave = k => k * k * (3 - 2 * k);

/* ---------- idioma ---------- */
/* v18.50 · NORMA de idiomas (lib/idioma.js): UL es el idioma de la pantalla (cualquiera); LG, el de las voces y de los textos de origen
   (es, en o ca). Si no coinciden, lo que se ve se traduce solo y la voz sigue hablando en LG. */
let UL = window.MSIDIOMA ? MSIDIOMA.elegido() : 'es';
let LG = window.MSIDIOMA ? MSIDIOMA.base(UL) : (['en', 'ca'].includes(UL) ? UL : 'es');
let TRD = UL !== LG && window.MSIDIOMA ? MSIDIOMA.traductor(LG, UL) : null;
const VOZDE = new Map();   /* texto en pantalla (traducido) → texto original, el que tiene voz grabada */
const trd = s => { if (!TRD || typeof s !== 'string') return s; const d = TRD.get(s); if (d == null || d === s) return s; VOZDE.set(d, s); if (VOZDE.size > 600) VOZDE.delete(VOZDE.keys().next().value); return d; };
const TX = {};   /* los textos están en meviland-salas.js; t('clave') los busca en el idioma activo */
const t0 = (k, ...a) => { let s = (TX[LG] && TX[LG][k]) || TX.es[k] || k; a.forEach((v, i) => { s = s.replace('{' + i + '}', VOZDE.get(v) || v); }); return s; };   /* en el idioma de las voces */
const t = (k, ...a) => trd(t0(k, ...a));

/* ---------- comunicación con MSGAME ---------- */
const manda = m => { if (EMB) try { parent.postMessage(m, location.origin); } catch (e) {} };

/* ---------- render ---------- */
const R = new T.WebGLRenderer({ canvas: CV, antialias: !LITE, powerPreference: 'high-performance' });
R.outputEncoding = T.sRGBEncoding; R.toneMapping = T.ACESFilmicToneMapping; R.toneMappingExposure = .92;
R.shadowMap.enabled = !LITE; R.shadowMap.type = T.PCFSoftShadowMap;
R.setPixelRatio(Math.min(LITE ? 1 : 1.75, window.devicePixelRatio || 1));
const ESC = new T.Scene();
const CAM = new T.PerspectiveCamera(60, 16 / 9, 0.05, 400);
const RIG = new T.Group(); RIG.add(CAM); ESC.add(RIG);
let W = 1280, H = 720;
function tam() { const r = ST.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height); R.setSize(W, H, false); CAM.aspect = W / H; CAM.updateProjectionMatrix(); }
addEventListener('resize', tam); tam();
/* entorno para los brillos de plástico y metal: un cielo de gradiente pasado por PMREM */
const PMREM = new T.PMREMGenerator(R);
function entorno(arriba, abajo, sol) {
  const s = new T.Scene(), g = new T.SphereGeometry(10, 32, 16), c = document.createElement('canvas'); c.width = 4; c.height = 256; const q = c.getContext('2d'), gr = q.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, arriba); gr.addColorStop(.48, arriba); gr.addColorStop(.52, abajo); gr.addColorStop(1, abajo); q.fillStyle = gr; q.fillRect(0, 0, 4, 256); q.fillStyle = 'rgba(0,0,0,.5)'; q.fillRect(0, 0, 4, 256);
  const tx = new T.CanvasTexture(c); tx.encoding = T.sRGBEncoding; s.add(new T.Mesh(g, new T.MeshBasicMaterial({ map: tx, side: T.BackSide })));
  const l = new T.Mesh(new T.SphereGeometry(1.2, 16, 8), new T.MeshBasicMaterial({ color: sol || '#ffffff' })); l.position.set(4, 7, 3); s.add(l);
  const rt = PMREM.fromScene(s, 0.04); g.dispose(); tx.dispose(); return rt.texture;
}

/* ---------- texturas hechas por código ---------- */
function lienzo(w, h, f, rep) { const c = document.createElement('canvas'); c.width = w; c.height = h; f(c.getContext('2d'), w, h); const tx = new T.CanvasTexture(c); tx.encoding = T.sRGBEncoding; tx.anisotropy = 4; if (rep) { tx.wrapS = tx.wrapT = T.RepeatWrapping; tx.repeat.set(rep[0], rep[1]); } return tx; }
function estrella2D(q, x, y, R1, R2, n) { q.beginPath(); for (let i = 0; i <= n * 2; i++) { const a = -Math.PI / 2 + i * Math.PI / n, r = i % 2 ? R2 : R1; i ? q.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r) : q.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r); } q.closePath(); }
const TEX = {};
TEX.llave = (() => { const c = document.createElement('canvas'); c.width = c.height = 96; const q = c.getContext('2d'); const g = q.createRadialGradient(48, 40, 4, 48, 48, 46); g.addColorStop(0, '#fffbe0'); g.addColorStop(.5, '#ffd23f'); g.addColorStop(1, '#e08a00'); q.fillStyle = g; estrella2D(q, 48, 50, 44, 19, 5); q.fill(); q.lineWidth = 5; q.strokeStyle = '#7a3b00'; q.stroke(); return c.toDataURL(); })();
function texBrillo(col) { return lienzo(128, 128, (q) => { const g = q.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.18, col); g.addColorStop(1, 'rgba(0,0,0,0)'); q.fillStyle = g; q.fillRect(0, 0, 128, 128); }); }
TEX.chispa = texBrillo('rgba(255,220,120,.8)');
TEX.estrella = lienzo(128, 128, q => { q.fillStyle = '#fff'; estrella2D(q, 64, 66, 60, 24, 5); q.fill(); });
TEX.humo = texBrillo('rgba(255,255,255,.35)');
TEX.nube = lienzo(256, 128, q => { for (let i = 0; i < 9; i++) { const x = 60 + i * 15 + Math.random() * 10, y = 64 + Math.sin(i * 1.3) * 8, r = 22 + Math.random() * 16; const g = q.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.6, 'rgba(255,255,255,.8)'); g.addColorStop(1, 'rgba(255,255,255,0)'); q.fillStyle = g; q.beginPath(); q.arc(x, y, r, 0, 7); q.fill(); } });

/* ---------- materiales ---------- */
const mat = (c, o) => new T.MeshStandardMaterial(Object.assign({ color: c, roughness: .45, metalness: 0 }, o || {}));
const matB = (c, o) => new T.MeshBasicMaterial(Object.assign({ color: c }, o || {}));

/* ---------- modelos ---------- */
const MOD = {}, LISTA = ['brocoli', 'maestro', 'buho', 'gusano', 'chef', 'vagoneta', 'caballo', 'calcetin', 'leche', 'portal', 'libro', 'espejo', 'puertacaramelo', 'caramelo', 'copa', 'llave', 'arco', 'puertafantasia', 'fuente', 'pato'];
function conMeshopt(f) { if (window.MeshoptDecoder) return window.MeshoptDecoder.ready.then(f); const s = document.createElement('script'); s.src = '../lib/meshopt.js'; s.onload = () => window.MeshoptDecoder.ready.then(f); document.head.appendChild(s); }
/* andar en el sitio: a los clips de caminar y correr se les quita el avance de la cadera (si no, el personaje da un tirón hacia delante y vuelve atrás en cada ciclo);
   quien lo mueve por el mundo es el juego */
function sinAvance(anims) { (anims || []).forEach(c => { if (!/^(and|walk|run|sneak|camin|corr)/i.test(c.name)) return; c.tracks.forEach(tr => { if (!/hips\.position$/i.test(tr.name)) return; const v = tr.values; for (let i = 3; i < v.length; i += 3) { v[i] = v[0]; v[i + 2] = v[2]; } }); }); return anims; }
function cargaTodo(prog) {
  return new Promise(ok => conMeshopt(() => {
    const L = new T.GLTFLoader(); L.setMeshoptDecoder(window.MeshoptDecoder);
    const todo = LISTA.map(n => [n, PK + n + '.glb?v=18.41']).concat([['mevi', '../packs/comun/mevi/mevi.glb?v=18.37'], ['farol', '../packs/modelos/a3D-farol.glb?v=18.42'], ['corona', '../packs/modelos/a3D-corona.glb?v=18.42']]);
    let n = 0;
    todo.forEach(([k, u]) => L.load(u, g => { g.scene.traverse(o => { if (o.isMesh) { if (o.geometry) o.geometry.userData.mod = true; o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; const m = o.material; if (m && m.map) m.map.anisotropy = 4; } }); sinAvance(g.animations); MOD[k] = g; n++; prog(n / todo.length); if (n === todo.length) ok(); }, undefined, () => { n++; prog(n / todo.length); if (n === todo.length) ok(); }));
  }));
}
/* copia lista para colocar: altura h, pies en y = 0, centrada en x/z; con esqueleto se clona con SkeletonUtils */
function pieza(k, h, o) {
  o = o || {}; const g = MOD[k]; if (!g) { const ph = new T.Mesh(new T.BoxGeometry(.5, h, .5), mat('#ff4fb4')); ph.position.y = h / 2; const gr = new T.Group(); gr.add(ph); return gr; }
  const sk = g.animations.length || /chef|gusano|brocoli|maestro|buho/.test(k);
  const m = sk ? T.SkeletonUtils.clone(g.scene) : g.scene.clone(true);
  m.traverse(x => { if (x.isMesh) { x.material = x.material.clone(); if (o.tinte) { x.material.color.set(o.tinte); if (o.gris) { x.material.onBeforeCompile = sh => { sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n#ifdef USE_MAP\n float lmG = dot(sampledDiffuseColor.rgb, vec3(.299,.587,.114)); diffuseColor.rgb = diffuse * clamp(.12 + lmG * .9, 0., 1.);\n#endif'); }; x.material.customProgramCacheKey = () => 'gris'; x.material.envMapIntensity = .5; x.material.emissive = new T.Color(o.tinte); x.material.emissiveIntensity = .18; x.material.roughness = Math.max(.35, x.material.roughness); } } if (o.emis) { x.material.emissive = new T.Color(o.emis); x.material.emissiveIntensity = o.emisI || .4; } } });
  const caja = new T.Box3().setFromObject(m), tam = new T.Vector3(); caja.getSize(tam);
  const k2 = h / (o.ancho ? Math.max(tam.x, tam.z) : tam.y || 1);
  const raiz = new T.Group(); m.scale.setScalar(k2);
  const c = new T.Vector3(); caja.getCenter(c);
  m.position.set(-c.x * k2, -caja.min.y * k2, -c.z * k2); raiz.add(m);
  raiz.userData.malla = m;
  if (g.animations.length) { const mx = new T.AnimationMixer(m), A = {}; g.animations.forEach(cl => { A[cl.name] = mx.clipAction(cl); }); raiz.userData.mx = mx; raiz.userData.A = A; raiz.userData.act = null; }
  return raiz;
}
/* animación de los personajes con clips: cambia con fundido; una sola vez y vuelve al reposo */
function anima(p, nom, una, vuelta) {
  const u = p.userData; if (!u.A) return; const a = u.A[nom] || u.A[Object.keys(u.A).find(k => k.toLowerCase().startsWith(String(nom).toLowerCase()))]; if (!a || u.act === a) return;
  a.reset(); a.setLoop(una ? T.LoopOnce : T.LoopRepeat, Infinity); a.clampWhenFinished = !!una; a.fadeIn(.3).play(); if (u.act) u.act.fadeOut(.3); u.act = a;
  if (una) { const mx = u.mx, f = e => { if (e.action === a) { mx.removeEventListener('finished', f); if (u.act === a) anima(p, vuelta || 'Idle'); } }; mx.addEventListener('finished', f); }
}
/* esqueletos automáticos (gusano, chef): ondulación por código hueso a hueso */
function ondula(p, tt, amp, vel) { const m = p.userData.malla; if (!m) return; if (!p.userData.huesos) { const hs = []; m.traverse(o => { if (o.isBone) hs.push(o); }); p.userData.huesos = hs; p.userData.h0 = hs.map(b => b.quaternion.clone()); } const hs = p.userData.huesos, q = new T.Quaternion(), e = new T.Euler(); hs.forEach((b, i) => { e.set(Math.sin(tt * vel + i * .55) * amp * .5, 0, Math.sin(tt * vel * .8 + i * .7) * amp); q.setFromEuler(e); b.quaternion.copy(p.userData.h0[i]).multiply(q); }); }

/* pies en el suelo: la caja de un modelo con esqueleto se mide en la pose de reposo y, ya animado, puede quedar flotando o hundido.
   Aquí se mide el punto más bajo de la malla ya animada (unas decenas de vértices de los pies) y se asienta en y = 0 del personaje. */
const PIES = [], PV = new T.Vector3();
function pisa(p, alto) {
  const m = p.userData.malla; if (!m || p.userData.pies) return p; const sk = []; m.traverse(o => { if (o.isSkinnedMesh) sk.push(o); }); if (!sk.length) return p;
  p.userData.pies = { sk, idx: null, n: 0, alto: 0, mide: alto || 0 }; PIES.push(p); return p;
}
function pasaPies() {
  for (let i = PIES.length - 1; i >= 0; i--) {
    const p = PIES[i], u = p.userData.pies, m = p.userData.malla; let raiz = p; while (raiz.parent) raiz = raiz.parent; if (raiz !== ESC) { PIES.splice(i, 1); p.userData.pies = null; continue; }
    p.updateWorldMatrix(true, true); const esc = p.getWorldScale(PV).y || 1, y0 = p.getWorldPosition(PV).y; u.n++;
    if (!u.idx || u.n % 240 === 0) {   /* se eligen los vértices más bajos de la pose actual (y se repasa de vez en cuando) */
      const todos = []; u.sk.forEach((s, si) => { const n = s.geometry.attributes.position.count, paso = Math.max(1, Math.floor(n / 1500)); const pos = s.geometry.attributes.position; for (let v = 0; v < n; v += paso) { PV.fromBufferAttribute(pos, v); s.boneTransform(v, PV); PV.applyMatrix4(s.matrixWorld); todos.push([PV.y, si, v]); } });
      todos.sort((a, b) => a[0] - b[0]); u.idx = todos.slice(0, 48).map(a => [a[1], a[2]]);
      if (u.mide && todos.length) { const real = (todos[todos.length - 1][0] - todos[0][0]) / esc; if (real > .01) { m.scale.multiplyScalar(clamp(u.mide / real, .4, 3)); u.mide = 0; u.idx = null; u.n = 0; continue; } }   /* la altura pedida, medida de verdad */
    }
    let min = Infinity; for (let j = 0; j < u.idx.length; j++) { const s = u.sk[u.idx[j][0]]; PV.fromBufferAttribute(s.geometry.attributes.position, u.idx[j][1]); s.boneTransform(u.idx[j][1], PV); PV.applyMatrix4(s.matrixWorld); if (PV.y < min) min = PV.y; }
    if (!isFinite(min)) continue; const d = (min - y0) / esc - u.alto;   /* lo que sobra (o falta) bajo los pies */
    m.position.y -= u.n < 3 ? d : d * .6;
  }
}

/* ---------- partículas (chispas, confeti, vapor) ---------- */
const PART = [];
function chispas(pos, n, col, o) {
  o = o || {}; for (let i = 0; i < n; i++) {
    const m = new T.Sprite(new T.SpriteMaterial({ map: o.tex || TEX.chispa, color: Array.isArray(col) ? col[ri(col.length)] : col, transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
    const s = (o.tam || .25) * rnd(.6, 1.3); m.scale.set(s, s, 1); m.position.copy(pos); ESC.add(m);
    const v = new T.Vector3(rnd(-1, 1), rnd(-.2, 1.2), rnd(-1, 1)).normalize().multiplyScalar((o.vel || 3) * rnd(.4, 1));
    PART.push({ m, v, t: 0, vida: (o.vida || .9) * rnd(.7, 1.2), g: o.g === undefined ? 4 : o.g, s });
  }
}
function confeti(pos, n) {
  for (let i = 0; i < n; i++) {
    const m = new T.Mesh(new T.PlaneGeometry(.12, .07), new T.MeshBasicMaterial({ color: ['#ff4fb4', '#ffd23f', '#56f7ff', '#7dff9a', '#b26bff', '#ffffff'][ri(6)], side: T.DoubleSide }));
    m.position.copy(pos).add(new T.Vector3(rnd(-2, 2), rnd(0, 1), rnd(-2, 2))); ESC.add(m);
    PART.push({ m, v: new T.Vector3(rnd(-2.5, 2.5), rnd(3, 7), rnd(-2.5, 2.5)), t: 0, vida: rnd(2.5, 4), g: 3, gira: new T.Vector3(rnd(-8, 8), rnd(-8, 8), rnd(-8, 8)), aire: .9 });
  }
}
function pasaPart(dt) {
  for (let i = PART.length - 1; i >= 0; i--) {
    const p = PART[i]; p.t += dt; const k = p.t / p.vida;
    if (k >= 1) { ESC.remove(p.m); p.m.material.dispose(); if (p.m.geometry && !p.m.isSprite) p.m.geometry.dispose(); PART.splice(i, 1); continue; }
    p.v.y -= p.g * dt; if (p.aire) p.v.multiplyScalar(Math.pow(p.aire, dt * 4)); p.m.position.addScaledVector(p.v, dt);
    if (p.gira) { p.m.rotation.x += p.gira.x * dt; p.m.rotation.y += p.gira.y * dt; }
    if (p.m.isSprite) { p.m.material.opacity = 1 - k * k; const s = p.s * (1 + k * .5); p.m.scale.set(s, s, 1); }
  }
}

/* ---------- sonido ---------- */
const AU = { ac: null, master: null, mus: null, fx: null, bufs: {}, on: true };
function au() { if (AU.ac) return AU.ac; try { const ac = new (window.AudioContext || window.webkitAudioContext)(); AU.ac = ac; AU.master = ac.createGain(); AU.master.gain.value = .9; AU.master.connect(ac.destination); AU.mus = ac.createGain(); AU.mus.gain.value = .32; AU.mus.connect(AU.master); AU.fx = ac.createGain(); AU.fx.gain.value = .8; AU.fx.connect(AU.master); cargaSonidos(); } catch (e) {} return AU.ac; }
const SON = { piro1: '../packs/wonderwalk/sfx/piro-1.mp3', piro2: '../packs/wonderwalk/sfx/piro-2.mp3', piro3: '../packs/wonderwalk/sfx/piro-3.mp3', piro4: '../packs/wonderwalk/sfx/piro-4.mp3', piro5: '../packs/wonderwalk/sfx/piro-5.mp3', carta: '../packs/comun/fx/carta-1.mp3', pop: '../packs/comun/fx/pop.mp3', popg: '../packs/comun/fx/pop-grave.mp3', moneda: '../packs/comun/fx/moneda.mp3', nivel: '../packs/comun/fx/nivel.mp3', victoria: '../packs/comun/fx/victoria.mp3', error: '../packs/comun/fx/error.mp3', fallo: '../packs/comun/fx/fallo.mp3', sorpresa: '../packs/comun/fx/sorpresa.mp3', burbuja: '../packs/comun/fx/burbuja.mp3', splat: '../packs/comun/fx/splat.mp3', ooh: '../packs/comun/fx/ooh.mp3', puntos: '../packs/comun/fx/puntos.mp3', laser: '../packs/comun/fx/laser.mp3', parpadeo: '../packs/comun/fx/parpadeo.mp3', clic: '../sonidos/fx_buttonclick.mp3', premio: '../sonidos/fx_prize.mp3', ding: '../sonidos/fx_ding.mp3', globo: '../sonidos/fx_balloon_explosion.mp3', listo: '../sonidos/fx_ready.mp3' };
function cargaSonidos() { Object.entries(SON).forEach(([k, u]) => fetch(u).then(r => r.arrayBuffer()).then(b => AU.ac.decodeAudioData(b)).then(d => { AU.bufs[k] = d; }).catch(() => {})); }
function fx(k, vol, tono) { const ac = au(); if (!ac || !AU.on) return; const b = AU.bufs[k]; if (!b) { sint(k === 'error' ? 160 : 520, .12, 'square', .08); return; } const s = ac.createBufferSource(); s.buffer = b; if (tono) s.playbackRate.value = tono; const g = ac.createGain(); g.gain.value = vol === undefined ? 1 : vol; s.connect(g); g.connect(AU.fx); s.start(); manda({ t: 'fx', k }); }
/* notas sintetizadas (el «Simón» de golosinas, la marimba de los aciertos) */
function sint(f, dur, tipo, vol, cuando, dst) { const ac = au(); if (!ac || !AU.on) return; const t0 = cuando || ac.currentTime, o = ac.createOscillator(), g = ac.createGain(); o.type = tipo || 'triangle'; o.frequency.setValueAtTime(f, t0); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol || .2, t0 + .012); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); o.connect(g); g.connect(dst || AU.fx); o.start(t0); o.stop(t0 + dur + .05); }
const nota = n => 440 * Math.pow(2, (n - 69) / 12);
function marimba(n, vol, cuando) { sint(nota(n), .5, 'sine', vol || .22, cuando); sint(nota(n + 12), .18, 'triangle', (vol || .22) * .35, cuando); }
/* ---------- música por código: un tema por zona, con ritmo que marca el pulso de luces ---------- */
const MUS = { on: false, bpm: 112, sig: 0, paso: 0, tema: null, pulso: 0, golpe: 0 };
const TEMAS = {
  plaza:   { bpm: 108, esc: [60, 62, 64, 67, 69, 72], acordes: [[48, 55, 64], [53, 60, 69], [55, 62, 71], [48, 55, 64]], mel: 'arp', ins: 'sine', bajo: 'triangle', swing: .12 },
  fantasia:{ bpm: 92,  esc: [62, 64, 66, 69, 71, 74], acordes: [[50, 57, 66], [47, 54, 62], [43, 50, 59], [45, 52, 61]], mel: 'celesta', ins: 'sine', bajo: 'sine', swing: 0 },
  absurdo: { bpm: 128, esc: [60, 63, 65, 67, 70, 72], acordes: [[48, 55, 63], [46, 53, 62], [44, 51, 60], [43, 50, 59]], mel: 'boing', ins: 'square', bajo: 'square', swing: .2 },
  golosinas:{ bpm: 116, esc: [65, 67, 69, 72, 74, 77], acordes: [[53, 60, 69], [50, 57, 65], [46, 53, 62], [48, 55, 64]], mel: 'arp', ins: 'triangle', bajo: 'triangle', swing: .1 },
  feria:   { bpm: 138, esc: [67, 69, 71, 72, 74, 76, 79], acordes: [[43, 59, 62], [50, 57, 66], [50, 57, 66], [43, 59, 62]], mel: 'vals', ins: 'triangle', bajo: 'triangle', swing: 0, vals: true },
  final:   { bpm: 120, esc: [60, 62, 64, 67, 69, 72, 74], acordes: [[48, 55, 64], [45, 52, 60], [41, 48, 57], [43, 50, 59]], mel: 'fanfarria', ins: 'sawtooth', bajo: 'triangle', swing: 0 }
};
function musica(nombre) { const ac = au(); if (!ac) return; MUS.tema = TEMAS[nombre] || null; MUS.bpm = MUS.tema ? MUS.tema.bpm : 100; if (MUS.tema && !MUS.on) { MUS.on = true; MUS.sig = ac.currentTime + .1; MUS.paso = 0; } if (!MUS.tema) MUS.on = false; }
function pasaMusica() {
  const ac = AU.ac; if (!ac || !MUS.on || !MUS.tema || !AU.on) return; const tm = MUS.tema, comp = tm.vals ? 3 : 4, paso = 60 / tm.bpm / 2;
  while (MUS.sig < ac.currentTime + .2) {
    const p = MUS.paso, tiempo = Math.floor(p / 2), bar = Math.floor(tiempo / comp) % 4, enT = tiempo % comp, med = p % 2, t0 = MUS.sig + (med ? paso * tm.swing : 0);
    const ac2 = tm.acordes[bar];
    if (!med) {
      if (enT === 0) { sint(nota(ac2[0] - 12), .45, tm.bajo, .16, t0, AU.mus); sint(55, .18, 'sine', .3, t0, AU.mus); }
      else if (tm.vals) { ac2.slice(1).forEach(n => sint(nota(n), .22, tm.ins, .05, t0, AU.mus)); }
      else if (enT === 2) { sint(nota(ac2[0] - 5), .3, tm.bajo, .12, t0, AU.mus); }
      if (!tm.vals && (enT === 1 || enT === 3)) { ruido(t0, .06, .05); }
      if (enT === 0) MUS.golpeT = t0;
    }
    /* melodía: arpegios y frases sencillas dentro de la escala de la zona */
    const esc = tm.esc;
    if (tm.mel === 'arp' && (p % 2 === 0 || Math.random() < .35)) sint(nota(ac2[(p >> 1) % 3] + 12 + (p % 8 === 7 ? 7 : 0)), .22, tm.ins, .05, t0, AU.mus);
    if (tm.mel === 'celesta' && p % 3 === 0) sint(nota(esc[(p * 5) % esc.length] + 12), .9, 'sine', .055, t0, AU.mus);
    if (tm.mel === 'boing' && p % 4 === 2) { sint(nota(esc[ri(esc.length)]), .12, 'square', .03, t0, AU.mus); }
    if (tm.mel === 'vals' && p % 2 === 0) sint(nota(esc[(Math.floor(p / 2) * 3 + bar) % esc.length] + 12), .3, 'triangle', .06, t0, AU.mus);
    if (tm.mel === 'fanfarria' && p % 4 === 0) { sint(nota(ac2[2] + 12), .35, 'sawtooth', .025, t0, AU.mus); sint(nota(ac2[1] + 12), .35, 'triangle', .04, t0, AU.mus); }
    MUS.sig += paso; MUS.paso++;
  }
}
function ruido(t0, dur, vol) { const ac = AU.ac, n = Math.floor(ac.sampleRate * dur), b = ac.createBuffer(1, n, ac.sampleRate), d = b.getChannelData(0); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n); const s = ac.createBufferSource(), g = ac.createGain(), f = ac.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 6000; s.buffer = b; g.gain.value = vol; s.connect(f); f.connect(g); g.connect(AU.mus); s.start(t0); }
/* pulso (0…1) que cae tras cada golpe de bombo: lo usan luces, cristales y bombillas */
function pulso() { const ac = AU.ac; if (!ac || !MUS.on || MUS.golpeT === undefined) return .3 + .3 * Math.sin(performance.now() / 300); const d = ac.currentTime - MUS.golpeT; return d < 0 ? 0 : Math.exp(-d * 5); }

/* ---------- música y ambiente grabados (los temas de Josep): suenan en continuo desde su archivo, por canales ----------
   suena('mus', 'menu', { bucle: true }) · suena('mus', null) lo apaga con un fundido · PISTAS.mus.a es el elemento de audio */
const PISTAS = {}, PISTA_URL = { menu: '../packs/meviland/musica/menu.mp3?v=18.43', desfile: '../packs/meviland/musica/desfile.mp3?v=18.43', piro: '../packs/wonderwalk/sfx/pirotecnia.mp3' };
function suena(canal, n, o) {
  o = o || {}; const ac = au(), act = PISTAS[canal]; if (!ac) return null; if (act && act.n === n) return act;
  if (act) { const g = act.g, a = act.a; try { g.gain.cancelScheduledValues(ac.currentTime); g.gain.setValueAtTime(g.gain.value, ac.currentTime); g.gain.linearRampToValueAtTime(0, ac.currentTime + (o.corte || .9)); } catch (e) {} setTimeout(() => { try { a.pause(); } catch (e) {} }, (o.corte || .9) * 1000 + 80); PISTAS[canal] = null; }
  if (!n || !PISTA_URL[n]) return null;
  const a = new Audio(PISTA_URL[n]); a.loop = !!o.bucle; a.preload = 'auto'; let g; try { const src = ac.createMediaElementSource(a); g = ac.createGain(); g.gain.value = 0; g.gain.linearRampToValueAtTime(o.vol === undefined ? .7 : o.vol, ac.currentTime + (o.entra || .4)); src.connect(g); g.connect(AU.master); } catch (e) { return null; }
  const p = PISTAS[canal] = { n, a, g, vol: o.vol === undefined ? .7 : o.vol, t0: ac.currentTime + (o.entra || .4) + .05 }; a.play().catch(() => { p.espera = true; }); return p;
}
/* si el navegador no dejó sonar antes del primer gesto, se arranca con él */
['pointerdown', 'keydown'].forEach(ev => addEventListener(ev, () => { if (AU.ac && AU.ac.state === 'suspended') AU.ac.resume(); Object.values(PISTAS).forEach(p => { if (p && p.espera) { p.espera = false; p.a.play().catch(() => { p.espera = true; }); } }); }, true));

/* ---------- voz de Mevi (narración, también para quien no ve bien la pantalla) ---------- */
/* La voz de Mevi va grabada (packs/meviland/voz/<idioma>/<huella>.mp3, una por frase; <idioma>.json guarda lo que dura cada una).
   Si una frase no tiene grabación (por ejemplo, el saludo con los nombres de los jugadores) se usa la que se indique en VOZ.alt y,
   en último caso, la voz del navegador. */
const VOZ = { on: (() => { try { return localStorage.getItem('MEVILAND_VOZ') !== '0'; } catch (e) { return true; } })(), habla: 0, cola: [], tFin: 0, man: {}, el: null, alt: null };
function cargaVoz(l) { if (VOZ.man[l] !== undefined) return; VOZ.man[l] = null; fetch('../packs/meviland/voz/' + l + '.json?v=18.47').then(r => r.ok ? r.json() : {}).then(j => { VOZ.man[l] = j || {}; }).catch(() => { VOZ.man[l] = {}; }); }
function vozHuella(t2) { let h = 0x811c9dc5; for (let i = 0; i < t2.length; i++) { const c = t2.charCodeAt(i); h ^= c & 255; h = Math.imul(h, 0x01000193) >>> 0; h ^= c >> 8; h = Math.imul(h, 0x01000193) >>> 0; } return ('0000000' + h.toString(16)).slice(-8); }
function callaVoz() { if (VOZ.el) { try { VOZ.el.pause(); } catch (e) {} VOZ.el = null; } try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {} }
/* dice una frase con la voz grabada; devuelve lo que dura en ms (0 si no hay grabación) */
function vozGrabada(txt) {
  const man = VOZ.man[LG]; if (!man) return 0; txt = VOZDE.get(txt) || txt; let h = vozHuella(txt); if (!man[h] && VOZ.alt) h = vozHuella(VOZDE.get(VOZ.alt) || VOZ.alt); VOZ.alt = null; if (!man[h]) return 0;
  if (VOZ.on) { const a = new Audio('../packs/meviland/voz/' + LG + '/' + h + '.mp3?v=18.47'); a.volume = 1; a.play().catch(() => {}); VOZ.el = a; }
  return man[h];
}
function vozDe(l) { const vs = speechSynthesis.getVoices(), pref = { es: 'es', en: 'en', ca: 'ca' }[l]; return vs.find(v => v.lang.toLowerCase().startsWith(pref) && /female|mujer|monica|paulina|helena|laura|lucia|elvira|samantha|google/i.test(v.name)) || vs.find(v => v.lang.toLowerCase().startsWith(pref)) || (l === 'ca' ? vs.find(v => v.lang.toLowerCase().startsWith('es')) : null); }
let subTimer = 0;
function di(txt, ms) {
  const el = $('sub'), sp = $('subT'); sp.textContent = txt; el.classList.add('on'); clearTimeout(subTimer); callaVoz();
  let dur = ms || Math.max(2600, txt.length * 62); const grab = vozGrabada(txt);
  if (grab) dur = Math.max(ms || 0, grab + 450);
  else if (VOZ.on && window.speechSynthesis && VOZ.man[LG] !== null) { try { const u = new SpeechSynthesisUtterance((VOZDE.get(txt) || txt).replace(/[«»¡!¿]/g, '')); const v = vozDe(LG); if (v) u.voice = v; u.lang = v ? v.lang : ({ es: 'es-ES', en: 'en-GB', ca: 'ca-ES' })[LG]; u.rate = 1.04; u.pitch = 1.6; u.volume = .9; u.onend = () => { VOZ.tFin = Math.min(VOZ.tFin, performance.now() + 300); }; speechSynthesis.speak(u); } catch (e) {} }
  VOZ.tFin = performance.now() + dur; subTimer = setTimeout(() => el.classList.remove('on'), dur);
  return dur;
}
const hablando = () => performance.now() < VOZ.tFin;
function grito(txt, ms) { const g = $('grito'); g.textContent = txt; g.classList.add('on'); setTimeout(() => g.classList.remove('on'), ms || 1300); }
function flota(txt, x, y, mal) { const d = document.createElement('div'); d.className = 'fl' + (mal ? ' mal' : ''); d.textContent = txt; d.style.left = x + 'px'; d.style.top = y + 'px'; ST.appendChild(d); setTimeout(() => d.remove(), 1000); }

/* ---------- Mevi en 3D: la anfitriona que acompaña a los jugadores ---------- */
/* Mevi no va pegada a la pantalla: es un personaje más del mundo. Camina por el suelo a la derecha de los jugadores, da sombra
   y se gira hacia ellos cuando se paran. modo: 'sigue' (acompaña a la cámara) · 'fija' (se queda en MEVI.fijo) · 'camara' (a bordo, pegada a la cámara: la vagoneta) */
const MEVI = { p: null, cara: null, A: {}, mx: null, act: null, t: 0, gesto: 0, sitio: new T.Vector3(1.05, -.96, -1.62), visible: true, modo: 'sigue', fijo: new T.Vector3(), alto: 1.15, dx: 2.7, dz: 4.6, suelo: 0, salto: true, anda: false, mira: 0, dest: new T.Vector3(), malla: null, blob: null };
function montaMevi() {
  const g = MOD.mevi; if (!g) return; const m = T.SkeletonUtils.clone(g.scene); m.traverse(o => { if (o.isMesh) { o.material = o.material.clone(); o.castShadow = true; o.receiveShadow = false; o.frustumCulled = false; } });
  const bb = new T.Box3().setFromObject(m), alto = bb.max.y - bb.min.y || 1; MEVI.k0 = 1 / alto; m.scale.setScalar(MEVI.k0); MEVI.malla = m;
  try { if (window.MEVICARA) MEVI.cara = MEVICARA(T, m, '../packs/comun/mevi/caras.png?v=18.37'); } catch (e) {}
  const p = new T.Group(); p.add(m); p.userData.malla = m; MEVI.p = p; MEVI.mx = new T.AnimationMixer(m); g.animations.forEach(c => { MEVI.A[c.name] = MEVI.mx.clipAction(c); });
  ESC.add(p); meviAnim('reposo'); pisa(p);
  /* sombra de contacto: siempre hay una mancha suave bajo sus pies, también donde no llega la sombra del sol */
  const blob = new T.Mesh(new T.CircleGeometry(.5, 24), new T.MeshBasicMaterial({ map: lienzo(64, 64, q => { const gr = q.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(0,0,0,.6)'); gr.addColorStop(.6, 'rgba(0,0,0,.28)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); q.fillStyle = gr; q.fillRect(0, 0, 64, 64); }), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })); blob.rotation.x = -Math.PI / 2; blob.renderOrder = 1; ESC.add(blob); MEVI.blob = blob;
  /* una luz propia, cálida y suave, para que se la vea bien en las salas oscuras */
  const l = new T.PointLight('#ffe9d0', .7, 3.2); l.position.set(-.5, 1.3, 1); p.add(l);
}
function meviAnim(n, una) { const a = MEVI.A[n]; if (!a || MEVI.act === a) return; a.reset(); a.setLoop(una ? T.LoopOnce : T.LoopRepeat, Infinity); a.clampWhenFinished = !!una; a.fadeIn(.25).play(); if (MEVI.act) MEVI.act.fadeOut(.25); MEVI.act = a; MEVI.gesto = una ? a.getClip().duration : 0; }
function meviGesto(n) { meviAnim(n, true); }
const MV1 = new T.Vector3(), MV2 = new T.Vector3(), MV3 = new T.Vector3();
function pasaMevi(dt) {
  const p = MEVI.p; if (!p) return; MEVI.t += dt; MEVI.mx.update(dt);
  if (MEVI.gesto > 0) { MEVI.gesto -= dt; if (MEVI.gesto <= 0) meviAnim(MEVI.anda ? 'andar' : 'reposo'); }
  p.visible = MEVI.visible; MEVI.blob.visible = MEVI.visible && MEVI.modo !== 'camara';
  if (MEVI.cara) { MEVI.cara.parpa(MEVI.t); MEVI.cara.habla(MEVI.t, hablando()); }
  /* la música y el ambiente dejan sitio a la voz: mientras Mevi habla, bajan a un tercio, y vuelven al acabar */
  const hb = hablando(); if (AU.mus) AU.mus.gain.value += ((hb ? .1 : .3) - AU.mus.gain.value) * Math.min(1, dt * 5);
  if (AU.ac) for (const c in PISTAS) { const p = PISTAS[c]; if (!p || AU.ac.currentTime < p.t0) continue; p.g.gain.value += (p.vol * (hb ? .32 : 1) - p.g.gain.value) * Math.min(1, dt * 5); }
  CAM.updateMatrixWorld(); CAM.getWorldPosition(MV1); CAM.getWorldDirection(MV2);
  if (MEVI.modo === 'camara') {   /* a bordo: en su asiento, a la derecha */
    p.scale.setScalar(.46); MV3.copy(MEVI.sitio).applyMatrix4(CAM.matrixWorld); p.position.copy(MV3); p.quaternion.copy(CAM.quaternion); p.rotateY(-.42); MEVI.salto = true; return;
  }
  p.scale.setScalar(MEVI.alto);
  if (MEVI.modo === 'fija') MEVI.dest.copy(MEVI.fijo);
  else {   /* su sitio: el punto del suelo que cae abajo a la derecha de la vista (pies y sombra siempre dentro de la pantalla, sea cual sea el formato) */
    const vc = MEVI.vc || (MEVI.vc = new T.PerspectiveCamera()); vc.fov = CAM.fov; vc.aspect = CAM.aspect; vc.near = CAM.near; vc.far = CAM.far; vc.updateProjectionMatrix();
    if (typeof MU !== 'undefined' && !MU.libre) { vc.position.copy(MU.cp); vc.lookAt(MU.cm); MV1.copy(MU.cp); } else { vc.position.copy(MV1); vc.quaternion.copy(CAM.getWorldQuaternion(MEVI.q || (MEVI.q = new T.Quaternion()))); }
    vc.updateMatrixWorld(true); const ax = CAM.aspect < 1 ? .5 : .66; MV3.set(ax, -.8, .5).unproject(vc).sub(MV1).normalize();
    MV2.y = 0; if (MV2.lengthSq() < 1e-4) MV2.set(0, 0, -1); MV2.normalize();
    let tt2 = MV3.y < -.02 ? (MEVI.suelo - MV1.y) / MV3.y : 99; const plano = Math.hypot(MV3.x, MV3.z) * tt2;
    if (plano > 3 && plano < 11) MEVI.dest.copy(MV1).addScaledVector(MV3, tt2); else { const dd = clamp(plano, 3.4, 8); MEVI.dest.copy(MV1).addScaledVector(MV2, dd * .86).addScaledVector(MV3.set(-MV2.z, 0, MV2.x), dd * .5 * (CAM.aspect < 1 ? .5 : 1)); }
    MEVI.dest.y = MEVI.suelo; MEVI.alto = lerp(MEVI.alto, clamp(MEVI.dest.distanceTo(MV1) * .24, 1.15, 1.75), MEVI.salto ? 1 : Math.min(1, dt * 3)); CAM.getWorldPosition(MV1);
  }
  if (window.apartado && MU.obs) { if (!MU.cuerpos.includes(MEVI.cu)) MEVI.cu = cuerpo(() => MEVI.visible && MEVI.modo !== 'camara' ? MEVI.p.position : null, .4); apartado(MEVI.dest, .4, MEVI.cu); }   /* v18.51 · su sitio, nunca dentro de la fuente ni de nadie */
  if (MEVI.salto) { p.position.copy(MEVI.dest); MEVI.salto = false; MEVI.anda = false; }
  const d = MV3.copy(MEVI.dest).sub(p.position); d.y = 0; const dist = d.length(); p.position.y = MEVI.dest.y;
  let ry;
  if (dist > (MEVI.anda ? .12 : .7)) {   /* camina hasta su sitio (si se queda muy atrás, corretea) */
    const v = Math.min(dist, (dist > 4 ? 9 : dist > 1.5 ? 4.4 : 2.2) * dt); p.position.addScaledVector(d.normalize(), v); if (window.apartado && MU.obs) apartado(p.position, .4, MEVI.cu); ry = Math.atan2(d.x, d.z);
    if (!MEVI.anda) { MEVI.anda = true; if (MEVI.gesto <= 0) meviAnim('andar'); }
  } else { if (MEVI.anda) { MEVI.anda = false; if (MEVI.gesto <= 0) meviAnim('reposo'); } ry = Math.atan2(MV1.x - p.position.x, MV1.z - p.position.z) - .25; }   /* parada: mira a los jugadores, un poco de lado */
  let dr = ry - MEVI.mira; while (dr > Math.PI) dr -= Math.PI * 2; while (dr < -Math.PI) dr += Math.PI * 2; MEVI.mira += dr * Math.min(1, dt * 7); p.rotation.set(0, MEVI.mira, 0);
  MEVI.blob.position.set(p.position.x, p.position.y + .03, p.position.z); MEVI.blob.scale.setScalar(MEVI.alto * .95);
}

/* ---------- mando: ratón, dedo, teclado o móvil de MSGAME ---------- */
const PTR = { x: .5, y: .5, px: .5, py: .5, vel: 0, down: false, toca: false, ultimo: 0, on: false };
const RAY = new T.Raycaster(), NDC = new T.Vector2();
function ponPtr(x, y) { PTR.x = clamp(x, 0, 1); PTR.y = clamp(y, 0, 1); PTR.ultimo = performance.now(); }
ST.addEventListener('pointermove', e => { const r = ST.getBoundingClientRect(); ponPtr((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height); });
ST.addEventListener('pointerdown', e => { if (e.target.closest('button,.modo')) return; au(); const r = ST.getBoundingClientRect(); ponPtr((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height); PTR.down = true; PTR.toca = true; });
addEventListener('pointerup', () => { PTR.down = false; }); addEventListener('pointercancel', () => { PTR.down = false; });
addEventListener('keydown', e => {
  if (e.key === ' ' || e.key === 'Enter') { if (!e.repeat) PTR.toca = true; PTR.down = true; au(); }
  else if (e.key.startsWith('Arrow')) { const d = .03; if (e.key === 'ArrowLeft') PTR.x -= d; if (e.key === 'ArrowRight') PTR.x += d; if (e.key === 'ArrowUp') PTR.y -= d; if (e.key === 'ArrowDown') PTR.y += d; ponPtr(PTR.x, PTR.y); e.preventDefault(); }
  else if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') { if (window.JUEGO) JUEGO.pausa(); }
});
addEventListener('keyup', e => { if (e.key === ' ' || e.key === 'Enter') PTR.down = false; });
let padD = false;
addEventListener('message', e => { const m = e.data; if (!m || typeof m !== 'object' || e.source !== parent) return;
  if (m.t === 'pad') { ponPtr(m.x, m.y); if (m.d && !padD) PTR.toca = true; PTR.down = !!m.d; padD = !!m.d; au(); }
  else if (m.t === 'fire') { PTR.toca = true; PTR.down = true; setTimeout(() => { if (!padD) PTR.down = false; }, 350); au(); }
  else if (m.t === 'pausa') { if (window.JUEGO) JUEGO.pausaExt(!!m.v); }
  else if (m.t === 'jug') { if (window.JUEGO) JUEGO.jugadores(m); }
  else if (m.t === 'atras') { if (window.JUEGO) JUEGO.atras(); } });
/* rayo desde la cámara por la mirilla */
function apunta(objs) { NDC.set(PTR.x * 2 - 1, -(PTR.y * 2 - 1)); RAY.setFromCamera(NDC, CAM); const h = RAY.intersectObjects(objs, true); return h.length ? h[0] : null; }
function deQuien(o, clave) { while (o) { if (o.userData && o.userData[clave] !== undefined) return o; o = o.parent; } return null; }
/* posición en pantalla (px del escenario) de un punto 3D */
const V3 = new T.Vector3();
function aPantalla(p) { V3.copy(p).project(CAM); return [(V3.x + 1) / 2 * W, (1 - V3.y) / 2 * H]; }
function retiAnillo(k) { const a = document.querySelector('#reti .anillo'); a.style.strokeDashoffset = String(251.3 * (1 - clamp(k, 0, 1))); }
