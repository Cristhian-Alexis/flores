var audio= document.querySelector("audio");
var lyrics= document.querySelector("#lyrics");


var lyricsData = [
  { text: "Ya lo ves, estoy tan loco por ti", time: 19 },
  { text: "Cuando te veo venir, no sé ni qué decir", time: 24 },
  { text: "Que no encuentro la manera de decirte lo que siento", time: 26 },
  { text: "Que tengo un nudo por dentro, que de amor me estoy muriendo", time: 27 },
  { text: "Ya lo ves, yo voy siempre detrás de ti", time: 29 },
  { text: "Para ver si tú al fin, te fijarías en mí", time: 32 },
  { text: "Pero no encuentro el camino para que tú estés conmigo", time: 34 },
  { text: "Mas lo tengo decidido, voy a ser más que tu amigo", time: 36 },
  { text: "Ya te lo tengo advertido", time: 38 },
  { text: "Lo tengo bien decidido", time: 41 },
  { text: "Yo te voy a enamorar", time: 45 },
  { text: "Conmigo tú vas a estar", time: 50 },
  { text: "No quieras disimularlo", time: 53 },
  { text: "Si en mí también has pensado", time: 57 },
  { text: "Vente conmigo que yo quiero estar contigo", time: 60 },
  { text: "Mi dulce niña", time: 64 },
  { text: "Tú me fascinas", time: 65 },
  { text: "Por tu sonrisa", time: 66 },
  { text: "Por tu mirada linda", time: 67 },
  { text: "Mi dulce niña", time: 68 },
  { text: "Tú eres mi vida", time: 69 },
  { text: "Contigo niña, quiero pasar los días", time: 70 },
  { text: "Yo sé que eres tú, la niña ideal", time: 86 },
  { text: "La que me tiene mal, con la que quiero estar", time: 90 },
  { text: "Y con todo lo que pido, sin querer ser atrevido", time: 92 },
  { text: "Es que tú vengas conmigo, por favor, eso te pido", time: 94 },
  { text: "Quiero verte así, tan cerquita de mí", time: 96 },
  { text: "Para poder decir lo que siento por ti", time: 99 },
  { text: "Te juro que te quiero, que tengo un amor sincero", time: 101 },
  { text: "Y que yo me desespero por alguno de tus besos", time: 103 },
  { text: "Ya te lo tengo advertido", time: 105 },
  { text: "Lo tengo bien decidido", time: 109 },
  { text: "Yo te voy a enamorar", time: 113 },
  { text: "Conmigo tú vas a estar", time: 117 },
  { text: "No quieras disimularlo", time: 120 },
  { text: "Si en mí también has pensado", time: 125 },
  { text: "Vente conmigo que yo quiero estar contigo", time: 129 },
  { text: "Mi dulce niña", time: 135 },
  { text: "Tú me fascinas", time: 136 },
  { text: "Por tu sonrisa", time: 137 },
  { text: "Por tu mirada linda", time: 138 },
  { text: "Mi dulce niña", time: 139 },
  { text: "Tú eres mi vida", time: 140 },
  { text: "Contigo niña, quiero pasar los días", time: 141 },
  { text: "Ya te lo tengo advertido", time: 144 },
  { text: "Lo tengo bien decidido", time: 147 },
  { text: "Yo te voy a enamorar", time: 152 },
  { text: "Conmigo tú vas a estar", time: 154 },
  { text: "No quieras disimularlo", time: 157 },
  { text: "Si en mí también has pensado", time: 161 },
  { text: "Vente conmigo que yo quiero estar contigo", time: 166 },
  { text: "Mi dulce niña", time: 172 },
  { text: "Tú me fascinas", time: 173 },
  { text: "Por tu sonrisa", time: 174 },
  { text: "Por tu mirada linda", time: 175 },
  { text: "Mi dulce niña", time: 176 },
  { text: "Tú eres mi vida", time: 177 },
  { text: "Contigo niña, quiero pasar los días", time: 178 },
  { text: "Mi dulce niña", time: 182 },
  { text: "Tú me fascinas", time: 183 },
  { text: "Por tu sonrisa", time: 184 },
  { text: "Por tu mirada linda", time: 185 },
  { text: "Mi dulce niña", time: 186 },
  { text: "Tú eres mi vida", time: 187 },
  { text: "Contigo niña, quiero pasar los días", time: 188 }
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);

  // Buscar la línea actual
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualiza la letra cada segundo
setInterval(updateLyrics, 1000);

// Oculta el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out";

  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
