/* MEVILAND · túneles, muros de puertas, salas nuevas, castillo y gran desfile · MSGAME · mediaservi.com · GPL-3.0 */
'use strict';

/* ======================= TEXTOS NUEVOS (es / en / ca) ======================= */
Object.assign(TX.es, {
  m0d: '2 Llaves Estelares. Sin prisas: ideal para peques.', m1d: '3 Llaves Estelares y puertas trampa.', m2d: '4 Llaves, mutaciones, más trampas y un secreto…',
  tunel_fantasia: 'Por aquí se llega a la Tierra de Fantasía…', tunel_absurdo: 'Agarraos: este túnel lleva al Absurdo.', tunel_golosinas: '¡Mmm! Este túnel huele a caramelo.', tunel_feria: '¿Oís la música? ¡La Feria está al final del túnel!',
  puertas3: 'Tres puertas, tres salas. ¿Por cuál empezamos? Apuntad a una y mantened.', puertas2: 'Quedan dos salas. ¿Cuál elegís?', puertasT: 'Solo una de estas puertas lleva a la última sala… ¡Elegid bien!', puertasS: 'Una puerta lleva a la última sala. La otra… ¡es una sorpresa!',
  otraSala: '¡A por la siguiente sala!', ultimaSala: '¡Solo queda una sala para la llave!',
  sorpresa: '¡Puerta sorpresa! Un regalo de bienvenida. Ahora, la otra puerta.', sorpresaT: '¡SORPRESA!',
  trampa: '¡Puerta trampa! Era un armario lleno de confeti. Probad otra.',
  s_galletas: 'Las Galletas Gemelas', i_galletas: 'Cada galleta esconde una golosina. Levantad dos iguales para hacer pareja.', b_galletas: 'Parejas',
  s_tiro: 'La Caseta de Tiro', i_tiro: 'Dad a las dianas doradas. ¡A las moradas con el aspa, ni tocarlas!', b_tiro: 'Dianas',
  castillo: 'El Castillo de las Estrellas', portalCruza: '¡Cruzamos el Gran Portal!',
  des1: '¡Mirad! El Castillo de las Estrellas… ¡y todo el reino ha venido a veros!', des2: '¡Que empiece el Gran Desfile!', des3: 'Hasta los reyes saludan desde el palco. ¡Sois los invitados de honor!',
  fin_desfile: '¡Gracias por visitar MEVILAND! ¡Volved pronto!'
});
Object.assign(TX.en, {
  m2d: '4 Keys, mutations, more traps and a secret…',
  tunel_fantasia: 'This way to the Land of Fantasy…', tunel_absurdo: 'Hold tight: this tunnel leads to Nonsense.', tunel_golosinas: 'Mmm! This tunnel smells of candy.', tunel_feria: 'Can you hear the music? The Funfair is at the end of the tunnel!',
  puertas3: 'Three doors, three rooms. Where do we start? Aim at one and hold.', puertas2: 'Two rooms left. Which one?', puertasT: 'Only one of these doors leads to the last room… Choose wisely!', puertasS: 'One door leads to the last room. The other… is a surprise!',
  otraSala: 'On to the next room!', ultimaSala: 'Just one more room for the key!',
  sorpresa: 'Surprise door! A welcome gift. Now, the other door.', sorpresaT: 'SURPRISE!',
  trampa: 'Trap door! It was a cupboard full of confetti. Try another.',
  s_galletas: 'The Twin Cookies', i_galletas: 'Each cookie hides a sweet. Flip two of a kind to make a pair.', b_galletas: 'Pairs',
  s_tiro: 'The Shooting Gallery', i_tiro: 'Hit the golden targets. Do not touch the purple ones with a cross!', b_tiro: 'Targets',
  castillo: 'The Castle of Stars', portalCruza: 'Through the Great Portal we go!',
  des1: 'Look! The Castle of Stars… and the whole kingdom has come to see you!', des2: 'Let the Grand Parade begin!', des3: 'Even the king and queen are waving from the royal box. You are the guests of honour!',
  fin_desfile: 'Thank you for visiting MEVILAND! Come back soon!'
});
Object.assign(TX.ca, {
  m2d: '4 Claus, mutacions, més trampes i un secret…',
  tunel_fantasia: 'Per aquí s\'arriba a la Terra de Fantasia…', tunel_absurdo: 'Agafeu-vos fort: aquest túnel porta a l\'Absurd.', tunel_golosinas: 'Mmm! Aquest túnel fa olor de caramel.', tunel_feria: 'Sentiu la música? La Fira és al final del túnel!',
  puertas3: 'Tres portes, tres sales. Per quina comencem? Apunteu-ne una i manteniu.', puertas2: 'Queden dues sales. Quina trieu?', puertasT: 'Només una d\'aquestes portes porta a l\'última sala… Trieu bé!', puertasS: 'Una porta porta a l\'última sala. L\'altra… és una sorpresa!',
  otraSala: 'Cap a la sala següent!', ultimaSala: 'Només queda una sala per a la clau!',
  sorpresa: 'Porta sorpresa! Un regal de benvinguda. Ara, l\'altra porta.', sorpresaT: 'SORPRESA!',
  trampa: 'Porta trampa! Era un armari ple de confeti. Proveu-ne una altra.',
  s_galletas: 'Les Galetes Bessones', i_galletas: 'Cada galeta amaga una llaminadura. Aixequeu-ne dues d\'iguals per fer parella.', b_galletas: 'Parelles',
  s_tiro: 'La Caseta de Tir', i_tiro: 'Toqueu les dianes daurades. Les liles amb l\'aspa, ni tocar-les!', b_tiro: 'Dianes',
  castillo: 'El Castell de les Estrelles', portalCruza: 'Travessem el Gran Portal!',
  des1: 'Mireu! El Castell de les Estrelles… i tot el regne ha vingut a veure-us!', des2: 'Que comenci la Gran Desfilada!', des3: 'Fins i tot els reis saluden des de la llotja. Sou els convidats d\'honor!',
  fin_desfile: 'Gràcies per visitar MEVILAND! Torneu aviat!'
});

/* el parque es un reino: textos de bienvenida y pergamino */
Object.assign(TX.es, { fd_desfile: 'Con dos Llaves Estelares se abre el portón del castillo y todo el reino sale a celebrarlo con vosotros.', lema: 'EL REINO DE FANTASÍA DE MEVI', cargando: 'Abriendo las puertas del reino…', plaza: 'Gran Plaza de la Muralla',
  hola: '¡Hola! Soy Mevi. ¡Bienvenidos a MEVILAND, mi reino de fantasía!', holaN: '¡Hola, {0}! Soy Mevi. ¡Bienvenidos a MEVILAND, mi reino de fantasía!',
  objetivo: 'Para abrir el portón del castillo necesitamos {0} Llaves Estelares. Cada mundo guarda una.', comoElegir: 'Apuntad a una puerta de la muralla y mantened la mirilla encima para entrar… ¡o tocad!',
  otraTierra: '¿A qué mundo vamos ahora?', yaTenemos: '¡Esa llave ya es nuestra! Probemos otro mundo.', portalAbre: '¡Todas las llaves! El portón del castillo se abre… ¡Apuntad al portón!',
  pgSub: 'el reino de fantasía de Mevi', pgSigue: 'Toca para entrar',
  pgTxt: 'A todos los viajeros que este pergamino vieren, <b>¡salud!</b>|Por orden de <b>Mevi</b> quedáis invitados a su reino. Cuatro mundos guardan las <b>Llaves Estelares</b>: reunidlas y se abrirán las puertas del <b>Castillo de las Estrellas</b>, donde aguarda la gran fiesta.|<b>¡Sed bienvenidos a MEVILAND!</b>' });
Object.assign(TX.en, { fd_desfile: 'With two Star Keys the castle gate opens and the whole kingdom comes out to celebrate with you.', lema: 'MEVI\'S KINGDOM OF FANTASY', cargando: 'Opening the kingdom gates…', plaza: 'Great Square of the Wall',
  hola: 'Hi! I\'m Mevi. Welcome to MEVILAND, my kingdom of fantasy!', holaN: 'Hi, {0}! I\'m Mevi. Welcome to MEVILAND, my kingdom of fantasy!',
  objetivo: 'To open the castle gate we need {0} Star Keys. Each world keeps one.', comoElegir: 'Aim at a door in the wall and hold the sight on it to enter… or tap!',
  otraTierra: 'Which world next?', yaTenemos: 'That key is already ours! Let\'s try another world.', portalAbre: 'All the keys! The castle gate is opening… Aim at the gate!',
  pgSub: 'Mevi\'s kingdom of fantasy', pgSigue: 'Tap to enter',
  pgTxt: 'To all travellers who may read this scroll, <b>greetings!</b>|By order of <b>Mevi</b> you are invited to her kingdom. Four worlds keep the <b>Star Keys</b>: gather them and the gates of the <b>Castle of Stars</b> will open, where the great feast awaits.|<b>Welcome to MEVILAND!</b>' });
Object.assign(TX.ca, { fd_desfile: 'Amb dues Claus Estel·lars s\'obre el portal del castell i tot el regne surt a celebrar-ho amb vosaltres.', lema: 'EL REGNE DE FANTASIA DE MEVI', cargando: 'Obrint les portes del regne…', plaza: 'Gran Plaça de la Muralla',
  hola: 'Hola! Soc la Mevi. Benvinguts a MEVILAND, el meu regne de fantasia!', holaN: 'Hola, {0}! Soc la Mevi. Benvinguts a MEVILAND, el meu regne de fantasia!',
  objetivo: 'Per obrir el portal del castell ens calen {0} Claus Estel·lars. Cada món en guarda una.', comoElegir: 'Apunteu a una porta de la muralla i manteniu-hi el punt de mira per entrar… o toqueu!',
  otraTierra: 'A quin món anem ara?', yaTenemos: 'Aquesta clau ja és nostra! Provem un altre món.', portalAbre: 'Totes les claus! El portal del castell s\'obre… Apunteu al portal!',
  pgSub: 'el regne de fantasia de Mevi', pgSigue: 'Toca per entrar',
  pgTxt: 'A tots els viatgers que aquest pergamí veuran, <b>salut!</b>|Per ordre de la <b>Mevi</b> sou convidats al seu regne. Quatre mons guarden les <b>Claus Estel·lars</b>: reuniu-les i s\'obriran les portes del <b>Castell de les Estrelles</b>, on espera la gran festa.|<b>Benvinguts a MEVILAND!</b>' });

/* ======================= PERGAMINO DE BIENVENIDA ======================= */
const PG = { on: false, fin: false, i: 0, n: 0, t: 0, f: null, letras: [] };
function pergamino(fin) {
  const el = $('perga'), tx = $('pgTxt'); PG.f = fin; PG.on = true; PG.fin = false; PG.i = 0; PG.t = -.9; el.classList.remove('fin'); $('pgSub').textContent = t('pgSub'); $('pgSigue').textContent = t('pgSigue'); tx.innerHTML = ''; PG.letras = [];
  t('pgTxt').split('|').forEach((par, pi) => { const p = document.createElement('div'); if (pi) p.style.marginTop = '.5em'; par.split(/(<b>.*?<\/b>)/).forEach(tr => { const neg = /^<b>/.test(tr), txt = tr.replace(/<\/?b>/g, ''); const cont = neg ? document.createElement('b') : p; txt.split(/(\s+)/).forEach(pal => { if (!pal) return; if (/^\s+$/.test(pal)) { cont.appendChild(document.createTextNode(' ')); return; } const w = document.createElement('span'); w.style.whiteSpace = 'nowrap'; pal.split('').forEach(ch => { const i = document.createElement('i'); i.textContent = ch; w.appendChild(i); PG.letras.push(i); }); cont.appendChild(w); }); if (neg) p.appendChild(cont); }); tx.appendChild(p); });
  PG.n = PG.letras.length; el.style.display = 'flex'; void el.offsetWidth; el.classList.add('on'); fx('carta', .8);
  /* Mevi lee el pergamino en voz alta y la pluma escribe a su paso */
  callaVoz(); PG.cps = 30; setTimeout(() => { if (!PG.on || PG.fin) return; const ms = vozGrabada(t('pgTxt').replace(/<\/?b>/g, '').replace(/\|/g, ' ')); if (ms) { PG.cps = PG.n / (ms / 1000) * 1.04; VOZ.tFin = performance.now() + ms; } }, 900);
}
function pasaPergamino(dt) {
  if (!PG.on) return; const el = $('perga'); PG.t += dt;
  if (!PG.fin) { const hasta = Math.min(PG.n, Math.floor(Math.max(0, PG.t) * (PG.cps || 30))); if (hasta > PG.i) { for (let i = PG.i; i < hasta; i++) PG.letras[i].classList.add('v'); if (Math.floor(hasta / 4) !== Math.floor(PG.i / 4)) sint(1700 + Math.random() * 900, .025, 'triangle', .012); PG.i = hasta; }   /* el rasgueo de la pluma */
    if (PG.i >= PG.n) { PG.fin = true; PG.t = 0; el.classList.add('fin'); setTimeout(() => fx('popg', .7), 250); } }
  const pulsa = PTR.toca; if (pulsa) PTR.toca = false;
  if (pulsa && !PG.fin && PG.t > .2) { PG.letras.forEach(i => i.classList.add('v')); PG.i = PG.n; }
  else if ((pulsa && PG.fin && PG.t > .5) || (BOT && PG.t > .1)) { PG.on = false; callaVoz(); el.classList.remove('on'); setTimeout(() => { if (!PG.on) el.style.display = ''; }, 650); const f = PG.f; PG.f = null; if (f) f(); }
}
$('perga').addEventListener('pointerdown', () => { au(); PTR.toca = true; });

