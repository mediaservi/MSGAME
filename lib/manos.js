/* MSGAME · lib/manos.js · manos y cuerpo con la cámara (v18.39)
   MediaPipe Tasks Vision 1.2.3 (Google, Apache-2.0) alojado en lib/mediapipe: funciona sin internet (modo feria) y sin servidor.
   Todo se procesa en este equipo: ni la imagen ni los puntos salen de él.
   Lo usan el módulo GESTOS de la sala (index.html) y los juegos que van aparte (borradores/runas.html). */
import { FilesetResolver, HandLandmarker, PoseLandmarker } from './mediapipe/vision_bundle.mjs';

const BASE = new URL('./mediapipe/', import.meta.url).href;
let fileset = null;
const fs = () => fileset || (fileset = FilesetResolver.forVisionTasks(BASE + 'wasm'));

/* primero con la tarjeta gráfica (mucho más rápido); si el equipo no la deja, con el procesador */
async function crea(Cls, modelo, opts, solo) {
  const f = await fs(); let err = null;
  for (const delegate of solo ? [solo] : ['GPU', 'CPU']) {
    try { const det = await Cls.createFromOptions(f, Object.assign({ baseOptions: { modelAssetPath: BASE + modelo, delegate }, runningMode: 'VIDEO' }, opts)); return { det, delegate }; }
    catch (e) { err = e; }
  }
  throw err || new Error('MediaPipe');
}

/* el reloj de cada detector tiene que ir siempre hacia delante */
const reloj = () => { let u = 0; return t => (u = Math.max(u + 1, Math.round(t || performance.now()))); };

/* MANOS · hasta 4 (una por jugador). detecta() devuelve el mismo formato que el MediaPipe Hands antiguo: { multiHandLandmarks, multiHandedness } */
export async function manos(n = 2) {
  let num = Math.max(1, Math.min(4, n | 0));
  const { det, delegate } = await crea(HandLandmarker, 'hand_landmarker.task', { numHands: num, minHandDetectionConfidence: .5, minHandPresenceConfidence: .5, minTrackingConfidence: .4 });
  const ts = reloj();
  return {
    delegate,
    get num() { return num; },
    pon(k) { k = Math.max(1, Math.min(4, k | 0)); if (k !== num) { num = k; try { det.setOptions({ numHands: k }); } catch (e) {} } },
    detecta(video, t) { const r = det.detectForVideo(video, ts(t)); return { multiHandLandmarks: r.landmarks || [], multiHandedness: r.handedness || r.handednesses || [] }; },
    cierra() { try { det.close(); } catch (e) {} }
  };
}

/* CUERPO · 33 puntos por persona y, si se pide, la silueta (máscara) de cada una, reducida a mw × mh para pintarla barata */
export async function cuerpo({ n = 1, mascara = false, mw = 160, mh = 90, delegado = '' } = {}) {
  let num = Math.max(1, Math.min(4, n | 0));
  const { det, delegate } = await crea(PoseLandmarker, 'pose_landmarker_lite.task', { numPoses: num, outputSegmentationMasks: !!mascara, minPoseDetectionConfidence: .5, minPosePresenceConfidence: .5, minTrackingConfidence: .5 }, delegado);
  const ts = reloj();
  return {
    delegate,
    pon(k) { k = Math.max(1, Math.min(4, k | 0)); if (k !== num) { num = k; try { det.setOptions({ numPoses: k }); } catch (e) {} } },
    /* las máscaras solo valen dentro de la llamada: se copian reducidas aquí mismo (un Uint8Array por persona, 0–255) */
    detecta(video, t) {
      let out = { poses: [], poseLandmarks: null, mascaras: [] };
      det.detectForVideo(video, ts(t), r => {
        out.poses = r.landmarks || []; out.poseLandmarks = out.poses[0] || null;
        if (mascara && r.segmentationMasks) out.mascaras = r.segmentationMasks.map(m => reduce(m, mw, mh));
      });
      return out;
    },
    cierra() { try { det.close(); } catch (e) {} }
  };
}
function reduce(m, mw, mh) {
  const w = m.width, h = m.height, f = m.getAsFloat32Array(), o = new Uint8Array(mw * mh);
  for (let y = 0; y < mh; y++) { const sy = Math.min(h - 1, Math.floor((y + .5) * h / mh)) * w; for (let x = 0; x < mw; x++) o[y * mw + x] = Math.min(255, f[sy + Math.min(w - 1, Math.floor((x + .5) * w / mw))] * 255) | 0; }
  return o;
}

/* filtro One Euro (Casiez, Roussel y Vogel, CHI 2012): quieto, suave; deprisa, sin retraso */
export class UnEuro {
  constructor(minCut = 1.2, beta = .02, dCut = 1) { this.mc = minCut; this.b = beta; this.dc = dCut; this.x = null; this.dx = 0; this.t = 0; }
  static a(cut, dt) { const r = 2 * Math.PI * cut * dt; return r / (r + 1); }
  f(v, t) {
    if (this.x === null || !(t > this.t) || t - this.t > 400) { this.x = v; this.dx = 0; this.t = t; return v; }
    const dt = (t - this.t) / 1000; this.t = t;
    const d = (v - this.x) / dt; this.dx += UnEuro.a(this.dc, dt) * (d - this.dx);
    this.x += UnEuro.a(this.mc + this.b * Math.abs(this.dx), dt) * (v - this.x); return this.x;
  }
  reset() { this.x = null; }
}

/* pellizco (pulgar con índice), relativo al tamaño de la mano y con histéresis: se cierra por debajo de .33 y se abre por encima de .5 */
export function pellizco(L, asp, antes) {
  const tam = Math.hypot((L[0].x - L[9].x) * asp, L[0].y - L[9].y) || .1, r = Math.hypot((L[4].x - L[8].x) * asp, L[4].y - L[8].y) / tam;
  return antes ? r < .5 : r < .33;
}

export const CONEX_MANO = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [17, 18], [18, 19], [19, 20], [0, 17]];
