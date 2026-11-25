/* MEVILAND · plaza, tierras, salas, puertas y finales · MSGAME · mediaservi.com · GPL-3.0 */
'use strict';

/* ======================= TEXTOS (es / en / ca) ======================= */
Object.assign(TX, {
  es: {
    lema: 'EL PARQUE MÁGICO DE MEVI', cargando: 'Preparando el parque…', voz: 'Voz de Mevi',
    m0: 'FÁCIL', m0e: 'Paseo', m0d: '2 Llaves Estelares. Sin prisas: ideal para peques.',
    m1: 'MEDIO', m1e: 'Aventura', m1d: '3 Llaves Estelares y puertas trampa.',
    m2: 'DIFÍCIL', m2e: 'Leyenda', m2d: '4 Llaves, el doble de pruebas, mutaciones y un secreto…',
    pausa: 'PAUSA', sigue: 'Seguir', salir: 'Salir', otra: 'Otra vez', terminar: 'Terminar', puntos: 'PUNTOS',
    plaza: 'Plaza de Mevi', t_fantasia: 'Fantasía', t_absurdo: 'Absurdo', t_golosinas: 'Golosinas', t_feria: 'Feria',
    hola: '¡Hola! Soy Mevi. ¡Bienvenidos a MEVILAND, el parque más mágico del universo!',
    holaN: '¡Hola, {0}! Soy Mevi. ¡Bienvenidos a MEVILAND, el parque más mágico del universo!',
    objetivo: 'Para abrir el Gran Portal necesitamos {0} Llaves Estelares. Cada tierra guarda una.',
    comoElegir: 'Apuntad a un arco y mantened la mirilla encima para entrar… ¡o tocad!',
    otraTierra: '¿A qué tierra vamos ahora?', yaTenemos: '¡Esa llave ya es nuestra! Probemos otra tierra.',
    llaveDe: '¡Llave Estelar de {0}! Ya tenemos {1} de {2}.',
    portalAbre: '¡Todas las llaves! El Gran Portal se abre… ¡Apuntad al portal!', portalCerrado: 'El portal sigue cerrado: faltan {0} llaves.',
    entra_fantasia: 'Tierra de Fantasía: libros que vuelan, cristales que cantan y espejos traviesos.',
    entra_absurdo: 'Tierra del Absurdo: aquí nada tiene sentido… ¡y eso mola!',
    entra_golosinas: 'Tierra de Golosinas: ¡cuidado, que aquí todo se come!',
    entra_feria: '¡La Feria! Luces, música y emociones fuertes.',
    puertas: 'Dos puertas. ¿Cuál elegís? Apuntad a una y mantened.', unaPuerta: 'Solo queda una puerta. ¡Adelante!',
    trampa: '¡Puerta trampa! Era un armario lleno de confeti. Probad la otra.', trampaT: '¡PUERTA TRAMPA!',
    listos: '¿Listos?', ya: '¡YA!', bien: ['¡Genial!', '¡Muy bien!', '¡Toma ya!', '¡Qué crack!', '¡Increíble!', '¡Bravo!'],
    superado: '¡SUPERADO!', tiempo: '¡TIEMPO!',
    salaOk: '¡Prueba superada! Más puntos por el tiempo que ha sobrado.', salaCasi: '¡Casi! No pasa nada: la llave sigue esperándonos.',
    mutacion: '¡MUTACIÓN!', mutacionD: '¡Ojo! La sala ha mutado: ahora todo va más rápido.',
    pato: '¡Un patito astronauta! Dicen que si encontráis los cuatro pasa algo especial…', patoN: '¡Patito astronauta! Ya van {0} de 4.', patoB: '¡Patito astronauta! Puntos extra.',
    s_biblioteca: 'La Biblioteca Voladora', i_biblioteca: '¡Los libros se han escapado! Atrapad los que vuelan tocándolos. Los dorados valen el doble.', b_biblioteca: 'Libros atrapados',
    s_cristales: 'La Cueva de los Cristales', i_cristales: 'Tocad cada cristal justo cuando brille y sonará una canción.', b_cristales: 'Notas',
    s_espejos: 'La Sala de los Espejos', i_espejos: 'Una de las cuatro Mevis del espejo es una impostora. ¡Encontradla!', b_espejos: 'Impostoras',
    pista0: 'Pista: la impostora es de otro color.', pista1: 'Pista: la impostora se mueve distinto.', pista2: 'Fijaos bien: la impostora es casi igual…',
    pillada: '¡Pillada!',
    s_nevera: 'La Nevera Gigante', i_nevera: '¡El Señor Brócoli se ha quedado helado! Apuntad a los bloques de hielo y mantened para derretirlos.', b_nevera: 'Bloques derretidos',
    s_lavadora: 'La Lavadora Cósmica', i_lavadora: '¡Calcetines desparejados! Tocad solo los del color que os pida.', b_lavadora: 'Calcetines',
    s_sopa: 'La Sopa de Letras', i_sopa: 'El Chef Fantasma escribe con su sopa. Tocad las letras en orden.', b_sopa: 'Letras',
    s_caramelos: 'El Campo de Caramelos', i_caramelos: 'Mirad qué caramelos brillan y repetid la melodía en el mismo orden.', b_caramelos: 'Melodías',
    s_rio: 'El Río de Chocolate', i_rio: 'Pescad los caramelos del color que os diga. ¡Los demás, que naden!', b_rio: 'Caramelos',
    s_montana: 'La Montaña Rusa Estelar', i_montana: '¡Subid a la vagoneta! Tocad las estrellas para cargar la energía.', b_montana: 'Energía',
    s_carrusel: 'El Carrusel Encantado', i_carrusel: 'El Maestro esconde la llave en un caballito. ¡No le quitéis el ojo!', b_carrusel: 'Aciertos',
    mira: '¡Mirad dónde está la llave!', donde: '¿Dónde está la llave?', simonMira: 'Mirad y escuchad…', simonTu: '¡Os toca!', simonMal: '¡Uy! Os la repito.',
    ahora: '¡Ahora, {0}!', cols: ['rojo', 'amarillo', 'verde', 'azul', 'morado', 'rosa'],
    palabras: ['MEVI', 'SOPA', 'LUNA', 'PATO', 'RISA', 'MAGIA', 'FERIA', 'NUBE'],
    f_desfile: '¡GRAN DESFILE!', fd_desfile: 'Con dos Llaves Estelares el Gran Portal se abre y todo MEVILAND sale a celebrarlo con vosotros.',
    f_guardianes: '¡GUARDIANES DE LAS ESTRELLAS!', fd_guardianes: 'Tres llaves, tres tierras salvadas. Desde hoy sois Guardianes de las Estrellas de MEVILAND.',
    f_copa: '¡LA COPA DE ORO!', fd_copa: 'Las cuatro Llaves Estelares… ¡sois leyenda! La Copa de Oro de MEVILAND es vuestra.',
    f_bola: 'FINAL SECRETO: LA BOLA DE NIEVE', fd_bola: 'Con los cuatro patitos astronautas descubrís el gran secreto: MEVILAND entera cabe en una bola de nieve… ¡y ahora es vuestra!',
    fin_desfile: '¡A desfilar! ¡Gracias por visitar MEVILAND!', fin_guardianes: 'Los guardianes os entregan sus estrellas. ¡Sois de la familia!',
    fin_copa: '¡La Copa de Oro! Nadie había llegado tan lejos.', fin_bola: 'Esperad… ¿y si todo el parque fuera… una bola de nieve?',
    dPuntos: 'Puntos', dLlaves: 'Llaves Estelares', dSalas: 'Pruebas superadas', dPatos: 'Patitos astronautas', dTiempo: 'Tiempo de visita'
  },
  en: {
    lema: "MEVI'S MAGIC PARK", cargando: 'Getting the park ready…', voz: "Mevi's voice",
    m0: 'EASY', m0e: 'Stroll', m0d: '2 Star Keys. No rush: perfect for little ones.',
    m1: 'MEDIUM', m1e: 'Adventure', m1d: '3 Star Keys and trap doors.',
    m2: 'HARD', m2e: 'Legend', m2d: '4 Keys, twice the challenges, mutations and a secret…',
    pausa: 'PAUSED', sigue: 'Resume', salir: 'Quit', otra: 'Play again', terminar: 'Finish', puntos: 'POINTS',
    plaza: "Mevi's Square", t_fantasia: 'Fantasy', t_absurdo: 'Nonsense', t_golosinas: 'Candy', t_feria: 'Funfair',
    hola: "Hi! I'm Mevi. Welcome to MEVILAND, the most magical park in the universe!",
    holaN: "Hi, {0}! I'm Mevi. Welcome to MEVILAND, the most magical park in the universe!",
    objetivo: 'To open the Great Portal we need {0} Star Keys. Each land keeps one.',
    comoElegir: 'Aim at an arch and hold the sight on it to go in… or just tap!',
    otraTierra: 'Which land shall we visit now?', yaTenemos: 'That key is already ours! Let\'s try another land.',
    llaveDe: '{0} Star Key! We have {1} of {2}.',
    portalAbre: 'All the keys! The Great Portal is opening… Aim at the portal!', portalCerrado: 'The portal is still locked: {0} keys to go.',
    entra_fantasia: 'Fantasy Land: flying books, singing crystals and mischievous mirrors.',
    entra_absurdo: 'Nonsense Land: nothing makes sense here… and that\'s awesome!',
    entra_golosinas: 'Candy Land: careful, everything here is edible!',
    entra_feria: 'The Funfair! Lights, music and big thrills.',
    puertas: 'Two doors. Which one? Aim at one and hold.', unaPuerta: 'Only one door left. Let\'s go!',
    trampa: 'A trap door! Just a cupboard full of confetti. Try the other one.', trampaT: 'TRAP DOOR!',
    listos: 'Ready?', ya: 'GO!', bien: ['Great!', 'Well done!', 'Yes!', 'Superstar!', 'Amazing!', 'Bravo!'],
    superado: 'CLEARED!', tiempo: 'TIME!',
    salaOk: 'Challenge cleared! Extra points for the time left.', salaCasi: 'So close! Never mind: the key is still waiting for us.',
    mutacion: 'MUTATION!', mutacionD: 'Watch out! The room has mutated: everything is faster now.',
    pato: 'A little astronaut duck! They say if you find all four, something special happens…', patoN: 'Astronaut duck! {0} of 4.', patoB: 'Astronaut duck! Bonus points.',
    s_biblioteca: 'The Flying Library', i_biblioteca: 'The books have escaped! Tap the flying ones to catch them. Golden books count double.', b_biblioteca: 'Books caught',
    s_cristales: 'The Crystal Cave', i_cristales: 'Tap each crystal right when it glows and a song will play.', b_cristales: 'Notes',
    s_espejos: 'The Hall of Mirrors', i_espejos: 'One of the four Mevis in the mirrors is an impostor. Find her!', b_espejos: 'Impostors',
    pista0: 'Hint: the impostor is a different colour.', pista1: 'Hint: the impostor moves differently.', pista2: 'Look closely: the impostor is almost the same…',
    pillada: 'Gotcha!',
    s_nevera: 'The Giant Fridge', i_nevera: 'Mr Broccoli is frozen! Aim at the ice blocks and hold to melt them.', b_nevera: 'Blocks melted',
    s_lavadora: 'The Cosmic Washing Machine', i_lavadora: 'Odd socks everywhere! Tap only the colour I call.', b_lavadora: 'Socks',
    s_sopa: 'The Alphabet Soup', i_sopa: 'The Ghost Chef writes with his soup. Tap the letters in order.', b_sopa: 'Letters',
    s_caramelos: 'The Sweet Field', i_caramelos: 'Watch which sweets glow and repeat the tune in the same order.', b_caramelos: 'Tunes',
    s_rio: 'The Chocolate River', i_rio: 'Fish out the sweets of the colour I call. Let the others swim!', b_rio: 'Sweets',
    s_montana: 'The Star Coaster', i_montana: 'All aboard! Tap the stars to charge up the energy.', b_montana: 'Energy',
    s_carrusel: 'The Enchanted Carousel', i_carrusel: 'The Ringmaster hides the key on a little horse. Keep your eyes on it!', b_carrusel: 'Right guesses',
    mira: 'Watch where the key is!', donde: 'Where is the key?', simonMira: 'Look and listen…', simonTu: 'Your turn!', simonMal: 'Oops! Here it is again.',
    ahora: 'Now, {0}!', cols: ['red', 'yellow', 'green', 'blue', 'purple', 'pink'],
    palabras: ['MEVI', 'SOUP', 'MOON', 'DUCK', 'STAR', 'MAGIC', 'FAIR', 'CLOUD'],
    f_desfile: 'GRAND PARADE!', fd_desfile: 'With two Star Keys the Great Portal opens and all of MEVILAND comes out to celebrate with you.',
    f_guardianes: 'GUARDIANS OF THE STARS!', fd_guardianes: 'Three keys, three lands saved. From today you are MEVILAND\'s Guardians of the Stars.',
    f_copa: 'THE GOLDEN CUP!', fd_copa: 'All four Star Keys… you are legends! MEVILAND\'s Golden Cup is yours.',
    f_bola: 'SECRET ENDING: THE SNOW GLOBE', fd_bola: 'With the four astronaut ducks you find the great secret: all of MEVILAND fits inside a snow globe… and now it\'s yours!',
    fin_desfile: 'Parade time! Thanks for visiting MEVILAND!', fin_guardianes: 'The guardians hand you their stars. You\'re family now!',
    fin_copa: 'The Golden Cup! Nobody had ever got this far.', fin_bola: 'Wait… what if the whole park were… a snow globe?',
    dPuntos: 'Points', dLlaves: 'Star Keys', dSalas: 'Challenges cleared', dPatos: 'Astronaut ducks', dTiempo: 'Visit time'
  },
  ca: {
    lema: 'EL PARC MÀGIC DE LA MEVI', cargando: 'Preparant el parc…', voz: 'Veu de la Mevi',
    m0: 'FÀCIL', m0e: 'Passeig', m0d: '2 Claus Estel·lars. Sense presses: ideal per als petits.',
    m1: 'MITJÀ', m1e: 'Aventura', m1d: '3 Claus Estel·lars i portes trampa.',
    m2: 'DIFÍCIL', m2e: 'Llegenda', m2d: '4 Claus, el doble de proves, mutacions i un secret…',
    pausa: 'PAUSA', sigue: 'Continuar', salir: 'Sortir', otra: 'Una altra', terminar: 'Acabar', puntos: 'PUNTS',
    plaza: 'Plaça de la Mevi', t_fantasia: 'Fantasia', t_absurdo: 'Absurd', t_golosinas: 'Llaminadures', t_feria: 'Fira',
    hola: 'Hola! Soc la Mevi. Benvinguts a MEVILAND, el parc més màgic de l\'univers!',
    holaN: 'Hola, {0}! Soc la Mevi. Benvinguts a MEVILAND, el parc més màgic de l\'univers!',
    objetivo: 'Per obrir el Gran Portal necessitem {0} Claus Estel·lars. Cada terra en guarda una.',
    comoElegir: 'Apunteu a un arc i mantingueu-hi el punt de mira per entrar… o toqueu!',
    otraTierra: 'A quina terra anem ara?', yaTenemos: 'Aquesta clau ja és nostra! Provem una altra terra.',
    llaveDe: 'Clau Estel·lar de {0}! Ja en tenim {1} de {2}.',
    portalAbre: 'Totes les claus! El Gran Portal s\'obre… Apunteu al portal!', portalCerrado: 'El portal encara és tancat: falten {0} claus.',
    entra_fantasia: 'Terra de Fantasia: llibres que volen, cristalls que canten i miralls entremaliats.',
    entra_absurdo: 'Terra de l\'Absurd: aquí res no té sentit… i això mola!',
    entra_golosinas: 'Terra de Llaminadures: compte, que aquí tot es menja!',
    entra_feria: 'La Fira! Llums, música i emocions fortes.',
    puertas: 'Dues portes. Quina trieu? Apunteu-ne una i mantingueu.', unaPuerta: 'Només queda una porta. Endavant!',
    trampa: 'Porta trampa! Era un armari ple de confeti. Proveu l\'altra.', trampaT: 'PORTA TRAMPA!',
    listos: 'Preparats?', ya: 'JA!', bien: ['Genial!', 'Molt bé!', 'Som-hi!', 'Quin crac!', 'Increïble!', 'Bravo!'],
    superado: 'SUPERAT!', tiempo: 'TEMPS!',
    salaOk: 'Prova superada! Més punts pel temps que ha sobrat.', salaCasi: 'Gairebé! No passa res: la clau encara ens espera.',
    mutacion: 'MUTACIÓ!', mutacionD: 'Compte! La sala ha mutat: ara tot va més de pressa.',
    pato: 'Un aneguet astronauta! Diuen que si en trobeu quatre passa una cosa especial…', patoN: 'Aneguet astronauta! Ja en van {0} de 4.', patoB: 'Aneguet astronauta! Punts extra.',
    s_biblioteca: 'La Biblioteca Voladora', i_biblioteca: 'Els llibres s\'han escapat! Atrapeu els que volen tocant-los. Els daurats valen el doble.', b_biblioteca: 'Llibres atrapats',
    s_cristales: 'La Cova dels Cristalls', i_cristales: 'Toqueu cada cristall just quan brilli i sonarà una cançó.', b_cristales: 'Notes',
    s_espejos: 'La Sala dels Miralls', i_espejos: 'Una de les quatre Mevis del mirall és una impostora. Trobeu-la!', b_espejos: 'Impostores',
    pista0: 'Pista: la impostora és d\'un altre color.', pista1: 'Pista: la impostora es mou diferent.', pista2: 'Fixeu-vos bé: la impostora és gairebé igual…',
    pillada: 'Enxampada!',
    s_nevera: 'La Nevera Gegant', i_nevera: 'El Senyor Bròquil s\'ha quedat glaçat! Apunteu als blocs de gel i mantingueu per fondre\'ls.', b_nevera: 'Blocs fosos',
    s_lavadora: 'La Rentadora Còsmica', i_lavadora: 'Mitjons desaparellats! Toqueu només els del color que us demani.', b_lavadora: 'Mitjons',
    s_sopa: 'La Sopa de Lletres', i_sopa: 'El Xef Fantasma escriu amb la seva sopa. Toqueu les lletres en ordre.', b_sopa: 'Lletres',
    s_caramelos: 'El Camp de Caramels', i_caramelos: 'Mireu quins caramels brillen i repetiu la melodia en el mateix ordre.', b_caramelos: 'Melodies',
    s_rio: 'El Riu de Xocolata', i_rio: 'Pesqueu els caramels del color que us digui. Els altres, que nedin!', b_rio: 'Caramels',
    s_montana: 'La Muntanya Russa Estel·lar', i_montana: 'Pugeu a la vagoneta! Toqueu les estrelles per carregar l\'energia.', b_montana: 'Energia',
    s_carrusel: 'El Cavallet Encantat', i_carrusel: 'El Mestre amaga la clau en un cavallet. No el perdeu de vista!', b_carrusel: 'Encerts',
    mira: 'Mireu on és la clau!', donde: 'On és la clau?', simonMira: 'Mireu i escolteu…', simonTu: 'Us toca!', simonMal: 'Ui! Us la repeteixo.',
    ahora: 'Ara, {0}!', cols: ['vermell', 'groc', 'verd', 'blau', 'lila', 'rosa'],
    palabras: ['MEVI', 'SOPA', 'LLUNA', 'ESTEL', 'FESTA', 'MAGIA', 'FIRA', 'NUVOL'],
    f_desfile: 'GRAN DESFILADA!', fd_desfile: 'Amb dues Claus Estel·lars el Gran Portal s\'obre i tot MEVILAND surt a celebrar-ho amb vosaltres.',
    f_guardianes: 'GUARDIANS DE LES ESTRELLES!', fd_guardianes: 'Tres claus, tres terres salvades. Des d\'avui sou Guardians de les Estrelles de MEVILAND.',
    f_copa: 'LA COPA D\'OR!', fd_copa: 'Les quatre Claus Estel·lars… sou llegenda! La Copa d\'Or de MEVILAND és vostra.',
    f_bola: 'FINAL SECRET: LA BOLA DE NEU', fd_bola: 'Amb els quatre aneguets astronautes descobriu el gran secret: tot MEVILAND cap en una bola de neu… i ara és vostra!',
    fin_desfile: 'A desfilar! Gràcies per visitar MEVILAND!', fin_guardianes: 'Els guardians us donen les seves estrelles. Ja sou de la família!',
    fin_copa: 'La Copa d\'Or! Ningú no havia arribat tan lluny.', fin_bola: 'Espereu… i si tot el parc fos… una bola de neu?',
    dPuntos: 'Punts', dLlaves: 'Claus Estel·lars', dSalas: 'Proves superades', dPatos: 'Aneguets astronautes', dTiempo: 'Temps de visita'
  }
});
const tA = k => (TX[LG] && TX[LG][k]) || TX.es[k];

