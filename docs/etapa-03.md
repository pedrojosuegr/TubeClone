# Etapa 03: Interface responsiva com CSS

## Objetivo da etapa

Transformar a estrutura HTML da Etapa 02 em uma interface visualmente organizada e responsiva, utilizando CSS puro (sem frameworks), com Flexbox, CSS Grid e media queries.

## Interfaces apresentadas

A Etapa 02 resultou em 4 páginas (`index.html`, `home.html`, `channel.html`, `video.html`). Para esta etapa, todas as páginas receberam estilização e comportamento responsivo, mas as evidências solicitadas (capturas de tela) foram registradas para as **3 interfaces mais representativas do domínio** da aplicação:

| Identificador da evidência | Página | Descrição |
|---|---|---|
| `tela-01` | `client/home.html` | Página inicial — pesquisa e listagem pública de vídeos |
| `tela-02` | `client/channel.html` | Canal do usuário — dados do canal, upload de vídeo e lista de vídeos publicados |
| `tela-03` | `client/video.html` | Exibição de vídeo — player, descrição, curtida e comentários |

A tela de login (`index.html`) também foi estilizada (com um cartão centralizado, responsivo em qualquer tamanho de tela), mas não foi incluída no conjunto de evidências por não representar diretamente o domínio de vídeos — apenas o acesso à aplicação.

## Viewport utilizado em cada evidência

Todas as 9 evidências foram geradas nos três viewports padronizados solicitados, para as 3 interfaces acima:

| Viewport | Largura × Altura | Arquivos |
|---|---|---|
| Desktop | 1440 × 900 px | `desktop-tela-01.png`, `desktop-tela-02.png`, `desktop-tela-03.png` |
| Tablet | 768 × 1024 px | `tablet-tela-01.png`, `tablet-tela-02.png`, `tablet-tela-03.png` |
| Smartphone | 390 × 844 px | `smartphone-tela-01.png`, `smartphone-tela-02.png`, `smartphone-tela-03.png` |

Todos os arquivos estão em `docs/evidencias/etapa-03/`.

## Breakpoints utilizados

O CSS utiliza dois breakpoints principais, definidos em `client/css/style.css`:

- **`@media (max-width: 1024px)`** — ajustes para tablets (reduz espaçamentos gerais e diminui a largura mínima das colunas da grade de vídeos).
- **`@media (max-width: 600px)`** — ajustes para smartphones (menu de navegação empilhado verticalmente, formulário de pesquisa em coluna, grade de vídeos em coluna única, botões ocupando a largura total).

O viewport de 768px (tablet) aciona o primeiro breakpoint; o de 390px (smartphone) aciona ambos, com o segundo sobrescrevendo o necessário, seguindo o efeito cascata do CSS.

## Principais decisões de responsividade

- **Mobile-last via cascata:** o layout base (desktop) foi escrito primeiro, e os ajustes para telas menores foram sobrepostos via media queries, sobrescrevendo apenas o que muda em cada faixa.
- **Flexbox** foi usado no cabeçalho (`header-inner`), na navegação (`nav-list`), nos formulários e nos cartões, permitindo alinhamento, reordenação e empilhamento simples entre linha (desktop) e coluna (mobile).
- **CSS Grid**, com fallback: a listagem de vídeos (`.video-grid`) usa `display: flex; flex-wrap: wrap;` como base e é aprimorada com `display: grid; grid-template-columns: repeat(auto-fill, minmax(...))` dentro de um bloco `@supports (display: grid)`. Isso garante que, em qualquer navegador que suporte Grid, as colunas se ajustem automaticamente conforme o espaço disponível — reduzindo o tamanho mínimo da coluna em telas menores — e usa o Flexbox com quebra de linha (fallback) caso a Grid não seja suportada, mostrando uma solução robusta sem quebrar o layout.
- **Formulário de pesquisa** (`home.html`) fica lado a lado (campo + botão) no desktop e empilhado em coluna no smartphone.
- **Menu de navegação** fica em linha no desktop/tablet e em coluna, ocupando a largura inteira, no smartphone.
- **Variáveis CSS (`:root`)** centralizam cores, espaçamentos e raio de borda, garantindo espaçamento consistente em toda a aplicação e facilitando ajustes futuros.
- **Cartões (`.video-card`, `.comment-card`)** usam a mesma linguagem visual (borda, raio, padding) em todas as páginas, mantendo consistência.
- **Botões em largura total no mobile:** em telas pequenas, todos os botões passam a ocupar 100% da largura disponível, facilitando o toque em dispositivos móveis.
- **`<meta name="viewport">`** foi adicionado em todas as páginas, requisito básico para que a responsividade funcione corretamente em dispositivos reais.

## Localização dos arquivos CSS responsáveis pela responsividade

Todo o CSS do projeto está centralizado em um único arquivo, organizado por seções internas (comentadas):

```
client/css/style.css
```

Seções do arquivo:

1. Variáveis (design tokens)
2. Reset básico
3. Layout global (header, nav, main, footer)
4. Formulários e botões
5. Página de login
6. Página inicial (busca + listagem de vídeos)
7. Página do canal (upload + lista de vídeos)
8. Página do vídeo (player + comentários)
9. Media queries (breakpoints responsivos)

Todas as páginas HTML referenciam o mesmo arquivo através de:

```html
<link rel="stylesheet" href="css/style.css">
```

## Estrutura de arquivos após esta etapa

```
/
├── client/
│   ├── css/
│   │   └── style.css
│   ├── index.html
│   ├── home.html
│   ├── channel.html
│   └── video.html
├── docs/
│   ├── proposta.md
│   ├── etapa-02.md
│   ├── etapa-03.md
│   └── evidencias/
│       └── etapa-03/
│           ├── desktop-tela-01.png
│           ├── desktop-tela-02.png
│           ├── desktop-tela-03.png
│           ├── tablet-tela-01.png
│           ├── tablet-tela-02.png
│           ├── tablet-tela-03.png
│           ├── smartphone-tela-01.png
│           ├── smartphone-tela-02.png
│           └── smartphone-tela-03.png
└── README.md
```