/* ======================= TEXTURAS DE MURO ======================= */
function txMuro(tipo, c1, c2, c3) {
  const k = 'm' + tipo + c1 + c2 + (c3 || ''); if (TXS[k]) return TXS[k];
  const grano = (q, w, n) => { for (let i = 0; i < n; i++) { q.fillStyle = `rgba(${ri(2) ? '255,235,215' : '40,20,45'},${rnd(.02, .07)})`; q.fillRect(rnd(0, w), rnd(0, w), 3, 3); } };
  return TXS[k] = lienzo(512, 512, (q, w) => {
    if (tipo === 'azulejo') { for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { q.fillStyle = (x + y) % 2 ? c1 : c2; q.fillRect(x * 64, y * 64, 64, 64); q.strokeStyle = c3 || 'rgba(40,20,60,.45)'; q.lineWidth = 4; q.strokeRect(x * 64 + 2, y * 64 + 2, 60, 60); q.fillStyle = 'rgba(255,255,255,.1)'; q.fillRect(x * 64 + 8, y * 64 + 8, 20, 8); } }
    else if (tipo === 'rayas') { for (let x = 0; x < 8; x++) { q.fillStyle = x % 2 ? c1 : c2; q.fillRect(x * 64, 0, 64, w); const gr = q.createLinearGradient(x * 64, 0, x * 64 + 64, 0); gr.addColorStop(0, 'rgba(0,0,0,.16)'); gr.addColorStop(.5, 'rgba(255,255,255,.08)'); gr.addColorStop(1, 'rgba(0,0,0,.16)'); q.fillStyle = gr; q.fillRect(x * 64, 0, 64, w); } }
    else if (tipo === 'tablas') { for (let x = 0; x < 8; x++) { q.fillStyle = mezcla(c1, c2, Math.random()); q.fillRect(x * 64, 0, 64, w); q.fillStyle = 'rgba(30,12,20,.5)'; q.fillRect(x * 64, 0, 4, w); for (let i = 0; i < 14; i++) { q.strokeStyle = 'rgba(40,18,10,.16)'; q.lineWidth = 2; q.beginPath(); const xx = x * 64 + rnd(8, 58); q.moveTo(xx, 0); q.bezierCurveTo(xx + rnd(-8, 8), w * .3, xx + rnd(-8, 8), w * .6, xx, w); q.stroke(); } } }
    else if (tipo === 'lunares') { q.fillStyle = c1; q.fillRect(0, 0, w, w); for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { q.fillStyle = (x + y) % 3 ? c2 : (c3 || c2); q.beginPath(); q.arc(x * 64 + 32 + (y % 2) * 32, y * 64 + 32, 15, 0, 7); q.fill(); } }
    else if (tipo === 'libros') { q.fillStyle = '#2a1840'; q.fillRect(0, 0, w, w); const cs = ['#8a3fb0', '#3f6ab0', '#b03f6a', '#3fa08a', '#b08a3f', '#5a3f9a', '#9a4a3a']; for (let f = 0; f < 4; f++) { let x = 4; while (x < w - 6) { const an = rnd(18, 38), al = rnd(88, 112); q.fillStyle = cs[ri(cs.length)]; q.fillRect(x, f * 128 + 120 - al, an - 2, al); q.fillStyle = 'rgba(255,220,150,.75)'; q.fillRect(x + 3, f * 128 + 120 - al + 12, an - 8, 4); q.fillRect(x + 3, f * 128 + 120 - al + 22, an - 8, 2); x += an; } q.fillStyle = '#5a3a2a'; q.fillRect(0, f * 128 + 120, w, 8); } }
    else if (tipo === 'chocolate') { q.fillStyle = c1; q.fillRect(0, 0, w, w); for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { const gr = q.createLinearGradient(x * 128, y * 128, x * 128 + 128, y * 128 + 128); gr.addColorStop(0, c2); gr.addColorStop(1, c1); q.fillStyle = gr; rr(q, x * 128 + 8, y * 128 + 8, 112, 112, 12); q.fill(); q.fillStyle = 'rgba(255,230,200,.12)'; rr(q, x * 128 + 18, y * 128 + 18, 60, 14, 6); q.fill(); } }
    else if (tipo === 'jengibre') { q.fillStyle = c1; q.fillRect(0, 0, w, w); for (let i = 0; i < 500; i++) { q.fillStyle = `rgba(${ri(2) ? '90,40,10' : '255,210,150'},${rnd(.05, .14)})`; q.beginPath(); q.arc(rnd(0, w), rnd(0, w), rnd(1, 4), 0, 7); q.fill(); } q.strokeStyle = c2; q.lineWidth = 9; q.lineCap = 'round'; for (let y = 0; y < 4; y++) { q.beginPath(); for (let x = 0; x <= w; x += 8) { const yy = y * 128 + 64 + Math.sin(x / w * Math.PI * 8) * 14; x ? q.lineTo(x, yy) : q.moveTo(x, yy); } q.stroke(); } for (let i = 0; i < 16; i++) { q.fillStyle = [c3 || '#e0408a', '#e8b22a', '#3f98e0', '#2fb85a'][i % 4]; q.beginPath(); q.arc((i % 4) * 128 + 64, Math.floor(i / 4) * 128 + 128, 12, 0, 7); q.fill(); } }
    else if (tipo === 'telon') { q.fillStyle = c1; q.fillRect(0, 0, w, w); for (let x = 0; x < 16; x++) { const gr = q.createLinearGradient(x * 32, 0, x * 32 + 32, 0); gr.addColorStop(0, 'rgba(0,0,0,.34)'); gr.addColorStop(.5, 'rgba(255,255,255,.1)'); gr.addColorStop(1, 'rgba(0,0,0,.34)'); q.fillStyle = gr; q.fillRect(x * 32, 0, 32, w); } for (let i = 0; i < 40; i++) { q.fillStyle = c2; estrella2D(q, rnd(0, w), rnd(0, w), rnd(5, 12), rnd(2, 5), 5); q.fill(); } }
    grano(q, w, 2200);
  }, [1, 1]);
}

/* los tres muros de cada tierra: cada sala de puertas es distinta */
const MUROS = {
  fantasia: [{ tx: ['piedra', '#6a5aa0', '#8672b8'], zoc: '#3d2d6a', corn: '#4a3a86', luz: '#c8a8ff' }, { tx: ['libros'], zoc: '#4a2e22', corn: '#6a4630', luz: '#ffcf8a' }, { tx: ['telon', '#7a1c52', '#e8b84a'], zoc: '#4a1030', corn: '#c8962e', luz: '#ffd58a' }],
  absurdo: [{ tx: ['azulejo', '#2aa39a', '#d8c9b0'], zoc: '#b8268a', corn: '#d19a12', luz: '#ffd27a' }, { tx: ['lunares', '#d1741f', '#2a8fb0', '#e8d0a8'], zoc: '#1f5f86', corn: '#b8268a', luz: '#ffe0a0' }, { tx: ['rayas', '#b8268a', '#d19a12'], zoc: '#1f6f6a', corn: '#2aa39a', luz: '#ffd27a' }],
  golosinas: [{ tx: ['jengibre', '#b8703a', '#f0dcc8', '#e0408a'], zoc: '#8a4a22', corn: '#e88ab0', luz: '#ffc890' }, { tx: ['chocolate', '#5a2f1c', '#8a4a2a'], zoc: '#3a1c10', corn: '#d8a878', luz: '#ffb870' }, { tx: ['rayas', '#d8487f', '#e8c8a8'], zoc: '#a82a5f', corn: '#3f9f86', luz: '#ffd0a0' }],
  feria: [{ tx: ['rayas', '#c22a3a', '#d8c2a0'], zoc: '#6a1626', corn: '#e8a92c', luz: '#ffd27a' }, { tx: ['tablas', '#8a5a3a', '#a8703f'], zoc: '#4a2c1c', corn: '#c22a3a', luz: '#ffc56b' }, { tx: ['telon', '#1c2a7a', '#e8c04a'], zoc: '#101a4a', corn: '#e8a92c', luz: '#9ad0ff' }]
};
/* aplique de pared con su halo */
function aplique(g, x, y, z, col, ret) { const p = new T.Group(); const br = cil(.05, .05, .3, mat('#3b2a55', { metalness: .6, roughness: .4 }), 6); br.rotation.x = Math.PI / 2; br.position.z = .15; p.add(br); const mv = new T.MeshStandardMaterial({ color: '#5b4a52', emissive: col, emissiveIntensity: 0, roughness: .3 }); const b = bola(.2, mv, 14); b.position.z = .36; p.add(b); const h = brillo(col, 2.2, 0); h.position.z = .4; p.add(h); const m = new T.Mesh(new T.CircleGeometry(1.7, 20), new T.MeshBasicMaterial({ map: TEX.chispa, color: col, transparent: true, opacity: 0, depthWrite: false, blending: T.AdditiveBlending })); m.position.z = .03; p.add(m); p.position.set(x, y, z); g.add(p); prende(k => { mv.emissiveIntensity = k * 2.4; h.material.opacity = k * .7; m.material.opacity = k * .4; }, ret || 0); return p; }
/* fachada con sus alas: cierra la vista por los tres lados para que ninguna puerta deje ver «lo de detrás» */
function fachada(g, k, n, xs) {
  const D = MUROS[k][n % 3], ZM = -6, AL = 6.6, AN = 30, tx0 = D.tx[0] === 'piedra' ? txPiedra(D.tx[1], D.tx[2]) : txMuro.apply(null, D.tx);
  const pano = (an, x, z, ry) => { const tx = tx0.clone(); tx.needsUpdate = true; tx.wrapS = tx.wrapT = T.RepeatWrapping; tx.repeat.set(an / 4, AL / 4); const gr = new T.Group(); gr.position.set(x, 0, z); gr.rotation.y = ry; g.add(gr);
    const m = caja(an, AL, .8, mat('#e9dfda', { map: tx, roughness: .88 })); m.position.y = AL / 2; m.receiveShadow = true; gr.add(m);
    const zo = caja(an + .1, .9, 1, mat(D.zoc, { roughness: .8 })); zo.position.y = .45; zo.receiveShadow = true; gr.add(zo);
    const co = caja(an + .2, .5, 1.3, mat(D.corn, { roughness: .6 })); co.position.y = AL + .25; co.castShadow = true; gr.add(co);
    const nb = Math.round(an / .9); for (let i = 0; i < nb; i++) { const c = ['#ffd27a', D.luz, '#fff0b8'][i % 3], mm = new T.MeshStandardMaterial({ color: mezcla(c, '#3a2a3a', .5), emissive: c, emissiveIntensity: 0, roughness: .3 }); const b = bola(.1, mm, 8); b.position.set(-an / 2 + (i + .5) * an / nb, AL - .12, .52); gr.add(b); prende(kk => { mm.emissiveIntensity = kk * 2; }, .3 + Math.abs(b.position.x) * .12); }
    return gr; };
  pano(AN, 0, ZM, 0); pano(16, -AN / 2 - 3.4, ZM + 6.6, Math.PI / 2 - .5); pano(16, AN / 2 + 3.4, ZM + 6.6, -Math.PI / 2 + .5);
  /* apliques entre puertas y hueco oscuro (el «armario») detrás de cada una */
  const cortes = [-AN / 2 + 2].concat(xs.slice(0, -1).map((x, i) => (x + xs[i + 1]) / 2), [AN / 2 - 2]); cortes.forEach((x, i) => aplique(g, x, 4.1, ZM + .42, D.luz, .2 + i * .25));
  xs.forEach(x => { const h = new T.Mesh(new T.PlaneGeometry(2.0, 3.3), new T.MeshBasicMaterial({ color: '#160a22' })); h.position.set(x, 1.65, ZM + .43); g.add(h); });
  /* remates propios de cada tierra, por encima y a los lados */
  if (k === 'fantasia') { [-13.5, 13.5].forEach((x, i) => { const to = cil(1.6, 1.8, AL + 3.4, mat('#e9dfda', { map: txPiedra('#6a5aa0', '#8672b8'), roughness: .9 }), 14); to.position.set(x, (AL + 3.4) / 2, ZM - .2); sombra(to); g.add(to); const te = new T.Mesh(new T.ConeGeometry(2.1, 3, 14), mat('#3a2a7a', { roughness: .5 })); te.position.set(x, AL + 4.9, ZM - .2); g.add(te); ventana(g, x, AL + 1.6, ZM + 1.62, .7, 1.2, 1 + i * .4, '#ffcf7a'); });
    for (let i = 0; i < 7; i++) { const cr = new T.Mesh(new T.OctahedronGeometry(rnd(.22, .4)), mat('#d9b3ff', { emissive: '#b07bff', emissiveIntensity: .9, roughness: .1 })); cr.scale.y = 1.9; cr.position.set(rnd(-12, 12), AL + .9, ZM + rnd(-.2, .3)); g.add(cr); anim(dt => { cr.rotation.y += dt; }); } }
  if (k === 'absurdo') { for (let i = 0; i < 4; i++) { const reloj = new T.Group(); const d = cil(.8, .8, .16, mat('#e8dcc8'), 28); d.rotation.x = Math.PI / 2; reloj.add(d); const ar = new T.Mesh(new T.TorusGeometry(.8, .1, 8, 28), mat(D.zoc)); reloj.add(ar); const piv = new T.Group(); const ag = caja(.06, .62, .04, matB('#2a0b4a')); ag.position.set(0, .28, .1); piv.add(ag); reloj.add(piv); reloj.position.set(cortes[(i + 1) % cortes.length] + (i % 2 ? .0 : .0), 5.5, ZM + .5); reloj.rotation.z = rnd(-.5, .5); g.add(reloj); const v = rnd(-3, 3) || 2; anim(dt => { piv.rotation.z += v * dt; }); }
    [-11.5, 11.5].forEach((x, i) => { const cu = new T.Group(); const mango = cil(.12, .16, 3.4, mat('#d19a12', { metalness: .5, roughness: .35 }), 10); mango.position.y = 1.7; cu.add(mango); const pala = bola(.7, mat('#d8c9b0', { metalness: .7, roughness: .25 }), 16); pala.scale.set(1, 1.3, .3); pala.position.y = 3.9; cu.add(pala); cu.position.set(x, .9, ZM + .75); cu.rotation.z = i ? -.2 : .2; sombra(cu); g.add(cu); }); }
  if (k === 'golosinas') { for (let i = 0; i < 16; i++) { const x = -AN / 2 + 1 + i * (AN - 2) / 15, gt = bola(.34, mat(['#e0408a', '#e8b22a', '#3f98e0', '#2fb85a', '#9a62e8'][i % 5], { roughness: .25 }), 14); gt.scale.y = .8; gt.position.set(x, AL + .72, ZM + .2); gt.castShadow = true; g.add(gt); }
    const gl = mat('#f0dcc8', { roughness: .35 }); for (let i = 0; i < 22; i++) { const x = -AN / 2 + .7 + i * (AN - 1.4) / 21, al = rnd(.5, 1.5), go = cil(.3, .18, al, gl, 10); go.position.set(x, AL - al / 2 + .05, ZM + .46); g.add(go); const pu = bola(.2, gl, 10); pu.position.set(x, AL - al, ZM + .46); g.add(pu); }
    piruleta(g, -11.6, ZM + 1.6, 4.6, '#e0408a', '#f0dcc8'); piruleta(g, 11.6, ZM + 1.6, 4.6, '#3f98e0', '#f0dcc8'); }
  if (k === 'feria') { for (let i = 0; i < 9; i++) { const x = -12 + i * 3, pk = new T.Mesh(new T.ConeGeometry(1.5, 1.9, 4), mat(i % 2 ? '#c22a3a' : '#d8c2a0', { roughness: .7 })); pk.rotation.y = Math.PI / 4; pk.scale.z = .45; pk.position.set(x, AL + 1.4, ZM); pk.castShadow = true; g.add(pk); const bn = bola(.16, mat('#e8a92c', { metalness: .8, roughness: .25 }), 10); bn.position.set(x, AL + 2.45, ZM); g.add(bn); }
    banderines(g, new T.Vector3(-13, AL + .2, ZM + 1.2), new T.Vector3(0, AL + .9, ZM + 3), 12); banderines(g, new T.Vector3(0, AL + .9, ZM + 3), new T.Vector3(13, AL + .2, ZM + 1.2), 12); }
  return { ZM, AL, D };
}
/* puerta de cada tierra, pegada al muro */
function puertaDe(tierra) {
  const g = new T.Group();
  if (tierra === 'fantasia') g.add(pieza('puertafantasia', 4.2));
  else if (tierra === 'golosinas') g.add(pieza('puertacaramelo', 4.2));
  else if (tierra === 'absurdo') { /* nevera de puerta: redondeada y con imanes */
    const cuerpo = caja(2.3, 4, .6, mat('#cfdbe2', { roughness: .25, metalness: .15 })); cuerpo.position.y = 2; g.add(cuerpo); const raya = caja(2.32, .05, .62, mat('#8a9aa8')); raya.position.y = 2.95; g.add(raya);
    const asa = cil(.05, .05, 1.4, mat('#b8c4cc', { metalness: .9, roughness: .2 }), 10); asa.position.set(.85, 1.9, .42); g.add(asa); const asa2 = asa.clone(); asa2.scale.y = .45; asa2.position.y = 3.4; g.add(asa2);
    ['#e0409f', '#e8b22a', '#2f78e0', '#2fb85a', '#f07a2c'].forEach((c, i) => { const im = new T.Mesh(i % 2 ? new T.CircleGeometry(.16, 20) : new T.CircleGeometry(.14, 5), mat(c)); im.position.set(rnd(-.8, .5), rnd(1, 3.6), .31); g.add(im); }); sombra(g);
  } else { /* feria: boca de carpa con cortinas y bombillas */
    const m1 = mat('#e8a92c', { metalness: .7, roughness: .3 }); [-1.25, 1.25].forEach(x => { const po = cil(.14, .16, 4, m1, 10); po.position.set(x, 2, .2); g.add(po); const bo = bola(.24, m1, 12); bo.position.set(x, 4.1, .2); g.add(bo); });
    const arco = new T.Mesh(new T.TorusGeometry(1.25, .16, 10, 28, Math.PI), m1); arco.position.set(0, 3.6, .2); g.add(arco);
    const txc = txMuro('telon', '#a81c3a', '#e8c04a'), mc = mat('#e9dfda', { map: txc, roughness: .8, side: T.DoubleSide }); const co = new T.Mesh(new T.PlaneGeometry(2.5, 4.6, 8, 1), mc); const pp = co.geometry.attributes.position; for (let i = 0; i < pp.count; i++) pp.setZ(i, Math.sin(pp.getX(i) * 9) * .08); co.geometry.computeVertexNormals(); co.position.set(0, 2.3, .12); g.add(co);
    const raja = caja(.05, 3.6, .02, matB('#3a0a16')); raja.position.set(0, 1.8, .21); g.add(raja);
    for (let i = 0; i <= 10; i++) { const a = i / 10 * Math.PI, mm = new T.MeshStandardMaterial({ color: '#6a5a3a', emissive: '#ffd27a', emissiveIntensity: 0, roughness: .3 }), b = bola(.09, mm, 8); b.position.set(Math.cos(a) * 1.25, 3.6 + Math.sin(a) * 1.25, .38); g.add(b); prende(kk => { mm.emissiveIntensity = kk * 2.6; }, .6 + i * .06); } sombra(g);
  }
  return g;
}

