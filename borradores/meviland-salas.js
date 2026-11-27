/* MEVILAND · plaza, tierras, salas, puertas y finales · MSGAME · mediaservi.com · GPL-3.0 */
'use strict';

/* ======================= TEXTOS (es / en / ca) ======================= */
Object.assign(TX, {
  es: {
    lema: 'EL PARQUE MÁGICO DE MEVI', cargando: 'Preparando el parque…', voz: 'Voz de Mevi', idioma: 'IDIOMA', volver: 'VOLVER',
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
    llaveDe: '¡Llave Estelar {0}! Ya tenemos {1} de {2}.',
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
    lema: "MEVI'S MAGIC PARK", cargando: 'Getting the park ready…', voz: "Mevi's voice", idioma: 'LANGUAGE', volver: 'BACK',
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
    lema: 'EL PARC MÀGIC DE LA MEVI', cargando: 'Preparant el parc…', voz: 'Veu de la Mevi', idioma: 'IDIOMA', volver: 'TORNA',
    m0: 'FÀCIL', m0e: 'Passeig', m0d: '2 Claus Estel·lars. Sense presses: ideal per als petits.',
    m1: 'MITJÀ', m1e: 'Aventura', m1d: '3 Claus Estel·lars i portes trampa.',
    m2: 'DIFÍCIL', m2e: 'Llegenda', m2d: '4 Claus, el doble de proves, mutacions i un secret…',
    pausa: 'PAUSA', sigue: 'Continuar', salir: 'Sortir', otra: 'Una altra', terminar: 'Acabar', puntos: 'PUNTS',
    plaza: 'Plaça de la Mevi', t_fantasia: 'Fantasia', t_absurdo: 'Absurd', t_golosinas: 'Llaminadures', t_feria: 'Fira',
    hola: 'Hey! Com esteu? Soc la Mevi. Benvinguts a MEVILAND, el parc més màgic de l\'univers!',
    holaN: 'Hola, {0}! Soc la Mevi. Benvinguts a MEVILAND, el parc més màgic de l\'univers!',
    objetivo: 'Per obrir el Gran Portal necessitem {0} Claus Estel·lars. Cada terra en guarda una.',
    comoElegir: 'Apunteu a un arc i mantingueu-hi el punt de mira per entrar… o toqueu!',
    otraTierra: 'A quina terra anem ara?', yaTenemos: 'Aquesta clau ja és nostra! Provem una altra terra.',
    llaveDe: 'Clau Estel·lar {0}! Ja en tenim {1} de {2}.',
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
    f_copa: 'LA COPA DAURADA!', fd_copa: 'Les quatre Claus Estel·lars… sou llegenda! La Copa Daurada de MEVILAND és vostra.',
    f_bola: 'FINAL SECRET: LA BOLA DE NEU', fd_bola: 'Amb els quatre aneguets astronautes descobriu el gran secret: tot MEVILAND cap en una bola de neu… i ara és vostra!',
    fin_desfile: 'A desfilar! Gràcies per visitar MEVILAND!', fin_guardianes: 'Els guardians us donen les seves estrelles. Ja sou de la família!',
    fin_copa: 'La Copa Daurada! Ningú no havia arribat tan lluny.', fin_bola: 'Espereu! I si tot el parc fos… una bola de neu?',
    dPuntos: 'Punts', dLlaves: 'Claus Estel·lars', dSalas: 'Proves superades', dPatos: 'Aneguets astronautes', dTiempo: 'Temps de visita'
  }
});
const tA = k => (TX[LG] && TX[LG][k]) || TX.es[k];

/* ======================= ESTADO DEL PARQUE ======================= */
const TIERRAS = {
  fantasia: { salas: ['biblioteca', 'cristales', 'espejos'], col: '#b98bff', guard: 'buho', mus: 'fantasia' },
  absurdo: { salas: ['nevera', 'lavadora', 'sopa'], col: '#38e0cf', guard: 'brocoli', mus: 'absurdo' },
  golosinas: { salas: ['caramelos', 'rio', 'galletas'], col: '#ff72c6', guard: 'gusano', mus: 'golosinas' },
  feria: { salas: ['montana', 'carrusel', 'tiro'], col: '#ffb43a', guard: 'maestro', mus: 'feria' }
};
/* v18.59 · pausa con confirmación, aviso de girar el móvil y Mevi pidiendo que se toque el pergamino */
Object.assign(TX.es, { seguro: '¿Seguro?', gira: 'Gira el móvil para jugar', tocaPerga: '¡Toca el pergamino!' });
Object.assign(TX.en, { seguro: 'Are you sure?', gira: 'Turn your phone sideways to play', tocaPerga: 'Tap the scroll!' });
Object.assign(TX.ca, { seguro: 'Segur?', gira: 'Gira el mòbil per jugar', tocaPerga: 'Toca el pergamí!' });
const ORDEN_T = ['fantasia', 'absurdo', 'golosinas', 'feria'];
const PAL = ['#ff3b4f', '#ffd23f', '#35d46a', '#3b8cff', '#a65cff', '#ff7ad1'];
const BOT = /[?&]bot=1/.test(location.search), RAPIDO = /[?&]rapido=1/.test(location.search);
const J = { modo: 1, llaves: [], pts: 0, combo: 0, patos: 0, salasOk: 0, salasN: 0, tierra: null, cola: [], patoEn: {}, nombres: [], t0: 0, fase: 'carga', primera: true };
const necesarias = () => J.modo + 2;
const salasPorTierra = () => 3;   /* tres salas encadenadas en cada tierra, también en FÁCIL */

/* ======================= ESCENA ======================= */
const MU = { g: null, tt: 0, cam: { p: new T.Vector3(0, 1.7, 9), m: new T.Vector3(0, 2, -6) }, cp: new T.Vector3(0, 1.7, 9), cm: new T.Vector3(0, 2, -6), mira: .16, libre: false, upd: null, anim: [], mx: [], luz: [], sel: null, viaje: null };
function lz(w, h, f, rep) { const tx = lienzo(w, h, f, rep); tx.userData.tmp = true; return tx; }
function tira(g) { g.traverse(o => { if (o.geometry && !o.geometry.userData.mod) o.geometry.dispose(); const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []; ms.forEach(m => { ['map', 'emissiveMap', 'alphaMap'].forEach(k => { if (m[k] && m[k].userData && m[k].userData.tmp) m[k].dispose(); }); m.dispose(); }); }); }
function nuevaEscena(f) {
  if (MU.g) { ESC.remove(MU.g); tira(MU.g); }
  MU.g = new T.Group(); ESC.add(MU.g); MU.vivos = []; MU.obs = []; MU.cuerpos = []; MEVI.visible = true; MEVI.modo = 'sigue'; MEVI.ax = undefined; MEVI.salto = true; MEVI.suelo = 0; MEVI.dx = 2.7; MEVI.dz = 4.6; MEVI.alto = 1.15; MU.upd = null; MU.anim = []; MU.mx = []; MU.luz = []; MU.luzN = 0; MU.luzT0 = undefined; MU.yaLuz = false; MU.sel = null; MU.libre = false; MU.viaje = null; MU.mira = .16; ESC.fog = null;
  f(MU.g); MU.cp.copy(MU.cam.p); MU.cm.copy(MU.cam.m);
}
/* v18.51 · nadie atraviesa nada: obstáculos fijos de cada escena (fuente, farolas, árboles, guardias…) y cuerpos que se mueven
   (Mevi, los paseantes, la ardilla). apartado() saca un punto de todos ellos; libre() dice si un camino recto está despejado */
function obstaculo(x, z, r) { MU.obs.push({ x, z, r }); }
function cuerpo(pos, r) { const c = { pos, r }; MU.cuerpos.push(c); return c; }   /* pos(): su posición (o null si ahora no ocupa sitio) */
function sepa(p, x, z, m) { const dx = p.x - x, dz = p.z - z, d = Math.hypot(dx, dz); if (d >= m) return false; if (d < 1e-4) p.x = x + m; else { p.x = x + dx / d * m; p.z = z + dz / d * m; } return true; }
function apartado(p, r, yo) { let n = false; for (const b of MU.obs || []) n = sepa(p, b.x, b.z, b.r + r) || n; for (const c of MU.cuerpos || []) { if (c === yo) continue; const q = c.pos(); if (q) n = sepa(p, q.x, q.z, c.r + r) || n; } return n; }
function libre(a, b, r, yo) { const v = new T.Vector3(); for (let i = 1; i <= 12; i++) { v.lerpVectors(a, b, i / 12); const x = v.x, z = v.z; if (apartado(v, r, yo) || Math.hypot(v.x - x, v.z - z) > 1e-3) return false; } return true; }
/* v18.51 · rótulos pintados (carteles, letreros): si la traducción llega después de pintarlos, se repintan con ella */
function vivo(txt, tx, pinta) { if (!TRD) return; (MU.vivos || (MU.vivos = [])).push({ src: VOZDE.get(txt) || txt, cur: txt, tx, pinta }); }
function refrescaVivos() {
  (MU.vivos || []).forEach(v => { const n = trd(v.src); if (n === v.cur) return; v.cur = n; const cv = v.tx.image, q = cv.getContext('2d'); q.save(); v.pinta(q, cv.width, cv.height, n); q.restore(); v.tx.needsUpdate = true; });
  if (MU.lugarSrc && TRD) { const n = trd(MU.lugarSrc); if ($('lugar').textContent !== n) $('lugar').textContent = n; }
}
const anim = f => MU.anim.push(f);
function pon(g, k, h, x, y, z, o) { const p = pieza(k, h, o); p.position.set(x, y, z); if (o && o.ry !== undefined) p.rotation.y = o.ry; g.add(p); if (p.userData.mx) MU.mx.push(p.userData.mx); if (!(o && o.vuela)) pisa(p, o && o.mide ? h : 0); return p; }
function transicion(f, col) { const v = $('velo'); v.style.background = col || '#fff'; v.style.opacity = '1'; setTimeout(() => { f(); setTimeout(() => { v.style.opacity = '0'; }, 120); }, 470); }
function viaje(p, m, dur, f, via) { MU.viaje = { p0: MU.cp.clone(), m0: MU.cm.clone(), p1: p.clone(), m1: m.clone(), t: 0, dur, f, via: via ? via.clone() : null }; }   /* v18.59 · via: punto de paso (curva suave) para rodear lo que haya en medio */
/* geometría básica */
const caja = (w, h, d, m) => new T.Mesh(new T.BoxGeometry(w, h, d), m);
const bola = (r, m, s) => new T.Mesh(new T.SphereGeometry(r, s || 24, Math.max(8, (s || 24) >> 1)), m);
const cil = (r1, r2, h, m, s, abierto) => new T.Mesh(new T.CylinderGeometry(r1, r2, h, s || 24, 1, !!abierto), m);
function sombra(o, c, r) { o.traverse(x => { if (x.isMesh) { x.castShadow = c !== false; x.receiveShadow = r !== false; } }); return o; }
function cartel(txt, w, col, fondo, alto) {
  const a = alto || .28, pinta = (q, W2, H2, txt) => { q.clearRect(0, 0, W2, H2); if (fondo) { q.fillStyle = fondo; rr(q, 6, 6, W2 - 12, H2 - 12, H2 * .3); q.fill(); q.lineWidth = 8; q.strokeStyle = 'rgba(255,255,255,.85)'; q.stroke(); }
    q.font = `${Math.round(H2 * .62)}px LG`; q.textAlign = 'center'; q.textBaseline = 'middle'; q.lineWidth = H2 * .12; q.strokeStyle = '#2a0b4a'; q.strokeText(txt, W2 / 2, H2 * .54); q.fillStyle = col || '#fff'; q.fillText(txt, W2 / 2, H2 * .54); }, tx = lz(512, Math.round(512 * a), (q, W2, H2) => pinta(q, W2, H2, txt)); vivo(txt, tx, pinta);
  const m = new T.Mesh(new T.PlaneGeometry(w, w * a), new T.MeshBasicMaterial({ map: tx, transparent: true, depthWrite: false })); return m;
}
/* rótulo de sobrepuerta: tablón rústico de dos tablas con el canto ondulado, veta marcada y cuatro grapas de cuero con su clavo;
   el nombre va pintado en el color del mundo, aclarado y perfilado en oscuro para que se lea bien sobre la madera */
function cartelMadera(txt, w, col) {
  const pinta = (q, W2, H2, txt) => { q.clearRect(0, 0, W2, H2);
    const forma = () => { q.beginPath(); q.moveTo(46, 60); q.bezierCurveTo(200, 20, 330, 74, 470, 44); q.bezierCurveTo(580, 22, 660, 62, 726, 52); q.bezierCurveTo(744, 120, 744, 200, 728, 268); q.bezierCurveTo(600, 300, 470, 256, 330, 284); q.bezierCurveTo(220, 304, 120, 272, 44, 272); q.bezierCurveTo(22, 200, 24, 120, 46, 60); q.closePath(); };
    q.save(); q.shadowColor = 'rgba(0,0,0,.55)'; q.shadowBlur = 16; q.shadowOffsetY = 8; forma(); q.fillStyle = '#5a3a22'; q.fill(); q.restore();
    q.save(); forma(); q.clip(); const gr = q.createLinearGradient(0, 30, 0, 300); gr.addColorStop(0, '#7a5232'); gr.addColorStop(.48, '#6a4428'); gr.addColorStop(.52, '#4e3018'); gr.addColorStop(.56, '#6e4a2c'); gr.addColorStop(1, '#4a2e18'); q.fillStyle = gr; q.fillRect(0, 0, W2, H2);
    for (let i = 0; i < 120; i++) { const y = rnd(30, 300), a = rnd(.08, .3); q.strokeStyle = ri(3) ? `rgba(40,20,8,${a})` : `rgba(210,160,100,${a * .6})`; q.lineWidth = rnd(1, 3.2); q.beginPath(); q.moveTo(0, y); q.bezierCurveTo(200, y + rnd(-14, 14), 520, y + rnd(-14, 14), W2, y + rnd(-10, 10)); q.stroke(); }
    [[250, 112], [520, 214]].forEach(([x, y]) => { for (let r = 30; r > 3; r -= 6) { q.strokeStyle = 'rgba(40,20,8,.3)'; q.lineWidth = 2; q.beginPath(); q.ellipse(x, y, r * 1.9, r * .6, 0, 0, 7); q.stroke(); } });   /* nudos */
    q.strokeStyle = 'rgba(20,10,4,.75)'; q.lineWidth = 5; q.beginPath(); q.moveTo(30, 166); q.bezierCurveTo(250, 156, 520, 176, 740, 164); q.stroke(); q.strokeStyle = 'rgba(230,180,120,.22)'; q.lineWidth = 2; q.beginPath(); q.moveTo(30, 171); q.bezierCurveTo(250, 161, 520, 181, 740, 169); q.stroke();
    q.restore(); forma(); q.strokeStyle = 'rgba(30,15,6,.8)'; q.lineWidth = 5; q.stroke();
    [[92, 62, -.15], [676, 62, .15], [92, 262, .15], [676, 262, -.15]].forEach(([x, y, a]) => { q.save(); q.translate(x, y); q.rotate(a); const gc = q.createLinearGradient(-22, 0, 22, 0); gc.addColorStop(0, '#4a2c16'); gc.addColorStop(.5, '#8a5c34'); gc.addColorStop(1, '#3e2410'); q.fillStyle = gc; rr(q, -22, -40, 44, 80, 12); q.fill(); q.strokeStyle = 'rgba(20,10,4,.7)'; q.lineWidth = 3; q.stroke(); const gm = q.createRadialGradient(-3, -3, 1, 0, 0, 11); gm.addColorStop(0, '#e8e2da'); gm.addColorStop(1, '#5a5660'); q.fillStyle = gm; q.beginPath(); q.arc(0, 0, 10, 0, 7); q.fill(); q.stroke(); q.restore(); });
    let tam = 150; q.textAlign = 'center'; q.textBaseline = 'middle'; do { tam -= 6; q.font = `${tam}px BSW, LIL, serif`; } while (q.measureText(txt).width > 520 && tam > 60);
    q.lineJoin = 'round'; q.lineWidth = tam * .17; q.strokeStyle = '#1e0f08'; q.strokeText(txt, W2 / 2, 166); q.shadowColor = col; q.shadowBlur = 14; q.fillStyle = mezcla(col, '#fff4dc', .42); q.fillText(txt, W2 / 2, 166); q.shadowBlur = 0; q.fillStyle = 'rgba(255,255,255,.28)'; q.fillText(txt, W2 / 2, 162); };
  const tx = lz(768, 320, (q, W2, H2) => pinta(q, W2, H2, txt)); vivo(txt, tx, pinta);
  const m = new T.Mesh(new T.PlaneGeometry(w, w * 320 / 768), new T.MeshStandardMaterial({ map: tx, transparent: true, alphaTest: .35, roughness: .8, emissive: '#ffffff', emissiveMap: tx, emissiveIntensity: .32 })); m.castShadow = true; return m;
}
function rr(q, x, y, w, h, r) { q.beginPath(); q.moveTo(x + r, y); q.arcTo(x + w, y, x + w, y + h, r); q.arcTo(x + w, y + h, x, y + h, r); q.arcTo(x, y + h, x, y, r); q.arcTo(x, y, x + w, y, r); q.closePath(); }
function brillo(col, s, op) { const sp = new T.Sprite(new T.SpriteMaterial({ map: TEX.chispa, color: col, transparent: true, depthWrite: false, blending: T.AdditiveBlending, opacity: op === undefined ? .8 : op })); sp.scale.set(s, s, 1); return sp; }

TEX.remolino = lienzo(512, 512, (q, w) => { const gr = q.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, '#ffffff'); gr.addColorStop(.25, '#ffe36b'); gr.addColorStop(.6, '#ff4fb4'); gr.addColorStop(1, 'rgba(90,20,160,0)'); q.fillStyle = gr; q.fillRect(0, 0, w, w); q.globalCompositeOperation = 'lighter'; for (let b = 0; b < 6; b++) { q.strokeStyle = 'rgba(255,255,255,.35)'; q.lineWidth = 14; q.beginPath(); for (let a = 0; a < 7; a += .05) { const r = a * 34, an = a + b * Math.PI / 3; q.lineTo(w / 2 + Math.cos(an) * r, w / 2 + Math.sin(an) * r); } q.stroke(); } });   /* el agua de la lavadora */
/* ---------- entornos de cada tierra ---------- */
const ENV = {};
/* color entre dos hex (k de 0 a 1) y entre las tres horas de la tarde: 0 = hora dorada · .5 = crepúsculo · 1 = primera noche */
function mezcla(a, b, k) { return '#' + new T.Color(a).lerp(new T.Color(b), clamp(k, 0, 1)).getHexString(); }
function deHora(tres, h) { return h <= .5 ? mezcla(tres[0], tres[1], h * 2) : mezcla(tres[1], tres[2], (h - .5) * 2); }
/* la tarde avanza con las Llaves Estelares: se empieza en la hora dorada y el Gran Portal se abre ya de noche */
function horaParque() { return J.fase === 'final' || J.fase === 'fin' ? 1 : clamp(J.llaves.length / Math.max(1, necesarias()), 0, 1) * .8; }
/* cielo: lista de [posición 0 (cénit) … .5 (horizonte) … 1, color] */
function cielo(g, cols, estrellas, opEst) {
  if (typeof cols[0] === 'string') cols = cols.map((c, i) => [i / (cols.length - 1), c]);
  const tx = lz(4, 512, (q, w, h) => { const gr = q.createLinearGradient(0, 0, 0, h); cols.forEach(c => gr.addColorStop(c[0], c[1])); q.fillStyle = gr; q.fillRect(0, 0, w, h); });
  const m = new T.Mesh(new T.SphereGeometry(190, 32, 16), new T.MeshBasicMaterial({ map: tx, side: T.BackSide, fog: false, depthWrite: false })); g.add(m);
  if (estrellas) { const n = estrellas, pos = new Float32Array(n * 3); for (let i = 0; i < n; i++) { const a = rnd(0, Math.PI * 2), e = rnd(.14, 1.4), r = 170; pos[i * 3] = Math.cos(a) * Math.cos(e) * r; pos[i * 3 + 1] = Math.sin(e) * r; pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * r; }
    const ge = new T.BufferGeometry(); ge.setAttribute('position', new T.BufferAttribute(pos, 3)); const op = opEst === undefined ? 1 : opEst, pm = new T.PointsMaterial({ map: TEX.chispa, size: 2.6, transparent: true, depthWrite: false, blending: T.AdditiveBlending, color: '#fff7d6', fog: false }); const pts = new T.Points(ge, pm); g.add(pts); anim((dt, tt) => { pm.opacity = (.65 + Math.sin(tt * 1.7) * .25) * op; pts.rotation.y += dt * .004; }); }
}
/* sol bajo, grande y anaranjado, con su halo */
function solBajo(g, x, y, z, col, s) { const h = brillo(col, s * 3.4, .55); h.material.fog = false; h.position.set(x, y, z); g.add(h); const d = brillo('#fff1c2', s * 1.25, 1); d.material.fog = false; d.position.set(x, y, z); g.add(d); const r = brillo(col, s * 9, .16); r.material.fog = false; r.scale.set(s * 14, s * 3.2, 1); r.position.set(x, y - s * .2, z); g.add(r); }
function luces(g, o) {
  g.add(new T.HemisphereLight(o.cielo, o.suelo, (o.hi || 1.1) * .6)); g.add(new T.AmbientLight(o.amb || '#ffffff', (o.ai || .15) * .6));
  const d = new T.DirectionalLight(o.sol || '#fff4e0', o.si || 1.7); d.position.set(o.dx || 7, o.dy || 14, o.dz || 9); d.castShadow = !LITE;
  d.shadow.mapSize.set(LITE ? 512 : 2048, LITE ? 512 : 2048); const c = d.shadow.camera; c.left = -24; c.right = 24; c.top = 24; c.bottom = -24; c.near = 1; c.far = 80; d.shadow.bias = -.0004; d.shadow.normalBias = .03; g.add(d); g.add(d.target);
  if (!ENV[o.env]) ENV[o.env] = entorno(o.cielo, o.suelo, o.sol); ESC.environment = ENV[o.env];
}
/* ---------- luces que se encienden al caer la tarde ----------
   Cada bombilla, farol o ventana se apunta con prende(f, retraso): f(k) recibe 0 (apagada) … 1 (encendida), con el parpadeo del arranque.
   Entran una tras otra poco después de llegar a cada sitio; si ya es de noche, están encendidas desde el principio. */