/* ======================= ESTADO DEL PARQUE ======================= */
const TIERRAS = {
  fantasia: { salas: ['biblioteca', 'cristales', 'espejos'], col: '#b98bff', guard: 'buho', mus: 'fantasia' },
  absurdo: { salas: ['nevera', 'lavadora', 'sopa'], col: '#38e0cf', guard: 'brocoli', mus: 'absurdo' },
  golosinas: { salas: ['caramelos', 'rio'], col: '#ff72c6', guard: 'gusano', mus: 'golosinas' },
  feria: { salas: ['montana', 'carrusel'], col: '#ffb43a', guard: 'maestro', mus: 'feria' }
};
const ORDEN_T = ['fantasia', 'absurdo', 'golosinas', 'feria'];
const PAL = ['#ff3b4f', '#ffd23f', '#35d46a', '#3b8cff', '#a65cff', '#ff7ad1'];
const BOT = /[?&]bot=1/.test(location.search), RAPIDO = /[?&]rapido=1/.test(location.search);
const J = { modo: 1, llaves: [], pts: 0, combo: 0, patos: 0, salasOk: 0, salasN: 0, tierra: null, cola: [], patoEn: {}, nombres: [], t0: 0, fase: 'carga', primera: true };
const necesarias = () => J.modo + 2;
const salasPorTierra = () => J.modo === 2 ? 2 : 1;

/* ======================= ESCENA ======================= */
const MU = { g: null, tt: 0, cam: { p: new T.Vector3(0, 1.7, 9), m: new T.Vector3(0, 2, -6) }, cp: new T.Vector3(0, 1.7, 9), cm: new T.Vector3(0, 2, -6), mira: .16, libre: false, upd: null, anim: [], mx: [], sel: null, viaje: null };
function lz(w, h, f, rep) { const tx = lienzo(w, h, f, rep); tx.userData.tmp = true; return tx; }
function tira(g) { g.traverse(o => { if (o.geometry && !o.geometry.userData.mod) o.geometry.dispose(); const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []; ms.forEach(m => { ['map', 'emissiveMap', 'alphaMap'].forEach(k => { if (m[k] && m[k].userData && m[k].userData.tmp) m[k].dispose(); }); m.dispose(); }); }); }
function nuevaEscena(f) {
  if (MU.g) { ESC.remove(MU.g); tira(MU.g); }
  MU.g = new T.Group(); ESC.add(MU.g); MU.upd = null; MU.anim = []; MU.mx = []; MU.sel = null; MU.libre = false; MU.viaje = null; MU.mira = .16; ESC.fog = null;
  f(MU.g); MU.cp.copy(MU.cam.p); MU.cm.copy(MU.cam.m);
}
const anim = f => MU.anim.push(f);
function pon(g, k, h, x, y, z, o) { const p = pieza(k, h, o); p.position.set(x, y, z); if (o && o.ry !== undefined) p.rotation.y = o.ry; g.add(p); if (p.userData.mx) MU.mx.push(p.userData.mx); return p; }
function transicion(f, col) { const v = $('velo'); v.style.background = col || '#fff'; v.style.opacity = '1'; setTimeout(() => { f(); setTimeout(() => { v.style.opacity = '0'; }, 120); }, 470); }
function viaje(p, m, dur, f) { MU.viaje = { p0: MU.cp.clone(), m0: MU.cm.clone(), p1: p.clone(), m1: m.clone(), t: 0, dur, f }; }
/* geometría básica */
const caja = (w, h, d, m) => new T.Mesh(new T.BoxGeometry(w, h, d), m);
const bola = (r, m, s) => new T.Mesh(new T.SphereGeometry(r, s || 24, Math.max(8, (s || 24) >> 1)), m);
const cil = (r1, r2, h, m, s, abierto) => new T.Mesh(new T.CylinderGeometry(r1, r2, h, s || 24, 1, !!abierto), m);
function sombra(o, c, r) { o.traverse(x => { if (x.isMesh) { x.castShadow = c !== false; x.receiveShadow = r !== false; } }); return o; }
function cartel(txt, w, col, fondo, alto) {
  const a = alto || .28, tx = lz(512, Math.round(512 * a), (q, W2, H2) => { if (fondo) { q.fillStyle = fondo; rr(q, 6, 6, W2 - 12, H2 - 12, H2 * .3); q.fill(); q.lineWidth = 8; q.strokeStyle = 'rgba(255,255,255,.85)'; q.stroke(); }
    q.font = `${Math.round(H2 * .62)}px LG`; q.textAlign = 'center'; q.textBaseline = 'middle'; q.lineWidth = H2 * .12; q.strokeStyle = '#2a0b4a'; q.strokeText(txt, W2 / 2, H2 * .54); q.fillStyle = col || '#fff'; q.fillText(txt, W2 / 2, H2 * .54); });
  const m = new T.Mesh(new T.PlaneGeometry(w, w * a), new T.MeshBasicMaterial({ map: tx, transparent: true, depthWrite: false })); return m;
}
function rr(q, x, y, w, h, r) { q.beginPath(); q.moveTo(x + r, y); q.arcTo(x + w, y, x + w, y + h, r); q.arcTo(x + w, y + h, x, y + h, r); q.arcTo(x, y + h, x, y, r); q.arcTo(x, y, x + w, y, r); q.closePath(); }
function brillo(col, s, op) { const sp = new T.Sprite(new T.SpriteMaterial({ map: TEX.chispa, color: col, transparent: true, depthWrite: false, blending: T.AdditiveBlending, opacity: op === undefined ? .8 : op })); sp.scale.set(s, s, 1); return sp; }

/* ---------- entornos de cada tierra ---------- */
const ENV = {};
function cielo(g, cols, estrellas) {
  const tx = lz(4, 512, (q, w, h) => { const gr = q.createLinearGradient(0, 0, 0, h); cols.forEach((c, i) => gr.addColorStop(i / (cols.length - 1), c)); q.fillStyle = gr; q.fillRect(0, 0, w, h); });
  const m = new T.Mesh(new T.SphereGeometry(190, 32, 16), new T.MeshBasicMaterial({ map: tx, side: T.BackSide, fog: false, depthWrite: false })); g.add(m);
  if (estrellas) { const n = estrellas, pos = new Float32Array(n * 3); for (let i = 0; i < n; i++) { const a = rnd(0, Math.PI * 2), e = rnd(.08, 1.4), r = 170; pos[i * 3] = Math.cos(a) * Math.cos(e) * r; pos[i * 3 + 1] = Math.sin(e) * r; pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * r; }
    const ge = new T.BufferGeometry(); ge.setAttribute('position', new T.BufferAttribute(pos, 3)); const pm = new T.PointsMaterial({ map: TEX.chispa, size: 2.6, transparent: true, depthWrite: false, blending: T.AdditiveBlending, color: '#fff7d6', fog: false }); const pts = new T.Points(ge, pm); g.add(pts); anim((dt, tt) => { pm.opacity = .65 + Math.sin(tt * 1.7) * .25; pts.rotation.y += dt * .004; }); }
}
function luces(g, o) {
  g.add(new T.HemisphereLight(o.cielo, o.suelo, (o.hi || 1.1) * .6)); g.add(new T.AmbientLight(o.amb || '#ffffff', (o.ai || .15) * .6));
  const d = new T.DirectionalLight(o.sol || '#fff4e0', o.si || 1.7); d.position.set(o.dx || 7, 14, o.dz || 9); d.castShadow = !LITE;
  d.shadow.mapSize.set(LITE ? 512 : 2048, LITE ? 512 : 2048); const c = d.shadow.camera; c.left = -20; c.right = 20; c.top = 20; c.bottom = -20; c.near = 1; c.far = 60; d.shadow.bias = -.0004; d.shadow.normalBias = .03; g.add(d); g.add(d.target);
  if (!ENV[o.env]) ENV[o.env] = entorno(o.cielo, o.suelo, o.sol); ESC.environment = ENV[o.env];
}
function suelo(g, tx, r, col) { const m = new T.Mesh(new T.CircleGeometry(r || 70, 64), mat(col || '#ffffff', { map: tx, roughness: .9 })); m.rotation.x = -Math.PI / 2; m.receiveShadow = true; g.add(m); return m; }
/* decorados */
function piruleta(g, x, z, h, c1, c2) {
  const p = new T.Group(); const palo = cil(.05, .05, h, mat('#fffdf5', { roughness: .4 }), 10); palo.position.y = h / 2; p.add(palo);
  const tx = lz(256, 256, (q, w) => { q.fillStyle = c1; q.fillRect(0, 0, w, w); q.strokeStyle = c2; q.lineWidth = 22; q.beginPath(); for (let a = 0; a < 26; a += .05) { const r = a * 4.6; q.lineTo(w / 2 + Math.cos(a) * r, w / 2 + Math.sin(a) * r); } q.stroke(); });
  const d = cil(h * .26, h * .26, h * .07, mat('#fff', { map: tx, roughness: .25 }), 32); d.rotation.x = Math.PI / 2; d.position.y = h; p.add(d);
  p.position.set(x, 0, z); p.rotation.y = rnd(-.4, .4); sombra(p); g.add(p); anim((dt, tt) => { d.rotation.y = Math.sin(tt * .8 + x) * .15; }); return p;
}
function baston(g, x, z, h, rot) { const cv = new T.CatmullRomCurve3([new T.Vector3(0, 0, 0), new T.Vector3(0, h * .75, 0), new T.Vector3(0, h * .95, 0), new T.Vector3(h * .12, h * 1.04, 0), new T.Vector3(h * .24, h * .95, 0), new T.Vector3(h * .26, h * .82, 0)]);
  const tx = lz(64, 512, (q, w, hh) => { q.fillStyle = '#fff'; q.fillRect(0, 0, w, hh); q.fillStyle = '#ff2d55'; for (let y = -64; y < hh + 64; y += 64) { q.beginPath(); q.moveTo(0, y); q.lineTo(w, y + 40); q.lineTo(w, y + 66); q.lineTo(0, y + 26); q.fill(); } }, [1, 5]);
  const m = new T.Mesh(new T.TubeGeometry(cv, 40, h * .045, 12), mat('#fff', { map: tx, roughness: .25 })); m.position.set(x, 0, z); m.rotation.y = rot || 0; sombra(m); g.add(m); return m; }
function arbolAlgodon(g, x, z, s, col) { const p = new T.Group(); const tr = cil(.12 * s, .16 * s, 1.6 * s, mat('#f7e2c8'), 10); tr.position.y = .8 * s; p.add(tr); const mm = mat(col, { roughness: .95 });
  [[0, 2.1, 0, 1], [.55, 1.85, .2, .7], [-.5, 1.9, -.1, .75], [.1, 2.55, -.2, .7], [-.2, 1.75, .5, .6]].forEach(([a, b, c, r]) => { const sp = bola(r * s, mm, 18); sp.position.set(a * s, b * s, c * s); p.add(sp); });
  p.position.set(x, 0, z); sombra(p); g.add(p); return p; }
function nube(g, x, y, z, s, col) { const sp = new T.Sprite(new T.SpriteMaterial({ map: TEX.nube, color: col || '#ffffff', transparent: true, depthWrite: false, opacity: .95, fog: false })); sp.scale.set(s * 2.4, s * 1.2, 1); sp.position.set(x, y, z); g.add(sp); const v = rnd(.15, .4); anim(dt => { sp.position.x += v * dt; if (sp.position.x > 70) sp.position.x = -70; }); return sp; }
function globo(g, x, y, z, col) { const p = new T.Group(); const b = bola(.38, mat(col, { roughness: .2, metalness: .05 }), 20); b.scale.y = 1.18; p.add(b); const hilo = cil(.006, .006, 1.4, matB('#ffffff'), 4); hilo.position.y = -1.1; p.add(hilo); p.position.set(x, y, z); g.add(p); const f = rnd(0, 6); anim((dt, tt) => { p.position.y = y + Math.sin(tt * .9 + f) * .25; p.rotation.z = Math.sin(tt * .7 + f) * .12; }); return p; }
function guirnalda(g, a, b, n, colores, caida) {
  const ms = []; for (let i = 0; i <= n; i++) { const k = i / n, p = a.clone().lerp(b, k); p.y -= Math.sin(k * Math.PI) * (caida || .8); const c = colores[i % colores.length], m = new T.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: .8, roughness: .3 }); const s = bola(.09, m, 10); s.position.copy(p); g.add(s); ms.push(m); }
  const pts = []; for (let i = 0; i <= 24; i++) { const k = i / 24, p = a.clone().lerp(b, k); p.y -= Math.sin(k * Math.PI) * (caida || .8) - .06; pts.push(p); } const cab = new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts), 24, .012, 4), matB('#2a1b3a')); g.add(cab);
  anim((dt, tt) => { const p = pulso(); ms.forEach((m, i) => { m.emissiveIntensity = .5 + ((i + Math.floor(tt * 3)) % 3 === 0 ? 1.4 : .3) * (.6 + p * .6); }); });
}
function banderines(g, a, b, n) { const cs = ['#ff4fb4', '#ffd23f', '#56d7ff', '#7dff9a', '#b26bff']; for (let i = 0; i < n; i++) { const k = (i + .5) / n, p = a.clone().lerp(b, k); p.y -= Math.sin(k * Math.PI) * .6; const tri = new T.Mesh(new T.ConeGeometry(.22, .42, 3), mat(cs[i % cs.length], { side: T.DoubleSide })); tri.rotation.z = Math.PI; tri.scale.z = .15; tri.position.copy(p); tri.position.y -= .22; tri.lookAt(p.x, p.y - .22, p.z + 10); tri.rotation.z = Math.PI; g.add(tri); } }
function carpa(g, x, z, s, c1) {
  const p = new T.Group(); const tx = lz(512, 64, (q, w, h) => { for (let i = 0; i < 16; i++) { q.fillStyle = i % 2 ? '#ffffff' : c1; q.fillRect(i * w / 16, 0, w / 16, h); } });
  const base = cil(1.6 * s, 1.6 * s, 1.8 * s, mat('#fff', { map: tx, roughness: .7 }), 32); base.position.y = .9 * s; p.add(base);
  const tech = new T.Mesh(new T.ConeGeometry(1.9 * s, 1.5 * s, 32), mat('#fff', { map: tx, roughness: .7 })); tech.position.y = 2.55 * s; p.add(tech);
  const ban = new T.Mesh(new T.ConeGeometry(.12 * s, .4 * s, 3), mat('#ffd23f')); ban.position.y = 3.45 * s; p.add(ban); p.position.set(x, 0, z); sombra(p); g.add(p); return p;
}
function noria(g, x, y, z, r) {
  const p = new T.Group(), rueda = new T.Group(); p.add(rueda); const mm = mat('#ffffff', { metalness: .3, roughness: .35 });
  const aro = new T.Mesh(new T.TorusGeometry(r, .12, 8, 64), mm); rueda.add(aro); const aro2 = aro.clone(); aro2.scale.setScalar(.6); rueda.add(aro2);
  const cols = ['#ff4fb4', '#ffd23f', '#56d7ff', '#7dff9a', '#b26bff', '#ff8a3c']; const cab = [];
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; const rad = caja(.06, r, .06, mm); rad.position.set(Math.cos(a) * r / 2, Math.sin(a) * r / 2, 0); rad.rotation.z = a - Math.PI / 2; rueda.add(rad);
    const b = bola(.12, new T.MeshBasicMaterial({ color: cols[i % 6] }), 8); b.position.set(Math.cos(a) * r, Math.sin(a) * r, .1); rueda.add(b);
    const c = caja(.7, .55, .55, mat(cols[i % 6], { roughness: .4 })); c.position.set(Math.cos(a) * r, Math.sin(a) * r - .4, 0); rueda.add(c); cab.push(c); }
  const pata = cil(.12, .2, y + .4, mm, 8); pata.position.set(-r * .45, -(y) / 2, -.6); pata.rotation.z = -.42; p.add(pata); const pata2 = pata.clone(); pata2.position.x = r * .45; pata2.rotation.z = .42; p.add(pata2);
  p.position.set(x, y, z); g.add(p); anim(dt => { rueda.rotation.z += dt * .12; cab.forEach(c => { c.rotation.z = -rueda.rotation.z; }); }); return p;
}
function flotantes(g, n, cols, zona) { for (let i = 0; i < n; i++) { const tipo = ri(4), m = mat(cols[ri(cols.length)], { roughness: .35 }); const o = tipo === 0 ? caja(.6, .6, .6, m) : tipo === 1 ? new T.Mesh(new T.ConeGeometry(.4, .8, 5), m) : tipo === 2 ? new T.Mesh(new T.TorusGeometry(.35, .13, 8, 20), m) : new T.Mesh(new T.OctahedronGeometry(.45), m);
  o.position.set(rnd(-zona, zona), rnd(4, 11), rnd(-zona - 10, -6)); g.add(o); const v = new T.Vector3(rnd(-.6, .6), rnd(-.6, .6), rnd(-.6, .6)), y0 = o.position.y, f = rnd(0, 6); anim((dt, tt) => { o.rotation.x += v.x * dt; o.rotation.y += v.y * dt; o.position.y = y0 + Math.sin(tt * .6 + f) * .5; }); } }
function chispasAmbiente(g, n, col, zona) { const pos = new Float32Array(n * 3), v = []; for (let i = 0; i < n; i++) { pos[i * 3] = rnd(-zona, zona); pos[i * 3 + 1] = rnd(.3, 7); pos[i * 3 + 2] = rnd(-zona - 6, 6); v.push(rnd(.1, .4)); }
  const ge = new T.BufferGeometry(); ge.setAttribute('position', new T.BufferAttribute(pos, 3)); const pm = new T.PointsMaterial({ map: TEX.chispa, size: .32, color: col, transparent: true, depthWrite: false, blending: T.AdditiveBlending }); g.add(new T.Points(ge, pm));
  anim((dt, tt) => { for (let i = 0; i < n; i++) { pos[i * 3 + 1] += v[i] * dt; pos[i * 3] += Math.sin(tt + i) * dt * .15; if (pos[i * 3 + 1] > 7.5) pos[i * 3 + 1] = .2; } ge.attributes.position.needsUpdate = true; pm.opacity = .6 + pulso() * .4; }); }

