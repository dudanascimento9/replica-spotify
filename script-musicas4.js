const musicas = [
  {
    audioId: "audio-musica",
    divClass: "alinhar",
    titulo: "Mãe Solteira",
    capa: "imagens/mae.jpg",
  },
  {
    audioId: "audio-musica2",
    divClass: "alinhar2",
    titulo: "Resenha do Arrocha",
    capa: "imagens/resenha.jpg",
  },
  {
    audioId: "audio-musica3",
    divClass: "alinhar3",
    titulo: "Resenha Ex-Love",
    capa: "imagens/ex-love.jpg",
  },
  {
    audioId: "audio-musica4",
    divClass: "alinhar4",
    titulo: "Resenha do Arrocha 3.0",
    capa: "imagens/ex-love.jpg",
  },

  {
    audioId: "audio-musica5",
    divClass: "alinhar5",
    titulo: "Tadala",
    capa: "imagens/download.jpeg",
  },
];

let audioAtual = null;
let tocando = false;

// Atualiza o conteúdo do player fixo
function atualizarPlayer(titulo, capa, audio) {
  document.getElementById("player-title").textContent = titulo;
  document.getElementById("player-cover").src = capa;
  audioAtual = audio;
  tocarOuPausarPlayer(true); // Auto inicia a música
}

// Dá play ou pausa na música atual
function tocarOuPausarPlayer(autoStart = false) {
  if (!audioAtual) return;

  if (audioAtual.paused || autoStart) {
    // Pausa todas as outras
    document.querySelectorAll("audio").forEach((a) => {
      if (a !== audioAtual) a.pause();
    });
    audioAtual.play();
    tocando = true;
  } else {
    audioAtual.pause();
    tocando = false;
  }
}

// Voltar para o início da música
function voltarParaInicio() {
  if (audioAtual) {
    audioAtual.currentTime = 0;
  }
}

// Avançar até o final da música
function avancarParaFinal() {
  if (audioAtual) {
    audioAtual.currentTime = audioAtual.duration;
    audioAtual.pause();
    tocando = false;
  }
}

// Atualiza a barra enquanto a música toca
function atualizarBarra() {
  if (audioAtual) {
    const porcentagem = (audioAtual.currentTime / audioAtual.duration) * 100;
    progressBar.style.width = `${porcentagem}%`;
  }
}

// Permite clicar na barra para mudar o tempo
function mudarTempo(e) {
  if (!audioAtual) return;

  const largura = progressContainer.clientWidth;
  const cliqueX = e.offsetX;
  const duracao = audioAtual.duration;

  audioAtual.currentTime = (cliqueX / largura) * duracao;
}

// Configura os eventos de clique nas divs
musicas.forEach((musica) => {
  const div = document.querySelector(`.${musica.divClass}`);
  const audio = document.getElementById(musica.audioId);

  if (div && audio) {
    div.addEventListener("click", () => {
      // Volta para o início sempre que a música for clicada
      audio.currentTime = 0;
      atualizarPlayer(musica.titulo, musica.capa, audio);
    });
  }

  // Atualiza a barra constantemente
  const progressBar = document.getElementById("progressBar");
  const progressContainer = document.querySelector(".progress-container");
  setInterval(atualizarBarra, 500);
  progressContainer.addEventListener("click", mudarTempo);

  const botao = document.getElementById("btn-seguir");

// Verifica o estado salvo ao carregar a página
const seguindo = localStorage.getItem("seguindoArtista");

if (seguindo === "true") {
  botao.classList.add("seguindo");
  botao.textContent = "Seguindo";
} else {
  botao.classList.remove("seguindo");
  botao.textContent = "Seguir";
}

// Evento de clique
botao.addEventListener("click", function () {
  botao.classList.toggle("seguindo");

  const estaSeguindo = botao.classList.contains("seguindo");

  // Salva o estado no localStorage
  localStorage.setItem("seguindoArtista", estaSeguindo);

  // Atualiza o texto do botão
  botao.textContent = estaSeguindo ? "Seguindo" : "Seguir";
});
});
