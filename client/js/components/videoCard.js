// js/components/videoCard.js
// Monta o card de um vídeo. Usa textContent (e não innerHTML) para que
// títulos digitados pelo usuário nunca sejam interpretados como HTML.

export function criarCardVideo(video, mostrarCanal) {
  const article = document.createElement('article');
  article.className = 'video-card';

  const titulo = document.createElement('h3');
  const linkVideo = document.createElement('a');
  linkVideo.href = 'video.html';
  linkVideo.textContent = video.titulo;
  titulo.appendChild(linkVideo);
  article.appendChild(titulo);

  if (mostrarCanal) {
    const canal = document.createElement('p');
    const linkCanal = document.createElement('a');
    linkCanal.href = 'channel.html';
    linkCanal.textContent = video.canal;
    canal.append('Canal: ', linkCanal);
    article.appendChild(canal);
  }

  const data = document.createElement('p');
  data.textContent = 'Publicado em ' + video.data;
  article.appendChild(data);

  return article;
}
