/* MSGAME · service worker del «modo feria»: guarda la app, las imágenes, las fuentes y las librerías para usarla sin internet */
const CACHE = 'msgame-feria-v1';
const CDN = /(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com|unpkg\.com|cdnjs\.cloudflare\.com)$/;
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
const put = (req, res) => caches.open(CACHE).then(c => c.put(req, res)).catch(() => {});
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url), same = u.origin === self.location.origin;
  if (!same && !CDN.test(u.hostname)) return;   // vídeos en línea, traducción y señalización del móvil: siempre por red
  if (same && (r.mode === 'navigate' || /\/$|\.html$/.test(u.pathname))) {   // la app: primero la red (para recibir actualizaciones) y, sin conexión, la copia guardada
    e.respondWith(fetch(r).then(res => { if (res.ok) put(r, res.clone()); return res; })
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match(new URL('./', self.registration.scope).href)).then(m => m || caches.match(new URL('index.html', self.registration.scope).href))));
    return;
  }
  // resto: la copia guardada al instante y se actualiza en segundo plano
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(res => { if (res && (res.ok || res.type === 'opaque')) put(r, res.clone()); return res; }); if (m) { net.catch(() => {}); return m; } return net; }));
});
self.addEventListener('message', e => {
  const d = e.data || {}, port = e.ports && e.ports[0]; if (d.t !== 'pre' || !Array.isArray(d.urls)) return;
  e.waitUntil((async () => {
    const c = await caches.open(CACHE); let ok = 0, done = 0; const urls = d.urls.slice(), n = urls.length;
    const one = async u => { try { const res = await fetch(u, { cache: 'reload', mode: new URL(u, self.location.href).origin === self.location.origin ? 'same-origin' : 'cors' }); if (!res.ok) return;
        if (/fonts\.googleapis\.com/.test(u)) { const css = await res.clone().text(); (css.match(/url\((https:[^)]+)\)/g) || []).forEach(m => urls.push(m.slice(4, -1))); }
        await c.put(u, res); ok++; } catch (x) {} };
    while (urls.length) { const batch = urls.splice(0, 6); await Promise.all(batch.map(one)); done += batch.length; if (port) port.postMessage({ t: 'prog', done, n: Math.max(n, done + urls.length), ok }); }
    if (port) port.postMessage({ t: 'fin', ok });
  })());
});
