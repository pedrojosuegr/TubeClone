# TubeClone — Plataforma de Compartilhamento de Vídeos

## 1. Proposta

O TubeClone é uma aplicação Web inspirada no YouTube, destinada ao compartilhamento e à visualização de vídeos entre usuários.

A aplicação permitirá que o usuário se autentique, mantenha um canal próprio, publique vídeos nesse canal e interaja com o conteúdo publicado por outros usuários, seja assistindo, pesquisando, curtindo, comentando ou se inscrevendo em canais.

Além da publicação e do consumo de vídeos, o sistema disponibilizará uma listagem pública com pesquisa, permitindo que qualquer vídeo publicado seja encontrado e assistido.

A aplicação terá como foco os conceitos fundamentais de uma plataforma de vídeos, não tendo como objetivo competir com um serviço real de streaming ou substituir suas funcionalidades de produção, moderação e distribuição em larga escala.

## 2. Problema

Compartilhar vídeos entre usuários envolve uma série de conceitos comuns a diversas aplicações web modernas — autenticação, upload de arquivos, listagem e pesquisa de conteúdo, relacionamento entre usuários e conteúdos, interações sociais (curtidas, comentários, inscrições) — mas plataformas reais de vídeo são grandes e complexas demais para servir como primeiro contato com essas tecnologias.

Falta um projeto de escopo reduzido que permita exercitar, de forma progressiva, os principais conceitos envolvidos na construção de uma plataforma desse tipo.

O TubeClone pretende reproduzir, em escala reduzida, o fluxo essencial de uma plataforma de vídeos, permitindo que cada conceito seja implementado e compreendido separadamente ao longo do desenvolvimento.

## 3. Público-alvo

O público-alvo deste projeto são estudantes e desenvolvedores em formação que desejam praticar, de forma incremental, os principais conceitos de desenvolvimento web full-stack:

- estruturação de interfaces;
- estilização e responsividade;
- interatividade no front-end;
- consumo de API REST;
- persistência de dados;
- organização arquitetural de um projeto full-stack.

Como aplicação fictícia, também serve a qualquer usuário que queira experimentar um fluxo simplificado de publicação e consumo de vídeos.

## 4. Objetivo

### 4.1 Objetivo principal

Desenvolver uma aplicação Web que permita ao usuário se autenticar, manter um canal, publicar vídeos e consumir os vídeos publicados por outros usuários, com pesquisa e interações básicas.

### 4.2 Objetivos secundários

A aplicação deverá:

- permitir a autenticação do usuário;
- manter um canal associado a cada usuário;
- permitir a publicação (upload) de vídeos;
- disponibilizar uma listagem pública de vídeos, com pesquisa;
- permitir a exibição individual de um vídeo;
- permitir interações básicas, como curtidas, comentários e inscrições em canais.

## 5. Funcionalidades

A aplicação deverá possuir inicialmente as seguintes funcionalidades:

### 5.1 Autenticação de usuário

Permitir que o usuário realize login na aplicação.

Um usuário deverá possuir, inicialmente:

- nome;
- e-mail;
- senha;
- canal associado.

### 5.2 Canal do usuário

Cada usuário possuirá um canal, onde poderá gerenciar os vídeos que publicou.

Um canal deverá possuir, inicialmente:

- nome do canal;
- usuário proprietário;
- lista de vídeos publicados.

### 5.3 Upload de vídeo

Permitir que o usuário publique um vídeo em seu canal.

Um vídeo deverá possuir, inicialmente:

- título;
- descrição;
- arquivo (ou referência ao arquivo);
- canal de origem;
- data de publicação.

### 5.4 Listagem e pesquisa de vídeos

Disponibilizar uma tela inicial com a listagem dos vídeos públicos, permitindo pesquisar por título.

A listagem deverá apresentar, para cada vídeo:

- título;
- canal;
- data de publicação;
- miniatura (thumbnail).

### 5.5 Exibição de vídeo

Permitir assistir a um vídeo específico, apresentando também suas informações e interações associadas.

### 5.6 Curtidas

Permitir que um usuário curta um vídeo.

### 5.7 Comentários

Permitir que um usuário comente em um vídeo.

Um comentário deverá possuir, inicialmente:

- autor;
- vídeo relacionado;
- texto;
- data.

### 5.8 Inscrição em canal

Permitir que um usuário se inscreva em um canal para acompanhá-lo.

## 6. Entidades e conceitos do domínio

### 6.1 Usuário

Pessoa que utiliza a aplicação, autentica-se, possui um canal e interage com os vídeos publicados.

### 6.2 Canal

Pertence a um usuário e reúne os vídeos publicados por ele.

### 6.3 Vídeo

Conteúdo publicado em um canal, alvo de listagem, pesquisa e exibição.

### 6.4 Comentário

Mensagem associada a um vídeo, feita por um usuário.

### 6.5 Curtida

Reação de um usuário a um vídeo.

### 6.6 Inscrição

Relação entre um usuário e um canal que ele acompanha.

## 7. Interfaces previstas

### 7.1 Tela de login

Tela inicial de acesso à aplicação, onde o usuário se autentica.

### 7.2 Tela de vídeos (página inicial)

Tela apresentada após o login, com:

- listagem dos vídeos públicos;
- campo de pesquisa por título.

### 7.3 Tela do canal

Tela destinada ao próprio canal do usuário, onde ele poderá:

- visualizar os vídeos já publicados;
- publicar (upar) um novo vídeo.

