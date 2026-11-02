# Etapa 05 — Modularização e comunicação assíncrona

## Objetivo

Separar o JavaScript em módulos e consumir dados de forma assíncrona (Fetch API, Promises e `async/await`), com tratamento de carregamento, sucesso e erro.

## Como executar

Módulos ES e `fetch` não funcionam abrindo o HTML direto do disco (`file://`); é preciso servir por HTTP. Com a extensão **Live Server** do VS Code: botão direito em `client/index.html` → *Open with Live Server*. Alternativa: `cd client && python3 -m http.server 8000` e abrir `http://localhost:8000`.

## Estrutura de módulos

```
client/js/
├── home.js            ← página inicial (consulta + pesquisa)
├── channel.js         ← página do canal (consulta + publicação)
├── login.js, video.js ← inalterados desde a Etapa 04
├── services/api.js    ← acesso a dados (fetch + serviço simulado)
├── components/
│   ├── videoCard.js   ← monta o card de um vídeo
│   └── status.js      ← mensagens de carregando / erro / sucesso / vazio
└── utils/validacao.js ← validação do formulário de upload
```

As páginas `home.html` e `channel.html` carregam seu script com `<script type="module">`; o restante vem por `import`.

## Fonte de dados (`services/api.js`)

| Operação | Mecanismo |
|---|---|
| Consulta — `listarVideos()` | `fetch` sobre o arquivo `client/data/videos.json` (mock de dados) |
| Publicação — `publicarVideo()` | Serviço simulado: função `async` que devolve o registro "criado" |

As duas aguardam 800 ms antes de responder, para o estado de carregamento ficar visível. Na Etapa 06, só o interior dessas funções muda para chamar a API REST.

## Fluxos

**Consulta (home e canal):** mostra "Carregando..." → `await listarVideos()` → em sucesso renderiza os cards; em erro mostra a mensagem com o motivo.

**Publicação (canal):** valida o formulário → botão vira "Publicando..." e fica desabilitado → `await publicarVideo()` → em sucesso o vídeo entra no topo da lista, o formulário é limpo e aparece "Vídeo publicado com sucesso!"; em erro aparece a mensagem, a lista não muda e o texto digitado é preservado. O botão é reabilitado em ambos os casos (`finally`).

## Como testar os erros

| URL | Efeito |
|---|---|
| `home.html?simular=erro-consulta` | A consulta de vídeos falha na home |
| `channel.html?simular=erro-consulta` | A consulta falha no canal |
| `channel.html?simular=erro-publicacao` | A consulta funciona e a publicação falha |

Uma falha real de rede ou resposta HTTP de erro no `fetch` também cai no mesmo tratamento.

## Observações

- Os cards usam `textContent` (e não `innerHTML`): como o título agora vem de um formulário, ele nunca deve ser interpretado como HTML.
- Os vídeos publicados existem só na página aberta; persistência fica para a Etapa 07.
