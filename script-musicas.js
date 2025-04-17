const musicas = [
  {
    audioId: "audio-musica",
    divClass: "alinhar",
  },
  {
    audioId: "audio-musica2",
    divClass: "alinhar2",
  },
  {
    audioId: "audio-musica3",
    divClass: "alinhar3",
  },
];

const audios = musicas.map((m) => document.getElementById(m.audioId));

musicas.forEach((musica, index) => {
  const div = document.querySelector(`.${musica.divClass}`);
  const audio = audios[index];

  if (div && audio) {
    div.addEventListener("click", () => {
      // Pausar todos os outros
      audios.forEach((a, i) => {
        if (i !== index) a.pause();
      });

      // Play/Pause a clicada
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  }
});