### 7.4 Tela do vídeo

Tela destinada à exibição de um vídeo específico, apresentando:

- player de vídeo;
- título e descrição;
- curtidas;
- comentários.

## 8. Operações previstas

As principais operações da aplicação serão:

1. Realizar login.
2. Consultar vídeos públicos.
3. Pesquisar vídeos por título.
4. Publicar (upar) um vídeo no próprio canal.
5. Assistir a um vídeo.
6. Curtir um vídeo.
7. Comentar em um vídeo.
8. Inscrever-se em um canal.

## 9. Tecnologias pretendidas

### 9.1 Cliente

Tecnologias inicialmente previstas:

- HTML5;
- CSS3;
- JavaScript;
- framework front-end (a definir na etapa correspondente).

A escolha poderá ser alterada durante o desenvolvimento.

### 9.2 Servidor

Tecnologias inicialmente previstas:

- Node.js;
- Express;
- JavaScript ou TypeScript;
- API REST;
- JSON.

### 9.3 Persistência

Será utilizado um banco de dados para armazenamento persistente das informações.

A tecnologia específica ainda não foi definida e será decidida durante a implementação.

A escolha deverá considerar principalmente os relacionamentos entre:

- usuários;
- canais;
- vídeos;
- comentários;
- curtidas;
- inscrições.

## 10. Diagrama inicial

```
┌──────────────────────┐
│       USUÁRIO         │
│                       │
│  Publica vídeos       │
│  Assiste vídeos       │
│  Comenta e curte      │
│  Se inscreve em canais│
└──────────┬────────────┘
           │
           ▼
┌──────────────────────┐
│    FRONT-END WEB       │
│                       │
│ Login                 │
│ Lista de vídeos        │
│ Canal                 │
│ Vídeo                 │
└──────────┬────────────┘
           │
           │ HTTP / JSON
           ▼
┌──────────────────────┐
│       API REST         │
│                       │
│ Usuários               │
│ Canais                 │
│ Vídeos                 │
│ Comentários             │
│ Curtidas               │
│ Inscrições              │
└──────────┬────────────┘
           │
           ▼
┌──────────────────────┐
│   REGRAS DE NEGÓCIO    │
│                       │
│ Autenticação           │
│ Upload de vídeo         │
│ Pesquisa               │
│ Interações sociais      │
└──────────┬────────────┘
           │
           ▼
┌──────────────────────┐
│     BANCO DE DADOS     │
│                       │
│ Usuários               │
│ Canais                 │
│ Vídeos                 │
└──────────────────────┘
```

O diagrama representa a visão inicial da solução. A arquitetura poderá ser refinada durante as etapas posteriores.

## 11. Escopo inicial

### Dentro do escopo

- autenticação (login) de usuário;
- criação de canal associado ao usuário;
- upload de vídeo;
- listagem pública de vídeos;
- pesquisa de vídeos por título;
- exibição individual de vídeo;
- curtidas em vídeos;
- comentários em vídeos;
- inscrição em canais.

### Fora do escopo inicial

- cadastro de novo usuário (registro) com verificação completa (e-mail, recuperação de senha, etc.);
- recomendação de vídeos;
- notificações;
- monetização;
- moderação de conteúdo;
- transcodificação e múltiplas qualidades de vídeo;
- transmissão ao vivo (live streaming);
- edição de vídeo dentro da aplicação;
- aplicativo mobile.

Essas funcionalidades poderão ser consideradas futuramente, mas não fazem parte do escopo inicial.

## 12. Premissas e limitações

O sistema será inicialmente orientado ao conteúdo cadastrado pelos próprios usuários.

O upload de vídeo poderá ser tratado, nas etapas iniciais, de forma simplificada (por exemplo, armazenamento local do arquivo), sem os mecanismos de processamento usados por plataformas reais.

A aplicação não terá finalidade comercial nem substituirá um serviço real de streaming de vídeos.

A disponibilidade de recursos como qualidade adaptativa de vídeo ou distribuição via CDN não está prevista no escopo deste projeto.

## 13. Evolução prevista

O projeto será desenvolvido de forma incremental.

A evolução prevista é:

1. estruturação das interfaces com HTML semântico;
2. estilização e responsividade com CSS;
3. implementação de interatividade com JavaScript;
4. modularização e comunicação assíncrona;
5. implementação da API REST;
6. persistência em banco de dados;
7. organização arquitetural;
8. implementação do front-end com framework moderno;
9. integração completa entre front-end, API e banco;
10. revisão, documentação, testes e preparação da versão final.

O objetivo é que cada etapa acrescente uma capacidade relevante à mesma aplicação.

## 14. Limitações conhecidas

Nesta versão inicial ainda não estão definidas:

- a tecnologia específica do banco de dados;
- a estratégia de armazenamento dos arquivos de vídeo;
- os mecanismos de autenticação;
- o formato e o tamanho máximo permitido para upload;
- a arquitetura final do servidor.

Essas decisões serão refinadas durante o desenvolvimento.

## 15. Critérios de sucesso da proposta

A proposta será considerada bem-sucedida se permitir desenvolver uma aplicação Web funcional capaz de:

- autenticar usuários;
- manter canais e vídeos publicados;
- listar e pesquisar vídeos públicos;
- exibir vídeos individualmente;
- registrar curtidas, comentários e inscrições;
- evoluir progressivamente conforme os conteúdos da disciplina;
- manter separação adequada entre interface, servidor, regras de negócio e persistência.