const TXS = {};   /* texturas de suelo (se crean una vez) */
function txSuelo(k) {
  if (TXS[k]) return TXS[k]; let tx;
  if (k === 'cesped') tx = lienzo(256, 256, (q, w) => { q.fillStyle = '#4fae4a'; q.fillRect(0, 0, w, w); for (let i = 0; i < 1600; i++) { q.fillStyle = `rgba(${rnd(20, 120) | 0},${rnd(120, 200) | 0},${rnd(30, 80) | 0},.55)`; q.fillRect(rnd(0, w), rnd(0, w), 2, rnd(4, 9)); } for (let i = 0; i < 30; i++) { q.fillStyle = ['#ffffff', '#ffd23f', '#ff7ad1'][ri(3)]; q.beginPath(); q.arc(rnd(0, w), rnd(0, w), 2.5, 0, 7); q.fill(); } }, [26, 26]);
  if (k === 'plaza') tx = lienzo(1024, 1024, (q, w) => { const c = w / 2; const cs = ['#f6c7dc', '#fbe8d0', '#d9c9f5', '#fbe8d0']; for (let r = 16; r > 0; r--) { q.fillStyle = cs[r % 4]; q.beginPath(); q.arc(c, c, r * 32, 0, 7); q.fill(); }
    q.strokeStyle = 'rgba(150,90,140,.35)'; q.lineWidth = 2.5; for (let r = 1; r <= 16; r++) { const n = 6 + r * 5; for (let a = 0; a < n; a++) { const an = (a + (r % 2) * .5) / n * 6.283; q.beginPath(); q.moveTo(c + Math.cos(an) * (r - 1) * 32, c + Math.sin(an) * (r - 1) * 32); q.lineTo(c + Math.cos(an) * r * 32, c + Math.sin(an) * r * 32); q.stroke(); } q.beginPath(); q.arc(c, c, r * 32, 0, 7); q.stroke(); }
    for (let a = 0; a < 8; a++) { const an = a / 8 * 6.283; q.fillStyle = ['#ff72c6', '#b98bff', '#38e0cf', '#ffb43a'][a % 4]; q.save(); q.translate(c + Math.cos(an) * 300, c + Math.sin(an) * 300); q.rotate(an); estrella2D(q, 0, 0, 30, 13, 5); q.fill(); q.restore(); }
    q.fillStyle = '#ffd23f'; estrella2D(q, c, c, 120, 52, 5); q.fill(); q.lineWidth = 8; q.strokeStyle = '#ff8a1c'; q.stroke(); });
  if (k === 'fantasia') tx = lienzo(512, 512, (q, w) => { q.fillStyle = '#2a1650'; q.fillRect(0, 0, w, w); for (let i = 0; i < 260; i++) { q.fillStyle = `rgba(${150 + ri(100)},${110 + ri(80)},255,${rnd(.15, .5)})`; q.beginPath(); q.arc(rnd(0, w), rnd(0, w), rnd(1, 3), 0, 7); q.fill(); } q.strokeStyle = 'rgba(190,150,255,.35)'; q.lineWidth = 4; for (let i = 0; i < 6; i++) { q.beginPath(); q.arc(w / 2, w / 2, 60 + i * 34, 0, 7); q.stroke(); } }, [6, 6]);
  if (k === 'absurdo') tx = lienzo(256, 256, (q, w) => { for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { q.fillStyle = (x + y) % 2 ? '#ff3fb8' : '#ffd21a'; q.fillRect(x * 32, y * 32, 32, 32); } }, [10, 10]);
  if (k === 'golosinas') tx = lienzo(512, 512, (q, w) => { q.fillStyle = '#6fdcae'; q.fillRect(0, 0, w, w); const cs = ['#ff3f98', '#ffd23f', '#5fb8ff', '#ffffff', '#b07bff']; for (let i = 0; i < 520; i++) { q.save(); q.translate(rnd(0, w), rnd(0, w)); q.rotate(rnd(0, 6.28)); q.fillStyle = cs[ri(5)]; rr(q, -7, -2, 14, 4.5, 2); q.fill(); q.restore(); } }, [8, 8]);
  if (k === 'feria') tx = lienzo(512, 512, (q, w) => { q.fillStyle = '#2a2140'; q.fillRect(0, 0, w, w); for (let i = 0; i < 2000; i++) { q.fillStyle = `rgba(255,255,255,${rnd(0, .06)})`; q.fillRect(rnd(0, w), rnd(0, w), 2, 2); } const cs = ['#ff4fb4', '#ffd23f', '#56d7ff', '#7dff9a']; for (let i = 0; i < 70; i++) { q.fillStyle = cs[ri(4)]; q.globalAlpha = .55; q.fillRect(rnd(0, w), rnd(0, w), 5, 3); } q.globalAlpha = 1; }, [8, 8]);
  return TXS[k] = tx;
}
function ambiente(g, tierra, o) {
  o = o || {};
  if (tierra === 'plaza') {
    const noche = o.noche;
    cielo(g, noche ? ['#0d0628', '#2b1055', '#7a2a8a', '#ff8a5c', '#ffc36b'] : ['#1f78e0', '#3f9cff', '#8fcbff', '#ffd3ec', '#ffd3ec'], noche ? 600 : 0);
    luces(g, noche ? { cielo: '#b08cff', suelo: '#4a2a3a', sol: '#ffb37a', si: 1.3, hi: .9, env: 'plazaN', dx: -8 } : { cielo: '#cfe8ff', suelo: '#8ad67a', sol: '#fff1d6', si: 1.9, env: 'plaza' });
    if (!o.radio) suelo(g, txSuelo('cesped'), 90);
    const pl = new T.Mesh(new T.CircleGeometry(o.radio || 17.5, 96), mat('#ffffff', { map: txSuelo('plaza'), roughness: .75 })); pl.rotation.x = -Math.PI / 2; pl.position.y = .02; pl.receiveShadow = true; g.add(pl);
    const bord = new T.Mesh(new T.TorusGeometry(o.radio || 17.5, .22, 8, 120), mat('#fff3e0', { roughness: .6 })); bord.rotation.x = Math.PI / 2; bord.scale.z = .5; bord.position.y = .03; bord.receiveShadow = true; g.add(bord);
    if (!o.radio) { for (let i = 0; i < 8; i++) nube(g, rnd(-90, 90), rnd(34, 50), rnd(-150, -110), rnd(14, 24), noche ? '#ffb3d0' : '#ffffff'); }
    ESC.fog = new T.Fog(noche ? '#3a1a5c' : '#bfe0ff', 55, 170);
  } else if (tierra === 'fantasia') {
    cielo(g, ['#090320', '#1d0b45', '#4a1f86', '#9b5ad6', '#9b5ad6'], 900);
    luces(g, { cielo: '#9db4ff', suelo: '#3a1a5c', sol: '#c9d6ff', si: 1.3, hi: 1.0, env: 'fantasia', amb: '#7a5cff', ai: .25 });
    suelo(g, txSuelo('fantasia')); ESC.fog = new T.Fog('#2a1258', 18, 80);
    chispasAmbiente(g, LITE ? 60 : 160, '#d8c2ff', 14);
    const luna = brillo('#fff4d6', 16, .9); luna.position.set(18, 26, -70); g.add(luna); const l2 = bola(3.4, matB('#fff8e8', { fog: false }), 32); l2.position.copy(luna.position); g.add(l2);
  } else if (tierra === 'absurdo') {
    cielo(g, ['#00c8f0', '#3be8ff', '#a8f8e0', '#fff08a', '#fff08a']);
    luces(g, { cielo: '#d0fff8', suelo: '#ffb0e0', sol: '#ffffff', si: 1.9, env: 'absurdo' });
    suelo(g, txSuelo('absurdo')); ESC.fog = new T.Fog('#c8f6ee', 40, 120);
    flotantes(g, LITE ? 8 : 18, ['#ff5fc8', '#ffd23f', '#3b8cff', '#35d46a', '#ff8a3c'], 18);
  } else if (tierra === 'golosinas') {
    cielo(g, ['#ff5fb8', '#ff8fcf', '#ffc2e2', '#ffe6f2', '#ffe6f2']);
    luces(g, { cielo: '#ffe0f2', suelo: '#9ff0cf', sol: '#fff2e6', si: 1.8, env: 'golosinas' });
    suelo(g, txSuelo('golosinas')); ESC.fog = new T.Fog('#ffc8e6', 40, 120);
    for (let i = 0; i < 7; i++) nube(g, rnd(-60, 60), rnd(16, 26), rnd(-90, -50), rnd(7, 12), '#ffd6ee');
  } else if (tierra === 'feria') {
    cielo(g, ['#04061a', '#0b1440', '#2a1660', '#7a2a78', '#7a2a78'], 700);
    luces(g, { cielo: '#7a8cff', suelo: '#3a1830', sol: '#ffcf9a', si: 1.1, hi: .8, env: 'feria', amb: '#ff6bd6', ai: .2 });
    suelo(g, txSuelo('feria')); ESC.fog = new T.Fog('#1c1040', 25, 95);
  }
}
/* decorado de fondo propio de cada tierra (lejos, para no tapar las pruebas) */
function fondoTierra(g, tierra, z0) {
  z0 = z0 || -16;
  if (tierra === 'fantasia') { for (let i = 0; i < 6; i++) { const isla = new T.Group(); const roca = new T.Mesh(new T.ConeGeometry(rnd(1.4, 2.6), rnd(2.5, 4), 7), mat('#5a3a8a', { roughness: .9, flatShading: true })); roca.rotation.x = Math.PI; isla.add(roca); const top = cil(1.6, 1.6, .3, mat('#8f6bd6', { roughness: .8 }), 7); top.position.y = 1.3; isla.add(top);
    const cr = new T.Mesh(new T.OctahedronGeometry(.5), mat('#d9b3ff', { emissive: '#b07bff', emissiveIntensity: .8, roughness: .1 })); cr.scale.y = 2; cr.position.y = 2.2; isla.add(cr); isla.position.set((i % 2 ? 1 : -1) * rnd(9, 20), rnd(5, 12), z0 - rnd(4, 26)); g.add(isla); const y0 = isla.position.y, f = rnd(0, 6); anim((dt, tt) => { isla.position.y = y0 + Math.sin(tt * .5 + f) * .6; cr.rotation.y += dt; }); } }
  if (tierra === 'golosinas') { const cs = [['#ff4f9a', '#ffffff'], ['#ffd23f', '#ff5f3c'], ['#5fb8ff', '#ffffff'], ['#b07bff', '#ffe6ff']]; for (let i = 0; i < 9; i++) { const x = (i % 2 ? 1 : -1) * rnd(8, 22), z = z0 - rnd(0, 18); if (i % 3 === 2) arbolAlgodon(g, x, z, rnd(1.2, 2), ['#ffb3dc', '#c9b3ff', '#b3f0ff'][ri(3)]); else if (i % 3 === 1) baston(g, x, z, rnd(3, 5), rnd(0, 6)); else { const c = cs[ri(4)]; piruleta(g, x, z, rnd(3, 5.5), c[0], c[1]); } } }
  if (tierra === 'feria') { noria(g, -16, 9, z0 - 14, 7.5); carpa(g, 15, z0 - 6, 1.6, '#ff3b4f'); carpa(g, 22, z0 - 16, 1.3, '#3b8cff'); carpa(g, -24, z0 - 4, 1.2, '#a65cff');
    guirnalda(g, new T.Vector3(-14, 6, z0 + 2), new T.Vector3(14, 6, z0 + 2), 26, ['#ffd23f', '#ff4fb4', '#56d7ff', '#ffffff'], 1.2); for (let i = 0; i < 5; i++) { const fa = new T.SpotLight(['#ff4fb4', '#56d7ff', '#ffd23f'][i % 3], 3, 60, .18, .6); fa.position.set(-20 + i * 10, 0, z0 - 20); fa.target.position.set(-20 + i * 10 + rnd(-6, 6), 40, z0 - 30); g.add(fa); g.add(fa.target); const f = rnd(0, 6), tg = fa.target; anim((dt, tt) => { tg.position.x = -20 + i * 10 + Math.sin(tt * .5 + f) * 12; }); } }
  if (tierra === 'absurdo') { for (let i = 0; i < 4; i++) { const reloj = new T.Group(); const d = cil(1.4, 1.4, .25, mat('#ffffff'), 32); d.rotation.x = Math.PI / 2; reloj.add(d); const ar = new T.Mesh(new T.TorusGeometry(1.4, .14, 8, 32), mat('#ff5fc8')); reloj.add(ar); const ag = caja(.08, 1.1, .05, matB('#2a0b4a')); ag.position.set(0, .5, .16); const piv = new T.Group(); piv.add(ag); reloj.add(piv);
    reloj.position.set((i % 2 ? 1 : -1) * rnd(10, 18), rnd(6, 11), z0 - rnd(2, 16)); reloj.rotation.z = rnd(-.6, .6); g.add(reloj); const v = rnd(-3, 3); anim(dt => { piv.rotation.z += v * dt; }); } }
}

/* ======================= HUD ======================= */
function hud(on) { $('hud').classList.toggle('on', on); $('pts').classList.toggle('on', on); }
function pintaHud() {
  const ll = $('llaves'); ll.innerHTML = ''; for (let i = 0; i < necesarias(); i++) { const e = document.createElement('i'); e.style.backgroundImage = `url(${TEX.llave})`; if (i < J.llaves.length) e.className = 'si'; ll.appendChild(e); }
  $('ptsV').textContent = J.pts; $('ptsT').textContent = t('puntos') + (J.modo === 2 && J.patos ? '  ·  🦆 ' + J.patos : '');
}
function lugar(txt) { $('lugar').textContent = txt; }
function crono(s) { const c = $('crono'); if (s === null) { c.textContent = ''; c.classList.remove('prisa'); return; } s = Math.max(0, Math.ceil(s)); c.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); c.classList.toggle('prisa', s <= 10); }
function barra(txt, k) { const b = $('barra'); if (txt === null) { b.classList.remove('on'); return; } b.classList.add('on'); $('barraT').textContent = txt; $('barraI').style.width = Math.round(clamp(k, 0, 1) * 100) + '%'; }
function meta(items) { const m = $('meta'); if (!items) { m.classList.remove('on'); m.innerHTML = ''; return; } m.innerHTML = ''; items.forEach(it => { const s = document.createElement('span'); if (it.col) { s.className = 'col'; s.style.background = `radial-gradient(circle at 35% 30%, #fff, ${it.col} 45%, ${it.col})`; } else s.textContent = it.txt; if (it.ok) s.classList.add('ok'); m.appendChild(s); }); m.classList.add('on'); }
function suma(n) { J.pts = Math.max(0, Math.round(J.pts + n)); pintaHud(); manda({ t: 'pts', v: J.pts }); }

/* ======================= SELECCIÓN APUNTANDO (arcos, puertas, portal) ======================= */
function selecciona(objs, seg, f, hover) { MU.sel = { objs, seg, f, hover, id: null, k: 0, bt: 0 }; }
function pasaSel(dt) {
  const S = MU.sel; if (!S) return;
  if (BOT) { S.bt += dt; if (S.bt > 1.2) { const o = S.objs.find(o => o.userData.sel !== undefined && !o.userData.no); if (o) { MU.sel = null; S.f(o.userData.sel, o); return; } } }
  const h = apunta(S.objs), o = h && deQuien(h.object, 'sel'), id = o && !o.userData.no ? o.userData.sel : null;
  if (id !== S.id) { S.id = id; S.k = 0; if (S.hover) S.hover(id, o); if (id !== null) fx('clic', .4); }
  if (id !== null) { S.k += dt / S.seg; if (PTR.toca) S.k = 1; retiAnillo(S.k); if (S.k >= 1) { MU.sel = null; retiAnillo(0); if (S.hover) S.hover(null); S.f(id, o); } }
  else { retiAnillo(0); if (PTR.toca && o && o.userData.no && o.userData.noF) o.userData.noF(); }
}

