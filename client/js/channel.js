// js/channel.js
// Responsável pela validação e publicação de vídeos no canal (Etapa 04).

document.addEventListener('DOMContentLoaded', function () {
  var meusVideos = [
    { titulo: 'Como estruturar um projeto HTML semântico', data: '01/09/2026' },
    { titulo: 'Introdução ao CSS responsivo', data: '25/08/2026' }
  ];

  var form = document.getElementById('upload-form');
  var campoTitulo = document.getElementById('titulo');
  var campoArquivo = document.getElementById('arquivo');
  var erroTitulo = document.getElementById('erro-titulo');
  var erroArquivo = document.getElementById('erro-arquivo');
  var grid = document.getElementById('meus-videos-grid');

  function dataAtualFormatada() {
    return new Date().toLocaleDateString('pt-BR');
  }

  function criarCardVideo(video) {
    var article = document.createElement('article');
    article.className = 'video-card';
    article.innerHTML =
      '<h3><a href="video.html">' + video.titulo + '</a></h3>' +
      '<p>Publicado em ' + video.data + '</p>';
    return article;
  }

  function renderizarMeusVideos() {
    grid.innerHTML = '';
    meusVideos.forEach(function (video) {
      grid.appendChild(criarCardVideo(video));
    });
  }

  function limparErros() {
    erroTitulo.textContent = '';
    erroArquivo.textContent = '';
  }

  function validarFormulario() {
    limparErros();
    var valido = true;

    if (campoTitulo.value.trim().length < 3) {
      erroTitulo.textContent = 'O título deve ter pelo menos 3 caracteres.';
      valido = false;
    }

    if (campoArquivo.files.length === 0) {
      erroArquivo.textContent = 'Selecione um arquivo de vídeo.';
      valido = false;
    }

    return valido;
  }

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    meusVideos.unshift({
      titulo: campoTitulo.value.trim(),
      data: dataAtualFormatada()
    });

    renderizarMeusVideos();
    form.reset();
  });

  renderizarMeusVideos();
});
