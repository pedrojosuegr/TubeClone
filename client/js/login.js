// js/login.js
// Responsável pela validação do formulário de login (Etapa 04).

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('login-form');
  var campoEmail = document.getElementById('email');
  var campoSenha = document.getElementById('senha');
  var erroEmail = document.getElementById('erro-email');
  var erroSenha = document.getElementById('erro-senha');

  function emailValido(valor) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  function limparErros() {
    erroEmail.textContent = '';
    erroSenha.textContent = '';
  }

  function validarFormulario() {
    limparErros();
    var valido = true;

    if (!emailValido(campoEmail.value.trim())) {
      erroEmail.textContent = 'Informe um e-mail válido.';
      valido = false;
    }

    if (campoSenha.value.trim().length < 4) {
      erroSenha.textContent = 'A senha deve ter pelo menos 4 caracteres.';
      valido = false;
    }

    return valido;
  }

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (validarFormulario()) {
      window.location.href = 'home.html';
    }
  });
});