function prende(f, ret) { const L = { f, t: -(MU.yaLuz ? 0 : (MU.luzT0 === undefined ? 1.6 : MU.luzT0) + (ret || 0)), k: -1 }; MU.luz.push(L); f(MU.yaLuz ? 1 : 0); return L; }
function pasaLuz(dt) {
  const Ls = MU.luz; for (let i = 0; i < Ls.length; i++) { const L = Ls[i]; if (L.k >= 1) continue; L.t += dt; if (L.t < 0) continue;
    if (L.k < 0) { L.k = 0; if (!MU.yaLuz && (MU.luzN = (MU.luzN || 0) + 1) % 3 === 1) sint(nota(96 + (MU.luzN % 5) * 2), .09, 'sine', .018); }
    L.k = Math.min(1, L.t / .55); L.f(L.k >= 1 ? 1 : (L.k < .45 ? (Math.sin(L.t * 70) > 0 ? .75 : .1) : .5 + L.k * .5)); }
}
/* llama de aceite: dos lenguas que tiemblan, su resplandor y una luz que oscila. Se enciende con prende() */
function llama(padre, y, s, ret, luz) {
  const G = new T.Group(); G.position.y = y; padre.add(G); const a = brillo('#ff8a2a', s * 1.5, 0), b = brillo('#ffe9a0', s * .8, 0), h = brillo('#ffb060', s * 7, 0); a.scale.set(s * 1.1, s * 2, 1); b.scale.set(s * .6, s * 1.2, 1); b.position.y = -s * .2; G.add(h); G.add(a); G.add(b);
  const pl = luz ? new T.PointLight('#ffa64a', 0, luz) : null; if (pl) G.add(pl); let on = 0; const f = rnd(0, 9); prende(k => { on = k; }, ret || 0);
  anim((dt, tt) => { const t1 = Math.sin(tt * 13 + f) * .5 + Math.sin(tt * 23.7 + f * 2) * .3 + Math.sin(tt * 41 + f) * .2, w = 1 + t1 * .16; a.scale.set(s * 1.1 * (2 - w), s * 2 * w, 1); a.position.set(Math.sin(tt * 9 + f) * s * .07, s * .35 * w, 0); b.scale.set(s * .6, s * 1.2 * w, 1); a.material.opacity = on * .95; b.material.opacity = on; h.material.opacity = on * (.32 + t1 * .05); if (pl) pl.intensity = on * (1.1 + t1 * .25); });
  return G;
}
/* la M gótica del reino de Mevi (contorno de la M de UnifrakturMaguntia, SIL OFL 1.1; ver CREDITOS.md) */
const M_GOTICA = 'M564 553Q566 609 537.5 622.5Q509 636 417 615Q275 581 163.0 678.0Q51 775 51 967Q52 1158 190.0 1297.0Q328 1436 520 1436Q607 1436 709.0 1393.0Q811 1350 883 1265Q889 1257 896.0 1258.0Q903 1259 908 1267Q952 1339 1021.5 1388.0Q1091 1437 1206 1434Q1355 1427 1473 1250Q1479 1241 1488.0 1241.0Q1497 1241 1502 1251Q1544 1329 1608.0 1379.0Q1672 1429 1768 1429Q1891 1427 1971.0 1354.0Q2051 1281 2087 1109Q2109 990 2179 983Q2199 982 2200.5 966.0Q2202 950 2176 942Q1982 876 1909.0 730.5Q1836 585 1915 360Q1950 258 2015.5 216.5Q2081 175 2159 223Q2188 240 2202.5 222.5Q2217 205 2197 188Q2129 134 2062.5 80.5Q1996 27 1929 -26Q1918 -34 1908 -26Q1695 145 1651.5 354.0Q1608 563 1927 849Q1934 856 1933.5 863.0Q1933 870 1924 875Q1854 922 1821 1116Q1786 1308 1665 1310Q1579 1312 1519 1184Q1515 1177 1519 1170Q1558 1087 1575.5 985.0Q1593 883 1577 769Q1537 493 1458.5 352.5Q1380 212 1272 72Q1129 -107 1002 33Q966 73 926.5 85.0Q887 97 836 57Q817 41 803.5 53.5Q790 66 805 85Q933 263 1008.5 288.0Q1084 313 1156 246Q1215 191 1264.5 187.0Q1314 183 1342 261Q1396 411 1380.5 680.5Q1365 950 1271.5 1094.0Q1178 1238 1093.5 1263.5Q1009 1289 940 1219Q930 1209 939 1198Q1058 1033 1067 816Q1073 638 998.0 474.5Q923 311 805 161Q676 -3 560.5 -27.0Q445 -51 349 90Q265 216 178 121Q157 103 140.5 120.0Q124 137 145 159Q418 437 574 232Q599 198 621.5 169.0Q644 140 689 142Q747 144 811.0 269.0Q875 394 875 584Q873 833 745.0 1020.5Q617 1208 452 1226Q287 1243 192.0 1164.0Q97 1085 100 977Q103 867 158.5 801.0Q214 735 364 774Q653 848 615 561Q611 531 587.5 530.5Q564 530 564 553Z';
function txEstandarte(col) {
  const k = 'est' + col; if (TXS[k]) return TXS[k];
  return TXS[k] = lienzo(256, 512, (q, w, h) => { q.clearRect(0, 0, w, h); q.beginPath(); q.moveTo(8, 0); q.lineTo(w - 8, 0); q.lineTo(w - 8, h - 96); q.lineTo(w / 2, h - 6); q.lineTo(8, h - 96); q.closePath(); const gr = q.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, mezcla(col, '#000000', .35)); gr.addColorStop(.3, col); gr.addColorStop(.7, mezcla(col, '#ffffff', .08)); gr.addColorStop(1, mezcla(col, '#000000', .4)); q.fillStyle = gr; q.fill(); q.save(); q.clip();
    for (let i = 0; i < 2600; i++) { q.fillStyle = `rgba(${ri(2) ? '255,240,220' : '20,10,30'},${rnd(.02, .07)})`; q.fillRect(rnd(0, w), rnd(0, h), 2, rnd(2, 7)); } q.restore();
    const oro = q.createLinearGradient(0, 120, 0, 380); oro.addColorStop(0, '#ffe9a0'); oro.addColorStop(.5, '#e2a92e'); oro.addColorStop(1, '#a8701a');
    q.strokeStyle = oro; q.lineWidth = 7; q.beginPath(); q.moveTo(22, 14); q.lineTo(w - 22, 14); q.lineTo(w - 22, h - 104); q.lineTo(w / 2, h - 28); q.lineTo(22, h - 104); q.closePath(); q.stroke(); q.lineWidth = 2; q.beginPath(); q.moveTo(34, 26); q.lineTo(w - 34, 26); q.lineTo(w - 34, h - 110); q.lineTo(w / 2, h - 46); q.lineTo(34, h - 110); q.closePath(); q.stroke();
    q.save(); const e = 176 / 2160; q.translate(w / 2 - 1130 * e, 300); q.scale(e, -e); const pm = new Path2D(M_GOTICA); q.shadowColor = 'rgba(30,10,0,.7)'; q.shadowBlur = 10; q.shadowOffsetY = 4; q.fillStyle = oro; q.fill(pm); q.restore();
    q.fillStyle = oro; estrella2D(q, w / 2, 96, 22, 9, 5); q.fill(); estrella2D(q, w / 2, 372, 14, 6, 5); q.fill(); });
}
/* gonfalón de farola: franja ancha arriba con la M del reino y dos largas colas que se juntan en punta */
function txGonfalon(col, c2) {
  const k = 'gon' + col + (c2 || ''); if (TXS[k]) return TXS[k]; c2 = c2 || '#b01f6e';
  return TXS[k] = lienzo(256, 640, (q, w, h) => { q.clearRect(0, 0, w, h); const B = h * .3, V = h * .14, oro = q.createLinearGradient(0, 0, 0, h); oro.addColorStop(0, '#ffe9a0'); oro.addColorStop(.5, '#e2a92e'); oro.addColorStop(1, '#a8701a');
    const forma = () => { q.beginPath(); q.moveTo(3, 3); q.lineTo(w - 3, 3); q.lineTo(w - 3, h - 4); q.lineTo(w / 2, h - V); q.lineTo(3, h - 4); q.closePath(); };
    forma(); const gr = q.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, mezcla(c2, '#000000', .3)); gr.addColorStop(.35, mezcla(c2, '#ffffff', .12)); gr.addColorStop(.6, c2); gr.addColorStop(1, mezcla(c2, '#000000', .35)); q.fillStyle = gr; q.fill();
    q.save(); forma(); q.clip(); const gb = q.createLinearGradient(0, 0, w, 0); gb.addColorStop(0, mezcla(col, '#000000', .3)); gb.addColorStop(.4, mezcla(col, '#ffffff', .1)); gb.addColorStop(1, mezcla(col, '#000000', .3)); q.fillStyle = gb; q.fillRect(0, 0, w, B); q.fillStyle = oro; q.fillRect(0, B - 4, w, 8);
    for (let i = 0; i < 7; i++) { q.fillStyle = `rgba(255,255,255,${i % 2 ? .07 : 0})`; q.fillRect(0, B + i * (h - B) / 7, w, (h - B) / 14); }   /* aguas de la seda */
    for (let i = 0; i < 2200; i++) { q.fillStyle = `rgba(${ri(2) ? '255,240,220' : '20,10,30'},${rnd(.02, .05)})`; q.fillRect(rnd(0, w), rnd(0, h), 2, rnd(2, 7)); } q.restore();
    q.fillStyle = oro; [[40, 34], [w - 40, 34], [w / 2, 22]].forEach(([x, y]) => { estrella2D(q, x, y, 11, 4.5, 5); q.fill(); });
    q.save(); const e = 150 / 2160; q.translate(w / 2 - 1130 * e, B * .5 + 62); q.scale(e, -e); q.shadowColor = 'rgba(20,5,0,.7)'; q.shadowBlur = 8; q.fillStyle = oro; q.fill(new Path2D(M_GOTICA)); q.restore();
    forma(); q.strokeStyle = oro; q.lineWidth = 8; q.stroke(); });
}
function gonfalon(padre, x, y, z, an, col, ry, largo) {
  const al = an * (largo || 2.3), geo = new T.PlaneGeometry(an, al, 6, 16), m = new T.Mesh(geo, new T.MeshStandardMaterial({ map: txGonfalon(col || '#2f2a8a'), transparent: true, alphaTest: .5, side: T.DoubleSide, roughness: .5, metalness: .05 })); m.position.set(x, y - al / 2, z); if (ry) m.rotation.y = ry; m.castShadow = true; padre.add(m);
  const pos = geo.attributes.position, f = rnd(0, 9); anim((dt, tt) => { for (let i = 0; i < pos.count; i++) { const v = (al / 2 - pos.getY(i)) / al; pos.setZ(i, (Math.sin(v * 7.5 - tt * 1.6 + f) * .16 + Math.sin(tt * .9 + f + pos.getX(i) * 1.4) * .05) * v * an); } pos.needsUpdate = true; geo.computeVertexNormals(); }); return m;   /* caída en ese: la tela ondula de arriba abajo */
}
/* pendón del reino: seda morada con doble ribete de oro, corona, escudo con la M gótica y remate en V con borlas */
function txPendon() {
  if (TXS.pendon) return TXS.pendon;
  return TXS.pendon = lienzo(256, 640, (q, w, h) => { q.clearRect(0, 0, w, h); const V = 92, oro = q.createLinearGradient(0, 0, w, h); oro.addColorStop(0, '#fff0b0'); oro.addColorStop(.45, '#e2a92e'); oro.addColorStop(1, '#a06a16');
    const forma = (m) => { q.beginPath(); q.moveTo(m, m); q.lineTo(w - m, m); q.lineTo(w - m, h - m * 1.6); q.lineTo(w / 2, h - V - m * .4); q.lineTo(m, h - m * 1.6); q.closePath(); };
    forma(3); const gr = q.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, '#24124e'); gr.addColorStop(.28, '#4a2a96'); gr.addColorStop(.5, '#38207a'); gr.addColorStop(.74, '#5632a6'); gr.addColorStop(1, '#22104a'); q.fillStyle = gr; q.fill();
    q.save(); forma(3); q.clip(); for (let i = 0; i < 9; i++) { q.fillStyle = `rgba(255,255,255,${i % 2 ? .05 : 0})`; q.fillRect(0, i * h / 9, w, h / 18); }
    q.globalAlpha = .1; q.fillStyle = '#e2a92e'; for (let y = 0; y < 9; y++) for (let x = 0; x < 4; x++) { estrella2D(q, 32 + x * 64 + (y % 2) * 32, 150 + y * 56, 7, 3, 4); q.fill(); } q.globalAlpha = 1;   /* sembrado de estrellas, en damasco */
    for (let i = 0; i < 2200; i++) { q.fillStyle = `rgba(${ri(2) ? '255,240,220' : '10,5,25'},${rnd(.02, .05)})`; q.fillRect(rnd(0, w), rnd(0, h), 2, rnd(2, 7)); } q.restore();
    forma(4); q.strokeStyle = oro; q.lineWidth = 8; q.stroke(); forma(17); q.lineWidth = 2.5; q.stroke();
    q.fillStyle = oro; q.fillRect(3, 3, w - 6, 26);   /* jareta de la vara */
    /* corona */
    q.save(); q.translate(w / 2, 108); q.fillStyle = oro; q.beginPath(); q.moveTo(-46, 30); q.lineTo(-52, -16); q.lineTo(-27, 8); q.lineTo(0, -34); q.lineTo(27, 8); q.lineTo(52, -16); q.lineTo(46, 30); q.closePath(); q.fill(); q.fillRect(-48, 30, 96, 10); [[-52, -20], [0, -39], [52, -20]].forEach(([x, y]) => { q.beginPath(); q.arc(x, y, 7, 0, 7); q.fill(); }); q.fillStyle = '#c2247a'; [-24, 0, 24].forEach(x => { q.beginPath(); q.arc(x, 35, 4, 0, 7); q.fill(); }); q.restore();
    /* escudo con la M */
    q.save(); q.translate(w / 2, 300); q.beginPath(); q.moveTo(-82, -112); q.lineTo(82, -112); q.lineTo(82, 10); q.quadraticCurveTo(80, 92, 0, 132); q.quadraticCurveTo(-80, 92, -82, 10); q.closePath(); const ge = q.createLinearGradient(-82, 0, 82, 0); ge.addColorStop(0, '#8a1458'); ge.addColorStop(.5, '#c2247a'); ge.addColorStop(1, '#7a1050'); q.fillStyle = ge; q.shadowColor = 'rgba(0,0,0,.5)'; q.shadowBlur = 12; q.fill(); q.shadowBlur = 0; q.strokeStyle = oro; q.lineWidth = 7; q.stroke();
    const e = 132 / 2160; q.translate(-1130 * e, 44); q.scale(e, -e); q.shadowColor = 'rgba(20,5,0,.7)'; q.shadowBlur = 6; q.fillStyle = oro; q.fill(new Path2D(M_GOTICA)); q.restore();
    q.fillStyle = oro; estrella2D(q, w / 2, 478, 17, 7, 5); q.fill(); });
}
function pendonFarola(p, lado, h, hi) {
  /* dos pendones iguales pegados por la espalda y centrados en la farola, con el poste por medio: se ve la misma cara desde los dos lados */
  const oro = mat('#e2a92e', { metalness: .9, roughness: .25 }), Y = h * .88, an = .8, al = an * 2.5, SEP = .1;
  const br = cil(.03, .03, an + .26, hi, 6); br.rotation.z = Math.PI / 2; br.position.set(0, Y, 0); p.add(br); [-1, 1].forEach(sg => { const rm = new T.Mesh(new T.ConeGeometry(.055, .18, 6), oro); rm.rotation.z = -sg * Math.PI / 2; rm.position.set(sg * (an / 2 + .2), Y, 0); p.add(rm); const vol = new T.Mesh(new T.TorusGeometry(.2, .02, 6, 12, Math.PI * .5), hi); vol.position.set(sg * .2, Y - .2, 0); vol.rotation.z = sg > 0 ? 0 : Math.PI * .5; p.add(vol); });
  const geo = new T.PlaneGeometry(an, al, 5, 14), mt = () => new T.MeshStandardMaterial({ map: txPendon(), transparent: true, alphaTest: .5, side: T.FrontSide, roughness: .5, metalness: .05 });
  const caras = [0, Math.PI].map(ry => { const G = new T.Group(); G.rotation.y = ry; p.add(G); const m = new T.Mesh(geo, mt()); m.position.set(0, Y - .05 - al / 2, SEP); m.castShadow = true; G.add(m);
    const borlas = [-1, 1].map(sg => { const b = new T.Group(); b.add(bola(.045, oro, 8)); const f = new T.Mesh(new T.ConeGeometry(.04, .13, 6), oro); f.position.y = -.09; f.rotation.x = Math.PI; b.add(f); b.userData.x = sg * (an / 2 - .03); G.add(b); return b; }); return borlas; });
  const pos = geo.attributes.position, f0 = rnd(0, 9), ond = (x, v, tt) => (.5 + .5 * Math.sin(v * 6.2 - tt * 1.5 + f0) + (.5 + .5 * Math.sin(tt * .8 + f0 + x * 1.4)) * .3) * .12 * v * an;   /* cada cara ondula solo hacia fuera: nunca atraviesa el poste */
  anim((dt, tt) => { for (let i = 0; i < pos.count; i++) { const v = (al / 2 - pos.getY(i)) / al; pos.setZ(i, ond(pos.getX(i), v, tt)); } pos.needsUpdate = true; geo.computeVertexNormals(); caras.forEach(bs => bs.forEach(b => b.position.set(b.userData.x, Y - .05 - al + .02, SEP + ond(b.userData.x, 1, tt)))); });
}
/* pendón de pared: cuelga de una vara con pomos dorados, sujeta por dos cordones a una alcayata */
function pendon(padre, x, y, z, an, col, largo, ry) {
  const G = new T.Group(); G.position.set(x, y, z); if (ry) G.rotation.y = ry; padre.add(G); const oro = mat('#e2a92e', { metalness: .9, roughness: .25 }), mad = mat('#5a3a22', { roughness: .6 });
  const vara = cil(.05, .05, an + .3, mad, 8); vara.rotation.z = Math.PI / 2; G.add(vara); [-1, 1].forEach(sg => { const po = bola(.09, oro, 10); po.position.x = sg * (an / 2 + .17); G.add(po); const co = cil(.012, .012, Math.hypot(an / 2, .5), mat('#c9b28c'), 4); co.position.set(sg * an / 4, .25, 0); co.rotation.z = sg * Math.atan2(an / 2, .5); G.add(co); }); const al = bola(.05, oro, 8); al.position.y = .5; G.add(al);
  gonfalon(G, 0, -.02, .06, an, col, 0, largo || 2.6); return G;
}
function estandarte(padre, x, y, z, an, col, ry) {
  const al = an * 2, geo = new T.PlaneGeometry(an, al, 6, 10), m = new T.Mesh(geo, new T.MeshStandardMaterial({ map: txEstandarte(col || '#6a1f6e'), transparent: true, alphaTest: .5, side: T.DoubleSide, roughness: .85 })); m.position.set(x, y - al / 2, z); if (ry) m.rotation.y = ry; m.castShadow = true; padre.add(m);
  const pos = geo.attributes.position, f = rnd(0, 9); anim((dt, tt) => { for (let i = 0; i < pos.count; i++) { const v = (al / 2 - pos.getY(i)) / al; pos.setZ(i, Math.sin(tt * 1.7 + f + v * 4 + pos.getX(i) * 2) * .09 * v * an); } pos.needsUpdate = true; }); return m;
}
/* farola del reino: poste de hierro forjado, el farol gótico en 3D con su llama de aceite y un estandarte con la M de Mevi */
function farola(g, x, z, h, ret, col, o) {
  o = o || {}; const p = new T.Group(), hi = mat('#2f2433', { metalness: .6, roughness: .45 });
  const base = cil(.17, .25, .4, hi, 10); base.position.y = .2; p.add(base); const b2 = cil(.11, .15, .5, hi, 10); b2.position.y = .62; p.add(b2); const palo = cil(.055, .075, h, hi, 8); palo.position.y = h / 2; p.add(palo); const aro = cil(.11, .11, .08, hi, 10); aro.position.y = h * .62; p.add(aro); const plato = cil(.2, .09, .12, hi, 8); plato.position.y = h; p.add(plato);
  const AF = Math.min(1.25, h * .34), fa = MOD.farol ? pieza('farol', AF, { tinte: '#6a5a66' }) : null; if (fa) { fa.position.y = h - .02; p.add(fa); }
  llama(p, h + AF * .34, AF * .3, ret, o.luz);
  const charco = new T.Mesh(new T.CircleGeometry(3, 24), new T.MeshBasicMaterial({ map: TEX.chispa, color: '#ff9a3a', transparent: true, opacity: 0, depthWrite: false, blending: T.AdditiveBlending })); charco.rotation.x = -Math.PI / 2; charco.position.y = .05; p.add(charco); prende(k => { charco.material.opacity = k * .3; }, ret || 0);
  if (o.est !== false) pendonFarola(p, o.lado || (x < 0 ? -1 : 1), h, hi);   /* un solo pendón por farola, en un brazo de forja; con anverso y reverso */
  p.position.set(x, 0, z); if (o.ry) p.rotation.y = o.ry; sombra(p, true, false); g.add(p); return p;
}
/* antorcha de pared */
function antorcha(g, x, y, z, ry, ret) { const p = new T.Group(), hi = mat('#2f2433', { metalness: .6, roughness: .45 }); const br = cil(.04, .04, .5, hi, 6); br.rotation.x = Math.PI / 2 - .5; br.position.set(0, -.1, .22); p.add(br); const cu = cil(.13, .07, .34, hi, 8); cu.position.set(0, .08, .42); p.add(cu); llama(p, .3, .34, ret, 0).position.z = .42; const man = new T.Mesh(new T.CircleGeometry(2.2, 20), new T.MeshBasicMaterial({ map: TEX.chispa, color: '#ff8a2a', transparent: true, opacity: 0, depthWrite: false, blending: T.AdditiveBlending })); man.position.set(0, .3, .04); p.add(man); prende(k => { man.material.opacity = k * .45; }, ret || 0); p.position.set(x, y, z); p.rotation.y = ry || 0; g.add(p); return p; }
/* ventana gótica geminada (coronella): marco de piedra arenisca labrada, dos arquillos con su columnilla y capitel, alféizar y
   vidriera emplomada de rombos con carpintería rojiza. Dentro se enciende la luz al caer la tarde (prende). */