/* ======================= PLAZA DE MEVI ======================= */
function plaza(op) {
  op = op || {};
  nuevaEscena(g => {
    ambiente(g, 'plaza', { noche: op.noche, radio: op.radio });
    MU.cam.p.set(0, 2.3, 7.5); MU.cam.m.set(0, 3.6, -14); MU.mira = .14;
    const P = MU.plaza = { arcos: {}, slots: [], portal: null, remolino: null };
    /* fuente con la estatua */
    const fu = pon(g, 'fuente', 3.2, 0, 0, -2); fu.userData.tipo = 'fuente';
    const agua = new T.Group(); g.add(agua); agua.position.set(0, 0, -2);
    for (let i = 0; i < 3; i++) { const ch = brillo('#bfefff', 1.6, .5); ch.position.set(0, 1.4 + i * .5, 0); agua.add(ch); }
    anim((dt, tt) => { if (Math.random() < dt * 14) chispas(new T.Vector3(rnd(-.6, .6), rnd(1.4, 2.6), -2 + rnd(-.6, .6)), 1, ['#bfefff', '#ffffff'], { vel: 1.6, g: 3, vida: .9, tam: .18 }); });
    if (op.radio) return;
    /* gran portal y sus cerraduras */
    const PH = 12, PZ = -25; const por = pon(g, 'portal', PH, 0, 0, PZ); P.portal = por; por.userData.sel = 'portal';
    const rem = new T.Mesh(new T.CircleGeometry(PH * .17, 48), new T.MeshBasicMaterial({ map: TEX.remolino || (TEX.remolino = lienzo(512, 512, (q, w) => { const gr = q.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, '#ffffff'); gr.addColorStop(.25, '#ffe36b'); gr.addColorStop(.6, '#ff4fb4'); gr.addColorStop(1, 'rgba(90,20,160,0)'); q.fillStyle = gr; q.fillRect(0, 0, w, w); q.globalCompositeOperation = 'lighter'; for (let b = 0; b < 6; b++) { q.strokeStyle = 'rgba(255,255,255,.35)'; q.lineWidth = 14; q.beginPath(); for (let a = 0; a < 7; a += .05) { const r = a * 34, an = a + b * Math.PI / 3; q.lineTo(w / 2 + Math.cos(an) * r, w / 2 + Math.sin(an) * r); } q.stroke(); } })), transparent: true, depthWrite: false, blending: T.AdditiveBlending, opacity: 0 }));
    rem.position.set(0, PH * .24, PZ + 1.6); g.add(rem); P.remolino = rem; rem.userData.sel = 'portal';
    for (let i = 0; i < necesarias(); i++) { const x = (i - (necesarias() - 1) / 2) * 1.9, s = new T.Group(); s.position.set(x, PH * .9, PZ + 1.2); g.add(s);
      const aro = new T.Mesh(new T.TorusGeometry(.72, .1, 10, 40), mat('#ffd23f', { metalness: .9, roughness: .25 })); s.add(aro); const hueco = new T.Mesh(new T.CircleGeometry(.68, 40), new T.MeshBasicMaterial({ color: '#2a0b4a', transparent: true, opacity: .7 })); hueco.position.z = -.02; s.add(hueco); const est = new T.Sprite(new T.SpriteMaterial({ map: TEX.estrella, color: '#8a6ab0', transparent: true, depthWrite: false })); est.scale.set(1, 1, 1); s.add(est); P.slots.push({ g: s, est, lleno: false }); }
    J.llaves.slice(0, op.pendiente ? J.llaves.length - 1 : J.llaves.length).forEach((k, i) => llenaSlot(i, true));
    anim((dt, tt) => { rem.rotation.z -= dt * 1.4; P.slots.forEach(s => { if (s.llave) { s.llave.rotation.y += dt * 1.5; s.brillo.material.opacity = .5 + pulso() * .5; } }); });
    /* cuatro arcos, uno por tierra */
    ORDEN_T.forEach((k, i) => {
      const a = (-60 + i * 40) * Math.PI / 180, x = Math.sin(a) * 12, z = -5 - Math.cos(a) * 12, A = new T.Group(); A.position.set(x, 0, z); A.rotation.y = -a; g.add(A); A.userData.sel = k;
      const ar = pieza('arco', 6.2); A.add(ar); if (ar.userData.mx) MU.mx.push(ar.userData.mx);
      const col = TIERRAS[k].col, luz = brillo(col, 3, .35); luz.position.set(0, 1.6, -.6); A.add(luz);
      const velo = new T.Mesh(new T.PlaneGeometry(2.5, 3.3), new T.MeshBasicMaterial({ map: TEX.remolino, color: col, transparent: true, opacity: .4, depthWrite: false, side: T.DoubleSide })); velo.position.set(0, 1.65, 0); A.add(velo);
      const c = cartel(t('t_' + k).toUpperCase(), 2.3, '#ffffff', col, .3); c.position.set(0, 3.95, .42); A.add(c); const c2 = c.clone(); c2.rotation.y = Math.PI; c2.position.z = -.42; A.add(c2);
      const hecho = J.llaves.includes(k); if (hecho) { A.userData.no = true; luz.material.color.set('#9a9a9a'); velo.material.opacity = .08; const est = new T.Sprite(new T.SpriteMaterial({ map: TEX.estrella, color: '#ffd23f', depthWrite: false })); est.scale.set(1.4, 1.4, 1); est.position.set(0, 2.6, .4); A.add(est); A.userData.noF = () => di(t('yaTenemos')); }
      P.arcos[k] = { A, luz, velo, base: luz.material.opacity };
      anim((dt, tt) => { if (!hecho) { velo.material.opacity = .3 + pulso() * .15 + (P.hover === k ? .3 : 0); luz.scale.setScalar(3 + (P.hover === k ? 2 : 0) + Math.sin(tt * 2 + i) * .3); } });
    });
    /* el Maestro de Ceremonias da la bienvenida junto a la fuente */
    const mc = pon(g, 'maestro', 1.75, -3.6, 0, -1.2, { ry: .55 }); anima(mc, 'Idle'); P.maestro = mc;
    /* decorado: piruletas, algodón, globos, guirnaldas y banderines */
    [[-15, -3], [15, -3], [-19, -14], [19, -14], [-8, -24], [8, -24]].forEach(([x, z], i) => { if (i % 2) arbolAlgodon(g, x, z, 1.6, ['#ffb3dc', '#c9b3ff', '#b3f0ff'][i % 3]); else piruleta(g, x, z, 4.5, ['#ff4f9a', '#5fb8ff', '#b07bff'][i % 3], '#ffffff'); });
    for (let i = 0; i < 8; i++) globo(g, rnd(-14, 14), rnd(5, 9), rnd(-22, -8), ['#ff4fb4', '#ffd23f', '#56d7ff', '#7dff9a', '#b26bff'][i % 5]);
    const pA = ORDEN_T.map((k, i) => { const a = (-60 + i * 40) * Math.PI / 180; return new T.Vector3(Math.sin(a) * 12, 6.3, -5 - Math.cos(a) * 12); });
    for (let i = 0; i < 3; i++) guirnalda(g, pA[i], pA[i + 1], 14, ['#ffd23f', '#ff4fb4', '#56d7ff', '#ffffff'], 1);
    banderines(g, new T.Vector3(-6, 5.6, 1), new T.Vector3(6, 5.6, 1), 14);
    for (let i = 0; i < 4; i++) { const fa = cil(.07, .09, 3.4, mat('#4a2a6a', { metalness: .5, roughness: .4 }), 8); const x = [-15, -8, 8, 15][i]; fa.position.set(x, 1.7, 3.5); g.add(fa); const bb = bola(.28, new T.MeshStandardMaterial({ color: '#fff6d0', emissive: '#ffd27a', emissiveIntensity: 1.4 }), 16); bb.position.set(x, 3.5, 3.5); g.add(bb); }
    if (op.noche) chispasAmbiente(g, 120, '#ffe7a8', 16);
  });
}
function llenaSlot(i, ya) {
  const P = MU.plaza, s = P && P.slots[i]; if (!s || s.lleno) return; s.lleno = true; s.est.visible = false;
  const l = pieza('llave', 1.25, { emis: '#ffb000', emisI: .5 }); l.position.y = -.55; s.g.add(l); s.llave = l; const b = brillo('#ffd23f', 3.2, .8); s.g.add(b); s.brillo = b;
  if (!ya) { chispas(s.g.position.clone(), 40, ['#ffd23f', '#fff6c8', '#ff4fb4'], { vel: 5, tam: .45 }); fx('premio'); }
}
/* el parque arranca o vuelve a la plaza */
function enPlaza(llegada) {
  J.fase = 'plaza'; hud(true); pintaHud(); lugar(t('plaza')); crono(null); barra(null); meta(null); musica('plaza');
  transicion(() => {
    plaza({ pendiente: !!(llegada && llegada.llave) });
    const P = MU.plaza, todas = J.llaves.length >= necesarias();
    if (todas) { P.remolino.material.opacity = 0; }
    MU.cam.p.set(0, 6, 20); MU.cp.copy(MU.cam.p); viaje(new T.Vector3(0, 2.3, 7.5), new T.Vector3(0, 3.6, -14), 2.2, () => {
      if (llegada === 'inicio') {
        const n = J.nombres.filter(Boolean), saludo = n.length ? t('holaN', n.slice(0, 4).join(', ')) : t('hola');
        meviGesto('saluda'); anima(P.maestro, 'Gentlemans_Bow', true);
        secuencia([[saludo, 0], [t('objetivo', necesarias()), 'invita'], [t('comoElegir'), 'senala']], eligeTierra);
      } else if (llegada && llegada.llave) {
        const i = J.llaves.length - 1; ceremonia(i, () => {
          meviGesto('feliz'); anima(P.maestro, 'Cheer', true);
          if (todas) { abrePortal(); } else { di(t('llaveDe', t('t_' + llegada.llave), J.llaves.length, necesarias())); setTimeout(() => { di(t('otraTierra')); eligeTierra(); }, 2600); }
        });
      } else eligeTierra();
    });
  }, '#ffffff');
}
function secuencia(lista, fin) { let i = 0; const sig = () => { if (i >= lista.length) { fin && fin(); return; } const [txt, g] = lista[i++]; if (g) meviGesto(g); const d = di(txt); setTimeout(sig, BOT ? 200 : Math.min(d, 2400 + txt.length * 45)); }; sig(); }
function eligeTierra() {
  const P = MU.plaza, objs = ORDEN_T.map(k => P.arcos[k].A);
  selecciona(objs, 1.3, k => { fx('nivel'); meviGesto('feliz'); entraTierra(k); }, k => { P.hover = k; if (k) { lugar(t('t_' + k)); } else lugar(t('plaza')); });
}
function ceremonia(i, fin) {
  const P = MU.plaza, l = pieza('llave', 1.1, { emis: '#ffb000', emisI: .7 }); MU.g.add(l); const b = brillo('#ffd23f', 3, .9); l.add(b);
  const ini = new T.Vector3(0, 2.4, 5.6), dst = P.slots[i].g.position.clone(); let t0 = 0; fx('sorpresa'); chispas(ini, 30, ['#ffd23f', '#ffffff'], { vel: 3, tam: .4 });
  anim(dt => { if (t0 < 0) return; t0 += dt; if (t0 < 1.6) { l.position.copy(ini); l.position.y += Math.sin(t0 * 3) * .1; l.rotation.y += dt * 4; }
    else { const k = suave(Math.min(1, (t0 - 1.6) / 1.4)); l.position.lerpVectors(ini, dst, k); l.position.y += Math.sin(k * Math.PI) * 3; l.rotation.y += dt * 8; if (Math.random() < .6) chispas(l.position.clone(), 1, ['#ffd23f', '#fff6c8'], { vel: .6, g: 0, vida: .6, tam: .3 });
      if (k >= 1) { t0 = -1; MU.g.remove(l); llenaSlot(i); pintaHud(); fin(); } } });
  MU.cam.m.set(0, 4, -12);
}
function abrePortal() {
  const P = MU.plaza; viaje(new T.Vector3(0, 5.5, -7), new T.Vector3(0, 4.5, -25), 2.6, () => {});
  let k = 0; anim(dt => { if (k >= 1) return; k = Math.min(1, k + dt / 2.5); P.remolino.material.opacity = k; P.remolino.scale.setScalar(.2 + k * .8); });
  fx('victoria'); confeti(new T.Vector3(0, 6, -20), LITE ? 40 : 110); di(t('portalAbre')); meviGesto('senala');
  ORDEN_T.forEach(k2 => { P.arcos[k2].A.userData.no = true; });
  setTimeout(() => selecciona([P.portal, P.remolino], 1.4, () => { fx('nivel'); viaje(new T.Vector3(0, 3, -20), new T.Vector3(0, 3, -40), 1.4, () => {}); setTimeout(() => final(), 900); }, id => { P.hoverPortal = !!id; }), BOT ? 300 : 2500);
}

/* ======================= TIERRAS Y PUERTAS ======================= */
function entraTierra(k) {
  J.tierra = k; const T0 = TIERRAS[k]; let s = baraja(T0.salas).slice(0, salasPorTierra()); J.cola = s; J.puertasVistas = 0;
  if (J.modo === 2) { const sp = s.filter(x => x !== 'montana'); J.patoEn[k] = sp.length ? sp[ri(sp.length)] : null; }
  const A = MU.plaza.arcos[k].A, p = A.position.clone(); viaje(new T.Vector3(p.x * .85, 2.4, p.z + 3.2), new T.Vector3(p.x, 2.4, p.z - 6), 1.1, () => {});
  setTimeout(() => pasillo(), 700);
}
function puertaDe(tierra) {
  const g = new T.Group();
  if (tierra === 'fantasia') g.add(pieza('puertafantasia', 4.2));
  else if (tierra === 'golosinas') g.add(pieza('puertacaramelo', 4.2));
  else if (tierra === 'absurdo') { /* nevera de puerta: blanca, redondeada y con imanes */
    const cuerpo = caja(2.3, 4, .6, mat('#f4fbff', { roughness: .25, metalness: .1 })); cuerpo.position.y = 2; g.add(cuerpo); const raya = caja(2.32, .05, .62, mat('#b8c8d6')); raya.position.y = 2.95; g.add(raya);
    const asa = cil(.05, .05, 1.4, mat('#d8e2ea', { metalness: .9, roughness: .2 }), 10); asa.position.set(.85, 1.9, .42); g.add(asa); const asa2 = asa.clone(); asa2.scale.y = .45; asa2.position.y = 3.4; g.add(asa2);
    ['#ff5fc8', '#ffd23f', '#3b8cff', '#35d46a', '#ff8a3c'].forEach((c, i) => { const im = new T.Mesh(i % 2 ? new T.CircleGeometry(.16, 20) : new T.CircleGeometry(.14, 5), mat(c)); im.position.set(rnd(-.8, .5), rnd(1, 3.6), .31); g.add(im); }); sombra(g);
  } else { /* feria: aro cósmico */
    const aro = new T.Mesh(new T.TorusGeometry(1.7, .22, 16, 64), mat('#7b5cff', { emissive: '#ff4fb4', emissiveIntensity: .7, metalness: .6, roughness: .25 })); aro.position.y = 2.1; g.add(aro);
    const d = new T.Mesh(new T.CircleGeometry(1.55, 48), new T.MeshBasicMaterial({ map: TEX.remolino || null, color: '#c8a8ff', transparent: true, opacity: .85, depthWrite: false, blending: T.AdditiveBlending })); d.position.y = 2.1; g.add(d);
    const pie = cil(.5, .8, .4, mat('#3a2a6a', { metalness: .5 }), 24); pie.position.y = .2; g.add(pie); anim(dt => { d.rotation.z -= dt * 1.8; aro.rotation.z += dt * .3; });
  }
  return g;
}
function pasillo() {
  const k = J.tierra, T0 = TIERRAS[k]; musica(T0.mus); lugar(t('t_' + k)); crono(null); barra(null); meta(null);
  transicion(() => nuevaEscena(g => {
    ambiente(g, k); fondoTierra(g, k, -14);
    MU.cam.p.set(0, 1.9, 3.4); MU.cam.m.set(0, 2.2, -6); MU.mira = .12;
    const trampa = J.modo >= 1 && Math.random() < (J.modo === 1 ? .45 : .6);
    const opciones = J.cola.length >= 2 && !trampa ? [J.cola[0], J.cola[1]] : trampa ? baraja([J.cola[0], 'trampa']) : [J.cola[0]];
    const ds = opciones.map((op, i) => { const d = puertaDe(k); d.position.set(opciones.length === 1 ? 0 : (i ? 2.9 : -2.9), 0, -5.5); d.rotation.y = opciones.length === 1 ? 0 : (i ? -.18 : .18); d.userData.sel = i; d.userData.op = op; g.add(d);
      const luz = brillo(T0.col, 5, .0); luz.position.set(0, 2.2, -.4); d.add(luz); d.userData.luz = luz; return d; });
    const gu = T0.guard; const gp = pon(g, gu, gu === 'gusano' ? 1.2 : gu === 'buho' ? 1.4 : 1.6, opciones.length === 1 ? -3 : 0, 0, opciones.length === 1 ? -4 : -3.6, { ry: 0 }); anima(gp, 'Idle'); if (gu === 'gusano' || gu === 'chef') anim((dt, tt) => ondula(gp, tt, .12, 2.5));
    if (k === 'feria') { guirnalda(g, new T.Vector3(-5, 4.6, -5), new T.Vector3(5, 4.6, -5), 16, ['#ffd23f', '#ff4fb4', '#56d7ff'], .7); }
    if (k === 'golosinas') { piruleta(g, -5.4, -6, 3.4, '#ff4f9a', '#fff'); piruleta(g, 5.4, -6, 3.4, '#5fb8ff', '#fff'); }
    MU.puertas = ds;
    setTimeout(() => {
      if (!J.puertasVistas++) di(t('entra_' + k)); setTimeout(() => di(opciones.length === 1 ? t('unaPuerta') : t('puertas')), J.puertasVistas === 1 ? 2600 : 0);
      anima(gp, 'Talk'); setTimeout(() => anima(gp, 'Idle'), 2500);
      const elige = () => selecciona(ds.filter(d => d.parent), 1.3, (i, d) => abrePuerta(d, gp, elige), (i) => { ds.forEach(d => { d.userData.luz.material.opacity = d.userData.sel === i ? .8 : .25; d.scale.setScalar(d.userData.sel === i ? 1.04 : 1); }); });
      ds.forEach(d => { d.userData.luz.material.opacity = .25; }); elige();
    }, 500);
  }), T0.col);
}
function abrePuerta(d, gp, elige) {
  const op = d.userData.op;
  if (op === 'trampa') {
    d.userData.no = true; fx('sorpresa'); fx('globo', .7); confeti(d.position.clone().add(new T.Vector3(0, 2, .6)), LITE ? 40 : 90); grito(t('trampaT')); di(t('trampa')); meviGesto('salta'); anima(gp, 'Joyful', true);
    suma(-(J.modo === 1 ? 150 : 250)); J.combo = 0; let k = 0; anim(dt => { if (k >= 1) return; k = Math.min(1, k + dt / 1.2); d.rotation.x = -suave(k) * Math.PI / 2; d.position.y = -k * .4; if (k >= 1) { d.parent && d.parent.remove(d); } });
    setTimeout(elige, BOT ? 300 : 2200); return;
  }
  fx('nivel'); meviGesto('invita'); const p = d.position.clone(); viaje(new T.Vector3(p.x, 2, p.z + 1.4), new T.Vector3(p.x, 2, p.z - 6), 1.0, () => {});
  chispas(p.clone().add(new T.Vector3(0, 2, .5)), 30, [TIERRAS[J.tierra].col, '#ffffff'], { vel: 3, tam: .4 });
  J.cola.splice(J.cola.indexOf(op), 1); setTimeout(() => sala(op), 650);
}

/* ======================= SALAS (motor común) ======================= */
const SALAS = {};
function mkCtx(g) {
  const ctx = { g, modo: J.modo, vel: 1 + J.modo * .2, prog: 0, meta: 10, objs: [], h: null, aciertos: 0, fallos: 0,
    diana(o, tag) { tag = tag || 'diana'; if (o.userData[tag] === undefined) o.userData[tag] = true; ctx.objs.push(o); return o; },
    quita(o) { const i = ctx.objs.indexOf(o); if (i >= 0) ctx.objs.splice(i, 1); },
    bien(pos, n, pr) { J.combo++; ctx.aciertos++; const v = Math.round((n || 50) * (1 + Math.min(J.combo, 10) * .1)); suma(v); ctx.prog = Math.min(ctx.meta, ctx.prog + (pr === undefined ? 1 : pr)); ctx.barra();
      if (pos) { const [x, y] = aPantalla(pos); flota('+' + v, x, y); chispas(pos, 18, [TIERRAS[J.tierra].col, '#ffffff', '#ffd23f'], { vel: 3.5, tam: .3 }); }
      marimba(72 + [0, 2, 4, 7, 9, 12][Math.min(5, J.combo % 6)], .16); if (J.combo % 5 === 0) { grito(tA('bien')[ri(tA('bien').length)], 900); meviGesto('feliz'); } },
    mal(pos) { J.combo = 0; ctx.fallos++; const v = 20 + J.modo * 15; suma(-v); fx('error', .7); if (pos) { const [x, y] = aPantalla(pos); flota('-' + v, x, y, true); } },
    barra() { barra(t('b_' + ctx.id) + '  ' + Math.min(ctx.prog, ctx.meta) + ' / ' + ctx.meta, ctx.prog / ctx.meta); } };
  return ctx;
}
function sala(id) {
  const def = SALAS[id], k = J.tierra; J.fase = 'sala';
  transicion(() => nuevaEscena(g => {
    ambiente(g, k); if (!def.sinFondo) fondoTierra(g, k, -18);
    const ctx = mkCtx(g); ctx.id = id; MU.cam.p.set(0, 1.75, 6); MU.cam.m.set(0, 1.8, -6); MU.mira = .07;
    const r = def.crea(ctx); MU.cp.copy(MU.cam.p); MU.cm.copy(MU.cam.m);
    const dur = def.dur ? def.dur[J.modo] : [60, 55, 48][J.modo];
    const S = J.sala = { id, ctx, r, fase: 'intro', t: 0, dur, mut: false, bt: 0, pato: id !== 'montana' && (J.patoEn[k] === id || (J.modo < 2 && Math.random() < .35)), patoT: [[dur * rnd(.2, .3), .3], [dur * rnd(.45, .6), .65]], patoObj: null };
    lugar(t('s_' + id)); crono(dur); ctx.barra(); MU.upd = pasoSala;
    setTimeout(() => { di(t('i_' + id)); meviGesto('senala'); }, 350);
  }), TIERRAS[k].col);
}
function pasoSala(dt) {
  const S = J.sala; if (!S) return; const { ctx, r } = S; S.t += dt;
  if (S.fase === 'intro') { r.previa && r.previa(dt, S.t); if (S.t > (BOT ? .6 : Math.max(3.4, (VOZ.tFin - performance.now()) / 1000 + S.t - .4))) { S.fase = 'cuenta'; S.t = 0; S.c = -1; } return; }
  if (S.fase === 'cuenta') { const c = Math.floor(S.t / .75); if (c !== S.c) { S.c = c; if (c < 3) { grito(String(3 - c), 600); sint(nota(72), .15, 'square', .08); } else { grito(t('ya'), 700); sint(nota(84), .3, 'square', .1); S.fase = 'juego'; S.t = 0; r.empieza && r.empieza(); } } r.previa && r.previa(dt, S.t); return; }
  if (S.fase === 'juego') {
    const left = S.dur - S.t; crono(left);
    if (BOT) bot(S, dt);
    ctx.h = apunta(ctx.objs.concat(S.patoObj ? [S.patoObj] : [])); ctx.down = PTR.down;
    if (PTR.toca) { const po = ctx.h && deQuien(ctx.h.object, 'pato'); if (po) cogePato(S, po); else r.toca(ctx.h); }
    r.paso(dt, S.t);
    if (S.pato) { const pt = S.patoT[0]; if (pt && !S.patoObj && (S.t > pt[0] || ctx.prog / ctx.meta >= pt[1])) { S.patoT.shift(); sueltaPato(S); } if (S.patoObj) muevePato(S, dt); }
    if (J.modo === 2 && !S.mut && S.t > S.dur * .5 && !r.sinMuta) { S.mut = true; ctx.vel *= 1.35; grito(t('mutacion'), 1200); di(t('mutacionD')); fx('sorpresa'); r.muta && r.muta(); }
    if (ctx.prog >= ctx.meta) return finSala(true);
    if (left <= 0) return finSala(false);
    return;
  }
  if (S.fase === 'fin') { r.previa && r.previa(dt, S.t); if (S.t > (BOT ? .8 : 3.2)) { S.fase = 'x'; siguiente(); } }
}
function finSala(ok) {
  const S = J.sala, resto = Math.max(0, S.dur - S.t); S.fase = 'fin'; S.t = 0; retiAnillo(0); J.salasN++; S.r.fin && S.r.fin(ok); if (S.patoObj) { MU.g.remove(S.patoObj); S.patoObj = null; }
  if (ok) { J.salasOk++; const extra = Math.round(resto * 10); grito(t('superado'), 1500); fx('victoria'); confeti(new T.Vector3(0, 3, -3), LITE ? 40 : 90); meviGesto('salta'); suma(300 + J.modo * 100 + extra); di(t('salaOk')); }
  else { grito(t('tiempo'), 1300); fx('fallo'); meviGesto('invita'); suma(Math.round(S.ctx.prog / S.ctx.meta * 200)); di(t('salaCasi')); }
  crono(null);
}
function siguiente() { meta(null); barra(null); J.sala = null; if (J.cola.length) pasillo(); else { J.llaves.push(J.tierra); enPlaza({ llave: J.tierra }); } }
/* patito astronauta: cruza la sala de vez en cuando; en DIFÍCIL, los cuatro abren el final secreto */
function sueltaPato(S) { const p = pieza('pato', .75); const izq = Math.random() < .5; p.position.set(izq ? -9 : 9, rnd(2.4, 4.2), rnd(-6, -3.5)); p.userData.pato = true; p.userData.v = izq ? 1 : -1; p.rotation.y = izq ? Math.PI / 2 : -Math.PI / 2; const b = brillo('#bfe8ff', 1.6, .5); p.add(b); MU.g.add(p); S.patoObj = p; sint(nota(88), .2, 'sine', .08); }
function muevePato(S, dt) { const p = S.patoObj; p.position.x += p.userData.v * dt * 2.4; p.position.y += Math.sin(S.t * 3) * dt * .8; p.rotation.z = Math.sin(S.t * 4) * .25; if (Math.abs(p.position.x) > 10) { MU.g.remove(p); S.patoObj = null; } }
function cogePato(S, p) { MU.g.remove(p); S.patoObj = null; S.pato = false; chispas(p.position.clone(), 40, ['#bfe8ff', '#ffffff', '#ffd23f'], { vel: 4, tam: .4 }); fx('premio');
  if (J.modo === 2) { J.patos++; di(J.patos === 1 ? t('pato') : t('patoN', J.patos)); suma(250); } else { di(t('patoB')); suma(200); } pintaHud(); meviGesto('salta'); }
