# Etapa 04 — Interatividade com JavaScript

## Objetivo da etapa

Adicionar comportamento dinâmico às interfaces da Etapa 03 utilizando JavaScript puro (sem frameworks ou bibliotecas), incluindo manipulação do DOM, tratamento de eventos, validação de formulários e alteração dinâmica da interface.

**Observação:** nesta etapa, a funcionalidade de comentários em vídeos foi removida do projeto para simplificar o escopo. A página `video.html` manteve apenas a exibição do vídeo e a ação de curtir.

## Funcionalidades interativas implementadas

Foram implementadas 4 funcionalidades interativas, distribuídas em 4 páginas:

### 1. Validação do formulário de login

Ao submeter o formulário de login (`index.html`), o JavaScript intercepta o evento `submit`, impede o envio padrão (`preventDefault`) e valida os campos:

- o **e-mail** deve corresponder a um formato válido (verificado com expressão regular);
- a **senha** deve ter pelo menos 4 caracteres.

Se algum campo for inválido, uma mensagem de erro é inserida dinamicamente abaixo do campo correspondente e o envio é bloqueado. Se ambos os campos forem válidos, o usuário é redirecionado para `home.html`.

**Arquivo envolvido:** `client/js/login.js`

### 2. Pesquisa/filtragem dinâmica de vídeos

Na página inicial (`home.html`), a lista de vídeos públicos é mantida em um array no JavaScript e **renderizada dinamicamente no DOM** ao carregar a página (não existe mais HTML estático para os cards de vídeo).

Ao digitar no campo de busca (evento `input`) ou submeter o formulário de pesquisa, o array de vídeos é filtrado pelo título (case-insensitive) e a lista exibida na tela é atualizada instantaneamente, sem recarregar a página. Quando a pesquisa não encontra nenhum vídeo, uma mensagem de "nenhum vídeo encontrado" é exibida no lugar da lista.

**Arquivo envolvido:** `client/js/home.js`

### 3. Publicação de vídeo com validação e atualização dinâmica

Na página do canal (`channel.html`), o formulário de upload é validado ao ser submetido:

- o **título** deve ter pelo menos 3 caracteres;
- um **arquivo de vídeo** deve ser selecionado.

Cada campo exibe sua própria mensagem de erro, de forma independente — por exemplo, é possível corrigir o título e ver apenas o erro do campo "arquivo" permanecer. Quando o formulário é válido, um novo vídeo é adicionado ao início do array de vídeos do canal e a lista "Meus vídeos" é **re-renderizada dinamicamente**, sem recarregar a página; em seguida o formulário é limpo (`form.reset()`).

**Arquivo envolvido:** `client/js/channel.js`

### 4. Curtir vídeo (alternância de estado)

Na página do vídeo (`video.html`), o botão "Curtir" alterna entre os estados **curtido** e **não curtido** a cada clique, atualizando dinamicamente:

- o texto do botão ("Curtir" ↔ "Curtido");
- a contagem de curtidas (incrementada ou decrementada);
- a aparência do botão (classe CSS `curtido`, que altera a cor de fundo).

**Arquivo envolvido:** `client/js/video.js`

## Principais conceitos de programação utilizados

- **Manipulação do DOM:** `document.getElementById`, `document.createElement`, `innerHTML`, `textContent`, `classList.toggle`, `appendChild`.
- **Tratamento de eventos:** `addEventListener` para `submit`, `input` e `click`; uso de `event.preventDefault()` para controlar o comportamento padrão dos formulários.
- **Funções:** cada arquivo é organizado em pequenas funções com responsabilidade única (ex.: `renderizarVideos`, `filtrarVideos`, `validarFormulario`, `criarCardVideo`).
- **Arrays:** listas de vídeos mantidas em memória como arrays de objetos (`videos`, `meusVideos`).
- **Métodos de iteração:** `forEach` (renderização), `filter` (pesquisa/filtragem).
- **Estado da interface:** variáveis (`curtido`, `totalCurtidas`) controlam o estado exibido no botão de curtir.

## Validações implementadas

| Formulário | Campo | Regra |
|---|---|---|
| Login | E-mail | Deve corresponder ao formato `algo@algo.algo` |
| Login | Senha | Mínimo de 4 caracteres |
| Upload de vídeo | Título | Mínimo de 3 caracteres |
| Upload de vídeo | Arquivo | Deve haver um arquivo selecionado |

Em todos os casos, os formulários usam o atributo `novalidate` para desativar a validação nativa do navegador, garantindo que a validação exibida seja a implementada em JavaScript.

## Situações inválidas tratadas

- Envio do formulário de login com e-mail em formato inválido ou vazio.
- Envio do formulário de login com senha vazia ou muito curta.
- Envio do formulário de upload sem título, com título muito curto, ou com ambos os campos (título e arquivo) inválidos/vazios ao mesmo tempo.
- Envio do formulário de upload sem selecionar nenhum arquivo.
- Pesquisa de vídeo que não retorna nenhum resultado (mensagem de lista vazia em vez de uma lista em branco).

Em todos os casos, o formulário não é enviado/processado até que os dados estejam válidos, e o usuário recebe uma mensagem indicando o que precisa ser corrigido.

## Matriz de evidências