/* ======================= TÚNEL DE ENTRADA A CADA TIERRA ======================= */
const TUN = {
  fantasia: { tx: ['piedra', '#4a3a86', '#6a58a8'], suelo: '#2a1c56', luz: '#c8a8ff', sal: '#b98bff', nie: '#1a0d3a' },
  absurdo: { tx: ['azulejo', '#2aa39a', '#d19a12'], suelo: '#8a1c6a', luz: '#ffd27a', sal: '#ffb060', nie: '#3a1040' },
  golosinas: { tx: ['rayas', '#d8487f', '#e8c8a8'], suelo: '#8a4a22', luz: '#ffc890', sal: '#ff9a8a', nie: '#4a1432' },
  feria: { tx: ['rayas', '#c22a3a', '#d8c2a0'], suelo: '#3a2416', luz: '#ffd27a', sal: '#ffb43a', nie: '#1c1040' }
};
function tunel(k) {
  const T0 = TIERRAS[k], U = TUN[k], LAR = 20, RAD = 2.7; J.fase = 'tunel'; musica(T0.mus); lugar(t('t_' + k)); crono(null); barra(null); meta(null); MU.sel = null; retiAnillo(0);
  transicion(() => nuevaEscena(g => {
    ESC.fog = new T.Fog(U.nie, 3, 19); MU.luzT0 = .1; g.add(new T.AmbientLight(U.luz, .34)); g.add(new T.HemisphereLight(U.luz, U.suelo, .3));
    const tx = (U.tx[0] === 'piedra' ? txPiedra(U.tx[1], U.tx[2]) : txMuro.apply(null, U.tx)).clone(); tx.needsUpdate = true; tx.wrapS = tx.wrapT = T.RepeatWrapping; tx.repeat.set(4, LAR / 3);
    const bov = new T.Mesh(new T.CylinderGeometry(RAD, RAD, LAR, 28, 1, true, Math.PI / 2, Math.PI), mat('#e9dfda', { map: tx, side: T.BackSide, roughness: .85 })); bov.rotation.x = Math.PI / 2; bov.position.set(0, 1.1, -LAR / 2 + 2); g.add(bov);
    [-1, 1].forEach(s => { const txp = tx.clone(); txp.needsUpdate = true; txp.repeat.set(LAR / 3, .4); const p = new T.Mesh(new T.PlaneGeometry(LAR, 1.1), mat('#d6ccc8', { map: txp, roughness: .9 })); p.rotation.y = -s * Math.PI / 2; p.position.set(s * RAD, .55, -LAR / 2 + 2); g.add(p); });
    const txs = txPiedra(U.suelo, mezcla(U.suelo, '#e8d0c0', .25)).clone(); txs.needsUpdate = true; txs.wrapS = txs.wrapT = T.RepeatWrapping; txs.repeat.set(1.5, LAR / 4); const su = new T.Mesh(new T.PlaneGeometry(RAD * 2, LAR), mat('#e9dfda', { map: txs, roughness: .9 })); su.rotation.x = -Math.PI / 2; su.position.set(0, 0, -LAR / 2 + 2); g.add(su);
    /* costillas con bombillas: se van encendiendo delante de vosotros a medida que avanzáis */
    const aros = []; for (let i = 0; i < 7; i++) { const z = -.5 - i * 2.6, ar = new T.Mesh(new T.TorusGeometry(RAD - .08, .13, 8, 28, Math.PI), mat(mezcla(T0.col, '#2a1c3a', .5), { roughness: .5, metalness: .3 })); ar.position.set(0, 1.1, z); g.add(ar);
      [-1, 1].forEach(s => { const pi = caja(.26, 1.1, .26, ar.material); pi.position.set(s * (RAD - .08), .55, z); g.add(pi); });
      const ms = []; for (let j = 1; j < 10; j++) { const a = j / 10 * Math.PI, c = j % 2 ? U.luz : T0.col, mm = new T.MeshStandardMaterial({ color: mezcla(c, '#3a2a3a', .5), emissive: c, emissiveIntensity: 0, roughness: .3 }), b = bola(.085, mm, 8); b.position.set(Math.cos(a) * (RAD - .26), 1.1 + Math.sin(a) * (RAD - .26), z); g.add(b); ms.push(mm); }
      const pl = new T.PointLight(U.luz, 0, 7.5); pl.position.set(0, 2.9, z); if (i % 2 === 0 || !LITE) g.add(pl); aros.push({ z, ms, pl, k: 0 }); }
    /* adornos de cada tierra en las paredes */
    for (let i = 0; i < 10; i++) { const s = i % 2 ? 1 : -1, z = -1.6 - i * 1.55; let o;
      if (k === 'fantasia') { o = new T.Mesh(new T.OctahedronGeometry(.2), mat('#d9b3ff', { emissive: '#b07bff', emissiveIntensity: 1, roughness: .1 })); o.scale.y = 2; o.position.set(s * (RAD - .5), rnd(.35, .6), z); }
      else if (k === 'absurdo') { o = new T.Group(); const d = cil(.34, .34, .08, mat('#e8dcc8'), 20); d.rotation.z = Math.PI / 2; o.add(d); const ag = caja(.03, .28, .04, matB('#2a0b4a')); ag.position.set(-s * .06, .12, 0); o.add(ag); o.position.set(s * (RAD - .32), rnd(1.4, 2.2), z); o.rotation.x = rnd(0, 6); }
      else if (k === 'golosinas') { o = bola(.26, mat(['#e0408a', '#e8b22a', '#3f98e0', '#2fb85a', '#9a62e8'][i % 5], { roughness: .2 }), 12); o.scale.y = .8; o.position.set(s * (RAD - .4), .28, z); }
      else { o = new T.Mesh(new T.ConeGeometry(.2, .4, 3), mat(['#e0408a', '#e8b22a', '#3f98e0', '#2fb85a'][i % 4], { side: T.DoubleSide })); o.rotation.z = Math.PI; o.scale.z = .2; o.position.set(s * 1.5, 3.25, z); }
      g.add(o); if (k === 'fantasia') anim(dt => { o.rotation.y += dt * 1.5; }); }
    /* la salida: una boca de luz del color de la tierra */
    const ZS = -LAR + 2.6; const boca = new T.Mesh(new T.CircleGeometry(RAD, 32), new T.MeshBasicMaterial({ color: mezcla(U.sal, '#fff1d0', .45), fog: false })); boca.position.set(0, 1.1, ZS); g.add(boca);
    const hal = brillo(U.sal, 12, .55); hal.material.fog = false; hal.position.set(0, 1.9, ZS + .3); g.add(hal); const ls = new T.PointLight(U.sal, 1.5, 16); ls.position.set(0, 2, ZS + 1.5); g.add(ls);
    for (let i = 0; i < 8; i++) { const r = new T.Mesh(new T.PlaneGeometry(.5, 9), new T.MeshBasicMaterial({ color: U.sal, transparent: true, opacity: .1, depthWrite: false, blending: T.AdditiveBlending, side: T.DoubleSide, fog: false })); r.position.set(0, 1.6, ZS + .2); r.rotation.z = i / 8 * Math.PI; g.add(r); anim((dt, tt) => { r.rotation.z += dt * .12; r.material.opacity = .07 + Math.sin(tt * 2 + i) * .03; }); }
    /* se camina en primera persona: pasos, balanceo y la mirilla para curiosear */
    MU.libre = true; MEVI.visible = true; let z = 1.6, paso = 0, pie = 0, fin = false; const vel = BOT || RAPIDO ? 9 : 3.1, ZF = ZS + 3.4;
    setTimeout(() => { if (J.fase === 'tunel') di(t('tunel_' + k)); }, 300);
    MU.upd = dt => { z -= vel * dt; paso += vel * dt * 2.1; const bob = Math.abs(Math.sin(paso)) * .07; if (Math.floor(paso / Math.PI) !== pie) { pie = Math.floor(paso / Math.PI); sint(70 + (pie % 2) * 12, .09, 'sine', .12); }
      CAM.position.set(Math.sin(paso * .5) * .06, 1.62 + bob, z); CAM.lookAt((PTR.x - .5) * 2.4, 1.7 + (.5 - PTR.y) * 1.4 + bob * .4, z - 6);
      aros.forEach(a => { const cerca = z - a.z < 7.5; a.k = clamp(a.k + (cerca ? dt * 3 : 0), 0, 1); const f = a.k < 1 && a.k > 0 && Math.sin(a.k * 40) < 0 ? .4 : a.k; a.ms.forEach(m => { m.emissiveIntensity = f * 2.4; }); a.pl.intensity = f * .9; });
      hal.material.opacity = .45 + clamp((1.6 - z) / (1.6 - ZF), 0, 1) * .5; hal.scale.setScalar(12 + clamp((1.6 - z) / (1.6 - ZF), 0, 1) * 10);
      if (!fin && z <= ZF) { fin = true; MU.upd = null; fx('nivel', .7); muro(); } };
  }), U.nie);
}

/* ======================= MUROS DE PUERTAS ======================= */
function muro() {
  const k = J.tierra, T0 = TIERRAS[k], n = J.muro || 0, U = TUN[k]; J.muro = n + 1; J.fase = 'puertas'; musica(T0.mus); lugar(t('t_' + k)); crono(null); barra(null); meta(null);
  /* qué hay detrás de cada puerta: las salas que quedan y, según el modo, una trampa (o una sorpresa en FÁCIL) */
  let ops = J.cola.slice(0, 3);
  if (ops.length === 2 && J.modo >= 1 && Math.random() < (J.modo === 1 ? .5 : .85)) ops.push('trampa');
  if (ops.length === 1) { if (J.modo === 0) ops.push('sorpresa'); else { ops.push('trampa'); if (J.modo === 2) ops.push('trampa'); } }
  ops = baraja(ops); const xs = ops.length === 3 ? [-5.3, 0, 5.3] : [-3.3, 3.3];
  transicion(() => nuevaEscena(g => {
    ambiente(g, k); fondoTierra(g, k, -24); const F = fachada(g, k, n, xs);
    const CZ = ops.length === 3 ? 6 : 4.4; MU.cam.p.set(0, 1.9, CZ); MU.cam.m.set(0, 2.6, -6); MU.mira = .13;
    const ds = ops.map((op, i) => { const d = puertaDe(k); d.position.set(xs[i], 0, F.ZM + .55); d.userData.sel = i; d.userData.op = op; g.add(d);
      const luz = brillo(T0.col, 5.2, 0); luz.position.set(0, 2.2, .5); d.add(luz); d.userData.luz = luz; return d; });
    const gu = T0.guard, gx = ops.length === 3 ? -2.65 : 0; const gp = pon(g, gu, gu === 'gusano' ? 1.5 : gu === 'buho' ? 1.6 : 1.8, gx, 0, -3.4, { ry: gx ? .25 : 0, mide: true }); anima(gp, 'Idle'); if (gu === 'gusano') anim((dt, tt) => ondula(gp, tt, .12, 2.5));
    farola(g, -8.6, -1.2, 3.2, .5, F.D.luz); farola(g, 8.6, -1.2, 3.2, .8, F.D.luz);
    MU.puertas = ds;
    const habla = () => { const frase = ops.length === 3 ? t('puertas3') : ops.includes('sorpresa') ? t('puertasS') : J.cola.length === 1 ? t('puertasT') : t('puertas2');
      if (n === 0) { di(t('entra_' + k)); setTimeout(() => { if (J.fase === 'puertas') di(frase); }, BOT ? 100 : 3600); } else di(frase);
      anima(gp, 'Talk'); setTimeout(() => anima(gp, 'Idle'), 2500);
      const elige = () => selecciona(ds.filter(d => d.parent && !d.userData.no), 1.3, (i, d) => abrePuerta(d, gp, elige), (i) => { ds.forEach(d => { d.userData.luz.material.opacity = d.userData.sel === i ? .75 : .2; d.scale.setScalar(d.userData.sel === i ? 1.03 : 1); }); });
      ds.forEach(d => { d.userData.luz.material.opacity = .2; }); elige(); };
    if (n === 0) { /* recién salidos del túnel: unos pasos más y se desvela la tierra */
      MU.cam.p.set(0, 1.75, 15); MU.cam.m.set(0, 4.4, -6); MU.cp.copy(MU.cam.p); MU.cm.copy(MU.cam.m); setTimeout(() => viaje(new T.Vector3(0, 1.9, CZ), new T.Vector3(0, 2.6, -6), BOT || RAPIDO ? .5 : 2.6, habla), 60);
    } else setTimeout(habla, 500);
  }), n === 0 ? mezcla(U.sal, '#fff1d0', .45) : T0.col);
}
function abrePuerta(d, gp, elige) {
  const op = d.userData.op;
  if (op === 'trampa' || op === 'sorpresa') {
    const buena = op === 'sorpresa'; d.userData.no = true; fx('sorpresa'); fx(buena ? 'premio' : 'globo', .7); confeti(d.position.clone().add(new T.Vector3(0, 2, .8)), LITE ? 40 : 90); grito(t(buena ? 'sorpresaT' : 'trampaT')); di(t(op)); meviGesto('salta'); anima(gp, 'Joyful', true);
    if (buena) { suma(200); const p = pieza('pato', .9); p.position.copy(d.position).add(new T.Vector3(0, 1.2, .7)); MU.g.add(p); let kk = 0; anim(dt => { kk += dt; p.position.y = d.position.y + 1.2 + Math.sin(kk * 3) * .25 + kk * .5; p.rotation.y += dt * 3; if (kk > 2.2 && p.parent) MU.g.remove(p); }); }
    else { suma(-(J.modo === 1 ? 150 : 250)); J.combo = 0; }
    let k = 0; const y0 = d.position.y; anim(dt => { if (k >= 1) return; k = Math.min(1, k + dt / 1.1); d.rotation.x = suave(k) * Math.PI / 2 * .98; d.position.y = y0 + k * .06; if (k >= 1) { d.userData.luz.material.opacity = 0; } });
    setTimeout(elige, BOT ? 300 : 2300); return;
  }
  fx('nivel'); meviGesto('invita'); const p = d.position.clone(); viaje(new T.Vector3(p.x, 2, p.z + 2.6), new T.Vector3(p.x, 2.1, p.z - 4), 1.0, () => {});
  chispas(p.clone().add(new T.Vector3(0, 2, .8)), 30, [TIERRAS[J.tierra].col, '#ffffff'], { vel: 3, tam: .4 }); d.userData.luz.material.opacity = 1;
  J.cola.splice(J.cola.indexOf(op), 1); setTimeout(() => sala(op), 650);
}