/* piloto automático para las pruebas internas (?bot=1) */
function bot(S, dt) { S.bt -= dt; const r = S.r; if (S.bt > 0 && !S.bObj) return; const o = S.bObj || S.patoObj || (r.bot && r.bot()); if (!o) { S.bt = .3; return; } S.bObj = o; const p = new T.Vector3(); o.getWorldPosition(p); if (o.userData.bAlto) p.y += o.userData.bAlto; const [x, y] = aPantalla(p); ponPtr(x / W, y / H);
  if (r.mantener && o !== S.patoObj) { PTR.down = true; if (S.bt < -1.8 || !o.parent) { S.bObj = null; S.bt = .1; } return; } if (S.bt < -.05) { PTR.toca = true; S.bObj = null; S.bt = r.botT || .45; } }

/* ---------- FANTASÍA · La Biblioteca Voladora ---------- */
SALAS.biblioteca = { dur: [50, 45, 40], crea(ctx) {
  const g = ctx.g; ctx.meta = [10, 12, 14][ctx.modo]; MU.cam.m.set(0, 2.4, -6);
  const tx = lz(512, 512, (q, w) => { q.fillStyle = '#4a2a18'; q.fillRect(0, 0, w, w); for (let f = 0; f < 5; f++) { let x = 6; const y0 = f * 102 + 8; while (x < w - 10) { const bw = rnd(14, 30), bh = rnd(62, 88); q.fillStyle = ['#c0392b', '#2e86de', '#27ae60', '#f1c40f', '#8e44ad', '#e67e22', '#16a085'][ri(7)]; q.fillRect(x, y0 + 92 - bh, bw, bh); q.fillStyle = 'rgba(255,230,150,.7)'; q.fillRect(x + 2, y0 + 92 - bh + 10, bw - 4, 3); x += bw + 2; } q.fillStyle = '#2a170c'; q.fillRect(0, y0 + 92, w, 10); } });
  [-6.2, 6.2].forEach(x => { const e = caja(3.4, 6.5, 1.2, [mat('#5a3420'), mat('#5a3420'), mat('#5a3420'), mat('#5a3420'), mat('#ffffff', { map: tx }), mat('#5a3420')]); e.position.set(x, 3.25, -6); e.rotation.y = x < 0 ? .5 : -.5; sombra(e); g.add(e); });
  const fondo = caja(9, 7, .6, [mat('#5a3420'), mat('#5a3420'), mat('#5a3420'), mat('#5a3420'), mat('#ffffff', { map: tx }), mat('#5a3420')]); fondo.position.set(0, 3.5, -10); sombra(fondo); g.add(fondo);
  const ven = new T.Mesh(new T.CircleGeometry(1.1, 40), new T.MeshBasicMaterial({ color: '#2a2f7a' })); ven.position.set(0, 5.6, -9.65); g.add(ven); const lun = new T.Mesh(new T.CircleGeometry(.45, 32), new T.MeshBasicMaterial({ color: '#fff4d0' })); lun.position.set(.3, 5.8, -9.6); g.add(lun); const mar = new T.Mesh(new T.TorusGeometry(1.1, .12, 8, 40), mat('#3a2010')); mar.position.set(0, 5.6, -9.6); g.add(mar);
  const ped = cil(.55, .65, 1, mat('#6a3c22'), 16); ped.position.set(0, .5, -8.4); g.add(ped); const bu = pon(g, 'buho', 2, 0, 1, -8.4); anima(bu, 'Idle');
  [[-3.2, -7.2], [3.2, -7.2]].forEach(([x, z]) => { const v = cil(.12, .12, .5, mat('#fff3d6'), 10); v.position.set(x, .25, z); g.add(v); const f = brillo('#ffb347', .9, .9); f.position.set(x, .62, z); g.add(f); const l = new T.PointLight('#ffb347', 1.2, 6); l.position.set(x, .8, z); g.add(l); anim((dt, tt) => { f.scale.setScalar(.8 + Math.sin(tt * 13 + x) * .1); }); });
  const libros = [], N = 4 + ctx.modo;
  const nuevo = () => { const oro = Math.random() < .2; const b = pieza('libro', 1.05, oro ? { tinte: '#ffd23f', emis: '#ffa000', emisI: .6 } : {}); b.userData.oro = oro; const s = { b, f: rnd(0, 6), ax: rnd(1.8, 3.6), ay: rnd(.8, 1.6), cz: rnd(-5.6, -2.6), w: rnd(.35, .6) * (oro ? 1.6 : 1), y0: rnd(2, 3.6), cx: rnd(-1, 1), e: 0 };
    if (oro) b.add(brillo('#ffd23f', 1.8, .7)); g.add(b); ctx.diana(b, 'libro'); libros.push(s); return s; };
  for (let i = 0; i < N; i++) nuevo();
  return {
    paso(dt, tt) { libros.forEach(s => { s.f += dt * s.w * ctx.vel; s.e = Math.min(1, s.e + dt * 2); const b = s.b; b.position.set(s.cx + Math.sin(s.f) * s.ax, s.y0 + Math.sin(s.f * 2.1) * s.ay * .5, s.cz + Math.cos(s.f * .7) * .8); b.rotation.set(Math.sin(s.f * 6) * .4, Math.cos(s.f) > 0 ? .6 : -.6, Math.sin(s.f * 9) * .3); b.scale.setScalar(s.e); }); },
    toca(h) { const b = h && deQuien(h.object, 'libro'); if (!b) return; const s = libros.find(x => x.b === b); if (!s) return; libros.splice(libros.indexOf(s), 1); ctx.quita(b); g.remove(b); fx('pop'); ctx.bien(b.position.clone(), b.userData.oro ? 120 : 50, b.userData.oro ? 2 : 1); anima(bu, 'Cheer', true); setTimeout(() => { if (J.sala && J.sala.ctx === ctx) nuevo(); }, 500); },
    bot() { return libros.length ? libros[0].b : null; }, previa() { this.paso(1 / 60); }
  };
} };

/* ---------- FANTASÍA · La Cueva de los Cristales ---------- */
SALAS.cristales = { dur: [50, 45, 42], crea(ctx) {
  const g = ctx.g; ctx.meta = [12, 15, 18][ctx.modo]; MU.cam.m.set(0, 1.6, -6);
  const roca = mat('#3a2460', { roughness: .95, flatShading: true }); for (let i = 0; i < 12; i++) { const r = new T.Mesh(new T.DodecahedronGeometry(rnd(1.5, 3)), roca); const a = -1.4 + i / 11 * 2.8; r.position.set(Math.sin(a) * 14, rnd(-1, 3), -8 - Math.cos(a) * 9); r.scale.y = rnd(1, 2.4); g.add(r); }
  const escala = [62, 64, 67, 69, 71, 74, 76], cols = ['#ff5fc8', '#b07bff', '#5fa8ff', '#5ff2e6', '#7dff9a', '#ffd23f', '#ff8a3c'];
  const C = escala.map((n, i) => { const a = (i / 6 - .5) * 2.3, gr = new T.Group(); gr.position.set(Math.sin(a) * 4.6, 0, -2.6 - Math.cos(a) * 1.8); gr.scale.setScalar(1.35); g.add(gr);
    const m = new T.MeshStandardMaterial({ color: cols[i], emissive: cols[i], emissiveIntensity: .15, roughness: .12, metalness: .1, transparent: true, opacity: .88, flatShading: true });
    [[0, 1.3, 0, 1], [-.35, .8, .1, .6], [.32, .7, -.1, .55]].forEach(([x, y, z, s]) => { const c = new T.Mesh(new T.OctahedronGeometry(.5 * s), m); c.scale.y = 2.4; c.position.set(x, y * s + .2, z); c.rotation.z = x * .6; gr.add(c); });
    const b = brillo(cols[i], 3.2, 0); b.position.y = 1.3; gr.add(b); gr.userData.cr = i; ctx.diana(gr, 'cr'); return { gr, m, b, n, lit: 0, ok: 0 }; });
  let beat = 0, prox = 1.2;
  return {
    paso(dt) { const bp = 60 / (92 * ctx.vel); prox -= dt;
      if (prox <= 0) { prox += bp; beat++; sint(nota(50 + (beat % 4 === 0 ? 0 : 7)), .2, 'sine', .12); const libres = C.filter(c => c.lit <= 0); const n = ctx.modo === 0 ? 1 : beat % 3 === 0 ? 2 : 1; baraja(libres).slice(0, n).forEach(c => { c.lit = bp * (ctx.modo === 0 ? 2.2 : 1.6); }); }
      C.forEach(c => { if (c.lit > 0) c.lit -= dt; c.ok = Math.max(0, c.ok - dt * 2); const on = c.lit > 0 ? 1 : 0; c.m.emissiveIntensity = lerp(c.m.emissiveIntensity, .15 + on * 1.9 + c.ok * 2, .25); c.b.material.opacity = lerp(c.b.material.opacity, on * .8 + c.ok, .25); c.gr.scale.setScalar(1.35 * (1 + c.ok * .15)); }); },
    toca(h) { const o = h && deQuien(h.object, 'cr'); if (!o) return; const c = C[o.userData.cr]; if (c.lit > 0) { c.lit = 0; c.ok = 1; marimba(c.n + 12, .25); ctx.bien(o.getWorldPosition(new T.Vector3()).add(new T.Vector3(0, 1.4, 0)), 50); } else { sint(nota(c.n - 12), .3, 'triangle', .1); ctx.mal(o.getWorldPosition(new T.Vector3()).add(new T.Vector3(0, 1.4, 0))); } },
    bot() { const c = C.find(c => c.lit > .15); if (c) c.gr.userData.bAlto = 1.2; return c ? c.gr : null; }, botT: .2
  };
} };

/* ---------- FANTASÍA · La Sala de los Espejos ---------- */
SALAS.espejos = { dur: [55, 50, 45], crea(ctx) {
  const g = ctx.g; ctx.meta = [5, 6, 7][ctx.modo]; MU.cam.p.set(0, 1.7, 3.6); MU.cam.m.set(0, 1.8, -6);
  const cort = mat('#8a1c4a', { roughness: .8 }); [-7, 7].forEach(x => { for (let i = 0; i < 6; i++) { const c = cil(.35, .35, 7, cort, 12); c.position.set(x + (x < 0 ? i * .5 : -i * .5), 3.5, -5 + i * .2); g.add(c); } });
  const lam = new T.Group(); lam.position.set(0, 5.4, -2); g.add(lam); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283, b = brillo('#ffe9b0', .9, .9); b.position.set(Math.cos(a) * 1.4, 0, Math.sin(a) * 1.4); lam.add(b); } const lluz = new T.PointLight('#ffe0b0', 1.4, 14); lam.add(lluz); anim(dt => { lam.rotation.y += dt * .2; });
  const E = [-3.9, -1.3, 1.3, 3.9].map((x, i) => { const gr = new T.Group(); gr.position.set(x, 0, -2.6); gr.rotation.y = -x * .07; g.add(gr); const es = pieza('espejo', 3.4); gr.add(es); gr.userData.esp = i; ctx.diana(gr, 'esp');
    const mv = pieza('mevi', 1.35); mv.position.set(0, .75, .25); mv.rotation.y = 0; gr.add(mv); if (mv.userData.mx) MU.mx.push(mv.userData.mx); let cara = null; try { cara = MEVICARA(T, mv, '../packs/comun/mevi/caras.png?v=18.37'); } catch (e) {}
    const vid = new T.Mesh(new T.PlaneGeometry(1.7, 2.5), new T.MeshStandardMaterial({ color: '#cfe8ff', transparent: true, opacity: .14, roughness: .05, metalness: .9, depthWrite: false })); vid.position.set(0, 1.55, .55); gr.add(vid);
    return { gr, mv, cara, vid, mal: 0 }; });
  anim((dt, tt) => E.forEach((e, i) => { if (e.cara) e.cara.parpa(tt + i * 1.7); e.mv.position.y = .75 + Math.sin(tt * 2 + i) * .03; if (e.mal > 0) { e.mal -= dt; e.gr.position.x += Math.sin(tt * 60) * .02; e.vid.material.color.set(e.mal > 0 ? '#ff7070' : '#cfe8ff'); } }));
  let imp = 0, bloque = 0; const ANS = ['saluda', 'feliz', 'invita', 'salta'];
  const tinte = (e, c) => e.mv.traverse(o => { if (o.isMesh) o.material.color.set(c); });
  const ronda = () => { imp = ri(4); const a = ANS[ri(4)]; let b = baraja(ANS.filter(x => x !== a))[0]; const tipo = ctx.modo === 0 ? 0 : ctx.modo === 1 ? 1 : ri(3);
    E.forEach((e, i) => { tinte(e, '#ffffff'); const A = e.mv.userData.A; Object.values(A).forEach(x => x.stop()); e.mv.userData.act = null; const k = i === imp && tipo === 1 ? b : a; anima(e.mv, k); const ac = e.mv.userData.act; if (ac) { ac.time = 0; ac.timeScale = i === imp && tipo === 2 ? 1.55 : 1; } if (i === imp && tipo === 0) tinte(e, ['#8dffa8', '#8fd0ff', '#ffb070'][ri(3)]); if (i === imp && tipo === 2 && Math.random() < .5) { ac && (ac.timeScale = 1); tinte(e, '#ffd0c4'); }
      e.mv.scale.setScalar(.01); chispas(e.gr.position.clone().add(new T.Vector3(0, 1.5, .5)), 8, ['#ffffff', '#cfe8ff'], { vel: 2, tam: .3 }); });
    let k = 0; anim(dt => { if (k >= 1) return; k = Math.min(1, k + dt * 3); E.forEach(e => e.mv.scale.setScalar(suave(k))); }); fx('parpadeo', .6); bloque = .6; };
  return {
    empieza() { ronda(); di(t('pista' + Math.min(2, ctx.modo))); }, previa() {},
    paso(dt) { bloque = Math.max(0, bloque - dt); },
    toca(h) { if (bloque > 0) return; const o = h && deQuien(h.object, 'esp'); if (!o) return; const i = o.userData.esp, e = E[i]; const p = e.gr.position.clone().add(new T.Vector3(0, 1.6, .6));
      if (i === imp) { grito(t('pillada'), 800); fx('sorpresa'); bloque = 1.3; ctx.bien(p, 100); let k = 0; anim(dt => { if (k >= 1) return; k = Math.min(1, k + dt * 1.6); e.mv.rotation.y = k * 12; e.mv.scale.setScalar(1 - k); }); setTimeout(() => { e.mv.rotation.y = 0; if (J.sala && J.sala.ctx === ctx && ctx.prog < ctx.meta) ronda(); }, 1100); }
      else { e.mal = .5; fx('splat', .6); ctx.mal(p); } },
    bot() { if (bloque > 0) return null; const e = E[imp]; e.gr.userData.bAlto = 1.5; return e.gr; }, botT: .9
  };
} };

