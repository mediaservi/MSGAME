/* MSGAME · silencio.js (v18.90) · GPL-3.0 · mediaservi.com
   Cuando la página deja de verse (pestaña en segundo plano, pantalla o proyector en reposo, app de la tele cerrada),
   se calla TODO al momento: se suspenden los contextos de audio y se pausan los <audio>/<video>, también los creados con new Audio().
   Mientras sigue sin verse, nada puede volver a sonar (un temporizador que cambie de pista queda en espera).
   Al volver a verse, suena otra vez solo lo que estaba sonando. Escrito en ES5 para cualquier navegador. */
(function () {
  if (window.__msSilencio) return; window.__msSilencio = true;
  var ctxs = [], medios = [], parados = [], ctxParados = [], espera = [];
  var oculto = function () { return document.visibilityState === 'hidden' || document.hidden === true; };
  var AC = window.AudioContext || window.webkitAudioContext;
  if (AC) {
    var W = function (a) { var c = arguments.length ? new AC(a) : new AC(); ctxs.push(c); return c; };
    W.prototype = AC.prototype; try { Object.setPrototypeOf(W, AC); } catch (e) {}
    window.AudioContext = W; if (window.webkitAudioContext) window.webkitAudioContext = W;
    var res = AC.prototype.resume;
    if (res) AC.prototype.resume = function () { var c = this; if (oculto()) { if (ctxParados.indexOf(c) < 0) ctxParados.push(c); return new Promise(function (ok, ko) { espera.push(function () { res.call(c).then(ok, ko); }); }); } return res.apply(c, arguments); };   /* v18.93 · oculta, la promesa espera a que la página se vea (nunca se resuelve en falso: un «reanuda hasta que suene» se quedaba dando vueltas sin fin) */
  }
  var HM = window.HTMLMediaElement && HTMLMediaElement.prototype, play = HM && HM.play;
  if (play) HM.play = function () {
    if (medios.indexOf(this) < 0) medios.push(this);
    if (oculto()) { var el = this; return new Promise(function (ok, ko) { espera.push(function () { try { var p = play.call(el); if (p && p.then) p.then(ok, ko); else ok(); } catch (e) { ko(e); } }); }); }
    return play.apply(this, arguments);
  };
  function calla() {
    for (var i = 0; i < ctxs.length; i++) { var c = ctxs[i]; try { if (c.state === 'running') { if (ctxParados.indexOf(c) < 0) ctxParados.push(c); c.suspend(); } } catch (e) {} }
    var todos = medios.slice(), dom = document.querySelectorAll ? document.querySelectorAll('audio,video') : [];
    for (var j = 0; j < dom.length; j++) if (todos.indexOf(dom[j]) < 0) todos.push(dom[j]);
    for (var k = 0; k < todos.length; k++) { var m = todos[k]; try { if (!m.paused) { if (parados.indexOf(m) < 0) parados.push(m); m.pause(); } } catch (e) {} }
  }
  function vuelve() {
    if (oculto()) return;
    var c = ctxParados; ctxParados = [];
    for (var i = 0; i < c.length; i++) { try { if (c[i].state === 'suspended' && res) res.call(c[i]).catch(function () {}); } catch (e) {} }
    var w = espera; espera = []; for (var j = 0; j < w.length; j++) { try { w[j](); } catch (e) {} }
    var p = parados; parados = [];
    for (var k = 0; k < p.length; k++) { try { var r = play.call(p[k]); if (r && r.catch) r.catch(function () {}); } catch (e) {} }
  }
  document.addEventListener('visibilitychange', function () { if (oculto()) calla(); else vuelve(); }, true);
  window.addEventListener('pagehide', calla, true);
  document.addEventListener('freeze', calla, true);
  window.addEventListener('pageshow', vuelve, true);
  window.MSSILENCIO = { calla: calla, vuelve: vuelve };
})();
