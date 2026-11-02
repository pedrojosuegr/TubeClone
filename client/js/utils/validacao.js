// js/utils/validacao.js
// Regras de validação, sem acesso ao DOM. Devolve um objeto com as
// mensagens de erro; objeto vazio significa "tudo válido".

export function validarUpload(titulo, quantidadeArquivos) {
  const erros = {};

  if (titulo.trim().length < 3) {
    erros.titulo = 'O título deve ter pelo menos 3 caracteres.';
  }
  if (quantidadeArquivos === 0) {
    erros.arquivo = 'Selecione um arquivo de vídeo.';
  }

  return erros;
}
