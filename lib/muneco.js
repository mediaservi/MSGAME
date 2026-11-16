/* MSGAME · muñeco articulado · mediaservi.com · GPL-3.0
   Convierte un modelo estático (Meshy, sin esqueleto) en un muñeco de piezas rígidas
   —cabeza, cuerpo, brazos y piernas— que giran sobre su articulación, como un juguete de vinilo.
   Así no hay deformaciones: nada de hombros retorcidos ni manos dentro de la cabeza.
   Uso: const m = MUNECO.crea(gltf.scene, cortes); escena.add(m.raiz); m.toca('saluda'); y en cada fotograma m.avanza(dt).
   Los cortes van en fracciones de la altura del modelo, con el origen en el centro de los pies
   (x a la derecha de la pantalla, y hacia arriba, el muñeco mira hacia +z). */
(function () {
  'use strict';
  const T = THREE;
  const DEF = {
    cuello: 0.58,        // por encima: cabeza
    cadera: 0.30,        // por debajo: piernas
    hombroX: 0.17,       // |x| del hombro (arranque del brazo)
    hombroY: 0.55,       // altura del hombro (punto de giro)
    axilaX: 0.17,        // |x| de la axila: con hombroX/hombroY define la línea que separa brazo y cuerpo
    axilaY: 0.42,
    manoY: 0.22,         // por debajo de esta altura ya no hay brazo (evita coger trozos de pierna)
    caderaX: 0.07,       // |x| del punto de giro de cada pierna
    giroCuello: 0.56,    // altura del giro de la cabeza
    pivX: null,          // punto de giro del hombro (si no se da, el arranque del corte)
    pivY: null,
    escala: 1,           // altura final en unidades de la escena
    brazoReposo: 0       // giro que lleva el brazo del modelo a la postura A (0 si ya está en A; -0.8 si viene en T)
  };

  // Separa una geometría en trozos según una función que clasifica cada triángulo
  function parte(geo, clase) {
    const pos = geo.attributes.position;
    const idx = geo.index ? geo.index.array : null;
    const n = idx ? idx.length : pos.count;
    const listas = {};
    const a = new T.Vector3(), b = new T.Vector3(), c = new T.Vector3();
    for (let i = 0; i < n; i += 3) {
      const i0 = idx ? idx[i] : i, i1 = idx ? idx[i + 1] : i + 1, i2 = idx ? idx[i + 2] : i + 2;
      a.fromBufferAttribute(pos, i0); b.fromBufferAttribute(pos, i1); c.fromBufferAttribute(pos, i2);
      const k = clase((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3, (a.z + b.z + c.z) / 3);
      (listas[k] || (listas[k] = [])).push(i0, i1, i2);
    }
    const out = {};
    for (const k in listas) {
      const g = new T.BufferGeometry();
      for (const nom in geo.attributes) g.setAttribute(nom, geo.attributes[nom]);
      g.setIndex(listas[k]);
      g.computeBoundingSphere();
      out[k] = g;
    }
    return out;
  }

  function crea(modelo, cortes) {
    const C = Object.assign({}, DEF, cortes || {});
    modelo.updateMatrixWorld(true);
    // Medidas del modelo para normalizar: pies en y = 0, centrado en x y z
    const caja = new T.Box3().setFromObject(modelo);
    const H = caja.max.y - caja.min.y;
    const cx = (caja.min.x + caja.max.x) / 2, cz = (caja.min.z + caja.max.z) / 2;
    const s = C.escala / H;
    const norm = new T.Matrix4().makeScale(s, s, s).multiply(new T.Matrix4().makeTranslation(-cx, -caja.min.y, -cz));
    // Línea brazo/cuerpo: x límite a cada altura (entre axila y hombro)
    const lim = y => {
      if (y >= C.hombroY) return C.hombroX;
      const t = (C.hombroY - y) / Math.max(1e-6, C.hombroY - C.axilaY);
      return C.hombroX + (C.axilaX - C.hombroX) * Math.min(1, t);
    };
    const clase = (x, y) => {
      if (y > C.cuello) return 'cabeza';
      if (y > C.manoY && Math.abs(x) > lim(y)) return x > 0 ? 'brazoD' : 'brazoI';
      if (y < C.cadera) return x > 0 ? 'piernaD' : 'piernaI';
      return 'cuerpo';
    };
    // Cada vértice se reparte entre el cuerpo y su pieza con una franja suave en la junta:
    // las piezas giran casi rígidas, pero la junta se estira un poco en vez de abrir un hueco.
    const BANDA = C.banda || 0.03;
    const suave = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    const E = C.escala;
    const hueso = (padre, x, y, z) => { const b = new T.Bone(); b.position.set(x * E, y * E, z * E); if (padre) padre.add(b); return b; };
    const salto = hueso(null, 0, 0, 0);
    const cuerpo = hueso(salto, 0, C.cadera, 0);
    const cuello = hueso(cuerpo, 0, C.giroCuello - C.cadera, 0);
    const px = C.pivX != null ? C.pivX : C.hombroX, py = C.pivY != null ? C.pivY : C.hombroY;
    const hombroD = hueso(cuerpo, px, py - C.cadera, 0);
    const hombroI = hueso(cuerpo, -px, py - C.cadera, 0);
    const caderaD = hueso(salto, C.caderaX, C.cadera, 0);
    const caderaI = hueso(salto, -C.caderaX, C.cadera, 0);
    const huesos = [salto, cuerpo, cuello, hombroD, hombroI, caderaD, caderaI];
    const IDX = { cuerpo: 1, cabeza: 2, brazoD: 3, brazoI: 4, piernaD: 5, piernaI: 6 };
    const raiz = new T.Group();
    raiz.add(salto);
    raiz.updateMatrixWorld(true);
    const esqueleto = new T.Skeleton(huesos);
    const v = new T.Vector3();
    modelo.traverse(o => {
      if (!o.isMesh) return;
      const g = o.geometry.clone();
      g.applyMatrix4(new T.Matrix4().multiplyMatrices(norm, o.matrixWorld));
      const pos = g.attributes.position, n = pos.count;
      const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
      for (let i = 0; i < n; i++) {
        v.fromBufferAttribute(pos, i);
        const x = v.x / E, y = v.y / E, ax = Math.abs(x);
        let parte = null, w = 0;
        const dBrazo = ax - lim(y);
        if (y > C.manoY - BANDA && dBrazo > -BANDA && y < C.cuello + BANDA) {
          parte = x > 0 ? 'brazoD' : 'brazoI';
          w = suave(-BANDA, BANDA, dBrazo) * suave(C.manoY - BANDA, C.manoY + BANDA, y);
        }
        if (!parte || w < 0.5) {
          if (y > C.cuello - BANDA) { parte = 'cabeza'; w = suave(C.cuello - BANDA, C.cuello + BANDA, y); }
          else if (y < C.cadera + BANDA && !(parte && w > 0)) { parte = x > 0 ? 'piernaD' : 'piernaI'; w = 1 - suave(C.cadera - BANDA, C.cadera + BANDA, y); }
        }
        si[i * 4] = IDX.cuerpo; sw[i * 4] = 1 - w;
        si[i * 4 + 1] = parte ? IDX[parte] : IDX.cuerpo; sw[i * 4 + 1] = parte ? w : 0;
      }
      g.setAttribute('skinIndex', new T.Uint16BufferAttribute(si, 4));
      g.setAttribute('skinWeight', new T.Float32BufferAttribute(sw, 4));
      const m = new T.SkinnedMesh(g, o.material);
      m.frustumCulled = false; m.castShadow = true;
      m.bind(esqueleto);
      raiz.add(m);
    });
    const J = { raiz, salto, cuerpo, cuello, hombroD, hombroI, caderaD, caderaI };
    return new Muneco(J, C);
  }

  // ---------- Animación por poses ----------
  // Una pose: ángulos en radianes. bD/bI: brazo (z = abrir hacia fuera, x = hacia delante); pD/pI: pierna (x)
  const P0 = () => ({ y: 0, ry: 0, inc: 0, ladeo: 0, cx: 0, cy: 0, cz: 0, bDx: 0, bDz: 0, bIx: 0, bIz: 0, pDx: 0, pIx: 0 });
  const S = Math.sin, PI = Math.PI;
  const ola = (t, f) => S(t * f * 2 * PI);
  const CLIPS = {
    reposo: t => ({ y: 0.004 * ola(t, 0.5), cz: 0.04 * ola(t, 0.25), cx: 0.02 * ola(t, 0.5), bDz: 0.03 * ola(t, 0.5), bIz: 0.03 * ola(t, 0.5) }),
    andar: t => {
      const w = ola(t, 1.6);
      return { y: 0.018 * Math.abs(S(t * 1.6 * 2 * PI)), pDx: 0.45 * w, pIx: -0.45 * w, bDx: -0.4 * w, bIx: 0.4 * w, cz: 0.05 * w, ladeo: 0.04 * w };
    },
    saluda: t => ({ bDz: 1.05 + 0.22 * ola(t, 2.2), bDx: 1.05, cz: -0.1, cy: -0.1, y: 0.004 * ola(t, 1) }),
    senala: t => ({ bDz: 0.75, bDx: 0.85, ry: -0.35, cy: -0.25, cx: -0.05 + 0.03 * ola(t, 1) }),
    senalaI: t => ({ bIz: 0.75, bIx: 0.85, ry: 0.35, cy: 0.25, cx: -0.05 + 0.03 * ola(t, 1) }),
    invita: t => { const k = 0.5 + 0.5 * ola(t, 1.1); return { bDz: 0.45, bDx: 0.6 + 0.5 * k, inc: 0.08, cx: 0.12, cy: -0.1, y: 0.006 * k }; },
    pulgar: t => ({ bDx: 1.35, bDz: 0.35, cz: -0.1, cx: 0.06, y: 0.01 * Math.max(0, ola(t, 1)) }),
    celebra: t => { const k = Math.max(0, ola(t, 1.4)); return { y: 0.09 * k, bDz: 0.95 + 0.15 * k, bIz: 0.95 + 0.15 * k, bDx: 0.9, bIx: 0.9, cx: -0.1 * k, pDx: -0.2 * k, pIx: -0.2 * k }; },
    asiente: t => ({ cx: 0.18 * Math.max(0, ola(t, 1.6)), bDz: 0.03, bIz: 0.03 }),
    reverencia: t => { const k = Math.min(1, Math.max(0, S(Math.min(t, 1.6) / 1.6 * PI))); return { inc: 0.55 * k, cx: 0.2 * k, bDx: 0.35 * k, bIx: 0.35 * k }; }
  };

  class Muneco {
    constructor(J, C) {
      this.J = J; this.C = C; this.raiz = J.raiz;
      this.t = 0; this.clip = 'reposo'; this.ant = null; this.mezcla = 1; this.tAnt = 0;
      this.pose = P0();
    }
    toca(nombre) {
      if (!CLIPS[nombre] || nombre === this.clip) return;
      this.ant = this.clip; this.tAnt = this.t; this.clip = nombre; this.t = 0; this.mezcla = 0;
    }
    get clips() { return Object.keys(CLIPS); }
    avanza(dt) {
      this.t += dt; this.tAnt += dt;
      this.mezcla = Math.min(1, this.mezcla + dt / 0.35);
      const a = Object.assign(P0(), CLIPS[this.clip](this.t));
      let p = a;
      if (this.mezcla < 1 && this.ant) {
        const b = Object.assign(P0(), CLIPS[this.ant](this.tAnt));
        const k = this.mezcla * this.mezcla * (3 - 2 * this.mezcla);
        p = {}; for (const n in a) p[n] = b[n] + (a[n] - b[n]) * k;
      }
      this.pose = p;
      const J = this.J, E = this.C.escala;
      J.salto.position.y = p.y * E;
      J.salto.rotation.set(0, p.ry, p.ladeo);
      J.cuerpo.rotation.set(p.inc, 0, 0);
      J.cuello.rotation.set(p.cx, p.cy, p.cz);
      // Brazo de la derecha de la pantalla (x > 0): subir = girar en +z; el de la izquierda, en -z
      J.hombroD.rotation.set(-p.bDx, 0, p.bDz + this.C.brazoReposo);
      J.hombroI.rotation.set(-p.bIx, 0, -(p.bIz + this.C.brazoReposo));
      J.caderaD.rotation.set(-p.pDx, 0, 0);
      J.caderaI.rotation.set(-p.pIx, 0, 0);
    }
  }

  window.MUNECO = { crea, CLIPS, DEF };
})();