/* ======================= LOS PERSONAJES DE LAS HISTORIAS DE MEVI =======================
   Los de WONDERWALK y DIANA y la familia: soldados de la guardia, paseantes del patio y, al final, el público y el desfile.
   Se cargan aparte, después del arranque y por tandas, para no retrasar la entrada al juego. */
const MODS = '../packs/modelos/a3D-';   /* solo personajes propios, todos del mismo estilo: nada de packs de otro aspecto */
const EXTRA = { soldado1: [MODS + 'soldado-moreno-rig.glb', 'mix'], soldado2: [MODS + 'soldado-rubio-rig.glb', 'mix'], soldado3: [MODS + 'soldado-rig.glb', 'mix'],
  sonia: ['../juegos/diana/fam-sonia.glb'], josep: ['../juegos/diana/fam-josep.glb'], hector: ['../juegos/diana/fam-hector.glb'], jaume: ['../juegos/diana/fam-jaume.glb'], roser: ['../juegos/diana/fam-roser.glb'],
  hechicera: ['personajes/hechicera.glb'], ladron: ['personajes/ladron.glb'],
  rey: [MODS + 'rey-rig.glb', 'mix'], reina: [MODS + 'reina-rig.glb', 'mix'], adales: [MODS + 'adales-rig.glb', 'mix'], arabe: [MODS + 'arabe-rig.glb', 'mix'], bufon: [MODS + 'bufon-rig.glb', 'mix'], aldeana: [MODS + 'aldeana-rig.glb', 'mix'], aldeano: [MODS + 'aldeano-rig.glb', 'mix'], herrero: [MODS + 'herrero-rig.glb', 'mix'],
  bonifacio: ['../juegos/diana/bonifacio.glb'], sirvienta: ['../juegos/diana/sirvienta.glb'] };
const TANDAS = [['soldado1', 'soldado2'], ['sonia', 'josep', 'hechicera', 'aldeana'], ['hector', 'jaume', 'roser', 'rey', 'reina'], ['adales', 'arabe', 'bufon', 'soldado3', 'ladron', 'bonifacio', 'herrero', 'aldeano']];
const XT = { L: null, clips: {}, esperas: [], pedido: {} };
function clipsDe(tipo) { if (XT.clips[tipo]) return XT.clips[tipo]; const urls = ['../packs/wonderwalk/mixamo-clips.glb']; return XT.clips[tipo] = Promise.all(urls.map(u => new Promise(ok => XT.L.load(u, g => ok(g.animations), undefined, () => ok([]))))).then(a => [].concat(...a)); }
function cargaExtra(lista) {
  if (!XT.L) { XT.L = new T.GLTFLoader(); XT.L.setMeshoptDecoder(window.MeshoptDecoder); }
  return Promise.all(lista.filter(k => EXTRA[k] && !MOD[k]).map(k => XT.pedido[k] || (XT.pedido[k] = new Promise(ok => { const [u, tipo] = EXTRA[k]; XT.L.load(u + '?v=18.42', g => { g.scene.traverse(o => { if (o.isMesh) { if (o.geometry) o.geometry.userData.mod = true; o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; } });
    const fin = () => { sinAvance(g.animations); MOD[k] = g; ok(); XT.esperas = XT.esperas.filter(e => { if (e.ks.every(x => MOD[x])) { try { e.f(); } catch (er) {} return false; } return true; }); };
    if (!tipo) return fin();
    clipsDe(tipo).then(cl => { const hips = g.scene.getObjectByName('mixamorigHips'); g.animations = cl.map(c => { const tr = c.tracks.find(x => /Hips\.position$/.test(x.name)); if (tipo !== 'mix' || !hips || !tr || !tr.values[1]) return c; const f = hips.position.y / tr.values[1], c2 = c.clone(); c2.tracks.find(x => /Hips\.position$/.test(x.name)).values.forEach((v, i, A) => { A[i] = v * f; }); return c2; }); fin(); }); }, undefined, () => ok()); }))));
}
/* f() en cuanto estén cargados todos los modelos de ks (enseguida si ya lo están) */
function conExtra(ks, f) { if (ks.every(k => MOD[k])) f(); else XT.esperas.push({ ks, f }); }
async function cargaPersonajes() { for (const t of (LITE ? TANDAS.slice(0, 3) : TANDAS)) { await cargaExtra(t); } }
/* la animación que tenga cada uno para cada cosa (cada familia de modelos nombra sus clips a su manera) */
const GESTOS = { anda: ['anda', 'andar', 'Walking_A', 'Walking'], quieto: ['mira', 'reposo', 'Idle_A', 'quieta', 'charla', 'Idle'], vitorea: ['feliz', 'Cheering', 'aplaude', 'Cheer', 'Joyful', 'mira', 'Idle_A'], saluda: ['saluda', 'Waving', 'Wave', 'feliz', 'Cheering', 'mira'], guardia: ['Idle_B', 'Idle_A', 'reposo', 'mira'] };
function gesto(p, cual) { const A = p.userData.A; if (!A) return; if (!GESTOS[cual]) { anima(p, cual); return; } const n = GESTOS[cual].find(k => A[k] || Object.keys(A).some(x => x.toLowerCase().startsWith(k.toLowerCase()))) || ['quieta', 'reposo', 'mira', 'Idle_A', 'charla'].find(k => A[k]) || Object.keys(A)[0]; if (n) anima(p, n); }   /* nunca en pose de T: si no tiene ese gesto, su reposo */
/* un personaje de los extra, a su altura real y pisando el suelo */
function persona(g, k, alto, x, z, ry, que) { if (!MOD[k]) return null; const p = pon(g, k, alto, x, 0, z, { ry: ry || 0, mide: true }); gesto(p, que || 'quieto'); const ac = p.userData.act; if (ac) ac.time = rnd(0, 2); return p; }
/* los dos soldados de la guardia, a los lados del portón del castillo */
function guardia(g, PZ) { const esc = MU.g; conExtra(['soldado1', 'soldado2'], () => { if (MU.g !== esc) return; [['soldado1', -3.4], ['soldado2', 3.4]].forEach(([k, x]) => { const s2 = persona(g, k, 2.05, x, PZ + 3.5, x < 0 ? .12 : -.12, 'guardia'); if (!s2) return; const pe = cil(.62, .7, .16, mat('#8f7868', { roughness: .9 }), 12); pe.position.set(x, .08, PZ + 3.5); pe.receiveShadow = true; g.add(pe); s2.position.y = .16; }); }); }
/* paseantes del patio: van y vienen por el empedrado sin cruzarse con la fuente ni salirse de la vista */
function paseantes(g) {
  /* cada ruta es un circuito despejado: lejos de la fuente (radio 3), de las farolas, de los árboles, de las puertas y del sitio de Mevi */
  const esc = MU.g, RUTAS = [['sonia', 1.75, [[-7.2, 1.6], [-11.4, -1.4], [-11.2, -7.6], [-7.2, -8.2], [-5.4, -4.2]]], ['josep', 1.85, [[-6.2, 2.6], [-10.2, -.6], [-10, -6.8], [-6.4, -7], [-4.6, -3.4]]],
    ['hechicera', 1.8, [[7.4, -8.2], [11.2, -7.6], [11.6, -1.8], [7.6, .4], [5.2, -4.4]]], ['aldeana', 1.7, [[2.2, -8.4], [-2.4, -8.6], [-2.6, -12.8], [2.4, -12.6]]]];
  RUTAS.forEach(([k, alto, ruta], n) => conExtra([k], () => { if (MU.g !== esc) return; const p = persona(g, k, alto, ruta[0][0], ruta[0][1], 0, 'anda'); if (!p) return; let i = 0, pausa = 0; const v = .95 + n * .06, d = new T.Vector3(), sig = () => ruta[(i + 1) % ruta.length];
    p.rotation.y = Math.atan2(sig()[0] - p.position.x, sig()[1] - p.position.z);
    anim(dt => { const o = sig(); d.set(o[0] - p.position.x, 0, o[1] - p.position.z); const L = d.length(), ry = Math.atan2(d.x, d.z); let dr = ry - p.rotation.y; while (dr > Math.PI) dr -= 6.283; while (dr < -Math.PI) dr += 6.283;
      if (pausa > 0) { pausa -= dt; if (pausa <= 0) gesto(p, 'anda'); return; }
      p.rotation.y += dr * Math.min(1, dt * 4); if (Math.abs(dr) > .9) return;   /* primero se gira; no anda de lado ni marcha atrás */
      if (L < .2) { i = (i + 1) % ruta.length; if (Math.random() < .35) { pausa = rnd(2.5, 5); gesto(p, 'quieto'); } return; }
      p.position.addScaledVector(d.normalize(), Math.min(L, v * dt)); }); }));
}

/* ======================= EL CASTILLO DE LAS ESTRELLAS =======================
   Un castillo gótico en lo alto de un cerro boscoso, inspirado libremente en el Castell de Montsoriu (Montseny, Cataluña):
   tres recintos amurallados escalonados, el patio de armas, la sala gótica con su terrado y, presidiéndolo todo, la torre del homenaje redonda.
   Se construye por código y a escala; se ve a lo lejos tras el Gran Portal y de cerca en el gran desfile. */
function montsoriu(g, o) {
  o = o || {}; const C = new T.Group(); C.position.set(o.x || 0, o.y || 0, o.z || 0); C.scale.setScalar(o.s || 1); g.add(C); const nb = o.niebla !== false;
  const txc = txPiedra('#a58a78', '#c9ad8f', '#6a564e').clone(); txc.needsUpdate = true; txc.wrapS = txc.wrapT = T.RepeatWrapping; txc.repeat.set(7, 4); const piedra = mat('#b39a84', { map: txc, roughness: .92, fog: nb }), piedra2 = mat('#9d8676', { roughness: .92, fog: nb }), teja = mat('#7a3a36', { roughness: .7, fog: nb }), bosque = mat('#2c5a3a', { roughness: 1, flatShading: true, fog: nb }), bosque2 = mat('#3f6e3c', { roughness: 1, flatShading: true, fog: nb });
  /* el cerro, en tres escalones, y su bosque */
  [[62, 44, 9, 0], [44, 30, 8, 9], [28, 17, 7, 17]].forEach(([r0, r1, h, y], i) => { const m = new T.Mesh(new T.CylinderGeometry(r1, r0, h, 20, 1), i ? bosque2 : bosque); m.position.y = y + h / 2; m.scale.z = .8; m.receiveShadow = true; C.add(m); });
  const nA = o.arboles || 150, dm = new T.Object3D(), pone = (i, d, hN) => { const a = rnd(0, 6.283), n = ri(3), R = [rnd(46, 60), rnd(31, 42), rnd(19, 26)][n]; d.position.set(Math.cos(a) * R, [rnd(1, 6), rnd(9.5, 14), rnd(17.5, 21)][n] - .4, Math.sin(a) * R * .8); const e = rnd(4.5, 8) / (hN || 4.6); d.scale.set(e, e * rnd(.9, 1.2), e); d.rotation.y = rnd(0, 6); };
  if (!(bosqueNat(C, 'Pine_5', Math.round(nA * .6), pone, nb) && bosqueNat(C, 'CommonTree_5', Math.round(nA * .4), pone, nb))) { const arb = new T.InstancedMesh(new T.ConeGeometry(1.5, 4.6, 10), bosque, nA); for (let i = 0; i < nA; i++) { pone(i, dm, 4.6); dm.position.y += 2.3 * dm.scale.y; dm.updateMatrix(); arb.setMatrixAt(i, dm.matrix); } C.add(arb); }
  /* murallas: anillo poligonal con almenas y torres cuadradas en los quiebros */
  const almena = [], vent = [];
  const anillo = (R, y, h, n, torres, hT, giro) => { const ps = []; for (let i = 0; i < n; i++) { const a = giro + i / n * 6.283, rr2 = R * (i % 2 ? .94 : 1.04); ps.push(new T.Vector3(Math.cos(a) * rr2, y, Math.sin(a) * rr2 * .8)); }
    ps.forEach((p0, i) => { const p1 = ps[(i + 1) % n], lar = p0.distanceTo(p1), mu = caja(lar, h, 1.4, piedra); mu.position.copy(p0).lerp(p1, .5); mu.position.y = y + h / 2; mu.rotation.y = -Math.atan2(p1.z - p0.z, p1.x - p0.x); mu.castShadow = mu.receiveShadow = true; C.add(mu);
      const na = Math.max(2, Math.round(lar / 2.2)); for (let j = 0; j < na; j++) almena.push([p0.clone().lerp(p1, (j + .5) / na).setY(y + h + .45), mu.rotation.y, 1.1, .9, 1.5]);
      if (torres.includes(i)) { const to = caja(4.4, h + hT, 4.4, piedra); to.position.set(p0.x, y + (h + hT) / 2, p0.z); to.rotation.y = mu.rotation.y; to.castShadow = true; C.add(to); for (let j = 0; j < 4; j++) for (let q = 0; q < 2; q++) almena.push([new T.Vector3(p0.x + [-1.6, 1.6, -1.6, 1.6][j], y + h + hT + .5, p0.z + [-1.6, -1.6, 1.6, 1.6][j]), 0, 1.1, 1, 1.1]); if (p0.z > 0) vent.push([p0.x, y + h + hT * .45, p0.z + 2.22, .7, 1.5]); } }); return ps; };
  anillo(43, 8.6, 5, 12, [1, 3, 5, 8, 10], 3, .26);            /* recinto jussà */
  const pati = anillo(29, 16.6, 6.5, 10, [0, 2, 3, 5, 8], 4, .31);   /* recinto del patio de armas */
  anillo(15.5, 23.6, 5, 8, [1, 3, 6], 3, .39);                /* recinto sobirà */
  /* torre del homenaje: redonda, de 14,5 m, la más antigua y la que da el perfil al castillo */
  const TH = 14.5, hom = cil(4.1, 4.5, TH, piedra, 20); hom.position.set(-2.5, 24 + TH / 2, -1); hom.castShadow = true; C.add(hom); const cor = cil(4.5, 4.1, .9, piedra2, 20); cor.position.set(-2.5, 24 + TH + .2, -1); C.add(cor);
  for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; almena.push([new T.Vector3(-2.5 + Math.cos(a) * 4.05, 24 + TH + 1.1, -1 + Math.sin(a) * 4.05), -a, 1.3, 1.2, .9]); }
  [[0, 31], [0, 35.5], [1.1, 33.2], [-1.1, 33.2]].forEach(([dx, y]) => vent.push([-2.5 + dx * 2.2, y, -1 + Math.sqrt(4.25 * 4.25 - dx * dx * 4.84) + .06, .6, 1.5]));
  const asta = cil(.09, .09, 6, piedra2, 5); asta.position.set(-2.5, 24 + TH + 3.6, -1); C.add(asta);
  const ban = new T.Mesh(new T.PlaneGeometry(4.4, 2.2, 8, 1), new T.MeshBasicMaterial({ color: '#c22a5a', side: T.DoubleSide, fog: nb })); ban.position.set(-.3, 24 + TH + 5.4, -1); C.add(ban); const bp = ban.geometry.attributes.position; anim((dt, tt) => { for (let i = 0; i < bp.count; i++) bp.setZ(i, Math.sin(bp.getX(i) * 1.6 + tt * 4) * .28 * (bp.getX(i) + 2.2) / 4.4); bp.needsUpdate = true; });
  /* sala gótica con terrado, capilla y la torre de las Brujas, apartada en la ladera */
  const sala = caja(13, 7.5, 7, piedra); sala.position.set(7.2, 24 + 3.75, 2.2); sala.castShadow = true; C.add(sala); for (let i = 0; i < 6; i++) almena.push([new T.Vector3(1.6 + i * 2.25, 24 + 7.95, 5.4), 0, 1.1, .9, 1]); for (let i = 0; i < 4; i++) vent.push([2.6 + i * 3.1, 28, 5.73, 1, 2.6]);
  const cap = caja(5, 5, 6.5, piedra); cap.position.set(-10.5, 24 + 2.5, 3); cap.castShadow = true; C.add(cap); const tej = new T.Mesh(new T.CylinderGeometry(.02, 3.6, 2.4, 4, 1), teja); tej.rotation.y = Math.PI / 4; tej.scale.z = 1.3; tej.position.set(-10.5, 24 + 6.2, 3); C.add(tej); vent.push([-10.5, 27, 6.28, .7, 1.8]);
  const bru = cil(2.6, 3, 11, piedra, 14); bru.position.set(47, 6 + 5.5, 12); bru.castShadow = true; C.add(bru); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; almena.push([new T.Vector3(47 + Math.cos(a) * 2.5, 17.5, 12 + Math.sin(a) * 2.5), -a, 1, 1, .8]); } vent.push([47, 13, 14.95, .6, 1.3]);
  /* portalada del patio de armas, mirando al frente */
  const pg = pati[2].clone().lerp(pati[3], .5); const pta = caja(7, 11, 5, piedra); pta.position.set(pg.x * .2, 16.6 + 5.5, 23.2 * .8 + 1); pta.castShadow = true; C.add(pta); const hue = new T.Mesh(new T.PlaneGeometry(3.4, 5.4), new T.MeshBasicMaterial({ color: '#2a1620', fog: nb })); hue.position.set(pta.position.x, 16.6 + 2.7, pta.position.z + 2.52); C.add(hue); const arq = new T.Mesh(new T.CircleGeometry(1.7, 16, 0, Math.PI), hue.material); arq.position.set(pta.position.x, 16.6 + 5.4, pta.position.z + 2.52); C.add(arq);
  [-2.4, 2.4].forEach(dx => almena.push([new T.Vector3(pta.position.x + dx, 28.1, pta.position.z + 2), 0, 1.3, 1, 1.2])); vent.push([pta.position.x, 25.2, pta.position.z + 2.53, .8, 1.6]);
  /* almenas, todas en una sola malla */
  const al = new T.InstancedMesh(new T.BoxGeometry(1, 1, 1), piedra2, almena.length); almena.forEach(([p2, ry, sx, sy, sz], i) => { dm.position.copy(p2); dm.rotation.set(0, ry, 0); dm.scale.set(sx, sy, sz); dm.updateMatrix(); al.setMatrixAt(i, dm.matrix); }); al.castShadow = true; C.add(al);
  /* ventanas ojivales: se van encendiendo al caer la tarde */
  vent.forEach(([x, y, z, w, h], i) => { const v = ventana(C, x, y, z, w, h, .8 + (i * 7 % 11) * .35, i % 3 ? '#ffcf7a' : '#ffb45a'); v.material.fog = nb; if (i % 2 === 0) { const hl = brillo('#ffc070', 3.4, 0); hl.material.fog = nb; hl.position.set(x, y, z + .3); C.add(hl); prende(k => { hl.material.opacity = k * .5; }, .8 + (i * 7 % 11) * .35); } });
  return C;
}