function txVentana(enc) {
  const k = 'vent' + (enc ? 1 : 0); if (TXS[k]) return TXS[k];
  return TXS[k] = lienzo(256, 384, (q, w, h) => { q.clearRect(0, 0, w, h);
    const arcos = (x0, x1, y0, y1) => { const m = (x0 + x1) / 2, r = (x1 - x0) / 4; q.beginPath(); q.moveTo(x0, y1); q.lineTo(x0, y0 + r); q.arc(x0 + r, y0 + r, r, Math.PI, 0); q.arc(x1 - r, y0 + r, r, Math.PI, 0); q.lineTo(x1, y1); q.closePath(); };
    if (!enc) { /* marco de sillares claros, con moldura y alféizar */
      const pi = q.createLinearGradient(0, 0, w, 0); pi.addColorStop(0, '#b9a07e'); pi.addColorStop(.5, '#d6bf98'); pi.addColorStop(1, '#a8906e'); q.fillStyle = pi; rr(q, 22, 14, w - 44, h - 62, 6); q.fill(); q.fillStyle = '#c9b28c'; q.fillRect(6, h - 56, w - 12, 26); q.fillStyle = '#8f7a5e'; q.fillRect(14, h - 30, w - 28, 12);
      q.strokeStyle = 'rgba(70,50,35,.5)'; q.lineWidth = 2; [[22, 100], [22, 190], [22, 270], [w - 60, 130], [w - 60, 230]].forEach(([x, y]) => { q.beginPath(); q.moveTo(x, y); q.lineTo(x + 38, y); q.stroke(); }); q.strokeRect(22, 14, w - 44, h - 62);
      for (let i = 0; i < 900; i++) { q.fillStyle = `rgba(${ri(2) ? '255,240,215' : '60,40,30'},${rnd(.03, .1)})`; q.fillRect(rnd(8, w - 8), rnd(14, h - 18), 3, 3); } }
    /* los dos huecos con su vidriera */
    q.save(); arcos(58, w - 58, 50, h - 66); q.clip();
    q.fillStyle = enc ? '#ffc56b' : '#1f2a44'; q.fillRect(0, 0, w, h); if (enc) { const g2 = q.createRadialGradient(w / 2, h * .55, 10, w / 2, h * .55, 150); g2.addColorStop(0, '#fff3c8'); g2.addColorStop(.6, '#ffb95a'); g2.addColorStop(1, '#e0842e'); q.fillStyle = g2; q.fillRect(0, 0, w, h); } else { const g2 = q.createLinearGradient(0, 40, 0, h); g2.addColorStop(0, '#5a6a9a'); g2.addColorStop(.5, '#27324e'); g2.addColorStop(1, '#161c30'); q.fillStyle = g2; q.fillRect(0, 0, w, h); }
    q.strokeStyle = enc ? 'rgba(90,40,10,.55)' : 'rgba(10,12,22,.75)'; q.lineWidth = 2.2; for (let i = -h; i < w + h; i += 17) { q.beginPath(); q.moveTo(i, 0); q.lineTo(i + h * .62, h); q.moveTo(i, 0); q.lineTo(i - h * .62, h); q.stroke(); }   /* emplomado de rombos */
    if (!enc) { q.fillStyle = 'rgba(190,210,255,.14)'; q.beginPath(); q.moveTo(58, 60); q.lineTo(120, 60); q.lineTo(70, 200); q.lineTo(58, 200); q.fill(); }
    q.restore();
    /* carpintería rojiza, travesaño y columnilla con capitel y basa */
    const mad = enc ? '#5a2416' : '#7a2e22'; q.strokeStyle = mad; q.lineWidth = 7; arcos(58, w - 58, 50, h - 66); q.stroke(); q.fillStyle = mad; q.fillRect(58, h * .52, w - 116, 6);
    const co = q.createLinearGradient(w / 2 - 9, 0, w / 2 + 9, 0); co.addColorStop(0, enc ? '#7a5a3a' : '#a8906e'); co.addColorStop(.5, enc ? '#b8905a' : '#e2ccA4'.toLowerCase()); co.addColorStop(1, enc ? '#6a4a2e' : '#8f7a5e'); q.fillStyle = co; q.fillRect(w / 2 - 7, 96, 14, h - 162); q.fillRect(w / 2 - 15, 84, 30, 16); q.fillRect(w / 2 - 13, h - 80, 26, 14); q.beginPath(); q.moveTo(w / 2 - 15, 84); q.lineTo(w / 2, 62); q.lineTo(w / 2 + 15, 84); q.fill();
  });
}
function ventana(g, x, y, z, w, h, ret, col, ry) {
  const G = new T.Group(); G.position.set(x, y, z); if (ry) G.rotation.y = ry; g.add(G); const an = w * 2.3, al = Math.max(h * 1.45, an * 1.5);
  const a = new T.Mesh(new T.PlaneGeometry(an, al), new T.MeshStandardMaterial({ map: txVentana(false), transparent: true, alphaTest: .4, roughness: .85 })); G.add(a);
  const b = new T.Mesh(new T.PlaneGeometry(an, al), new T.MeshBasicMaterial({ map: txVentana(true), transparent: true, opacity: 0, depthWrite: false })); b.position.z = .012; G.add(b);
  prende(k => { b.material.opacity = k; }, ret || 0); G.material = b.material; return G;   /* .material: la capa encendida (para la niebla y los tintes de quien la coloca) */
}
function suelo(g, tx, r, col) { const m = new T.Mesh(new T.CircleGeometry(r || 70, 64), mat(col || '#ffffff', { map: tx, roughness: .9 })); m.rotation.x = -Math.PI / 2; m.receiveShadow = true; g.add(m); return m; }
/* decorados */
function piruleta(g, x, z, h, c1, c2) {
  const p = new T.Group(); const palo = cil(.05, .05, h, mat('#d8c8b4', { roughness: .4 }), 10); palo.position.y = h / 2; p.add(palo);
  const tx = lz(256, 256, (q, w) => { q.fillStyle = c1; q.fillRect(0, 0, w, w); q.strokeStyle = c2; q.lineWidth = 22; q.beginPath(); for (let a = 0; a < 26; a += .05) { const r = a * 4.6; q.lineTo(w / 2 + Math.cos(a) * r, w / 2 + Math.sin(a) * r); } q.stroke(); });
  const d = cil(h * .26, h * .26, h * .07, mat('#fff', { map: tx, roughness: .25 }), 32); d.rotation.x = Math.PI / 2; d.position.y = h; p.add(d);
  p.position.set(x, 0, z); p.rotation.y = rnd(-.4, .4); sombra(p); g.add(p); anim((dt, tt) => { d.rotation.y = Math.sin(tt * .8 + x) * .15; }); return p;
}
function baston(g, x, z, h, rot) { const cv = new T.CatmullRomCurve3([new T.Vector3(0, 0, 0), new T.Vector3(0, h * .75, 0), new T.Vector3(0, h * .95, 0), new T.Vector3(h * .12, h * 1.04, 0), new T.Vector3(h * .24, h * .95, 0), new T.Vector3(h * .26, h * .82, 0)]);
  const tx = lz(64, 512, (q, w, hh) => { q.fillStyle = '#fff'; q.fillRect(0, 0, w, hh); q.fillStyle = '#ff2d55'; for (let y = -64; y < hh + 64; y += 64) { q.beginPath(); q.moveTo(0, y); q.lineTo(w, y + 40); q.lineTo(w, y + 66); q.lineTo(0, y + 26); q.fill(); } }, [1, 5]);
  const m = new T.Mesh(new T.TubeGeometry(cv, 40, h * .045, 12), mat('#fff', { map: tx, roughness: .25 })); m.position.set(x, 0, z); m.rotation.y = rot || 0; sombra(m); g.add(m); return m; }
function arbolAlgodon(g, x, z, s, col) { const p = new T.Group(); const tr = cil(.12 * s, .16 * s, 1.6 * s, mat('#b88a6a'), 10); tr.position.y = .8 * s; p.add(tr); const mm = mat(col, { roughness: .95 });
  [[0, 2.1, 0, 1], [.55, 1.85, .2, .7], [-.5, 1.9, -.1, .75], [.1, 2.55, -.2, .7], [-.2, 1.75, .5, .6]].forEach(([a, b, c, r]) => { const sp = bola(r * s, mm, 18); sp.position.set(a * s, b * s, c * s); p.add(sp); });
  p.position.set(x, 0, z); sombra(p); g.add(p); return p; }
function nube(g, x, y, z, s, col) { const sp = new T.Sprite(new T.SpriteMaterial({ map: TEX.nube, color: col || '#ffb89a', transparent: true, depthWrite: false, opacity: .82, fog: false })); sp.scale.set(s * 2.4, s * 1.2, 1); sp.position.set(x, y, z); g.add(sp); const v = rnd(.15, .4); anim(dt => { sp.position.x += v * dt; if (sp.position.x > 70) sp.position.x = -70; }); return sp; }
function globo(g, x, y, z, col) { const p = new T.Group(); const b = bola(.38, mat(col, { roughness: .2, metalness: .05 }), 20); b.scale.y = 1.18; p.add(b); const hilo = cil(.006, .006, 1.4, matB('#ffffff'), 4); hilo.position.y = -1.1; p.add(hilo); p.position.set(x, y, z); g.add(p); const f = rnd(0, 6); anim((dt, tt) => { p.position.y = y + Math.sin(tt * .9 + f) * .25; p.rotation.z = Math.sin(tt * .7 + f) * .12; }); return p; }
function guirnalda(g, a, b, n, colores, caida, ret) {
  const ms = []; for (let i = 0; i <= n; i++) { const k = i / n, p = a.clone().lerp(b, k); p.y -= Math.sin(k * Math.PI) * (caida || .8); const c = colores[i % colores.length], m = new T.MeshStandardMaterial({ color: mezcla(c, '#3a2a3a', .55), emissive: c, emissiveIntensity: 0, roughness: .3 }); const s = bola(.09, m, 10); s.position.copy(p); g.add(s); ms.push(m); }
  const pts = []; for (let i = 0; i <= 24; i++) { const k = i / 24, p = a.clone().lerp(b, k); p.y -= Math.sin(k * Math.PI) * (caida || .8) - .06; pts.push(p); } const cab = new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts), 24, .012, 4), matB('#2a1b3a')); g.add(cab);
  const on = ms.map(() => 0); ms.forEach((m, i) => prende(k => { on[i] = k; }, (ret || 0) + i * .07));
  anim((dt, tt) => { const p = pulso(); ms.forEach((m, i) => { m.emissiveIntensity = (.6 + ((i + Math.floor(tt * 3)) % 3 === 0 ? 1.5 : .4) * (.6 + p * .6)) * on[i]; }); });
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

const TXS = {};   /* texturas de suelo (se crean una vez). Valores medios y saturados: nada de blancos que deslumbren en proyección */
function txSuelo(k) {
  if (TXS[k]) return TXS[k]; let tx;
  if (k === 'cesped') tx = lienzo(256, 256, (q, w) => { q.fillStyle = '#3f7d3c'; q.fillRect(0, 0, w, w); for (let i = 0; i < 1600; i++) { q.fillStyle = `rgba(${rnd(30, 120) | 0},${rnd(90, 160) | 0},${rnd(30, 70) | 0},.55)`; q.fillRect(rnd(0, w), rnd(0, w), 2, rnd(4, 9)); } for (let i = 0; i < 30; i++) { q.fillStyle = ['#e8c8a0', '#e8b23a', '#e070b8'][ri(3)]; q.beginPath(); q.arc(rnd(0, w), rnd(0, w), 2.5, 0, 7); q.fill(); } }, [26, 26]);
  if (k === 'plaza') tx = lienzo(1024, 1024, (q, w) => { const c = w / 2; q.fillStyle = '#6f5f66'; q.fillRect(0, 0, w, w);
    for (let r = 16; r > 0; r--) { const n = 6 + r * 5; for (let a = 0; a < n; a++) { const a0 = (a + (r % 2) * .5) / n * 6.283, a1 = (a + 1 + (r % 2) * .5) / n * 6.283; q.fillStyle = mezcla(['#9c8478', '#a8907c', '#8f7c80', '#b09a86'][ri(4)], r % 4 === 0 ? '#7a5f72' : '#a08a7c', r % 4 === 0 ? .6 : rnd(0, .4)); q.beginPath(); q.arc(c, c, r * 32 - 1.5, a0 + .004, a1 - .004); q.arc(c, c, (r - 1) * 32 + 1.5, a1 - .004, a0 + .004, true); q.closePath(); q.fill(); } }
    for (let i = 0; i < 9000; i++) { q.fillStyle = `rgba(${ri(2) ? '255,235,215' : '35,20,40'},${rnd(.02, .08)})`; q.fillRect(rnd(0, w), rnd(0, w), rnd(2, 5), rnd(2, 5)); }
    /* estrella de ocho puntas en dos tonos de piedra, fileteada en bronce */
    q.save(); q.translate(c, c); for (let i = 0; i < 8; i++) { q.rotate(Math.PI / 4); const L = i % 2 ? 150 : 230; q.fillStyle = '#5a4658'; q.beginPath(); q.moveTo(0, 0); q.lineTo(-30, -44); q.lineTo(0, -L); q.closePath(); q.fill(); q.fillStyle = '#c9b29a'; q.beginPath(); q.moveTo(0, 0); q.lineTo(30, -44); q.lineTo(0, -L); q.closePath(); q.fill(); q.strokeStyle = '#b8862e'; q.lineWidth = 3; q.beginPath(); q.moveTo(-30, -44); q.lineTo(0, -L); q.lineTo(30, -44); q.stroke(); } q.restore();
    q.strokeStyle = '#b8862e'; q.lineWidth = 5; [256, 384, 505].forEach(r => { q.beginPath(); q.arc(c, c, r, 0, 7); q.stroke(); }); });
  if (k === 'adoquin') tx = lienzo(512, 512, (q, w) => { q.fillStyle = '#6d5a72'; q.fillRect(0, 0, w, w); for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { const o = (y % 2) * 32, c = ['#8a7088', '#9a7f86', '#7d6a92', '#a08878'][ri(4)]; q.fillStyle = c; rr(q, x * 64 + o - 64 + 4, y * 64 + 4, 56, 56, 12); q.fill(); rr(q, x * 64 + o + 4, y * 64 + 4, 56, 56, 12); q.fill(); } for (let i = 0; i < 2500; i++) { q.fillStyle = `rgba(${ri(2) ? '255,235,210' : '40,20,50'},${rnd(.02, .08)})`; q.fillRect(rnd(0, w), rnd(0, w), 3, 3); } }, [14, 14]);
  if (k === 'fantasia') tx = lienzo(512, 512, (q, w) => { q.fillStyle = '#2a1650'; q.fillRect(0, 0, w, w); for (let i = 0; i < 260; i++) { q.fillStyle = `rgba(${150 + ri(100)},${110 + ri(80)},255,${rnd(.15, .5)})`; q.beginPath(); q.arc(rnd(0, w), rnd(0, w), rnd(1, 3), 0, 7); q.fill(); } q.strokeStyle = 'rgba(190,150,255,.35)'; q.lineWidth = 4; for (let i = 0; i < 6; i++) { q.beginPath(); q.arc(w / 2, w / 2, 60 + i * 34, 0, 7); q.stroke(); } }, [6, 6]);
  if (k === 'absurdo') tx = lienzo(256, 256, (q, w) => { for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { q.fillStyle = (x + y) % 2 ? '#b8268a' : '#d19a12'; q.fillRect(x * 32, y * 32, 32, 32); } for (let i = 0; i < 900; i++) { q.fillStyle = `rgba(${ri(2) ? '255,230,200' : '50,10,60'},${rnd(.03, .09)})`; q.fillRect(rnd(0, w), rnd(0, w), 3, 3); } }, [10, 10]);
  if (k === 'golosinas') tx = lienzo(512, 512, (q, w) => { q.fillStyle = '#2f9079'; q.fillRect(0, 0, w, w); const cs = ['#e0357f', '#e8b22a', '#3f8fe0', '#f0d8c8', '#9a5fe0']; for (let i = 0; i < 520; i++) { q.save(); q.translate(rnd(0, w), rnd(0, w)); q.rotate(rnd(0, 6.28)); q.fillStyle = cs[ri(5)]; rr(q, -7, -2, 14, 4.5, 2); q.fill(); q.restore(); } }, [8, 8]);
  if (k === 'feria') tx = lienzo(512, 512, (q, w) => { q.fillStyle = '#2a2140'; q.fillRect(0, 0, w, w); for (let i = 0; i < 2000; i++) { q.fillStyle = `rgba(255,255,255,${rnd(0, .06)})`; q.fillRect(rnd(0, w), rnd(0, w), 2, 2); } const cs = ['#ff4fb4', '#ffd23f', '#56d7ff', '#7dff9a']; for (let i = 0; i < 70; i++) { q.fillStyle = cs[ri(4)]; q.globalAlpha = .55; q.fillRect(rnd(0, w), rnd(0, w), 5, 3); } q.globalAlpha = 1; }, [8, 8]);
  return TXS[k] = tx;
}
/* el aire de cada sitio. Los exteriores van en hora dorada o al atardecer, con las luces de la noche encendiéndose */
function ambiente(g, tierra, o) {
  o = o || {};
  if (tierra === 'plaza' || tierra === 'castillo') {
    const h = o.hora === undefined ? horaParque() : o.hora, H3 = a => deHora(a, h), ck = Math.round(h * 4);
    MU.yaLuz = h >= .75; MU.hora = h;
    cielo(g, [[0, H3(['#27408f', '#141a52', '#070620'])], [.2, H3(['#5a5fb4', '#3a2a7c', '#160d44'])], [.36, H3(['#c0759c', '#8f3f8a', '#3c1a68'])], [.45, H3(['#f2955a', '#e96b4e', '#92386c'])], [.5, H3(['#ffc56b', '#ffa856', '#e07a4c'])], [.56, H3(['#d98a5a', '#a85a5a', '#5a2a5a'])], [1, H3(['#7a4a4a', '#4a2a4a', '#1a0d2a'])]], h > .3 ? 700 : 0, clamp((h - .3) * 1.6, 0, 1));
    luces(g, { cielo: H3(['#a6a2e6', '#7a6ad0', '#5a4ab0']), suelo: H3(['#8a5f48', '#6a4050', '#3a2440']), sol: H3(['#ffb070', '#ff8f5c', '#9aa6ff']), si: [2.0, 1.45, .8][Math.round(h * 2)], hi: [1.0, .9, .8][Math.round(h * 2)], amb: H3(['#ffd0a8', '#e0a0c0', '#8a7ad8']), ai: .34, env: 'tarde' + ck, dx: tierra === 'castillo' ? -11 : 11, dy: [6.5, 5.5, 12][Math.round(h * 2)], dz: 5 });
    if (h < .9) solBajo(g, tierra === 'castillo' ? -70 : 62, 9 - h * 9, -150, H3(['#ffb060', '#ff7a4a', '#c0486a']), 9);
    else { const luna = brillo('#fff4d6', 26, .8); luna.material.fog = false; luna.position.set(-58, 62, -140); g.add(luna); const l2 = bola(5.4, matB('#fff8e8', { fog: false }), 32); l2.position.copy(luna.position); g.add(l2); }
    if (tierra === 'plaza') {
      if (!o.radio) suelo(g, txSuelo('adoquin'), 90, '#d8cec8');
      const pl = new T.Mesh(new T.CircleGeometry(o.radio || 17.5, 96), mat('#e2d6d2', { map: txSuelo('plaza'), roughness: .8 })); pl.rotation.x = -Math.PI / 2; pl.position.y = .02; pl.receiveShadow = true; g.add(pl);
      const bord = new T.Mesh(new T.TorusGeometry(o.radio || 17.5, .22, 8, 120), mat('#8f7868', { roughness: .8 })); bord.rotation.x = Math.PI / 2; bord.scale.z = .5; bord.position.y = .03; bord.receiveShadow = true; g.add(bord);
    }
    if (!o.radio) nubesSuaves(g, LITE ? 6 : 12, H3(['#ffb89a', '#f08a9a', '#7a5fb8']));
    ESC.fog = new T.Fog(H3(['#e39a78', '#a8607c', '#2c1a52']), 50, 175);
  } else if (tierra === 'fantasia') {
    cielo(g, ['#090320', '#1d0b45', '#4a1f86', '#9b5ad6', '#9b5ad6'], 900);
    luces(g, { cielo: '#9db4ff', suelo: '#3a1a5c', sol: '#c9d6ff', si: 1.3, hi: 1.0, env: 'fantasia', amb: '#7a5cff', ai: .25 });
    suelo(g, txSuelo('fantasia')); ESC.fog = new T.Fog('#2a1258', 18, 80); MU.yaLuz = true;
    chispasAmbiente(g, LITE ? 60 : 160, '#d8c2ff', 14);
    const luna = brillo('#fff4d6', 16, .9); luna.position.set(18, 26, -70); g.add(luna); const l2 = bola(3.4, matB('#fff8e8', { fog: false }), 32); l2.position.copy(luna.position); g.add(l2);
  } else if (tierra === 'absurdo') {   /* atardecer imposible: turquesa arriba, mostaza y coral abajo */
    cielo(g, [[0, '#10306e'], [.22, '#16639a'], [.38, '#27a59a'], [.46, '#e8b043'], [.5, '#ff8455'], [.56, '#b8457a'], [1, '#5a2060']]);
    luces(g, { cielo: '#7ad0d8', suelo: '#8a3a78', sol: '#ffb86a', si: 1.85, hi: .95, amb: '#ffd0a0', ai: .2, env: 'absurdo2', dx: -9, dy: 7, dz: -3 });
    solBajo(g, -46, 7, -150, '#ff9a4a', 8);
    suelo(g, txSuelo('absurdo'), 70, '#c4bab6'); ESC.fog = new T.Fog('#d98562', 38, 125);
    flotantes(g, LITE ? 8 : 18, ['#e0409f', '#e8b22a', '#2f78e0', '#2fb85a', '#f07a2c'], 18);
  } else if (tierra === 'golosinas') {   /* atardecer de fresa y naranja */
    cielo(g, [[0, '#5a2f8f'], [.2, '#a8479c'], [.36, '#e85f8f'], [.45, '#ff8f6f'], [.5, '#ffc070'], [.56, '#d0707a'], [1, '#7a3a5a']]);
    luces(g, { cielo: '#e8a0d0', suelo: '#3f8f78', sol: '#ffb078', si: 1.85, hi: .95, amb: '#ffc8b0', ai: .2, env: 'golosinas2', dx: 9, dy: 7, dz: -3 });
    solBajo(g, 44, 7, -150, '#ff8f5a', 8);
    suelo(g, txSuelo('golosinas'), 70, '#e8ded8'); ESC.fog = new T.Fog('#e88a8f', 38, 125);
    for (let i = 0; i < 7; i++) nube(g, rnd(-60, 60), rnd(16, 26), rnd(-90, -50), rnd(7, 12), '#ff9fb0');
  } else if (tierra === 'feria') {
    cielo(g, ['#04061a', '#0b1440', '#2a1660', '#7a2a78', '#7a2a78'], 700);
    luces(g, { cielo: '#7a8cff', suelo: '#3a1830', sol: '#ffcf9a', si: 1.1, hi: .8, env: 'feria', amb: '#ff6bd6', ai: .2 });
    suelo(g, txSuelo('feria')); ESC.fog = new T.Fog('#1c1040', 25, 95); MU.yaLuz = true;
  }
}
/* decorado de fondo propio de cada tierra (lejos, para no tapar las pruebas) */
function fondoTierra(g, tierra, z0) {
  z0 = z0 || -16;
  if (tierra === 'fantasia') { for (let i = 0; i < 6; i++) { const isla = new T.Group(); const roca = new T.Mesh(new T.ConeGeometry(rnd(1.4, 2.6), rnd(2.5, 4), 7), mat('#5a3a8a', { roughness: .9, flatShading: true })); roca.rotation.x = Math.PI; isla.add(roca); const top = cil(1.6, 1.6, .3, mat('#8f6bd6', { roughness: .8 }), 7); top.position.y = 1.3; isla.add(top);
    const cr = new T.Mesh(new T.OctahedronGeometry(.5), mat('#d9b3ff', { emissive: '#b07bff', emissiveIntensity: .8, roughness: .1 })); cr.scale.y = 2; cr.position.y = 2.2; isla.add(cr); isla.position.set((i % 2 ? 1 : -1) * rnd(9, 20), rnd(5, 12), z0 - rnd(4, 26)); g.add(isla); const y0 = isla.position.y, f = rnd(0, 6); anim((dt, tt) => { isla.position.y = y0 + Math.sin(tt * .5 + f) * .6; cr.rotation.y += dt; }); } }
  if (tierra === 'golosinas') { const cs = [['#ff4f9a', '#ffffff'], ['#ffd23f', '#ff5f3c'], ['#5fb8ff', '#ffffff'], ['#b07bff', '#ffe6ff']]; for (let i = 0; i < 9; i++) { const x = (i % 2 ? 1 : -1) * rnd(8, 22), z = z0 - rnd(0, 18); if (i % 3 === 2) arbolAlgodon(g, x, z, rnd(1.2, 2), ['#ffb3dc', '#c9b3ff', '#b3f0ff'][ri(3)]); else if (i % 3 === 1) baston(g, x, z, rnd(3, 5), rnd(0, 6)); else { const c = cs[ri(4)]; piruleta(g, x, z, rnd(3, 5.5), c[0], c[1]); } } }
  if (tierra === 'feria') { noria(g, -16, 9, z0 - 14, 7.5); if (MOD.portal) { const cj = pon(g, 'portal', 10, 6, 0, z0 - 11, { ry: -.2, tinte: '#d9c9bc' }); const hz = brillo('#ffd27a', 9, .3); hz.position.set(0, 3, 1.5); cj.add(hz); }   /* el castillo de juguete de la feria (la primera puerta del parque) */ carpa(g, 15, z0 - 6, 1.6, '#ff3b4f'); carpa(g, 22, z0 - 16, 1.3, '#3b8cff'); carpa(g, -24, z0 - 4, 1.2, '#a65cff');
    guirnalda(g, new T.Vector3(-14, 6, z0 + 2), new T.Vector3(14, 6, z0 + 2), 26, ['#ffd23f', '#ff4fb4', '#56d7ff', '#ffffff'], 1.2); for (let i = 0; i < 5; i++) { const fa = new T.SpotLight(['#ff4fb4', '#56d7ff', '#ffd23f'][i % 3], 3, 60, .18, .6); fa.position.set(-20 + i * 10, 0, z0 - 20); fa.target.position.set(-20 + i * 10 + rnd(-6, 6), 40, z0 - 30); g.add(fa); g.add(fa.target); const f = rnd(0, 6), tg = fa.target; anim((dt, tt) => { tg.position.x = -20 + i * 10 + Math.sin(tt * .5 + f) * 12; }); } }
  if (tierra === 'absurdo') { for (let i = 0; i < 4; i++) { const reloj = new T.Group(); const d = cil(1.4, 1.4, .25, mat('#ffffff'), 32); d.rotation.x = Math.PI / 2; reloj.add(d); const ar = new T.Mesh(new T.TorusGeometry(1.4, .14, 8, 32), mat('#ff5fc8')); reloj.add(ar); const ag = caja(.08, 1.1, .05, matB('#2a0b4a')); ag.position.set(0, .5, .16); const piv = new T.Group(); piv.add(ag); reloj.add(piv);
    reloj.position.set((i % 2 ? 1 : -1) * rnd(10, 18), rnd(6, 11), z0 - rnd(2, 16)); reloj.rotation.z = rnd(-.6, .6); g.add(reloj); const v = rnd(-3, 3); anim(dt => { piv.rotation.z += v * dt; }); } }
}

