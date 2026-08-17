<div align="center">
  <img src="./src/app/favicon.ico" alt="Portfolio" width="80" />

  <p>
    <strong>Maria Eduarda Marinho Schwarz — Portfolio</strong>
  </p>

  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white" />
  <img src="https://img.shields.io/badge/Testing_Library-E33332?style=flat-square&logo=testing-library&logoColor=white" />
</div>

<div align="center">
  <a href="https://maduportifolio.vercel.app/">
    Acesse o portfólio online
  </a>

  <br>

</div>

## Sessões

* [👩🏻‍💻 Sobre o projeto](#-sobre-o-projeto)
* [✨ Funcionalidades](#-funcionalidades)
* [🏗️ Arquitetura](#️-arquitetura)
* [🎨 Design System e UI/UX](#-design-system-e-uiux)
* [🧪 Testes](#-testes)
* [⚙️ Decisões técnicas](#️-decisões-técnicas)
* [💻 Como executar](#-como-executar)

## 👩🏻‍💻 Sobre o projeto

Este é meu portfólio pessoal, desenvolvido para apresentar minha experiência profissional, projetos, habilidades e tecnologias com as quais trabalho como **Engenheira de Software Front-End**.

Além de ser uma apresentação profissional, o projeto também foi desenvolvido para aplicar conceitos de desenvolvimento Front-End, como arquitetura de componentes, UI/UX, acessibilidade, internacionalização e testes.

O portfólio possui suporte para dois idiomas:

* **Português (Brasil)**
* **Inglês**

## ✨ Funcionalidades

* Suporte a **Português (Brasil)** e **Inglês**.
* Alternância entre tema claro e escuro.
* Interface responsiva.
* Seção de apresentação profissional.
* Seção de experiência profissional.
* Seção de projetos.
* Seção de habilidades e tecnologias.
* Seção de contato.
* Links para projetos, GitHub e outras plataformas profissionais.
* Componentes reutilizáveis.
* Animações e microinterações.
* Testes automatizados para componentes com lógica ou interação.
* Interface desenvolvida com foco em acessibilidade.

## 🏗️ Arquitetura
### Components

A pasta `components` concentra os componentes reutilizáveis da aplicação.

Os componentes são divididos conforme sua responsabilidade, evitando concentrar diferentes comportamentos em componentes muito grandes.

Entre eles estão:

* Componentes de layout.
* Componentes de navegação.
* Cards.
* Botões.
* Componentes de timeline.
* Outros componentes reutilizáveis de UI.

### Features

A pasta `features` concentra as principais seções do portfólio.

Cada feature representa uma parte específica da aplicação, mantendo suas responsabilidades separadas.

Exemplos:

* Presentation.
* AboutMe.
* Experience.
* Projects.
* Skills.
* Contact.

Essa organização facilita a manutenção e permite que cada seção evolua de forma independente.

### Context

A **Context API** é utilizada para compartilhar informações relacionadas ao idioma da aplicação.

O `LanguageContext` centraliza as traduções utilizadas pelos componentes e permite alternar entre Português e English sem precisar passar essas informações manualmente por diferentes níveis de componentes.

### Theme Provider

O projeto utiliza [`next-themes`](https://github.com/pacocoursey/next-themes) para gerenciar a alternância entre os temas claro e escuro.

O `ThemeProvider` centraliza essa configuração e utiliza o atributo `class` para permitir que o tema seja aplicado através das classes do Tailwind CSS.

O tema escuro é definido como padrão e a preferência do sistema operacional não é utilizada, mantendo o controle do tema dentro da aplicação.


### Types

A pasta `types` centraliza as tipagens utilizadas pela aplicação.

Experiências profissionais, projetos e outras estruturas possuem seus próprios tipos, mantendo os dados e componentes devidamente tipados com TypeScript.

### Data

Os dados estáticos utilizados pelo portfólio são mantidos separados dos componentes.

Essa abordagem evita concentrar grandes objetos diretamente na interface e facilita a manutenção do conteúdo.

## 🎨 Design System e UI/UX

O design do portfólio segue uma proposta mais escura, minimalista e com roxo como cor principal. A ideia foi criar uma interface que tivesse personalidade, mas que continuasse simples de navegar.

### Identidade visual

Alguns dos principais elementos do visual são:

* Tema escuro.
* Roxo como cor principal e de destaque.
* Contraste entre fundos, textos e elementos interativos.
* Bordas e efeitos de brilho usados nos detalhes.
* Tipografia com diferentes pesos e tamanhos para criar hierarquia.

### Componentização

A interface foi dividida em componentes para facilitar a reutilização e manter um padrão visual entre as seções.

Entre eles estão:

* Botões.
* Cards de projetos.
* Cards de experiência.
* Timeline.
* Header.
* Footer.
* Componentes de navegação.
* Componentes de tema e idioma.

### Responsividade

O layout foi pensado para funcionar em diferentes tamanhos de tela.

Alguns elementos que mudam de acordo com o espaço disponível são:

* Grid de projetos.
* Cards.
* Navegação.
* Espaçamentos.
* Tamanhos de fonte.
* Organização das seções.

### Acessibilidade

Também considerei acessibilidade durante o desenvolvimento, principalmente na estrutura e navegação da interface.

Alguns pontos trabalhados:

* Elementos HTML semânticos.
* Hierarquia de headings.
* Uso de elementos interativos apropriados.
* Contraste de cores.
* Labels e informações acessíveis quando necessários.

## 🧪 Testes

O projeto utiliza **Vitest** e **React Testing Library** para testes de componentes.

Os testes são focados principalmente no comportamento observado pelo usuário, evitando testar detalhes internos de implementação.

Entre os comportamentos testados estão:

* Renderização de informações.
* Renderização condicional.
* Links.
* Interações de hover.
* Eventos de clique.
* Conteúdo acessível.
* Componentes que dependem de contexto.

Os dados utilizados nos testes são mantidos próximos aos respectivos arquivos de teste quando são específicos daquele componente.