/* ======================= PATIO DE ARMAS DEL CASTILLO Y GRAN DESFILE ======================= */
/* gentío de relleno: los personajes 3D de la casa, retratados con otra ropa, otra piel y otro tocado, para que el público sea del mismo estilo que la primera fila */
function gentio(g, sitios, mira) {
  /* cada figurante es una tarjeta con el retrato de un personaje 3D de la casa (lámina de 8 × 3: misma malla, otra ropa, otra piel y otro tocado). Mira a la calle y da saltitos */
  const CX = 8, CY = 3, AN = 1.6, AL = 2.2, CHIBI = 20, n = sitios.length, mx = mira ? mira[0] : 0, mz = mira ? mira[1] : 15;
  if (!TXS.gentio) { TXS.gentio = new T.TextureLoader().load('../packs/meviland/gentio.webp?v=18.43'); TXS.gentio.encoding = T.sRGBEncoding; TXS.gentio.anisotropy = 4; }
  const pos = new Float32Array(n * 12), uv = new Float32Array(n * 8), col = new Float32Array(n * 12), idx = [], P = []; let c1 = -1, c2 = -1;
  sitios.forEach(([x, y, z], i) => { let c = ri(CX * CY), tope = 0; while ((c === c1 || c === c2) && tope++ < 9) c = ri(CX * CY); c2 = c1; c1 = c;
    const nino = c < CHIBI && Math.random() < .14, e = nino ? rnd(.6, .72) : (c < CHIBI ? rnd(.9, 1.02) : rnd(.98, 1.06)), a = Math.atan2(mx - x, mz - z), ca = Math.cos(a), sa = Math.sin(a), w = AN * e / 2, h = AL * e, y0 = y - .04 * e, vuelta = Math.random() < .5;
    P.push({ y0, h, f: rnd(0, 6.283), v: rnd(4, 7), e }); const u0 = (c % CX) / CX, u1 = u0 + 1 / CX, v1 = 1 - Math.floor(c / CX) / CY, v0 = v1 - 1 / CY, k = rnd(.84, 1);
    [[-1, 0], [1, 0], [1, 1], [-1, 1]].forEach(([sx, sy], q) => { const o = i * 12 + q * 3; pos[o] = x + sx * w * ca; pos[o + 1] = y0 + sy * h; pos[o + 2] = z - sx * w * sa; uv[i * 8 + q * 2] = (sx < 0) !== vuelta ? u0 : u1; uv[i * 8 + q * 2 + 1] = sy ? v1 : v0; col[o] = k; col[o + 1] = k * .97; col[o + 2] = k * .95; });
    idx.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3); });
  const ge = new T.BufferGeometry(), ap = new T.BufferAttribute(pos, 3); ge.setAttribute('position', ap); ge.setAttribute('uv', new T.BufferAttribute(uv, 2)); ge.setAttribute('color', new T.BufferAttribute(col, 3)); ge.setIndex(idx);
  const m = new T.Mesh(ge, new T.MeshBasicMaterial({ map: TXS.gentio, alphaTest: .5, vertexColors: true, color: '#fff6ee' })); m.frustumCulled = false; g.add(m);
  anim((dt, tt) => { for (let i = 0; i < n; i++) { const p = P[i], b = Math.abs(Math.sin(tt * p.v * .5 + p.f)) * .08 * p.e, o = i * 12; pos[o + 1] = pos[o + 4] = p.y0 + b; pos[o + 7] = pos[o + 10] = p.y0 + b + p.h; } ap.needsUpdate = true; });
  return m;
}
/* el patio de armas, de noche y en fiestas: fachada de la sala gótica con el palco real, torre del homenaje detrás, gradas y antorchas */
function patioCastillo(o) {
  o = o || {};
  nuevaEscena(g => {
    ambiente(g, 'castillo', { hora: 1 }); suelo(g, txSuelo('adoquin'), 70, '#d8cec8'); lugar(t('castillo')); MU.patio = { palco: null };
    const OM = { gro: 1.6, c1: '#a58a78', c2: '#c9ad8f' }, ZF = -13.5, HF = 11;
    const fach = muralla(g, -34, ZF, 34, ZF, HF, OM); muralla(g, -22, ZF + .2, -17.5, 14, 8, OM); muralla(g, 22, ZF + .2, 17.5, 14, 8, OM);
    const txt = txPiedra('#a58a78', '#c9ad8f').clone(); txt.needsUpdate = true; txt.wrapS = txt.wrapT = T.RepeatWrapping; txt.repeat.set(5, 9); const pie = mat('#e6dcd6', { map: txt, roughness: .9 }), pie2 = mat('#9d8676', { roughness: .92 });
    /* torre del homenaje, redonda, asomando tras la fachada; y dos torres cuadradas en las esquinas */
    const hom = cil(5, 5.5, 27, pie, 22); hom.position.set(-11, 13.5, ZF - 8); g.add(hom); const cor = cil(5.6, 5, 1, pie2, 22); cor.position.set(-11, 27.3, ZF - 8); g.add(cor); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283, al = caja(1.3, 1.3, 1, pie2); al.position.set(-11 + Math.cos(a) * 5.1, 28.5, ZF - 8 + Math.sin(a) * 5.1); al.rotation.y = -a + Math.PI / 2; g.add(al); const mc = caja(.5, 1.2, .8, pie2); mc.position.set(-11 + Math.cos(a + .26) * 5.4, 26.3, ZF - 8 + Math.sin(a + .26) * 5.4); mc.rotation.y = -a - .26 + Math.PI / 2; g.add(mc); }
    [[0, 21], [1.15, 16.5], [-1.15, 16.5]].forEach(([a, y], i) => ventana(g, -11 + Math.sin(a) * 5.34, y, ZF - 8 + Math.cos(a) * 5.34, .8, 1.9, .4 + i * .3, null, a));
    const asta = cil(.1, .1, 7, pie2, 6); asta.position.set(-11, 32.4, ZF - 8); g.add(asta); bandera(g, -11, 34.4, ZF - 8, 4.6, 'reino');
    [-1, 1].forEach(sg => { const to = caja(6, HF + 5, 6, pie); to.position.set(sg * 22, (HF + 5) / 2, ZF); g.add(to); for (let j = 0; j < 4; j++) { const al = caja(1.4, 1.2, 1.4, pie2); al.position.set(sg * 22 + [-2.2, 2.2, -2.2, 2.2][j], HF + 5.6, ZF + [-2.2, -2.2, 2.2, 2.2][j]); g.add(al); } ventana(g, sg * 22, 11.4, ZF + 3.03, .8, 1.9, .6); ventana(g, sg * 22, 5.4, ZF + 3.03, .7, 1.6, 1); const as2 = cil(.08, .08, 5, pie2, 6); as2.position.set(sg * 22, HF + 8.6, ZF); g.add(as2); bandera(g, sg * 22, HF + 10, ZF, 3.4, sg < 0 ? paisVisitante() : 'cat'); });
    /* fachada: ventanales de la sala gótica, pendones y antorchas */
    [-15.5, -10, 10, 15.5].forEach((x, i) => { ventana(g, x, 7.4, ZF + .84, .95, 2.3, .3 + i * .2); antorcha(g, x + 2.75, 3.4, ZF + .82, 0, .2 + i * .15); });
    [-7, 7].forEach(x => pendon(g, x, 9.6, ZF + .95, 1.5, '#2f2a8a', 3.2)); [-18.6, 18.6].forEach(x => pendon(g, x, 9.6, ZF + .95, 1.3, '#2f2a8a', 3));
    /* el palco real: balcón de piedra con balaustrada, dosel y los reyes */
    const PY = 4.7, PA = new T.Group(); PA.position.set(0, PY, ZF + .8); g.add(PA); const losa = caja(8.6, .5, 3, pie2); losa.position.set(0, -.25, 1.2); losa.castShadow = true; PA.add(losa); [-3.6, -1.2, 1.2, 3.6].forEach(x => { const me = caja(.6, 1.5, 1.6, pie2); me.position.set(x, -1.2, .9); me.rotation.x = .5; PA.add(me); });
    const bar = caja(8.6, .22, .3, pie2); bar.position.set(0, 1.05, 2.55); PA.add(bar); for (let i = 0; i < 15; i++) { const ba = cil(.09, .13, 1, pie, 8); ba.position.set(-4 + i * 4 / 7, .5, 2.55); PA.add(ba); } [-1, 1].forEach(sg => { const l2 = caja(.3, 1.2, 2.7, pie2); l2.position.set(sg * 4.15, .55, 1.25); PA.add(l2); });
    /* la logia del palco: tres arcos apuntados sobre columnillas que dan, de verdad, a la sala gótica. La fachada se abre con un hueco y detrás hay una sala con fondo, iluminada por dentro */
    (() => { const c0 = fach.children[0], m0 = c0.material, AB = 3.45, Y1 = PY + 5.62; fach.remove(c0); c0.geometry.dispose();
      [[-34, -AB, 0, HF], [AB, 34, 0, HF], [-AB, AB, 0, PY], [-AB, AB, Y1, HF]].forEach(([xa, xb, ya, yb]) => { const tx = m0.map.clone(); tx.needsUpdate = true; tx.repeat.set((xb - xa) / 2.4, (yb - ya) / 2.4); tx.offset.set(((xa + 34) / 2.4) % 1, (ya / 2.4) % 1); const m = m0.clone(); m.map = tx; const c = caja(xb - xa, yb - ya, OM.gro, m); c.position.set((xa + xb) / 2, (ya + yb) / 2, 0); c.castShadow = c.receiveShadow = true; fach.add(c); }); })();
    const SA = 4.5, SF = -8.4, SH = 5.62, GR = OM.gro;   /* media anchura, fondo y alto de la sala (en las medidas del palco) */
    const sillar = (q, w, h, c1, c2) => { q.fillStyle = '#5a3a26'; q.fillRect(0, 0, w, h); const fh = h / 9; for (let f = 0; f < 9; f++) { let x = f % 2 ? -50 : 0; while (x < w) { const bw = 70 + ((f * 37 + x * 13) % 60); q.fillStyle = mezcla(c1, c2, ((f * 53 + x * 7) % 100) / 100); q.fillRect(x + 2, f * fh + 2, bw - 4, fh - 4); x += bw; } } };
    const txFondo = lz(1024, 640, (q, w, h) => { sillar(q, w, h, '#c08a58', '#e0b078');
      const gl = q.createRadialGradient(w / 2, h * .3, 20, w / 2, h * .3, w * .62); gl.addColorStop(0, 'rgba(255,226,150,.5)'); gl.addColorStop(.5, 'rgba(255,190,110,.12)'); gl.addColorStop(1, 'rgba(40,14,10,.72)'); q.fillStyle = gl; q.fillRect(0, 0, w, h);
      /* el tapiz real del fondo, con su cenefa de oro y la M del reino, colgado de una barra */
      const tx0 = w / 2 - 150, ty0 = 70, tw = 300, th = 400; q.fillStyle = 'rgba(30,10,6,.45)'; q.fillRect(tx0 + 10, ty0 + 12, tw, th); const gt = q.createLinearGradient(tx0, 0, tx0 + tw, 0); gt.addColorStop(0, '#4a1466'); gt.addColorStop(.5, '#7a2a9a'); gt.addColorStop(1, '#4a1466'); q.fillStyle = gt; q.fillRect(tx0, ty0, tw, th);
      q.strokeStyle = '#e2a92e'; q.lineWidth = 10; q.strokeRect(tx0 + 12, ty0 + 12, tw - 24, th - 24); q.lineWidth = 3; q.strokeRect(tx0 + 28, ty0 + 28, tw - 56, th - 56); q.fillStyle = '#e2a92e'; [[tx0 + 44, ty0 + 44], [tx0 + tw - 44, ty0 + 44], [tx0 + 44, ty0 + th - 44], [tx0 + tw - 44, ty0 + th - 44]].forEach(([x, y]) => { estrella2D(q, x, y, 12, 5, 5); q.fill(); });
      q.save(); const e = 190 / 2160; q.translate(w / 2 - 1130 * e, ty0 + th / 2 + 70); q.scale(e, -e); q.shadowColor = 'rgba(20,5,0,.7)'; q.shadowBlur = 8; q.fillStyle = '#f0c040'; q.fill(new Path2D(M_GOTICA)); q.restore();
      q.fillStyle = '#3a2410'; q.fillRect(tx0 - 26, ty0 - 12, tw + 52, 12); q.fillStyle = '#e2a92e'; [tx0 - 26, tx0 + tw + 26].forEach(x => { q.beginPath(); q.arc(x, ty0 - 6, 11, 0, 7); q.fill(); });
      /* dos ventanales ojivales con vidriera, a los lados */
      [w * .14, w * .86].forEach(cx => { const vw = 62, v0 = 150, v1 = 430; q.fillStyle = '#3a2416'; q.beginPath(); q.moveTo(cx - vw - 10, v1 + 8); q.lineTo(cx - vw - 10, v0); q.quadraticCurveTo(cx - vw - 10, v0 - 96, cx, v0 - 120); q.quadraticCurveTo(cx + vw + 10, v0 - 96, cx + vw + 10, v0); q.lineTo(cx + vw + 10, v1 + 8); q.closePath(); q.fill();
        q.save(); q.beginPath(); q.moveTo(cx - vw, v1); q.lineTo(cx - vw, v0); q.quadraticCurveTo(cx - vw, v0 - 86, cx, v0 - 106); q.quadraticCurveTo(cx + vw, v0 - 86, cx + vw, v0); q.lineTo(cx + vw, v1); q.closePath(); q.clip(); const cols = ['#2a2f7a', '#6a2a8a', '#1f4f7a', '#8a2a5a', '#2a5a6a']; for (let yy = 0; yy < 12; yy++) for (let xx = 0; xx < 5; xx++) { q.fillStyle = cols[(xx * 3 + yy * 2) % 5]; q.fillRect(cx - vw + xx * 26, v0 - 110 + yy * 34, 25, 33); } q.strokeStyle = '#1a1420'; q.lineWidth = 3; for (let xx = 1; xx < 5; xx++) { q.beginPath(); q.moveTo(cx - vw + xx * 26, 0); q.lineTo(cx - vw + xx * 26, h); q.stroke(); } q.lineWidth = 7; q.beginPath(); q.moveTo(cx, v0 - 110); q.lineTo(cx, v1); q.stroke(); q.restore(); });
      const zo = q.createLinearGradient(0, h * .8, 0, h); zo.addColorStop(0, 'rgba(30,12,8,0)'); zo.addColorStop(1, 'rgba(30,12,8,.6)'); q.fillStyle = zo; q.fillRect(0, 0, w, h); });
    const txLado = lz(768, 640, (q, w, h) => { sillar(q, w, h, '#a87648', '#c89860'); const gl = q.createLinearGradient(0, 0, w, 0); gl.addColorStop(0, 'rgba(30,12,8,.6)'); gl.addColorStop(.5, 'rgba(255,200,120,.14)'); gl.addColorStop(1, 'rgba(30,12,8,.5)'); q.fillStyle = gl; q.fillRect(0, 0, w, h);
      [w * .5].forEach(cx => { const gt = q.createLinearGradient(cx - 110, 0, cx + 110, 0); gt.addColorStop(0, '#1f1c66'); gt.addColorStop(.5, '#3a36a8'); gt.addColorStop(1, '#1f1c66'); q.fillStyle = 'rgba(30,10,6,.4)'; q.fillRect(cx - 100, 102, 220, 360); q.fillStyle = gt; q.fillRect(cx - 110, 90, 220, 360); q.strokeStyle = '#e2a92e'; q.lineWidth = 8; q.strokeRect(cx - 98, 102, 196, 336); q.fillStyle = '#e2a92e'; estrella2D(q, cx, 270, 46, 20, 8); q.fill(); q.fillStyle = '#3a2410'; q.fillRect(cx - 130, 80, 260, 11); }); });
    const txTecho = lz(512, 512, (q, w, h) => { q.fillStyle = '#5a3418'; q.fillRect(0, 0, w, h); for (let i = 0; i < 8; i++) { q.fillStyle = i % 2 ? '#6a3e1c' : '#63391a'; q.fillRect(0, i * 64, w, 62); } for (let i = 0; i < 6; i++) { const x = i * w / 5 - 14; const gv = q.createLinearGradient(x, 0, x + 28, 0); gv.addColorStop(0, '#2a1608'); gv.addColorStop(.5, '#4a2a12'); gv.addColorStop(1, '#221206'); q.fillStyle = gv; q.fillRect(x, 0, 28, h); } const gl = q.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w * .6); gl.addColorStop(0, 'rgba(255,214,140,.5)'); gl.addColorStop(1, 'rgba(20,8,4,.55)'); q.fillStyle = gl; q.fillRect(0, 0, w, h); });
    const txPiso = lz(512, 512, (q, w, h) => { for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { q.fillStyle = (x + y) % 2 ? '#b89878' : '#6a4a3a'; q.fillRect(x * 64, y * 64, 64, 64); } q.fillStyle = '#8a1a3a'; q.fillRect(w * .34, 0, w * .32, h); q.fillStyle = '#e2a92e'; q.fillRect(w * .34, 0, 8, h); q.fillRect(w * .66 - 8, 0, 8, h); const gl = q.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w * .62); gl.addColorStop(0, 'rgba(255,214,140,.3)'); gl.addColorStop(1, 'rgba(20,8,4,.6)'); q.fillStyle = gl; q.fillRect(0, 0, w, h); });
    const plano = (tx, w, h, x, y, z, rx, ry) => { const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ map: tx })); m.position.set(x, y, z); m.rotation.set(rx || 0, ry || 0, 0); PA.add(m); return m; };
    plano(txFondo, SA * 2, SH, 0, SH / 2, SF); plano(txLado, -SF - GR, SH, -SA, SH / 2, (SF - GR) / 2, 0, Math.PI / 2); plano(txLado, -SF - GR, SH, SA, SH / 2, (SF - GR) / 2, 0, -Math.PI / 2);
    plano(txTecho, SA * 2, -SF, 0, SH, SF / 2, Math.PI / 2); plano(txPiso, SA * 2, -SF, 0, .01, SF / 2, -Math.PI / 2);
    [-1, 1].forEach(sg => { const tr = new T.MeshBasicMaterial({ color: '#2a160c' }), pa = caja(SA - 3.45, SH, .1, tr); pa.position.set(sg * (SA + 3.45) / 2, SH / 2, -GR - .05); PA.add(pa); });   /* el revés de la fachada, a los lados del hueco */
    /* dos tronos al fondo, bajo el tapiz, sobre su grada */
    const oroB = new T.MeshBasicMaterial({ color: '#e0a830' }), velB = new T.MeshBasicMaterial({ color: '#7a1f4a' }), grada = caja(4.4, .3, 1.5, new T.MeshBasicMaterial({ color: '#8a6a52' })); grada.position.set(0, .15, SF + .85); PA.add(grada);
    [-1, 1].forEach(sg => { const tr = new T.Group(); tr.position.set(sg * 1.05, .3, SF + .6); PA.add(tr); const re = caja(1.1, 2.6, .16, oroB); re.position.y = 1.3; tr.add(re); const co = caja(.86, 2.1, .06, velB); co.position.set(0, 1.42, .1); tr.add(co); const rem = new T.Mesh(new T.ConeGeometry(.3, .5, 4), oroB); rem.position.y = 2.85; rem.rotation.y = Math.PI / 4; tr.add(rem); const as = caja(1.1, .5, .9, oroB); as.position.set(0, .25, .45); tr.add(as); const cj = caja(.9, .12, .76, velB); cj.position.set(0, .56, .47); tr.add(cj); [-1, 1].forEach(s2 => { const br = caja(.14, .5, .9, oroB); br.position.set(s2 * .5, .75, .45); tr.add(br); }); });
    /* la gran lámpara de hierro, con sus velas encendidas, colgada en mitad de la sala */
    const hie = new T.MeshBasicMaterial({ color: '#24160e' }), LA = new T.Group(); LA.position.set(0, 3.75, SF * .5); PA.add(LA); const aro = new T.Mesh(new T.TorusGeometry(1.25, .07, 6, 28), hie); aro.rotation.x = Math.PI / 2; LA.add(aro); const aro2 = new T.Mesh(new T.TorusGeometry(.6, .05, 6, 20), hie); aro2.rotation.x = Math.PI / 2; aro2.position.y = .5; LA.add(aro2);
    const cad = cil(.03, .03, SH - 3.75 - .5, hie, 5); cad.position.y = .5 + (SH - 3.75 - .5) / 2; LA.add(cad); for (let i = 0; i < 4; i++) { const ti = cil(.02, .02, 1.45, hie, 4), a = i / 4 * 6.283 + .4; ti.position.set(Math.cos(a) * .62, .62, Math.sin(a) * .62); ti.rotation.z = Math.cos(a) * 1.05; ti.rotation.x = -Math.sin(a) * 1.05; LA.add(ti); }
    for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283, ve = cil(.05, .05, .3, new T.MeshBasicMaterial({ color: '#f4e6c0' }), 6); ve.position.set(Math.cos(a) * 1.25, .2, Math.sin(a) * 1.25); LA.add(ve); llama(ve, .24, .17, 0, 0); }
    const halo = brillo('#ffcf80', 7, .3); halo.position.set(0, 3.7, SF * .5); PA.add(halo);
    [-1, 1].forEach(sg => antorcha(PA, sg * 2.5, 2.9, SF + .06, 0, 0));
    const arcada = new T.Shape(); arcada.moveTo(-3.6, 0); arcada.lineTo(3.6, 0); arcada.lineTo(3.6, 5.7); arcada.lineTo(-3.6, 5.7); arcada.lineTo(-3.6, 0); [-2.2, 0, 2.2].forEach(cx => { const hu = new T.Path(), w2 = .92, r0 = 2.9, tp = 4.75; hu.moveTo(cx - w2, 0); hu.lineTo(cx - w2, r0); hu.quadraticCurveTo(cx - w2, r0 + (tp - r0) * .75, cx, tp); hu.quadraticCurveTo(cx + w2, r0 + (tp - r0) * .75, cx + w2, r0); hu.lineTo(cx + w2, 0); hu.lineTo(cx - w2, 0); arcada.holes.push(hu); });
    const arc3 = new T.Mesh(new T.ExtrudeGeometry(arcada, { depth: .55, bevelEnabled: true, bevelSize: .05, bevelThickness: .05, bevelSegments: 1, curveSegments: 10 }), mat('#d9c6a6', { roughness: .85 })); arc3.position.set(0, 0, -.2); arc3.castShadow = true; PA.add(arc3);
    [-3.3, -1.1, 1.1, 3.3].forEach(x => { const co = cil(.13, .15, 2.9, mat('#e6d6b8', { roughness: .7 }), 12); co.position.set(x, 1.45, .46); PA.add(co); const ca = caja(.42, .22, .42, mat('#d9c6a6', { roughness: .8 })); ca.position.set(x, 2.98, .46); PA.add(ca); const ba = caja(.38, .16, .38, mat('#d9c6a6', { roughness: .8 })); ba.position.set(x, .08, .46); PA.add(ba); });
    const lzp = new T.PointLight('#ffcf8a', 2.2, 13); lzp.position.set(0, 3.4, 1.6); PA.add(lzp); const foco = new T.SpotLight('#fff0d0', 2.6, 30, .32, .6); foco.position.set(0, 6.5, 12); foco.target.position.set(0, 1.6, 1.8); PA.add(foco); PA.add(foco.target);
    const tarima = caja(4.6, .5, 1.6, pie2); tarima.position.set(0, .25, 1.75); PA.add(tarima);
    /* dosel de tela sobre el palco: un toldo inclinado con su faldón festoneado, en dos varas doradas */
    const txd = lz(512, 256, (q, w, h) => { q.clearRect(0, 0, w, h); for (let i = 0; i < 8; i++) { q.fillStyle = i % 2 ? '#5a1f7a' : '#7a2a9a'; q.fillRect(i * 64, 0, 64, h); } q.fillStyle = '#e2a92e'; q.fillRect(0, 0, w, 10); q.globalCompositeOperation = 'destination-out'; q.fillStyle = '#000'; for (let i = 0; i < 8; i++) { q.beginPath(); q.moveTo(i * 64, h); q.lineTo(i * 64 + 32, h - 46); q.lineTo(i * 64 + 64, h); q.closePath(); q.fill(); } q.globalCompositeOperation = 'source-over'; q.strokeStyle = '#e2a92e'; q.lineWidth = 6; q.beginPath(); for (let i = 0; i < 8; i++) { q.moveTo(i * 64, h - 3); q.lineTo(i * 64 + 32, h - 49); q.lineTo(i * 64 + 64, h - 3); } q.stroke(); });
    const md = mat('#e9dfda', { map: txMuro('rayas', '#5a1f7a', '#7a2a9a'), roughness: .7, side: T.DoubleSide }), techo = new T.Mesh(new T.PlaneGeometry(9, 3.3), md); techo.rotation.x = -Math.PI / 2 + .28; techo.position.set(0, 6.2, 1.5); techo.castShadow = true; PA.add(techo);
    const fal = new T.Mesh(new T.PlaneGeometry(9, 1), new T.MeshStandardMaterial({ map: txd, transparent: true, alphaTest: .5, side: T.DoubleSide, roughness: .7 })); fal.position.set(0, 5.32, 3.06); PA.add(fal); [-4.3, 4.3].forEach(x => { const va = cil(.06, .06, 5.8, mat('#e2a92e', { metalness: .85, roughness: .3 }), 8); va.position.set(x, 2.9, 2.9); PA.add(va); });
    const tap = new T.Mesh(new T.PlaneGeometry(2.4, 1.5), new T.MeshStandardMaterial({ map: txPendon(), transparent: true, alphaTest: .5, roughness: .6 })); tap.scale.set(.8, 1.2, 1); tap.position.set(0, -.2, 2.74); PA.add(tap);   /* repostero con el escudo, colgado de la balaustrada */
    MU.patio.palco = PA; const esc = MU.g;
    /* los reyes salen de la sala por el arco del centro, se asoman a la balaustrada (sobre su tarima) y saludan */
    cargaExtra(['rey', 'reina']);
    conExtra(['rey', 'reina'], () => { if (MU.g !== esc) return; [['rey', -1.05, 0], ['reina', 1.05, 1.3]].forEach(([k, x, ret]) => { const xi = x * .34, r = persona(PA, k, 3, xi, -3.6, 0, 'quieto'); if (!r) return;
        r.traverse(m => { if (m.isMesh && m.material.emissive) { m.material.emissiveMap = m.material.map; m.material.emissive.set('#8a7a66'); } });
        const L1 = 4.2, L2 = Math.hypot(x - xi, 1.25), V = 1.35; let te = -(1.4 + ret), fase = 0;
        anim(dt => { if (fase === 2) return; te += dt; if (te < 0) return; if (!fase) { fase = 1; gesto(r, 'anda'); }
          const d = Math.min(te * V, L1 + L2); let px, pz, ry; if (d < L1) { px = xi; pz = -3.6 + d; ry = 0; } else { const k2 = (d - L1) / L2; px = xi + (x - xi) * k2; pz = .6 + 1.25 * k2; ry = Math.atan2(x - xi, 1.25) * (1 - k2 * k2) + (x < 0 ? .12 : -.12) * k2 * k2; }
          r.position.set(px, .5 * clamp((pz - .7) / .35, 0, 1), pz); r.rotation.y = ry; if (d >= L1 + L2) { fase = 2; gesto(r, 'saluda'); } }); }); });
    /* gradas del público, a los dos lados del palco, y faroles */
    const mg = mat('#8f7868', { roughness: .9 }); [-1, 1].forEach(sg => [0, 1, 2].forEach(f => { const gr = caja(13, .5 + f * .55, 1.5, mg); gr.position.set(sg * 12.2, (.5 + f * .55) / 2, -7.4 - f * 1.5); gr.receiveShadow = true; g.add(gr); }));
    if (o.publico) { const si = []; [-1, 1].forEach(sg => { [0, 1, 2].forEach(f => { for (let i = 0; i < 12; i++) si.push([sg * (6.3 + i * 1.05) + rnd(-.15, .15), .5 + f * .55, -7.4 - f * 1.5 + rnd(-.2, .2)]); }); for (let i = 0; i < 11; i++) si.push([sg * (7 + i * 1.05) + rnd(-.2, .2), 0, -5.9 + rnd(-.25, .25)]); }); gentio(g, LITE ? si.filter((x, i) => i % 2 === 0) : si); }   /* en los demás finales del patio, el reino también llena las gradas */
    [[-18, 3.5], [18, 3.5], [-5.4, -6.4], [5.4, -6.4], [-17.5, -4.5], [17.5, -4.5]].forEach(([x, z], i) => farola(g, x, z, 4.4, .1 + i * .1, null, { luz: i < 2 && !LITE ? 10 : 0 }));
    /* la luz cálida de la fiesta: antorchas y faroles iluminan el patio */
    [[-9, 4.5, -2, 2.2, 26], [9, 4.5, -2, 2.2, 26], [0, 6, -8, 1.6, 24]].forEach(([x, y, z, i2, d]) => { if (LITE && x > 0) return; const pl = new T.PointLight('#ffb468', i2, d, 1.6); pl.position.set(x, y, z); g.add(pl); }); g.add(new T.HemisphereLight('#c8a8ff', '#5a3a30', .45));
    if (o.f) o.f(g);
  });
}
/* GRAN DESFILE: una comitiva de verdad, por la calle del patio, entre el público y bajo el palco de los reyes */
function desfile(g) {
  const ZR = -1.2, esc = MU.g;
  /* cuerdas de terciopelo a los dos lados de la calle */
  const oro = mat('#e2a92e', { metalness: .85, roughness: .3 }), ter = mat('#8a1c3a', { roughness: .6 }); [ZR - 2.6, ZR + 2.5].forEach(z => { for (let x = -18; x <= 18; x += 3) { if (z > ZR && Math.abs(x) < 4) continue; const po = cil(.05, .07, 1, oro, 8); po.position.set(x, .5, z); po.castShadow = true; g.add(po); const bo = bola(.09, oro, 8); bo.position.set(x, 1.04, z); g.add(bo); if (x < 18 && !(z > ZR && Math.abs(x + 3) < 4)) { const pts = []; for (let i = 0; i <= 8; i++) pts.push(new T.Vector3(x + i * 3 / 8, .96 - Math.sin(i / 8 * Math.PI) * .22, z)); g.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts), 10, .03, 5), ter)); } } });
  /* el público: relleno en las gradas y a pie de calle, y delante, los personajes con nombre */
  const sitios = []; [-1, 1].forEach(sg => { [0, 1, 2].forEach(f => { for (let i = 0; i < 12; i++) sitios.push([sg * (6.3 + i * 1.05) + rnd(-.15, .15), .5 + f * .55, -7.4 - f * 1.5 + rnd(-.2, .2)]); }); for (let i = 0; i < 13; i++) sitios.push([sg * (5.6 + i * 1.02) + rnd(-.2, .2), 0, -5.9 + rnd(-.25, .25)]); for (let i = 0; i < 6; i++) sitios.push([sg * (9.5 + i * 1.3) + rnd(-.3, .3), 0, ZR + 3.7 + rnd(-.3, .9)]); }); for (let i = 0; i < 9; i++) sitios.push([-4.4 + i * 1.1, 0, -6.9 + rnd(-.2, .2)]);
  gentio(g, LITE ? sitios.filter((s2, i) => i % 2 === 0) : sitios);
  const FILA = [['sonia', 1.75, -3.6], ['josep', 1.85, -2.5], ['roser', 1.6, -1.45], ['hector', 1.8, 1.4], ['jaume', 1.7, 2.5], ['aldeana', 1.75, 3.9], ['aldeano', 1.8, -4.9], ['herrero', 1.9, 5.2], ['bonifacio', 1.85, 6.6], ['arabe', 1.9, -11.4]];   /* el pretendiente mira el desfile entre el público, a un lado; Bonifacio aplaude desde el público (no tiene paso de desfile) */
  FILA.forEach(([k, alto, x], i) => conExtra([k], () => { if (MU.g !== esc) return; persona(g, k, alto, x, ZR - 3.5 - (i % 2) * .5, rnd(-.15, .15), i % 3 ? 'vitorea' : 'saluda'); }));
  /* la comitiva */
  const COM = [], paso = 3.3; let hueco = 0; const pone = (f) => { const i = hueco++; COM.push({ i, f, o: null }); return COM[COM.length - 1]; };
  const camina = (k, alto, que, extra) => { const c = pone(); const mk = () => { if (MU.g !== esc) return; const p = extra ? persona(g, k, alto, 0, ZR, Math.PI / 2, que || 'anda') : pon(g, k, alto, 0, 0, ZR, { ry: Math.PI / 2, mide: true }); if (!p) return; if (!extra) anima(p, que || 'Walking'); c.o = p; }; if (extra) conExtra([k], mk); else mk(); return c; };
  const carroza = (col, monta) => { const c = pone(); hueco++; const G = new T.Group(); g.add(G); const pl = caja(4.6, .5, 2.3, mat(col, { roughness: .5 })); pl.position.y = .85; pl.castShadow = true; G.add(pl); const fa = caja(4.7, .7, 2.4, mat('#e9dfda', { map: txMuro('telon', col, '#e2a92e'), roughness: .8 })); fa.position.y = .42; G.add(fa); const ce = caja(4.8, .12, 2.5, oro); ce.position.y = 1.12; G.add(ce);
    [-1.6, 1.6].forEach(x => [-1.2, 1.2].forEach(z => { const ru = cil(.42, .42, .16, mat('#3a2a22', { roughness: .7 }), 16); ru.rotation.x = Math.PI / 2; ru.position.set(x, .42, z); G.add(ru); anim(dt => { ru.rotation.y -= dt * 3.6; }); const tp = cil(.14, .14, .18, oro, 10); tp.rotation.x = Math.PI / 2; tp.position.set(x, .42, z); G.add(tp); }));
    for (let i = 0; i < 14; i++) { const cc = ['#ffd27a', '#ff8fd0', '#8fd8ff'][i % 3], mm = new T.MeshStandardMaterial({ color: '#6a5a3a', emissive: cc, emissiveIntensity: 2, roughness: .3 }), b = bola(.08, mm, 8); b.position.set(-2.3 + i * 4.6 / 13, 1.22, 1.25); G.add(b); anim((dt, tt) => { mm.emissiveIntensity = (i + Math.floor(tt * 4)) % 3 ? .6 : 2.6; }); }
    monta(G); c.o = G; c.carro = true; return c; };
  camina('maestro', 2, 'Walking');
  camina('soldado3', 2, 'anda', true); camina('brocoli', 1.8, 'Walking'); camina('buho', 1.7, 'Walking');
  carroza('#6a1f8a', G => { const gu = pon(G, 'gusano', 1.9, 0, 1.18, 0, { ry: Math.PI / 2, mide: true }); anim((dt, tt) => ondula(gu, tt, .16, 3)); [-1.6, 1.6].forEach(x => { const c = pieza('caramelo', .8); c.position.set(x, 1.18, 0); G.add(c); anim(dt => { c.rotation.y += dt * 1.5; }); }); });
  const chef = camina('chef', 2, null); anim((dt, tt) => { if (chef.o) ondula(chef.o, tt, .14, 3); });
  camina('hechicera', 1.85, 'anda', true); camina('adales', 1.85, 'anda', true);
  carroza('#a82a3a', G => { [-1.2, 1.2].forEach((x, i) => { const pa = cil(.05, .05, 2.6, oro, 8); pa.position.set(x, 2.4, 0); G.add(pa); const cb = pieza('caballo', 1.5); cb.rotation.y = Math.PI / 2; G.add(cb); anim((dt, tt) => { cb.position.set(x, 1.5 + Math.sin(tt * 2.4 + i * 3) * .35, 0); }); }); const co = pieza('copa', 1.3, { emis: '#ffb000', emisI: .3 }); co.position.set(0, 1.18, 0); G.add(co); anim(dt => { co.rotation.y += dt; }); });
  camina('bufon', 1.75, 'anda', true); camina('ladron', 1.75, 'anda', true);
  const largo = Math.max(hueco * paso + 8, 46), vel = 1.7; let av = 0;
  anim((dt, tt) => { av += vel * dt; COM.forEach(c => { if (!c.o) return; let x = ((av - c.i * paso - (c.carro ? paso * .5 : 0)) % largo + largo) % largo - largo / 2 - 4; c.o.position.x = x; c.o.position.z = ZR + (c.carro ? 0 : Math.sin(c.i * 2.3) * .35); if (c.carro) c.o.position.y = Math.abs(Math.sin(tt * 5 + c.i)) * .015; }); });
  /* confeti desde las almenas y fuegos tras la torre */
  let cf = 0; anim(dt => { cf -= dt; if (cf <= 0) { cf = 1.6; confeti(new T.Vector3(rnd(-10, 10), 9, rnd(-6, 2)), LITE ? 30 : 70); } });
}
/* PIROTECNIA (la de WONDERWALK: sus texturas de chispa y la grabación de cohetes de Josep): cada cohete sube dejando estela,
   estalla en una palmera que cae y se apaga, da su fogonazo al cielo y suena con su estallido, que llega un poco después según la distancia */
