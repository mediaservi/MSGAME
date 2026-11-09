#!/bin/bash
# MSGAME · abre la app en local con un mini servidor (para que funcionen los vídeos en línea, las webcams y el mando)
cd "$(dirname "$0")"
PORT=8080
while lsof -i :$PORT >/dev/null 2>&1; do PORT=$((PORT+1)); done
echo ""
echo "  MSGAME en marcha:  http://localhost:$PORT"
echo "  Deja esta ventana abierta mientras uses MSGAME. Para cerrarlo, cierra esta ventana."
echo ""
( sleep 1; open "http://localhost:$PORT/index.html" ) &
python3 -m http.server $PORT --bind 127.0.0.1
