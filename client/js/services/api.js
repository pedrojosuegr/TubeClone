// js/services/api.js
// Camada de acesso a dados. É o ÚNICO módulo que sabe de onde os dados vêm.
// Hoje: arquivo JSON local (consulta) + serviço simulado (publicação).
// Na Etapa 06, basta trocar o interior destas funções por chamadas à API REST;
// as páginas não precisam mudar.

const URL_VIDEOS = new URL('../../data/videos.json', import.meta.url);
const LATENCIA_MS = 800; // simula o tempo de resposta de um servidor real

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Para demonstrar o tratamento de erro: abrir a página com ?simular=erro-consulta
// ou ?simular=erro-publicacao na URL.
function simulacaoAtiva(tipo) {
  return new URLSearchParams(window.location.search).get('simular') === tipo;
}

// Operação de CONSULTA (GET): busca a lista de vídeos com fetch.
export async function listarVideos() {
  await esperar(LATENCIA_MS);

  if (simulacaoAtiva('erro-consulta')) {
    throw new Error('falha simulada na consulta.');
  }

  let resposta;
  try {
    resposta = await fetch(URL_VIDEOS);
  } catch (erro) {
    throw new Error('não foi possível conectar ao servidor.');
  }

  if (!resposta.ok) {
    throw new Error('o servidor respondeu com status ' + resposta.status + '.');
  }

  return resposta.json();
}

// Operação SUBMETIDA ao serviço simulado (POST): "grava" um vídeo e devolve
// o registro criado, como um servidor faria.
export async function publicarVideo(dados) {
  await esperar(LATENCIA_MS);

  if (simulacaoAtiva('erro-publicacao')) {
    throw new Error('falha simulada na publicação.');
  }

  return {
    id: Date.now(),
    titulo: dados.titulo,
    descricao: dados.descricao,
    canal: dados.canal,
    data: new Date().toLocaleDateString('pt-BR')
  };
}
