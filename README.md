# MSGAME
Sistema de juegos sencillos y clásicos jugables en una pantalla o en salas inmersivas usando el móvil como mando de juego.

**MSGAME · mediaservi GAME SYSTEM** es la consola de juegos de fiesta de [mediaservi.com](https://mediaservi.com) y uno de los apartados de AVHUB.

🔗 **Juega ahora:** [msgame.mediaservi.com](https://msgame.mediaservi.com)

**Versión actual: v12.8**

## Cómo se juega

- La home es un videoclub en 3D de los 80: dos estanterías llenas de juegos, y en la mesa el monitor, la consola, una lámpara de lava, un walkman y un cubo de Rubik. Elige una caja y el monitor muestra el menú del juego: JUGAR empieza la partida y EXPULSAR saca el cartucho.
- **Tu móvil es el mando:**
  - pulsa MANDO en la consola y escanea el código con el móvil, sin instalar nada;
  - juegan hasta 4 personas, cada una con su nombre y su color;
  - sin móvil se juega con el ratón, el teclado, la pantalla táctil o el mando de la tele.
- **AJUSTES:**
  - formato de salida y cada pantalla en su monitor;
  - sala de juegos: el juego en la frontal, récords y turnos con QR y publicidad en las laterales, tele retro en la trasera;
  - mezcla de bordes, corrección, mapeo y fuente de audio.
- **Sin internet:** desde la ayuda se prepara el «modo feria» o se descarga una copia offline.

## Juegos

- **PALOTERAPIA:** corta y golpea al ritmo con sable láser, espada o bate; 5 temáticas.
- **PUNTERÍA:** galería de tiro con el móvil como pistola y 6 escenarios.
- **BEAT RACER:** carrera al ritmo, a pie (RUNNER) o en todoterreno (DIRTY).
- **GRAFFER:** pinta las formas sin salirte y cuidado con la policía.
- **LA FORTUNA:** ruleta de premios para eventos, con existencias reales.
- **BOLERA:** bolos con física real y pantallas con visuales.
- **PATOPESCA:** la pesca de patitos de la feria.
- **ENCESTA:** recreativa 3D con BALLHOP y BASKET.
- **SHATEKI:** galería de tiro japonesa en 3D con rifle de corchos; solo te llevas lo que cae del estante.
- **WONDERWALK** *(en desarrollo)*: paseo hasta el castillo buscando los objetos de tu lista.
- **KRAZYGOLF** *(en desarrollo)*: minigolf clásico en 3D o en modo KRAZY.

## Cambios de la versión actual (v12.8)

- **Mando del móvil rediseñado:**
  - cabecera con el logo de MSGAME, un botón de **inicio** en el centro (deja el juego y vuelve a la sala) y el jugador;
  - pie en morado con CONTROL, JUEGOS y AJUSTES;
  - la **cruceta siempre en el centro** en todos los juegos, con los botones de cada juego en su sitio y con su color;
  - **JUEGOS** enseña los 22 cartuchos con su pegatina (la portada de cada uno, que manda la pantalla y el móvil guarda); al tocar uno, Mevi lo mete en la consola;
  - **CALIBRAR** solo en AJUSTES.
- **Vincular desde el teléfono rojo:** en cuanto el móvil se enlaza, la pantalla vuelve sola a la sala para elegir juego.

### v12.7

- **Ranura de la consola a la medida del cartucho:** la boca era casi el doble de ancha y de honda que el cartucho; ahora le deja solo la holgura justa, con su luz también ajustada.

### v12.6

- **Mevi habla con ondas:** el texto va en un bocadillo cerrado, sin pico; entre la cara de Mevi y el bocadillo, por encima de los dos, tres ondas magenta semitransparentes parpadean mientras habla, como las de un megáfono.

### v12.5

- **Brazos de Mevi proporcionados al meter el cartucho:** las manos quedan a la distancia de un brazo de verdad (antes, al doble), los hombros salen más abajo y, al final, la mano se retira hacia el hombro en lugar de subir estirando el brazo.

### v12.4

- **Mevi habla en los juegos:** donde había un círculo con la M, ahora sale la cabeza de Mevi (melena, ojos de estrella y mofletes) que entra con un saltito, mueve la cabeza y abre y cierra la boca mientras habla, con el texto en un bocadillo que le sale de la boca. En KRAZYGOLF (el narrador) y en WONDERWALK (las explicaciones). Dibujo común en `lib/mevi2d.js`.

### v12.3

- **Calibrar cuando tú quieras:** el mando ya no se calibra solo al conectarse. En la esquina de arriba del móvil hay siempre un botón **CALIBRAR**: al pulsarlo, apunta al centro de la pantalla y mantenlo quieto. Al conectar, la pantalla solo lo recuerda con un aviso.
- **Lámpara de lava con física:** la cera se calienta abajo y sube despacio, se enfría arriba y baja; las gotas chocan, se aplastan al tocarse como si se fundieran, rozan el cristal y derivan de lado.

### v12.2

- **KRAZYGOLF con sonido de verdad:** música dinámica (entrada, juego, tensión en el último hoyo o cuando el hoyo se complica, y final en la tarjeta), golpe, barrido del palo, bola dentro del hoyo, rebotes según la pelota, harina o arena, fanfarria en el hoyo en uno y pájaros en CLÁSICO y SIMULATOR. Todo con el motor común `lib/msaudio.js`.
- **KRAZYGOLF más vivo:** palo de golf que se ve apuntar, coger impulso según la fuerza y golpear; polvo al golpear, harina o arena al entrar y confeti al embocar.
- **Modelos de packs:** en CLÁSICO, molino de viento con las aspas girando, banderines y un castillo (Kenney Minigolf Kit); en KRAZY, muebles y objetos de casa (KayKit Furniture Bits). Ambos CC0.
- **Ajustes de MSGAME:** fuera el interruptor «Apagar las demás capas al jugar», que venía de VJSHOW y ya no tenía sentido: al jugar queda siempre solo el fondo del juego.

### v12.1

- **Mando del móvil estable, se coja como se coja.** El puntero ya no da golpetazos de lado a lado. Antes solo contaba el borde superior del móvil: con el móvil de pie (como una cámara o una espada) ese borde mira al techo y el giro quedaba indefinido, así que el puntero saltaba. Ahora se mezclan el borde superior y la espalda del móvil, cada uno con más peso cuanto más horizontal está: funciona igual tumbado como un mando a distancia, de pie o en medio.
- **Calibrado más fiable:** al no temblar el giro, el calibrado automático encuentra el móvil quieto enseguida y toma el centro bueno.
- **Sin tirones:** un dato suelto que salta lejos y vuelve en el siguiente (ruido del sensor o de la red) se descarta; si los datos se retrasan, el puntero se queda donde estaba en vez de saltar al centro de la pantalla.
- Biblioteca común de efectos y motor común de sonido (`lib/msaudio.js`) preparados para la música dinámica de los juegos.

### v12.0

- **MSGAME es una app independiente.** Hasta la v11.8 su `index.html` se generaba a partir del de VJSHOW; desde esta versión el código fuente de MSGAME vive en este repositorio y se desarrolla aquí. Los juegos, sus imágenes, sonidos, paquetes y borradores están solo en MSGAME; VJSHOW ya no los lleva y su botón de juegos abre esta web.
- **WONDERWALK, borrador 3:**
  - **Mevi es la única caminante** (ya no se elige personaje): melena negra, ojos de estrella, mono morado, cinturón con la «M», guantes y botas lima, y la varita en la mano derecha. Camina, mueve los brazos, levanta la varita al disparar y salta en la fiesta.
  - **Rayo mágico:** al tocar, de la punta de la varita sale un rayo hasta el punto exacto donde se apuntó, con destello, anillo de impacto y chispas; Mevi gira la cabeza y el brazo hacia ese lado y la escena se ilumina un instante.
  - **El castillo es una réplica del de Cardona**, modelada por código a partir de las fotos de Josep: baluartes en talud con la puerta al final del sendero, segundo recinto con la rampa en diagonal y la escalinata, torre de la Minyona (tronco de cono con su antepecho y la torrecilla de chapitel), el cuerpo de la entrada con el gran arco de celosía, el bloque alto del parador con sus ventanas, la colegiata de Sant Vicenç con el campanario de tejado a cuatro aguas, tejados de teja, cipreses, pinos y la bandera. Sillares con tono variable, ventanas que se encienden al anochecer y focos cálidos que lo iluminan de noche. Al llegar, la cámara levanta la vista para enseñarlo.
  - **Gráficos y sombras:** árboles, pinos, arbustos, hierba, helechos, flores, setas y rocas de verdad (modelos de Quaternius, CC0); sombras más finas y largas (mapa de 2048), suelo con grano, río con reflejos que corren, sol bajo con resplandor, nubes, luciérnagas, charcos de luz bajo las farolas y cielo en tres franjas. Los escondites de piedra y arbusto usan también esos modelos.
  - **Calidad automática:** si el equipo no llega a unos 22 fotogramas por segundo, el juego baja solo un escalón (menos sombras, menos distancia de plantas y menos resolución). Se puede fijar con `?cal=0`, `1` o `2`.
  - **Sonido:** banda sonora («Journey Preparation») durante el paseo, sonido mágico al disparar la varita mezclado con un impacto de rayo, y sonidos propios al apartar la zarza, espantar al ladrón y en la fiesta. Respeta el silencio de MSGAME.
  - **Título con la letra de la carátula** (Berkshire Swash), blanca y con volumen.
  - Créditos y licencias de los recursos en `packs/wonderwalk/CREDITOS.md`.

### v11.8

- **KRAZYGOLF · modo KRAZY en 3D**, a la altura del clásico: cada hoyo es un rincón de casa modelado entero. La encimera (mantel de cuadros, terrones de azúcar, tostadora con sus tostadas, harina derramada, taza, aceitera, frutero, salero), el despacho (vade, libros, teclado con teclas, ventilador de sobremesa que gira, monitor, flexo, lápices) y el salón (alfombra con flecos, piezas de construcción, puf, robot aspirador, sofá, lámpara y planta). Las pelotas absurdas también son 3D: huevo, cubito de hielo translúcido, albóndiga, saltarina que bota y pelota de playa.
- **KRAZYGOLF · modo nuevo SIMULATOR**: simulador de golf como los de sala, visto desde detrás de la bola. Campo propio e inventado, **AVHUB Golf Links & Park**, de 9 hoyos con trazado de ida y vuelta: sale de la casa club por el parque (arbolado, lagos, un río con puente), llega a la costa (dunas, búnkeres de olla, hierba alta, viento, faro y mar) y vuelve a la casa club. Recorrido corto de 3 hoyos o completo de 9 (par 36).
  - Terreno con relieve, calles segadas a franjas, greens, antegreens, rough, arena y agua; cada suelo frena y penaliza distinto. Nueve palos (del driver al putter) con recomendación automática, viento, efecto, bote y rodadura, agua y fuera de límites con penalización, putt dado a menos de un metro.
  - Pantalla de simulador: panel de datos (distancia al hoyo, palo, alcance, lie, viento), plano del hoyo, marca de caída, traza del vuelo y datos del golpe (vuelo, total, velocidad de bola, altura, desvío).
  - **Logo de AVHUB** en la casa club, las banderas, las vallas de detrás de cada green, el cartel de cada salida, la caseta y el faro.
- **WONDERWALK en 3D**: el paseo ya no es un dibujo plano. Sendero con relieve, árboles, flores, farolas, río con puente de madera y castillo; luz que pasa del atardecer a la noche con estrellas, luna y la punta de la varita iluminando; bosque con niebla; sombras. Piedras, arbustos, troncos, zarzas, ladrones y caminantes son modelos 3D. La lista, la mochila y las fichas siguen encima, más grandes en móvil vertical.
- **Funciones de móvil en los dos juegos**: ya son juegos de MSGAME como los demás (turnos, marcador final y récords).
  - WONDERWALK: el móvil es la varita; se apunta y se pulsa «Tocar».
  - KRAZYGOLF (KRAZY y CLÁSICO): se mantiene el botón, se apunta hacia donde se quiere tirar (más lejos, más fuerte) y se suelta.
  - SIMULATOR: el móvil es el palo. Se apunta, se mantiene el botón, se balancea y se suelta; el giro de muñeca da efecto y ◀ ▶ cambian de palo. Sin móvil: mantener pulsado y soltar en la marca, o deslizar hacia arriba.
- Dejan de llevar el rótulo de «borrador».

### v11.7

- **Continuidad del equipo**: el menú del juego ya no usa una tele, una consola y un cartucho dibujados. Se muestra sobre **los mismos de la sala 3D** (la cámara solo se acerca), con la lámpara de lava, la caja del juego en la mesa y el cartucho metido en la consola. En móvil se ve la tele en primer plano para que la letra no quede pequeña.
- **Menú nuevo dentro de la pantalla**: la carátula original a la izquierda; a la derecha el logo de MSGAME y las opciones en lista; y al pie **dos filas fijas de botones de servicio**: JUGAR, EXPULSAR, RESTABLECER, VOLVER / JUGADORES, RÉCORDS, MÚSICA, SONIDOS (los dos últimos con piloto de encendido).
- **La caja se abre en primer plano**: Mevi la sostiene delante, centrada y de frente, con una mano a cada lado, simétricas; la abre como un libro y saca el cartucho. Manos, caja y cartucho se pintan en una capa por delante de la sala, así que los brazos no pueden mezclarse con la tele ni con nada de la mesa. El cartucho se mete en la consola en un plano de frente.
- **La caja queda en la mesa de una forma distinta cada vez** (cerrada, entreabierta, de par en par, de lado…), siempre en el hueco libre.
- **Al expulsar, el cartucho y la caja se evaporan en píxeles** con los colores de su carátula, de arriba abajo.
- **SHATEKI con premios de verdad**, como LA FORTUNA: en la ficha del juego se escriben los premios y cuántos hay de cada uno (0 = sin límite); cada unidad sale en las gradas como una **caja dorada con lazo** y quien la tira del estante se la lleva (se descuenta de las existencias y queda apuntado a su nombre). En pantalla: lista de premios, entregados y QR para unirse con el móvil. Varios jugadores juegan por turnos de 7 corchos.
  - Las cajas de los productos de AVHUB van todas en **gris antracita**; los dulces de colores, las latas y los gatos son relleno.
  - Miras a tamaño real: alza con muesca y punto de mira en cuña del mismo metal.
- Si el aparato va lento y se salta planos de la secuencia, el final es siempre el mismo: cartucho en la ranura y caja en la mesa.
- El logo de MSGAME se pide con una dirección nueva para que nadie siga viendo el antiguo desde la copia guardada.

### v11.6

- **Juego nuevo: SHATEKI · galería de tiro de Osaka**, con su cartucho y su carátula. Caseta de feria japonesa en 3D: gradas rojas llenas de premios (cajas con las marcas de mediaservi, dulces, latas, gatos de la suerte y los tres dorados del altarcillo), rótulos de caligrafía y bombillas.
  - Se dispara con un **rifle de corchos visto por sus miras, sin cruceta**: el alza es una pletina con muesca y el punto de mira se ve dentro. El pulso tiembla un poco y, si el punto de mira se va a un lado de la muesca, el corcho se va hacia ese lado.
  - **7 corchos por ronda. El premio solo cuenta si cae del estante**: las cajas pequeñas vuelcan con un corcho bien dado arriba; las grandes, las latas y los gatos hay que empujarlos a base de impactos hasta el borde. El corcho cae un poco por el camino.
  - Se juega con el **móvil como rifle** (igual que PUNTERÍA), con el ratón, o con el dedo (un toque apunta y otro dispara). `?juego=shateki` lo abre directamente.

### v11.5

- **Dos cartuchos nuevos en la estantería, con su carátula**: **WONDERWALK** (el camino al castillo) y **KRAZYGOLF** (minigolf gamberro). Siguen en desarrollo: se abren a pantalla completa desde su cartucho y se juegan con el dedo o el ratón; aún no usan el móvil como mando. `?juego=wonderwalk` y `?juego=krazygolf` los abren directamente.
- **WONDERWALK**: el camino ya no es recto, serpentea por prado, bosque y colinas con río y puente; los objetos de la lista están escondidos detrás de piedras, arbustos y troncos (hay que tocar el escondite para mirar), hay zarzas que cortan el paso y ladrones que te roban un objeto si no los espantas.
- **KRAZYGOLF**: la línea de apuntado es gruesa, a rayas en movimiento y acaba en punta de flecha hacia donde saldrá la bola; el modo CLÁSICO se juega en un campo de minigolf en 3D con su jardín (pinos, setos, estanque, valla, farolas y molino).

### v11.4

- **La caja del juego, de pie y con dos manos**: una mano la sujeta y la otra abre la carátula como un libro y saca el cartucho. La caja queda de pie en la mesa, entreabierta y con la carátula a la vista, sin tocar el teléfono ni la consola.
- **Logo nuevo a color** en la consola (sala y menú) y en la etiqueta del cartucho, donde antes iba grabado a una tinta y no se reconocía.
- **ZOMBIELAND**: vuelve a sonar su música de siempre (la del paquete nuevo se ha quitado), los gruñidos suenan solo de vez en cuando y el fondo lleva bancos de humo verde y lila a la deriva.

### v11.3

- **Continuidad de marca**: la cabecera del menú de cada juego lleva el mismo rótulo que su carátula (misma letra, mismos colores, título y variante), en grande, en lugar del texto genérico.
- **Borradores de los juegos nuevos** en `borradores/`: WONDERWALK (paseo hasta el castillo con la lista de objetos) y KRAZYGOLF (tres hoyos, modos KRAZY y CLÁSICO, narrador). Se juegan con el ratón o con el dedo; aún no usan el móvil como mando ni están en la consola.
- `?juego=<variante>` abre directamente cualquier cartucho (zombieland, halloween, fortuna, basket…).
- **Continuidad de la sala**: el fondo de la pantalla del cartucho es una foto de la propia sala tomada en ese momento, con la misma mesa y lo que hay encima (casete, mando, lata, teléfono, caja del juego), en lugar de una imagen aparte.
- **La tapa de la caja** queda levantada al abrirla (antes se tumbaba y se metía en la consola y en la tele).
- **Un cartucho, una variante**: al abrir un cartucho la pantalla ya no ofrece las demás variantes del juego, se abra como se abra.
- ZOMBIELAND alterna su música nueva con la de siempre, una partida con cada una.

### v11.1

- **PUNTERÍA · ZOMBIELAND con recursos propios (piloto)**: los emojis dejan paso a personajes dibujados y animados (dos zombis, hombre lobo, esqueleto, murciélago, rata y un pastor alemán al que no hay que disparar); disparos, recarga, gruñidos y muertes grabados, con varias tomas al azar; y banda sonora propia que entra con su introducción, enlaza con el bucle y cierra con un final (o con el tema de récord). Todo en `packs/zombieland/` (2,2 MB), con sus autores en `CREDITOS.md`. Si un archivo falta, el juego usa lo de antes.
- **Enlace directo**: `?juego=zombieland` carga ese cartucho al abrir.

### v11.0

- **Logo definitivo de MSGAME**: la calavera-cartucho magenta de siempre; «MS» dibujada a mano, angulosa y en 3D, con degradado morado y filete verde; y «GAME» con cada letra calada en su ficha magenta con proporción de carátula, inclinada, con filete verde debajo y la «A» y la «E» un poco más altas. La «S» pisa ligeramente la ficha de la «G». Sustituye al anterior en cabecera, sala, monitor, consola, carátulas y móvil.

### v10.9

- **Logo nuevo de MSGAME**: el cartucho-calavera sigue en magenta y la palabra «msgame» pasa a leerse como una sola, con un degradado vertical de magenta (arriba) a azul (abajo). Aplicado en todos los sitios donde sale el logo: cabecera, sala, consola, carátulas y móvil.

### v10.8

- **MSGAME · carátula de LA FORTUNA**: rótulo en rojo terciopelo (canto granate con filete dorado fino) para que las bombillas amarillas contrasten y se vean mejor.

### v10.7

- **MSGAME · carátula de LA FORTUNA**: las bombillas del rótulo, más marcadas y con más brillo amarillo, de feria (casquillo oscuro, resplandor y filamento claro), sin tapar el rojo de la letra.

### v10.6

- **Las 19 carátulas, cerradas** tras la revisión una a una:
  - **PALOTERAPIA:** en el centro, las tres armas cruzadas (el bate en medio y, en aspa, la espada y el sable de luz).
  - **PUNTERÍA:** dos puntos de mira de distinto tamaño y color, y un ¡BANG! en uno de ellos.
  - **BEAT RACER:** las dos palabras con la misma letra de carreras, ancha y tumbada; BEAT va delante y pisa un poco a RACER, que conserva sus estelas.
  - **GRAFFER:** el muro de ladrillo con las tres manchas y la letra de grafiti.
  - **LA FORTUNA:** rótulo de bombillas arriba y la ruleta del juego, con sus premios.
  - **BOLERA:** el momento del pleno: bolos grandes saltando, la bola a la vista y líneas de golpe; sin las luces de arriba.
  - **PATOPESCA:** la caña con su sedal y su anzuelo entra por arriba.
  - **ENCESTA:** BALLHOP (con su pista y sus anillas) y BASKET (con una cancha de fondo y la canasta a la vista) llevan el nombre en arco e inclinado; ENCESTA queda en una placa abajo.
- **Continuidad:** la consola de la pantalla del juego es la misma que la de la sala (cuatro teclas, sin tecla de mando ni emblema), y el rótulo de cada juego en el monitor lleva la letra y el color de su carátula.

### Sigue de la v10.5

- **Carátulas nuevas**, elegidas una a una entre tres propuestas:
  - **PALOTERAPIA:** el título, inclinado, arriba a la izquierda; abajo, la variante (Halloween, Zombies, Aliens, Sports, Disco) con su propia letra y los colores de su tema.
  - **PUNTERÍA:** título en naranja fuego, inclinado y pegado a la derecha; abajo a la izquierda, cada escenario con sus colores y un filete claro (Western en amarillos y rojos, Galaxy en azules, Zombieland en verdes y en dos líneas, Haunted en violetas, Alpine en verde montaña y Warfront en camuflaje de nieve).
  - **BEAT RACER:** la corredora (Runner) y el todoterreno (Dirty) salen en la carátula; RACER lleva estelas de velocidad, y la variante va sin cinta, con su propia letra y color.
  - **BOLERA** y **PATOPESCA:** escena dibujada propia, con el título en diagonal y su lema.
  - **ENCESTA:** BALLHOP ya no lleva una carátula de baloncesto: enseña sus pistas y sus anillas; BASKET, el tablero y la canasta.
- **Fotos con más vida:** todas las carátulas con foto llevan un tratamiento de contraste, color y resplandor para que no queden oscuras.
- **La marca «msgame» de las carátulas**, a su color (antes salía grabada en oscuro y casi no se veía).

### Sigue de la v10.4

- **Teléfono rojo en la mesa.** Para configurar el móvil como mando ya no hay una tecla en la consola: se pulsa el teléfono rojo de la mesa (delante, a la derecha). En pantallas estrechas, donde el teléfono queda fuera de la imagen, hay un botón rojo con un teléfono en el borde derecho. La consola se queda con cuatro teclas mejor repartidas: JUGAR, EXPULSAR, JUGADORES y RÉCORDS.
- **El brazo ya no tapa el cartucho.** Al sacarlo de la caja y al meterlo en la consola, el brazo entra por un lado y el cartucho se ve entero todo el rato.
- **Moqueta en los planos de la mesa.** Al mirar hacia abajo durante la secuencia ya no se ve negro fuera de la alfombra.
- **Espadas, sables y bates más finos (PALOTERAPIA).** La hoja sigue al móvil con menos de la mitad de retraso y responde igual en una tele lenta que en un ordenador rápido. Ahora cuenta la velocidad de la hoja y no solo la del puño: un giro de muñeca también corta (antes no cortaba nada). El barrido entre una imagen y la siguiente ya no se salta objetos, y el margen de corte es algo más generoso. Quieto, sigue sin cortar.
- **Sin latigazos al girar la muñeca.** Si el móvil se tumbaba más de 90°, la espada saltaba de golpe al lado contrario; ahora se queda tumbada de ese lado.

### Sigue de la v10.3

- **Calibrar el mando, sin pulsar nada.** Se apunta el borde superior del móvil al centro de la pantalla; sale una cuenta atrás de 3 segundos y el mando se calibra solo en cuanto el móvil está quieto. Después, la bola verde sigue al móvil unos segundos para comprobar que ha quedado bien. Antes había que pulsar un botón, y al pulsarlo (y al mirar el móvil para encontrarlo) se movía justo lo que se estaba midiendo; además, durante el calibrado se veía una bola con el ajuste anterior, que despistaba.
- **El calibrado sale solo** cada vez que un móvil se conecta, si no hay una partida en marcha. Durante el juego, ⊙ Centrar corrige el centro al momento.
- **El mando del móvil, en una pantalla fija.** Ya no se desplaza: arriba, el estado; en el centro, solo los botones del momento; abajo, tres páginas (MANDO, JUEGOS y AJUSTES). Cabe en cualquier móvil, de pie o tumbado, y ningún texto se corta.
- **Cruceta con OK.** Sin partida, el móvil es el mando a distancia de la pantalla: las flechas mueven la selección y OK la pulsa (cartuchos, menús, las iniciales del récord). Con partida, solo salen los mandos de ese juego, más Pausa, Centrar y Salir.
- **Teclas con relieve y clic.** Los botones del móvil se hunden al tocarlos y suenan en el propio móvil (se puede quitar en AJUSTES).
- **Corregido:** al calibrar ya no se hereda un eje invertido de un calibrado fino anterior.

### Sigue de la v10.2

- **Botón «Instalar».** En la cabecera, junto al aviso de fallos, hay un botón nuevo para instalar MSGAME en el dispositivo como una aplicación más: se abre en su propia ventana, con su icono, y funciona sin conexión con lo que ya se haya usado. Es el mismo botón en toda la familia AVHUB. Donde el navegador no ofrece la instalación directa, el botón explica cómo hacerlo a mano («Añadir a pantalla de inicio»).
- **«Guardar todo para usarla sin internet»**, en esa misma ventana: guarda de una vez toda la app (es el «modo feria» de siempre, ahora más a mano). Y desde la primera visita se guarda ya todo lo que se ha cargado.
- La ventana de instalar se maneja también con el teclado y con el mando de la tele (flechas, OK y atrás), sin que se muevan los controles de debajo.
- La copia sin conexión es la de siempre: la app, las imágenes, los sonidos, los tipos y las librerías. El enlace entre el móvil y la pantalla sigue necesitando internet.
- No cambia nada más del aspecto ni del funcionamiento.

### Sigue de la v10.1

- **Calibrar el mando, en un solo paso:** se apunta al centro de la pantalla y se pulsa Calibrar. Vale igual para un portátil que para una pantalla gigante. El calibrado fino de tres pasos (centro y dos esquinas) sigue disponible con Mayús+C en el teclado de la pantalla.
- **Corregido:** la segunda pulsación seguida de un mismo botón del mando (Calibrar, Centrar, Play, Stop) se descartaba como repetida. Era la causa de que calibrar pareciera errático.

### Sigue de la v10.0

- Se acompasa con VJSHOW v10.0: los tipos de letra del módulo de textos también se sirven desde `fuentes/txt/`. La app ya no pide nada a Google Fonts en ningún momento.
- No cambia nada del aspecto ni del funcionamiento.

### Sigue de la v9.9

- **Librerías y tipos de letra en casa.** three.js, PeerJS y QRCode.js se sirven desde `lib/`, y los tipos de letra de la interfaz y de los juegos desde `fuentes/` (todos con licencia libre: ver `lib/LICENCIAS.md` y `fuentes/LICENCIAS.md`). Al abrir la app, también en el móvil que hace de mando, ya no se pide nada a Google Fonts, unpkg ni cdnjs.
- El enlace del mando sigue necesitando sus servidores (PeerJS y repetidores), como hasta ahora.
- No cambia nada del aspecto ni del funcionamiento.

### Sigue de la v9.8

- **Aviso legal:** se añade que es un proyecto personal del autor, ajeno a su empleador, que no lo encarga, financia ni respalda.

Sigue de la v9.7:

- **Cada juego, su logo.** Los títulos de las carátulas, los cartuchos y la pantalla ya no usan todos la misma letra: cada juego tiene su tipo de letra, sus colores y su inclinación, con contorno oscuro y filete claro para que se lean en el móvil. Las sagas (PALOTERAPIA, PUNTERÍA) repiten el título y cambian el subtítulo, en otra letra y otro color. Los tipos de letra son libres (OFL) y van en la carpeta `fuentes/`.
- **El cartucho tiene la forma del isotipo de MSGAME:** cuerpo de esquinas redondeadas y pestaña estrecha abajo con sus tres muescas.
- **Edad recomendada** en la ayuda: nota propia sobre el contenido (a partir de 7 años), sin sellos de terceros.

Sigue de la v9.6:

- **PALOTERAPIA** es el nombre definitivo del juego de cortar y golpear al ritmo (antes HIT HERO).

Sigue de la v9.5:

- **Nombres propios para tres juegos:** **PALOTERAPIA** (antes HIT HERO), **PUNTERÍA** (antes SHOOT HERO) y **GRAFFER** (antes GRAFFITI). Cambian en las cajas, los cartuchos, el menú, el mando y los textos; los juegos son los mismos.

Sigue de la v9.4:

- **Sin nombres ni marcas de otros.** La descripción del juego de cortar al ritmo ya no menciona otro juego; el mensaje de compartir de LA FORTUNA habla de «prize wheel» en inglés; el efecto de texto de VJSHOW se llama «Créditos en perspectiva».
- **Rótulo SONIA con letra propia** (palo seco en cursiva, muy espaciada), grabado y hundido en el plástico del monitor.
- **Tipografía:** los títulos usan solo Audiowide, de licencia libre.
- **Música y efectos:** proceden de Pixabay, bajo su licencia de contenido.

Sigue de la v9.3:

- **Documentación legal completa:** `LEGAL.md`, `DISCLAIMER.md`, `PRIVACY.md` y `COOKIES.md` en el repositorio, enlazados desde el «Aviso legal» de la app. El aviso de la app añade que no es un proyecto técnico ni asesoramiento profesional, que la limitación de responsabilidad no alcanza a lo que la ley no permite excluir, y un apartado de privacidad y contacto.

Sigue de la v9.2:

- **Aviso legal.** Al final de la ventana de ayuda, y enlazado detrás de la línea de crédito, hay un aviso en lenguaje llano (es/en/ca): software gratuito hecho por afición, sin garantías y de uso bajo la responsabilidad de cada cual.

Sigue de la v9.1:

- **Menú del cartucho sin botones en pantalla.** JUGAR, EXPULSAR, MANDO, JUGADORES y RÉCORDS son solo las teclas físicas de la consola; la de JUGAR lleva un halo verde para que se vea qué hay que pulsar. En el monitor queda más sitio: casi todo cabe en una sola página y, si hace falta pasar página, hay dos flechas pequeñas abajo. RESTABLECER sigue, en pequeño.
- **Solo el juego que has cogido.** Si eliges la caja de HIT HERO · ZOMBIES, el menú ya no vuelve a preguntar el escenario: su tarjeta sube a la cabecera, junto al título, y la cabecera enseña el fondo de ese juego. Las armas (o lo que tenga cada juego) se siguen eligiendo.
- **Móvil vertical: el monitor no se deforma.** Conserva su forma y la explicación del juego sale fuera, encima del monitor.
- **Mesa en caoba oscuro**, para que contraste con los expositores; el mismo tono en la sala y en la pantalla de juego.
- **Cajas de las baldas bajas:** al cogerlas, la cámara las mira de cerca y desde arriba, sin que la mesa ni la lata las tapen.
- **Mando:** el calibrado vale ahora para cualquier tamaño de pantalla, del portátil a la pantalla gigante (antes ignoraba las pantallas pequeñas y el puntero casi no se movía), y el puntero tiembla menos; en el móvil ya no suena la música (solo los efectos), aparece el logo oficial y, al hacer récord, el recuadro para escribir tus tres letras sale arriba y bien visible.
- **Seta roja de aviso de fallos** en la barra de botones: al pasar el cursor explica para qué es; al pulsarla puedes contarnos el fallo y adjuntar capturas.

Sigue de la v9.0:

- **El mando conecta también en wifis de hotel, de invitados o de eventos.** Hasta ahora el móvil solo hablaba con la pantalla de forma directa, y en las redes que aíslan los aparatos entre sí se quedaba en «Conectando…». Ahora, si en unos segundos no hay conexión directa, el mando pasa solo a un enlace de reserva por internet y sigue funcionando igual (nombre, color, calibración, botones y puntuación). El móvil avisa con «Sin conexión directa: conectando por internet…» y, la siguiente vez, cambia antes.
- **El código QR aparece aunque falle el servidor de enlace**, y el mando ya no depende de él para conectar.
- **Mevi ya no se presenta dos veces.** Al volver de un juego sale directamente a un lado y pregunta otra cosa, distinta cada vez («¿Te gustó? ¿Ahora cuál?», «¿Probamos otro?»…).
- **Sin mancha amarilla al cargar.** La primera imagen (la desenfocada) ya no muestra la bola amarilla que dejaban las gotas de la lámpara de lava.
- **La mano coge la caja por un lado**, por el canto que le queda más cerca, y al sacarla la baja hacia la mesa girándola: se ve en perspectiva, no de frente, y el brazo ya no se estira hacia lo alto.
- **Línea de crédito común** a todas las apps de la familia, con su icono; el texto se cambia desde el panel de administración.
- **ADPOSTER sustituye a NEWS** en el selector de la familia, en el letrero y en el cubo.

Sigue de la v8.9:

- **Un brazo de verdad.** En la secuencia de coger el juego, el brazo es rígido y sale siempre del mismo hombro, abajo a la derecha de la imagen: la mano llega a la caja, a la carátula, al cartucho y a la consola desde donde alcanza, sin bajar del cielo ni estirarse.
- **Sin choques con la lámpara.** La lámpara de lava y la lata se retiran un poco hacia el monitor y la caja se abre en la mesa sin tocarlas.

Sigue de la v8.8:

- **Fondo: el videoclub de verdad.** La capa de fondo es ahora la foto real del videoclub, difuminada, en la escena y en la pantalla de juego. Sustituye a la cafetería dibujada de la v8.7.
- **La música arranca al primer toque.** Al abrir MSGAME desde otra web, el navegador no deja sonar nada hasta que tocas la pantalla; ahora la música de los menús empieza en ese mismo instante, sin esperar.

Sigue de la v8.7:

- **Fondo nuevo:** una cafetería de los 50 dibujada para MSGAME, con suelo de damero turquesa y blanco, reservados rosa y menta y una gramola al fondo. Va difuminada y sombreada, y hace a la vez de pared del fondo y de suelo, antes y después de meter el cartucho. La alfombra arcade sigue bajo la mesa.
- **La misma mesa antes y después:** la mesa de madera de la pantalla de juego es ahora la de la escena, con el mismo tono, las mismas vetas y las mismas tablas.

Sigue de la v8.6:

- **Lámpara de lava luminiscente,** en la mesa, pegada al monitor sin tocarlo: va pasando despacio por todos los colores corporativos, con gotas de tres tamaños que suben, se estiran y se funden arriba.
- **Walkman tumbado** sobre la mesa y en ángulo, con la cinta «favoritas» hacia arriba.
- **Cubo de Rubik revuelto:** los seis colores, con el logo de cada app, en las caras que se ven. Sigue encima del monitor.
- **Lata «6GO»:** un refresco de lima-limón inventado, verde y con su 6 bien grande.

Sigue de la v8.5:

- **Vuelve la alfombra arcade,** debajo de la mesa.
- **Todos los juegos, a la vista.** Las dos baldas de arriba de cada estantería llevan todos los juegos, y las estanterías, de pie sobre un zócalo, caben enteras en pantalla. En pantallas más estrechas la cámara se aleja lo justo para que sigan entrando.
- **Las cajas tapadas son decoración.** Las que quedan detrás de la mesa, de un objeto o de Mevi, o fuera de la pantalla, no se pueden elegir (ni con el ratón, ni con el dedo, ni con el mando): son juegos repetidos de relleno. Se calcula en cada tamaño de pantalla y ningún juego se queda sin caja.
- **Objetos pegados al monitor,** sin tapar ningún juego elegible.
- **El bocadillo de Mevi se retira** a los 12 segundos, para no tapar las cajas de detrás. Mevi se queda.

Sigue de la v8.4:

- **Un solo fondo.** La sala es la foto entera, como pared del fondo: ya no hay suelo, techo, paredes ni esquinas, y desaparecen los rótulos redondos colgados (ARCADE, PARTY…), el neón y los pósters.
- **Estanterías más grandes y más cerca.** Se salen de la pantalla por los lados y van llenas de cajas de arriba abajo, con cuatro por balda.
- **El logo oficial, en todas partes.** A color en el rótulo de cada estantería y en el monitor (la calavera arriba y el nombre debajo, con su efecto de tubo). Grabado, sin tinta y solo con el relieve hundido, en la consola, en los cartuchos y en las cajas. El nombre «MSGAME» escrito deja de salir en el resto.
- **Monitor y consola iguales antes y después de meter el cartucho:** el mismo monitor gris «SONIA» y la misma consola, con el frontal inclinado, la pantalla, el piloto y las cinco teclas.
- **La consola ya no se corta por abajo.** En la pantalla de juego, el monitor y la consola se ajustan solos a la ventana y dejan margen por abajo.
- **Cosas de los 80 en la mesa:** una lámpara de lava que se mueve y da luz, un walkman con la cinta «favoritas» escrita a mano y un cubo de Rubik con el logo de cada app en las pegatinas de su color.
- **El rótulo de arriba, en reposo,** alterna la firma del pie con una invitación a las otras apps de AVHUB («Prueba también VJSHOW: …») y su resumen. Los avisos y la ayuda de cada momento siguen teniendo prioridad.

Sigue de la v8.0 (las versiones v8.1 a v8.3 solo cambiaron VJSHOW, que comparte código):

- Esa versión añadió a VJSHOW los logos de las otras apps de AVHUB (MSGAME entre ellas, enlazado a esta web).

Sigue de la v7.9:

- **MSGAME estrena logo:** un cartucho con dos estrellas que hacen de ojos y los contactos de dientes, como una calavera, en magenta; y el nombre en la letra común de la familia AVHUB, con «ms» en magenta. Va en la cabecera y en el icono de la app y de la pestaña.

Sigue de la v7.8:

- **Mevi se queda en pantalla hasta que se elige un juego.** Saluda en el centro y, a los cinco segundos, da un saltito a un lado para no tapar la consola; de vez en cuando vuelve a saludar. Al volver de un juego, sale otra vez.
- **La mano de Mevi agarra de verdad:** al coger, la manopla se cierra en un puño y lo que sujeta queda dentro (la caja por un canto, la carátula por su borde libre y el cartucho por su extremo). Ya no hay dedos atravesando la carátula ni el cartucho. Al final abre la mano y termina de meter el cartucho empujando con la palma: ¡clac!
- **Sin parpadeos al cargar:** los rótulos pegados a la consola y al monitor ya no tiemblan, y el paso de la imagen desenfocada a la nítida se hace con una copia fija de la sala.
- **En el móvil a pantalla completa**, los menús de arriba bajan un poco para que no los tapen la barra de estado ni los avisos del teléfono.
- **El monitor SONIA ya no lleva antenas** (v7.7): es un monitor, no una tele.

Sigue de la v7.6:

- **Llega Mevi, la mascota de MSGAME.** Es quien guía al jugador: un muñeco de melena negra, ojos de estrella, mono morado y guantes y botas verde lima.
- **Nueva entrada:** al cargar, la sala aparece primero desenfocada y después nítida, con la mesa, la consola y las estanterías. Entonces Mevi salta desde abajo, en el centro, con un «boing», y saluda en un bocadillo: «¡Hola! Soy Mevi. ¿Elegimos a qué jugamos?». Un toque en la pantalla la despide.
- **El juego se elige con la mano de Mevi:** en la escena de cine, su guante verde coge la caja por arriba, la deja en la mesa, abre la carátula, saca el cartucho y lo mete en la consola. ¡Clac!
- **Estilo de dibujos animados, no de cómic:** desaparecen el contorno de tinta y la trama de puntos; las luces y las sombras son suaves.
- Mientras carga ya no se ve la home antigua: se ve el fondo desenfocado.

Sigue de la v7.5:

- **El videoclub 3D sale completo en el enlace de pruebas:** las carátulas y el fondo se cargan de forma que funcionan también cuando el servidor entrega las imágenes desde otra dirección.
- **Si el dispositivo no puede con el 3D, el motivo se queda 15 segundos a la vista** en la propia pantalla, además de pasar por el LED.

Sigue de la v7.4:

- **El motor 3D va incluido en la propia web** (antes se descargaba de fuera) y, si una descarga se cuelga, prueba con otra.
- **Aviso «Cargando el videoclub…»** mientras se monta la sala.
- **Sin botón de micrófono:** los juegos usan su propia música y no lo necesitan.

Sigue de la v7.3:

- **La home es un videoclub en 3D**, inspirado en un videoclub real de los 80 y dibujado como un cómic: luz por bandas, trama de puntos en las sombras y contorno de tinta.
  - A cada lado, un expositor de madera con las carátulas de frente: una balda por juego, con sus variantes.
  - Al fondo, la sala retro pasada a viñeta, con el neón de MSGAME y los rótulos colgados.
  - En el centro, la mesa con la consola, el mando con su cable rizado y la tele SONIA.
- **Elegir un juego es una escena de cine con varios planos:**
  - la mano coge la caja del expositor, la deja en la mesa y la abre;
  - saca el cartucho y lo mete en la consola («¡CLAC!»);
  - la tele se enciende y abre el menú del juego, ya con la variante elegida.
- **Saltar la intro:** con el botón, con Esc, OK o la barra espaciadora se va directo al juego.
- **Volver:** EXPULSAR en la tele devuelve la cámara a la sala y la caja vuelve a su sitio.
- **Cómo se elige:** con el ratón, con el dedo, con el teclado o con el mando de la tele, que salta de caja en caja. Las teclas de la consola (JUGAR, EXPULSAR, MANDO, JUGADORES y RÉCORDS) también funcionan.
- **En el móvil**, abajo hay una tira con las 8 carátulas para elegir con el dedo.
- **Si el navegador no tiene 3D**, se queda la home de siempre.

## Licencia

Código abierto bajo la licencia **GNU GPL v3** (ver `LICENSE`): puedes usarlo, modificarlo y distribuirlo, también en eventos comerciales, siempre que las versiones modificadas que distribuyas sigan siendo abiertas con esta misma licencia.

---
*MSGAME v12.8 es un proyecto hecho con ⚙ by [mediaservi.com](https://mediaservi.com)*

## Aviso

Software gratuito y de código abierto, hecho con pasión por un aficionado en su tiempo libre. No es un producto profesional. Se ofrece «tal cual», sin garantías de ningún tipo; los resultados son orientativos y hay que comprobarlos siempre; se usa bajo la responsabilidad de cada cual, hasta donde lo permita la ley aplicable. El aviso completo (es/en/ca) está en la propia app, en el enlace «Aviso legal» que acompaña a la línea de crédito. Licencia GPL-3.0.

Documentos legales del repositorio: [`LEGAL.md`](LEGAL.md) (aviso legal), [`DISCLAIMER.md`](DISCLAIMER.md) (garantías y responsabilidad), [`PRIVACY.md`](PRIVACY.md) (privacidad), [`COOKIES.md`](COOKIES.md) (cookies y almacenamiento local) y [`LICENSE`](LICENSE) (GPL-3.0). Sin publicidad, afiliación ni ingresos de ningún tipo.
