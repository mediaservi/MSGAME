/* MSGAME · Mevi en 2D para los textos de los juegos: su cabeza (melena negra, ojos de estrella, mofletes y boca que habla)
   y un bocadillo que le sale de la boca con el texto en una sola línea (si no cabe, la letra encoge) · mediaservi.com · GPL-3.0
   MEVI2D.dice(ctx, { texto, X, Y, W, h, t, a })
     X, W  ancho total (cabeza + bocadillo) · Y centro vertical del bocadillo · h alto del bocadillo
     t     segundos desde que apareció el texto (aparece, habla y luego escucha) · a opacidad
   MEVI2D.cabeza(ctx, cx, cy, r, t, habla) dibuja solo la cabeza. */
(function () {
  'use strict';
  const TAU = Math.PI * 2, TINTA = '#17141f';
  function estrella(x, cx, cy, r, rot) { x.beginPath(); for (let i = 0; i < 10; i++) { const a = rot + i * Math.PI / 5 - Math.PI / 2, rr = i % 2 ? r * .45 : r; x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } x.closePath(); }
  function cabeza(x, cx, cy, r, t, habla) {
    const inc = Math.sin(t * 2.3) * .07 + (habla ? Math.sin(t * 5.1) * .04 : 0), sube = Math.sin(t * 3.1) * r * .03 + (habla ? Math.abs(Math.sin(t * 9)) * -r * .03 : 0);
    x.save(); x.translate(cx, cy + sube); x.rotate(inc); const lw = Math.max(1.5, r * .07);
    /* pelo de atrás (la melena) */
    x.fillStyle = TINTA; x.beginPath(); x.ellipse(0, -r * .08, r * 1.1, r * 1.06, 0, Math.PI * .92, Math.PI * 2.08); x.lineTo(r * 1.06, r * .55); x.quadraticCurveTo(r * .95, r * .78, r * .7, r * .72); x.lineTo(-r * .7, r * .72); x.quadraticCurveTo(-r * .95, r * .78, -r * 1.06, r * .55); x.closePath(); x.fill();
    /* cara */
    x.fillStyle = '#f1ece6'; x.strokeStyle = TINTA; x.lineWidth = lw; x.beginPath(); x.ellipse(0, r * .1, r * .86, r * .8, 0, 0, TAU); x.fill(); x.stroke();
    /* flequillo */
    x.fillStyle = TINTA; x.beginPath(); x.moveTo(-r * .92, r * .05); x.bezierCurveTo(-r * 1.0, -r * .95, r * 1.0, -r * .95, r * .92, r * .05); x.bezierCurveTo(r * .7, -r * .32, r * .3, -r * .38, r * .05, -r * .2); x.bezierCurveTo(-r * .2, -r * .4, -r * .62, -r * .34, -r * .92, r * .05); x.fill();
    x.fillStyle = 'rgba(255,255,255,.18)'; x.beginPath(); x.ellipse(-r * .38, -r * .62, r * .26, r * .08, -.35, 0, TAU); x.fill();
    /* ojos de estrella (parpadean) */
    const parp = (t % 3.4) > 3.27 ? .15 : 1; [-1, 1].forEach(s => { x.save(); x.translate(s * r * .34, r * .14); x.scale(1, parp); x.fillStyle = TINTA; estrella(x, 0, 0, r * .19, s * .08); x.fill(); x.restore(); });
    /* mofletes */
    x.fillStyle = 'rgba(255,120,150,.55)'; [-1, 1].forEach(s => { x.beginPath(); x.ellipse(s * r * .56, r * .42, r * .15, r * .09, 0, 0, TAU); x.fill(); });
    /* boca: se abre y se cierra al hablar */
    const ab = habla ? .25 + .75 * Math.abs(Math.sin(t * 13) * Math.sin(t * 4.7 + 1)) : .28, bw = r * .26, bh = r * .3 * ab;
    x.fillStyle = '#5a1020'; x.beginPath(); x.moveTo(-bw, r * .5); x.lineTo(bw, r * .5); x.ellipse(0, r * .5, bw, Math.max(r * .04, bh), 0, 0, Math.PI); x.closePath(); x.fill();
    x.fillStyle = '#ff6f8f'; x.beginPath(); x.ellipse(0, r * .5 + Math.max(r * .04, bh) * .62, bw * .55, Math.max(r * .02, bh) * .38, 0, 0, TAU); x.fill();
    x.restore();
    return [cx + r * .26, cy + sube + r * .5];   /* la comisura derecha de la boca, de donde sale el bocadillo */
  }
  function dice(x, o) {
    const t = o.t || 0, a = o.a == null ? 1 : o.a, h = o.h, r = h * .78, pop = Math.min(1, t / .22), esc = pop < 1 ? .6 + .4 * (1 - Math.pow(1 - pop, 3)) + Math.sin(pop * Math.PI) * .12 : 1;
    const habla = t < Math.min(3.2, .5 + String(o.texto).length * .045), cx = o.X + r * 1.05, cy = o.Y - h * .08;
    x.save(); x.globalAlpha *= a;
    /* el bocadillo: entra desde la boca */
    const bx = o.X + r * 2.35, bw = Math.max(40, o.W - r * 2.35), cre = Math.min(1, Math.max(0, (t - .08) / .2)), ww = bw * (.35 + .65 * cre);
    x.fillStyle = 'rgba(255,255,255,.96)'; x.strokeStyle = TINTA; x.lineWidth = Math.max(1.5, h * .045);
    x.beginPath(); x.roundRect(bx, o.Y - h / 2, ww, h, Math.min(16, h * .32)); x.fill(); x.stroke();
    /* el pico, de la boca al bocadillo (por detrás de la cara: parece que le sale de la boca) */
    const pb = [cx + r * .3 * esc, cy + r * .5 * esc]; x.fillStyle = 'rgba(255,255,255,.96)'; x.beginPath(); x.moveTo(bx + x.lineWidth, o.Y - h * .22); x.lineTo(pb[0] + r * .06, pb[1]); x.lineTo(bx + x.lineWidth, o.Y + h * .18); x.closePath(); x.fill();
    x.beginPath(); x.moveTo(bx, o.Y - h * .22); x.lineTo(pb[0] + r * .06, pb[1]); x.lineTo(bx, o.Y + h * .18); x.stroke();
    x.save(); x.translate(cx, cy); x.scale(esc, esc); x.translate(-cx, -cy); cabeza(x, cx, cy, r, t, habla); x.restore();
    if (cre > .6) { x.globalAlpha *= Math.min(1, (cre - .6) / .4); let z = o.fuente || h * .34; const fam = o.familia || 'system-ui,Segoe UI,Arial,sans-serif', mw = ww - h * .6; x.font = `600 ${z}px ${fam}`; while (x.measureText(o.texto).width > mw && z > 8) { z -= .5; x.font = `600 ${z}px ${fam}`; }
      x.fillStyle = '#1a1026'; x.textAlign = 'left'; x.textBaseline = 'middle'; x.fillText(o.texto, bx + h * .3, o.Y + 1); }
    x.restore();
  }
  window.MEVI2D = { dice, cabeza };
})();