function fuegos(g, o) {
  const NP = LITE ? 80 : 170, MAX = LITE ? 4 : 8, tl = new T.TextureLoader(), TXF = ['flare_01', 'spark_06', 'star_07', 'star_09'].map(n => { const k = 'piro_' + n; if (!TEX[k]) { TEX[k] = tl.load('../packs/wonderwalk/fx/' + n + '.png'); TEX[k].encoding = T.sRGBEncoding; } return TEX[k]; });
  const lista = [], luz = new T.PointLight('#ffffff', 0, 140, 1.2); g.add(luz); let tm = .4; suena('amb', 'piro', { bucle: true, vol: .22, entra: 1.2 });
  anim((dt, tt) => { tm -= dt;
    if (tm <= 0 && lista.filter(f => f.on).length < MAX) { tm = rnd(.3, .85); let f = lista.find(q2 => !q2.on);
      if (!f) { const ge = new T.BufferGeometry(); ge.setAttribute('position', new T.Float32BufferAttribute(new Float32Array((NP + 14) * 3), 3)); const pts = new T.Points(ge, new T.PointsMaterial({ map: TXF[0], size: 1.5, transparent: true, depthWrite: false, blending: T.AdditiveBlending, fog: false, sizeAttenuation: true })); pts.frustumCulled = false; g.add(pts); f = { pts, v: new Float32Array(NP * 3) }; lista.push(f); }
      f.c = [rnd(-o.x, o.x), rnd(o.y0, o.y1), rnd(o.z0, o.z1)]; f.sub = rnd(.6, 1); f.t = -f.sub; f.on = true; f.son = false; f.col = new T.Color().setHSL(Math.random(), 1, .62); f.tipo = ri(3); f.pts.material.map = TXF[1 + ri(3)]; f.pts.material.needsUpdate = true; sint(900 + Math.random() * 500, f.sub * .8, 'sine', .012);
      for (let i = 0; i < NP; i++) { const u = Math.random() * 2 - 1, ph = Math.random() * 6.283, q2 = Math.sqrt(1 - u * u), sp = (f.tipo === 1 ? 10 : 6 + Math.random() * 5) * (.85 + Math.random() * .3); f.v[i * 3] = q2 * Math.cos(ph) * sp; f.v[i * 3 + 1] = u * sp * (f.tipo === 2 ? .45 : 1); f.v[i * 3 + 2] = q2 * Math.sin(ph) * sp; } }
    let fl = 0, fc = null; lista.forEach(f => { if (!f.on) { f.pts.visible = false; return; } f.t += dt; const P = f.pts.geometry.attributes.position, m = f.pts.material; f.pts.visible = true;
      if (f.t < 0) { const k2 = 1 + f.t / f.sub; for (let i = 0; i < NP + 14; i++) P.setXYZ(i, f.c[0] + Math.sin(i + tt * 20) * .06, i < 14 ? lerp(0, f.c[1], k2) - i * .3 : -999, f.c[2]); m.size = .9; m.opacity = .9; m.color.set('#ffd9a0'); }
      else { const t2 = f.t, dur = 2.7, fr = Math.exp(-t2 * 1.1), s2 = (1 - fr) / 1.1; if (t2 > dur) { f.on = false; f.pts.visible = false; return; }
        if (!f.son) { f.son = true; const d = Math.hypot(f.c[0] - CAM.position.x, f.c[1] - CAM.position.y, f.c[2] - CAM.position.z); setTimeout(() => fx('piro' + (1 + ri(5)), clamp(1 - d / 70, .2, .62), rnd(.9, 1.1)), Math.min(400, d * 3)); }
        for (let i = 0; i < NP; i++) P.setXYZ(i, f.c[0] + f.v[i * 3] * s2, f.c[1] + f.v[i * 3 + 1] * s2 - 1.6 * t2 * t2, f.c[2] + f.v[i * 3 + 2] * s2); for (let i = NP; i < NP + 14; i++) P.setXYZ(i, 0, -999, 0);
        m.color.copy(f.col); m.size = 2.9 * (1 - t2 / dur * .5) * (1 + Math.sin(tt * 40) * .12); m.opacity = clamp(1.25 - t2 / dur * 1.25, 0, 1); if (t2 < .5 && 1 - t2 / .5 > fl) { fl = 1 - t2 / .5; fc = f; } }
      P.needsUpdate = true; });
    luz.intensity = fl * 2.4; if (fc) { luz.color.copy(fc.col); luz.position.set(fc.c[0], fc.c[1], fc.c[2] + 6); } });
}

