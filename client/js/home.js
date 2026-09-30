// js/home.js
// Responsável pela listagem dinâmica e pela pesquisa de vídeos (Etapa 04).

document.addEventListener('DOMContentLoaded', function () {
  var videos = [
    { titulo: 'Como estruturar um projeto HTML semântico', canal: 'Canal Exemplo', data: '01/09/2026' },
    { titulo: 'Introdução ao CSS responsivo', canal: 'Canal Exemplo', data: '25/08/2026' },
    { titulo: 'Primeiros passos com JavaScript', canal: 'Canal Exemplo', data: '18/08/2026' }
  ];

  var grid = document.getElementById('video-grid');
  var form = document.getElementById('search-form');
  var campoBusca = document.getElementById('busca');

  function criarCardVideo(video) {
    var article = document.createElement('article');
    article.className = 'video-card';
    article.innerHTML =
      '<h3><a href="video.html">' + video.titulo + '</a></h3>' +
      '<p>Canal: <a href="channel.html">' + video.canal + '</a></p>' +
      '<p>Publicado em ' + video.data + '</p>';
    return article;
  }

  function renderizarVideos(lista) {
    grid.innerHTML = '';

    if (lista.length === 0) {
      var mensagem = document.createElement('p');
      mensagem.className = 'empty-state';
      mensagem.textContent = 'Nenhum vídeo encontrado para esta pesquisa.';
      grid.appendChild(mensagem);
      return;
    }

    lista.forEach(function (video) {
      grid.appendChild(criarCardVideo(video));
    });
  }

  function filtrarVideos(termo) {
    var termoNormalizado = termo.trim().toLowerCase();

    if (!termoNormalizado) {
      return videos;
    }

    return videos.filter(function (video) {
      return video.titulo.toLowerCase().indexOf(termoNormalizado) !== -1;
    });
  }

  function executarPesquisa() {
    renderizarVideos(filtrarVideos(campoBusca.value));
  }

  campoBusca.addEventListener('input', executarPesquisa);

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    executarPesquisa();
  });

  renderizarVideos(videos);
});
