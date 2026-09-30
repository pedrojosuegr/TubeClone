// js/video.js
// Responsável pelo comportamento de curtir o vídeo (Etapa 04).

document.addEventListener('DOMContentLoaded', function () {
  var botaoCurtir = document.getElementById('botao-curtir');
  var totalCurtidas = parseInt(botaoCurtir.dataset.curtidas, 10) || 0;
  var curtido = false;

  function atualizarBotao() {
    botaoCurtir.textContent = (curtido ? 'Curtido' : 'Curtir') + ' (' + totalCurtidas + ')';
    botaoCurtir.classList.toggle('curtido', curtido);
  }

  botaoCurtir.addEventListener('click', function () {
    curtido = !curtido;
    totalCurtidas += curtido ? 1 : -1;
    atualizarBotao();
  });

  atualizarBotao();
});
