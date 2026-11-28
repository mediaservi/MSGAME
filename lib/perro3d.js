/* MSGAME · el perro de la casa, vivo y quieto en su sitio: modelo con esqueleto que mueve la cola, respira y mira a los lados.
   Se dibuja en un lienzo aparte y cada juego lo estampa donde quiere (como el vikingo sabio). mediaservi.com · GPL-3.0 */
(function () {
  'use strict';
  const BASE = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  const carga = u => new Promise((ok, ko) => { const s = document.createElement('script'); s.src = BASE + u; s.onload = ok; s.onerror = ko; document.head.appendChild(s); });
  const lim = (v, a, b) => Math.max(a, Math.min(b, v));
  function crea(o) {
    o = o || {}; const v = { listo: false, fallo: false, pinta: () => false };
    (async () => {
      if (!window.THREE) await carga('three.min.js');
      if (!window.MeshoptDecoder) await carga('meshopt.js');
      if (!window.THREE.GLTFLoader) await carga('gltf.js?v=18.41');
      const T = window.THREE, PX = o.px || 360;
      const R = new T.WebGLRenderer({ alpha: true, antialias: true }); R.setSize(PX, PX, false); R.setClearColor(0, 0); R.outputEncoding = T.sRGBEncoding;
      const S = new T.Scene(); S.add(new T.HemisphereLight(o.cielo || 0xdfe8ff, o.suelo || 0x3a3040, o.amb || 1));
      const k1 = new T.DirectionalLight(o.luz || 0xfff0d8, o.luzI || 1.6); k1.position.set(-2, 4, 4); S.add(k1);
      const L = new T.GLTFLoader(); L.setMeshoptDecoder(window.MeshoptDecoder);
      const g = await new Promise((ok, ko) => L.load(BASE + '../juegos/hit3d/perro.glb?v=1', ok, undefined, ko));
      const m = g.scene; S.add(m); const B = {}; m.traverse(n => { n.frustumCulled = false; if (n.isBone) B[n.name] = n; });
      const box = new T.Box3().setFromObject(m), sz = box.getSize(new T.Vector3()), ce = box.getCenter(new T.Vector3()), H = Math.max(sz.x, sz.y, sz.z) * .62;
      /* cámara recta, de tres cuartos: el perro mira hacia el centro de la escena (lado: 1 = mira a la derecha, −1 = a la izquierda) */
      const C = new T.OrthographicCamera(-H, H, H, -H, .01, 100), A = (o.lado === -1 ? 1 : -1) * .72; C.position.set(ce.x + Math.sin(A) * 8, ce.y + 1.6, ce.z + Math.cos(A) * 8); C.lookAt(ce);
      const pie = new T.Vector3(ce.x, box.min.y, ce.z).project(C), FY = (1 - pie.y) / 2;   /* dónde caen las patas en el lienzo (0 arriba, 1 abajo) */
      const mx = new T.AnimationMixer(m), cl = n => { const a = g.animations.find(q => q.name === n); return a ? mx.clipAction(a) : null; };
      const cola = cl('dog_yaoweiba'), quieto = cl('dog_dog_over'); [cola, quieto].forEach(a => { if (a) { a.play(); a.setEffectiveWeight(0); } });
      let w = 0, t = 0, caja = null; const cuello = B.neck1 || B.neck2 || B.head;
      /* e: { dt, cola (0…1: cuánto mueve la cola), mira (−1…1) } */
      v.pinta = (x, X, Yp, alto, e) => {
        e = e || {}; const dt = lim(e.dt || 0, 0, .1); t += dt; w += (lim(e.cola == null ? 1 : e.cola, 0, 1) - w) * (1 - Math.exp(-dt * 4));
        if (cola) cola.setEffectiveWeight(w); if (quieto) quieto.setEffectiveWeight(1 - w); mx.update(dt);
        if (cuello) cuello.rotateY((e.mira || 0) * .5);
        R.render(S, C);
        if (!caja) { /* la caja real del perro en el lienzo (se mide una vez, con los píxeles): las patas caen justo donde se pide */
          const gl = R.getContext(), px = new Uint8Array(PX * PX * 4); gl.readPixels(0, 0, PX, PX, gl.RGBA, gl.UNSIGNED_BYTE, px); let x0 = PX, x1 = 0, y0 = PX, y1 = 0;
          for (let yy = 0; yy < PX; yy += 2) for (let xx = 0; xx < PX; xx += 2) if (px[(yy * PX + xx) * 4 + 3] > 40) { if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
          caja = x1 > x0 ? { cx: (x0 + x1) / 2 / PX, pie: 1 - y0 / PX, h: (y1 - y0) / PX } : { cx: .5, pie: FY, h: .8 }; }
        const d = alto / caja.h; x.drawImage(R.domElement, X - d * caja.cx, Yp - d * caja.pie, d, d); return true;
      };
      v.listo = true;
    })().catch(() => { v.fallo = true; });
    return v;
  }
  window.PERRO3D = { crea };
})();