/* ======================= SALAS NUEVAS ======================= */
/* ---------- GOLOSINAS · Las Galletas Gemelas (parejas) ---------- */
SALAS.galletas = { dur: [75, 70, 62], sinMuta: false, crea(ctx) {
  const g = ctx.g, P = [4, 5, 6][ctx.modo], COLS = P; ctx.meta = P; MU.cam.p.set(0, 2.5, 5.4); MU.cam.m.set(0, 2.5, -6);
  /* la bandeja del horno, apoyada en un caballete de bastones */
  const ban = caja(COLS * 1.62 + 1.2, 4.3, .24, mat('#5a3320', { roughness: .7 })); ban.position.set(0, 2.5, -3.5); sombra(ban); g.add(ban);
  const mar = mat('#e88ab0', { roughness: .4 }); [[0, 4.72, COLS * 1.62 + 1.5, .22], [0, .28, COLS * 1.62 + 1.5, .22]].forEach(([x, y, w, h]) => { const b = caja(w, h, .36, mar); b.position.set(x, y, -3.45); g.add(b); }); [-1, 1].forEach(sg => { const b = caja(.22, 4.6, .36, mar); b.position.set(sg * (COLS * .81 + .7), 2.5, -3.45); g.add(b); baston(g, sg * (COLS * .81 + 1.5), -3.9, 3.6, sg > 0 ? Math.PI : 0); });
  const gu = pon(g, 'gusano', 1.5, -(COLS * .81 + 2.6), 0, -2.4, { ry: .6, mide: true }); anim((dt, tt) => ondula(gu, tt, .12, 2.5));
  /* seis golosinas: forma y color distintos a la vez, para que se distingan también sin ver bien los colores */
  const SIM = [['#e0355f', q => { q.beginPath(); q.moveTo(64, 104); q.bezierCurveTo(8, 62, 30, 18, 64, 46); q.bezierCurveTo(98, 18, 120, 62, 64, 104); q.fill(); }], ['#e8a92c', q => { estrella2D(q, 64, 66, 46, 20, 5); q.fill(); }], ['#3f8fe0', q => { q.beginPath(); q.arc(64, 64, 40, 0, 7); q.fill(); q.strokeStyle = '#f0e0d0'; q.lineWidth = 7; q.beginPath(); for (let a = 0; a < 12; a += .1) q.lineTo(64 + Math.cos(a) * a * 3, 64 + Math.sin(a) * a * 3); q.stroke(); }], ['#2fb85a', q => { q.beginPath(); q.moveTo(64, 16); q.bezierCurveTo(116, 76, 96, 112, 64, 112); q.bezierCurveTo(32, 112, 12, 76, 64, 16); q.fill(); }], ['#9a5fe0', q => { q.beginPath(); q.moveTo(64, 14); q.lineTo(108, 64); q.lineTo(64, 114); q.lineTo(20, 64); q.closePath(); q.fill(); }], ['#f07a2c', q => { rr(q, 22, 38, 84, 52, 22); q.fill(); q.beginPath(); q.moveTo(22, 64); q.lineTo(4, 40); q.lineTo(4, 88); q.closePath(); q.fill(); q.beginPath(); q.moveTo(106, 64); q.lineTo(124, 40); q.lineTo(124, 88); q.closePath(); q.fill(); }]];
  const txCara = SIM.map(([c, f]) => lz(128, 128, q => { q.fillStyle = '#f2e2c4'; q.beginPath(); q.arc(64, 64, 64, 0, 7); q.fill(); q.fillStyle = c; f(q); q.lineWidth = 5; q.strokeStyle = 'rgba(60,20,30,.55)'; q.stroke(); }));
  const txDorso = lz(128, 128, q => { q.fillStyle = '#c98a4a'; q.beginPath(); q.arc(64, 64, 64, 0, 7); q.fill(); for (let i = 0; i < 9; i++) { q.fillStyle = '#5a2f1c'; q.beginPath(); q.arc(64 + Math.cos(i * 2.4) * (14 + i * 4.4), 64 + Math.sin(i * 2.4) * (14 + i * 4.4), 6 + (i % 3) * 1.6, 0, 7); q.fill(); } q.lineWidth = 6; q.strokeStyle = 'rgba(120,70,30,.6)'; q.beginPath(); q.arc(64, 64, 58, 0, 7); q.stroke(); });
  const tipos = baraja([0, 1, 2, 3, 4, 5]).slice(0, P), orden = baraja(tipos.concat(tipos)), sitio = i => new T.Vector3((i % COLS - (COLS - 1) / 2) * 1.62, i < COLS ? 3.5 : 1.5, -3.2);
  const canto = mat('#b8743a', { roughness: .8 }), disco = new T.CircleGeometry(.66, 32);
  const C = orden.map((tp, i) => { const gr = new T.Group(); gr.position.copy(sitio(i)); g.add(gr); const cu = cil(.66, .66, .16, canto, 32); cu.rotation.x = Math.PI / 2; cu.castShadow = true; gr.add(cu);
    const d = new T.Mesh(disco, mat('#f0e4dc', { map: txDorso, roughness: .7 })); d.position.z = .085; gr.add(d); const c = new T.Mesh(disco, mat('#f4ece6', { map: txCara[tp], roughness: .5 })); c.rotation.y = Math.PI; c.position.z = -.085; gr.add(c);
    gr.userData.ga = i; ctx.diana(gr, 'ga'); return { gr, tp, abierta: false, hecha: false, k: 0, i }; });
  /* giro suave de cada galleta hacia su estado (abierta = cara a la vista) */
  anim((dt, tt) => C.forEach(c => { c.k = clamp(c.k + (c.abierta ? dt : -dt) * 4.5, 0, 1); c.gr.rotation.y = suave(c.k) * Math.PI; c.gr.position.z = -3.2 + Math.sin(c.k * Math.PI) * .5; if (c.hecha) c.gr.rotation.z = Math.sin(tt * 3 + c.i) * .08; }));
  let primera = null, bloque = 0, cierra = null, jugando = false;
  return {
    empieza() { C.forEach(c => { c.abierta = true; }); bloque = [3.2, 2.4, 1.6][ctx.modo]; cierra = () => { C.forEach(c => { if (!c.hecha) c.abierta = false; }); fx('parpadeo', .5); jugando = true; }; },
    previa() {},
    paso(dt) { if (bloque > 0) { bloque -= dt; if (bloque <= 0 && cierra) { const f = cierra; cierra = null; f(); } } },
    muta() { const libres = baraja(C.filter(c => !c.hecha && !c.abierta)); if (libres.length < 2) return; const [a, b] = libres, pa = a.gr.position.clone(), pb = b.gr.position.clone(); let k = 0; bloque = Math.max(bloque, .9); anim(dt => { if (k >= 1) return; k = Math.min(1, k + dt * 1.4); const s2 = suave(k); a.gr.position.x = lerp(pa.x, pb.x, s2); a.gr.position.y = lerp(pa.y, pb.y, s2) + Math.sin(k * Math.PI) * .5; b.gr.position.x = lerp(pb.x, pa.x, s2); b.gr.position.y = lerp(pb.y, pa.y, s2) - Math.sin(k * Math.PI) * .5; }); },
    toca(h) { if (bloque > 0 || !jugando) return; const o = h && deQuien(h.object, 'ga'); if (!o) return; const c = C[o.userData.ga]; if (c.abierta || c.hecha) return; c.abierta = true; fx('clic', .7); marimba(72 + c.tp * 2, .14);
      if (!primera) { primera = c; return; }
      const a = primera; primera = null;
      if (a.tp === c.tp) { a.hecha = c.hecha = true; bloque = .45; fx('ding'); const p = a.gr.position.clone().lerp(c.gr.position, .5); p.z += .6; ctx.bien(p, 90); [a, c].forEach(x => chispas(x.gr.position.clone().add(new T.Vector3(0, 0, .5)), 14, [SIM[x.tp][0], '#ffffff', '#ffd23f'], { vel: 3, tam: .3 })); }
      else { bloque = [1.3, 1.1, .9][ctx.modo]; J.combo = 0; fx('popg', .5); cierra = () => { a.abierta = false; c.abierta = false; }; } },
    bot() { if (bloque > 0 || !jugando) return null; let o; if (primera) o = C.find(c => c !== primera && !c.hecha && c.tp === primera.tp); else o = C.find(c => !c.hecha && !c.abierta); if (!o) return null; o.gr.userData.bAlto = 0; return o.gr; }, botT: .55
  };
} };