/* ======================= HUD ======================= */
function hud(on) { $('hud').classList.toggle('on', on); $('pts').classList.toggle('on', on); colocaPts(); }
function colocaPts() { const h = $('hud'), p = $('pts'); if (!h.classList.contains('on')) return; p.style.top = (h.offsetTop + h.offsetHeight + Math.round(ST.clientWidth * .009)) + 'px'; }   /* v18.59 · el marcador, justo debajo del panel de la izquierda */
try { new ResizeObserver(colocaPts).observe($('hud')); } catch (e) {}
function pintaHud() {
  const ll = $('llaves'); ll.innerHTML = ''; for (let i = 0; i < necesarias(); i++) { const e = document.createElement('i'); e.style.backgroundImage = `url(${TEX.llave})`; if (i < J.llaves.length) e.className = 'si'; ll.appendChild(e); }
  $('ptsV').textContent = J.pts; $('ptsT').textContent = t('puntos') + (J.modo === 2 && J.patos ? '  ·  🦆 ' + J.patos : '');
}
function lugar(txt) { $('lugar').textContent = txt; MU.lugarSrc = VOZDE.get(txt) || txt; }
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
  if (id !== null) { if (PTR.tactil) S.k = PTR.toca ? 1 : 0; else { S.k += dt / S.seg; if (PTR.toca) S.k = 1; } retiAnillo(S.k);   /* v18.59 · con el dedo solo se abre al tocar: si no, la mirilla se quedaba donde se levantó el dedo y abría sola las puertas nuevas */ if (S.k >= 1) { MU.sel = null; retiAnillo(0); if (S.hover) S.hover(null); S.f(id, o); } }
  else { retiAnillo(0); if (PTR.toca && o && o.userData.no && o.userData.noF) o.userData.noF(); }
}

/* ---------- muros y setos: ninguna puerta queda suelta en medio del campo ---------- */
function txPiedra(c1, c2, junta) { const k = 'piedra' + c1 + c2; if (TXS[k]) return TXS[k]; return TXS[k] = lienzo(512, 512, (q, w) => { q.fillStyle = junta || '#4a3a4a'; q.fillRect(0, 0, w, w);
    const filas = [44, 30, 52, 36, 46, 28, 50, 34, 48, 40, 30, 74]; let y = 0; filas.forEach((al, f) => { let x = -rnd(0, 60); while (x < w) { const an = rnd(42, 118) * (al > 45 ? 1.15 : .9), t0 = Math.random(); q.fillStyle = mezcla(mezcla(c1, c2, t0), Math.random() < .14 ? '#6a6672' : Math.random() < .1 ? '#e2cfae' : c1, Math.random() < .25 ? .45 : 0); rr(q, x + 1.6, y + 1.6, an - 3.2, al - 3.2, 4); q.fill(); if (x < 0) { rr(q, x + w + 1.6, y + 1.6, an - 3.2, al - 3.2, 4); q.fill(); } q.fillStyle = 'rgba(255,240,215,.1)'; q.fillRect(x + 4, y + 3, an - 8, 3); q.fillStyle = 'rgba(30,18,24,.16)'; q.fillRect(x + 4, y + al - 7, an - 8, 4); x += an; } y += al; });
    for (let i = 0; i < 5200; i++) { q.fillStyle = `rgba(${ri(2) ? '255,235,215' : '40,20,45'},${rnd(.02, .09)})`; q.fillRect(rnd(0, w), rnd(0, w), rnd(2, 4), rnd(2, 4)); } }, [1, 1]); }
function txHojas() { if (TXS.hojas) return TXS.hojas; return TXS.hojas = lienzo(256, 256, (q, w) => { q.fillStyle = '#255a34'; q.fillRect(0, 0, w, w); for (let i = 0; i < 900; i++) { q.fillStyle = `rgba(${rnd(20, 90) | 0},${rnd(90, 170) | 0},${rnd(40, 80) | 0},.8)`; q.beginPath(); q.ellipse(rnd(0, w), rnd(0, w), rnd(3, 7), rnd(2, 4), rnd(0, 3.14), 0, 7); q.fill(); } }, [1, 1]); }
/* muralla de piedra con almenas, de (x0, z0) a (x1, z1) */
function muralla(g, x0, z0, x1, z1, h, o) {
  o = o || {}; const dx = x1 - x0, dz = z1 - z0, lar = Math.hypot(dx, dz), gr = new T.Group(); gr.position.set((x0 + x1) / 2, 0, (z0 + z1) / 2); gr.rotation.y = -Math.atan2(dz, dx); g.add(gr);
  const tx = txPiedra(o.c1 || '#a58a88', o.c2 || '#c0a08c').clone(); tx.needsUpdate = true; tx.wrapS = tx.wrapT = T.RepeatWrapping; tx.repeat.set(lar / 2.4, h / 2.4);
  const m = mat('#e6dcd6', { map: tx, roughness: .9 }), gro = o.gro || 1; const c = caja(lar, h, gro, m); c.position.y = h / 2; gr.add(c);
  const n = Math.max(2, Math.round(lar / 1.5)), ml = mat(o.c1 || '#a58a88', { roughness: .9 }); for (let i = 0; i < n; i += 2) { const a = caja(lar / n, .6, gro, ml); a.position.set(-lar / 2 + (i + .5) * lar / n, h + .3, 0); gr.add(a); }
  sombra(gr); return gr;
}
/* seto recortado en arco alrededor de (cx, cz), con bolas de topiaria y una ristra de bombillas */
function seto(g, cx, cz, R, a0, a1, h, ret) {
  const n = Math.max(2, Math.round(Math.abs(a1 - a0) * R / 1.5)), m = mat('#f2ffe8', { map: txHojas(), roughness: 1, emissive: '#1f5a2a', emissiveIntensity: .35 }), pts = [];
  for (let i = 0; i < n; i++) { const a = a0 + (a1 - a0) * (i + .5) / n, x = cx + Math.sin(a) * R, z = cz - Math.cos(a) * R; const b = caja(Math.abs(a1 - a0) * R / n + .12, h, 1.1, m); b.position.set(x, h / 2, z); b.rotation.y = -a; g.add(b); b.castShadow = b.receiveShadow = true;
    if (i % 2 === 0) { const t2 = bola(.62, m, 12); t2.position.set(x, h + .35, z); t2.castShadow = true; g.add(t2); } }
  for (let i = 0; i <= 8; i++) { const a = a0 + (a1 - a0) * i / 8; pts.push(new T.Vector3(cx + Math.sin(a) * (R - .62), h * .78 + Math.sin(i / 8 * Math.PI * 3) * .18, cz - Math.cos(a) * (R - .62))); }
  for (let i = 0; i < pts.length - 1; i++) guirnalda(g, pts[i], pts[i + 1], 4, ['#ffd27a', '#ffb45a', '#fff0b8'], .12, (ret || 0) + i * .12);
}

/* árboles, arbustos y rocas del kit de naturaleza de WONDERWALK (Quaternius, CC0), en su formato compacto */
const NAT = {};
function cargaNat() { const B0 = '../packs/wonderwalk/'; return Promise.all([fetch(B0 + 'naturaleza.json').then(r => r.json()), fetch(B0 + 'naturaleza.bin').then(r => r.arrayBuffer())]).then(([Jn, B]) => { const tl = new T.TextureLoader(), mats = {}, EXT = { Bark_NormalTree: 'jpg', Rocks_Diffuse: 'jpg', Mushrooms: 'jpg' };
    const mt = (n, alfa) => mats[n] || (mats[n] = (() => { const tx = tl.load(B0 + 'tex/' + n + '.' + (EXT[n] || 'png')); tx.flipY = false; tx.encoding = T.sRGBEncoding; tx.wrapS = tx.wrapT = T.RepeatWrapping; return new T.MeshStandardMaterial({ map: tx, alphaTest: alfa ? .45 : 0, side: alfa ? T.DoubleSide : T.FrontSide, roughness: .95 }); })());
    Object.keys(Jn).forEach(k => { NAT[k] = { h: Jn[k].h, prims: Jn[k].prims.map(pr => { const ge = new T.BufferGeometry(); ge.setAttribute('position', new T.BufferAttribute(new Float32Array(B, pr.p, pr.n * 3), 3)); ge.setAttribute('normal', new T.BufferAttribute(new Int8Array(B, pr.no, pr.n * 3), 3, true)); ge.setAttribute('uv', new T.BufferAttribute(new Float32Array(B, pr.uv, pr.n * 2), 2)); ge.setIndex(new T.BufferAttribute(new Uint16Array(B, pr.i, pr.ni), 1)); ge.computeBoundingSphere(); ge.userData.mod = true; return { g: ge, m: mt(pr.tex, pr.alfa) }; }) }; }); }).catch(() => {}); }
function arbol(g, tipo, x, z, alto, ry) { const N = NAT[tipo]; if (!N) { const c = new T.Mesh(new T.ConeGeometry(alto * .16, alto, 12), mat('#2f5a3a', { roughness: 1 })); c.position.set(x, alto / 2, z); c.castShadow = true; g.add(c); return c; } const G = new T.Group(), e = alto / N.h; N.prims.forEach(pr => { const m = new T.Mesh(pr.g, pr.m.clone()); m.castShadow = true; m.receiveShadow = true; G.add(m); }); G.scale.setScalar(e); G.position.set(x, 0, z); G.rotation.y = ry === undefined ? rnd(0, 6.28) : ry; g.add(G); return G; }
/* bosque: muchos árboles del mismo tipo en mallas instanciadas; f(i, objeto) coloca cada uno */
function bosqueNat(g, tipo, n, f, niebla) { const N = NAT[tipo]; if (!N) return false; const dm = new T.Object3D(), ms = N.prims.map(pr => { const mm = pr.m.clone(); mm.fog = niebla !== false; const im = new T.InstancedMesh(pr.g, mm, n); g.add(im); return im; }); for (let i = 0; i < n; i++) { dm.position.set(0, 0, 0); dm.rotation.set(0, 0, 0); dm.scale.setScalar(1); f(i, dm, N.h); dm.updateMatrix(); ms.forEach(im => im.setMatrixAt(i, dm.matrix)); } return true; }

/* ---------- banderas ---------- */
/* la bandera de la izquierda es la del visitante: la del idioma si lo ha elegido a mano y, si no, la de su país según la región y la zona horaria
   del propio dispositivo (no se consulta ningún servicio externo ni se envía nada: es un dato que ya tiene el navegador) */
