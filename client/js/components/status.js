// js/components/status.js
// Mensagens de estado da interface: carregando, erro, sucesso e vazio.
// Cada função substitui o conteúdo do container recebido.

function criarMensagem(classe, texto, papel) {
  const p = document.createElement('p');
  p.className = 'status ' + classe;
  p.setAttribute('role', papel);
  p.textContent = texto;
  return p;
}

export function mostrarCarregando(container, texto) {
  container.replaceChildren(criarMensagem('status-loading', texto, 'status'));
}

export function mostrarSucesso(container, texto) {
  container.replaceChildren(criarMensagem('status-success', texto, 'status'));
}

export function mostrarVazio(container, texto) {
  container.replaceChildren(criarMensagem('empty-state', texto, 'status'));
}

export function mostrarErro(container, texto) {
  container.replaceChildren(criarMensagem('status-error', texto, 'alert'));
}

export function limpar(container) {
  container.replaceChildren();
}
