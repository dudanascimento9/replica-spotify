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
  
  // Configura os eventos de clique nas divs
  musicas.forEach((musica) => {
    const div = document.querySelector(`.${musica.divClass}`);
    const audio = document.getElementById(musica.audioId);
  
    if (div && audio) {
      div.addEventListener("click", () => {
        atualizarPlayer(musica.titulo, musica.capa, audio);
      });
    }

    const progressBar = document.getElementById("progressBar");
const progressContainer = document.querySelector(".progress-container");

// Atualiza a barra enquanto a música toca
function atualizarBarra() {
  if (audioAtual) {
    const porcentagem = (audioAtual.currentTime / audioAtual.duration) * 100;
    progressBar.style.width = `${porcentagem}%`;
  }
}

// Atualiza a barra constantemente
setInterval(atualizarBarra, 500);

// Permite clicar na barra para mudar o tempo
function mudarTempo(e) {
  if (!audioAtual) return;

  const largura = progressContainer.clientWidth;
  const cliqueX = e.offsetX;
  const duracao = audioAtual.duration;

  audioAtual.currentTime = (cliqueX / largura) * duracao;
}

const botao = document.getElementById("btn-seguir");

  botao.addEventListener("click", function () {
    botao.classList.toggle("seguindo");

    if (botao.classList.contains("seguindo")) {
      botao.textContent = "Seguindo";
    } else {
      botao.textContent = "Seguir";
    }
  });
  });
  