const ZONAS = { 'Europe/Madrid': 'es', 'Atlantic/Canary': 'es', 'Africa/Ceuta': 'es', 'Europe/Andorra': 'ad', 'Europe/London': 'gb', 'Europe/Paris': 'fr', 'Europe/Berlin': 'de', 'Europe/Rome': 'it', 'Europe/Lisbon': 'pt', 'America/Mexico_City': 'mx', 'America/Bogota': 'co', 'America/Santiago': 'cl', 'America/Lima': 'pe', 'America/New_York': 'us', 'America/Chicago': 'us', 'America/Denver': 'us', 'America/Los_Angeles': 'us' };
/* v18.50 · bandera de cada idioma de la consola (los que no tienen un país claro, la del reino de Mevi) */
const BAN_IMG = ['es', 'en', 'gb', 'us', 'ad', 'mx', 'ar', 'co', 'cl', 'pe', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ua', 'hu', 'id', 'ro', 'se', 'dk', 'no', 'fi', 'cz', 'gr', 'jp', 'cn', 'vn', 'tr', 'il', 'in', 'th', 'kr'];   /* packs/meviland/banderas/<código>.webp */
const BAN_IDIOMA = { gl: 'gal', eu: 'eus', fr: 'fr', de: 'de', it: 'it', pt: 'pt', nl: 'nl', pl: 'pl', ru: 'ru', uk: 'ua', tr: 'tr', he: 'il', zh: 'cn', ja: 'jp', ko: 'kr', hi: 'in', id: 'id', sv: 'se', da: 'dk', no: 'no', fi: 'fi', cs: 'cz', ro: 'ro', el: 'gr', hu: 'hu', th: 'th', vi: 'vn' };
const BANDERAS = ['es', 'cat', 'eus', 'gal', 'ad', 'gb', 'us', 'en', 'fr', 'de', 'it', 'pt', 'mx', 'ar', 'co', 'cl', 'pe', 'nl', 'pl', 'ru', 'ua', 'hu', 'id', 'ro', 'se', 'dk', 'no', 'fi', 'cz', 'gr', 'jp', 'cn', 'vn', 'tr', 'il', 'in', 'th', 'kr'];
function paisVisitante() {
  let pais = null; try { const ls = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']); for (const l of ls) { const m = /^([a-z]{2,3})(?:-[A-Za-z]{4})?(?:-([A-Za-z]{2}))?/.exec(l || ''); if (!m) continue; if (m[1] === 'eu') { pais = 'eus'; break; } if (m[1] === 'gl') { pais = 'gal'; break; } if (m[2]) { pais = m[2].toLowerCase(); break; } }
    const z = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; if (!pais || !BANDERAS.includes(pais)) pais = ZONAS[z] || (/^America\/Argentina/.test(z) ? 'ar' : pais); } catch (e) {}
  /* v18.50 · manda el idioma de la pantalla: catalán, dos senyeras; inglés, la mixta británica y estadounidense; español, la española (o la del país hispanohablante del visitante); el resto, la de su idioma */
  return UL === 'en' ? 'en' : UL === 'ca' ? 'cat' : UL === 'es' ? (['es', 'mx', 'ar', 'co', 'cl', 'pe'].includes(pais) ? pais : 'es') : (BAN_IDIOMA[UL] || 'reino');   /* v18.49 · inglés: siempre la mixta británica y estadounidense; catalán: la senyera también a la izquierda (dos senyeras) */
}
function txBandera(c) {
  const k = 'ban' + c; if (TXS[k]) return TXS[k];
  const tx = TXS[k] = lienzo(384, 256, (q, w, h) => {
    const fH = (cs, ps) => { let y = 0; cs.forEach((col, i) => { const hh = h * (ps ? ps[i] : 1 / cs.length); q.fillStyle = col; q.fillRect(0, y, w, hh + 1); y += hh; }); }, fV = cs => cs.forEach((col, i) => { q.fillStyle = col; q.fillRect(i * w / cs.length, 0, w / cs.length + 1, h); }), esc = (x, y, r, col) => { q.fillStyle = col; q.beginPath(); q.arc(x, y, r, 0, 7); q.fill(); };
    const gb = () => { q.fillStyle = '#1f3a8a'; q.fillRect(0, 0, w, h); q.strokeStyle = '#f2ede4'; q.lineWidth = h * .2; q.beginPath(); q.moveTo(0, 0); q.lineTo(w, h); q.moveTo(w, 0); q.lineTo(0, h); q.stroke(); q.strokeStyle = '#c22a3a'; q.lineWidth = h * .07; q.stroke(); q.fillStyle = '#f2ede4'; q.fillRect(w / 2 - h * .17, 0, h * .34, h); q.fillRect(0, h / 2 - h * .17, w, h * .34); q.fillStyle = '#c22a3a'; q.fillRect(w / 2 - h * .1, 0, h * .2, h); q.fillRect(0, h / 2 - h * .1, w, h * .2); };
    const us = () => { for (let i = 0; i < 13; i++) { q.fillStyle = i % 2 ? '#f2ede4' : '#b8283a'; q.fillRect(0, i * h / 13, w, h / 13 + 1); } q.fillStyle = '#28356e'; q.fillRect(0, 0, w * .42, h * 7 / 13); q.fillStyle = '#f2ede4'; for (let y = 0; y < 5; y++) for (let x = 0; x < 6; x++) { estrella2D(q, w * .035 + x * w * .07, h * .05 + y * h * .105, 6, 2.6, 5); q.fill(); } };
    if (c === 'es') fH(['#c60b1e', '#ffc400', '#c60b1e'], [.25, .5, .25]);   /* el escudo, fiel, llega con la imagen (banderas/es.webp) */
    else if (c === 'cat') fH(['#f0c020', '#c8202e', '#f0c020', '#c8202e', '#f0c020', '#c8202e', '#f0c020', '#c8202e', '#f0c020']);
    else if (c === 'eus') { q.fillStyle = '#c8202e'; q.fillRect(0, 0, w, h); q.strokeStyle = '#1f8a45'; q.lineWidth = h * .17; q.beginPath(); q.moveTo(0, 0); q.lineTo(w, h); q.moveTo(w, 0); q.lineTo(0, h); q.stroke(); q.fillStyle = '#f2ede4'; q.fillRect(w / 2 - h * .085, 0, h * .17, h); q.fillRect(0, h / 2 - h * .085, w, h * .17); }
    else if (c === 'gal') { q.fillStyle = '#f2ede4'; q.fillRect(0, 0, w, h); q.strokeStyle = '#3f98e0'; q.lineWidth = h * .22; q.beginPath(); q.moveTo(0, 0); q.lineTo(w, h); q.stroke(); }
    else if (c === 'ad') { fV(['#1f3a9a', '#f0c020', '#c8202e']); esc(w / 2, h / 2, h * .13, '#a8701e'); }
    else if (c === 'gb') gb(); else if (c === 'us') us();
    else if (c === 'en') { gb(); q.save(); q.beginPath(); q.moveTo(w, 0); q.lineTo(w, h); q.lineTo(0, h); q.closePath(); q.clip(); us(); q.restore(); q.strokeStyle = '#f2ede4'; q.lineWidth = 4; q.beginPath(); q.moveTo(w, 0); q.lineTo(0, h); q.stroke(); }
    else if (c === 'fr') fV(['#1f3a9a', '#f2ede4', '#d0283a']); else if (c === 'it') fV(['#1f8a45', '#f2ede4', '#c8202e']); else if (c === 'de') fH(['#1a1a1a', '#c8202e', '#f0c020']);
    else if (c === 'pt') { q.fillStyle = '#1f7a3a'; q.fillRect(0, 0, w * .4, h); q.fillStyle = '#c8202e'; q.fillRect(w * .4, 0, w * .6, h); esc(w * .4, h / 2, h * .18, '#f0c020'); esc(w * .4, h / 2, h * .1, '#c8202e'); }
    else if (c === 'mx') { fV(['#1f7a45', '#f2ede4', '#c8202e']); esc(w / 2, h / 2, h * .12, '#8a5a2a'); }
    else if (c === 'ar') { fH(['#74acdf', '#f2ede4', '#74acdf']); esc(w / 2, h / 2, h * .1, '#f0b020'); }
    else if (c === 'co') fH(['#f0c820', '#1f3a9a', '#c8202e'], [.5, .25, .25]);
    else if (c === 'cl') { fH(['#f2ede4', '#c8202e']); q.fillStyle = '#1f3a9a'; q.fillRect(0, 0, h / 2, h / 2); q.fillStyle = '#f2ede4'; estrella2D(q, h / 4, h / 4, h * .14, h * .06, 5); q.fill(); }
    else if (c === 'pe') { fV(['#c8202e', '#f2ede4', '#c8202e']); }
    /* v18.50 · banderas de los demás idiomas de la consola (simplificadas, para verse de lejos) */
    else if (c === 'nl') fH(['#ae1c28', '#f2ede4', '#21468b']); else if (c === 'pl') fH(['#f2ede4', '#d4213d']); else if (c === 'ru') fH(['#f2ede4', '#1c3f94', '#d52b1e']);
    else if (c === 'ua') fH(['#0057b7', '#ffd700']); else if (c === 'hu') fH(['#ce2939', '#f2ede4', '#477050']); else if (c === 'id') fH(['#d0202e', '#f2ede4']);
    else if (c === 'ro') fV(['#002b7f', '#fcd116', '#ce1126']);
    else if (['se', 'dk', 'no', 'fi'].includes(c)) { const [f, x1, x2] = { se: ['#006aa7', '#fecc00', null], dk: ['#c8102e', '#f2ede4', null], no: ['#ba0c2f', '#f2ede4', '#00205b'], fi: ['#f2ede4', '#002f6c', null] }[c]; q.fillStyle = f; q.fillRect(0, 0, w, h); const cx = w * .36, cr = (k, col) => { q.fillStyle = col; q.fillRect(cx - h * k / 2, 0, h * k, h); q.fillRect(0, h / 2 - h * k / 2, w, h * k); }; cr(.22, x1); if (x2) cr(.11, x2); }
    else if (c === 'cz') { fH(['#f2ede4', '#d7141a']); q.fillStyle = '#11457e'; q.beginPath(); q.moveTo(0, 0); q.lineTo(w * .45, h / 2); q.lineTo(0, h); q.closePath(); q.fill(); }
    else if (c === 'gr') { for (let i = 0; i < 9; i++) { q.fillStyle = i % 2 ? '#f2ede4' : '#0d5eaf'; q.fillRect(0, i * h / 9, w, h / 9 + 1); } q.fillStyle = '#0d5eaf'; q.fillRect(0, 0, h * 5 / 9, h * 5 / 9); q.fillStyle = '#f2ede4'; q.fillRect(h * 2 / 9, 0, h / 9, h * 5 / 9); q.fillRect(0, h * 2 / 9, h * 5 / 9, h / 9); }
    else if (c === 'jp') { q.fillStyle = '#f2ede4'; q.fillRect(0, 0, w, h); esc(w / 2, h / 2, h * .3, '#bc002d'); }
    else if (c === 'cn' || c === 'vn') { q.fillStyle = '#de2910'; q.fillRect(0, 0, w, h); q.fillStyle = '#ffde00'; if (c === 'vn') { estrella2D(q, w / 2, h / 2, h * .3, h * .12, 5); q.fill(); } else { estrella2D(q, w * .17, h * .27, h * .15, h * .06, 5); q.fill(); [[.33, .1], [.4, .2], [.4, .35], [.33, .45]].forEach(([x, y]) => { estrella2D(q, w * x, h * y, h * .05, h * .02, 5); q.fill(); }); } }
    else if (c === 'tr') { q.fillStyle = '#e30a17'; q.fillRect(0, 0, w, h); esc(w * .38, h / 2, h * .25, '#f2ede4'); esc(w * .43, h / 2, h * .2, '#e30a17'); q.fillStyle = '#f2ede4'; estrella2D(q, w * .58, h / 2, h * .11, h * .045, 5); q.fill(); }
    else if (c === 'il') { q.fillStyle = '#f2ede4'; q.fillRect(0, 0, w, h); q.fillStyle = '#0038b8'; q.fillRect(0, h * .1, w, h * .14); q.fillRect(0, h * .76, w, h * .14); q.strokeStyle = '#0038b8'; q.lineWidth = h * .035; [0, Math.PI].forEach(r0 => { q.beginPath(); for (let k = 0; k < 3; k++) { const a2 = r0 - Math.PI / 2 + k * Math.PI * 2 / 3; q[k ? 'lineTo' : 'moveTo'](w / 2 + Math.cos(a2) * h * .17, h / 2 + Math.sin(a2) * h * .17); } q.closePath(); q.stroke(); }); }
    else if (c === 'in') { fH(['#ff9933', '#f2ede4', '#138808']); q.strokeStyle = '#000080'; q.lineWidth = h * .025; q.beginPath(); q.arc(w / 2, h / 2, h * .13, 0, 7); q.stroke(); }
    else if (c === 'th') fH(['#a51931', '#f4f5f8', '#2d2a4a', '#f4f5f8', '#a51931'], [1 / 6, 1 / 6, 2 / 6, 1 / 6, 1 / 6]);
    else if (c === 'kr') { q.fillStyle = '#f2ede4'; q.fillRect(0, 0, w, h); const r = h * .2; q.fillStyle = '#cd2e3a'; q.beginPath(); q.arc(w / 2, h / 2, r, Math.PI, 0); q.fill(); q.fillStyle = '#0047a0'; q.beginPath(); q.arc(w / 2, h / 2, r, 0, Math.PI); q.fill(); esc(w / 2 - r / 2, h / 2, r / 2, '#cd2e3a'); esc(w / 2 + r / 2, h / 2, r / 2, '#0047a0'); q.fillStyle = '#1a1a1a'; [[.2, .22], [.8, .22], [.2, .78], [.8, .78]].forEach(([x, y]) => { for (let k = 0; k < 3; k++) q.fillRect(w * x - h * .08, h * y - h * .07 + k * h * .055, h * .16, h * .035); }); }
    else { q.fillStyle = '#6a1f6e'; q.fillRect(0, 0, w, h); q.save(); const e = 150 / 2160; q.translate(w / 2 - 1130 * e, h / 2 + 52); q.scale(e, -e); q.fillStyle = '#e2a92e'; q.fill(new Path2D(M_GOTICA)); q.restore(); }
    acabaBandera(q, w, h);
  });
  /* v18.50 · las banderas de los países van con su imagen fiel (escudos y emblemas completos); mientras carga, la dibujada */
  if (BAN_IMG.includes(c)) { const im = new Image(); im.onload = () => { const cv = tx.image, q = cv.getContext('2d'); q.globalCompositeOperation = 'source-over'; q.clearRect(0, 0, cv.width, cv.height); q.drawImage(im, 0, 0, cv.width, cv.height); acabaBandera(q, cv.width, cv.height); tx.needsUpdate = true; }; im.src = '../packs/meviland/banderas/' + c + '.webp?v=18.50'; }
  return tx;
}
/* el acabado de toda bandera: brillo de seda en los pliegues y el remate en cola de golondrina, ribeteado */
function acabaBandera(q, w, h) {
  const gr = q.createLinearGradient(0, 0, w, 0); for (let i = 0; i <= 8; i++) gr.addColorStop(i / 8, i % 2 ? 'rgba(0,0,0,.16)' : 'rgba(255,255,255,.12)'); q.fillStyle = gr; q.fillRect(0, 0, w, h);   /* brillo de seda en los pliegues */
  q.strokeStyle = '#e2a92e'; q.lineWidth = 7; q.beginPath(); q.moveTo(w, 2); q.lineTo(w * .8, h / 2); q.lineTo(w, h - 2); q.stroke(); q.globalCompositeOperation = 'destination-out'; q.fillStyle = '#000'; q.beginPath(); q.moveTo(w + 2, 5); q.lineTo(w * .8 + 6, h / 2); q.lineTo(w + 2, h - 5); q.closePath(); q.fill(); q.globalCompositeOperation = 'source-over';   /* remate en V (cola de golondrina), ribeteado */
}
/* bandera en su asta, ondeando al viento (la tela sale hacia +x desde el punto dado) */
function bandera(padre, x, y, z, an, cod) {
  const al = an * .6, geo = new T.PlaneGeometry(an, al, 18, 6), m = new T.Mesh(geo, new T.MeshStandardMaterial({ map: txBandera(cod), side: T.DoubleSide, roughness: .5, metalness: .05, transparent: true, alphaTest: .5, emissive: '#ffffff', emissiveMap: txBandera(cod), emissiveIntensity: .22 })); m.position.set(x + an / 2, y, z); m.castShadow = true; padre.add(m);
  const pos = geo.attributes.position, f = rnd(0, 9); anim((dt, tt) => { for (let i = 0; i < pos.count; i++) { const u = (pos.getX(i) + an / 2) / an, w = Math.sin(u * 6.5 - tt * 4.6 + f) * .3 + Math.sin(u * 12 - tt * 7 + f * 2 + pos.getY(i) * 2) * .08; pos.setZ(i, w * (.15 + u) * an * .26); } pos.needsUpdate = true; geo.computeVertexNormals(); }); m.userData.cod = cod; return m;
}
/* nubes esponjosas y translúcidas que pasan despacio por el cielo */
function nubesSuaves(g, n, col, lado) {
  if (!TEX.algodon) TEX.algodon = lienzo(128, 128, q => { const gr = q.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(.35, 'rgba(255,255,255,.55)'); gr.addColorStop(.7, 'rgba(255,255,255,.16)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); q.fillStyle = gr; q.fillRect(0, 0, 128, 128); });
  for (let i = 0; i < n; i++) { const N2 = new T.Group(), s = rnd(9, 20), np = 6 + ri(5), c2 = mezcla(col, '#fff2dc', .35); for (let j = 0; j < np; j++) { const k = j / (np - 1) - .5, sp = new T.Sprite(new T.SpriteMaterial({ map: TEX.algodon, color: j % 2 ? col : c2, transparent: true, opacity: rnd(.26, .44), depthWrite: false, fog: false })); const r = s * rnd(.5, .95) * (1 - Math.abs(k) * .9); sp.scale.set(r * 1.5, r, 1); sp.position.set(k * s * 1.9 + rnd(-1, 1), rnd(-.12, .2) * s + (1 - Math.abs(k) * 2) * s * .14, rnd(-2, 2)); N2.add(sp); }
    const y = rnd(30, 68), z = rnd(-170, -70), v = rnd(.9, 2.4) * (i % 4 === 0 ? 1.8 : 1); N2.position.set(rnd(-150, 150), y, z); g.add(N2); anim(dt => { N2.position.x += v * dt * (lado || 1); if (N2.position.x > 160) N2.position.x = -160; if (N2.position.x < -160) N2.position.x = 160; }); }
}

/* estatua de bronce de Mevi (la de la fuente): la Mevi de siempre, saludando, fundida en bronce */
function estatuaMevi(g, x, y, z, h) {
  const p = pieza('mevi', h); p.position.set(x, y, z); g.add(p); try { MEVICARA(T, p, '../packs/comun/mevi/caras.png?v=18.37'); } catch (e) {}
  const A = p.userData.A && p.userData.A.saluda; if (A) { A.play(); p.userData.mx.setTime(A.getClip().duration * .45); }   /* pose fija: una estatua no se mueve */
  p.traverse(o => { if (o.isMesh) { const m = o.material, antes = m.onBeforeCompile; m.metalness = .85; m.roughness = .32; m.envMapIntensity = 1.6; m.emissive = new T.Color('#4a2a0c'); m.emissiveIntensity = .3; o.castShadow = true;
    m.onBeforeCompile = (sh, r) => { if (antes) antes(sh, r); sh.fragmentShader = sh.fragmentShader.replace('#include <alphatest_fragment>', 'float lmB = dot(diffuseColor.rgb, vec3(.299, .587, .114)); diffuseColor.rgb = vec3(.62, .36, .13) * clamp(.3 + lmB * 1.25, 0., 1.);\n#include <alphatest_fragment>'); }; m.customProgramCacheKey = () => 'bronce'; m.needsUpdate = true; } });
  if (MOD.corona) {   /* la corona, asentada sobre la cabeza: se mide el punto más alto de la malla ya en su pose */
    p.updateMatrixWorld(true); const v = new T.Vector3(), pts = []; p.traverse(o => { if (o.isSkinnedMesh) { const pos = o.geometry.attributes.position, paso = Math.max(1, Math.floor(pos.count / 4000)); for (let i = 0; i < pos.count; i += paso) { v.fromBufferAttribute(pos, i); o.boneTransform(i, v); v.applyMatrix4(o.matrixWorld); pts.push(v.clone()); } } });
    if (pts.length) { pts.sort((a, b) => b.y - a.y); const top = pts[0].y, cab = pts.filter(q => q.y > top - h * .3), cx = cab.reduce((a, q) => a + q.x, 0) / cab.length, cz = cab.reduce((a, q) => a + q.z, 0) / cab.length, anc = Math.max(...cab.map(q => q.x)) - Math.min(...cab.map(q => q.x)), casq = pts.filter(q => q.y > top - h * .05), tx2 = casq.reduce((a, q) => a + q.x, 0) / casq.length, tz2 = casq.reduce((a, q) => a + q.z, 0) / casq.length;
      const co = pieza('corona', anc * .5, { ancho: true }), pc = new T.Vector3(lerp(cx, tx2, .5), top - h * .035, lerp(cz, tz2, .5)); g.worldToLocal(pc); co.position.copy(pc); co.traverse(o => { if (o.isMesh) { o.material.metalness = .9; o.material.roughness = .25; o.material.emissive = new T.Color('#6a4a10'); o.material.emissiveIntensity = .4; o.castShadow = true; } }); g.add(co); } }
  const ped = cil(.42, .5, .3, mat('#8a6a4a', { metalness: .6, roughness: .45 }), 16); ped.position.set(x, y - .12, z); ped.castShadow = true; g.add(ped); return p;
}
/* aves que cruzan el cielo del atardecer en bandada (siluetas que aletean) */
function bandada(g, n, y, z) {
  const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(new Float32Array([0, 0, .25, 0, 0, -.25, 1, 0, -.1]), 3)); const m = new T.MeshBasicMaterial({ color: '#2a1730', side: T.DoubleSide, fog: false });
  const B = new T.Group(); g.add(B); const aves = []; for (let i = 0; i < n; i++) { const a = new T.Group(), izq = new T.Mesh(geo, m), der = new T.Mesh(geo, m); der.scale.x = -1; a.add(izq); a.add(der); const f = Math.ceil(i / 2), s = i % 2 ? 1 : -1; a.position.set(-f * 1.5, rnd(-.3, .3), s * f * 1.2); a.scale.setScalar(rnd(.75, 1)); B.add(a); aves.push({ izq, der, f: rnd(0, 6) }); }
  let x = rnd(-90, -40), v = rnd(5, 7); B.position.set(x, y, z); B.scale.setScalar(1.5);
  anim((dt, tt) => { x += v * dt; if (x > 120) { x = -120; B.position.y = y + rnd(-6, 8); } B.position.x = x; B.position.y += Math.sin(tt * .4) * dt * .5; aves.forEach(a => { const w = Math.sin(tt * 7 + a.f) * .75; a.izq.rotation.z = w; a.der.rotation.z = -w; }); });
}
/* la ardilla roja de WONDERWALK: corretea por el suelo a saltitos, se sienta un momento y sigue */
function ardilla(g, zona) {
  if (!TEX.ardilla) { TEX.ardilla = new T.TextureLoader().load('../juegos/diana/ardilla-anim.webp?v=18.33'); TEX.ardilla.encoding = T.sRGBEncoding; }
  const tx = TEX.ardilla.clone(); tx.needsUpdate = true; tx.repeat.set(.1, 1); const al = .62, m = new T.Mesh(new T.PlaneGeometry(al * 262 / 220, al), new T.MeshBasicMaterial({ map: tx, transparent: true, alphaTest: .35, side: T.DoubleSide })); g.add(m);
  const som = new T.Mesh(new T.CircleGeometry(.28, 16), new T.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: .3, depthWrite: false })); som.rotation.x = -Math.PI / 2; g.add(som);
  const P0 = new T.Vector3(), P1 = new T.Vector3(); let k = 1, espera = rnd(1, 3), dur = 1, sent = true; const yo = cuerpo(() => m.position, .25), nuevoDestino = () => { P0.copy(m.position); P0.y = 0; for (let n = 0; n < 14; n++) { P1.set(rnd(zona[0], zona[1]), 0, rnd(zona[2], zona[3])); if (libre(P0, P1, .3, yo)) { dur = Math.max(.6, P0.distanceTo(P1) / 3.4); k = 0; sent = false; return; } } espera = rnd(.8, 1.6); };   /* v18.51 · salta solo por caminos despejados */
  m.position.set(rnd(zona[0], zona[1]), al / 2, rnd(zona[2], zona[3])); apartado(m.position, .3, yo); P1.copy(m.position);
  anim((dt, tt) => { let fr;
    if (k < 1) { k = Math.min(1, k + dt / dur); const d = P0.distanceTo(P1), botes = Math.max(1, Math.round(d / 1.1)), fase = (k * botes) % 1; m.position.lerpVectors(P0, P1, k); if (apartado(m.position, .25, yo)) { P0.copy(m.position); P1.copy(m.position); k = 1; espera = rnd(.6, 1.4); sent = true; } m.position.y = al / 2 + Math.sin(fase * Math.PI) * .22; fr = Math.floor(fase * 8) % 8; m.scale.x = P1.x >= P0.x ? 1 : -1; if (k >= 1) { espera = rnd(1.5, 4.5); sent = true; } }
    else { espera -= dt; m.position.y = al / 2; fr = 8 + (Math.floor(tt * 1.5) % 2); if (espera <= 0) nuevoDestino(); }
    tx.offset.x = fr * .1; m.rotation.y = Math.atan2(CAM.position.x - m.position.x, CAM.position.z - m.position.z); som.position.set(m.position.x, .04, m.position.z); });
  return m;
}

/* ======================= PLAZA DE MEVI ======================= */
/* ---------- puertas de los cuatro mundos, abiertas en la propia muralla de la fortaleza ---------- */
/* hoja de madera medieval con herrajes y un detalle de su mundo */
function txHoja(k, espejo) {
  const id = 'hoja' + k + (espejo ? 'e' : ''); if (TXS[id]) return TXS[id];
  const D = { fantasia: ['#4a3566', '#5d4580', '#b9c2e8', '#c8a8ff'], absurdo: ['#1f6f6a', '#2a8a80', '#d9a514', '#ffd27a'], golosinas: ['#6a3a22', '#82482a', '#e88ab0', '#ffc8d8'], feria: ['#8a2030', '#a82a3a', '#e2a92e', '#ffe08a'] }[k];
  return TXS[id] = lienzo(256, 512, (q, w, h) => { if (espejo) { q.translate(w, 0); q.scale(-1, 1); }
    for (let i = 0; i < 4; i++) { q.fillStyle = mezcla(D[0], D[1], Math.random()); q.fillRect(i * 64, 0, 64, h); q.fillStyle = 'rgba(15,5,20,.55)'; q.fillRect(i * 64, 0, 3, h); for (let j = 0; j < 9; j++) { q.strokeStyle = 'rgba(20,8,10,.2)'; q.lineWidth = 1.6; q.beginPath(); const x = i * 64 + rnd(8, 58); q.moveTo(x, 0); q.bezierCurveTo(x + rnd(-7, 7), h * .3, x + rnd(-7, 7), h * .7, x, h); q.stroke(); } }
    for (let i = 0; i < 1500; i++) { q.fillStyle = `rgba(${ri(2) ? '255,235,215' : '20,10,25'},${rnd(.02, .07)})`; q.fillRect(rnd(0, w), rnd(0, h), 2, rnd(2, 6)); }
    /* herrajes: tres bisagras largas con remate de flor de lis y clavos */
    const met = q.createLinearGradient(0, 0, 0, 20); met.addColorStop(0, mezcla(D[2], '#ffffff', .25)); met.addColorStop(1, mezcla(D[2], '#000000', .45));
    [70, 256, 442].forEach(y => { q.save(); q.translate(0, y); q.fillStyle = met; q.beginPath(); q.moveTo(0, -11); q.lineTo(168, -7); q.quadraticCurveTo(206, -30, 214, 0); q.quadraticCurveTo(206, 30, 168, 7); q.lineTo(0, 11); q.closePath(); q.fill(); q.lineWidth = 2; q.strokeStyle = 'rgba(15,5,15,.6)'; q.stroke(); for (let x = 22; x < 170; x += 36) { q.fillStyle = mezcla(D[2], '#ffffff', .4); q.beginPath(); q.arc(x, 0, 4.5, 0, 7); q.fill(); q.stroke(); } q.restore(); });
    for (let y = 26; y < h; y += 44) [w - 14].forEach(x => { q.fillStyle = mezcla(D[2], '#000000', .2); q.beginPath(); q.arc(x, y, 4, 0, 7); q.fill(); });
    /* el detalle de cada mundo, junto al batiente */
    q.save(); q.translate(w - 62, 160); q.fillStyle = D[3]; q.strokeStyle = 'rgba(15,5,15,.65)'; q.lineWidth = 2.5; q.shadowColor = D[3]; q.shadowBlur = 12;
    if (k === 'fantasia') { q.beginPath(); q.arc(0, 0, 30, .6, 5.7); q.arc(12, 0, 24, 5.4, .9, true); q.closePath(); q.fill(); q.stroke(); estrella2D(q, 20, -34, 9, 4, 4); q.fill(); estrella2D(q, -26, 44, 7, 3, 4); q.fill(); }
    else if (k === 'absurdo') { q.rotate(.5); q.beginPath(); q.arc(0, 0, 30, 0, 7); q.fill(); q.stroke(); q.shadowBlur = 0; q.strokeStyle = '#1a3a40'; q.lineWidth = 5; q.lineCap = 'round'; q.beginPath(); q.moveTo(0, 0); q.lineTo(0, 20); q.moveTo(0, 0); q.lineTo(-14, -8); q.stroke(); }
    else if (k === 'golosinas') { q.beginPath(); q.arc(0, -6, 28, 0, 7); q.fill(); q.stroke(); q.shadowBlur = 0; q.strokeStyle = '#d8487f'; q.lineWidth = 6; q.beginPath(); for (let a = 0; a < 15; a += .1) q.lineTo(Math.cos(a) * a * 1.7, -6 + Math.sin(a) * a * 1.7); q.stroke(); q.fillStyle = '#f0dcc8'; q.fillRect(-4, 22, 8, 44); }
    else { estrella2D(q, 0, 0, 34, 14, 5); q.fill(); q.stroke(); q.shadowBlur = 0; q.fillStyle = '#a82a3a'; q.beginPath(); q.arc(0, 0, 7, 0, 7); q.fill(); }
    q.restore();
    /* aldaba */
    q.strokeStyle = met; q.lineWidth = 7; q.beginPath(); q.arc(w - 40, 300, 17, 0, 7); q.stroke(); q.fillStyle = mezcla(D[2], '#ffffff', .3); q.beginPath(); q.arc(w - 40, 281, 8, 0, 7); q.fill(); });
}
/* arco apuntado de piedra con sus dos hojas; devuelve el grupo (origen en el umbral, mirando a +z) */
function puertaMundo(k, an, al) {
  an = an || 3; al = al || 4.9; const G = new T.Group(), col = TIERRAS[k].col, rec = al * .6, c = 1.25;   /* rec: altura de las jambas; por encima, la ojiva */
  const ojiva = (w, top, r) => { const sh = r || new T.Shape(); sh.moveTo(-w, 0); sh.lineTo(-w, rec); sh.quadraticCurveTo(-w, rec + (top - rec) * .72, 0, top); sh.quadraticCurveTo(w, rec + (top - rec) * .72, w, rec); sh.lineTo(w, 0); sh.lineTo(-w, 0); return sh; };
  const marco = ojiva(an / 2 + .55, al + .62); marco.holes.push(ojiva(an / 2, al, new T.Path()));
  const txm = txPiedra('#8f7868', '#b0957c', '#54443e').clone(); txm.needsUpdate = true; txm.wrapS = txm.wrapT = T.RepeatWrapping; txm.repeat.set(.5, .5);
  const mm = new T.Mesh(new T.ExtrudeGeometry(marco, { depth: .55, bevelEnabled: true, bevelSize: .06, bevelThickness: .06, bevelSegments: 1, curveSegments: 10 }), mat('#d9cbc0', { map: txm, roughness: .9 })); mm.position.z = -.1; mm.castShadow = mm.receiveShadow = true; G.add(mm);
  const fondo = new T.Mesh(new T.ShapeGeometry(ojiva(an / 2, al), 10), new T.MeshBasicMaterial({ color: mezcla(col, '#fff3d6', .55) })); fondo.position.z = -.06; G.add(fondo); G.userData.fondo = fondo;   /* la luz del mundo, que solo se ve al abrirse */
  const hojas = [-1, 1].map(sg => { const piv = new T.Group(); piv.position.set(sg * an / 2, 0, .12); G.add(piv); const sh = new T.Shape(); sh.moveTo(0, 0); sh.lineTo(0, rec); sh.quadraticCurveTo(0, rec + (al - rec) * .72, -sg * an / 2, al); sh.lineTo(-sg * an / 2, 0); sh.lineTo(0, 0);
    const geo = new T.ExtrudeGeometry(sh, { depth: .14, bevelEnabled: false, curveSegments: 10 }), uv = geo.attributes.uv, pp = geo.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, sg > 0 ? 1 + pp.getX(i) / (an / 2) : -pp.getX(i) / (an / 2), pp.getY(i) / al);   /* la bisagra, en u = 0 */
    const h = new T.Mesh(geo, mat('#e6dcd4', { map: txHoja(k, false), roughness: .7 })); if (sg > 0) { h.material.map = txHoja(k, false).clone(); h.material.map.needsUpdate = true; } h.castShadow = true; piv.add(h); return piv; });
  /* clave del arco con una gema del color del mundo */
  const gema = new T.Mesh(new T.OctahedronGeometry(.22), new T.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0, roughness: .15, metalness: .2 })); gema.scale.y = 1.4; gema.position.set(0, al + .32, .56); G.add(gema); prende(kk => { gema.material.emissiveIntensity = kk * 1.6; }, 1.2);
  G.userData.hojas = hojas; G.userData.an = an; G.userData.al = al; G.userData.abre = 0; anim(dt => { const a = G.userData.abre, h0 = hojas[0].rotation.y, dst = a * 1.25; if (Math.abs(-h0 - dst) > .001) { const v = lerp(-h0, dst, Math.min(1, dt * 4)); hojas[0].rotation.y = -v; hojas[1].rotation.y = v; } });
  return G;
}
/* magia de cada mundo: nada de remolinos en un cuadrado; polvo de luz que centellea y se mueve a su manera delante de la puerta */
function magia(G, k, an, al) {
  const N = LITE ? 60 : 150, col = new T.Color(TIERRAS[k].col), c2 = new T.Color({ fantasia: '#e8dcff', absurdo: '#ffe08a', golosinas: '#fff0f4', feria: '#fff3c0' }[k]), pos = new Float32Array(N * 3), cl = new Float32Array(N * 3), S = [];
  for (let i = 0; i < N; i++) S.push({ a: rnd(0, 6.283), r: rnd(.1, 1), v: rnd(.5, 1.4), f: rnd(0, 6.283), y: rnd(0, 1), tw: rnd(3, 9), b: i % 5 === 0 });
  const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(pos, 3)); geo.setAttribute('color', new T.BufferAttribute(cl, 3));
  const pm = new T.PointsMaterial({ map: TEX.chispa, size: .3, vertexColors: true, transparent: true, depthWrite: false, blending: T.AdditiveBlending, sizeAttenuation: true }), pts = new T.Points(geo, pm); pts.position.set(0, 0, .5); pts.frustumCulled = false; G.add(pts);
  const R = an * .46, CY = al * .5, tmp = new T.Color(); G.userData.magia = { fuerza: 1, pm };
  anim((dt, tt) => { const F = G.userData.magia.fuerza, pu = pulso();
    for (let i = 0; i < N; i++) { const s = S[i]; let x, y, z = 0;
      if (k === 'fantasia') { s.a += dt * s.v * .9; s.r -= dt * .09; if (s.r < .04) s.r = 1; x = Math.cos(s.a) * s.r * R; y = CY + Math.sin(s.a) * s.r * R * 1.45; z = (1 - s.r) * .5; }                                   /* polvo de estrellas en espiral hacia el centro */
      else if (k === 'absurdo') { s.y += dt * s.v * .22 * (i % 2 ? 1 : -1); if (s.y > 1) s.y -= 1; if (s.y < 0) s.y += 1; const q = Math.floor(tt * 1.5 + s.f) % 4; x = (Math.round(Math.sin(s.f * 7 + q) * 2) / 2) * R * .9 + Math.sin(tt * 2 + s.f) * .08; y = s.y * al * .92 + .15; z = Math.sin(tt * 3 + s.f) * .2; }   /* motas que suben y bajan a saltos, cada una a su aire */
      else if (k === 'golosinas') { s.a += dt * .8; const br = i % 2 ? 0 : Math.PI, rr2 = s.r; x = Math.cos(s.a * .0 + rr2 * 7 + tt * 1.2 + br) * rr2 * R; y = CY + Math.sin(rr2 * 7 + tt * 1.2 + br) * rr2 * R * 1.45; z = Math.sin(tt * 2 + s.f) * .1; s.r += dt * .05 * s.v; if (s.r > 1) s.r = .05; }   /* dos brazos de piruleta que giran y sueltan azúcar */
      else { s.a += dt * (s.b ? 2.2 : .5) * s.v; if (s.b) { x = Math.cos(s.a) * R * 1.02; y = CY + Math.sin(s.a) * R * 1.5; } else { s.y += dt * s.v * .35; if (s.y > 1) { s.y = 0; s.f = rnd(0, 6.283); } const e = s.y; x = Math.cos(s.f) * e * R; y = CY - .3 + Math.sin(s.f) * e * R * 1.3 - e * e * .6; } }   /* marquesina de luces y chispas de bengala que estallan del centro */
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      const tw = Math.max(0, Math.sin(tt * s.tw + s.f)); const b = (.25 + tw * tw * 1.1 + pu * .3) * F; tmp.copy(i % 3 ? col : c2); cl[i * 3] = tmp.r * b; cl[i * 3 + 1] = tmp.g * b; cl[i * 3 + 2] = tmp.b * b; }
    geo.attributes.position.needsUpdate = true; geo.attributes.color.needsUpdate = true; pm.size = .26 + pu * .06; });
  const halo = brillo(TIERRAS[k].col, an * 1.5, .22); halo.scale.set(an * 1.3, al * 1.2, 1); halo.position.set(0, CY, .3); G.add(halo); G.userData.halo = halo; return pts;
}
/* portón del castillo: dos torres y un gran arco con puerta de roble, en la misma piedra que la muralla y el castillo de detrás */
function porton(g, PZ, banIzq) {
  const G = new T.Group(); G.position.set(0, 0, PZ); g.add(G); const txp = txPiedra('#a58a78', '#c9ad8f', '#6a564e').clone(); txp.needsUpdate = true; txp.wrapS = txp.wrapT = T.RepeatWrapping; txp.repeat.set(4, 6); const pie = mat('#d9cbc0', { map: txp, roughness: .92 }), pie2 = mat('#9d8676', { roughness: .92 });
  [-1, 1].forEach(sg => { const to = cil(2.5, 2.8, 13, pie, 18); to.position.set(sg * 5.6, 6.5, .4); sombra(to); G.add(to); const co = cil(2.9, 2.5, .8, pie2, 18); co.position.set(sg * 5.6, 13.2, .4); G.add(co); for (let i = 0; i < 16; i++) { const an2 = i / 16 * 6.283, mc = caja(.34, .9, .62, pie2); mc.position.set(sg * 5.6 + Math.cos(an2) * 2.62, 12.5, .4 + Math.sin(an2) * 2.62); mc.rotation.y = -an2 + Math.PI / 2; G.add(mc); }   /* matacanes */ for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283, al = caja(1, 1, .7, pie2); al.position.set(sg * 5.6 + Math.cos(a) * 2.5, 14.1, .4 + Math.sin(a) * 2.5); al.rotation.y = -a + Math.PI / 2; al.castShadow = true; G.add(al); }
    ventana(G, sg * 5.6, 9.2, 3.2, .62, 1.5, 1 + (sg > 0 ? .4 : 0)); ventana(G, sg * 5.6, 4.9, 3.26, .55, 1.3, 1.6 + (sg > 0 ? .4 : 0));   /* sin telas en el muro: los estandartes van solo en las farolas */ antorcha(G, sg * 3.3, 4.4, 1.95, 0, .9 + (sg > 0 ? .3 : 0));
    const asta = cil(.08, .08, 5.4, pie2, 6); asta.position.set(sg * 5.6, 16.9, .4); G.add(asta); const pomo = bola(.16, mat('#e2a92e', { metalness: .9, roughness: .25 }), 10); pomo.position.set(sg * 5.6, 19.65, .4); G.add(pomo); bandera(G, sg * 5.6, 18.5, .4, 3.3, sg < 0 ? (banIzq || paisVisitante()) : 'cat'); });   /* a la izquierda, la bandera del visitante; a la derecha, siempre la catalana */
  /* v18.50 · el lienzo del portón tiene el hueco de la puerta de verdad: al abrirse las hojas se ve la plaza interior del castillo (vistaPatio) */
  const an0 = 2.3, al0 = 7.2, rc0 = al0 * .58, lienzoP = new T.Shape(); lienzoP.moveTo(-4.2, 0); lienzoP.lineTo(4.2, 0); lienzoP.lineTo(4.2, 11); lienzoP.lineTo(-4.2, 11); lienzoP.lineTo(-4.2, 0);
  const hu0 = new T.Path(); hu0.moveTo(-an0, 0); hu0.lineTo(-an0, rc0); hu0.quadraticCurveTo(-an0, rc0 + (al0 - rc0) * .72, 0, al0); hu0.quadraticCurveTo(an0, rc0 + (al0 - rc0) * .72, an0, rc0); hu0.lineTo(an0, 0); hu0.lineTo(-an0, 0); lienzoP.holes.push(hu0);
  const txc = txPiedra('#a58a78', '#c9ad8f', '#6a564e').clone(); txc.needsUpdate = true; txc.wrapS = txc.wrapT = T.RepeatWrapping; txc.repeat.set(4 / 8.4, 6 / 11);
  const cu = new T.Mesh(new T.ExtrudeGeometry(lienzoP, { depth: 2.6, bevelEnabled: false, curveSegments: 14 }), mat('#d9cbc0', { map: txc, roughness: .92 })); cu.position.set(0, 0, -1.1); sombra(cu); G.add(cu); for (let i = 0; i < 5; i++) { const al = caja(1, 1, 1, pie2); al.position.set(-3.4 + i * 1.7, 11.5, 1); al.castShadow = true; G.add(al); }
  const pta = puertaGrande(); pta.position.set(0, 0, 1.52); G.add(pta); G.userData.puerta = pta;
  return G;
}
function puertaGrande() {
  const an = 4.6, al = 7.2, G = new T.Group(), rec = al * .58; const ojiva = (w, top, r) => { const sh = r || new T.Shape(); sh.moveTo(-w, 0); sh.lineTo(-w, rec); sh.quadraticCurveTo(-w, rec + (top - rec) * .72, 0, top); sh.quadraticCurveTo(w, rec + (top - rec) * .72, w, rec); sh.lineTo(w, 0); sh.lineTo(-w, 0); return sh; };
  const marco = ojiva(an / 2 + .6, al + .7); marco.holes.push(ojiva(an / 2, al, new T.Path())); const mm = new T.Mesh(new T.ExtrudeGeometry(marco, { depth: .5, bevelEnabled: true, bevelSize: .07, bevelThickness: .07, bevelSegments: 1, curveSegments: 12 }), mat('#8f7868', { roughness: .9 })); mm.position.z = -.2; mm.castShadow = true; G.add(mm);
  const tx = lz(512, 512, (q, w, h) => { for (let i = 0; i < 8; i++) { q.fillStyle = mezcla('#4a2f20', '#6a4630', Math.random()); q.fillRect(i * 64, 0, 64, h); q.fillStyle = 'rgba(10,4,6,.6)'; q.fillRect(i * 64, 0, 4, h); } for (let i = 0; i < 3500; i++) { q.fillStyle = `rgba(${ri(2) ? '255,225,190' : '15,6,8'},${rnd(.02, .08)})`; q.fillRect(rnd(0, w), rnd(0, h), 2, rnd(3, 9)); }
    const met = q.createLinearGradient(0, 0, 0, 30); met.addColorStop(0, '#8a8490'); met.addColorStop(1, '#3a3440'); [70, 200, 330, 460].forEach(y => { q.fillStyle = met; q.fillRect(0, y - 13, w, 26); q.strokeStyle = 'rgba(10,5,10,.7)'; q.lineWidth = 2; q.strokeRect(0, y - 13, w, 26); for (let x = 20; x < w; x += 44) { q.fillStyle = '#b0aab8'; q.beginPath(); q.arc(x, y, 6, 0, 7); q.fill(); q.stroke(); } }); });
  const hojas = [-1, 1].map(sg => { const piv = new T.Group(); piv.position.set(sg * an / 2, 0, 0); G.add(piv); const sh = new T.Shape(); sh.moveTo(0, 0); sh.lineTo(0, rec); sh.quadraticCurveTo(0, rec + (al - rec) * .72, -sg * an / 2, al); sh.lineTo(-sg * an / 2, 0); sh.lineTo(0, 0); const geo = new T.ExtrudeGeometry(sh, { depth: .2, bevelEnabled: false, curveSegments: 12 }), uv = geo.attributes.uv, pp = geo.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, Math.abs(pp.getX(i)) / (an / 2), pp.getY(i) / al); const h = new T.Mesh(geo, mat('#e6dcd4', { map: tx, roughness: .75 })); h.castShadow = true; piv.add(h); return piv; });
  G.userData.abre = 0; anim(dt => { const v = lerp(-hojas[0].rotation.y, G.userData.abre * 1.3, Math.min(1, dt * 1.6)); hojas[0].rotation.y = -v; hojas[1].rotation.y = v; }); G.userData.al = al; G.userData.an = an; return G;
}

