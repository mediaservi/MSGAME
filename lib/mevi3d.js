/* MSGAME · Mevi en 3D construida pieza a pieza (sin esqueleto automático) · mediaservi.com · GPL-3.0
   Cada parte es una malla propia colgada de su articulación (cadera, cintura, cuello, hombro, codo, muñeca,
   rodilla): gira sin deformarse, como un muñeco de vinilo. Las proporciones salen de su imagen de referencia.
   Unidades: la altura total es 1 y los pies están en y = 0; mira hacia +z.
   const m = MEVI3D.crea({ escala: 1 }); escena.add(m.raiz); m.toca('saluda'); y en cada fotograma m.avanza(dt). */
(function () {
  'use strict';
  const T = THREE;
  const COL = { pelo: 0x151a3c, piel: 0xf3d6c4, lila: 0x9a1cb3, lima: 0xc4f23c, plata: 0xc9cad2, negro: 0x151833, boca: 0x1b1430 };

  function mat(c, o) { const m = new T.MeshStandardMaterial(Object.assign({ roughness: 0.48, metalness: 0 }, o || {})); m.color.setHex(c).convertSRGBToLinear(); return m; }

  // ---------- piezas ----------
  function capsula(r, l, m) { const g = new T.CapsuleGeometry(r, l, 8, 20); const me = new T.Mesh(g, m); return me; }
  function torno(perfil, m, seg) { return new T.Mesh(new T.LatheGeometry(perfil.map(p => new T.Vector2(p[0], p[1])), seg || 48), m); }
  // quita triángulos de una geometría según su centro
  function recorta(g, fuera) {
    g = g.index ? g.toNonIndexed() : g;
    const p = g.attributes.position, uv = g.attributes.uv, n = g.attributes.normal;
    const P = [], U = [], N = [];
    for (let i = 0; i < p.count; i += 3) {
      const cx = (p.getX(i) + p.getX(i + 1) + p.getX(i + 2)) / 3, cy = (p.getY(i) + p.getY(i + 1) + p.getY(i + 2)) / 3, cz = (p.getZ(i) + p.getZ(i + 1) + p.getZ(i + 2)) / 3;
      if (fuera(cx, cy, cz)) continue;
      for (let k = 0; k < 3; k++) { P.push(p.getX(i + k), p.getY(i + k), p.getZ(i + k)); if (n) N.push(n.getX(i + k), n.getY(i + k), n.getZ(i + k)); if (uv) U.push(uv.getX(i + k), uv.getY(i + k)); }
    }
    const o = new T.BufferGeometry();
    o.setAttribute('position', new T.Float32BufferAttribute(P, 3));
    if (N.length) o.setAttribute('normal', new T.Float32BufferAttribute(N, 3));
    if (U.length) o.setAttribute('uv', new T.Float32BufferAttribute(U, 2));
    return o;
  }
  function estrella(R, r, puntas) {
    const s = new T.Shape();
    for (let i = 0; i <= puntas * 2; i++) {
      const a = Math.PI / 2 + i * Math.PI / puntas, rr = i % 2 ? r : R;
      const x = Math.cos(a) * rr, y = Math.sin(a) * rr;
      i ? s.lineTo(x, y) : s.moveTo(x, y);
    }
    return s;
  }
  // pega una forma plana sobre el elipsoide de la cara (sigue su curva)
  function calca(geo, E, x0, y0, sep) {
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = x0 + p.getX(i), y = y0 + p.getY(i);
      const u = (x - E.cx) / E.rx, v = (y - E.cy) / E.ry;
      const z = E.cz + E.rz * Math.sqrt(Math.max(0, 1 - u * u - v * v)) + (sep || 0.002);
      p.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
    return geo;
  }
  function textura(w, h, pinta) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    pinta(c.getContext('2d'), w, h);
    const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; t.anisotropy = 4; return t;
  }

  function construye() {
    const M = {
      pelo: mat(COL.pelo, { roughness: 0.4, side: T.DoubleSide }),
      piel: mat(COL.piel, { roughness: 0.55 }),
      lila: mat(COL.lila, { roughness: 0.62 }),
      lima: mat(COL.lima, { roughness: 0.42 }),
      plata: mat(COL.plata, { roughness: 0.22, metalness: 0.75 }),
      negro: mat(COL.negro, { roughness: 0.35, side: T.DoubleSide }),
      boca: mat(COL.boca, { roughness: 0.6, side: T.DoubleSide })
    };
    const J = {};
    const raiz = new T.Group(); raiz.name = 'mevi';
    const caderas = new T.Group(); caderas.position.y = 0.285; raiz.add(caderas); J.caderas = caderas;
    const cintura = new T.Group(); caderas.add(cintura); J.cintura = cintura;

    // --- tronco (sección elíptica: más ancho que hondo) y pantalón ---
    const tronco = torno([[0.0, -0.06], [0.08, -0.058], [0.13, -0.045], [0.148, -0.02], [0.15, 0.03], [0.146, 0.085], [0.145, 0.13], [0.152, 0.19], [0.15, 0.235], [0.136, 0.268], [0.1, 0.292], [0.055, 0.303], [0.0, 0.305]], M.lila);
    tronco.scale.z = 0.78; cintura.add(tronco);
    // cinturón y hebilla con la M
    const cin = torno([[0.148, 0.07], [0.155, 0.074], [0.156, 0.1], [0.155, 0.126], [0.148, 0.13]], M.plata);
    cin.scale.z = 0.8; cintura.add(cin);
    const texM = textura(128, 96, (x, w, h) => {
      x.fillStyle = '#c4c6ce'; x.fillRect(0, 0, w, h);
      x.strokeStyle = '#8e9099'; x.lineWidth = 8; x.strokeRect(4, 4, w - 8, h - 8);
      x.fillStyle = '#1a1c2a'; x.font = '900 70px Arial Black, Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('M', w / 2, h / 2 + 4);
    });
    const heb = new T.Mesh(new T.BoxGeometry(0.08, 0.06, 0.014), [M.plata, M.plata, M.plata, M.plata, new T.MeshStandardMaterial({ map: texM, roughness: 0.3, metalness: 0.5 }), M.plata]);
    heb.position.set(0, 0.1, 0.156 * 0.8 + 0.004); cintura.add(heb);

    // --- cuello y cabeza ---
    const cuello = new T.Group(); cuello.position.y = 0.295; cintura.add(cuello); J.cuello = cuello;
    const cuelloM = new T.Mesh(new T.CylinderGeometry(0.043, 0.048, 0.05, 20), M.piel); cuelloM.position.y = 0.012; cuello.add(cuelloM);
    const cabeza = new T.Group(); cabeza.position.y = 0.205; cuello.add(cabeza); J.cabeza = cabeza;
    // cara: elipsoide
    const E = { cx: 0, cy: -0.035, cz: 0.07, rx: 0.15, ry: 0.162, rz: 0.165 };
    const cara = new T.Mesh(new T.SphereGeometry(1, 48, 36), M.piel);
    cara.scale.set(E.rx, E.ry, E.rz); cara.position.set(E.cx, E.cy, E.cz); cabeza.add(cara);
    // orejas
    [-1, 1].forEach(s => { const o = new T.Mesh(new T.SphereGeometry(1, 16, 12), M.piel); o.scale.set(0.024, 0.04, 0.03); o.position.set(s * 0.218, -0.035, 0.02); cabeza.add(o); });
    // melena: casquete por torno, abierta por delante en la ventana de la cara
    const R = 0.224, alto = 0.21, bajo = -0.2;
    const perfil = [];
    for (let i = 0; i <= 40; i++) { const a = Math.PI / 2 - i / 40 * Math.PI / 2; perfil.push([Math.max(0.001, R * Math.cos(a)), 0.0 + alto * Math.sin(a)]); }
    for (let i = 1; i <= 16; i++) perfil.push([R * (1 - 0.012 * i / 16), -0.17 * i / 16]); perfil.push([R * 0.975, bajo + 0.012], [R * 0.95, bajo + 0.002], [R * 0.9, bajo], [R * 0.86, bajo + 0.014]);
    let gp = new T.LatheGeometry(perfil.map(p => new T.Vector2(p[0], p[1])), 180);
    // Ventana de la cara: se recorta en el sombreado, píxel a píxel, para que el borde del flequillo quede limpio.
    // Flequillo recto con una muesca en el centro; en las esquinas la cara sube un poco (como en el dibujo).
    M.pelo.onBeforeCompile = sh => {
      sh.vertexShader = 'varying vec3 vPL;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvPL = position;');
      sh.fragmentShader = 'varying vec3 vPL;\n' + sh.fragmentShader.replace('void main() {', `void main() {
        float ax = abs(vPL.x);
        float fl = 0.074 + max(0.0, ax - 0.098) * 1.3 + 0.016 * max(0.0, 1.0 - ax / 0.02);
        if (vPL.z > 0.0 && ax < 0.137 && vPL.y < fl) discard;`);
    };
    M.pelo.customProgramCacheKey = () => 'mevi-pelo';
    gp.computeVertexNormals();
    const pelo = new T.Mesh(gp, M.pelo); cabeza.add(pelo);
    // brillo de la melena
    // ojos de estrella, boca y mofletes pegados a la cara
    // ojos de estrella, boca y mofletes: dibujos sobre láminas finas que siguen la curva de la cara
    const lamina = (tex, w, h, x0, y0, sep, opaca) => {
      const g = calca(new T.PlaneGeometry(w, h, 14, 14), E, x0, y0, sep);
      g.translate(-x0, -y0, 0);
      const m = new T.Mesh(g, opaca
        ? (() => { const mm = new T.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: 0.5, roughness: 0.35 }); return mm; })()
        : new T.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
      m.position.set(x0, y0, 0); cabeza.add(m); return m;
    };
    const texEstrella = textura(128, 128, (x, w) => {
      x.translate(w / 2, w / 2); x.fillStyle = '#151833'; x.lineJoin = 'round'; x.strokeStyle = '#151833'; x.lineWidth = 10;
      x.beginPath(); for (let i = 0; i <= 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 22 : 54; x.lineTo(Math.cos(a) * rr, Math.sin(a) * rr + 4); } x.closePath(); x.fill(); x.stroke();
    });
    const ojos = [-1, 1].map(s => lamina(texEstrella, 0.1, 0.1, s * 0.068, 0.005, 0.004, true));
    const texBoca = textura(128, 96, (x, w, h) => {
      x.fillStyle = '#1b1430'; x.beginPath(); x.moveTo(14, 18); x.lineTo(w - 14, 18);
      x.bezierCurveTo(w - 10, 70, w * 0.66, h - 6, w / 2, h - 6); x.bezierCurveTo(w * 0.34, h - 6, 10, 70, 14, 18); x.closePath(); x.fill();
      x.fillStyle = '#e8828f'; x.beginPath(); x.ellipse(w / 2, h - 22, 22, 11, 0, Math.PI, 0, true); x.fill();
    });
    lamina(texBoca, 0.095, 0.07, 0, -0.098, 0.004, true);
    const texRubor = textura(64, 64, (x, w) => { const g = x.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); g.addColorStop(0, 'rgba(255,120,120,0.55)'); g.addColorStop(1, 'rgba(255,120,120,0)'); x.fillStyle = g; x.fillRect(0, 0, w, w); });
    [-1, 1].forEach(s => lamina(texRubor, 0.1, 0.075, s * 0.1, -0.06, 0.003, false));

    // --- brazos: hombro → codo → muñeca → guante (palma, dedos, índice y pulgar) ---
    const brazo = s => {
      const hombro = new T.Group(); hombro.position.set(s * 0.138, 0.245, 0); cintura.add(hombro);
      const hm = new T.Mesh(new T.SphereGeometry(0.047, 20, 14), M.lila); hombro.add(hm);
      const sup = capsula(0.044, 0.05, M.lila); sup.position.y = -0.042; hombro.add(sup);
      const codo = new T.Group(); codo.position.y = -0.085; hombro.add(codo);
      const inf = capsula(0.042, 0.04, M.lila); inf.position.y = -0.035; codo.add(inf);
      const muneca = new T.Group(); muneca.position.y = -0.07; codo.add(muneca);
      // guante: puño acampanado, palma, bloque de dedos, índice y pulgar
      const puno = new T.Mesh(new T.CylinderGeometry(0.058, 0.046, 0.05, 20), M.lima); puno.position.y = -0.01; muneca.add(puno);
      const palma = new T.Mesh(new T.SphereGeometry(1, 20, 16), M.lima); palma.scale.set(0.062, 0.062, 0.042); palma.position.y = -0.065; muneca.add(palma);
      const nudillo = new T.Group(); nudillo.position.set(0, -0.1, 0); muneca.add(nudillo);
      const dedos = new T.Mesh(new T.CapsuleGeometry(0.036, 0.035, 6, 14), M.lima); dedos.scale.set(1.2, 1, 0.95); dedos.position.set(-s * 0.014, -0.03, 0); nudillo.add(dedos);
      const raizIndice = new T.Group(); raizIndice.position.set(s * 0.032, -0.098, 0); muneca.add(raizIndice);
      const indice = capsula(0.019, 0.048, M.lima); indice.position.y = -0.034; raizIndice.add(indice);
      const raizPulgar = new T.Group(); raizPulgar.position.set(0, -0.05, 0.036); muneca.add(raizPulgar);
      const pulgar = capsula(0.02, 0.032, M.lima); pulgar.position.y = -0.027; raizPulgar.add(pulgar);
      return { hombro, codo, muneca, nudillo, raizIndice, raizPulgar, s };
    };
    J.bD = brazo(1); J.bI = brazo(-1);

    // --- piernas: cadera → rodilla (con la bota) ---
    const pierna = s => {
      const cad = new T.Group(); cad.position.set(s * 0.072, -0.035, 0); caderas.add(cad);
      const mus = capsula(0.052, 0.05, M.lila); mus.position.y = -0.05; cad.add(mus);
      const rod = new T.Group(); rod.position.y = -0.1; cad.add(rod);
      const esp = capsula(0.046, 0.04, M.lila); esp.position.y = -0.02; rod.add(esp);
      const cana = torno([[0.0, -0.15], [0.072, -0.15], [0.077, -0.13], [0.074, -0.07], [0.08, -0.025], [0.076, -0.01], [0.06, 0.0], [0.035, 0.004], [0.0, 0.005]], M.lima, 32);
      rod.add(cana);
      const pie = new T.Mesh(new T.SphereGeometry(1, 24, 18), M.lima); pie.scale.set(0.088, 0.055, 0.105); pie.position.set(0, -0.135, 0.03); rod.add(pie);
      return { cad, rod, s };
    };
    J.pD = pierna(1); J.pI = pierna(-1);
    raiz.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
    return { raiz, J, ojos };
  }

  // ---------- poses y gestos ----------
  // Pose: valores en radianes. Brazo de la derecha de la pantalla = D (s=+1). ab = abrir hacia el lado, ad = adelante, cz/cx = codo, mz/mx/my = muñeca, dedos: 0 abiertos · 1 cerrados
  const P0 = () => ({
    y: 0, giro: 0, lado: 0, incl: 0, torsion: 0, cx: 0, cy: 0, cz: 0,
    Dab: 0.42, Dad: 0, Dcz: 0.12, Dcx: 0.08, Dmx: 0, Dmy: 0, Dmz: 0, Dded: 0.15, Dind: 0.15, Dpul: 0.2,
    Iab: 0.42, Iad: 0, Icz: 0.12, Icx: 0.08, Imx: 0, Imy: 0, Imz: 0, Ided: 0.15, Iind: 0.15, Ipul: 0.2,
    Dpx: 0, Drx: 0, Ipx: 0, Irx: 0, Dpz: 0, Ipz: 0, ojo: 1
  });
  const S = Math.sin, C = Math.cos, PI = Math.PI;
  const ola = (t, f) => S(t * f * 2 * PI);
  const sube = (t, d) => { const k = Math.min(1, Math.max(0, t / d)); return k * k * (3 - 2 * k); };
  const CLIPS = {
    reposo: t => ({ y: 0.003 * ola(t, 0.45), cz: 0.03 * ola(t, 0.2), cx: 0.02 * ola(t, 0.45), Dab: 0.42 + 0.025 * ola(t, 0.45), Iab: 0.42 + 0.025 * ola(t, 0.45), lado: 0.012 * ola(t, 0.2) }),
    andar: t => {
      const f = 1.7, a = t * f * 2 * PI, s = S(a), c = C(a);
      const pasoD = Math.max(0, S(a + PI)), pasoI = Math.max(0, S(a));
      return {
        y: 0.014 * Math.abs(c) - 0.006, lado: 0.035 * s, torsion: 0.12 * s, giro: 0, cz: -0.03 * s, cx: 0.03 * Math.abs(c),
        Dpx: 0.48 * s, Drx: 0.15 + 0.75 * pasoD, Ipx: -0.48 * s, Irx: 0.15 + 0.75 * pasoI,
        Dad: -0.5 * s, Iad: 0.5 * s, Dab: 0.3, Iab: 0.3, Dcx: 0.35 + 0.2 * Math.max(0, -s), Icx: 0.35 + 0.2 * Math.max(0, s), Dcz: 0.05, Icz: 0.05
      };
    },
    saluda: t => {
      const k = sube(t, 0.45);
      return { Dab: 0.42 + 0.88 * k, Dad: 0.15 * k, Dcz: 0.12 + (1.36 + 0.3 * ola(t, 1.9)) * k, Dmz: 0.15 * ola(t, 1.9) * k, Dded: 0.05, Dind: 0.05, Dpul: 0.1,
        cz: -0.1 * k, cy: 0.1 * k, cx: -0.04 * k, lado: -0.02 * k, y: 0.004 * ola(t, 0.9) };
    },
    senala: t => {
      const k = sube(t, 0.5), emp = Math.max(0, ola(t - 0.5, 1.1)) * k;
      return { Dab: 0.42 + 1.05 * k, Dad: 0.35 * k + 0.08 * emp, Dcz: 0.12 + 0.05 * k, Dcx: 0.08 + 0.05 * emp, Dmy: 0, Dmz: -0.25 * k, Dded: 0.15 + 0.85 * k, Dind: 0.15 - 0.15 * k, Dpul: 0.2 + 0.6 * k,
        Iab: 0.42 + 0.1 * k, Icx: 0.08 + 1.1 * k, Iad: -0.15 * k, Icz: 0.12 + 0.5 * k,
        cy: 0.22 * k, cz: -0.06 * k, giro: 0.1 * k, torsion: 0.08 * k };
    },
    pulgar: t => {
      const k = sube(t, 0.4);
      return { Dab: 0.42 - 0.12 * k, Dad: 0.55 * k, Dcx: 0.08 + 1.5 * k, Dmy: 1.57 * k, Dmz: 0, Dded: 0.15 + 0.85 * k, Dind: 0.15 + 0.85 * k, Dpul: 0.2 - 0.2 * k, Dpup: 2.3 * k,
        Iab: 0.42 + 0.1 * k, Icx: 0.08 + 1.1 * k, Iad: -0.15 * k, Icz: 0.12 + 0.5 * k,
        cz: -0.12 * k, cx: 0.05 * k, y: 0.008 * Math.max(0, ola(t, 1)) * k };
    },
    invita: t => {
      const k = sube(t, 0.45), m = 0.5 + 0.5 * ola(t - 0.45, 1.3);
      return { Dab: 0.35, Dad: 0.55 * k, Dcx: 0.08 + 0.95 * k, Dmy: -1.5 * k, Dmx: -0.2 * k, Dded: 0.1 + 1.0 * m * k, Dind: 0.1 + 1.0 * m * k, Dpul: 0.2,
        Iab: 0.42 + 0.1 * k, Icx: 0.08 + 1.1 * k, Iad: -0.15 * k, Icz: 0.12 + 0.5 * k,
        incl: 0.06 * k, cx: 0.1 * k, cz: -0.08 * k };
    },
    celebra: t => {
      const ciclo = (t % 0.8) / 0.8, salto = Math.max(0, S(ciclo * PI)), ag = Math.max(0, C(ciclo * PI * 2));
      const k = sube(t, 0.25);
      return { y: 0.08 * salto * k, Dab: 0.42 + 1.95 * k, Iab: 0.42 + 1.95 * k, Dcz: 0.3 * k, Icz: 0.3 * k, Dad: 0.2 * k, Iad: 0.2 * k,
        Dded: 0.15 + 0.85 * k, Dind: 0.15 + 0.85 * k, Ided: 0.15 + 0.85 * k, Iind: 0.15 + 0.85 * k, Dpul: 0.9 * k, Ipul: 0.9 * k,
        Dpx: -0.35 * ag * k, Ipx: -0.35 * ag * k, Drx: 0.8 * ag * k, Irx: 0.8 * ag * k, cx: -0.1 * salto * k };
    }
  };

  function aplica(R, p) {
    const J = R.J;
    J.caderas.position.y = 0.285 + p.y;
    J.caderas.rotation.set(0, p.giro, p.lado);
    J.cintura.rotation.set(p.incl, p.torsion, -p.lado * 0.5);
    J.cabeza.rotation.set(p.cx, p.cy, p.cz);
    [['D', J.bD], ['I', J.bI]].forEach(([L, b]) => {
      const s = b.s;
      b.hombro.rotation.set(-p[L + 'ad'], 0, s * p[L + 'ab'], 'ZXY');
      b.codo.rotation.set(-p[L + 'cx'], 0, s * p[L + 'cz'], 'XZY');
      b.muneca.rotation.set(p[L + 'mx'], s * p[L + 'my'], s * p[L + 'mz']);
      b.nudillo.rotation.x = p[L + 'ded'] * 1.6;
      b.raizIndice.rotation.x = p[L + 'ind'] * 1.6;
      b.raizPulgar.rotation.set(-0.5 + p[L + 'pul'] * 0.6 - (p[L + 'pup'] || 0), 0, s * (0.35 - p[L + 'pul'] * 0.7));
    });
    J.pD.cad.rotation.set(-p.Dpx, 0, 0.03 + p.Dpz); J.pD.rod.rotation.x = p.Drx;
    J.pI.cad.rotation.set(-p.Ipx, 0, -0.03 - p.Ipz); J.pI.rod.rotation.x = p.Irx;
    R.ojos.forEach(o => { o.scale.y = p.ojo; });
  }

  class Mevi {
    constructor(op) {
      const R = construye();
      this.R = R; this.raiz = new T.Group(); this.raiz.add(R.raiz);
      this.raiz.scale.setScalar((op && op.escala) || 1);
      this.t = 0; this.clip = 'reposo'; this.ant = null; this.tAnt = 0; this.mezcla = 1; this.parp = 2.5;
      aplica(R, Object.assign(P0(), CLIPS.reposo(0)));
    }
    get clips() { return Object.keys(CLIPS); }
    toca(n) { if (!CLIPS[n] || n === this.clip) return; this.ant = this.clip; this.tAnt = this.t; this.clip = n; this.t = 0; this.mezcla = 0; }
    avanza(dt) {
      this.t += dt; this.tAnt += dt; this.mezcla = Math.min(1, this.mezcla + dt / 0.3);
      const a = Object.assign(P0(), CLIPS[this.clip](this.t));
      let p = a;
      if (this.mezcla < 1 && this.ant) {
        const b = Object.assign(P0(), CLIPS[this.ant](this.tAnt)), k = this.mezcla * this.mezcla * (3 - 2 * this.mezcla);
        p = {}; for (const n in a) p[n] = b[n] + (a[n] - b[n]) * k;
      }
      // parpadeo de las estrellas
      this.parp -= dt; if (this.parp < -0.14) this.parp = 2 + Math.random() * 3;
      p.ojo = this.parp < 0 ? 0.15 : 1;
      aplica(this.R, p);
    }
  }
  window.MEVI3D = { crea: op => new Mevi(op), CLIPS };
})();
