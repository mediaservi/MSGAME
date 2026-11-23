/* MSGAME · v18.37 · la cara de Mevi: ojos y boca dibujados por el juego sobre la cara lisa del modelo (packs/comun/mevi/mevi.glb)
   Hoja de expresiones packs/comun/mevi/caras.png (4 × 2 casillas): arriba los ojos (0 estrella, 1 raya de parpadeo, 2 felices, 3 sorpresa),
   abajo las bocas (0 sonrisa cerrada, 1 entreabierta, 2 abierta, 3 en O). Se proyectan de frente sobre la cabeza en el propio sombreado
   del modelo, con su misma luz: no son pegatinas. Las medidas están tomadas en la malla en reposo, sobre la imagen original de Mevi.
   Uso: const C = MEVICARA(THREE, raiz, 'packs/comun/mevi/caras.png'); C.parpa(t); C.habla(t, siHabla); C.ojos(0…3); C.boca(0…3) */
(function () {
  const M = { ox: .0072, oy: .548, sep: .1286, ot: .21, bx: .0058, by: .3545, bt: .275 };
  const TEX = {};
  window.MEVICARA = function (T, raiz, url) {
    let tx = TEX[url]; if (!tx) { tx = TEX[url] = new T.TextureLoader().load(url); tx.generateMipmaps = false; tx.minFilter = T.LinearFilter; tx.magFilter = T.LinearFilter; }
    const U = { uCaras: { value: tx }, uOjo: { value: 0 }, uBoca: { value: 2 } }, f = v => v.toFixed(4), hecho = new Set();
    raiz.traverse(m => { if (!m.isMesh || !m.material || hecho.has(m.material)) return; const mat = m.material; hecho.add(mat); const prev = mat.onBeforeCompile;
      mat.onBeforeCompile = function (sh, r) { if (prev) prev.call(this, sh, r); Object.assign(sh.uniforms, U);
        sh.vertexShader = 'varying vec3 vCara;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vCara = position;');
        sh.fragmentShader = 'varying vec3 vCara;\nuniform sampler2D uCaras;\nuniform float uOjo;\nuniform float uBoca;\n' +
          'vec4 mcCasilla(vec2 P, vec2 cen, float tam, float idx, float fila) { vec2 q = vec2((P.x - cen.x) / tam + .5, .5 - (P.y - cen.y) / tam); if (q.x < .01 || q.y < .01 || q.x > .99 || q.y > .99) return vec4(0.); vec4 c = texture2D(uCaras, vec2((idx + q.x) / 4., fila - q.y * .5)); c.rgb = pow(c.rgb, vec3(2.2)); return c; }\n' +
          sh.fragmentShader
          .replace('#include <map_fragment>', `#include <map_fragment>
  if (vCara.z > .2) { vec4 c = mcCasilla(vCara.xy, vec2(${f(M.ox - M.sep)}, ${f(M.oy)}), ${f(M.ot)}, uOjo, 1.); diffuseColor.rgb = mix(diffuseColor.rgb, c.rgb, c.a);
    c = mcCasilla(vCara.xy, vec2(${f(M.ox + M.sep)}, ${f(M.oy)}), ${f(M.ot)}, uOjo, 1.); diffuseColor.rgb = mix(diffuseColor.rgb, c.rgb, c.a);
    c = mcCasilla(vCara.xy, vec2(${f(M.bx)}, ${f(M.by)}), ${f(M.bt)}, uBoca, .5); diffuseColor.rgb = mix(diffuseColor.rgb, c.rgb, c.a); }`)
          .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance = emissive * diffuseColor.rgb;');
      };
      mat.customProgramCacheKey = () => 'mevicara2'; mat.needsUpdate = true; });
    const C = { U, gesto: 0, ojos(i) { U.uOjo.value = i; }, boca(i) { U.uBoca.value = i; },
      /* al hablar la boca pasa por cerrada, entreabierta y abierta con el ritmo del texto; callada, la sonrisa abierta de siempre */
      habla(t, si) { if (!si) { U.uBoca.value = 2; return; } const a = Math.abs(Math.sin(t * 13) * Math.sin(t * 4.7 + 1)); U.uBoca.value = a < .22 ? 0 : a < .55 ? 1 : 2; },
      /* parpadeo: la estrella se cambia por una raya un instante, cada 2-5 s y a veces dos veces seguidas */
      parpa(t) { if (!C.pT || t < C.pT - 9) C.pT = t + 2 + Math.random() * 3; if (t > C.pT + .14) C.pT = t + 2.2 + Math.random() * 3.5 - (Math.random() < .2 ? 2 : 0); const k = t - C.pT; U.uOjo.value = k >= 0 && k < .14 ? 1 : C.gesto; } };
    return C;
  };
})();