/* ---------- ABSURDO · La Nevera Gigante ---------- */
SALAS.nevera = { dur: [55, 50, 45], sinFondo: true, crea(ctx) {
  const g = ctx.g; ctx.meta = [8, 10, 12][ctx.modo]; MU.cam.p.set(0, 2.2, 2.4); MU.cam.m.set(0, 2.1, -6); ESC.fog = new T.Fog('#9fd6f2', 12, 40);
  const pared = mat('#5fb0e0', { roughness: .5 }); const fondo = caja(12, 7, .3, mat('#3f8fcc', { roughness: .55 })); const piso = caja(12, .2, 10, mat('#7cc2ea', { roughness: .3 })); piso.position.set(0, .01, -1.5); piso.receiveShadow = true; g.add(piso); g.children.forEach(o => { if (o.isLight) o.intensity *= .45; }); ESC.environment = null; fondo.position.set(0, 3.5, -6.2); g.add(fondo); [-6, 6].forEach(x => { const p = caja(.3, 7, 10, pared); p.position.set(x, 3.5, -1.5); g.add(p); }); const techo = caja(12, .3, 10, pared); techo.position.set(0, 7, -1.5); g.add(techo);
  const lz2 = new T.PointLight('#e8f8ff', .7, 14); lz2.position.set(0, 6.4, -2); g.add(lz2); const tubo = caja(3, .1, .3, new T.MeshBasicMaterial({ color: '#ffffff' })); tubo.position.set(0, 6.8, -3); g.add(tubo);
  const vidrio = new T.MeshStandardMaterial({ color: '#bfe8ff', transparent: true, opacity: .35, roughness: .05, metalness: .2 });
  [.4, 1.7, 3.0, 4.3].forEach(y => { const s = caja(11.2, .08, 2.6, vidrio); s.position.set(0, y, -4.8); g.add(s); });
  const leches = []; [[-4.9, 1.74], [4.9, 3.04], [-4.9, 4.34], [4.8, .44]].forEach(([x, y], i) => { const l = pon(g, 'leche', .9, x, y, -4.6, { ry: rnd(-.6, .6) }); leches.push({ l, y, f: i * 1.3 }); });
  anim((dt, tt) => leches.forEach(L => { const s = Math.max(0, Math.sin(tt * 3 + L.f)); L.l.position.y = L.y + s * .35; L.l.rotation.z = Math.sin(tt * 3 + L.f) * .12; }));
  const br = pon(g, 'brocoli', 1.6, -3.3, 0, -1.4, { ry: .45 }); anima(br, 'Idle'); const tiembla = { v: 1 }; anim((dt, tt) => { br.position.x = -3.3 + Math.sin(tt * 40) * .015 * tiembla.v; });
  const huecos = []; [-3.6, -1.2, 1.2, 3.6].forEach(x => [.44, 1.74, 3.04].forEach(y => huecos.push({ x, y, b: null })));
  const premios = ['caramelo', 'calcetin', 'llave', 'libro', 'pato'];
  const B = [];
  const nuevo = () => { const libres = huecos.filter(h => !h.b); if (!libres.length) return; const h = libres[ri(libres.length)]; const gr = new T.Group(); gr.position.set(h.x, h.y, -4.6); g.add(gr); h.b = gr;
    const pk = premios[ri(premios.length - (J.modo === 2 ? 1 : 0))]; const pr = pieza(pk, .55, pk === 'caramelo' ? { tinte: PAL[ri(6)], gris: true } : {}); pr.position.y = .2; gr.add(pr);
    const hielo = new T.Mesh(new T.BoxGeometry(1.05, 1.05, 1.05), new T.MeshStandardMaterial({ color: '#e8fbff', transparent: true, opacity: .7, roughness: .05, metalness: .05, emissive: '#5ac8ff', emissiveIntensity: .35 })); hielo.position.y = .52; gr.add(hielo);
    const aristas = new T.LineSegments(new T.EdgesGeometry(hielo.geometry), new T.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: .8 })); aristas.position.y = .52; gr.add(aristas);
    gr.userData.bl = true; ctx.diana(gr, 'bl'); const o = { gr, h, hielo, aristas, pr, k: 0, e: 0, fuera: false }; B.push(o); gr.scale.setScalar(.01); };
  for (let i = 0; i < 4 + ctx.modo; i++) nuevo();
  let ap = null;
  return { mantener: true,
    paso(dt, tt) { const o = ctx.h && deQuien(ctx.h.object, 'bl'); ap = o ? B.find(b => b.gr === o) : null;
      B.forEach(b => { if (b.fuera) return; b.e = Math.min(1, b.e + dt * 3); if (b === ap) { b.k += dt * (PTR.down ? 1.7 : 1) * ctx.vel / 1.5; if (Math.random() < .5) chispas(b.gr.position.clone().add(new T.Vector3(rnd(-.4, .4), .5, .55)), 1, ['#ffffff', '#bfefff'], { vel: 1, g: -1, vida: .6, tam: .22 }); if (Math.random() < dt * 6) sint(nota(90 + ri(8)), .05, 'sine', .03); }
        else b.k = Math.max(0, b.k - dt * .25); const s = 1 - b.k * .45; b.hielo.scale.setScalar(s); b.aristas.scale.setScalar(s); b.hielo.material.opacity = .62 - b.k * .3; b.gr.scale.setScalar(b.e); b.pr.rotation.y += dt * (.5 + b.k * 6);
        if (b.k >= 1) { b.fuera = true; ctx.quita(b.gr); fx('splat', .6); fx('moneda'); ctx.bien(b.gr.position.clone().add(new T.Vector3(0, .6, 0)), 60); tiembla.v = Math.max(0, 1 - ctx.prog / ctx.meta); anima(br, ctx.prog % 3 ? 'Happy_Sway' : 'Wave', true);
          b.gr.remove(b.hielo); b.gr.remove(b.aristas); let k = 0; const p0 = b.gr.position.clone(); anim(dt2 => { if (k >= 1) return; k = Math.min(1, k + dt2 * 1.6); b.gr.position.lerpVectors(p0, MU.cp, k * .7); b.gr.scale.setScalar(1 - k); if (k >= 1) { g.remove(b.gr); b.h.b = null; } }); setTimeout(() => { if (J.sala && J.sala.ctx === ctx) nuevo(); }, 900); } });
      retiAnillo(ap ? ap.k : 0); for (let i = B.length - 1; i >= 0; i--) if (B[i].fuera) B.splice(i, 1); },
    toca() {}, previa(dt) { B.forEach(b => { b.e = Math.min(1, b.e + (dt || .016) * 3); b.gr.scale.setScalar(b.e); }); },
    bot() { const b = B.find(b => !b.fuera); if (b) b.gr.userData.bAlto = .5; return b ? b.gr : null; }
  };
} };

/* ---------- ABSURDO · La Lavadora Cósmica ---------- */
SALAS.lavadora = { dur: [50, 45, 42], crea(ctx) {
  const g = ctx.g; ctx.meta = [10, 12, 14][ctx.modo]; MU.cam.p.set(0, 2.6, 4.4); MU.cam.m.set(0, 2.6, -6);
  const cuerpo = caja(8.4, 8, 2.4, mat('#f6f9ff', { roughness: .3, metalness: .05 })); cuerpo.position.set(0, 3.2, -7.4); sombra(cuerpo); g.add(cuerpo);
  const panel = caja(8.4, 1.1, .3, mat('#c9d6ff', { roughness: .4 })); panel.position.set(0, 6.6, -6.1); g.add(panel); for (let i = 0; i < 5; i++) { const bt = cil(.22, .22, .2, mat(['#ff5fc8', '#ffd23f', '#3b8cff', '#35d46a', '#ff8a3c'][i], { emissive: ['#ff5fc8', '#ffd23f', '#3b8cff', '#35d46a', '#ff8a3c'][i], emissiveIntensity: .4 }), 16); bt.rotation.x = Math.PI / 2; bt.position.set(-2.8 + i * 1.4, 6.6, -5.9); g.add(bt); }
  const C0 = new T.Vector3(0, 2.6, -6); const aro = new T.Mesh(new T.TorusGeometry(2.9, .38, 16, 64), mat('#d8e0ea', { metalness: .85, roughness: .2 })); aro.position.copy(C0); aro.position.z += .1; g.add(aro);
  const fondoT = new T.Mesh(new T.CircleGeometry(2.9, 48), new T.MeshStandardMaterial({ color: '#1a1446', roughness: .6, metalness: .3, map: TEX.remolino })); fondoT.position.copy(C0); fondoT.position.z -= .9; g.add(fondoT);
  const cristal = new T.Mesh(new T.CircleGeometry(2.75, 48), new T.MeshStandardMaterial({ color: '#bfe8ff', transparent: true, opacity: .16, roughness: .02, metalness: .6, depthWrite: false })); cristal.position.copy(C0); cristal.position.z += .25; g.add(cristal);
  const br = pon(g, 'brocoli', 1.5, 4.7, 0, -3.6, { ry: -.5 }); anima(br, 'Joyful');
  const nC = [3, 4, 4][ctx.modo]; let obj = ri(nC), aciertosColor = 0, giro = 1, ang = 0;
  const S = []; for (let i = 0; i < 9 + ctx.modo * 2; i++) { const c = i % nC; const s = pieza('calcetin', .8, { tinte: PAL[c], gris: true }); s.userData.c = c; s.userData.so = true; g.add(s); ctx.diana(s, 'so'); S.push({ s, a: rnd(0, 6.28), r: rnd(.8, 2.1), w: rnd(.7, 1.3), z: rnd(-.6, .1), sp: new T.Vector3(rnd(-3, 3), rnd(-3, 3), rnd(-3, 3)), f: rnd(0, 6) }); }
  const burbujas = []; for (let i = 0; i < 14; i++) { const b = brillo('#dff6ff', rnd(.2, .5), .5); g.add(b); burbujas.push({ b, a: rnd(0, 6.28), r: rnd(0, 2.5), v: rnd(.5, 1.2) }); }
  const muestra = () => { meta([{ col: PAL[obj] }]); barra(t('ahora', tA('cols')[obj]) + '  ·  ' + Math.min(ctx.prog, ctx.meta) + ' / ' + ctx.meta, ctx.prog / ctx.meta); };
  ctx.barra = muestra;
  return {
    empieza() { muestra(); di(t('ahora', tA('cols')[obj])); },
    muta() { giro = -1.3; },
    paso(dt, tt) { ang += dt * giro * ctx.vel * 1.1; S.forEach(o => { const a = o.a + ang * o.w; const caida = Math.max(0, Math.sin(a)) * .35; o.s.position.set(C0.x + Math.cos(a) * o.r, C0.y + Math.sin(a) * o.r - caida, C0.z + o.z); o.s.rotation.x += o.sp.x * dt; o.s.rotation.y += o.sp.y * dt; o.s.rotation.z += o.sp.z * dt; });
      burbujas.forEach(b => { b.r += dt * b.v * .3; if (b.r > 2.7) b.r = 0; b.b.position.set(C0.x + Math.cos(b.a + ang) * b.r, C0.y + Math.sin(b.a + ang) * b.r, C0.z + .15); }); },
    toca(h) { const s = h && deQuien(h.object, 'so'); if (!s) return; const p = s.getWorldPosition(new T.Vector3());
      if (s.userData.c === obj) { fx('burbuja'); ctx.bien(p, 50); const o = S.find(x => x.s === s); o.r = rnd(.8, 2.1); o.a = rnd(0, 6.28); s.scale.setScalar(.01); let k = 0; anim(dt => { if (k >= 1) return; k = Math.min(1, k + dt * 2); s.scale.setScalar(k); });
        if (++aciertosColor >= 3 && ctx.prog < ctx.meta) { aciertosColor = 0; let n = obj; while (n === obj) n = ri(nC); obj = n; fx('parpadeo'); di(t('ahora', tA('cols')[obj])); } muestra(); }
      else { ctx.mal(p); } },
    previa(dt) { this.paso(dt || .016); },
    bot() { const o = S.find(o => o.s.userData.c === obj && o.s.scale.x > .9); return o ? o.s : null; }, botT: .5,
    fin() { meta(null); }
  };
} };

/* ---------- ABSURDO · La Sopa de Letras ---------- */
SALAS.sopa = { dur: [60, 55, 50], crea(ctx) {
  const g = ctx.g; MU.cam.p.set(0, 3.6, 3.2); MU.cam.m.set(0, 1, -5);
  const pal = baraja(tA('palabras')).filter(w => w.length <= 5).slice(0, [2, 3, 3][ctx.modo]); ctx.meta = pal.reduce((a, w) => a + w.length, 0);
  const ol = cil(3.4, 3, 2.2, mat('#e2434f', { metalness: .15, roughness: .3, side: T.DoubleSide }), 48, true); ol.position.set(0, 1.1, -5); sombra(ol); g.add(ol);
  const fondoO = cil(3, 3, .1, mat('#9aa2ad', { metalness: .9, roughness: .3 }), 48); fondoO.position.set(0, .05, -5); g.add(fondoO);
  const borde = new T.Mesh(new T.TorusGeometry(3.4, .13, 10, 64), mat('#ffffff', { metalness: .2, roughness: .25 })); borde.rotation.x = Math.PI / 2; borde.position.set(0, 2.2, -5); g.add(borde);
  [-1, 1].forEach(s => { const asa = new T.Mesh(new T.TorusGeometry(.5, .1, 8, 20, Math.PI), mat('#2a2a2a')); asa.position.set(s * 3.6, 1.8, -5); asa.rotation.y = Math.PI / 2; asa.rotation.z = s > 0 ? -Math.PI / 2 : Math.PI / 2; g.add(asa); });
  const txS = lz(256, 256, (q, w) => { q.fillStyle = '#ff9a3c'; q.fillRect(0, 0, w, w); for (let i = 0; i < 60; i++) { q.fillStyle = `rgba(255,${200 + ri(55)},${100 + ri(80)},.5)`; q.beginPath(); q.arc(rnd(0, w), rnd(0, w), rnd(4, 18), 0, 7); q.fill(); } q.fillStyle = 'rgba(60,160,60,.8)'; for (let i = 0; i < 30; i++) q.fillRect(rnd(0, w), rnd(0, w), 6, 6); });
  const caldo = new T.Mesh(new T.CircleGeometry(3.32, 48), mat('#ffffff', { map: txS, roughness: .25 })); caldo.rotation.x = -Math.PI / 2; caldo.position.set(0, 1.85, -5); g.add(caldo);
  const fuego = brillo('#ff7a1c', 7, .6); fuego.position.set(0, -.2, -4.4); g.add(fuego); const lf = new T.PointLight('#ff8a3c', 1.4, 8); lf.position.set(0, .3, -3.6); g.add(lf);
  const chef = pon(g, 'chef', 2.6, 2.6, 1.2, -8.4, { ry: -.25 }); const cuch = new T.Group(); cuch.position.set(0, 1.85, -5); g.add(cuch); const palo = cil(.07, .07, 4, mat('#c98a4a'), 8); palo.position.set(1.4, 1.6, 0); palo.rotation.z = .5; cuch.add(palo); const cazo = bola(.35, mat('#c98a4a'), 12); cazo.scale.y = .4; cazo.position.set(.45, -.1, 0); cuch.add(cazo);
  anim((dt, tt) => { ondula(chef, tt, .1, 2.2); chef.position.y = 1.2 + Math.sin(tt * 1.4) * .25; cuch.rotation.y = tt * 1.2 * ctx.vel; caldo.rotation.z = -tt * .3; if (Math.random() < dt * 5) chispas(new T.Vector3(rnd(-2.5, 2.5), 2, -5 + rnd(-2, 2)), 1, ['#ffffff'], { tex: TEX.humo, vel: .4, g: -.6, vida: 2, tam: .8 }); });
  const txL = {}; const texLetra = (c, especial) => txL[c + especial] || (txL[c + especial] = lz(128, 128, (q, w) => { q.fillStyle = especial ? '#fff3a8' : '#fff8ec'; q.beginPath(); q.arc(w / 2, w / 2, w / 2 - 4, 0, 7); q.fill(); q.lineWidth = 6; q.strokeStyle = '#c96a00'; q.stroke(); q.font = '78px LG'; q.textAlign = 'center'; q.textBaseline = 'middle'; q.fillStyle = '#7a2a00'; q.fillText(c, w / 2, w / 2 + 5); }));
  let wi = 0, li = 0; const L = [];
  const quiere = () => pal[wi] ? pal[wi][li] : null;
  const pinta = () => { meta(pal[wi] ? [...pal[wi]].map((c, i) => ({ txt: c, ok: i < li })) : null); ctx.barra(); };
  const ABC = 'ABCDEFGHIJLMNOPRSTUV';
  const nueva = (c) => { const m = new T.Mesh(new T.CircleGeometry(.42, 32), new T.MeshStandardMaterial({ map: texLetra(c, false), roughness: .5, transparent: true })); m.userData.letra = c; g.add(m); ctx.diana(m, 'letra'); const o = { m, a: rnd(0, 6.28), r: rnd(.6, 2.6), w: rnd(.15, .35) * (Math.random() < .5 ? 1 : -1), f: rnd(0, 6), salto: 0 }; L.push(o); return o; };
  const reparte = () => { const w = pal[wi]; if (!w) return; L.forEach(o => { g.remove(o.m); ctx.quita(o.m); }); L.length = 0; [...new Set(w)].forEach(c => { nueva(c); nueva(c); }); for (let i = 0; i < 6 + ctx.modo * 2; i++) { let c = ABC[ri(ABC.length)]; if (w.includes(c)) c = ABC[ri(ABC.length)]; nueva(c); } };
  reparte();
  return {
    empieza() { pinta(); }, previa(dt) { this.paso(dt || .016, 0); },
    paso(dt, tt) { const q = quiere(); L.forEach(o => { o.a += o.w * dt * ctx.vel; o.salto = Math.max(0, o.salto - dt); const p = new T.Vector3(Math.cos(o.a) * o.r, 1.95 + Math.sin(tt * 2 + o.f) * .05 + Math.sin(o.salto * Math.PI) * .8, -5 + Math.sin(o.a) * o.r * .85); o.m.position.copy(p); o.m.lookAt(MU.cp); if (Math.random() < dt * .08) o.salto = 1; }); },
    toca(h) { const m = h && deQuien(h.object, 'letra'); if (!m) return; const p = m.position.clone();
      if (m.userData.letra === quiere()) { li++; fx('pop'); ctx.bien(p, 60); g.remove(m); ctx.quita(m); L.splice(L.findIndex(o => o.m === m), 1); if (li >= pal[wi].length) { wi++; li = 0; fx('nivel'); grito(pal[wi - 1], 1100); anim(() => {}); reparte(); } pinta(); }
      else { ctx.mal(p); const o = L.find(o => o.m === m); if (o) o.salto = 1; } },
    bot() { const q = quiere(); const o = L.find(o => o.m.userData.letra === q); return o ? o.m : null; }, botT: .4,
    fin() { meta(null); }
  };
} };

/* ---------- GOLOSINAS · El Campo de Caramelos (melodía) ---------- */
SALAS.caramelos = { dur: [80, 75, 70], crea(ctx) {
  const g = ctx.g; ctx.meta = [3, 4, 5][ctx.modo]; MU.cam.p.set(0, 2.5, 3); MU.cam.m.set(0, 1.3, -5);
  const gu = pon(g, 'gusano', 2.6, 0, 0, -6.4); anim((dt, tt) => { ondula(gu, tt, .14, 2.6); });
  const notas = [60, 64, 67, 72, 76], cols = [PAL[0], PAL[1], PAL[2], PAL[3], PAL[4]];
  const K = notas.map((n, i) => { const gr = new T.Group(); gr.position.set((i - 2) * 1.95 - .35, 0, -3.5 + Math.abs(i - 2) * .25); g.add(gr);
    const txp = lz(256, 64, (q, w, h) => { for (let j = 0; j < 8; j++) { q.fillStyle = j % 2 ? '#ffffff' : cols[i]; q.fillRect(j * w / 8, 0, w / 8, h); } }); const ped = cil(.75, .85, 1, mat('#fff', { map: txp, roughness: .35 }), 32); ped.position.y = .5; gr.add(ped);
    const c = pieza('caramelo', 1.5, { tinte: cols[i], gris: true, ancho: true }); c.position.y = 1.05; gr.add(c); const ms = []; c.traverse(o => { if (o.isMesh) { o.material.emissive = new T.Color(cols[i]); o.material.emissiveIntensity = 0; ms.push(o.material); } });
    const b = brillo(cols[i], 3.4, 0); b.position.y = 1.6; gr.add(b); gr.userData.ca = i; ctx.diana(gr, 'ca'); return { gr, c, ms, b, n, luz: 0 }; });
  const enciende = (i, d) => { const k = K[i]; k.luz = d || .5; marimba(k.n, .3); };
  anim(dt => K.forEach(k => { k.luz = Math.max(0, k.luz - dt); const on = k.luz > 0 ? 1 : 0; k.ms.forEach(m => { m.emissiveIntensity = lerp(m.emissiveIntensity, on * 1.3, .3); }); k.b.material.opacity = lerp(k.b.material.opacity, on * .9, .3); k.c.position.y = 1.05 + on * .25; k.c.rotation.y += dt * (.4 + on * 4); }));
  const seq = []; let fase = 'espera', idx = 0, tt0 = 0; const largo0 = 2;
  const muestra = () => { fase = 'mira'; idx = 0; tt0 = .5; di(t('simonMira'), 1600); };
  const nuevaRonda = () => { while (seq.length < largo0 + ctx.prog) seq.push(ri(5)); muestra(); };
  return { sinMuta: true,
    empieza() { nuevaRonda(); },
    paso(dt) { if (fase === 'mira') { tt0 -= dt; if (tt0 <= 0) { if (idx < seq.length) { enciende(seq[idx], .45 / ctx.vel); idx++; tt0 = .7 / ctx.vel; } else { fase = 'tu'; idx = 0; di(t('simonTu'), 1400); meviGesto('senala'); } } } },
    toca(h) { if (fase !== 'tu') return; const o = h && deQuien(h.object, 'ca'); if (!o) return; const i = o.userData.ca, p = o.getWorldPosition(new T.Vector3()).add(new T.Vector3(0, 1.8, 0)); enciende(i, .3);
      if (i === seq[idx]) { idx++; suma(10); if (idx >= seq.length) { fase = 'espera'; ctx.bien(p, 150); anim(() => {}); if (ctx.prog < ctx.meta) setTimeout(() => { if (J.sala && J.sala.ctx === ctx) nuevaRonda(); }, 1100); } }
      else { ctx.mal(p); fase = 'espera'; di(t('simonMal'), 1400); setTimeout(() => { if (J.sala && J.sala.ctx === ctx) muestra(); }, 1300); } },
    bot() { if (fase !== 'tu') return null; const k = K[seq[idx]]; k.gr.userData.bAlto = 1.2; return k.gr; }, botT: .35
  };
} };

