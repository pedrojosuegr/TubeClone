# TubeClone

Projeto didático de uma plataforma de vídeos inspirada no YouTube, desenvolvido em etapas progressivas: HTML/CSS/JS puro, evoluindo até uma aplicação full-stack com API REST, persistência em banco de dados e framework front-end.

---

## Sobre o projeto

O projeto consiste em uma aplicação web de compartilhamento de vídeos, inspirada no YouTube. A aplicação contará com tela de login, uma tela inicial com lista de vídeos públicos e pesquisa, uma tela de "seu canal" (onde o usuário pode upar vídeos) e a tela de exibição do vídeo.

O objetivo principal não é criar um produto pronto para produção, e sim servir como um projeto de estudo, evoluindo em etapas que cobrem desde a estruturação semântica em HTML até a construção de uma aplicação completa com back-end, persistência e framework front-end.

## Problema

Plataformas de vídeo reais envolvem conceitos centrais de aplicações web modernas — autenticação, listagem e busca de conteúdo, upload de arquivos, relacionamento entre usuários e conteúdos — mas normalmente são grandes demais para servir como primeiro contato com essas tecnologias. Falta um projeto de escopo reduzido que permita exercitar esses conceitos de forma incremental.

## Objetivo

Desenvolver, em etapas, uma aplicação de vídeos simplificada que permita:
- Praticar HTML semântico, CSS responsivo e JavaScript;
- Evoluir para modularização, comunicação assíncrona e consumo de API REST;
- Implementar persistência e operações CRUD com banco de dados;
- Organizar o projeto arquiteturalmente;
- Reescrever a aplicação com um framework front-end;
- Aplicar boas práticas de versionamento, documentação e testes ao longo do processo.

## Principais funcionalidades

- Login de usuário
- Listagem de vídeos públicos
- Pesquisa de vídeos
- Tela de "seu canal", com upload de vídeos
- Tela de exibição do vídeo

## Domínio

Os principais conceitos do sistema são:

```
Usuário
   |
   └── possui
        |
        ▼
      Canal
        |
        └── contém
             |
             ▼
          Vídeo
             |
             ├── recebe
             |    |
             |    ▼
             |  Comentário
             |
             └── recebe
                  |
                  ▼
                Curtida

Usuário
   |
   └── se inscreve em
        |
        ▼
      Canal
```

## Entidades principais

- **Usuário** — quem acessa a aplicação, se autentica e interage com o conteúdo
- **Canal** — pertence a um usuário e reúne os vídeos publicados por ele
- **Vídeo** — conteúdo publicado em um canal, alvo de pesquisa e exibição
- **Comentário** — mensagem associada a um vídeo
- **Curtida** — reação de um usuário a um vídeo
- **Inscrição** — relação entre um usuário e um canal que ele acompanha

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Framework front-end (a definir na etapa correspondente)
- API REST
- Banco de dados (tecnologia específica a definir)

## Arquitetura inicial

A visão inicial da aplicação é:

```
┌───────────────────────────────┐
│           Front-end            │
│                                 │
│        HTML / CSS / JS          │
└───────────────────────────────┘
               |
          HTTP / JSON
               |
               ▼
┌───────────────────────────────┐
│            API REST             │
│                                 │
│        Node.js / Express        │
└───────────────────────────────┘
               |
               ▼
┌───────────────────────────────┐
│         Regras de negócio        │
│                                 │
│  Autenticação, Upload de vídeo,  │
│  Pesquisa, Inscrições, Curtidas   │
└───────────────────────────────┘
               |
               ▼
┌───────────────────────────────┐
│           Persistência           │
│     (banco de dados a definir)   │
└───────────────────────────────┘
```

## Estrutura prevista do projeto

```
/
├── client/    → aplicação front-end
├── server/    → API e regras de negócio
├── docs/      → documentação (proposta e diagrama inicial)
└── README.md
```

## Escopo inicial

**Incluído inicialmente:**
- Login simples de usuário
- Listagem e pesquisa de vídeos públicos
- Tela de canal com upload de vídeo
- Tela de exibição de vídeo

**Não incluído inicialmente** (podem ser avaliados em etapas futuras):
- Recomendação de vídeos
- Notificações
- Monetização
- Moderação de conteúdo
- Aplicativo mobile

## Desenvolvimento

O desenvolvimento seguirá as etapas descritas na seção de Versionamento, avançando de um protótipo estático até uma aplicação completa com API, persistência e framework front-end.

## Versionamento

O projeto será dividido em 10 etapas:

| Etapa | Objetivo |
|-------|----------|
| 01 | Proposta e especificação |
| 02 | Protótipo estrutural com HTML semântico |
| 03 | Interface responsiva com CSS |
| 04 | Interatividade com JavaScript |
| 05 | Modularização e comunicação assíncrona |
| 06 | API REST |
| 07 | Persistência e CRUD com banco de dados |
| 08 | Organização arquitetural |
| 09 | Aplicação com framework front-end |
| 10 | Qualidade, versionamento e release candidate |

O projeto utilizará Git durante todo o desenvolvimento.

## Documentação

A documentação ficará na pasta `docs/`, e a documentação inicial será o arquivo `docs/proposta.md`.

## Execução

*(Ainda não há instruções de execução.)*

Nesta seção serão adicionadas, futuramente, as instruções para rodar o projeto localmente.

## Testes

Os testes serão implementados conforme as funcionalidades forem sendo desenvolvidas.

## Decisões e limitações

Algumas decisões ainda não foram tomadas, como a tecnologia específica do banco de dados a ser utilizada. Essas decisões serão registradas e atualizadas conforme o projeto avançar.

## Responsabilidade sobre as informações

Esta aplicação tem finalidades exclusivamente didáticas e funcionais. Não deve ser utilizada como produto real, e nenhum conteúdo, dado de usuário ou vídeo hospedado deve ser tratado como confiável ou de produção.

## Licença

A licença do projeto será definida posteriormente.