| Requisito | Funcionalidade relacionada | Arquivo(s) | Evidência |
|---|---|---|---|
| Manipulação do DOM | Renderização dinâmica da lista de vídeos e do card de vídeo publicado | `client/js/home.js`, `client/js/channel.js` | `home-lista-inicial.png`; função `criarCardVideo`/`renderizarVideos` em `home.js` e `channel.js` |
| Tratamento de eventos | Envio de formulários (`submit`), digitação na busca (`input`) e clique em curtir (`click`) | `client/js/login.js`, `client/js/home.js`, `client/js/channel.js`, `client/js/video.js` | `home-pesquisa-resultado.png`; `video-depois-curtir.png`; chamadas `addEventListener` em todos os arquivos JS |
| Validação de formulários | Validação de login e de upload de vídeo | `client/js/login.js`, `client/js/channel.js` | `login-erro-validacao.png`; `channel-formulario-vazio.png` |
| Alteração dinâmica da interface | Filtragem de vídeos, publicação de vídeo, curtir | `client/js/home.js`, `client/js/channel.js`, `client/js/video.js` | `home-pesquisa-resultado.png`; `channel-titulo-preenchido.png`; `video-antes-curtir.png` / `video-depois-curtir.png` |
| Uso de funções | Todas as funcionalidades são organizadas em funções nomeadas | `client/js/login.js`, `client/js/home.js`, `client/js/channel.js`, `client/js/video.js` | Funções `validarFormulario`, `renderizarVideos`, `filtrarVideos`, `criarCardVideo`, `atualizarBotao` no código-fonte |
| Uso de arrays | Lista de vídeos públicos e lista de vídeos do canal | `client/js/home.js`, `client/js/channel.js` | Variáveis `videos` e `meusVideos` no início de cada arquivo |
| Métodos de iteração | Filtragem e renderização das listas | `client/js/home.js`, `client/js/channel.js` | Uso de `.filter()` em `filtrarVideos` (`home.js`) e de `.forEach()` em `renderizarVideos`/`renderizarMeusVideos` |
| Tratamento de situações inválidas | Campos inválidos nos formulários e pesquisa sem resultado | `client/js/login.js`, `client/js/channel.js`, `client/js/home.js` | `login-erro-validacao.png`; `channel-formulario-vazio.png`; `home-pesquisa-vazia.png` |

## Evidências do funcionamento

Todas as capturas de tela estão em `docs/evidencias/etapa-04/`:

| Arquivo | O que demonstra |
|---|---|
| `login-erro-validacao.png` | Envio do login com e-mail inválido e senha curta — mensagens de erro exibidas dinamicamente |
| `home-lista-inicial.png` | Lista de vídeos renderizada dinamicamente a partir do array, ao carregar a página |
| `home-pesquisa-resultado.png` | Resultado da pesquisa filtrando pelo termo "CSS" — lista atualizada dinamicamente |
| `home-pesquisa-vazia.png` | Pesquisa sem resultados — mensagem de estado vazio |
| `channel-formulario-vazio.png` | Envio do formulário de upload vazio — erros em título e arquivo |
| `channel-titulo-preenchido.png` | Título corrigido, arquivo ainda ausente — apenas o erro do arquivo permanece (validação independente por campo) |
| `video-antes-curtir.png` | Estado inicial do botão de curtir ("Curtir (128)") |
| `video-depois-curtir.png` | Estado após o clique ("Curtido (129)", com alteração visual do botão) |

## Como executar e testar

Por ser um projeto totalmente estático (HTML, CSS e JavaScript puro, sem back-end), basta abrir os arquivos diretamente no navegador — não é necessário instalar nada.

1. Abra o arquivo `client/index.html` no navegador (duplo clique ou "Abrir com" o navegador de sua preferência).
2. **Testar validação de login:** tente enviar o formulário vazio, ou com um e-mail sem `@`/domínio e uma senha com menos de 4 caracteres — as mensagens de erro devem aparecer. Preencha corretamente e envie para ser redirecionado à página inicial.
3. **Testar pesquisa de vídeos:** na página inicial, digite parte de um título (ex.: "CSS") no campo de pesquisa — a lista deve ser filtrada em tempo real. Digite um termo que não exista (ex.: "xyz") para ver a mensagem de lista vazia. Apague o campo para ver a lista completa novamente.
4. **Testar upload de vídeo:** acesse "Meu canal", tente publicar sem preencher nada — os dois erros devem aparecer. Preencha apenas o título e tente novamente — apenas o erro do arquivo deve restar. Preencha o título e selecione qualquer arquivo de vídeo do computador para ver o novo vídeo aparecer no topo da lista "Meus vídeos".
5. **Testar curtir vídeo:** acesse um vídeo (a partir da lista) e clique no botão "Curtir" — o texto, o contador e a cor do botão devem mudar. Clique novamente para desfazer.

## Estrutura de arquivos após esta etapa

```
/
├── client/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── login.js
│   │   ├── home.js
│   │   ├── channel.js
│   │   └── video.js
│   ├── index.html
│   ├── home.html
│   ├── channel.html
│   └── video.html
├── docs/
│   ├── proposta.md
│   ├── etapa-02.md
│   ├── etapa-03.md
│   ├── etapa-04.md
│   └── evidencias/
│       ├── etapa-03/
│       └── etapa-04/
│           ├── login-erro-validacao.png
│           ├── home-lista-inicial.png
│           ├── home-pesquisa-resultado.png
│           ├── home-pesquisa-vazia.png
│           ├── channel-formulario-vazio.png
│           ├── channel-titulo-preenchido.png
│           ├── video-antes-curtir.png
│           └── video-depois-curtir.png
└── README.md
```
