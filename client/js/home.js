// js/home.js — ponto de entrada da página inicial.
// Consulta os vídeos pelo serviço (assíncrono), trata carregamento e erro,
// e filtra a lista em memória conforme o usuário digita.
import { listarVideos } from './services/api.js';
import { criarCardVideo } from './components/videoCard.js';
import { mostrarCarregando, mostrarErro, mostrarVazio } from './components/status.js';

const grid = document.getElementById('video-grid');
const form = document.getElementById('search-form');
const campoBusca = document.getElementById('busca');

let videos = [];
let carregando = false;

function filtrarVideos(termo) {
  const termoNormalizado = termo.trim().toLowerCase();

  if (!termoNormalizado) {
    return videos;
  }

  return videos.filter((video) => video.titulo.toLowerCase().includes(termoNormalizado));
}

function renderizar() {
  const lista = filtrarVideos(campoBusca.value);

  if (lista.length === 0) {
    const mensagem = campoBusca.value.trim()
      ? 'Nenhum vídeo encontrado para esta pesquisa.'
      : 'Ainda não há vídeos publicados.';
    mostrarVazio(grid, mensagem);
    return;
  }

  grid.replaceChildren(...lista.map((video) => criarCardVideo(video, true)));
}

async function carregarVideos() {
  carregando = true;
  mostrarCarregando(grid, 'Carregando vídeos...');

  try {
    videos = await listarVideos();
    carregando = false;
    renderizar();
  } catch (erro) {
    carregando = false;
    mostrarErro(grid, 'Não foi possível carregar os vídeos: ' + erro.message);
  }
}

function aoPesquisar() {
  if (!carregando && videos.length > 0) {
    renderizar();
  }
}

campoBusca.addEventListener('input', aoPesquisar);

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  aoPesquisar();
});

carregarVideos();
