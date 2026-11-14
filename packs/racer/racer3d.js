/* MSGAME · BEAT RACER en 3D · RUNNER y DIRTY · GPL-3.0 · mediaservi.com
   RUNNER: la corredora (Universal Base Characters) corre con las animaciones de Universal Animation Library por una calle de Downtown City MegaKit
   (los tres, de Quaternius, CC0), al atardecer y con arcos de neón que laten con la música.
   DIRTY: un todoterreno (Car Kit de Kenney, CC0) pintado del naranja del coche de 2D y con su matrícula, por un camino de tierra (textura de Downtown City MegaKit)
   en un pinar al atardecer, con polvo, fardos de paja, vallas de rally, conos y coches de policía.
   La partida es la misma de siempre (carriles, saltos, premios y obstáculos de index.html): este módulo solo la pinta en 3D.
   Se carga al jugar; mientras llegan los modelos, el juego se ve en 2D. */
(function () {
  'use strict';
  const T = THREE, ESC = 3.1, FONDO = 34, Z0 = 14, LARGO = 210, ACERA = 4.6, FACH = 7.75;   // la calle: lx = ±1 son ±3,1 m; z = 1 son 34 m por delante
  let M = null, P = null;
  function modelos(v) {
    if (M) return Promise.resolve(M); if (P) return P;
    const L = new T.GLTFLoader(), c = u => new Promise((ok, ko) => L.load(u + '?v=' + v, ok, undefined, ko));
    P = Promise.all(['corredora', 'anim', 'ciudad'].map(n => c('packs/racer/' + n + '.glb'))).then(([cor, an, ciu]) => (M = { cor, an, ciu })).catch(e => { P = null; throw e; });
    return P;
  }
  const sm = (a, b, t) => { t = Math.max(0, Math.min(1, (t - a) / (b - a))); return t * t * (3 - 2 * t); };

  /* ---------- lo que hay en la calle: premios, obstáculos y muros, modelados aquí con formas suaves ---------- */
  function piezas(C) {
    const mat = o => new T.MeshStandardMaterial(Object.assign({ roughness: .45, metalness: 0, envMap: C.T3.env, envMapIntensity: .8 }, o));
    const oro = mat({ color: 0xffc83a, metalness: .85, roughness: .28 }), rojo = mat({ color: 0xe8202a }), blanco = mat({ color: 0xf6f6f6, roughness: .5 });
    const lath = (pts, seg) => new T.LatheGeometry(pts.map(p => new T.Vector2(p[0], p[1])), seg || 40);
    const G = {};
    // refresco: vaso con tapa y pajita
    G['🥤'] = () => { const g = new T.Group(), v = new T.Mesh(lath([[0, 0], [.11, 0], [.14, .34], [.15, .36], [0, .36]]), mat({ color: 0xff2e63 })), t = new T.Mesh(new T.CylinderGeometry(.155, .155, .03, 32), blanco), p = new T.Mesh(new T.CylinderGeometry(.012, .012, .26, 10), mat({ color: 0x3bf3ff }));
      t.position.y = .375; p.position.set(.04, .5, 0); p.rotation.z = -.25; const fr = new T.Mesh(new T.CylinderGeometry(.142, .147, .07, 32, 1, true), blanco); fr.position.y = .2; g.add(v, t, p, fr); return g; };
    // zumo: tetrabrik con pajita
    G['🧃'] = () => { const g = new T.Group(), b = new T.Mesh(new T.BoxGeometry(.2, .3, .13, 2, 2, 2), mat({ color: 0x56d12a })), e = new T.Mesh(new T.BoxGeometry(.205, .1, .135), mat({ color: 0xffd23f })), p = new T.Mesh(new T.CylinderGeometry(.01, .01, .16, 8), blanco);
      b.position.y = .15; e.position.y = .14; p.position.set(.05, .36, 0); p.rotation.z = .3; g.add(b, e, p); return g; };
    // medalla: disco dorado con cinta
    G['🏅'] = () => { const g = new T.Group(), d = new T.Mesh(new T.CylinderGeometry(.16, .16, .035, 40), oro), c1 = new T.Mesh(new T.BoxGeometry(.07, .3, .01), mat({ color: 0x1e88e5 })), c2 = c1.clone();
      d.rotation.x = Math.PI / 2; d.position.y = .2; c1.position.set(-.05, .45, -.01); c1.rotation.z = .35; c2.position.set(.05, .45, -.01); c2.rotation.z = -.35; c2.material = mat({ color: 0xe53935 }); g.add(d, c1, c2); return g; };
    // copa
    G['🏆'] = () => { const g = new T.Group(), c = new T.Mesh(lath([[0, 0], [.16, 0], [.16, .04], [.05, .07], [.035, .18], [.05, .22], [.17, .3], [.2, .5], [.19, .5], [.155, .32], [0, .27]], 48), oro);
      [-1, 1].forEach(s => { const a = new T.Mesh(new T.TorusGeometry(.07, .014, 10, 24, Math.PI), oro); a.position.set(s * .2, .4, 0); a.rotation.z = s > 0 ? -Math.PI / 2 : Math.PI / 2; g.add(a); }); g.add(c); return g; };
    // bomba: esfera negra con mecha
    G['💣'] = () => { const g = new T.Group(), b = new T.Mesh(new T.SphereGeometry(.3, 32, 20), mat({ color: 0x1a1a22, roughness: .3, metalness: .4 })), k = new T.Mesh(new T.CylinderGeometry(.08, .09, .08, 20), mat({ color: 0x55565e, metalness: .7 })), m = new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3([new T.Vector3(0, .34, 0), new T.Vector3(.05, .45, 0), new T.Vector3(.12, .5, 0)]), 10, .015, 6), mat({ color: 0xd9b46b }));
      b.position.y = .3; k.position.y = .6; m.position.y = .25; g.add(b, k, m); g.userData.mecha = new T.Vector3(.12, .75, 0); return g; };
    // plátano tirado en el suelo
    G['🍌'] = () => { const cu = new T.CatmullRomCurve3([new T.Vector3(-.26, .1, 0), new T.Vector3(-.12, .04, 0), new T.Vector3(.06, .04, 0), new T.Vector3(.22, .1, .02), new T.Vector3(.27, .14, .02)]), b = new T.Mesh(new T.TubeGeometry(cu, 24, .055, 12), mat({ color: 0xffd400, roughness: .55 })), g = new T.Group();
      [[-.27, .1], [.28, .145]].forEach(([x, y]) => { const t = new T.Mesh(new T.SphereGeometry(.03, 10, 8), mat({ color: 0x4a3418 })); t.position.set(x, y, x > 0 ? .02 : 0); g.add(t); }); g.add(b); g.scale.setScalar(1.6); return g; };
    // muro: barrera de hormigón con franjas rojas y blancas y un filo de neón
    const fr = C.cvTex(512, 128, (q, w, h) => { q.fillStyle = '#d9d6cf'; q.fillRect(0, 0, w, h); for (let i = -1; i < 9; i++) { q.fillStyle = '#d7262b'; q.beginPath(); q.moveTo(i * 64, h); q.lineTo(i * 64 + 32, h); q.lineTo(i * 64 + 64, 0); q.lineTo(i * 64 + 32, 0); q.closePath(); q.fill(); }
      for (let i = 0; i < 2500; i++) { q.fillStyle = `rgba(0,0,0,${Math.random() * .08})`; q.fillRect(Math.random() * w, Math.random() * h, 2, 2); } });
    G.muro = w => { const g = new T.Group(), s = new T.Shape(); s.moveTo(-.32, 0); s.lineTo(.32, 0); s.lineTo(.3, .12); s.lineTo(.12, .3); s.lineTo(.1, .9); s.lineTo(-.1, .9); s.lineTo(-.12, .3); s.lineTo(-.3, .12); s.closePath();
      const geo = new T.ExtrudeGeometry(s, { depth: w, bevelEnabled: true, bevelSize: .02, bevelThickness: .02, bevelSegments: 2, steps: 1 }); geo.translate(0, 0, -w / 2); const t = fr.clone(); t.needsUpdate = true; t.wrapS = T.RepeatWrapping; t.repeat.set(w / 1.6, 1);
      const m = new T.Mesh(geo, mat({ map: t, roughness: .8 })); m.rotation.y = Math.PI / 2; const n = new T.Mesh(new T.BoxGeometry(w, .04, .06), new T.MeshBasicMaterial({ color: 0xff2a6d, toneMapped: false })); n.position.y = .93; g.add(m, n); g.userData.neon = n.material; return g; };
    return G;
  }

  async function crea(C) {
    if (C.opt && C.opt.veh === 'dirty') return creaD(C);   // DIRTY: el todoterreno por el pinar (más abajo)
    await modelos(C.v); if (!C.vivo()) return; C.r3size();   // el renderizador y su entorno de reflejos ya listos
    const g = C.g, R3 = C.R3, sc = new T.Scene(), cam = new T.PerspectiveCamera(58, 16 / 9, .1, 320);
    sc.fog = new T.Fog(0x3a1d52, 50, 165); sc.environment = C.T3.env || null;
    sc.add(new T.HemisphereLight(0xc3b3ff, 0x3a2236, 1.05));
    const sol = new T.DirectionalLight(0xffa36a, 1.7); sol.position.set(-14, 20, -70); sc.add(sol, sol.target);
    const rel = new T.DirectionalLight(0x8fb9ff, .5); rel.position.set(8, 10, 24); sc.add(rel, rel.target);

    /* la calle: asfalto que corre, rayas de neón y bordillos */
    let asf = null; M.ciu.scene.traverse(o => { if (!asf && o.material && /Asphalt/i.test(o.material.name || '') && o.material.map) asf = o.material.map; });
    const tA = asf ? asf.clone() : C.cvTex(512, 512, (q, w, h) => { q.fillStyle = '#2a272f'; q.fillRect(0, 0, w, h); for (let i = 0; i < 9000; i++) { const v = 30 + Math.random() * 40 | 0; q.fillStyle = `rgba(${v},${v},${v + 6},${Math.random() * .5})`; q.fillRect(Math.random() * w, Math.random() * h, 2, 2); } });
    tA.needsUpdate = true; tA.wrapS = tA.wrapT = T.RepeatWrapping; tA.repeat.set(2, LARGO / 4.6); tA.anisotropy = 8;
    const calle = new T.Mesh(new T.PlaneGeometry(ACERA * 2, LARGO), new T.MeshStandardMaterial({ map: tA, color: 0x8d8796, roughness: .7, envMapIntensity: .5 })); calle.rotation.x = -Math.PI / 2; calle.position.set(0, 0, Z0 - LARGO / 2); sc.add(calle);
    const raya = C.cvTex(32, 256, (q, w, h) => { q.clearRect(0, 0, w, h); q.fillStyle = '#fff'; q.fillRect(4, 0, w - 8, h * .55); }); raya.wrapS = raya.wrapT = T.RepeatWrapping; raya.repeat.set(1, LARGO / 7);
    const rayas = [[-.5, 0x3bf3ff], [0, 0xff3bd4], [.5, 0x3bf3ff]].map(([l, c]) => { const m = new T.Mesh(new T.PlaneGeometry(.13, LARGO), new T.MeshBasicMaterial({ map: raya, color: c, transparent: true, depthWrite: false, toneMapped: false, fog: true })); m.rotation.x = -Math.PI / 2; m.position.set(l * ESC, .012, Z0 - LARGO / 2); sc.add(m); return m; });
    [-1, 1].forEach(s => { const m = new T.Mesh(new T.PlaneGeometry(.12, LARGO), new T.MeshBasicMaterial({ color: 0xff2a6d, toneMapped: false })); m.rotation.x = -Math.PI / 2; m.position.set(s * (ESC * 1.18), .013, Z0 - LARGO / 2); sc.add(m); });

    /* lo que se repite (aceras, bolardos, jardineras, farolas de neón y arcos): un grupo que avanza y vuelve atrás un periodo */
    const nodo = n => { const o = M.ciu.scene.getObjectByName(n); return o ? o.clone(true) : null; };
    const rep = (periodo) => { const gr = new T.Group(); gr.userData.periodo = periodo; sc.add(gr); return gr; }, REP = [];
    const ac = rep(3); REP.push(ac);
    { const o = M.ciu.scene.getObjectByName('Sidewalk_Straight_3m'); let me = null; if (o) { o.updateMatrixWorld(true); o.traverse(q => { if (!me && q.isMesh) me = q; }); }
      if (me) { const rel = new T.Matrix4().copy(o.matrixWorld).invert().multiply(me.matrixWorld), P0 = []; for (let z = Z0 + 3; z > Z0 - LARGO; z -= 3) [-1, 1].forEach(s => [1.5, 4.5].forEach(dx => P0.push([s * (ACERA + dx), z])));
        const im = new T.InstancedMesh(me.geometry, me.material, P0.length), m4 = new T.Matrix4(); P0.forEach(([x0, z0], i) => { m4.makeTranslation(x0, .15, z0).multiply(rel); im.setMatrixAt(i, m4); }); im.instanceMatrix.needsUpdate = true; im.frustumCulled = false; ac.add(im); } }
    const pr = rep(24); REP.push(pr); const neonM = [];
    for (let z = Z0 + 24; z > Z0 - LARGO; z -= 24) [-1, 1].forEach(s => {
      [0, 8, 16].forEach(d => { const b = nodo('Prop_Bollard'); if (b) { b.position.set(s * (ACERA + .35), .15, z - d); pr.add(b); } });
      const j = nodo('Prop_Planter_Single'); if (j) { j.position.set(s * (ACERA + 2.6), .15, z - 12); j.scale.setScalar(.7); pr.add(j); }
      // farola de neón: poste y barra que laten con la música
      const po = new T.Mesh(new T.CylinderGeometry(.06, .08, 5.2, 12), new T.MeshStandardMaterial({ color: 0x1b1c24, metalness: .7, roughness: .35 })); po.position.set(s * (ACERA + .9), 2.75, z - 4); pr.add(po);
      const nm = new T.MeshBasicMaterial({ color: s < 0 ? 0x3bf3ff : 0xff3bd4, toneMapped: false }); neonM.push(nm);
      const ba = new T.Mesh(new T.BoxGeometry(1.6, .08, .08), nm); ba.position.set(s * (ACERA + .2), 5.3, z - 4); pr.add(ba);
    });
    const ar = rep(48); REP.push(ar); const arcos = [];
    for (let z = Z0 - 20; z > Z0 - LARGO; z -= 48) { const m = new T.MeshBasicMaterial({ color: 0xff2bd6, toneMapped: false, transparent: true, opacity: .9 }), k = new T.Group();
      [[-ACERA, 3.2, .14, 6.4], [ACERA, 3.2, .14, 6.4]].forEach(([x0, y0, w0, h0]) => { const p = new T.Mesh(new T.BoxGeometry(w0, h0, w0), m); p.position.set(x0, y0, 0); k.add(p); });
      const top = new T.Mesh(new T.BoxGeometry(ACERA * 2 + .14, .14, .14), m); top.position.y = 6.4; k.add(top); k.position.z = z; ar.add(k); arcos.push(m); }

    /* los edificios: tres modelos a cada lado, con callejones; cuando pasan detrás de la cámara vuelven al fondo */
    const TIPOS = ['Building_Large_2', 'Building_Medium_2_001', 'Building_Small_1'].map(n => { const o = M.ciu.scene.getObjectByName(n); if (!o) return null; const b = new T.Box3().setFromObject(o); return { n, o, x0: b.min.x, x1: b.max.x, h: b.max.y }; }).filter(Boolean);
    // ventanas encendidas al atardecer y algunos tonos
    M.ciu.scene.traverse(o => { if (!o.material) return; (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { const n = m.name || '';
      if (/FakeInterior/.test(n) && m.map && !m.userData.luz) { m.userData.luz = 1; m.emissive = new T.Color(0xffffff); m.emissiveMap = m.map; m.emissiveIntensity = /4$/.test(n) ? .25 : 1.25; }
      if (n === 'MI_Trim_Green' && !m.userData.tono) { m.userData.tono = 1; m.color.set(0x7fb08a); }
      if (n === 'MI_Trim_Dark' && !m.userData.tono) { m.userData.tono = 1; m.color.set(0x55505a); }
      if (n === 'MI_RedBrick_Pale' && !m.userData.tono) { m.userData.tono = 1; m.color.set(0xe8d2c4); }
      if (n === 'MI_Glass') { m.envMapIntensity = 1.2; } }); });
    const EDIF = []; let semilla = 7; const az = () => (semilla = (semilla * 16807) % 2147483647) / 2147483647;
    function siguiente(s, zf) { const r0 = az(), t = TIPOS[TIPOS.length < 3 ? Math.floor(r0 * TIPOS.length) : r0 < .2 ? 0 : r0 < .6 ? 1 : 2], o = t.o.clone(true), w = t.x1 - t.x0, hu = .85 + az() * .3;
      o.scale.set(1, hu, 1); o.rotation.y = s < 0 ? Math.PI / 2 : -Math.PI / 2;
      // con el giro, el ancho del edificio queda a lo largo de la calle
      const z = zf - (az() < .3 ? 2 + az() * 3 : .4); o.position.set(s * FACH, 0, s < 0 ? z + t.x0 : z - t.x1); o.userData.zf = z - w; o.userData.s = s; sc.add(o); EDIF.push(o); return o.userData.zf; }
    [-1, 1].forEach(s => { let zf = Z0 + 18; while (zf > Z0 - 175) zf = siguiente(s, zf); });

    /* la corredora */
    const cor = T.SkeletonUtils.clone(M.cor.scene); let cuerpo = null, pelo = null;
    cor.traverse(o => { if (o.isSkinnedMesh) { o.frustumCulled = false; if (/Superhero/i.test(o.name)) cuerpo = o; else if (/Hair/i.test(o.name)) pelo = o; } });
    const raizPelo = cor.getObjectByName('pelo'); if (raizPelo) raizPelo.traverse(o => { if (o.isBone) o.name += '_pelo'; });   // su copia del esqueleto no se anima: el pelo se ata al del cuerpo
    if (cuerpo && pelo) pelo.bind(cuerpo.skeleton, pelo.bindMatrix);
    const runner = new T.Group(); runner.add(cor); runner.rotation.y = Math.PI; sc.add(runner);   // en el modelo mira hacia +Z; aquí, calle adelante
    // ropa de correr del color del jugador (camiseta y mallas) y zapatillas blancas, pintadas sobre el cuerpo según los huesos
    const traje = new T.Color(C.col());
    if (cuerpo) { const geo = cuerpo.geometry, si = geo.attributes.skinIndex, sw = geo.attributes.skinWeight, nb = cuerpo.skeleton.bones.map(b => b.name), n = si.count, aT = new Float32Array(n), aZ = new Float32Array(n);
      const esT = nb.map(x => /^(pelvis|spine_0\d|thigh_|calf_|clavicle_)/.test(x)), esZ = nb.map(x => /^(foot_|ball_)/.test(x));
      const ia = si.array, wa = sw.array, wn = sw.normalized ? (wa instanceof Uint8Array ? 255 : wa instanceof Uint16Array ? 65535 : 1) : 1;
      for (let i = 0; i < n; i++) for (let k = 0; k < 4; k++) { const b = ia[i * 4 + k], w = wa[i * 4 + k] / wn; if (esT[b]) aT[i] += w; if (esZ[b]) aZ[i] += w; }
      geo.setAttribute('aTraje', new T.BufferAttribute(aT, 1)); geo.setAttribute('aZapa', new T.BufferAttribute(aZ, 1));
      const m0 = cuerpo.material, m = m0.clone(); cuerpo.material = m; m.roughness = .62; m.metalness = 0;
      m.onBeforeCompile = sh => { sh.uniforms.uTraje = { value: traje }; sh.uniforms.uZapa = { value: new T.Color(0xf4f4f6) };
        sh.vertexShader = 'attribute float aTraje;\nattribute float aZapa;\nvarying float vTraje;\nvarying float vZapa;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vTraje = aTraje; vZapa = aZapa;');
        sh.fragmentShader = 'uniform vec3 uTraje;\nuniform vec3 uZapa;\nvarying float vTraje;\nvarying float vZapa;\n' + sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n  { float lt = dot(diffuseColor.rgb, vec3(.299, .587, .114)); diffuseColor.rgb = mix(diffuseColor.rgb, uTraje * (.45 + lt * .9), smoothstep(.42, .6, vTraje)); diffuseColor.rgb = mix(diffuseColor.rgb, uZapa * (.55 + lt * .5), smoothstep(.4, .6, vZapa)); }'); };
      m.customProgramCacheKey = () => 'msg-corredora'; }
    // el dorsal, a la espalda (los mismos textos que la matrícula)
    try { const bc = C.bib(), bt = new T.CanvasTexture(bc); bt.encoding = T.sRGBEncoding; bt.anisotropy = 4; cor.updateMatrixWorld(true);
      const sp = cuerpo && cuerpo.skeleton.bones.find(b => b.name === 'spine_03'); if (sp) { const wp = new T.Vector3(); sp.getWorldPosition(wp); cor.worldToLocal(wp); const asp = bc.width / bc.height, hh = .17, bib = new T.Mesh(new T.PlaneGeometry(hh * asp, hh), new T.MeshStandardMaterial({ map: bt, roughness: .75, side: T.DoubleSide }));
        bib.position.set(wp.x, wp.y - .07, -.135); bib.rotation.y = Math.PI; cor.add(bib); sp.attach(bib); } } catch (e) {}
    const sombra = new T.Mesh(new T.CircleGeometry(.42, 32), new T.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .4, depthWrite: false })); sombra.rotation.x = -Math.PI / 2; sombra.position.y = .02; sc.add(sombra);
    // animaciones
    const mix = new T.AnimationMixer(cor), A = {};
    M.an.animations.forEach(c => { A[c.name] = mix.clipAction(c); });
    ['Roll', 'Hit_Chest', 'Jump_Start', 'Jump_Land'].forEach(n => { if (A[n]) { A[n].setLoop(T.LoopOnce, 1); A[n].clampWhenFinished = true; } });
    let ahora = null; const pon = (n, f) => { const a = A[n]; if (!a || a === ahora) return; a.reset(); a.enabled = true; a.setEffectiveWeight(1); a.setEffectiveTimeScale(1); a.play(); if (ahora) ahora.crossFadeTo(a, f === undefined ? .16 : f, false); ahora = a; };
    pon('Idle_Loop', 0);

    /* premios, obstáculos y muros */
    const PZ = piezas(C), vivos = new Map(), brillo = C.cvTex(128, 128, (q, w, h) => { const gr = q.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); q.fillStyle = gr; q.fillRect(0, 0, w, h); });
    const halo = (col, s) => { const sp = new T.Sprite(new T.SpriteMaterial({ map: brillo, color: col, transparent: true, depthWrite: false, blending: T.AdditiveBlending, toneMapped: false })); sp.scale.setScalar(s); return sp; };
    const sombraG = new T.CircleGeometry(.3, 24), sombraM = new T.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .35, depthWrite: false });
    function obj(it) { let o;
      if (it.k === 'wall') { o = PZ.muro(Math.max(.6, it.w * ESC)); }
      else if (it.k === 'orb') { o = new T.Group(); const p = (PZ[it.e] || PZ['🥤'])(); p.scale.setScalar(it.pts >= 150 ? 1.35 : 1.15); o.add(p); o.userData.p = p; o.add(halo(it.pts >= 300 ? 0xffd23f : it.pts >= 150 ? 0xfff0a0 : 0x3bf3ff, 1.5)); }
      else { o = (PZ[it.e] || PZ['💣'])(); if (it.k === 'bomb') { const ch = halo(0xffb03b, .45); ch.position.copy(o.userData.mecha || new T.Vector3(0, .8, 0)); o.add(ch); o.userData.chispa = ch; } }
      const sh = new T.Mesh(sombraG, sombraM); sh.rotation.x = -Math.PI / 2; sh.position.y = .015; sh.scale.setScalar(it.k === 'wall' ? 0 : 1); o.add(sh); sc.add(o); return o; }

    /* el cielo de atardecer se pinta en 2D detrás (con el sol al final de la calle) */
    const estrellas = Array.from({ length: 80 }, () => [Math.random(), Math.random() * .5, Math.random()]);
    function cielo(x, W, H, hy, bass, t) {
      const gg = x.createLinearGradient(0, 0, 0, hy); gg.addColorStop(0, '#0b0420'); gg.addColorStop(.55, '#3a1258'); gg.addColorStop(1, '#ff4f7b'); x.fillStyle = gg; x.fillRect(0, 0, W, Math.max(0, hy) + 2);
      estrellas.forEach(s => { x.fillStyle = `rgba(255,255,255,${.2 + s[2] * .6 * (.6 + .4 * Math.sin(t * 3 + s[0] * 40))})`; x.fillRect(s[0] * W, s[1] * hy, 1.6, 1.6); });
      const r = H * (.16 + bass * .015), cy = hy - r * .2; x.save(); x.beginPath(); x.rect(0, 0, W, hy); x.clip(); const sg = x.createLinearGradient(0, cy - r, 0, cy + r); sg.addColorStop(0, '#ffe36b'); sg.addColorStop(.55, '#ff6a3d'); sg.addColorStop(1, '#ff2a8a'); x.fillStyle = sg; x.beginPath(); x.arc(W / 2, cy, r, 0, 6.283); x.fill();
      x.fillStyle = '#3a1258'; for (let k = 0; k < 7; k++) { const yy = cy + r * (.05 + k * .14), hh = r * (.025 + k * .012) * (1 + bass * .6); x.fillRect(W / 2 - r, yy, r * 2, hh); } x.restore();
      x.fillStyle = '#3a1d52'; x.fillRect(0, hy, W, H - hy); }

    let t0 = performance.now(), dF = 0, rx = 0;
    const V = new T.Vector3();
    function draw() {
      const [W, H] = C.WH(), x = C.ctx(), ahoraT = performance.now(), dt = Math.min(.05, (ahoraT - t0) / 1000); t0 = ahoraT;
      const fase = C.fase(), juega = fase === 'play', au = C.audio(), bass = au.bass || 0, beat = au.beatHit;
      C.dynRes(g, dt); C.T3.last = sc;
      // lo que avanza: la calle y lo que hay en ella
      const v = juega ? .55 * g.speed * FONDO : 0, d = v * dt; dF += d;
      tA.offset.y += d / (LARGO / tA.repeat.y) ; raya.offset.y += d / (LARGO / raya.repeat.y);
      REP.forEach(gr => { gr.position.z = (gr.position.z + d) % gr.userData.periodo; });
      for (let i = EDIF.length - 1; i >= 0; i--) { const o = EDIF[i]; o.position.z += d; o.userData.zf += d; if (o.userData.zf > Z0 + 6) { sc.remove(o); EDIF.splice(i, 1); const s = o.userData.s; let zmin = Infinity; EDIF.forEach(e => { if (e.userData.s === s) zmin = Math.min(zmin, e.userData.zf); }); siguiente(s, zmin); } }
      // neón al ritmo
      const k = .7 + bass * 1.6 + (beat ? .6 : 0); neonM.forEach((m, i) => m.color.setHex(i % 2 ? 0xff3bd4 : 0x3bf3ff).multiplyScalar(k)); arcos.forEach((m, i) => { m.color.setHSL(((g.t || 0) * .05 + i * .13) % 1, 1, .55).multiplyScalar(.8 + bass * 1.5); });
      // la corredora
      const sx = (g.sx || 0) * ESC, sy = (g.jy || 0) * 1.25; rx += (sx - rx) * Math.min(1, dt * 14);
      runner.position.set(rx, sy, 0); const ld = (sx - rx); runner.rotation.z = Math.max(-.25, Math.min(.25, ld * .12)); runner.rotation.y = Math.PI - Math.max(-.35, Math.min(.35, ld * .18));
      sombra.position.x = rx; sombra.scale.setScalar(1 - (g.jy || 0) * .45); sombra.material.opacity = .4 - (g.jy || 0) * .2;
      runner.visible = !(g.inv && Math.floor((g.t || 0) * 12) % 2 && g.inv < 1.3);
      if (fase === 'over') pon('Dance_Loop', .3);
      else if (!juega) pon('Idle_Loop');
      else if (g.jt >= 0) pon('Jump_Loop', .08);
      else if (g.slip > 0) pon('Roll', .08);
      else if (g.inv > 1.15) pon('Hit_Chest', .06);
      else { pon('Sprint_Loop', .14); if (A.Sprint_Loop) A.Sprint_Loop.setEffectiveTimeScale(Math.min(1.55, .9 + (g.speed - 1) * .55)); }
      if (fase !== 'pause') mix.update(dt);
      traje.set(C.col());
      // los objetos
      const vistos = new Set();
      g.items.forEach(it => { if ((it.k === 'orb' && it.done) || ((it.k === 'bomb' || it.k === 'banana') && it.hit)) return; let o = vivos.get(it); if (!o) { o = obj(it); vivos.set(it, o); } vistos.add(it);
        o.position.set(it.lx * ESC, 0, -it.z * FONDO); const lejos = Math.max(0, Math.min(1, (1.25 - it.z) * 3)); o.visible = lejos > .02;
        if (it.k === 'orb') { const p = o.userData.p; p.rotation.y = (g.t || 0) * 2.4 + (it.ph || 0); p.position.y = .55 + (it.high ? 1.3 : 0) + Math.abs(Math.sin((g.t || 0) * 5 + (it.ph || 0))) * .12; o.children[1].position.y = p.position.y + .2; }
        else if (it.k === 'bomb' && o.userData.chispa) { o.userData.chispa.scale.setScalar(.35 + Math.random() * .25); o.rotation.z = Math.sin((g.t || 0) * 9 + (it.ph || 0)) * .08; }
        else if (it.k === 'wall' && o.userData.neon) o.userData.neon.color.setHSL(.93, 1, .5 + bass * .3); });
      vivos.forEach((o, it) => { if (!vistos.has(it)) { sc.remove(o); vivos.delete(it); } });
      // la cámara, detrás y un poco por encima, siguiendo de lejos a la corredora
      const port = W / H < 1.05; cam.fov = port ? 70 : 56; cam.aspect = W / H;
      const bob = juega ? Math.sin(dF * .9) * .04 : 0; cam.position.set(rx * .45, (port ? 3.7 : 3.0) + bob, port ? 7.6 : 6.4); cam.lookAt(rx * .55, port ? 1.15 : 1.05, -16); cam.updateProjectionMatrix();
      // el cielo (en 2D) y la escena
      V.set(0, 1.5, -260).project(cam); const hy = Math.max(H * .12, Math.min(H * .7, (1 - V.y) / 2 * H));
      cielo(x, W, H, hy, bass, g.t || 0);
      const r = C.r3size(); r.render(sc, cam); x.drawImage(C.T3.c, 0, 0, W, H);
      return true; }
    function proj(lx, z) { const [W, H] = C.WH(); V.set(lx * ESC, 1.2, -z * FONDO).project(cam); return [(V.x + 1) / 2 * W, (1 - V.y) / 2 * H, 1]; }
    // al acabar la partida se libera lo que es solo de esta (los modelos cargados se quedan para la siguiente)
    const COMP = new Set(); [M.ciu.scene, M.cor.scene].forEach(r => r.traverse(o => { if (o.geometry) COMP.add(o.geometry); (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach(m => { COMP.add(m); ['map', 'emissiveMap'].forEach(k => m[k] && COMP.add(m[k])); }); }));
    const vigila = setInterval(() => { if (C.vivo()) return; clearInterval(vigila); try { mix.stopAllAction(); sc.traverse(o => { if (o.geometry && !COMP.has(o.geometry)) o.geometry.dispose(); (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach(m => { if (COMP.has(m)) return; ['map', 'emissiveMap'].forEach(k => { if (m[k] && !COMP.has(m[k])) m[k].dispose(); }); m.dispose(); }); }); } catch (e) {} }, 2000);
    R3.draw = draw; R3.proj = proj; R3.sc = sc; R3.ok = true;
  }
  /* =====================================================================================================================
     DIRTY · el todoterreno por un camino de tierra en un pinar al atardecer
     La misma partida de siempre: lx = ±1 son ±6 m del camino y z = 1 son 52 m por delante. El coche es naranja como el de 2D y lleva su matrícula.
     ===================================================================================================================== */
  const ESC_D = 6, FONDO_D = 52, NIEBLA = 0xd08a5c;
  let MD = null, PD = null, ENV_D = null;
  function modelosD(v) {
    if (MD) return Promise.resolve(MD); if (PD) return PD;
    const L = new T.GLTFLoader(), TL = new T.TextureLoader(), c = u => new Promise((ok, ko) => L.load(u + '?v=' + v, ok, undefined, ko)), tx = u => new Promise((ok, ko) => TL.load(u + '?v=' + v, ok, undefined, ko));
    PD = Promise.all([c('packs/racer/coches.glb'), tx('packs/racer/tierra.jpg'), tx('packs/racer/tierra_n.jpg')]).then(([co, ti, tn]) => (MD = { co, ti, tn })).catch(e => { PD = null; throw e; });
    return PD;
  }
  // reflejos de atardecer (cielo cálido y el sol delante), una sola vez
  function entornoD(r) { if (ENV_D) return ENV_D;
    const es = new T.Scene(), geo = new T.SphereGeometry(50, 32, 16), mat = new T.ShaderMaterial({ side: T.BackSide, depthWrite: false,
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
      fragmentShader: 'varying vec3 vP; void main(){ float y = vP.y; vec3 c = mix(vec3(1., .58, .3), vec3(.22, .26, .55), smoothstep(0., .65, y)); c = mix(c, vec3(.16, .11, .07), smoothstep(0., -.3, y)); float s = pow(max(0., dot(vP, normalize(vec3(.25, .12, -1.)))), 24.); c += vec3(4., 2.6, 1.3) * s; gl_FragColor = vec4(c, 1.); }' });
    es.add(new T.Mesh(geo, mat)); const pm = new T.PMREMGenerator(r); ENV_D = pm.fromScene(es, .02).texture; pm.dispose(); geo.dispose(); mat.dispose(); return ENV_D; }
  // junta varias geometrías (ya colocadas) en una sola para pintarlas de una vez
  function junta(gs) { gs = gs.map(g => g.index ? g.toNonIndexed() : g); const out = new T.BufferGeometry();
    ['position', 'normal', 'uv', 'color'].filter(k => gs.every(g => g.attributes[k])).forEach(k => { const n = gs[0].attributes[k].itemSize, a = new Float32Array(gs.reduce((s, g) => s + g.attributes[k].count, 0) * n); let o = 0; gs.forEach(g => { a.set(g.attributes[k].array, o); o += g.attributes[k].count * n; }); out.setAttribute(k, new T.BufferAttribute(a, n)); });
    return out; }
  const tinta = (g, hex, k) => { const c = new T.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { const f = k ? k(i) : 1; a[i * 3] = c.r * f; a[i * 3 + 1] = c.g * f; a[i * 3 + 2] = c.b * f; } g.setAttribute('color', new T.BufferAttribute(a, 3)); return g; };

  /* pino: tronco y copa de capas cónicas con sombreado suave (normales hacia fuera y arriba, sin facetas) */
  function pinoGeo(sem) {
    let s = sem; const r = () => (s = (s * 16807) % 2147483647) / 2147483647, hs = (x, y, z) => { const v = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453; return v - Math.floor(v); };
    const capas = [], n = 6, base = 4.4 + r() * 1.2;
    for (let i = 0; i <= n; i++) { const k = i / n, rad = i === n ? .5 : 2.15 - k * 1.5 + r() * .22, h = i === n ? 1.7 : 2.4 - k * .55, y = base + k * 6.6, c = new T.ConeGeometry(rad, h, 16, 2);
      c.rotateY(r() * 6.283); c.translate(0, y + h / 2, 0); /* 16 lados (sin aristas a la vista) y cada capa girada */ const p = c.attributes.position, nr = c.attributes.normal, col = new Float32Array(p.count * 3);
      for (let j = 0; j < p.count; j++) { const x = p.getX(j), yy = p.getY(j), z = p.getZ(j), d = Math.hypot(x, z), abajo = nr.getY(j) < -.9;
        if (d > .01) { const f = 1 + (hs(Math.round(x * 40), Math.round(yy * 40), Math.round(z * 40)) - .5) * .32, dy = (hs(Math.round(z * 40), Math.round(x * 40), 7) - .5) * .3; p.setXYZ(j, x * f, yy + dy * (d / rad), z * f); }
        const v = abajo ? new T.Vector3(0, -1, 0) : d < .01 ? new T.Vector3(0, 1, 0) : new T.Vector3(x / d, .62, z / d).normalize(); nr.setXYZ(j, v.x, v.y, v.z);
        const t = abajo ? .42 : .5 + .5 * Math.max(0, Math.min(1, (yy - y) / h)); col[j * 3] = col[j * 3 + 1] = col[j * 3 + 2] = t; }
      c.setAttribute('color', new T.BufferAttribute(col, 3)); c.deleteAttribute('uv'); capas.push(c); }
    const tr = new T.CylinderGeometry(.14, .3, base + 7.5, 7, 1, true); tr.translate(0, (base + 7.5) / 2, 0);
    return { copa: junta(capas), tronco: tr };
  }

  /* lo que hay en el camino: premios (⚡ 🏁 🏆 💸), obstáculos (🚧 conos, 🚔 policía) y muros (fardos de paja o vallas de rally) */
  function piezasD(C, PZ, uT) {
    const mat = o => new T.MeshStandardMaterial(Object.assign({ roughness: .5, metalness: 0 }, o)), G = {};
    // rayo
    { const s = new T.Shape(); [[-.05, .5], [.2, .5], [.05, .08], [.22, .08], [-.12, -.5], [-.02, -.06], [-.18, -.06]].forEach(([x, y], i) => i ? s.lineTo(x, y) : s.moveTo(x, y)); s.closePath();
      const geo = new T.ExtrudeGeometry(s, { depth: .09, bevelEnabled: true, bevelSize: .025, bevelThickness: .025, bevelSegments: 3 }); geo.translate(0, 0, -.045);
      const m = mat({ color: 0xffd21f, emissive: 0xff9a00, emissiveIntensity: .55, metalness: .25, roughness: .3 });
      G['⚡'] = () => { const g = new T.Group(), b = new T.Mesh(geo, m); b.scale.setScalar(1.15); b.position.y = .62; g.add(b); return g; }; }
    // bandera de cuadros que ondea
    { const t = C.cvTex(128, 88, (q, w, h) => { for (let i = 0; i < 8; i++) for (let j = 0; j < 6; j++) { q.fillStyle = (i + j) % 2 ? '#121214' : '#f6f6f2'; q.fillRect(i * w / 8, j * h / 6, w / 8 + 1, h / 6 + 1); } });
      const geo = new T.PlaneGeometry(.9, .6, 16, 4); geo.translate(.45, 0, 0);
      const m = mat({ map: t, side: T.DoubleSide, roughness: .85 });
      m.onBeforeCompile = sh => { sh.uniforms.uT = uT; sh.vertexShader = 'uniform float uT;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  { float k = clamp(position.x / .9, 0., 1.); transformed.z += sin(position.x * 7. - uT * 9.) * .1 * k; transformed.y += sin(position.x * 5. - uT * 7.) * .035 * k; }'); };
      m.customProgramCacheKey = () => 'msg-bandera';
      const palo = new T.CylinderGeometry(.025, .03, 1.6, 10), pm = mat({ color: 0x2b2c31, metalness: .7, roughness: .35 }), bola = new T.SphereGeometry(.055, 14, 10), bm = mat({ color: 0xffc83a, metalness: .85, roughness: .25 });
      G['🏁'] = () => { const g = new T.Group(), p = new T.Mesh(palo, pm), f = new T.Mesh(geo, m), b = new T.Mesh(bola, bm); p.position.y = .8; f.position.set(0, 1.28, 0); b.position.y = 1.63; g.add(p, f, b); g.userData.bandera = f; return g; }; }
    // copa (la de RUNNER)
    G['🏆'] = () => { const g = new T.Group(), c = PZ['🏆'](); c.scale.setScalar(1.25); c.position.y = .2; g.add(c); return g; };
    // billetes con alas
    { const t = C.cvTex(256, 128, (q, w, h) => { q.fillStyle = '#2f8a4c'; q.fillRect(0, 0, w, h); q.strokeStyle = '#bfe8b0'; q.lineWidth = 6; q.strokeRect(8, 8, w - 16, h - 16); q.fillStyle = '#3fa65c'; q.beginPath(); q.ellipse(w / 2, h / 2, 38, 38, 0, 0, 6.283); q.fill();
        q.fillStyle = '#e9ffd8'; q.font = '900 60px "Arial Black",sans-serif'; q.textAlign = 'center'; q.textBaseline = 'middle'; q.fillText('€', w / 2, h / 2 + 3); q.font = '900 30px "Arial Black",sans-serif'; q.fillText('500', 44, 34); q.fillText('500', w - 44, h - 30); });
      const nota = new T.BoxGeometry(.66, .014, .32), nm = mat({ map: t, roughness: .7 }), faja = new T.BoxGeometry(.1, .085, .335), fm = mat({ color: 0xf2e6c4, roughness: .6 });
      const ws = new T.Shape(); ws.moveTo(0, 0); ws.bezierCurveTo(.12, .26, .45, .34, .64, .24); ws.bezierCurveTo(.52, .17, .54, .1, .42, .08); ws.bezierCurveTo(.48, .02, .42, -.04, .3, -.02); ws.bezierCurveTo(.28, -.08, .16, -.08, 0, 0);
      const ala = new T.ExtrudeGeometry(ws, { depth: .02, bevelEnabled: true, bevelSize: .01, bevelThickness: .01, bevelSegments: 2 }), am = mat({ color: 0xf8f8f8, emissive: 0xffffff, emissiveIntensity: .12, roughness: .55, side: T.DoubleSide });
      G['💸'] = () => { const g = new T.Group(), fajo = new T.Group(); [[-.16, 0], [.04, .02], [.22, .04]].forEach(([r, y]) => { const n2 = new T.Mesh(nota, nm); n2.rotation.y = r; n2.position.y = y; fajo.add(n2); }); const f2 = new T.Mesh(faja, fm); f2.position.y = .025; fajo.add(f2);
        const alas = [-1, 1].map(sd => { const pv = new T.Group(), a2 = new T.Mesh(ala, am); a2.rotation.x = -Math.PI / 2; a2.scale.set(sd, 1, 1); pv.add(a2); pv.position.set(sd * .2, .05, .05); fajo.add(pv); return pv; });
        fajo.position.y = .5; fajo.rotation.x = .25; g.add(fajo); g.userData.alas = alas; g.userData.fajo = fajo; return g; }; }
    // 🚧 dos conos (Car Kit) con un larguero de rayas
    { const cono = MD.co.scene.getObjectByName('cono'), rt = C.cvTex(256, 32, (q, w, h) => { q.fillStyle = '#f6f6f2'; q.fillRect(0, 0, w, h); q.fillStyle = '#ff7a1a'; for (let i = -1; i < 9; i++) { q.beginPath(); q.moveTo(i * 32, h); q.lineTo(i * 32 + 16, h); q.lineTo(i * 32 + 32, 0); q.lineTo(i * 32 + 16, 0); q.closePath(); q.fill(); } });
      const lg = new T.BoxGeometry(1.5, .13, .06), lm = mat({ map: rt, roughness: .5 }), rp = mat({ color: 0xffffff, emissive: 0xff3b1a, emissiveIntensity: 0, roughness: .4 });
      G['🚧'] = () => { const g = new T.Group(); [-1, 1].forEach(sd => { const c = cono.clone(true); c.scale.setScalar(1.3); c.position.x = sd * .58; g.add(c); }); const l = new T.Mesh(lg, lm); l.position.y = .72; g.add(l);
        const luz = new T.Mesh(new T.SphereGeometry(.06, 12, 8), rp.clone()); luz.position.set(-.58, .86, 0); g.add(luz); g.userData.luz = luz.material; return g; }; }
    // 🚔 coche de policía (Car Kit) que viene de frente con las luces encendidas
    G['🚔'] = () => { const g = new T.Group(), p = MD.co.scene.getObjectByName('policia').clone(true); p.scale.setScalar(.92); g.add(p); g.userData.ruedas = []; p.traverse(o => { if (/^wheel-(front|back)-(left|right)/.test(o.name)) g.userData.ruedas.push(o); }); return g; };
    // muros: fardos de paja (st 0) o vallas de rally de plástico rojas y blancas (st 1); una sola malla por muro
    const paja = C.cvTex(256, 256, (q, w, h) => { q.fillStyle = '#d8b25a'; q.fillRect(0, 0, w, h); for (let i = 0; i < 1600; i++) { const v = Math.random(); q.strokeStyle = v < .33 ? 'rgba(150,105,40,.55)' : v < .66 ? 'rgba(250,225,140,.6)' : 'rgba(190,150,70,.5)'; q.lineWidth = 1 + Math.random() * 1.5; const x0 = Math.random() * w, y0 = Math.random() * h, l = 10 + Math.random() * 30, a = (Math.random() - .5) * .5; q.beginPath(); q.moveTo(x0, y0); q.lineTo(x0 + Math.cos(a) * l, y0 + Math.sin(a) * l); q.stroke(); } });
    paja.wrapS = paja.wrapT = T.RepeatWrapping;
    const pajaM = mat({ map: paja, roughness: .95 }), cuerdaM = mat({ color: 0x5a3b1c, roughness: .9 }), vallaM = mat({ vertexColors: true, roughness: .42, metalness: 0 });
    const cache = {};
    function muro(w, st) { const k = st + '|' + w.toFixed(2); if (!cache[k]) {
        if (!st) { const nb = Math.max(2, Math.round(w / 1.08)), bw = w / nb, bl = [], cu = [];
          const fardo = (x, y) => { const s = new T.Shape(), a = bw - .08, b = .44, rr = .08; s.moveTo(-a / 2 + rr, -b / 2); s.lineTo(a / 2 - rr, -b / 2); s.quadraticCurveTo(a / 2, -b / 2, a / 2, -b / 2 + rr); s.lineTo(a / 2, b / 2 - rr); s.quadraticCurveTo(a / 2, b / 2, a / 2 - rr, b / 2); s.lineTo(-a / 2 + rr, b / 2); s.quadraticCurveTo(-a / 2, b / 2, -a / 2, b / 2 - rr); s.lineTo(-a / 2, -b / 2 + rr); s.quadraticCurveTo(-a / 2, -b / 2, -a / 2 + rr, -b / 2);
            const g = new T.ExtrudeGeometry(s, { depth: .5, bevelEnabled: true, bevelSize: .035, bevelThickness: .035, bevelSegments: 2, curveSegments: 4 }); g.translate(x, y + b / 2 + .035, -.25); const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * .9, uv.getY(i) * .9); bl.push(g);
            [-.26, .26].forEach(dx => { const c = new T.BoxGeometry(.035, b + .085, .585); c.translate(x + dx * a, y + b / 2 + .035, 0); cu.push(c); }); };
          for (let i = 0; i < nb; i++) fardo(-w / 2 + bw * (i + .5), 0); for (let i = 0; i < nb - 1; i++) fardo(-w / 2 + bw * (i + 1), .5);
          cache[k] = [junta(bl), junta(cu)]; }
        else { const ns = Math.max(2, Math.round(w / 1.05)), sw = w / ns, ps = [], sh = new T.Shape(); sh.moveTo(-.27, 0); sh.lineTo(.27, 0); sh.lineTo(.25, .16); sh.lineTo(.13, .25); sh.lineTo(.11, .72); sh.quadraticCurveTo(0, .8, -.11, .72); sh.lineTo(-.13, .25); sh.lineTo(-.25, .16); sh.closePath();
          for (let i = 0; i < ns; i++) { const g = new T.ExtrudeGeometry(sh, { depth: sw - .06, bevelEnabled: true, bevelSize: .025, bevelThickness: .025, bevelSegments: 2 }); g.rotateY(Math.PI / 2); g.translate(-w / 2 + i * sw + .03, 0, 0); ps.push(tinta(g, i % 2 ? 0xeeeeea : 0xc4140f)); }
          const cin = new T.BoxGeometry(w - .04, .06, .3); cin.translate(0, .64, 0); ps.push(tinta(cin, 0xffcc00)); cache[k] = [junta(ps)]; } }
      const g = new T.Group(), gs = cache[k]; if (!st) { g.add(new T.Mesh(gs[0], pajaM), new T.Mesh(gs[1], cuerdaM)); } else g.add(new T.Mesh(gs[0], vallaM)); return g; }
    G.muro = muro; return G;
  }

  async function creaD(C) {
    await modelosD(C.v); if (!C.vivo()) return; const r0 = C.r3size();
    const g = C.g, R3 = C.R3, sc = new T.Scene(), cam = new T.PerspectiveCamera(56, 16 / 9, .1, 400), uT = { value: 0 };
    const brillo = C.cvTex(128, 128, (q, w, h) => { const gr = q.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); q.fillStyle = gr; q.fillRect(0, 0, w, h); });
    const halo = (col, s) => { const sp = new T.Sprite(new T.SpriteMaterial({ map: brillo, color: col, transparent: true, depthWrite: false, blending: T.AdditiveBlending, toneMapped: false })); sp.scale.setScalar(s); return sp; };
    sc.fog = new T.Fog(NIEBLA, 48, 175); sc.environment = entornoD(r0);
    sc.add(new T.HemisphereLight(0xffc89a, 0x2a1c12, .72));
    const sol = new T.DirectionalLight(0xffa860, 1.85); sol.position.set(28, 16, -70); sc.add(sol, sol.target);
    const rel = new T.DirectionalLight(0xffe4c8, .75); rel.position.set(-8, 10, 26); sc.add(rel, rel.target);
    const LARGO_D = 260, Z1 = 16;   // de la cámara (z ≈ 7) hasta la niebla

    /* el suelo: el camino de tierra (con relieve), el borde con hierba y el suelo del pinar; todo corre hacia la cámara */
    const tierra = MD.ti.clone(), relieve = MD.tn.clone(); [tierra, relieve].forEach((t, i) => { t.needsUpdate = true; t.wrapS = t.wrapT = T.RepeatWrapping; t.repeat.set(3.2, LARGO_D / 4.2); t.anisotropy = 8; t.encoding = i ? T.LinearEncoding : T.sRGBEncoding; });
    const ANCHO = ESC_D * 2 + 1.6, camino = new T.Mesh(new T.PlaneGeometry(ANCHO, LARGO_D), new T.MeshStandardMaterial({ map: tierra, normalMap: relieve, normalScale: new T.Vector2(1.1, 1.1), color: 0xffb98a, roughness: .95, envMapIntensity: .35 }));
    camino.rotation.x = -Math.PI / 2; camino.position.set(0, 0, Z1 - LARGO_D / 2); sc.add(camino);
    const suelo = C.cvTex(256, 256, (q, w, h) => { q.fillStyle = '#3d4722'; q.fillRect(0, 0, w, h); const cs = ['rgba(98,84,40,.55)', 'rgba(44,52,22,.55)', 'rgba(128,74,36,.45)', 'rgba(160,146,64,.35)', 'rgba(30,34,16,.45)']; for (let i = 0; i < 3200; i++) { q.fillStyle = cs[i % 5]; const a = Math.random() * 3.1; q.save(); q.translate(Math.random() * w, Math.random() * h); q.rotate(a); q.fillRect(0, 0, 2 + Math.random() * 6, 1 + Math.random() * 1.2); q.restore(); } });
    suelo.wrapS = suelo.wrapT = T.RepeatWrapping; suelo.repeat.set(12, LARGO_D / 6);
    [-1, 1].forEach(sd => { const m = new T.Mesh(new T.PlaneGeometry(90, LARGO_D), new T.MeshStandardMaterial({ map: suelo, color: 0xc9cfa2, roughness: 1, envMapIntensity: .25 })); m.rotation.x = -Math.PI / 2; m.position.set(sd * (ANCHO / 2 - .2 + 45), -.02, Z1 - LARGO_D / 2); sc.add(m); });
    const borde = C.cvTex(128, 512, (q, w, h) => { q.clearRect(0, 0, w, h); const P = Math.PI * 2 / h;
      for (let y = 0; y < h; y += 2) { const e = w * (.42 + .1 * Math.sin(y * P * 5) * Math.sin(y * P * 2 + 1) + .05 * Math.sin(y * P * 13)), gr = q.createLinearGradient(e - 26, 0, e + 8, 0); gr.addColorStop(0, 'rgba(61,71,34,0)'); gr.addColorStop(1, 'rgba(61,71,34,1)'); q.fillStyle = gr; q.fillRect(e - 26, y, w - e + 26, 2); }
      const cs = ['#8c9a3c', '#6c7c2e', '#c0a64c', '#55622a', '#a3b04a']; for (let i = 0; i < 1500; i++) { const y0 = Math.random() * h, x0 = w * (.36 + Math.random() * .64); q.strokeStyle = cs[i % 5]; q.lineWidth = 1 + Math.random(); q.beginPath(); q.moveTo(x0, y0); q.lineTo(x0 + (Math.random() - .5) * 8, y0 - 3 - Math.random() * 9); q.stroke(); } });
    borde.wrapS = borde.wrapT = T.RepeatWrapping; borde.repeat.set(1, LARGO_D / 9);
    [-1, 1].forEach(sd => { const ge = new T.PlaneGeometry(3.2, LARGO_D); if (sd < 0) { const uv = ge.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i)); }
      const m = new T.Mesh(ge, new T.MeshStandardMaterial({ map: borde, color: 0xc9cfa2, roughness: 1, transparent: true, depthWrite: false, envMapIntensity: .25 })); m.rotation.x = -Math.PI / 2; m.position.set(sd * (ANCHO / 2 - .4), .012, Z1 - LARGO_D / 2); m.renderOrder = -1; sc.add(m); });
    const TEX = [[tierra, LARGO_D / tierra.repeat.y], [relieve, LARGO_D / relieve.repeat.y], [suelo, LARGO_D / suelo.repeat.y], [borde, LARGO_D / borde.repeat.y]];

    /* lo que se repite: pinos, matorrales, postes de rally y arcos de control (un grupo que avanza y vuelve atrás un periodo) */
    const REP = [], rep = p => { const gr = new T.Group(); gr.userData.periodo = p; sc.add(gr); REP.push(gr); return gr; };
    let semilla = 11; const az = () => (semilla = (semilla * 16807) % 2147483647) / 2147483647;
    const copias = (p, f) => { for (let z0 = Z1; z0 > -175 - p; z0 -= p) f(z0); };   // lo justo para cubrir de la cámara a la niebla
    // pinos (tres modelos) en filas a los dos lados, cada vez más tupidos hacia dentro del bosque
    const PINOS = [pinoGeo(3), pinoGeo(77), pinoGeo(901)], copaM = new T.MeshStandardMaterial({ color: new T.Color(0x587d3e).convertSRGBToLinear(), vertexColors: true, roughness: .9, envMapIntensity: .3 });
    const corteza = C.cvTex(64, 256, (q, w, h) => { q.fillStyle = '#8a4a2a'; q.fillRect(0, 0, w, h); for (let i = 0; i < 160; i++) { q.fillStyle = Math.random() < .55 ? 'rgba(46,22,12,.5)' : 'rgba(214,128,72,.3)'; q.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, 8 + Math.random() * 46); } });
    corteza.wrapS = corteza.wrapT = T.RepeatWrapping; corteza.repeat.set(2, 3); const troncoM = new T.MeshStandardMaterial({ map: corteza, roughness: .95, envMapIntensity: .3 });
    const pa = rep(64), base = [];
    [-1, 1].forEach(sd => { for (let z = 0; z < 64; z += 5.5 + az() * 3) base.push([sd * (ANCHO / 2 + 1.6 + az() * 3.2), z + az() * 2, az()]); for (let z = 0; z < 64; z += 4 + az() * 3) base.push([sd * (ANCHO / 2 + 5 + az() * 9), z, az()]); for (let z = 0; z < 64; z += 4 + az() * 4) base.push([sd * (ANCHO / 2 + 14 + az() * 30), z, az()]); });
    PINOS.forEach((P, ti) => { const mios = base.filter((b, i) => i % 3 === ti), lista = []; copias(64, z0 => mios.forEach(b => lista.push([b[0], z0 - b[1], b[2]])));
      const ic = new T.InstancedMesh(P.copa, copaM, lista.length), it = new T.InstancedMesh(P.tronco, troncoM, lista.length), m4 = new T.Matrix4(), q4 = new T.Quaternion(), e = new T.Euler(), v3 = new T.Vector3(), s3 = new T.Vector3(), cc = new T.Color();
      lista.forEach(([x0, z0, k], i) => { const es = .78 + k * .5; e.set(0, k * 6.28, 0); q4.setFromEuler(e); m4.compose(v3.set(x0, 0, z0), q4, s3.set(es, es * (.9 + k * .25), es)); ic.setMatrixAt(i, m4); it.setMatrixAt(i, m4); cc.setHSL(.24 + k * .08, .3 + k * .25, .5 + k * .25).convertSRGBToLinear(); ic.setColorAt(i, cc); });
      ic.instanceMatrix.needsUpdate = it.instanceMatrix.needsUpdate = true; ic.frustumCulled = it.frustumCulled = false; pa.add(ic, it); });
    // matorrales junto al camino
    { const ge = new T.IcosahedronGeometry(1, 2), p = ge.attributes.position, nr = ge.attributes.normal; for (let i = 0; i < p.count; i++) { const v = new T.Vector3(p.getX(i), p.getY(i), p.getZ(i)), f = 1 + (Math.sin(v.x * 9.1 + v.y * 7.3) * Math.cos(v.z * 8.7)) * .12; v.multiplyScalar(f); p.setXYZ(i, v.x, v.y, v.z); v.normalize(); nr.setXYZ(i, v.x, v.y * .8 + .25, v.z); }
      const lista = [], bb = []; [-1, 1].forEach(sd => { for (let z = 0; z < 32; z += 1.6 + az() * 2.4) bb.push([sd * (ANCHO / 2 + .4 + az() * 3.5), z, az()]); }); copias(32, z0 => bb.forEach(b => lista.push([b[0], z0 - b[1], b[2]])));
      const pm = rep(32), im = new T.InstancedMesh(ge, new T.MeshStandardMaterial({ color: 0xffffff, roughness: 1, envMapIntensity: .2 }), lista.length), m4 = new T.Matrix4(), q4 = new T.Quaternion(), cc = new T.Color();
      lista.forEach(([x0, z0, k], i) => { const es = .45 + k * .6; m4.compose(new T.Vector3(x0, es * .18, z0), q4, new T.Vector3(es * 1.3, es * .6, es * 1.15)); im.setMatrixAt(i, m4); cc.setHSL(.16 + k * .1, .32 + k * .14, .17 + k * .1).convertSRGBToLinear(); im.setColorAt(i, cc); });
      im.instanceMatrix.needsUpdate = true; im.frustumCulled = false; pm.add(im); }
    // postes de rally (blancos con reflector rojo) cada 12 m
    { const pp = rep(12), ge = junta([tinta(new T.BoxGeometry(.11, .9, .11).translate(0, .45, 0), 0xf4f4f0), tinta(new T.BoxGeometry(.12, .16, .12).translate(0, .76, 0), 0xe0201b)]), lista = [];
      copias(12, z0 => [-1, 1].forEach(sd => lista.push([sd * (ANCHO / 2 + .25), z0])));
      const im = new T.InstancedMesh(ge, new T.MeshStandardMaterial({ vertexColors: true, roughness: .5 }), lista.length), m4 = new T.Matrix4(); lista.forEach(([x0, z0], i) => { m4.makeTranslation(x0, 0, z0); im.setMatrixAt(i, m4); }); im.instanceMatrix.needsUpdate = true; im.frustumCulled = false; pp.add(im); }
    // arcos de control: dos postes, una viga con bombillas que laten con la música y una pancarta de cuadros
    const ar = rep(96), bombillas = [];
    { const pan = C.cvTex(1024, 128, (q, w, h) => { q.fillStyle = '#f07a24'; q.fillRect(0, 0, w, h); for (let i = 0; i < 64; i++) for (let j = 0; j < 2; j++) { q.fillStyle = (i + j) % 2 ? '#111' : '#f6f6f2'; q.fillRect(i * 16, j * 14, 16, 14); q.fillRect(i * 16, h - 28 + j * 14, 16, 14); }
        q.font = '900 64px "Black Ops One","Arial Black",sans-serif'; q.textAlign = 'center'; q.textBaseline = 'middle'; q.lineWidth = 8; q.strokeStyle = '#3a1406'; q.strokeText('BEAT RACER · DIRTY', w / 2, h / 2 + 2); q.fillStyle = '#fff3d6'; q.fillText('BEAT RACER · DIRTY', w / 2, h / 2 + 2); });
      const X = ANCHO / 2 + .9, est = junta([new T.CylinderGeometry(.16, .2, 6.4, 12).translate(-X, 3.2, 0), new T.CylinderGeometry(.16, .2, 6.4, 12).translate(X, 3.2, 0), new T.BoxGeometry(X * 2 + .4, .32, .32).translate(0, 6.3, 0)]);
      const em = new T.MeshStandardMaterial({ color: 0x3a3b40, metalness: .75, roughness: .35 }), pg = new T.PlaneGeometry(X * 1.5, X * 1.5 / 8), pm = new T.MeshStandardMaterial({ map: pan, roughness: .7, side: T.DoubleSide, emissive: 0xffffff, emissiveMap: pan, emissiveIntensity: .25 });
      const bm = new T.MeshBasicMaterial({ color: 0xffc46b, toneMapped: false }), bg = new T.SphereGeometry(.1, 10, 8), N = 22; let n = 0; const zs = []; copias(96, z0 => zs.push(z0 - 40)); const ib = new T.InstancedMesh(bg, bm, zs.length * N), m4 = new T.Matrix4();
      zs.forEach(z0 => { const a = new T.Mesh(est, em), p = new T.Mesh(pg, pm); a.position.z = z0; p.position.set(0, 5.45, z0); ar.add(a, p); for (let i = 0; i < N; i++) { m4.makeTranslation(-X + (i + .5) * X * 2 / N, 6.08, z0 + .2); ib.setMatrixAt(n++, m4); } });
      ib.instanceMatrix.needsUpdate = true; ib.frustumCulled = false; ar.add(ib); bombillas.push(bm); }

    /* el todoterreno: carrocería naranja (la paleta ya viene cambiada), matrícula detrás, luces de freno, ruedas que giran y suspensión */
    const suv = MD.co.scene.getObjectByName('suv').clone(true), coche = new T.Group(), CS = 1.02; suv.rotation.y = Math.PI; suv.scale.setScalar(CS); coche.add(suv); sc.add(coche);
    let pintura = null; suv.traverse(o => { if (o.isMesh) { if (!pintura) { pintura = o.material.clone(); pintura.roughness = .42; pintura.metalness = .12; pintura.envMapIntensity = .9; } o.material = pintura; } });
    let carro = null; const ruedas = []; suv.traverse(o => { if (!carro && /^body(_\d+)?$/.test(o.name)) carro = o; }); ['front-left', 'front-right', 'back-left', 'back-right'].forEach(n => { let w = null; suv.traverse(o => { if (!w && new RegExp('^wheel-' + n + '(_\\d+)?$').test(o.name)) w = o; }); if (w) ruedas.push(w); }); const y0c = carro ? carro.position.y : .2;
    ruedas.forEach(w => { w.rotation.order = 'YXZ'; }); suv.traverse(o => { if (/^wheel-back(_\d+)?$/.test(o.name)) o.visible = false; });   // como el de 2D: la matrícula en el portón
    let zTr = -1.2; if (carro && carro.geometry) { const p = carro.geometry.attributes.position; let m = 0; for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i); if (Math.abs(x) < .3 && y > .35 && y < .62) { m = Math.min(m, z); } } if (m < 0) zTr = m; }
    try { const pc = C.plate(), pt = new T.CanvasTexture(pc); pt.encoding = T.sRGBEncoding; pt.anisotropy = 8; const pw = .52, ph = pw * pc.height / pc.width, pl = new T.Mesh(new T.PlaneGeometry(pw, ph), new T.MeshStandardMaterial({ map: pt, roughness: .6, metalness: .2 }));
      pl.position.set(0, .49, zTr - .012); pl.rotation.y = Math.PI; if (carro) carro.add(pl); } catch (e) {}
    const freno = [-1, 1].map(sd => { const h = halo(0xff2a1a, .55); h.position.set(sd * .55, .42, zTr - .05); if (carro) carro.add(h); return h; });
    const mancha = C.cvTex(128, 128, (q, w, h) => { const gr = q.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2); gr.addColorStop(0, 'rgba(0,0,0,.85)'); gr.addColorStop(.6, 'rgba(0,0,0,.45)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); q.fillStyle = gr; q.fillRect(0, 0, w, h); });
    const sombraM = new T.MeshBasicMaterial({ map: mancha, transparent: true, depthWrite: false, opacity: .8 }), sombraC = sombraM.clone(), sombra = new T.Mesh(new T.PlaneGeometry(1, 1), sombraC); sombra.rotation.x = -Math.PI / 2; sombra.scale.set(2.1, 3.5, 1); sombra.position.y = .02; sc.add(sombra);
    const PD_ = piezasD(C, piezas(Object.assign({}, C, { T3: { env: ENV_D } })), uT), vivos = new Map(), sombraI = new T.PlaneGeometry(1, 1);

    /* brillos (halos) y polvo */
    const humo = C.cvTex(64, 64, (q, w, h) => { const gr = q.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.5, 'rgba(255,255,255,.42)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); q.fillStyle = gr; q.fillRect(0, 0, w, h); });
    const NP = 260, pP = new Float32Array(NP * 3), pS = new Float32Array(NP), pA = new Float32Array(NP), pC = new Float32Array(NP), pg = new T.BufferGeometry();
    pg.setAttribute('position', new T.BufferAttribute(pP, 3)); pg.setAttribute('aS', new T.BufferAttribute(pS, 1)); pg.setAttribute('aA', new T.BufferAttribute(pA, 1)); pg.setAttribute('aC', new T.BufferAttribute(pC, 1));
    const pmat = new T.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uMap: { value: humo }, uEsc: { value: 500 } },
      vertexShader: 'attribute float aS; attribute float aA; attribute float aC; varying float vA; varying float vC; uniform float uEsc; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = min(512., aS * uEsc / max(.2, -mv.z)); vA = aA; vC = aC; }',
      fragmentShader: 'uniform sampler2D uMap; varying float vA; varying float vC; void main(){ float a = texture2D(uMap, gl_PointCoord).a * vA; if (a < .004) discard; gl_FragColor = vec4(mix(vec3(.66, .52, .38), vec3(.95, .8, .62), vC), a); }' });
    const polvo = new T.Points(pg, pmat); polvo.frustumCulled = false; polvo.renderOrder = 5; sc.add(polvo); const PT = [];
    const suelta = o => { if (PT.length < NP) PT.push(Object.assign({ t: 0, vx: 0, vy: 0, vz: 0, ds: 0, c: 0, mundo: false }, o)); };

    function obj(it) { let o;
      if (it.k === 'wall') { if (it.st === undefined) it.st = Math.random() < .5 ? 0 : 1; o = PD_.muro(Math.max(.8, (it.w - .08) * ESC_D), it.st); }
      else if (it.k === 'orb') { o = new T.Group(); const p = (PD_[it.e] || PD_['⚡'])(); o.add(p); o.userData.p = p; const hc = { '⚡': 0xffd84a, '🏁': 0xfff6e0, '🏆': 0xffd23f, '💸': 0x8dff7a }[it.e] || 0xffd84a; o.add(halo(hc, it.pts >= 150 ? 2.1 : 1.7)); }
      else if (it.alt === 'cop') { o = PD_['🚔'](); [-1, 1].forEach((sd, i) => { const h = halo(i ? 0x2a6bff : 0xff2a2a, 1.1); h.position.set(sd * .24, 1.38, -.1); o.add(h); (o.userData.luces = o.userData.luces || []).push(h); }); }
      else { o = PD_['🚧'](); }
      const sh = new T.Mesh(sombraI, sombraM); sh.rotation.x = -Math.PI / 2; sh.position.y = .018; if (it.k === 'wall') sh.scale.set((it.w - .08) * ESC_D + .6, 1.3, 1); else if (it.alt === 'cop') sh.scale.set(1.9, 3.2, 1); else if (it.k === 'orb') sh.scale.set(.9, .9, 1); else sh.scale.set(1.9, .8, 1); o.add(sh); sc.add(o); return o; }

    /* el cielo (en 2D, detrás): atardecer con el sol al fondo del camino, rayos de luz y el pinar lejano */
    const nubes = Array.from({ length: 7 }, (_, i) => [((i * 0.37) % 1), .12 + ((i * .23) % .4), .12 + ((i * .17) % .1), (i * .29) % 1]);
    const lejos = (() => { let s = 5; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; return Array.from({ length: 2 }, () => Array.from({ length: 90 }, () => [r(), r()])); })();
    function cielo(x, W, H, hy, bass, t, sx) {
      const gg = x.createLinearGradient(0, 0, 0, hy); gg.addColorStop(0, '#1d2a66'); gg.addColorStop(.32, '#5b4693'); gg.addColorStop(.6, '#d75f7f'); gg.addColorStop(.84, '#ff9a55'); gg.addColorStop(1, '#ffc982'); x.fillStyle = gg; x.fillRect(0, 0, W, Math.max(0, hy) + 2);
      x.save(); nubes.forEach(([u, v, h, k]) => { const cx = ((u + t * .004 * (1 + k)) % 1.2 - .1) * W, cy = v * hy, rw = W * (.16 + k * .14), rh = hy * h * .35, gr = x.createRadialGradient(cx, cy, 0, cx, cy, rw); gr.addColorStop(0, `rgba(255,${150 + k * 60 | 0},${140 + k * 30 | 0},.42)`); gr.addColorStop(1, 'rgba(255,160,150,0)'); x.fillStyle = gr; x.beginPath(); x.ellipse(cx, cy, rw, rh, 0, 0, 6.283); x.fill(); }); x.restore();
      // sol y rayos
      const r = H * (.075 + bass * .01), cx = sx, cy = hy - r * .9; x.save(); x.globalCompositeOperation = 'lighter';
      const gl = x.createRadialGradient(cx, cy, 0, cx, cy, H * .7); gl.addColorStop(0, `rgba(255,214,140,${.55 + bass * .25})`); gl.addColorStop(.25, 'rgba(255,160,90,.22)'); gl.addColorStop(1, 'rgba(255,120,80,0)'); x.fillStyle = gl; x.fillRect(0, 0, W, hy + 2);
      for (let i = 0; i < 9; i++) { const a = -Math.PI / 2 + (i - 4) * .3 + Math.sin(t * .2 + i) * .03, l = H * 1.2, an = .045 + (i % 3) * .015; x.fillStyle = `rgba(255,205,140,${.05 + bass * .05})`; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a - an) * l, cy + Math.sin(a - an) * l); x.lineTo(cx + Math.cos(a + an) * l, cy + Math.sin(a + an) * l); x.closePath(); x.fill(); }
      const sg = x.createRadialGradient(cx, cy, 0, cx, cy, r); sg.addColorStop(0, '#fffbe8'); sg.addColorStop(.6, '#ffe7a8'); sg.addColorStop(1, 'rgba(255,200,120,0)'); x.fillStyle = sg; x.beginPath(); x.arc(cx, cy, r, 0, 6.283); x.fill(); x.restore();
      // pinar lejano: puntas de pino, más altas hacia los lados (el bosque sigue al camino)
      [['#7a5a5c', .55], ['#4f3a46', 1]].forEach(([c, k], li) => { x.fillStyle = c; x.beginPath(); x.moveTo(0, hy + 2); lejos[li].forEach(([u, v], i) => { const X = i / 89 * W, d = Math.abs(X - sx) / W, hh = H * (.012 + d * d * .5 * k + v * .02) * (li ? 1 : .8); x.lineTo(X - W / 180, hy - hh * .55); x.lineTo(X, hy - hh); x.lineTo(X + W / 180, hy - hh * .55); }); x.lineTo(W, hy + 2); x.closePath(); x.fill(); });
      const hz = x.createLinearGradient(0, hy - H * .06, 0, hy + 2); hz.addColorStop(0, 'rgba(208,138,92,0)'); hz.addColorStop(1, 'rgba(208,138,92,1)'); x.fillStyle = hz; x.fillRect(0, hy - H * .06, W, H * .06 + 2);
      x.fillStyle = '#d08a5c'; x.fillRect(0, hy, W, H - hy); }

    let t0 = performance.now(), dF = 0, rx = 0, giro = 0, ruedaA = 0, inv0 = 0, land0 = 0, aire = false;
    const V = new T.Vector3(), V2 = new T.Vector2(), tinte = new T.Color(), BARRO = new T.Color(.82, .66, .48);
    function draw() {
      const [W, H] = C.WH(), x = C.ctx(), ahora = performance.now(), dt = Math.min(.05, (ahora - t0) / 1000); t0 = ahora;
      const fase = C.fase(), juega = fase === 'play', au = C.audio(), bass = au.bass || 0, beat = au.beatHit, gt = g.t || 0;
      C.dynRes(g, dt); C.T3.last = sc; uT.value += dt;
      const v = juega ? .55 * g.speed * FONDO_D : 0, d = v * dt; dF += d;
      TEX.forEach(([t, per]) => { t.offset.y += d / per; });
      REP.forEach(gr => { gr.position.z = (gr.position.z + d) % gr.userData.periodo; });
      const kb = .75 + bass * 1.7 + (beat ? .7 : 0); bombillas.forEach(m => m.color.setHex(0xffc46b).multiplyScalar(kb));
      // el coche
      const sx = (g.sx || 0) * ESC_D, sy = (g.jy || 0) * 1.25, ld = sx - rx; rx += ld * Math.min(1, dt * 12);
      const vib = juega && !(g.jy > .02) ? (Math.sin(gt * 37) * .012 + Math.sin(gt * 23.3) * .009) * Math.min(1.5, g.speed) : fase === 'count' ? Math.sin(gt * 50) * .004 : 0;
      if (g.land > land0 + .5 && juega) for (let k = 0; k < 18; k++) suelta({ x: rx + (Math.random() - .5) * 2.2, y: .15, z: (Math.random() - .3) * 2.6, vx: (Math.random() - .5) * 5, vy: Math.random() * 1.6, vz: 1 + Math.random() * 3, s: .7, ds: 2.2, a: .55, l: .9 + Math.random() * .4, c: Math.random() });
      land0 = g.land || 0;
      if (g.inv > inv0 + .5) for (let k = 0; k < 14; k++) suelta({ x: rx + (Math.random() - .5) * 2, y: .4 + Math.random() * .6, z: -1.4 + Math.random(), vx: (Math.random() - .5) * 6, vy: Math.random() * 3, vz: 2 + Math.random() * 3, s: .6, ds: 2.6, a: .6, l: .8, c: .2 });
      inv0 = g.inv || 0;
      let ry, rz, rxp = 0;
      if (fase === 'over') { giro += dt * 3.2; ry = Math.PI * 0 + giro; rz = 0; if (Math.random() < .5) suelta({ x: rx + (Math.random() - .5) * 2, y: .15, z: (Math.random() - .5) * 2, vx: (Math.random() - .5) * 3, vy: Math.random(), vz: (Math.random() - .5) * 3, s: .8, ds: 1.8, a: .45, l: 1.1, c: Math.random() }); }
      else { giro = 0; ry = -Math.max(-.32, Math.min(.32, ld * .09)); rz = Math.max(-.12, Math.min(.12, ld * .03));
        if (g.jt >= 0) { const k = Math.min(1, g.jt / .78); rxp = (.5 - k) * .22; }
        if (g.inv > 1.15) { rz += Math.sin(gt * 40) * .05 * (g.inv - 1.15) * 4; ry += Math.sin(gt * 31) * .04; } }
      coche.position.set(rx, sy, 0); coche.rotation.set(rxp, ry, rz); if (carro) carro.position.y = y0c - (g.land || 0) * .07 + vib;
      coche.visible = !(g.inv && Math.floor(gt * 12) % 2 && g.inv < 1.3);
      const wr = .3 * CS; ruedaA += (juega ? v : 0) / wr * dt; ruedas.forEach((w, i) => { w.rotation.x = ruedaA; w.rotation.y = i < 2 ? Math.max(-.35, Math.min(.35, -ld * .12)) : 0; });
      const fr = (g.inv > 1 || g.slip > 0) ? 1 : .25; freno.forEach(h => { h.material.opacity = fr; h.scale.setScalar(fr > .5 ? .9 : .45); });
      tinte.setRGB(1, 1, 1).lerp(BARRO, Math.min(1, g.dirt || 0) * .55); if (pintura) pintura.color.copy(tinte);
      sombra.position.x = rx; sombra.scale.set(2.1 * (1 - (g.jy || 0) * .3), 3.5 * (1 - (g.jy || 0) * .3), 1); sombraC.opacity = .8 - (g.jy || 0) * .45;
      // polvo de las ruedas y nubes de polvo en los bordes del camino
      if (juega && !(g.jy > .05)) { const n = Math.random() < .9 ? 2 : 1; for (let k = 0; k < n; k++) { const sd = Math.random() < .5 ? -1 : 1; suelta({ x: rx + sd * .62 * CS + (Math.random() - .5) * .3, y: .18, z: 1.0 + Math.random() * .3, vx: sd * (.4 + Math.random() * 1.2), vy: .6 + Math.random() * 1.4, vz: 2 + Math.random() * 3.5 * Math.min(1.6, g.speed), s: .45, ds: 1.6 + (g.dirt || 0) * .8, a: .3 + (g.dirt || 0) * .15, l: .7 + Math.random() * .4, c: Math.random() }); } }
      if (juega && PT.filter(p => p.mundo).length < 10 && Math.random() < .08) { const sd = Math.random() < .5 ? -1 : 1; suelta({ x: sd * (ANCHO / 2 + Math.random() * 2.5), y: .8, z: -70 - Math.random() * 40, s: 4 + Math.random() * 3, a: .22, l: 9, c: .7 + Math.random() * .3, mundo: true }); }
      for (let i = PT.length - 1; i >= 0; i--) { const p = PT[i]; p.t += dt; if (p.t > p.l || p.z > 12) { PT.splice(i, 1); continue; } if (p.mundo) p.z += d; else { p.x += p.vx * dt; p.y = Math.max(.1, p.y + p.vy * dt); p.z += p.vz * dt; p.vy -= .6 * dt; p.vx *= .97; } p.s += p.ds * dt; }
      PT.forEach((p, i) => { pP[i * 3] = p.x; pP[i * 3 + 1] = p.y; pP[i * 3 + 2] = p.z; pS[i] = p.s; const fi = Math.min(1, p.t * 6), fo = 1 - p.t / p.l; pA[i] = p.a * fi * fo * (p.mundo ? Math.min(1, (p.z + 110) / 40) : 1); pC[i] = p.c; });
      pg.setDrawRange(0, PT.length); ['position', 'aS', 'aA', 'aC'].forEach(k => { pg.attributes[k].needsUpdate = true; });
      // los objetos
      const vistos = new Set();
      g.items.forEach(it => { if ((it.k === 'orb' && it.done) || ((it.k === 'bomb' || it.k === 'banana') && it.hit)) return; let o = vivos.get(it); if (!o) { o = obj(it); vivos.set(it, o); } vistos.add(it);
        o.position.set(it.lx * ESC_D, 0, -it.z * FONDO_D); o.visible = (1.32 - it.z) > .01;
        if (it.k === 'orb') { const p = o.userData.p, ph = it.ph || 0, y = .25 + (it.high ? 1.75 : 0) + Math.abs(Math.sin(gt * 4 + ph)) * .12; p.position.y = y; o.children[1].position.y = y + .75;
          if (it.e === '🏁') p.rotation.y = .55 + Math.sin(gt * 1.3 + ph) * .25; else p.rotation.y = gt * 2.2 + ph;
          if (p.userData.alas) { const fl = Math.sin(gt * 14 + ph) * .55; p.userData.alas[0].rotation.z = -fl; p.userData.alas[1].rotation.z = fl; } }
        else if (it.alt === 'cop') { const on = Math.floor(gt * 7) % 2; o.userData.luces.forEach((h, i) => { const k = (i === on) ? 1 : .15; h.material.opacity = k; h.scale.setScalar(.6 + k * .9); }); o.userData.ruedas.forEach(w => { w.rotation.x += dt * 14; }); o.rotation.y = Math.sin(gt * 2.2 + (it.ph || 0)) * .12; }
        else if (it.k === 'bomb' && o.userData.luz) o.userData.luz.emissiveIntensity = Math.floor(gt * 3 + (it.ph || 0)) % 2 ? 2.5 : .2; });
      vivos.forEach((o, it) => { if (!vistos.has(it)) { sc.remove(o); vivos.delete(it); } });
      // la cámara: detrás y algo por encima, siguiendo al coche (en vertical lo sigue más para que no se salga)
      const port = W / H < 1.05, f = port ? .8 : .52; cam.fov = port ? 66 : 54; cam.aspect = W / H;
      const bob = juega ? Math.sin(dF * .55) * .03 + vib * .6 : 0; cam.position.set(rx * f, (port ? 3.4 : 2.8) + bob + sy * .25, port ? 8.8 : 7.0); cam.lookAt(rx * (f + .06), (port ? 1.05 : .95) + sy * .3, -24); cam.updateProjectionMatrix();
      // el cielo (2D) y la escena
      V.set(0, 2, -380).project(cam); const hy = Math.max(H * .12, Math.min(H * .75, (1 - V.y) / 2 * H)), sxS = (V.x + 1) / 2 * W + W * .06;
      cielo(x, W, H, hy, bass, gt, sxS);
      const r = C.r3size(); r.getDrawingBufferSize(V2); pmat.uniforms.uEsc.value = V2.y / 2 / Math.tan(cam.fov * Math.PI / 360);
      r.render(sc, cam); x.drawImage(C.T3.c, 0, 0, W, H);
      return true; }
    function proj(lx, z) { const [W, H] = C.WH(); V.set(lx * ESC_D, 1.1, -z * FONDO_D).project(cam); return [(V.x + 1) / 2 * W, (1 - V.y) / 2 * H, 1]; }
    // al acabar la partida se libera lo que es solo de esta (los modelos y texturas cargados se quedan para la siguiente)
    const COMP = new Set([MD.ti, MD.tn, ENV_D]); MD.co.scene.traverse(o => { if (o.geometry) COMP.add(o.geometry); (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach(m => { COMP.add(m); ['map', 'emissiveMap', 'normalMap'].forEach(k => m[k] && COMP.add(m[k])); }); });
    const vigila = setInterval(() => { if (C.vivo()) return; clearInterval(vigila); try { sc.traverse(o => { if (o.geometry && !COMP.has(o.geometry)) o.geometry.dispose(); (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach(m => { if (COMP.has(m)) return; ['map', 'emissiveMap', 'normalMap'].forEach(k => { if (m[k] && !COMP.has(m[k])) m[k].dispose(); }); m.dispose(); }); }); [tierra, relieve].forEach(t => t.dispose()); } catch (e) {} }, 2000);
    R3.draw = draw; R3.proj = proj; R3.sc = sc; R3.ok = true;
  }
  window.MSG_RACER3D = { crea, modelos };
})();