function plaza(op) {
  op = op || {};
  nuevaEscena(g => {
    ambiente(g, 'plaza', { hora: op.noche ? 1 : op.hora, radio: op.radio });
    MU.cam.p.set(0, 2.3, 11.2); MU.cam.m.set(0, 4, -14); MU.mira = .14;
    const P = MU.plaza = { arcos: {}, slots: [], portal: null, remolino: null };
    /* fuente con la estatua de bronce de Mevi, coronada */
    const fu = pon(g, 'fuente', 3.2, 0, 0, -2, { tinte: '#c9b8aa' }); fu.userData.tipo = 'fuente'; const est = estatuaMevi(g, 0, 3.02, -2, 1.5); { const bb = new T.Box3().setFromObject(fu); obstaculo(0, -2, Math.max(bb.max.x - bb.min.x, bb.max.z - bb.min.z) / 2 + .15); }
    const lf = new T.PointLight('#7fe0ff', 0, 9); lf.position.set(0, 1.6, -2); g.add(lf); const hf = brillo('#7fe0ff', 5, 0); hf.position.set(0, 1.3, -2); g.add(hf); prende(k => { lf.intensity = k * 1.4; hf.material.opacity = k * .3; }, .2);
    const agua = new T.Group(); g.add(agua); agua.position.set(0, 0, -2);
    for (let i = 0; i < 3; i++) { const ch = brillo('#bfefff', 1.6, .4); ch.position.set(0, 1.4 + i * .5, 0); agua.add(ch); }
    anim((dt, tt) => { if (Math.random() < dt * 14) chispas(new T.Vector3(rnd(-.6, .6), rnd(1.4, 2.6), -2 + rnd(-.6, .6)), 1, ['#bfefff', '#ffffff'], { vel: 1.6, g: 3, vida: .9, tam: .18 }); });
    if (op.radio) return;
    /* la muralla exterior de la fortaleza cierra la plaza: portón del castillo en el centro y dos puertas de mundo en cada lienzo lateral */
    const PZ = -18.5; P.pz = PZ; const PT = porton(g, PZ, op.bandera); P.portal = PT; P.puerta = PT.userData.puerta; PT.userData.sel = 'portal'; P.ph = 12.5;
    if (window.vistaPatio) P.patio = vistaPatio(g, PZ);   /* tras el portón, la plaza interior con el balcón de los reyes */
    const V = [[8, PZ], [13.4, -13], [15.8, -3.6], [17, 9], [17.4, 22]], HM = 7.6, OM = { gro: 1.4, c1: '#a58a78', c2: '#c9ad8f' };
    [-1, 1].forEach(sg => { for (let i = 0; i < V.length - 1; i++) { muralla(g, sg * V[i][0], V[i][1], sg * V[i + 1][0], V[i + 1][1], HM, OM); if (i) { const txt = txPiedra('#a58a78', '#c9ad8f').clone(); txt.needsUpdate = true; txt.wrapS = txt.wrapT = T.RepeatWrapping; txt.repeat.set(1.25, 4.2); const to = caja(3, HM + 2.6, 3, mat('#e6dcd6', { map: txt, roughness: .9 })); to.position.set(sg * V[i][0], (HM + 2.6) / 2, V[i][1]); to.rotation.y = .4 * sg; sombra(to); g.add(to); for (let j = 0; j < 4; j++) { const al = caja(.8, .7, .8, mat('#9d8676', { roughness: .92 })); al.position.set(sg * V[i][0] + [-1, 1, -1, 1][j] * 1.05, HM + 2.95, V[i][1] + [-1, -1, 1, 1][j] * 1.05); al.rotation.y = .4 * sg; g.add(al); } } } });
    /* cerraduras de las Llaves Estelares, sobre el arco del portón */
    for (let i = 0; i < necesarias(); i++) { const x = (i - (necesarias() - 1) / 2) * 1.75, s = new T.Group(); s.position.set(x, 9.3, PZ + 1.9); g.add(s);
      const aro = new T.Mesh(new T.TorusGeometry(.66, .1, 10, 40), mat('#e2a92e', { metalness: .9, roughness: .25 })); s.add(aro); const hueco = new T.Mesh(new T.CircleGeometry(.62, 40), new T.MeshBasicMaterial({ color: '#2a1620' })); hueco.position.z = -.02; s.add(hueco); const est2 = new T.Sprite(new T.SpriteMaterial({ map: TEX.estrella, color: '#7a6470', transparent: true, depthWrite: false })); est2.scale.set(.9, .9, 1); s.add(est2); P.slots.push({ g: s, est: est2, lleno: false }); }
    J.llaves.slice(0, op.pendiente ? J.llaves.length - 1 : J.llaves.length).forEach((k, i) => llenaSlot(i, true));
    anim((dt, tt) => { P.slots.forEach(s => { if (s.llave) { s.llave.rotation.y += dt * 1.5; s.brillo.material.opacity = .5 + pulso() * .5; } }); });
    /* las cuatro puertas: Fantasía y Absurdo a la izquierda, Golosinas y Feria a la derecha */
    ORDEN_T.forEach((k, i) => {
      const sg = i < 2 ? -1 : 1, seg = i === 0 || i === 3 ? 1 : 0, a0 = V[seg], a1 = V[seg + 1], x = sg * (a0[0] + a1[0]) / 2, z = (a0[1] + a1[1]) / 2;
      const A = puertaMundo(k), n = new T.Vector3(sg * (a1[1] - a0[1]), 0, -(a1[0] - a0[0])).normalize(); if (n.dot(new T.Vector3(-x, 0, -4 - z)) < 0) n.negate();
      A.position.set(x + n.x * .72, 0, z + n.z * .72); A.rotation.y = Math.atan2(n.x, n.z); g.add(A); A.userData.sel = k; A.userData.n = n; magia(A, k, A.userData.an, A.userData.al);
      const c = cartelMadera(t('t_' + k), 3.3, TIERRAS[k].col); c.position.set(0, 6.2, .68); c.rotation.x = .1; A.add(c);
      antorcha(A, -2.5, 3.5, .5, 0, .6 + i * .35); antorcha(A, 2.5, 3.5, .5, 0, .8 + i * .35);
      const hecho = J.llaves.includes(k); if (hecho) { A.userData.no = true; A.userData.magia.fuerza = .12; A.userData.halo.material.opacity = .04; const e3 = new T.Sprite(new T.SpriteMaterial({ map: TEX.estrella, color: '#ffd23f', depthWrite: false })); e3.scale.set(1.5, 1.5, 1); e3.position.set(0, 2.6, .7); A.add(e3); A.userData.noF = () => di(t('yaTenemos')); }
      P.arcos[k] = { A }; anim((dt, tt) => { if (hecho) return; const h = P.hover === k; A.userData.magia.fuerza = lerp(A.userData.magia.fuerza, h ? 1.8 : 1, Math.min(1, dt * 5)); A.userData.halo.material.opacity = .16 + pulso() * .08 + (h ? .22 : 0); A.userData.abre = h ? .1 : 0; });
    });
    /* el Maestro de Ceremonias da la bienvenida junto a la fuente */
    const mc = pon(g, 'maestro', 1.9, -3.6, 0, -.6, { ry: .55, mide: true }); anima(mc, 'Idle'); P.maestro = mc; obstaculo(-3.6, -.6, .55);
    /* farolas de aceite con el estandarte del reino: se encienden una tras otra, de la fuente hacia el portón */
    [[-9.3, -4.8], [9.3, -4.8], [-5.3, -10.4], [5.3, -10.4], [-12.2, 4.6], [12.2, 4.6]].forEach(([x, z], i) => { farola(g, x, z, 4.4, .4 + i * .4, null, { luz: i < 2 && !LITE ? 9 : 0 }); obstaculo(x, z, .45); });
    /* árboles en sus alcorques de piedra, al pie de la muralla (los del bosque de WONDERWALK) */
    [[-12.5, -11.3, 'Pine_4', 6.4], [12.5, -11.3, 'Pine_4', 6.4], [-14.9, -2.2, 'CommonTree_5', 5.2], [14.9, -2.2, 'CommonTree_5', 5.2], [-16, 8, 'Pine_2', 6], [16, 8, 'Pine_2', 6]].forEach(([x, z, tp, al]) => { arbol(g, tp, x, z, al); const m = cil(.8, .9, .45, mat('#8f7868', { roughness: .9 }), 12); m.position.set(x, .22, z); m.castShadow = m.receiveShadow = true; g.add(m); obstaculo(x, z, 1); });
    chispasAmbiente(g, LITE ? 40 : (MU.hora > .4 ? 130 : 60), '#ffd58a', 16);   /* luciérnagas */
    if (MU.hora < .9) { bandada(g, 7, 30, -90); bandada(g, 5, 38, -120); }
    ardilla(g, [-9, 9, -8, 3.5]); if (window.paseantes && !op.sinGente) { paseantes(g); guardia(g, PZ); }
    if (window.montsoriu) montsoriu(g, { x: 0, y: -5, z: PZ - 100, s: 1.9, fz: .6, arboles: LITE ? 60 : 150 });   /* tras el portón, el Castillo de las Estrellas en su cerro */
  });
}
function llenaSlot(i, ya) {
  const P = MU.plaza, s = P && P.slots[i]; if (!s || s.lleno) return; s.lleno = true; s.est.visible = false;
  const l = pieza('llave', 1.25, { emis: '#ffb000', emisI: .5 }); l.position.y = -.55; s.g.add(l); s.llave = l; const b = brillo('#ffd23f', 3.2, .8); s.g.add(b); s.brillo = b;
  if (!ya) { chispas(s.g.position.clone(), 40, ['#ffd23f', '#fff6c8', '#ff4fb4'], { vel: 5, tam: .45 }); fx('premio'); }
}
/* el parque arranca o vuelve a la plaza */
function enPlaza(llegada) {
  J.fase = 'plaza'; hud(true); pintaHud(); lugar(t('plaza')); crono(null); barra(null); meta(null); suena('mus', null, { corte: 1.6 }); suena('amb', null); musica('plaza');
  transicion(() => {
    plaza({ pendiente: !!(llegada && llegada.llave) });
    const P = MU.plaza, todas = J.llaves.length >= necesarias();
    MU.cam.p.set(0, 6, 20); MU.cp.copy(MU.cam.p); viaje(new T.Vector3(0, 2.3, 11.2), new T.Vector3(0, 4, -14), 2.2, () => {
      if (llegada === 'inicio') {
        const n = J.nombres.filter(Boolean), saludo = n.length ? t('holaN', n.slice(0, 4).join(', ')) : t('hola');
        meviGesto('saluda'); anima(P.maestro, 'Gentlemans_Bow', true); VOZ.alt = t('hola');   /* el saludo con nombres usa la grabación del saludo general */
        secuencia([[saludo, 0], [t('objetivo', necesarias()), 'invita'], [t('comoElegir'), 'senala']], eligeTierra);
      } else if (llegada && llegada.llave) {
        const i = J.llaves.length - 1; ceremonia(i, () => {
          meviGesto('feliz'); anima(P.maestro, 'Cheer', true);
          if (todas) { abrePortal(); } else { di(t('llaveDe', nomLlave(llegada.llave), J.llaves.length, necesarias())); setTimeout(() => { di(t('otraTierra')); eligeTierra(); }, 2600); }
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
  MU.cam.m.set(0, 4.6, -16);
}
function abrePortal() {
  const P = MU.plaza; viaje(new T.Vector3(0, 3.2, -5.8), new T.Vector3(0, 4.2, P.pz), 2.8, () => {}, new T.Vector3(MU.cp.x >= 0 ? 10 : -10, 3.6, -3));   /* v18.59 · rodea la fuente por un lado (antes la cruzaba por dentro) */
  if (window.cargaExtra) cargaExtra(['rey', 'reina']); if (P.patio) P.patio.userData.enciende();
  P.puerta.userData.abre = .16; fx('victoria'); confeti(new T.Vector3(0, 6, P.pz + 5), LITE ? 40 : 110); di(t('portalAbre')); meviGesto('senala');
  const hz = brillo('#fff0c0', 9, 0); hz.position.set(0, 3.4, P.pz + 2.4); MU.g.add(hz); let k = 0; anim((dt, tt) => { k = Math.min(1, k + dt / 2.5); hz.material.opacity = k * (.16 + Math.sin(tt * 3) * .04); if (Math.random() < dt * 20 * k) chispas(new T.Vector3(rnd(-.4, .4), rnd(.3, 6.5), P.pz + 2.2), 1, ['#fff0c0', '#ffd23f', '#ffffff'], { vel: 1.2, g: -.4, vida: 1.1, tam: .22 }); });
  ORDEN_T.forEach(k2 => { P.arcos[k2].A.userData.no = true; });
  setTimeout(() => selecciona([P.portal], 1.4, () => { fx('nivel'); di(t('portalCruza')); P.puerta.userData.abre = 1; viaje(new T.Vector3(0, 2.4, P.pz + 4), new T.Vector3(0, 3.6, P.pz - 14), 1.5, () => viaje(new T.Vector3(0, 2.4, P.pz - 5), new T.Vector3(0, 4.4, P.pz - 16), 1.6, () => {})); setTimeout(() => final(), 2900);   /* se cruza el portón andando y se entra en la plaza interior */ }, id => { P.hoverPortal = !!id; P.puerta.userData.abre = id ? .3 : .16; }), BOT ? 300 : 2500);
}

/* ======================= TIERRAS Y PUERTAS ======================= */
function entraTierra(k) {
  J.tierra = k; const T0 = TIERRAS[k]; let s = baraja(T0.salas).slice(0, salasPorTierra()); J.cola = s; J.muro = 0;
  if (J.modo === 2) { const sp = s.filter(x => x !== 'montana'); J.patoEn[k] = sp.length ? sp[ri(sp.length)] : null; }
  const A = MU.plaza.arcos[k].A, p = A.position.clone(), n = A.userData.n; A.userData.abre = 1; MU.plaza.hover = null; fx('sorpresa', .5); viaje(p.clone().addScaledVector(n, 3.4).setY(2.1), p.clone().addScaledVector(n, -6).setY(2.2), 1.5, () => {});   /* las hojas se abren y se entra andando */
  setTimeout(() => tunel(k), 1150);   /* túnel, muros de puertas y puertas: en meviland-mundo.js */
}

/* ======================= SALAS (motor común) ======================= */
const SALAS = {};
function mkCtx(g) {
  const ctx = { g, modo: J.modo, vel: 1 + J.modo * .2, prog: 0, meta: 10, objs: [], h: null, aciertos: 0, fallos: 0,
    diana(o, tag) { tag = tag || 'diana'; if (o.userData[tag] === undefined) o.userData[tag] = true; ctx.objs.push(o); return o; },
    quita(o) { const i = ctx.objs.indexOf(o); if (i >= 0) ctx.objs.splice(i, 1); },
    bien(pos, n, pr) { J.combo++; ctx.aciertos++; const v = Math.round((n || 50) * (1 + Math.min(J.combo, 10) * .1)); suma(v); ctx.prog = Math.min(ctx.meta, ctx.prog + (pr === undefined ? 1 : pr)); ctx.barra();
      if (pos) { const [x, y] = aPantalla(pos); flota('+' + v, x, y); chispas(pos, 18, [TIERRAS[J.tierra].col, '#ffffff', '#ffd23f'], { vel: 3.5, tam: .3 }); }
      marimba(72 + [0, 2, 4, 7, 9, 12][Math.min(5, J.combo % 6)], .16); if (J.combo % 5 === 0) { grito(trd(tA('bien')[ri(tA('bien').length)]), 900); meviGesto('feliz'); } },
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
function siguiente() { meta(null); barra(null); J.sala = null; if (J.cola.length) muro(); else { J.llaves.push(J.tierra); enPlaza({ llave: J.tierra }); } }
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
  const g = ctx.g; ctx.meta = [5, 6, 7][ctx.modo]; MU.cam.p.set(0, 1.7, 3.6); MU.cam.m.set(0, 1.8, -6); MEVI.visible = false;   /* aquí Mevi está en los espejos: la acompañante se aparta para no tapar ninguno */
  const cort = mat('#8a1c4a', { roughness: .8 }); [-7, 7].forEach(x => { for (let i = 0; i < 6; i++) { const c = cil(.35, .35, 7, cort, 12); c.position.set(x + (x < 0 ? i * .5 : -i * .5), 3.5, -5 + i * .2); g.add(c); } });
  const lam = new T.Group(); lam.position.set(0, 5.4, -2); g.add(lam); for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283, b = brillo('#ffe9b0', .9, .9); b.position.set(Math.cos(a) * 1.4, 0, Math.sin(a) * 1.4); lam.add(b); } const lluz = new T.PointLight('#ffe0b0', 1.4, 14); lam.add(lluz); anim(dt => { lam.rotation.y += dt * .2; });
  /* cada Mevi vive DENTRO de su espejo: se dibuja detrás del cristal y solo donde está el óvalo del vidrio (plantilla), así el marco la recorta */
  const txDentro = lz(128, 256, (q, w, h) => { const gr = q.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#3a2a86'); gr.addColorStop(.55, '#6a3aa8'); gr.addColorStop(.8, '#3a1c66'); gr.addColorStop(1, '#1c0d3a'); q.fillStyle = gr; q.fillRect(0, 0, w, h); for (let i = 0; i < 26; i++) { const x = rnd(0, w), y = rnd(0, h * .7), r = rnd(4, 16), g2 = q.createRadialGradient(x, y, 0, x, y, r); g2.addColorStop(0, 'rgba(255,220,170,.5)'); g2.addColorStop(1, 'rgba(255,220,170,0)'); q.fillStyle = g2; q.fillRect(x - r, y - r, r * 2, r * 2); } });
  const txReflejo = lz(128, 256, (q, w, h) => { const gr = q.createLinearGradient(0, 0, w, h); gr.addColorStop(0, 'rgba(255,255,255,.34)'); gr.addColorStop(.3, 'rgba(255,255,255,.04)'); gr.addColorStop(.55, 'rgba(255,255,255,.14)'); gr.addColorStop(.62, 'rgba(255,255,255,.02)'); gr.addColorStop(1, 'rgba(180,200,255,.16)'); q.fillStyle = gr; q.fillRect(0, 0, w, h); });
  const ovalo = new T.CircleGeometry(1, 48), VZ = .03, VY = 1.87, VRX = .665, VRY = 1.0;
  const E = [-3.9, -1.3, 1.3, 3.9].map((x, i) => { const gr = new T.Group(); gr.position.set(x, 0, -2.6); gr.rotation.y = -x * .07; g.add(gr); const es = pieza('espejo', 3.4); gr.add(es); gr.userData.esp = i; ctx.diana(gr, 'esp'); es.traverse(o => { if (o.isMesh) o.renderOrder = -10; });
    const ref = i + 1, st = { stencilWrite: true, stencilRef: ref, stencilFunc: T.EqualStencilFunc, stencilFail: T.KeepStencilOp, stencilZFail: T.KeepStencilOp, stencilZPass: T.KeepStencilOp };
    const pone = (geo, m, orden, sx, sy, y, z) => { const o = new T.Mesh(geo, m); o.scale.set(sx, sy, 1); o.position.set(0, y, z); o.renderOrder = orden; o.castShadow = o.receiveShadow = false; gr.add(o); return o; };
    pone(ovalo, new T.MeshBasicMaterial({ colorWrite: false, depthWrite: false, stencilWrite: true, stencilRef: ref, stencilFunc: T.AlwaysStencilFunc, stencilZPass: T.ReplaceStencilOp }), -9, VRX, VRY, VY, VZ);   /* 1 · el óvalo marca la plantilla */
    pone(new T.PlaneGeometry(1, 1), new T.MeshBasicMaterial(Object.assign({ colorWrite: false, depthFunc: T.AlwaysDepth }, st)), -8, 9, 9, VY, -3.2);                                                    /* 2 · se abre hueco de profundidad tras el cristal */
    const fondo = pone(new T.PlaneGeometry(1, 1), new T.MeshBasicMaterial(Object.assign({ map: txDentro }, st)), -7, 4.4, 5.4, VY + .1, -3.1);                                                            /* 3 · el fondo del reflejo */
    const mv = pieza('mevi', 1.5); mv.position.set(0, .66, -.75); mv.rotation.y = 0; gr.add(mv); if (mv.userData.mx) MU.mx.push(mv.userData.mx); let cara = null; try { cara = MEVICARA(T, mv, '../packs/comun/mevi/caras.png?v=18.37'); } catch (e) {}
    const viste = () => mv.traverse(o => { if (o.isMesh) { o.renderOrder = -6; o.castShadow = false; (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => Object.assign(m, st)); } }); viste(); setTimeout(viste, 600);   /* 4 · la Mevi, solo dentro del óvalo */
    pone(ovalo, new T.MeshBasicMaterial(Object.assign({ colorWrite: false, depthFunc: T.AlwaysDepth }, st)), -5, VRX, VRY, VY, VZ);                                                                        /* 5 · se devuelve la profundidad del cristal */
    const vid = pone(ovalo, new T.MeshBasicMaterial({ map: txReflejo, color: '#ffffff', transparent: true, opacity: .9, depthWrite: false }), 2, VRX, VRY, VY, VZ + .012);                                 /* 6 · el brillo del vidrio, por delante */
    return { gr, mv, cara, vid, fondo, mal: 0 }; });
  anim((dt, tt) => E.forEach((e, i) => { if (e.cara) e.cara.parpa(tt + i * 1.7); e.mv.position.y = .66 + Math.sin(tt * 2 + i) * .03; if (e.mal > 0) { e.mal -= dt; e.gr.position.x += Math.sin(tt * 60) * .02; e.vid.material.color.set(e.mal > 0 ? '#ff7070' : '#ffffff'); e.fondo.material.color.set(e.mal > 0 ? '#ff9a9a' : '#ffffff'); } }));
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
  const g = ctx.g; ctx.meta = [8, 10, 12][ctx.modo]; MU.cam.p.set(0, 2.2, 2.4); MU.cam.m.set(0, 2.1, -6); ESC.fog = new T.Fog('#3f7fb4', 12, 40);
  const pared = mat('#2f6fa6', { roughness: .5 }); const fondo = caja(12, 7, .3, mat('#1d4a80', { roughness: .55 })); const piso = caja(12, .2, 10, mat('#3f84b4', { roughness: .3 })); piso.position.set(0, .01, -1.5); piso.receiveShadow = true; g.add(piso); g.children.forEach(o => { if (o.isLight) o.intensity *= .45; }); ESC.environment = null; fondo.position.set(0, 3.5, -6.2); g.add(fondo); [-6, 6].forEach(x => { const p = caja(.3, 7, 10, pared); p.position.set(x, 3.5, -1.5); g.add(p); }); const techo = caja(12, .3, 10, pared); techo.position.set(0, 7, -1.5); g.add(techo);
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
    const pk = premios[ri(premios.length - (J.modo === 2 ? 1 : 0))]; const pr = pieza(pk, .7, pk === 'caramelo' ? { tinte: PAL[ri(6)], gris: true } : {}); pr.position.y = .14; gr.add(pr);
    const hielo = new T.Mesh(new T.BoxGeometry(1.05, 1.05, 1.05), new T.MeshStandardMaterial({ color: '#cfefff', transparent: true, opacity: .4, roughness: .05, metalness: .05, emissive: '#3aa8ff', emissiveIntensity: .22, depthWrite: false })); hielo.position.y = .52; gr.add(hielo); const filo = new T.LineSegments(new T.EdgesGeometry(hielo.geometry), new T.LineBasicMaterial({ color: '#eaffff', transparent: true, opacity: .9 })); hielo.add(filo);   /* hielo más transparente y con las aristas marcadas: se ve lo que hay dentro */
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
  const g = ctx.g; ctx.meta = [10, 12, 14][ctx.modo]; MU.cam.p.set(0, 3.9, 5.6); MU.cam.m.set(0, 4.1, -6); MEVI.ax = -.66; const FAC = ctx.modo === 0;   /* v18.59 · Mevi a la izquierda: a la derecha tapaba al Señor Brócoli */
  const cuerpo = caja(8.4, 9.2, 2.4, mat('#f6f9ff', { roughness: .3, metalness: .05 })); cuerpo.position.set(0, 4.75, -7.4);   /* v18.59 · apoyada en sus patas, con la puerta a media altura (antes la puerta se clavaba en el suelo) */
  [-3.6, 3.6].forEach(x => { const pata = cil(.32, .4, .15, mat('#3a3f4a', { roughness: .6 }), 16); pata.position.set(x, .075, -6.6); g.add(pata); }); sombra(cuerpo); g.add(cuerpo);
  const panel = caja(8.4, 1.1, .3, mat('#c9d6ff', { roughness: .4 })); panel.position.set(0, 8.55, -6.1); g.add(panel); for (let i = 0; i < 5; i++) { const bt = cil(.22, .22, .2, mat(['#ff5fc8', '#ffd23f', '#3b8cff', '#35d46a', '#ff8a3c'][i], { emissive: ['#ff5fc8', '#ffd23f', '#3b8cff', '#35d46a', '#ff8a3c'][i], emissiveIntensity: .4 }), 16); bt.rotation.x = Math.PI / 2; bt.position.set(-2.8 + i * 1.4, 8.55, -5.9); g.add(bt); }
  const C0 = new T.Vector3(0, 4.05, -6); const aro = new T.Mesh(new T.TorusGeometry(2.9, .38, 16, 64), mat('#d8e0ea', { metalness: .85, roughness: .2 })); aro.position.copy(C0); aro.position.z += .1; g.add(aro);
  const fondoT = new T.Mesh(new T.CircleGeometry(2.9, 48), new T.MeshStandardMaterial({ color: '#1a1446', roughness: .6, metalness: .3, map: TEX.remolino })); fondoT.position.copy(C0); fondoT.position.z -= .9; g.add(fondoT);
  const cristal = new T.Mesh(new T.CircleGeometry(2.75, 48), new T.MeshStandardMaterial({ color: '#bfe8ff', transparent: true, opacity: .16, roughness: .02, metalness: .6, depthWrite: false })); cristal.position.copy(C0); cristal.position.z += .25; g.add(cristal);
  const br = pon(g, 'brocoli', 1.5, 4.7, 0, -3.6, { ry: -.5 }); anima(br, 'Joyful');
  const nC = [3, 4, 4][ctx.modo]; let obj = ri(nC), aciertosColor = 0, giro = 1, ang = 0;
  const S = []; for (let i = 0; i < 9 + ctx.modo * 2; i++) { const c = i % nC; const s = pieza('calcetin', FAC ? 1.28 : .8, { tinte: PAL[c], gris: true }); s.userData.c = c; s.userData.so = true; if (FAC) { const zt = new T.Mesh(new T.SphereGeometry(.72, 10, 8), new T.MeshBasicMaterial({ visible: false })); s.add(zt); }   /* v18.59 · en FÁCIL: calcetines un 60 % mayores y zona de toque más ancha que el dibujo */ g.add(s); ctx.diana(s, 'so'); S.push({ s, a: rnd(0, 6.28), r: FAC ? rnd(.9, 1.9) : rnd(.8, 2.1), w: rnd(.7, 1.3), z: rnd(-.6, .1), sp: new T.Vector3(rnd(-3, 3), rnd(-3, 3), rnd(-3, 3)), f: rnd(0, 6) }); }
  const burbujas = []; for (let i = 0; i < 14; i++) { const b = brillo('#dff6ff', rnd(.2, .5), .5); g.add(b); burbujas.push({ b, a: rnd(0, 6.28), r: rnd(0, 2.5), v: rnd(.5, 1.2) }); }
  const muestra = () => { meta([{ col: PAL[obj] }]); barra(t('ahora', tA('cols')[obj]) + '  ·  ' + Math.min(ctx.prog, ctx.meta) + ' / ' + ctx.meta, ctx.prog / ctx.meta); };
  ctx.barra = muestra;
  return {
    empieza() { muestra(); di(t('ahora', tA('cols')[obj])); },
    muta() { giro = -1.3; },
    paso(dt, tt) { ang += dt * giro * ctx.vel * 1.1 * (FAC ? .5 : 1); S.forEach(o => { const a = o.a + ang * o.w; const caida = Math.max(0, Math.sin(a)) * .35; o.s.position.set(C0.x + Math.cos(a) * o.r, C0.y + Math.sin(a) * o.r - caida, C0.z + o.z); o.s.rotation.x += o.sp.x * dt; o.s.rotation.y += o.sp.y * dt; o.s.rotation.z += o.sp.z * dt; });
      burbujas.forEach(b => { b.r += dt * b.v * .3; if (b.r > 2.7) b.r = 0; b.b.position.set(C0.x + Math.cos(b.a + ang) * b.r, C0.y + Math.sin(b.a + ang) * b.r, C0.z + .15); }); },
    toca(h) { const s = h && deQuien(h.object, 'so'); if (!s) return; const p = s.getWorldPosition(new T.Vector3());
      if (s.userData.c === obj) { fx('burbuja'); ctx.bien(p, 50); const o = S.find(x => x.s === s); o.r = FAC ? rnd(.9, 1.9) : rnd(.8, 2.1); o.a = rnd(0, 6.28); s.scale.setScalar(.01); let k = 0; anim(dt => { if (k >= 1) return; k = Math.min(1, k + dt * 2); s.scale.setScalar(k); });
        if (++aciertosColor >= 3 && ctx.prog < ctx.meta) { aciertosColor = 0; let n = obj; while (n === obj) n = ri(nC); obj = n; fx('parpadeo'); di(t('ahora', tA('cols')[obj])); } muestra(); }
      else { ctx.mal(p); } },
    previa(dt) { this.paso(dt || .016); },
    bot() { const o = S.find(o => o.s.userData.c === obj && o.s.scale.x > .9); return o ? o.s : null; }, botT: .5,
    fin() { meta(null); }
  };
} };

/* ---------- ABSURDO · La Sopa de Letras ---------- */
SALAS.sopa = { dur: [60, 55, 50], crea(ctx) {
  const g = ctx.g; MU.cam.p.set(0, 7.6, -.4); MU.cam.m.set(0, 1.6, -5.2);   /* v18.59 · más desde arriba: así las letras de detrás no se montan sobre las de delante */   /* desde arriba: se ven todas las letras, sin que el borde de la olla tape las de delante */
  const pal = baraja(tA('palabras')).filter(w => w.length <= 5).slice(0, [2, 3, 3][ctx.modo]); ctx.meta = pal.reduce((a, w) => a + w.length, 0);
  const ol = cil(3.4, 3, 2.2, mat('#e2434f', { metalness: .15, roughness: .3, side: T.DoubleSide }), 48, true); ol.position.set(0, 1.1, -5); sombra(ol); g.add(ol);
  const fondoO = cil(3, 3, .1, mat('#9aa2ad', { metalness: .9, roughness: .3 }), 48); fondoO.position.set(0, .05, -5); g.add(fondoO);
  const borde = new T.Mesh(new T.TorusGeometry(3.4, .13, 10, 64), mat('#ffffff', { metalness: .2, roughness: .25 })); borde.rotation.x = Math.PI / 2; borde.position.set(0, 2.2, -5); g.add(borde);
  [-1, 1].forEach(s => { const asa = new T.Mesh(new T.TorusGeometry(.5, .1, 8, 20, Math.PI), mat('#2a2a2a')); asa.position.set(s * 3.6, 1.8, -5); asa.rotation.y = Math.PI / 2; asa.rotation.z = s > 0 ? -Math.PI / 2 : Math.PI / 2; g.add(asa); });
  const txS = lz(256, 256, (q, w) => { q.fillStyle = '#ff9a3c'; q.fillRect(0, 0, w, w); for (let i = 0; i < 60; i++) { q.fillStyle = `rgba(255,${200 + ri(55)},${100 + ri(80)},.5)`; q.beginPath(); q.arc(rnd(0, w), rnd(0, w), rnd(4, 18), 0, 7); q.fill(); } q.fillStyle = 'rgba(60,160,60,.8)'; for (let i = 0; i < 30; i++) q.fillRect(rnd(0, w), rnd(0, w), 6, 6); });
  const caldo = new T.Mesh(new T.CircleGeometry(3.32, 48), mat('#ffffff', { map: txS, roughness: .25 })); caldo.rotation.x = -Math.PI / 2; caldo.position.set(0, 1.85, -5); g.add(caldo);
  const fuego = brillo('#ff7a1c', 7, .6); fuego.position.set(0, -.2, -4.4); g.add(fuego); const lf = new T.PointLight('#ff8a3c', 1.4, 8); lf.position.set(0, .3, -3.6); g.add(lf);
  const chef = pon(g, 'chef', 2.6, 2.6, 1.2, -8.4, { ry: -.25 }); const cuch = new T.Group(); cuch.position.set(0, 1.85, -5); g.add(cuch); const palo = cil(.07, .07, 4, mat('#c98a4a'), 8); palo.position.set(1.4, 1.6, 0); palo.rotation.z = .5; cuch.add(palo); const cazo = bola(.35, mat('#c98a4a'), 12); cazo.scale.y = .4; cazo.position.set(.45, -.1, 0); cuch.add(cazo);
  anim((dt, tt) => { ondula(chef, tt, .1, 2.2); chef.position.y = 1.2 + Math.sin(tt * 1.4) * .25; cuch.rotation.y = tt * 1.2 * ctx.vel; caldo.rotation.z = -tt * .3; if (Math.random() < dt * 5) chispas(new T.Vector3(rnd(-2.5, 2.5), 2, -5 + rnd(-2, 2)), 1, ['#ffd9b0'], { tex: TEX.humo, vel: .4, g: -.6, vida: 1.6, tam: .5 }); });
  const txL = {}; const texLetra = (c, especial) => txL[c + especial] || (txL[c + especial] = lz(128, 128, (q, w) => { q.fillStyle = especial ? '#fff3a8' : '#fff8ec'; q.beginPath(); q.arc(w / 2, w / 2, w / 2 - 4, 0, 7); q.fill(); q.lineWidth = 6; q.strokeStyle = '#c96a00'; q.stroke(); q.font = '78px LG'; q.textAlign = 'center'; q.textBaseline = 'middle'; q.fillStyle = '#7a2a00'; q.fillText(c, w / 2, w / 2 + 5); }));
  let wi = 0, li = 0; const L = [], SL = [], WR = [.3, -.2, .14];   /* v18.59 · cada letra en su hueco de uno de los tres anillos: giran juntas y nunca se montan (antes se amontonaban y contaba la de al lado) */
  const quiere = () => pal[wi] ? pal[wi][li] : null;
  const pinta = () => { meta(pal[wi] ? [...pal[wi]].map((c, i) => ({ txt: c, ok: i < li })) : null); ctx.barra(); };
  const ABC = 'ABCDEFGHIJLMNOPRSTUV';
  const nueva = (c) => { const m = new T.Mesh(new T.CircleGeometry(.35, 32), new T.MeshStandardMaterial({ map: texLetra(c, false), roughness: .5, transparent: true })); m.userData.letra = c; g.add(m); ctx.diana(m, 'letra'); const sl = SL.pop() || { r: rnd(.8, 2.6), a: rnd(0, 6.28), n: 1 }; const o = { m, a: sl.a, r: sl.r, n: sl.n, f: rnd(0, 6), salto: 0 }; L.push(o); return o; };
  const reparte = () => { const w = pal[wi]; if (!w) return; L.forEach(o => { g.remove(o.m); ctx.quita(o.m); }); L.length = 0; SL.length = 0; [[.85, 4], [1.82, 9], [2.74, 13]].forEach(([r, n], k) => { for (let i = 0; i < n; i++) SL.push({ r, n: k, a: i / n * 6.283 + k * .4 }); }); for (let i = SL.length - 1; i > 0; i--) { const j = ri(i + 1); [SL[i], SL[j]] = [SL[j], SL[i]]; } [...new Set(w)].forEach(c => { nueva(c); nueva(c); }); for (let i = 0; i < 6 + ctx.modo * 2; i++) { let c = ABC[ri(ABC.length)]; if (w.includes(c)) c = ABC[ri(ABC.length)]; nueva(c); } };
  reparte();
  return {
    empieza() { pinta(); }, previa(dt) { this.paso(dt || .016, 0); },
    paso(dt, tt) { const q = quiere(); L.forEach(o => { o.a += WR[o.n] * dt * ctx.vel; o.salto = Math.max(0, o.salto - dt); const p = new T.Vector3(Math.cos(o.a) * o.r, 1.95 + Math.sin(tt * 2 + o.f) * .05 + Math.sin(o.salto * Math.PI) * .8, -5 + Math.sin(o.a) * o.r * .85); o.m.position.copy(p); o.m.lookAt(MU.cp); if (Math.random() < dt * .08) o.salto = 1; }); },
    toca(h) { const m = h && deQuien(h.object, 'letra'); if (!m) return; const p = m.position.clone();
      if (m.userData.letra === quiere()) { li++; fx('pop'); ctx.bien(p, 60); g.remove(m); ctx.quita(m); L.splice(L.findIndex(o => o.m === m), 1); if (li >= pal[wi].length) { wi++; li = 0; fx('nivel'); grito(pal[wi - 1], 1100); anim(() => {}); reparte(); } pinta(); }
      else { ctx.mal(p); const o = L.find(o => o.m === m); if (o) o.salto = 1; } },
    bot() { const q = quiere(); const o = L.find(o => o.m.userData.letra === q); return o ? o.m : null; }, botT: .4,
    fin() { meta(null); }
  };
} };

/* ---------- GOLOSINAS · El Campo de Caramelos (melodía) ---------- */
SALAS.caramelos = { dur: [80, 75, 70], crea(ctx) {
  const g = ctx.g; ctx.meta = [3, 4, 5][ctx.modo]; MU.cam.p.set(0, 2.5, 3); MU.cam.m.set(0, 1.3, -5); MEVI.ax = .9;   /* v18.59 · Mevi en la orilla: delante tapaba el pedestal morado */
  const gu = pon(g, 'gusano', 2.6, .62, 0, -5.4);   /* v18.59 · asoma en el hueco entre el caramelo verde y el azul (detrás del verde casi no se veía) */ anim((dt, tt) => { ondula(gu, tt, .14, 2.6); });
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
  const g = ctx.g; ctx.meta = [14, 18, 22][ctx.modo]; MU.libre = true; MU.mira = 0; MEVI.modo = 'camara';   /* Mevi va sentada en la vagoneta */
  const pts = [[0, 1.6, 10], [11, 3, 7], [17, 8, -4], [12, 13, -16], [0, 9, -22], [-10, 4, -24], [-18, 9, -12], [-16, 5, 0], [-8, 2.2, 8]].map(p => new T.Vector3(...p));
  const cv = new T.CatmullRomCurve3(pts, true, 'catmullrom', .5), N = 260, up = new T.Vector3(0, 1, 0);
  const lado = (u, s) => { const p = cv.getPointAt(u), tg = cv.getTangentAt(u), b = new T.Vector3().crossVectors(tg, up).normalize(); return p.add(b.multiplyScalar(s)); };
  const rail = mat('#e8e8f0', { metalness: .8, roughness: .25 }); [-.55, .55].forEach(s => { const ps = []; for (let i = 0; i <= N; i++) ps.push(lado(i / N % 1, s)); g.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(ps, true), 600, .06, 6, true), rail)); });
  const trav = new T.InstancedMesh(new T.BoxGeometry(1.4, .08, .22), mat('#7a4a2a'), N), dm = new T.Object3D(); for (let i = 0; i < N; i++) { const u = i / N, p = cv.getPointAt(u); dm.position.copy(p); dm.position.y -= .06; dm.lookAt(p.clone().add(cv.getTangentAt(u))); dm.updateMatrix(); trav.setMatrixAt(i, dm.matrix); } g.add(trav);
  const sop = mat('#ff4fb4', { metalness: .4, roughness: .4 }); for (let i = 0; i < N; i += 10) { const p = cv.getPointAt(i / N); if (p.y < 1.2) continue; const c = cil(.08, .1, p.y, sop, 6); c.position.set(p.x, p.y / 2, p.z); g.add(c); }
  /* bombillas a lo largo de la vía */
  for (let i = 0; i < N; i += 6) { const p = lado(i / N, i % 12 ? .8 : -.8); const b = brillo(['#ffd23f', '#ff4fb4', '#56d7ff'][i % 3], .5, .9); b.position.copy(p).add(new T.Vector3(0, .2, 0)); g.add(b); }
  const va = pieza('vagoneta', 1.6, { ancho: true }); g.add(va);
  /* el morro de la vagoneta, a la vista: vamos sentados dentro, con Mevi al lado (ya no flota junto a la vía) */
  const morro = new T.Group(); g.add(morro); const rojoM = mat('#c8283c', { roughness: .35, metalness: .2, emissive: '#6a1220', emissiveIntensity: .7 }), oroM = mat('#ffd23f', { metalness: .85, roughness: .25, emissive: '#7a5600', emissiveIntensity: .6 });
  const frM = caja(4.6, .66, .14, rojoM); frM.position.set(0, -1.12, -2.02); morro.add(frM); const riM = cil(.055, .055, 4.6, oroM, 10); riM.rotation.z = Math.PI / 2; riM.position.set(0, -.79, -2.02); morro.add(riM);
  const emM = new T.Mesh(new T.PlaneGeometry(.3, .3), new T.MeshBasicMaterial({ map: TEX.estrella, color: '#ffd23f', transparent: true, depthWrite: false })); emM.position.set(0, -.98, -1.94); morro.add(emM);
  const luzM = []; for (let i = 0; i < 11; i++) { const mm = new T.MeshStandardMaterial({ color: '#6a5a3a', emissive: ['#ffd27a', '#ff8fd0', '#8fd8ff'][i % 3], emissiveIntensity: 2 }), bo = bola(.045, mm, 8); bo.position.set(-2 + i * .4, -.72, -2.02); morro.add(bo); luzM.push(mm); }
  anim((dt, tt) => { morro.position.copy(CAM.position); morro.quaternion.copy(CAM.quaternion); luzM.forEach((mm, i) => { mm.emissiveIntensity = (i + Math.floor(tt * 5)) % 3 ? .7 : 2.6; }); });
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
    const regalo = new T.Group(); const rc = PAL[i]; const cj = caja(.75, .75, .75, mat(rc, { roughness: .35 })); regalo.add(cj); const c1 = caja(.78, .78, .14, mat('#ffffff')); regalo.add(c1); const c2 = caja(.14, .78, .78, mat('#ffffff')); regalo.add(c2); const lazo = new T.Mesh(new T.TorusGeometry(.16, .05, 6, 16), mat('#ffffff')); lazo.position.y = .42; regalo.add(lazo); regalo.position.y = 2.62; regalo.scale.setScalar(.01); gr.add(regalo);
    gr.userData.cab = i; ctx.diana(gr, 'cab'); H.push({ gr, cab, regalo, f: i * 1.05, cubierto: 0 }); }
  const llave = pieza('llave', 1.55, { emis: '#ff9a00', emisI: .55 }); const lb = brillo('#ffd23f', 3.4, .5), lb2 = brillo('#fff3b0', 5.6, .3); llave.add(lb); llave.add(lb2); llave.position.y = 2.6; lb.position.z = lb2.position.z = -.45;
  const med = new T.Mesh(new T.CircleGeometry(1.02, 40), new T.MeshBasicMaterial({ color: '#2a1450', transparent: true, opacity: .82 })); med.position.set(0, .0, -.22); llave.add(med); const aroM = new T.Mesh(new T.RingGeometry(1.02, 1.12, 40), new T.MeshBasicMaterial({ color: '#ffd23f' })); aroM.position.copy(med.position); llave.add(aroM);   /* medallón oscuro detrás: la llave dorada se recorta contra cualquier fondo */   /* grande, con doble resplandor y latiendo: que se vea bien dónde está */
  let w = .25, fase = 'espera', tf = 0, quien = 0, dir = 1;
  const ronda = () => { quien = ri(6); H[quien].gr.add(llave); llave.visible = true; H.forEach(h => { h.cubierto = 0; }); fase = 'mira'; tf = 2.8 / Math.max(1, ctx.vel * .9); di(t('mira'), 1800); anima(mc, 'Talk', true); w = .3; };
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
      H.forEach(h => { h.gr.position.y = Math.sin(tt * 2.4 + h.f) * .25; if (h.tapar) h.cubierto = Math.min(1, h.cubierto + dt * 3); else h.cubierto = Math.max(0, h.cubierto - dt * 3); h.regalo.scale.setScalar(Math.max(.01, suave(h.cubierto) * 1.3)); h.regalo.rotation.y += dt; });
      llave.rotation.y = -(C.rotation.y + (llave.parent ? llave.parent.rotation.y : 0)) + Math.sin(tt * 2.6) * .55; const late = Math.sin(tt * 6); llave.scale.setScalar(fase === 'mira' || fase === 'revela' ? 1.08 + late * .12 : 1); lb2.material.opacity = .3 + late * .14; lb.material.opacity = .5 + late * .14;
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
  hud(false); barra(null); meta(null); crono(null); MU.sel = null; if (tipo === 'desfile') musica(null); else musica('final');
  transicion(() => {
    const monta = g0 => {
    const g = MU.g; MU.cam.p.set(0, 2.2, 9.5); MU.cam.m.set(0, tipo === 'desfile' ? 3.6 : 3, -4); MU.mira = .08; MU.cp.copy(MU.cam.p); MU.cm.copy(MU.cam.m);
    if (tipo === 'bola') fuegos(g, { x: 16, y0: 9, y1: 17, z0: -30, z1: -14 }); else fuegos(g, { x: 24, y0: 17, y1: 31, z0: -42, z1: -22 });   /* pirotecnia de verdad: la de WONDERWALK */
    const guard = [['brocoli', 1.6], ['buho', 1.4], ['maestro', 1.75], ['gusano', 1.3], ['chef', 1.8]];
    if (tipo === 'desfile') { desfile(g);
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
    }; if (tipo === 'bola') { plaza({ noche: true, radio: 15 }); monta(); } else patioCastillo({ f: monta, publico: tipo !== 'desfile' });
    meviGesto('salta'); fx('victoria');
    if (tipo === 'desfile') { /* el desfile dura lo que su música (el tema de circo) y termina con su último golpe */
      const pm = suena('mus', 'desfile', { vol: .6, entra: .05 }); let td = 0; anim(dt => { td += dt; const a = pm && pm.a, acaba = a && !a.paused && a.duration ? a.currentTime > a.duration - .2 : a && a.ended ? true : td > 50; if ((acaba || td > 62) && J.fase === 'final') panelFin(tipo); }); if (BOT) setTimeout(() => { if (J.fase === 'final') panelFin(tipo); }, 1500);
      secuencia([[t('des1'), 'senala'], [t('des2'), 'feliz'], [t('des3'), 'saluda'], [t('fin_desfile'), 'feliz']], () => {}); return; }
    setTimeout(() => { if (J.fase !== 'final') return; di(t('fin_' + tipo)); meviGesto('feliz'); }, 1200);
    setTimeout(() => { if (J.fase !== 'final') return; panelFin(tipo); }, BOT ? 1500 : tipo === 'bola' ? 15000 : 11500);
  }, '#ffe9a8');
}
function panelFin(tipo) {
  suena('mus', 'menu', { bucle: true, vol: .42, entra: 1.5 }); J.fase = 'fin'; $('fTit').textContent = t('f_' + tipo); $('fTxt').textContent = t('fd_' + tipo);
  const seg = Math.round((performance.now() - J.t0) / 1000), filas = [[t('dPuntos'), J.pts], [t('dLlaves'), J.llaves.length + ' / ' + necesarias()], [t('dSalas'), J.salasOk + ' / ' + J.salasN]];
  if (J.modo === 2) filas.push([t('dPatos'), J.patos + ' / 4']); filas.push([t('dTiempo'), Math.floor(seg / 60) + ':' + String(seg % 60).padStart(2, '0')]);
  $('fDl').innerHTML = filas.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join(''); abre('pFin'); manda({ t: 'pts', v: J.pts });
  if (BOT) window.__MEVILAND_FIN = { tipo, pts: J.pts, llaves: J.llaves.slice(), salas: J.salasOk + '/' + J.salasN, patos: J.patos };
}

/* ======================= MENÚ, PAUSA Y BUCLE ======================= */
/* el nombre de la tierra con su «de» en cada idioma (del Absurdo, de l'Absurd) */
function nomLlave(k) { if (LG === 'en') return t0('t_' + k); if (k === 'absurdo') return LG === 'ca' ? "de l'Absurd" : 'del Absurdo'; return 'de ' + t0('t_' + k); }   /* va dentro de otra frase: en el idioma de las voces */
function abre(id) { document.querySelectorAll('.pan').forEach(p => p.classList.toggle('on', p.id === id)); $('pie').classList.toggle('off', id !== 'pIni'); }
function textosUI() {
  document.documentElement.lang = UL; cargaVoz(LG); pideTextos(); $('tLema').textContent = t('lema'); $('tPausa').textContent = t('pausa'); $('bSigue').textContent = '▶  ' + t('sigue'); $('bSalir').textContent = '🏠 ' + t('salir'); $('tSeguro').textContent = t('seguro'); $('tGira').textContent = t('gira'); $('bOtra').textContent = t('otra'); $('bMenu').textContent = t('terminar'); $('bVoz').title = t('voz');
  const niv = $('niv'); niv.innerHTML = ''; [0, 1, 2].forEach(m => { const d = document.createElement('div'); d.className = 'modo m' + m + (m === J.modo ? ' sel' : ''); d.tabIndex = 0; d.dataset.m = m; d.innerHTML = `<b>${t('m' + m)}</b><em>${t('m' + m + 'e')}</em><span>${t('m' + m + 'd')}</span><div class="ll">${'<i></i>'.repeat(m + 2)}</div>`; d.querySelectorAll('.ll i').forEach(i => { i.style.backgroundImage = `url(${TEX.llave})`; }); d.onclick = () => empieza(m); d.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); empieza(m); } }; niv.appendChild(d); });
  document.querySelectorAll('#lenguas button').forEach(b => b.classList.toggle('sel', b.dataset.lang === LG));
  $('pie').textContent = 'MEVILAND · MSGAME v18.60 2026 ' + trd(({ es: 'es un proyecto hecho con', en: 'is a project made with', ca: 'és un projecte fet amb' })[LG]) + ' 𑣲 by mediaservi.com';
  $('bVoz').textContent = VOZ.on ? '🔊' : '🔇'; $('bIdioma').textContent = '🌐 ' + UL.toUpperCase(); $('bIdioma').title = t('idioma'); $('tIdioma').textContent = '🌐 ' + t('idioma'); $('bIdiVuelve').textContent = t('volver');
}
function menu() {
  J.fase = 'menu'; hud(false); barra(null); meta(null); musica(null); suena('amb', null); suena('mus', 'menu', { bucle: true, vol: .42 }); textosUI();   /* en los menús, el tema de metales */ $('cargaBox').style.display = 'none'; $('niv').style.display = 'flex'; $('lenguas').style.display = 'none'; $('bIdioma').style.display = ''; abre('pIni');
  plaza({}); MU.libre = true; let a = 0; MU.upd = dt => { a += dt * .06; CAM.position.set(Math.sin(a) * 15, 4.5 + Math.sin(a * 2) * .6, -6 + Math.cos(a) * 17); CAM.lookAt(0, 3, -10); };
  MEVI.visible = true; MEVI.modo = 'fija'; MEVI.fijo.set(3.4, 0, 2.2); MEVI.salto = true; meviAnim('saluda', true);
  if (BOT && !/[?&]ver=/.test(location.search)) setTimeout(() => empieza(+((location.search.match(/[?&]bm=(\d)/) || [])[1] || J.modo)), 300);
}
function empieza(m) {
  au(); J.modo = m; J.llaves = []; J.pts = 0; J.combo = 0; J.patos = 0; J.salasOk = 0; J.salasN = 0; J.patoEn = {}; J.t0 = performance.now(); J.sala = null;
  manda({ t: 'modo', v: ['facil', 'normal', 'dificil'][m] }); manda({ t: 'pts', v: 0 }); fx('listo'); abre(null); $('pie').classList.add('off'); $('bIdioma').style.display = 'none'; J.fase = 'perga'; pergamino(() => { MU.libre = false; enPlaza('inicio'); });   /* primero, el pergamino de bienvenida */
}
const JUEGO = window.JUEGO = {
  pausa() { if (J.fase === 'menu' || J.fase === 'fin' || J.fase === 'carga') return; PAUSA = !PAUSA; seguroSalir(false); abre(PAUSA ? 'pPausa' : null); $('bIdioma').style.display = PAUSA ? '' : 'none'; Object.values(PISTAS).forEach(p => { if (p) PAUSA ? p.a.pause() : p.a.play().catch(() => {}); }); if (PAUSA) { try { speechSynthesis.cancel(); } catch (e) {} if (VOZ.el) VOZ.el.pause(); AU.ac && AU.ac.suspend(); } else AU.ac && AU.ac.resume(); },
  pausaExt(v) { PAUSA_EXT = v; Object.values(PISTAS).forEach(p => { if (p) v ? p.a.pause() : p.a.play().catch(() => {}); }); if (v && VOZ.el) VOZ.el.pause(); if (AU.ac) v ? AU.ac.suspend() : AU.ac.resume(); },
  jugadores(m) { J.nombres = Array.isArray(m.v) ? m.v.map(String) : []; },
  atras() { this.pausa(); }
};
let PAUSA = false, PAUSA_EXT = false, PAUSA_GIRA = false;
/* v18.59 · móvil o tableta en vertical: aviso de girarlo, con el juego parado hasta que se gire */
function revisaGira() { let v = false; try { v = matchMedia('(pointer:coarse)').matches && innerHeight > innerWidth * 1.05 && J.fase !== 'ver'; } catch (e) {} $('gira').classList.toggle('on', v); if (v === PAUSA_GIRA) return; PAUSA_GIRA = v;
  if (!PAUSA && !PAUSA_EXT) { Object.values(PISTAS).forEach(p => { if (p) v ? p.a.pause() : p.a.play().catch(() => {}); }); if (v && VOZ.el) VOZ.el.pause(); if (AU.ac) v ? AU.ac.suspend() : AU.ac.resume(); } }
addEventListener('resize', revisaGira); addEventListener('orientationchange', () => setTimeout(revisaGira, 250)); setTimeout(revisaGira, 0);
$('bPausa').onclick = () => JUEGO.pausa(); $('bSigue').onclick = () => JUEGO.pausa();
const seguroSalir = v => { $('salirSeg').classList.toggle('on', v); $('bSalir').style.display = v ? 'none' : ''; if (v) $('bSalNo').focus(); };   /* v18.59 · Salir pregunta antes de perder la partida */
$('bSalir').onclick = () => seguroSalir(true); $('bSalNo').onclick = () => seguroSalir(false);
$('bSalSi').onclick = () => { seguroSalir(false); PAUSA = false; AU.ac && AU.ac.resume(); if (EMB) manda(J.pts > 0 ? { t: 'fin', v: J.pts } : { t: 'sal' }); else menu(); };
$('bOtra').onclick = () => { abre('pIni'); textosUI(); empieza(J.modo); };
$('bMenu').onclick = () => { if (EMB) manda({ t: 'fin', v: J.pts }); else menu(); };
$('bVoz').onclick = () => { VOZ.on = !VOZ.on; try { localStorage.setItem('MEVILAND_VOZ', VOZ.on ? '1' : '0'); } catch (e) {} if (!VOZ.on) callaVoz(); $('bVoz').textContent = VOZ.on ? '🔊' : '🔇'; };
/* v18.50 · cambio de idioma (botones del juego suelto o, dentro de MSGAME, el de la consola): pantalla en UL, voces en LG */
function ponIdioma(l) { UL = l; LG = window.MSIDIOMA ? MSIDIOMA.base(l) : l; TRD = UL !== LG && window.MSIDIOMA ? MSIDIOMA.traductor(LG, UL) : null; window.LG_MANO = true; if (J.fase === 'menu') setTimeout(menu, 0); textosUI(); }
/* con traducción automática: se piden de una vez todos los textos y las frases de Mevi; al llegar, se repintan los menús */
function pideTextos() {
  if (!TRD) return; const v = []; Object.entries(TX[LG] || {}).forEach(([k, x]) => { if (k === 'pgTxt') x.split('|').forEach(y => v.push(y.replace(/<\/?b>/g, ''))); else if (typeof x === 'string') v.push(x); else if (Array.isArray(x) && k !== 'palabras') x.forEach(y => { if (typeof y === 'string') v.push(y); }); });   /* las palabras de la Sopa de Letras se quedan en el idioma de las voces: sus letras son el juego */
  if (TRD.nPedidos === v.length) return; TRD.nPedidos = v.length; TRD.pide(v);   /* (los textos de cada parte del juego se cargan por separado: se vuelve a pedir si hay más) */
  if (TRD.pedido) return; TRD.pedido = true;
  fetch('../packs/meviland/voz/' + LG + '-textos.json?v=18.59').then(r => r.ok ? r.json() : []).then(a => TRD.pide(a)).catch(() => {});
  let tq = 0; TRD.listo(() => { clearTimeout(tq); tq = setTimeout(() => { textosUI(); refrescaVivos(); }, 400); });
}
/* v18.51 · selector de idioma (🌐, junto a la voz y la pausa): todos los idiomas de la consola. Dentro de MSGAME cambia también la consola */
let idiVuelta = 'pIni';
function abreIdiomas() {
  const on = document.querySelector('.pan.on'); idiVuelta = on && on.id !== 'pIdioma' ? on.id : (J.fase === 'menu' ? 'pIni' : 'pPausa');
  const L = (window.MSIDIOMA && MSIDIOMA.LISTA) || [['es', 'Español'], ['en', 'English'], ['ca', 'Català']], box = $('idiomas'); box.innerHTML = '';
  L.forEach(([c, n]) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'b' + (c === UL ? ' sel' : ''); b.textContent = n; b.lang = c; b.onclick = () => eligeIdioma(c); box.appendChild(b);
    const bc = c === 'es' ? 'es' : c === 'en' ? 'en' : c === 'ca' ? 'cat' : BAN_IDIOMA[c]; if (bc) { const cv = document.createElement('canvas'); cv.width = 48; cv.height = 32; cv.className = 'ban'; cv.setAttribute('aria-hidden', 'true'); b.prepend(cv); const pinta = () => { try { const im = txBandera(bc).image; if (im && im.width) cv.getContext('2d').drawImage(im, 0, 0, 48, 32); } catch (e) {} }; pinta(); setTimeout(pinta, 400); setTimeout(pinta, 1500); } });   /* v18.59 · cada idioma con su bandera, para quien aún no lee */
  abre('pIdioma');
}
function eligeIdioma(l) {
  abre(idiVuelta); if (l === UL) return;
  if (EMB) manda({ t: 'idioma', v: l }); else { try { localStorage.setItem('VJSHOW_LANG', l); } catch (e) {} }
  ponIdioma(l);
}
$('bIdioma').onclick = () => { if ($('pIdioma').classList.contains('on')) abre(idiVuelta); else abreIdiomas(); }; $('bIdiVuelve').onclick = () => abre(idiVuelta);
document.querySelectorAll('#lenguas button').forEach(b => b.onclick = () => { try { localStorage.setItem('VJSHOW_LANG', b.dataset.lang); } catch (e) {} ponIdioma(b.dataset.lang); });
/* dentro de MSGAME el idioma se cambia en la consola (también desde AJUSTES con el juego abierto): se sigue al momento */
if (window.MSIDIOMA) MSIDIOMA.sigue(l => { if (l !== UL) ponIdioma(l); });
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
  if (MU.viaje) { const V = MU.viaje; V.t += dt; const k = suave(Math.min(1, V.t / V.dur)); if (V.via) { const u = 1 - k; MU.cp.set(0, 0, 0).addScaledVector(V.p0, u * u).addScaledVector(V.via, 2 * u * k).addScaledVector(V.p1, k * k); } else MU.cp.lerpVectors(V.p0, V.p1, k); MU.cm.lerpVectors(V.m0, V.m1, k); if (V.t >= V.dur) { MU.viaje = null; MU.cam.p.copy(V.p1); MU.cam.m.copy(V.m1); V.f && V.f(); } }
  else { MU.cp.lerp(MU.cam.p, 1 - Math.pow(.02, dt)); MU.cm.lerp(MU.cam.m, 1 - Math.pow(.02, dt)); }
  RIG.position.set(0, 0, 0); CAM.position.copy(MU.cp); CAM.position.y += Math.sin(MU.tt * 1.3) * .025;
  const dir = MU.cm.clone().sub(MU.cp), dist = dir.length(); dir.normalize(); const rt = new T.Vector3().crossVectors(dir, new T.Vector3(0, 1, 0)).normalize(), upv = new T.Vector3().crossVectors(rt, dir);
  const objetivo = MU.cm.clone().addScaledVector(rt, (PTR.x - .5) * MU.mira * dist).addScaledVector(upv, (.5 - PTR.y) * MU.mira * dist * .6);
  MU.mirP = MU.mirP ? MU.mirP.lerp(objetivo, 1 - Math.pow(.004, dt)) : objetivo; CAM.lookAt(MU.mirP);
}
let tPrev = performance.now();
function bucle(now) {
  requestAnimationFrame(bucle); const dt = Math.min(BOT || RAPIDO ? .2 : .05, (now - tPrev) / 1000); tPrev = now;
  pasaMusica(); menuPtr(); pasaPergamino(dt);
  if (!PAUSA && !PAUSA_EXT && !PAUSA_GIRA) { MU.tt += dt; pasaSel(dt); if (MU.upd) MU.upd(dt); camara(dt); pasaLuz(dt); for (let i = 0; i < MU.anim.length; i++) MU.anim[i](dt, MU.tt); MU.mx.forEach(m => m.update(dt)); pasaPies(); pasaPart(dt); pasaMevi(dt); }
  const re = $('reti'), jugando = J.fase !== 'carga'; re.classList.toggle('on', jugando); if (jugando) { re.style.left = (PTR.x * W) + 'px'; re.style.top = (PTR.y * H) + 'px'; }
  PTR.toca = false; R.render(ESC, CAM);
}

/* carátula del cartucho (juegos/meviland.webp): ?portada=1, en vertical */
function portada() {
  abre(null); J.fase = 'ver'; ST.style.aspectRatio = 'auto'; ST.style.width = '100vw'; ST.style.height = '100vh'; tam(); ['hud', 'pts', 'esq', 'pie', 'reti', 'sub'].forEach(i => { $(i).style.display = 'none'; });
  /* la gran plaza de la muralla al atardecer: arriba, el portón y el castillo (ahí va el título); abajo, Mevi con los guardianes */
  J.modo = 2; J.llaves = []; plaza({ hora: .3, sinGente: true, bandera: 'reino' }); MU.luz.forEach(L => { L.t = 1; }); MEVI.visible = false; MU.libre = true; MU.upd = null;
  const g = MU.g, P = MU.plaza; P.maestro.visible = false;
  const mv = pon(g, 'mevi', 2.25, 0, 0, 5.7, { ry: 0 }); anima(mv, 'saluda'); try { const c = MEVICARA(T, mv, '../packs/comun/mevi/caras.png?v=18.37'); c.ojos(2); c.boca(2); } catch (e) {}
  const br = pon(g, 'brocoli', 1.45, -1.55, 0, 5.3, { ry: .4, mide: true }); anima(br, 'Wave'); const bu = pon(g, 'buho', 1.3, 1.8, 0, 5, { ry: -.4, mide: true }); anima(bu, 'Cheer');
  const mc = pon(g, 'maestro', 1.9, -2.85, 0, 3.9, { ry: .35, mide: true }); anima(mc, 'Cheer'); const gu = pon(g, 'gusano', 1.6, 3, 0, 2.6, { ry: -.3, mide: true });
  CAM.fov = 50; CAM.position.set(0, 1.9, 12.3); CAM.lookAt(0, 3.25, -10); CAM.updateProjectionMatrix();
  for (let i = 0; i < 5; i++) chispas(new T.Vector3(rnd(-12, 12), rnd(20, 30), rnd(-60, -40)), 50, [['#ff4fb4', '#ffd23f'], ['#56d7ff', '#ffffff'], ['#ffd27a', '#ffffff']][i % 3], { vel: rnd(5, 7), g: .3, vida: 30, tam: .9 });
  MU.upd = dt => { ondula(gu, MU.tt, .14, 3); };
  window.__PORTADA = true;
}