/* ---------- GOLOSINAS · El Río de Chocolate ---------- */
SALAS.rio = { dur: [50, 45, 42], crea(ctx) {
  const g = ctx.g; ctx.meta = [10, 12, 14][ctx.modo]; MU.cam.p.set(0, 3.1, 2.4); MU.cam.m.set(0, .2, -4.6);
  const txR = lz(512, 256, (q, w, h) => { q.fillStyle = '#5a2e14'; q.fillRect(0, 0, w, h); for (let i = 0; i < 40; i++) { q.strokeStyle = `rgba(${140 + ri(60)},${80 + ri(40)},${40 + ri(30)},.5)`; q.lineWidth = rnd(3, 10); q.beginPath(); const y = rnd(0, h); q.moveTo(0, y); q.bezierCurveTo(w * .3, y + rnd(-30, 30), w * .6, y + rnd(-30, 30), w, y); q.stroke(); } }, [4, 1]);
  const rio = new T.Mesh(new T.PlaneGeometry(30, 4.6, 60, 6), mat('#ffffff', { map: txR, roughness: .18, metalness: .1 })); rio.rotation.x = -Math.PI / 2; rio.position.set(0, .08, -3.2); g.add(rio);
  const pos = rio.geometry.attributes.position, base = pos.array.slice();
  const txB = lz(256, 64, (q, w, h) => { q.fillStyle = '#ffd9a0'; q.fillRect(0, 0, w, h); q.strokeStyle = '#d9a05a'; q.lineWidth = 3; for (let x = 0; x < w; x += 16) { q.beginPath(); q.moveTo(x, 0); q.lineTo(x, h); q.stroke(); } for (let y = 0; y < h; y += 16) { q.beginPath(); q.moveTo(0, y); q.lineTo(w, y); q.stroke(); } }, [12, 1]);
  [-.75, -5.65].forEach(z => { const o = caja(30, .5, .8, mat('#fff', { map: txB, roughness: .7 })); o.position.set(0, .25, z); sombra(o); g.add(o); });
    piruleta(g, 6, -9.6, 4.2, '#ff4f9a', '#fff'); piruleta(g, 9.5, -8.6, 3.2, '#5fb8ff', '#fff'); baston(g, -5, -9.2, 3.8, .4); arbolAlgodon(g, 12, -10, 1.6, '#c9b3ff');
  const gu = pon(g, 'gusano', 1.6, -4.6, .5, -6.4, { ry: .4 }); anim((dt, tt) => ondula(gu, tt, .12, 2.4));
  const nC = [3, 4, 5][ctx.modo]; let obj = ri(nC), cuenta = 0; const C = [];
  const lanza = () => { const c = Math.random() < .42 ? obj : ri(nC); const m = pieza('caramelo', 1.25, { tinte: PAL[c], gris: true, ancho: true }); m.userData.c = c; m.userData.ca = true; const dir = Math.random() < .5 ? 1 : 1; m.position.set(-14, .3, rnd(-4.6, -1.8)); g.add(m); ctx.diana(m, 'ca'); C.push({ m, v: rnd(1.6, 2.4), f: rnd(0, 6), sal: 0 }); };
  let prox = 0;
  const muestra = () => { meta([{ col: PAL[obj] }]); barra(t('ahora', tA('cols')[obj]) + '  ·  ' + Math.min(ctx.prog, ctx.meta) + ' / ' + ctx.meta, ctx.prog / ctx.meta); }; ctx.barra = muestra;
  for (let i = 0; i < 6; i++) { lanza(); C[i].m.position.x = -12 + i * 4.5; }
  return {
    empieza() { muestra(); di(t('ahora', tA('cols')[obj])); },
    paso(dt, tt) { txR.offset.x -= dt * .12 * ctx.vel; for (let i = 0; i < pos.count; i++) { const x = base[i * 3], y = base[i * 3 + 1]; pos.array[i * 3 + 2] = Math.sin(x * .8 + tt * 2) * .05 + Math.cos(y * 1.6 + tt * 1.5) * .04; } pos.needsUpdate = true;
      prox -= dt; if (prox <= 0) { prox = rnd(.55, .9) / ctx.vel; lanza(); }
      for (let i = C.length - 1; i >= 0; i--) { const o = C[i]; if (o.sal > 0) { o.sal += dt; o.m.position.y += dt * 6; o.m.scale.setScalar(Math.max(.01, 1 - o.sal)); if (o.sal >= 1) { g.remove(o.m); C.splice(i, 1); } continue; } o.m.position.x += o.v * dt * ctx.vel; o.m.position.y = .32 + Math.sin(tt * 3 + o.f) * .08; o.m.rotation.y += dt; o.m.rotation.z = Math.sin(tt * 2 + o.f) * .2; if (o.m.position.x > 14) { g.remove(o.m); ctx.quita(o.m); C.splice(i, 1); } } },
    toca(h) { const m = h && deQuien(h.object, 'ca'); if (!m) return; const o = C.find(o => o.m === m); if (!o || o.sal) return; const p = m.position.clone();
      if (m.userData.c === obj) { o.sal = .01; ctx.quita(m); fx('splat', .5); fx('moneda'); ctx.bien(p, 50); if (++cuenta >= 3 && ctx.prog < ctx.meta) { cuenta = 0; let n = obj; while (n === obj) n = ri(nC); obj = n; fx('parpadeo'); di(t('ahora', tA('cols')[obj])); } muestra(); }
      else ctx.mal(p); },
    previa(dt) { this.paso(dt || .016, J.sala ? J.sala.t : 0); },
    bot() { const o = C.find(o => o.m.userData.c === obj && !o.sal && o.m.position.x > -9 && o.m.position.x < 9); return o ? o.m : null; }, botT: .4,
    fin() { meta(null); }
  };
} };

/* ---------- FERIA · La Montaña Rusa Estelar ---------- */
SALAS.montana = { dur: [48, 44, 40], crea(ctx) {
  const g = ctx.g; ctx.meta = [14, 18, 22][ctx.modo]; MU.libre = true; MU.mira = 0;
  const pts = [[0, 1.6, 10], [11, 3, 7], [17, 8, -4], [12, 13, -16], [0, 9, -22], [-10, 4, -24], [-18, 9, -12], [-16, 5, 0], [-8, 2.2, 8]].map(p => new T.Vector3(...p));
  const cv = new T.CatmullRomCurve3(pts, true, 'catmullrom', .5), N = 260, up = new T.Vector3(0, 1, 0);
  const lado = (u, s) => { const p = cv.getPointAt(u), tg = cv.getTangentAt(u), b = new T.Vector3().crossVectors(tg, up).normalize(); return p.add(b.multiplyScalar(s)); };
  const rail = mat('#e8e8f0', { metalness: .8, roughness: .25 }); [-.55, .55].forEach(s => { const ps = []; for (let i = 0; i <= N; i++) ps.push(lado(i / N % 1, s)); g.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(ps, true), 600, .06, 6, true), rail)); });
  const trav = new T.InstancedMesh(new T.BoxGeometry(1.4, .08, .22), mat('#7a4a2a'), N), dm = new T.Object3D(); for (let i = 0; i < N; i++) { const u = i / N, p = cv.getPointAt(u); dm.position.copy(p); dm.position.y -= .06; dm.lookAt(p.clone().add(cv.getTangentAt(u))); dm.updateMatrix(); trav.setMatrixAt(i, dm.matrix); } g.add(trav);
  const sop = mat('#ff4fb4', { metalness: .4, roughness: .4 }); for (let i = 0; i < N; i += 10) { const p = cv.getPointAt(i / N); if (p.y < 1.2) continue; const c = cil(.08, .1, p.y, sop, 6); c.position.set(p.x, p.y / 2, p.z); g.add(c); }
  /* bombillas a lo largo de la vía */
  for (let i = 0; i < N; i += 6) { const p = lado(i / N, i % 12 ? .8 : -.8); const b = brillo(['#ffd23f', '#ff4fb4', '#56d7ff'][i % 3], .5, .9); b.position.copy(p).add(new T.Vector3(0, .2, 0)); g.add(b); }
  const va = pieza('vagoneta', 1.6, { ancho: true }); g.add(va);
  const E = []; const nE = 34; for (let i = 0; i < nE; i++) { const u = (i + .5) / nE, s = rnd(-2.2, 2.2), p = lado(u, s); p.y += rnd(1.6, 3); const m = new T.Mesh(new T.PlaneGeometry(.9, .9), new T.MeshBasicMaterial({ map: TEX.estrella, color: '#ffd23f', transparent: true, depthWrite: false })); m.position.copy(p); g.add(m); const hl = brillo('#ffd23f', 1.4, .5); m.add(hl); m.userData.est = true; ctx.diana(m, 'est'); E.push({ m, u, vis: true }); }
  let u = 0, vu = 0, vueltas = 0;
  const camP = new T.Vector3(), camM = new T.Vector3();
  const coloca = dt => { const tg = cv.getTangentAt(u), p = cv.getPointAt(u); const obj = .045 * ctx.vel * (1 + clamp(-tg.y, -.5, .8) * .9); vu = lerp(vu, obj, .05); const u0 = u; u = (u + vu * dt) % 1; if (u < u0) { vueltas++; E.forEach(e => { e.vis = true; e.m.visible = true; if (!ctx.objs.includes(e.m)) ctx.objs.push(e.m); }); }
    va.position.copy(p); va.lookAt(p.clone().add(tg)); camP.copy(p).add(new T.Vector3(0, 1.55, 0)).addScaledVector(tg, -.4); camM.copy(cv.getPointAt((u + .03) % 1)).add(new T.Vector3(0, 1.2, 0));
    RIG.position.set(0, 0, 0); CAM.position.copy(camP); const ox = (PTR.x - .5) * 3, oy = (.5 - PTR.y) * 2; const rt = new T.Vector3().crossVectors(tg, up).normalize(); CAM.lookAt(camM.clone().addScaledVector(rt, ox).add(new T.Vector3(0, oy, 0))); MU.cp.copy(camP); MU.cm.copy(camM); };
  coloca(0);
  anim((dt, tt) => E.forEach((e, i) => { e.m.lookAt(CAM.position); e.m.rotateZ(tt * 2 + i); }));
  return {
    previa(dt) { if (J.sala && J.sala.fase !== 'juego') coloca(dt * .2); }, empieza() { fx('sorpresa'); },
    paso(dt) { coloca(dt); if (Math.random() < dt * 2) sint(nota(40 + ri(5)), .1, 'sawtooth', .02); },
    toca(h) { const m = h && deQuien(h.object, 'est'); if (!m) return; const e = E.find(e => e.m === m); e.vis = false; m.visible = false; ctx.quita(m); fx('moneda'); ctx.bien(m.position.clone(), 40); },
    bot() { const e = E.filter(e => e.vis).map(e => ({ e, d: e.m.position.distanceTo(CAM.position) })).filter(o => { const v = o.e.m.position.clone().project(CAM); return v.z < 1 && Math.abs(v.x) < .8 && Math.abs(v.y) < .8; }).sort((a, b) => a.d - b.d)[0]; return e ? e.e.m : null; }, botT: .25
  };
} };

/* ---------- FERIA · El Carrusel Encantado ---------- */
SALAS.carrusel = { dur: [60, 55, 50], crea(ctx) {
  const g = ctx.g; ctx.meta = [3, 4, 5][ctx.modo]; MU.cam.p.set(0, 2.9, 4.6); MU.cam.m.set(0, 1.7, -6);
  const C = new T.Group(); C.position.set(0, 0, -6.4); g.add(C); const R = 3.3;
  const txR = lz(512, 64, (q, w, h) => { for (let i = 0; i < 16; i++) { q.fillStyle = i % 2 ? '#ffffff' : '#ff3b6b'; q.fillRect(i * w / 16, 0, w / 16, h); } q.fillStyle = '#ffd23f'; for (let i = 0; i < 32; i++) { q.beginPath(); q.arc(i * w / 32 + 8, h - 8, 6, 0, 7); q.fill(); } });
  const base = cil(R + .6, R + .7, .45, mat('#fff', { map: txR, roughness: .4 }), 48); base.position.y = .22; C.add(base); const suelo2 = cil(R + .55, R + .55, .05, mat('#5a2a7a', { roughness: .6 }), 48); suelo2.position.y = .47; C.add(suelo2);
  const techo = new T.Mesh(new T.ConeGeometry(R + 1, 1.8, 48, 1, true), mat('#fff', { map: txR, roughness: .45, side: T.DoubleSide })); techo.position.y = 5; C.add(techo); const fr = cil(R + 1, R + 1, .5, mat('#fff', { map: txR }), 48, true); fr.position.y = 3.9; C.add(fr);
  const eje = cil(.35, .35, 4.4, mat('#ffd23f', { metalness: .8, roughness: .25 }), 16); eje.position.y = 2.6; C.add(eje); const top = new T.Mesh(new T.ConeGeometry(.3, .8, 12), mat('#ffd23f', { metalness: .8, roughness: .25 })); top.position.y = 6.3; C.add(top);
  const bombs = []; for (let i = 0; i < 24; i++) { const a = i / 24 * 6.283, m = new T.MeshStandardMaterial({ color: '#fff6d0', emissive: '#ffd27a', emissiveIntensity: 1 }); const b = bola(.09, m, 8); b.position.set(Math.cos(a) * (R + 1.02), 3.68, Math.sin(a) * (R + 1.02)); C.add(b); bombs.push(m); }
  anim((dt, tt) => bombs.forEach((m, i) => { m.emissiveIntensity = .6 + ((i + Math.floor(tt * 4)) % 2) * (.8 + pulso()); }));
  const mc = pon(g, 'maestro', 1.8, -4.3, 0, -2.6, { ry: .5 }); anima(mc, 'Idle');
  guirnalda(g, new T.Vector3(-7, 5, -4), new T.Vector3(7, 5, -4), 20, ['#ffd23f', '#ff4fb4', '#56d7ff', '#ffffff'], .6);
  const pastel = ['#ffd0e8', '#d0e8ff', '#e8ffd0', '#fff0c0', '#e8d0ff', '#c0fff0'];
  const H = []; for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283, gr = new T.Group(); gr.position.set(Math.cos(a) * R, 0, Math.sin(a) * R); gr.rotation.y = -a; C.add(gr);
    const palo = cil(.05, .05, 3.6, mat('#ffd23f', { metalness: .9, roughness: .2 }), 8); palo.position.y = 2.1; gr.add(palo); const cab = pieza('caballo', 1.5, { tinte: pastel[i] }); cab.rotation.y = Math.PI / 2; cab.position.y = .9; gr.add(cab);
    const regalo = new T.Group(); const rc = PAL[i]; const cj = caja(.75, .75, .75, mat(rc, { roughness: .35 })); regalo.add(cj); const c1 = caja(.78, .78, .14, mat('#ffffff')); regalo.add(c1); const c2 = caja(.14, .78, .78, mat('#ffffff')); regalo.add(c2); const lazo = new T.Mesh(new T.TorusGeometry(.16, .05, 6, 16), mat('#ffffff')); lazo.position.y = .42; regalo.add(lazo); regalo.position.y = 3.05; regalo.scale.setScalar(.01); gr.add(regalo);
    gr.userData.cab = i; ctx.diana(gr, 'cab'); H.push({ gr, cab, regalo, f: i * 1.05, cubierto: 0 }); }
  const llave = pieza('llave', .85, { emis: '#ffb000', emisI: .7 }); const lb = brillo('#ffd23f', 2, .8); llave.add(lb); llave.position.y = 2.75;
  let w = .25, fase = 'espera', tf = 0, quien = 0, dir = 1;
  const ronda = () => { quien = ri(6); H[quien].gr.add(llave); llave.visible = true; H.forEach(h => { h.cubierto = 0; }); fase = 'mira'; tf = 2.2 / Math.max(1, ctx.vel * .9); di(t('mira'), 1800); anima(mc, 'Talk', true); w = .3; };
  return {
    empieza() { ronda(); },
    paso(dt, tt) {
      tf -= dt;
      if (fase === 'mira' && tf <= 0) { fase = 'tapa'; tf = .7; H.forEach(h => { h.tapar = true; }); fx('popg'); }
      if (fase === 'tapa' && tf <= 0) { llave.visible = false; fase = 'gira'; tf = [3, 4, 5][ctx.modo]; dir = Math.random() < .5 ? 1 : -1; fx('sorpresa', .6); }
      if (fase === 'gira') { const k = 1 - tf / [3, 4, 5][ctx.modo]; w = lerp(w, dir * (1.4 + ctx.modo * .6) * ctx.vel * (k > .5 && ctx.modo === 2 ? -1 : 1), .03); if (tf <= 0) { fase = 'frena'; tf = 1.4; } }
      if (fase === 'frena') { w = lerp(w, ctx.modo === 2 ? .12 : 0, .06); if (tf <= 0) { fase = 'elige'; di(t('donde'), 1600); meviGesto('senala'); } }
      if (fase === 'elige' && ctx.modo < 2) w = lerp(w, 0, .1);
      C.rotation.y += w * dt;
      H.forEach(h => { h.gr.position.y = Math.sin(tt * 2.4 + h.f) * .25; if (h.tapar) h.cubierto = Math.min(1, h.cubierto + dt * 3); else h.cubierto = Math.max(0, h.cubierto - dt * 3); h.regalo.scale.setScalar(Math.max(.01, suave(h.cubierto))); h.regalo.rotation.y += dt; });
      llave.rotation.y += dt * 2;
    },
    toca(h) { if (fase !== 'elige') return; const o = h && deQuien(h.object, 'cab'); if (!o) return; const i = o.userData.cab; fase = 'revela'; H.forEach(x => { x.tapar = false; }); llave.visible = true; const p = H[quien].gr.getWorldPosition(new T.Vector3()).add(new T.Vector3(0, 3, 0));
      if (i === quien) { fx('premio'); ctx.bien(p, 150); anima(mc, 'Cheer', true); confeti(p, 40); } else { ctx.mal(H[i].gr.getWorldPosition(new T.Vector3()).add(new T.Vector3(0, 3, 0))); chispas(p, 20, ['#ffd23f'], { vel: 2, tam: .4 }); }
      setTimeout(() => { if (J.sala && J.sala.ctx === ctx && ctx.prog < ctx.meta) ronda(); }, 1700); },
    bot() { if (fase !== 'elige') return null; H[quien].gr.userData.bAlto = 1.6; return H[quien].gr; }, botT: .6
  };
} };

