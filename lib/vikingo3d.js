/* MSGAME · el vikingo sabio, vivo: modelo con esqueleto que respira, anda, habla con las manos y levanta el báculo.
   Se dibuja en un lienzo aparte y cada juego lo estampa donde quiere, así convive con los juegos pintados en 2D.
   mediaservi.com · GPL-3.0 */
(function () {
  'use strict';
  const BASE = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  const carga = u => new Promise((ok, ko) => { const s = document.createElement('script'); s.src = BASE + u; s.onload = ok; s.onerror = ko; document.head.appendChild(s); });
  const lim = (v, a, b) => Math.max(a, Math.min(b, v));

  function crea(o) {
    o = o || {};
    const v = { listo: false, fallo: false, pinta: () => false };
    (async () => {
      if (!window.THREE) await carga('three.min.js');
      if (!window.MeshoptDecoder) await carga('meshopt.js');
      if (!window.THREE.GLTFLoader) await carga('gltf.js?v=18.41');
      const T = window.THREE, ALTO = o.px || 420, ANCHO = Math.round(ALTO * 5 / 6);
      const R = new T.WebGLRenderer({ alpha: true, antialias: true }); R.setSize(ANCHO, ALTO, false); R.setClearColor(0, 0); R.outputEncoding = T.sRGBEncoding;
      const S = new T.Scene(); S.add(new T.HemisphereLight(o.cielo || 0xdfe8ff, o.suelo || 0x3a3040, o.amb || 1.05));
      const k1 = new T.DirectionalLight(o.luz || 0xfff0d8, o.luzI || 1.7); k1.position.set(-2, 4, 4); S.add(k1);
      const k2 = new T.DirectionalLight(o.contra || 0x7dffd0, o.contraI || 1.1); k2.position.set(2.5, 2.5, -3); S.add(k2);
      const L = new T.GLTFLoader(); L.setMeshoptDecoder(window.MeshoptDecoder);
      const g = await new Promise((ok, ko) => L.load(BASE + '../juegos/hit3d/vikingo.glb?v=1', ok, undefined, ko));
      const m = g.scene, P = new T.Group(); P.add(m); S.add(P); const B = {}; m.traverse(n => { n.frustumCulled = false; if (n.isBone) B[n.name.replace('mixamorig', '')] = n; });
      P.updateMatrixWorld(true);
      const wp = n => n.getWorldPosition(new T.Vector3()), y0 = Math.min(wp(B.LeftToe_End || B.LeftFoot).y, wp(B.RightToe_End || B.RightFoot).y), HT = wp(B.HeadTop_End).y - y0;
      /* cámara recta, sin fuga: los pies caen siempre en el mismo punto del lienzo */
      const C = new T.OrthographicCamera(-HT * .625, HT * .625, HT * .75, -HT * .75, .1, 50), cy = y0 + HT * .63; C.position.set(0, cy + 1.1, 9); C.lookAt(0, cy, 0);
      const mx = new T.AnimationMixer(m), A = {}; g.animations.forEach(a => { A[a.name] = mx.clipAction(a); });
      const idle = A.Idle, anda = A.Walking, habla = A.Talk_with_Hands_Open; [idle, anda, habla].forEach(a => { if (a) { a.play(); a.setEffectiveWeight(0); } }); if (idle) idle.setEffectiveWeight(1);
      const peso = { i: 1, a: 0, h: 0 }, hip0 = B.Hips.position.clone();
      /* el báculo: pieza aparte, apoyada en el suelo y agarrada con la mano derecha */
      let pal = null, gema = null, luzG = null, baseB = null;
      if (o.baculo !== false && B.RightHand) {
        const G = new T.Group(), M = (c, e) => new T.MeshStandardMaterial({ color: c, roughness: .7, metalness: e ? .1 : .05, emissive: e || 0, emissiveIntensity: e ? 1.6 : 0 }), K = HT / 2, LB = 1.72 * K;
        const palo = new T.Mesh(new T.CylinderGeometry(.026 * K, .036 * K, LB, 10), M(0x6b4a2b)); palo.position.y = LB / 2; G.add(palo);
        [.5, .57, 1.2].forEach(y => { const a = new T.Mesh(new T.TorusGeometry(.04 * K, .012 * K, 8, 16), M(0xd9a441)); a.rotation.x = Math.PI / 2; a.position.y = y * K; G.add(a); });
        const aro = new T.Mesh(new T.TorusGeometry(.13 * K, .028 * K, 10, 24), M(0x6b4a2b)); aro.position.y = LB + .1 * K; G.add(aro);
        gema = new T.Mesh(new T.OctahedronGeometry(.075 * K), M(0x9fefff, o.gema || 0x39c8ff)); gema.position.y = LB + .1 * K; G.add(gema);
        luzG = new T.PointLight(o.gema || 0x39c8ff, 0, HT * 1.2, 1.6); luzG.position.y = LB + .1 * K; G.add(luzG);
        P.add(G); pal = G;
      }
      const va = new T.Vector3(), UP = new T.Vector3(0, 1, 0);
      let giro = 0, tG = 0;
      /* e: { dt, vx (−1…1, hacia dónde camina), habla (bool), hechizo (0…1), mira (−1…1) } */
      v.pinta = (x, X, Yp, hh, e) => {
        e = e || {}; const dt = lim(e.dt || 0, 0, .1), va1 = Math.abs(e.vx || 0) > .05 ? 1 : 0, vh = !va1 && e.habla ? 1 : 0, k = 1 - Math.exp(-dt * 9);
        peso.a += (va1 - peso.a) * k; peso.h += (vh - peso.h) * k; peso.i += ((1 - va1 - vh) - peso.i) * k;
        if (idle) idle.setEffectiveWeight(lim(peso.i, 0, 1)); if (anda) { anda.setEffectiveWeight(lim(peso.a, 0, 1)); anda.timeScale = .7 + .6 * Math.abs(e.vx || 0); } if (habla) habla.setEffectiveWeight(lim(peso.h, 0, 1));
        mx.update(dt); B.Hips.position.x = hip0.x; B.Hips.position.z = hip0.z;
        const obj = va1 ? Math.sign(e.vx) * 1.15 : (e.mira || 0) * .55; giro += (obj - giro) * (1 - Math.exp(-dt * 7)); P.rotation.y = giro;
        tG += dt; const hz = lim(e.hechizo || 0, 0, 1);
        if (pal) { P.updateMatrixWorld(true); B.RightHand.getWorldPosition(va); P.worldToLocal(va);
          if (!baseB) { baseB = new T.Vector3(va.x + Math.sign(va.x || 1) * .05 * HT / 2, P.worldToLocal(new T.Vector3(0, y0 + .03 * HT, 0)).y, va.z + .04 * HT); }
          const b = baseB.clone(); b.x += (va.x - baseB.x) * .55; b.z += (va.z - baseB.z) * .55; b.y += hz * HT * .16;
          pal.position.copy(b); pal.quaternion.setFromUnitVectors(UP, va.clone().sub(b).normalize());
          gema.rotation.y = tG * 1.4; gema.material.emissiveIntensity = 1.5 + Math.sin(tG * 3) * .4 + hz * 7; gema.scale.setScalar(1 + hz * .7); luzG.intensity = .6 + hz * 6; }
        R.render(S, C);
        const dh = hh * 1.5, dw = dh * ANCHO / ALTO; x.drawImage(R.domElement, X - dw / 2, Yp - dh * .92, dw, dh); return true;
      };
      v.listo = true;
    })().catch(() => { v.fallo = true; });
    return v;
  }
  window.VIKINGO3D = { crea };
})();