/* ---------- FERIA · La Caseta de Tiro ---------- */
SALAS.tiro = { dur: [58, 52, 46], sinFondo: true, crea(ctx) {
  const g = ctx.g; ctx.meta = [12, 15, 18][ctx.modo]; MU.cam.p.set(0, 2.5, 5.2); MU.cam.m.set(0, 2.7, -6);
  /* la caseta: fondo de lona, mostrador, techo con bombillas y tres raíles */
  const AN = 15, txl = txMuro('rayas', '#1c2a7a', '#3a4aa8').clone(); txl.needsUpdate = true; txl.wrapS = txl.wrapT = T.RepeatWrapping; txl.repeat.set(4, 1.6); const fondo = caja(AN + 2, 7.2, .3, mat('#d8d0d0', { map: txl, roughness: .9 })); fondo.position.set(0, 3.6, -8.4); fondo.receiveShadow = true; g.add(fondo);
  const txm = txMuro('tablas', '#8a5a3a', '#a8703f').clone(); txm.needsUpdate = true; txm.wrapS = txm.wrapT = T.RepeatWrapping; txm.repeat.set(4, .3); const mos = caja(AN + 2, 1.05, 1.1, mat('#e9dfda', { map: txm, roughness: .8 })); mos.position.set(0, .52, -3.6); sombra(mos); g.add(mos); const tapa = caja(AN + 2.4, .14, 1.4, mat('#c22a3a', { roughness: .5 })); tapa.position.set(0, 1.1, -3.6); g.add(tapa);
  [-1, 1].forEach(sg => { const txp = txMuro('rayas', '#c22a3a', '#d8c2a0').clone(); txp.needsUpdate = true; txp.wrapS = txp.wrapT = T.RepeatWrapping; txp.repeat.set(1.4, 1.6); const lat = caja(.3, 7.2, 5.4, mat('#e9dfda', { map: txp, roughness: .9 })); lat.position.set(sg * (AN / 2 + 1), 3.6, -5.8); sombra(lat); g.add(lat); });
  const txt = txMuro('rayas', '#c22a3a', '#d8c2a0').clone(); txt.needsUpdate = true; txt.wrapS = txt.wrapT = T.RepeatWrapping; txt.repeat.set(5, .25); const tol = caja(AN + 3, 1.3, .4, mat('#e9dfda', { map: txt, roughness: .85 })); tol.position.set(0, 6.9, -3.2); tol.castShadow = true; g.add(tol);
  for (let i = 0; i < 26; i++) { const c = i % 2 ? '#ffd27a' : '#fff0b8', mm = new T.MeshStandardMaterial({ color: '#6a5a3a', emissive: c, emissiveIntensity: 0, roughness: .3 }), b = bola(.11, mm, 8); b.position.set(-AN / 2 - 1 + (i + .5) * (AN + 2) / 26, 6.2, -2.96); g.add(b); const on = { k: 0 }; prende(k => { on.k = k; }, i * .05); anim((dt, tt) => { mm.emissiveIntensity = on.k * (1.4 + ((i + Math.floor(tt * 4)) % 3 === 0 ? 1.6 : .2)); }); }
  const lzc = new T.PointLight('#ffd9a0', 1.3, 18); lzc.position.set(0, 5.6, -4.4); g.add(lzc);
  const mc = pon(g, 'maestro', 1.9, AN / 2 + 2.6, 0, -2.6, { ry: -.7, mide: true }); anima(mc, 'Idle');
  const FILAS = [{ y: 2.15, z: -5.4, v: 1.5, r: .58, pts: 50 }, { y: 3.55, z: -6.4, v: -2.0, r: .5, pts: 70 }, { y: 4.95, z: -7.4, v: 2.6, r: .42, pts: 90 }];
  FILAS.forEach(f => { const ra = caja(AN + 1, .12, .12, mat('#e8a92c', { metalness: .7, roughness: .3 })); ra.position.set(0, f.y - f.r - .34, f.z); g.add(ra); });
  const txB = lz(128, 128, q => { [['#f2e2c4', 62], ['#c22a3a', 50], ['#f2e2c4', 38], ['#e8a92c', 26], ['#c22a3a', 9]].forEach(([c, r]) => { q.fillStyle = c; q.beginPath(); q.arc(64, 64, r, 0, 7); q.fill(); }); q.lineWidth = 6; q.strokeStyle = '#e8a92c'; q.beginPath(); q.arc(64, 64, 59, 0, 7); q.stroke(); });
  const txM = lz(128, 128, q => { q.fillStyle = '#5a2a8a'; q.beginPath(); q.arc(64, 64, 62, 0, 7); q.fill(); q.lineWidth = 6; q.strokeStyle = '#2a1050'; q.beginPath(); q.arc(64, 64, 59, 0, 7); q.stroke(); q.strokeStyle = '#f2e2c4'; q.lineWidth = 16; q.lineCap = 'round'; q.beginPath(); q.moveTo(36, 36); q.lineTo(92, 92); q.moveTo(92, 36); q.lineTo(36, 92); q.stroke(); });
  const disco = new T.CircleGeometry(1, 28), palo = mat('#e8a92c', { metalness: .6, roughness: .35 }), LIM = AN / 2 + .4, pMal = [.24, .3, .36][ctx.modo];
  const D = []; FILAS.forEach((f, fi) => { const n = 5; for (let i = 0; i < n; i++) { const gr = new T.Group(), piv = new T.Group(); gr.add(piv); const m = new T.Mesh(disco, mat('#f2ece6', { map: txB, roughness: .5 })); m.scale.setScalar(f.r); m.position.y = f.r + .34; piv.add(m); const pa = cil(.035, .035, .36, palo, 6); pa.position.y = .18; piv.add(pa);
      gr.position.set(-LIM + (i + .5) * (LIM * 2 / n), f.y - f.r - .34, f.z + .08); g.add(gr); gr.userData.di = D.length; ctx.diana(gr, 'di'); const d = { gr, piv, m, f, mala: false, caida: 0, mal: 0 }; D.push(d); viste(d); } });
  function viste(d) { d.mala = Math.random() < pMal; d.m.material.map = d.mala ? txM : txB; d.m.material.needsUpdate = true; }
  let sentido = 1;
  return {
    empieza() {}, previa(dt) { this.mueve(dt || .016); },
    mueve(dt) { D.forEach(d => { d.gr.position.x += d.f.v * sentido * ctx.vel * dt; if (d.gr.position.x > LIM) { d.gr.position.x -= LIM * 2; if (d.caida <= 0) viste(d); } if (d.gr.position.x < -LIM) { d.gr.position.x += LIM * 2; if (d.caida <= 0) viste(d); }
      if (d.caida > 0) { d.caida -= dt; d.piv.rotation.x = -Math.min(1, (1.5 - d.caida) * 6) * 1.5; if (d.caida <= 0) { viste(d); d.piv.rotation.x = 0; d.gr.position.x = d.f.v * sentido > 0 ? -LIM : LIM; } }
      if (d.mal > 0) { d.mal -= dt; d.piv.rotation.z = Math.sin(d.mal * 50) * .25; if (d.mal <= 0) d.piv.rotation.z = 0; } }); },
    paso(dt) { this.mueve(dt); },
    muta() { sentido = -1; anima(mc, 'Cheer', true); },
    toca(h) { const o = h && deQuien(h.object, 'di'); if (!o) return; const d = D[o.userData.di]; if (d.caida > 0) return; const p = d.m.getWorldPosition(new T.Vector3());
      if (d.mala) { d.mal = .5; fx('splat', .6); ctx.mal(p); } else { d.caida = 1.5; fx('ding'); fx('pop', .5, 1.3); ctx.bien(p, d.f.pts); } },
    bot() { const c = D.filter(d => !d.mala && d.caida <= 0 && Math.abs(d.gr.position.x) < LIM - 2.2); if (!c.length) return null; const d = c[ri(c.length)]; d.gr.userData.bAlto = d.f.r + .34; return d.gr; }, botT: .35
  };
} };

/* ======================= ARRANQUE ======================= */
(async function () {
  textosUI(); $('cargaT').textContent = t('cargando');
  const m0 = (location.search.match(/[?&]modo=(facil|normal|dificil)/) || [])[1]; if (m0) J.modo = { facil: 0, normal: 1, dificil: 2 }[m0];
  try { await Promise.race([Promise.all([document.fonts.load('64px LG'), document.fonts.load('64px LIL'), document.fonts.load('32px BSC'), document.fonts.load('64px BSW'), document.fonts.load('700 32px DSC')]), new Promise(r => setTimeout(r, 2500))]); } catch (e) {}
  const nat = cargaNat(); await cargaTodo(k => { $('cargaI').style.width = Math.round(k * 100) + '%'; }); await Promise.race([nat, new Promise(r => setTimeout(r, 6000))]);
  montaMevi(); requestAnimationFrame(bucle); menu(); cargaPersonajes();
  if (/[?&]portada=1/.test(location.search)) portada();
  const VER = (location.search.match(/[?&]ver=([a-z0-9:]+)/) || [])[1];   /* revisión: ?ver=plaza[:llaves] | tunel:feria | muro:feria:1 | sala:nevera | final:copa | castillo */
  if (VER) { const [a, b] = VER.split(':'); abre(null); J.t0 = performance.now(); J.fase = 'ver'; MU.libre = false; MU.upd = null;
    if (a === 'plaza') { J.llaves = ORDEN_T.slice(0, +b || 0); hud(true); pintaHud(); plaza({}); }
    else if (a === 'tunel') { J.tierra = b; J.cola = TIERRAS[b].salas.slice(); J.muro = 0; hud(true); tunel(b); }
    else if (a === 'muro' || a === 'pasillo') { const n = +(VER.split(':')[2] || 0); J.tierra = b; J.cola = TIERRAS[b].salas.slice(0, 3 - n); J.muro = n; hud(true); muro(); }
    else if (a === 'sala') { J.tierra = ORDEN_T.find(k => TIERRAS[k].salas.includes(b)); hud(true); pintaHud(); sala(b); }
    else if (a === 'final') { J.modo = { desfile: 0, guardianes: 1, copa: 2, bola: 2 }[b]; J.patos = b === 'bola' ? 4 : 0; J.llaves = ORDEN_T.slice(0, J.modo + 2); final(); } }
  window.__MEVILAND_OK = true;
})();