/* ======================= FINALES ======================= */
function final() {
  J.fase = 'final'; const tipo = J.modo === 0 ? 'desfile' : J.modo === 1 ? 'guardianes' : J.patos >= 4 ? 'bola' : 'copa';
  hud(false); barra(null); meta(null); crono(null); musica('final'); MU.sel = null;
  transicion(() => {
    plaza({ noche: true, radio: tipo === 'bola' ? 15 : 0 });
    const g = MU.g; if (MU.plaza && MU.plaza.remolino) MU.plaza.remolino.material.opacity = 1; if (MU.plaza && MU.plaza.maestro) MU.plaza.maestro.visible = false; MU.cam.p.set(0, 2.2, 9.5); MU.cam.m.set(0, 3, -4); MU.mira = .05; MU.cp.copy(MU.cam.p); MU.cm.copy(MU.cam.m);
    let fw = 0; anim(dt => { fw -= dt; if (fw <= 0) { fw = rnd(.25, .6); const p = new T.Vector3(rnd(-16, 16), rnd(9, 17), rnd(-30, -14)); chispas(p, LITE ? 20 : 46, [['#ff4fb4', '#ffd23f'], ['#56d7ff', '#ffffff'], ['#7dff9a', '#ffd23f'], ['#b26bff', '#ff8a3c']][ri(4)], { vel: rnd(5, 8), g: 2.2, vida: 1.6, tam: .5 }); fx('pop', .25, rnd(.6, .9)); } });
    const guard = [['brocoli', 1.6], ['buho', 1.4], ['maestro', 1.75], ['gusano', 1.3], ['chef', 1.8]];
    if (tipo === 'desfile') {
      const fila = guard.map(([k, h], i) => { const p = pon(g, k, h, -9 - i * 2.8, k === 'chef' ? .6 : 0, 3, { ry: Math.PI / 2 }); anima(p, i % 2 ? 'Joyful' : 'Walking'); return p; });
      const mv = pon(g, 'mevi', 1.1, -9 - 5 * 2.8, 0, 3, { ry: Math.PI / 2 }); anima(mv, 'andar'); try { const c = MEVICARA(T, mv, '../packs/comun/mevi/caras.png?v=18.37'); anim((dt, tt) => c.parpa(tt)); } catch (e) {} fila.push(mv);
      anim((dt, tt) => fila.forEach((p, i) => { p.position.x += dt * 2.1; p.position.y = (i === 3 || i === 4 ? .3 : 0) + Math.abs(Math.sin(tt * 4 + i)) * .1; if (guard[i] && (guard[i][0] === 'gusano' || guard[i][0] === 'chef')) ondula(p, tt, .14, 3); if (p.position.x > 16) p.position.x -= 36; }));
      for (let i = 0; i < 10; i++) globo(g, rnd(-12, 12), rnd(4, 9), rnd(-10, -2), ['#ff4fb4', '#ffd23f', '#56d7ff', '#7dff9a', '#b26bff'][i % 5]);
      let cf = 0; anim(dt => { cf -= dt; if (cf <= 0) { cf = 2.2; confeti(new T.Vector3(rnd(-6, 6), 7, rnd(-4, 2)), LITE ? 30 : 70); } });
    } else {
      const pos = guard.map(([k, h], i) => { const a = (i / 4 - .5) * 2.2, p = pon(g, k, h, Math.sin(a) * 4.4, k === 'chef' ? .7 : 0, -2 + Math.cos(a) * 3.2 - 3.2 + 3.2, { ry: -a * .6 }); p.position.z = 3.4 - Math.cos(a) * 1.2; anima(p, tipo === 'guardianes' ? 'Cheer' : 'Joyful'); if (k === 'gusano' || k === 'chef') anim((dt, tt) => ondula(p, tt, .14, 3)); return p; });
      if (tipo === 'guardianes') { pos.forEach((p, i) => { const e = new T.Sprite(new T.SpriteMaterial({ map: TEX.estrella, color: '#ffd23f', transparent: true, depthWrite: false })); e.scale.set(.6, .6, 1); const b = brillo('#ffd23f', 2, .7); const s = new T.Group(); s.add(e); s.add(b); s.position.copy(p.position).add(new T.Vector3(0, 2, 0)); g.add(s); const dst = new T.Vector3((i - 2) * 3.2, 11 + (i % 2) * 2, -16); let k = -i * .4 - 1.5; anim(dt => { k += dt * .3; const kk = suave(clamp(k, 0, 1)); s.position.lerpVectors(p.position.clone().add(new T.Vector3(0, 2, 0)), dst, kk); s.scale.setScalar(1 + kk * 2.5); if (k > 0 && k < 1 && Math.random() < .5) chispas(s.position.clone(), 1, ['#ffd23f', '#ffffff'], { vel: .4, g: 0, vida: .8, tam: .3 }); }); }); viaje(new T.Vector3(0, 1.6, 9), new T.Vector3(0, 6, -10), 9, () => {}); }
      else { const copa = pon(g, 'copa', 3, 0, 0, -2, {}); copa.scale.setScalar(.01); const rayos = new T.Group(); rayos.position.set(0, 5, -2); g.add(rayos); for (let i = 0; i < 10; i++) { const r = new T.Mesh(new T.ConeGeometry(.6, 18, 12, 1, true), new T.MeshBasicMaterial({ color: '#ffe9a0', transparent: true, opacity: .12, depthWrite: false, blending: T.AdditiveBlending, side: T.DoubleSide })); r.position.y = 9; const piv = new T.Group(); piv.rotation.z = (i / 10 - .5) * 2.4; piv.add(r); rayos.add(piv); }
        const lz3 = new T.PointLight('#ffd27a', 2.5, 14); lz3.position.set(0, 5, 0); g.add(lz3); let k = 0; anim((dt, tt) => { k = Math.min(1, k + dt * .25); copa.scale.setScalar(Math.max(.01, suave(k))); copa.position.y = 1.8 + suave(k) * 1.8 + Math.sin(tt * 2) * .1; copa.rotation.y += dt * .8; rayos.rotation.z = tt * .2; rayos.children.forEach((p, i) => { p.children[0].material.opacity = (.08 + Math.sin(tt * 2 + i) * .05) * k; }); if (Math.random() < .3) chispas(copa.position.clone().add(new T.Vector3(rnd(-1, 1), 2.4, rnd(-1, 1))), 1, ['#ffd23f', '#ffffff'], { vel: 1.4, g: -.5, vida: 1, tam: .3 }); });
        if (tipo === 'bola') { /* la plaza entera cabe en una bola de nieve */
          const nieve = []; const esf = new T.Mesh(new T.SphereGeometry(17, 48, 32), new T.MeshStandardMaterial({ color: '#dff4ff', transparent: true, opacity: 0, roughness: .02, metalness: .3, depthWrite: false, side: T.DoubleSide })); esf.position.set(0, 0, -2); g.add(esf);
          const pie = cil(14, 16, 4, mat('#7a3f1c', { roughness: .5 }), 64); pie.position.set(0, -2, -2); g.add(pie); const aro = new T.Mesh(new T.TorusGeometry(14.2, .4, 10, 64), mat('#ffd23f', { metalness: .9, roughness: .2 })); aro.rotation.x = Math.PI / 2; aro.position.set(0, 0, -2); g.add(aro);
          let tb = 0; anim((dt, tt) => { tb += dt; if (tb > 3 && nieve.length < (LITE ? 120 : 320)) for (let i = 0; i < 4; i++) { const s = new T.Sprite(new T.SpriteMaterial({ map: TEX.chispa, color: '#ffffff', transparent: true, depthWrite: false })); const z = rnd(.06, .16); s.scale.set(z, z, 1); s.position.set(rnd(-12, 12), rnd(8, 15), rnd(-14, 10)); g.add(s); nieve.push({ s, v: rnd(.4, .9), f: rnd(0, 6) }); }
            nieve.forEach(n => { n.s.position.y -= n.v * dt; n.s.position.x += Math.sin(tt + n.f) * dt * .3; if (n.s.position.y < 0) n.s.position.y = 14; });
            esf.material.opacity = clamp((tb - 6) * .05, 0, .16); });
          setTimeout(() => { if (J.fase === 'final') viaje(new T.Vector3(0, 14, 44), new T.Vector3(0, 2, -2), 7, () => {}); }, BOT ? 100 : 6500);
        } }
    }
    meviGesto('salta'); fx('victoria');
    setTimeout(() => { if (J.fase !== 'final') return; di(t('fin_' + tipo)); meviGesto('feliz'); }, 1200);
    setTimeout(() => { if (J.fase !== 'final') return; panelFin(tipo); }, BOT ? 1500 : tipo === 'bola' ? 15000 : 11500);
  }, '#ffe9a8');
}
function panelFin(tipo) {
  J.fase = 'fin'; $('fTit').textContent = t('f_' + tipo); $('fTxt').textContent = t('fd_' + tipo);
  const seg = Math.round((performance.now() - J.t0) / 1000), filas = [[t('dPuntos'), J.pts], [t('dLlaves'), J.llaves.length + ' / ' + necesarias()], [t('dSalas'), J.salasOk + ' / ' + J.salasN]];
  if (J.modo === 2) filas.push([t('dPatos'), J.patos + ' / 4']); filas.push([t('dTiempo'), Math.floor(seg / 60) + ':' + String(seg % 60).padStart(2, '0')]);
  $('fDl').innerHTML = filas.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join(''); abre('pFin'); manda({ t: 'pts', v: J.pts });
  if (BOT) window.__MEVILAND_FIN = { tipo, pts: J.pts, llaves: J.llaves.slice(), salas: J.salasOk + '/' + J.salasN, patos: J.patos };
}

/* ======================= MENÚ, PAUSA Y BUCLE ======================= */
function abre(id) { document.querySelectorAll('.pan').forEach(p => p.classList.toggle('on', p.id === id)); $('pie').classList.toggle('off', id !== 'pIni'); }
function textosUI() {
  document.documentElement.lang = LG; $('tLema').textContent = t('lema'); $('tPausa').textContent = t('pausa'); $('bSigue').textContent = t('sigue'); $('bSalir').textContent = t('salir'); $('bOtra').textContent = t('otra'); $('bMenu').textContent = t('terminar'); $('bVoz').title = t('voz');
  const niv = $('niv'); niv.innerHTML = ''; [0, 1, 2].forEach(m => { const d = document.createElement('div'); d.className = 'modo m' + m + (m === J.modo ? ' sel' : ''); d.tabIndex = 0; d.dataset.m = m; d.innerHTML = `<b>${t('m' + m)}</b><em>${t('m' + m + 'e')}</em><span>${t('m' + m + 'd')}</span><div class="ll">${'<i></i>'.repeat(m + 2)}</div>`; d.querySelectorAll('.ll i').forEach(i => { i.style.backgroundImage = `url(${TEX.llave})`; }); d.onclick = () => empieza(m); d.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); empieza(m); } }; niv.appendChild(d); });
  document.querySelectorAll('#lenguas button').forEach(b => b.classList.toggle('sel', b.dataset.lang === LG));
  $('pie').textContent = 'MEVILAND · MSGAME v18.41 2026 ' + ({ es: 'es un proyecto hecho con', en: 'is a project made with', ca: 'és un projecte fet amb' })[LG] + ' 𑣲 by mediaservi.com';
  $('bVoz').textContent = VOZ.on ? '🔊' : '🔇';
}
function menu() {
  J.fase = 'menu'; hud(false); barra(null); meta(null); musica('plaza'); textosUI(); $('cargaBox').style.display = 'none'; $('niv').style.display = 'flex'; $('lenguas').style.display = EMB ? 'none' : 'flex'; abre('pIni');
  plaza({}); MU.libre = true; let a = 0; MU.upd = dt => { a += dt * .06; CAM.position.set(Math.sin(a) * 15, 4.5 + Math.sin(a * 2) * .6, -6 + Math.cos(a) * 17); CAM.lookAt(0, 3, -10); };
  MEVI.visible = true; meviAnim('saluda', true);
  if (BOT && !/[?&]ver=/.test(location.search)) setTimeout(() => empieza(+((location.search.match(/[?&]bm=(\d)/) || [])[1] || J.modo)), 300);
}
function empieza(m) {
  au(); J.modo = m; J.llaves = []; J.pts = 0; J.combo = 0; J.patos = 0; J.salasOk = 0; J.salasN = 0; J.patoEn = {}; J.t0 = performance.now(); J.sala = null;
  manda({ t: 'modo', v: ['facil', 'normal', 'dificil'][m] }); manda({ t: 'pts', v: 0 }); fx('listo'); abre(null); $('pie').classList.add('off'); MU.libre = false; enPlaza('inicio');
}
const JUEGO = window.JUEGO = {
  pausa() { if (J.fase === 'menu' || J.fase === 'fin' || J.fase === 'carga') return; PAUSA = !PAUSA; abre(PAUSA ? 'pPausa' : null); if (PAUSA) { try { speechSynthesis.cancel(); } catch (e) {} AU.ac && AU.ac.suspend(); } else AU.ac && AU.ac.resume(); },
  pausaExt(v) { PAUSA_EXT = v; if (AU.ac) v ? AU.ac.suspend() : AU.ac.resume(); },
  jugadores(m) { J.nombres = Array.isArray(m.v) ? m.v.map(String) : []; },
  atras() { this.pausa(); }
};
let PAUSA = false, PAUSA_EXT = false;
$('bPausa').onclick = () => JUEGO.pausa(); $('bSigue').onclick = () => JUEGO.pausa();
$('bSalir').onclick = () => { PAUSA = false; AU.ac && AU.ac.resume(); if (EMB) manda(J.pts > 0 ? { t: 'fin', v: J.pts } : { t: 'sal' }); else menu(); };
$('bOtra').onclick = () => { abre('pIni'); textosUI(); empieza(J.modo); };
$('bMenu').onclick = () => { if (EMB) manda({ t: 'fin', v: J.pts }); else menu(); };
$('bVoz').onclick = () => { VOZ.on = !VOZ.on; try { localStorage.setItem('MEVILAND_VOZ', VOZ.on ? '1' : '0'); } catch (e) {} if (!VOZ.on) try { speechSynthesis.cancel(); } catch (e) {} $('bVoz').textContent = VOZ.on ? '🔊' : '🔇'; };
document.querySelectorAll('#lenguas button').forEach(b => b.onclick = () => { LG = b.dataset.lang; try { localStorage.setItem('VJSHOW_LANG', LG); } catch (e) {} textosUI(); });
if (EMB) { $('hud').style.left = 'calc(var(--u)*1.2 + 54px)'; }
/* con el mando del móvil o el teclado, los paneles se manejan apuntando */
let enMenu = null;
function menuPtr() {
  const pan = document.querySelector('.pan.on'); if (!pan) { if (enMenu) { enMenu.classList.remove('sel'); enMenu = null; } return; }
  const r = ST.getBoundingClientRect(), el = document.elementFromPoint(r.left + PTR.x * r.width, r.top + PTR.y * r.height), b = el && el.closest('.modo,button');
  if (b !== enMenu && performance.now() - PTR.ultimo < 4000) { if (enMenu && enMenu.classList.contains('modo')) enMenu.classList.toggle('sel', +enMenu.dataset.m === J.modo); enMenu = b; if (b && b.classList.contains('modo')) { document.querySelectorAll('.modo').forEach(x => x.classList.remove('sel')); b.classList.add('sel'); } }
  if (PTR.toca && b) { PTR.toca = false; b.click(); }
}
function camara(dt) {
  if (MU.libre) return;
  if (MU.viaje) { const V = MU.viaje; V.t += dt; const k = suave(Math.min(1, V.t / V.dur)); MU.cp.lerpVectors(V.p0, V.p1, k); MU.cm.lerpVectors(V.m0, V.m1, k); if (V.t >= V.dur) { MU.viaje = null; MU.cam.p.copy(V.p1); MU.cam.m.copy(V.m1); V.f && V.f(); } }
  else { MU.cp.lerp(MU.cam.p, 1 - Math.pow(.02, dt)); MU.cm.lerp(MU.cam.m, 1 - Math.pow(.02, dt)); }
  RIG.position.set(0, 0, 0); CAM.position.copy(MU.cp); CAM.position.y += Math.sin(MU.tt * 1.3) * .025;
  const dir = MU.cm.clone().sub(MU.cp), dist = dir.length(); dir.normalize(); const rt = new T.Vector3().crossVectors(dir, new T.Vector3(0, 1, 0)).normalize(), upv = new T.Vector3().crossVectors(rt, dir);
  const objetivo = MU.cm.clone().addScaledVector(rt, (PTR.x - .5) * MU.mira * dist).addScaledVector(upv, (.5 - PTR.y) * MU.mira * dist * .6);
  MU.mirP = MU.mirP ? MU.mirP.lerp(objetivo, 1 - Math.pow(.004, dt)) : objetivo; CAM.lookAt(MU.mirP);
}
let tPrev = performance.now();
function bucle(now) {
  requestAnimationFrame(bucle); const dt = Math.min(BOT || RAPIDO ? .2 : .05, (now - tPrev) / 1000); tPrev = now;
  pasaMusica(); menuPtr();
  if (!PAUSA && !PAUSA_EXT) { MU.tt += dt; pasaSel(dt); if (MU.upd) MU.upd(dt); camara(dt); for (let i = 0; i < MU.anim.length; i++) MU.anim[i](dt, MU.tt); MU.mx.forEach(m => m.update(dt)); pasaPart(dt); pasaMevi(dt); }
  const re = $('reti'), jugando = J.fase !== 'carga'; re.classList.toggle('on', jugando); if (jugando) { re.style.left = (PTR.x * W) + 'px'; re.style.top = (PTR.y * H) + 'px'; }
  PTR.toca = false; R.render(ESC, CAM);
}

/* carátula del cartucho (juegos/meviland.webp): ?portada=1, en vertical */
function portada() {
  abre(null); J.fase = 'ver'; ST.style.aspectRatio = 'auto'; ST.style.width = '100vw'; ST.style.height = '100vh'; tam(); ['hud', 'pts', 'esq', 'pie', 'reti', 'sub'].forEach(i => { $(i).style.display = 'none'; });
  J.modo = 2; J.llaves = ORDEN_T.slice(); plaza({ noche: true }); MEVI.visible = false; MU.libre = true; MU.upd = null;
  const g = MU.g, P = MU.plaza; P.remolino.material.opacity = 1; P.maestro.visible = false;
  const mv = pon(g, 'mevi', 2.3, .2, 0, 4.2, { ry: -.25 }); anima(mv, 'saluda'); try { const c = MEVICARA(T, mv, '../packs/comun/mevi/caras.png?v=18.37'); c.ojos(2); c.boca(2); } catch (e) {}
  const br = pon(g, 'brocoli', 1.5, -2.25, 0, 3.3, { ry: .45 }); anima(br, 'Wave'); const bu = pon(g, 'buho', 1.3, 2.3, 0, 3.3, { ry: -.45 }); anima(bu, 'Cheer');
  const mc = pon(g, 'maestro', 1.75, -2.9, 0, -.4, { ry: .35 }); anima(mc, 'Cheer'); const gu = pon(g, 'gusano', 1.3, 2.9, 0, -.4, { ry: -.3 });
  for (let i = 0; i < 12; i++) globo(g, rnd(-7, 7), rnd(6, 12), rnd(-12, -2), ['#ff4fb4', '#ffd23f', '#56d7ff', '#7dff9a', '#b26bff'][i % 5]);
  CAM.fov = 58; CAM.position.set(0, 1.3, 9.6); CAM.lookAt(0, 4.6, -10); CAM.updateProjectionMatrix();
  for (let i = 0; i < 6; i++) chispas(new T.Vector3(rnd(-9, 9), rnd(11, 17), rnd(-26, -14)), 60, [['#ff4fb4', '#ffd23f'], ['#56d7ff', '#ffffff'], ['#7dff9a', '#ffd23f']][i % 3], { vel: rnd(5, 7), g: .3, vida: 30, tam: .5 });
  confeti(new T.Vector3(0, 6, 0), 140);
  MU.upd = dt => { ondula(gu, MU.tt, .14, 3); };
  window.__PORTADA = true;
}

/* ======================= ARRANQUE ======================= */
(async function () {
  textosUI(); $('cargaT').textContent = t('cargando');
  const m0 = (location.search.match(/[?&]modo=(facil|normal|dificil)/) || [])[1]; if (m0) J.modo = { facil: 0, normal: 1, dificil: 2 }[m0];
  try { await Promise.race([Promise.all([document.fonts.load('64px LG'), document.fonts.load('64px LIL'), document.fonts.load('32px BSC')]), new Promise(r => setTimeout(r, 2500))]); } catch (e) {}
  await cargaTodo(k => { $('cargaI').style.width = Math.round(k * 100) + '%'; });
  montaMevi(); requestAnimationFrame(bucle); menu();
  if (/[?&]portada=1/.test(location.search)) portada();
  const VER = (location.search.match(/[?&]ver=([a-z:]+)/) || [])[1];   /* revisión: ?ver=plaza | pasillo:feria | sala:nevera | final:copa */
  if (VER) { const [a, b] = VER.split(':'); abre(null); J.t0 = performance.now(); J.fase = 'ver'; MU.libre = false; MU.upd = null;
    if (a === 'plaza') { hud(true); pintaHud(); plaza({}); }
    else if (a === 'pasillo') { J.tierra = b; J.cola = TIERRAS[b].salas.slice(0, 2); hud(true); pasillo(); }
    else if (a === 'sala') { J.tierra = ORDEN_T.find(k => TIERRAS[k].salas.includes(b)); hud(true); pintaHud(); sala(b); }
    else if (a === 'final') { J.modo = { desfile: 0, guardianes: 1, copa: 2, bola: 2 }[b]; J.patos = b === 'bola' ? 4 : 0; J.llaves = ORDEN_T.slice(0, J.modo + 2); final(); } }
  window.__MEVILAND_OK = true;
})();
