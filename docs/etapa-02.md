# Etapa 02: Protótipo estrutural com HTML semântico

## Objetivo da etapa

Transformar a proposta do projeto (Etapa 01) em uma primeira interface Web, utilizando HTML semântico, sem lógica de aplicação, banco de dados, API ou autenticação real.

## Funcionalidades implementadas

Nesta etapa foi implementada apenas a **estrutura estática** das telas do sistema, representando o fluxo previsto para o TubeClone. Não há lógica de aplicação, validação real, persistência ou integração com servidor — os formulários e links apontam para os próprios arquivos ou para `#`, apenas para ilustrar a navegação prevista.

Estruturas representadas:

- formulário de login;
- pesquisa de vídeos por título (campo de busca, sem lógica de filtragem);
- listagem de vídeos públicos;
- formulário de publicação (upload) de vídeo no canal;
- listagem dos vídeos do próprio canal;
- exibição de um vídeo, com player (`<video>`), descrição e botão de curtir (sem funcionalidade real);
- formulário e listagem de comentários de um vídeo.

## Páginas criadas

Foram criadas 4 páginas, dentro da pasta `client/`:

| Arquivo | Descrição |
|---|---|
| `client/index.html` | Tela de login |
| `client/home.html` | Página inicial, com pesquisa e listagem de vídeos públicos |
| `client/channel.html` | Canal do usuário, com formulário de upload e lista de vídeos publicados |
| `client/video.html` | Exibição de um vídeo, com comentários |

Todas as páginas internas (exceto o login) compartilham a mesma navegação (`Início`, `Meu canal`, `Sair`), simulando a navegação real da aplicação.

## Decisões relacionadas à estrutura HTML

- **`header`** foi utilizado em todas as páginas para o título da aplicação e, quando aplicável, a navegação principal (`nav`).
- **`nav`** foi incluído apenas nas páginas internas (`home.html`, `channel.html`, `video.html`), já que a tela de login antecede o acesso à aplicação.
- **`main`** envolve o conteúdo principal e único de cada página.
- **`section`** foi usada para agrupar blocos de conteúdo com propósitos distintos dentro da mesma página (ex.: pesquisa e listagem de vídeos em `home.html`; dados do canal, upload e lista de vídeos em `channel.html`; vídeo e comentários em `video.html`).
- **`article`** foi usada para conteúdo que se repete e que faz sentido de forma independente — cada vídeo listado, cada comentário e o próprio vídeo em exibição.
- **`form`**, **`label`** e **`button`** foram usados em todos os formulários (login, pesquisa, upload de vídeo e envio de comentário), garantindo que cada campo (`input`/`textarea`) tenha um `label` associado via atributo `for`/`id`.
- **`footer`** foi repetido em todas as páginas com uma informação simples de rodapé.
- Cada `section`/`article` recebeu um título (`h2`/`h3`) associado via `aria-labelledby`, reforçando a semântica e a acessibilidade da estrutura.
- Não foi utilizado nenhum framework, CSS ou JavaScript nesta etapa, conforme previsto — o foco foi exclusivamente a estrutura HTML.

## Estrutura de arquivos após esta etapa

```
/
├── client/
│   ├── index.html
│   ├── home.html
│   ├── channel.html
│   └── video.html
├── docs/
│   ├── proposta.md
│   └── etapa-02.md
└── README.md
```
