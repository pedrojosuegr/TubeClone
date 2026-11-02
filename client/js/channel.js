// js/channel.js — ponto de entrada da página do canal.
// Consulta os vídeos do canal e publica novos vídeos pelo serviço,
// tratando carregamento, sucesso e erro nas duas operações.
import { listarVideos, publicarVideo } from './services/api.js';
import { validarUpload } from './utils/validacao.js';
import { criarCardVideo } from './components/videoCard.js';
import {
  mostrarCarregando,
  mostrarErro,
  mostrarSucesso,
  mostrarVazio,
  limpar
} from './components/status.js';

const NOME_CANAL = 'Canal de Pedro';

const form = document.getElementById('upload-form');
const campoTitulo = document.getElementById('titulo');
const campoDescricao = document.getElementById('descricao');
const campoArquivo = document.getElementById('arquivo');
const erroTitulo = document.getElementById('erro-titulo');
const erroArquivo = document.getElementById('erro-arquivo');
const botaoPublicar = document.getElementById('botao-publicar');
const statusUpload = document.getElementById('upload-status');
const grid = document.getElementById('meus-videos-grid');

let meusVideos = [];

function renderizarMeusVideos() {
  if (meusVideos.length === 0) {
    mostrarVazio(grid, 'Você ainda não publicou nenhum vídeo.');
    return;
  }

  grid.replaceChildren(...meusVideos.map((video) => criarCardVideo(video, false)));
}

async function carregarMeusVideos() {
  mostrarCarregando(grid, 'Carregando seus vídeos...');

  try {
    const todos = await listarVideos();
    meusVideos = todos.filter((video) => video.canal === NOME_CANAL);
    renderizarMeusVideos();
  } catch (erro) {
    mostrarErro(grid, 'Não foi possível carregar seus vídeos: ' + erro.message);
  }
}

function definirPublicando(publicando) {
  botaoPublicar.disabled = publicando;
  botaoPublicar.textContent = publicando ? 'Publicando...' : 'Publicar';
}

form.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  limpar(statusUpload);

  const erros = validarUpload(campoTitulo.value, campoArquivo.files.length);
  erroTitulo.textContent = erros.titulo || '';
  erroArquivo.textContent = erros.arquivo || '';

  if (Object.keys(erros).length > 0) {
    return;
  }

  definirPublicando(true);
  mostrarCarregando(statusUpload, 'Enviando vídeo...');

  try {
    const novoVideo = await publicarVideo({
      titulo: campoTitulo.value.trim(),
      descricao: campoDescricao.value.trim(),
      canal: NOME_CANAL
    });

    meusVideos.unshift(novoVideo);
    renderizarMeusVideos();
    form.reset();
    mostrarSucesso(statusUpload, 'Vídeo publicado com sucesso!');
  } catch (erro) {
    mostrarErro(statusUpload, 'Não foi possível publicar o vídeo: ' + erro.message);
  } finally {
    definirPublicando(false);
  }
});

carregarMeusVideos();
