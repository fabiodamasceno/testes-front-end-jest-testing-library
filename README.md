# 🤖 react-sample
[![Build Status](https://circleci.com/gh/vitorspadacio/react-sample.svg?style=shield)](https://circleci.com/gh/vitorspadacio/react-sample)
[![Coverage Status](https://coveralls.io/repos/github/vitorspadacio/react-sample/badge.svg?branch=main)](https://coveralls.io/github/vitorspadacio/react-sample?branch=main) [![dependencies Status](https://status.david-dm.org/gh/vitorspadacio/react-sample.svg)](https://david-dm.org/vitorspadacio/react-sample) [![devDependencies Status](https://status.david-dm.org/gh/vitorspadacio/react-sample.svg?type=dev)](https://david-dm.org/vitorspadacio/react-sample?type=dev)

Neste repositório você encontrará um exemplo de aplicação frontend usando a biblioteca React.

Esse exemplo é opinativo e segue uma estrutura que mescla diferentes recomendações de JavaScript, TypeScript, React, testes, além de unir a experiência de utilização e entrega de projetos para diferentes clientes em produção.

[Exemplo app publicado](https://react-sample-49efc.firebaseapp.com/)

---

<br/>

## 📚 Tecnologias

As tecnologias e estruturas utilizadas no exemplo são:
- Renderização com React 17;
- Estrutura de pastas pronta para aplicação de médio porte;
- Estilização com SASS e/ou styled-components;
- Padronização de código com .editorconfig e ESLint;
- Requisição HTTP com API fetch nativa;
- Gerenciamento de estado único (Redux);
- Middleware de efeitos colaterais (Redux-Saga);
- Testes automátizados (Jest);
- Testes de integração com DOM em memória (Testing-Library).

Além disso encontrará diferentes exemplos para os seguintes cenários:
- Componentes sem estado;
- Componentes interagindo com estado único;
- Componentes compartilhados;
- Testes de integração;
- Testes de unidade em módulos e generators (sagas);
- Variáveis de ambientes.

No quesito publicação temos:
- Setup utilizando Firebase Hosting;
- Build CI utilizando CircleCI;
- Badges com informações de build, coverage e dependencies.

---

## 🚀 Iniciando

<br/>

Por padrão recomendo o uso do ``yarn``, por isso para iniciar o projeto:
```
yarn
```

Para rodar a aplicação:
```
yarn start
```
> Ao rodar start, automaticamente roda o ESLint com correção automática de código.

<br/>

Para rodar os testes para ci e/ou rodar todos os testes da aplicação:
```
yarn test
```
> Ao rodar test ou test:watch, automaticamente roda o ESLint sem correção automática e apresentará erro caso alguma regra não seja seguida.

<br/>

Para rodar testes com `watcher` durante desenvolvimento, usar:
```
yarn test:watch
```

---

## 🦝 Sugestões

<br/>

Tudo neste repositório é opinativo e está em constante evolução, por isso todo comentário e sugestão é muito bem vinda para evoluir e facilitar início de projetos em React.

Este repositório é livre e todos podem usá-lo.


## 📚 Bootcamp

Este exemplo do bootcamp visa ensinar:

- Como organizar as responsabilidades de cada camada de uma aplicação React;
  - Teórico:
    - Statefull Components;
    - Styled/Stateless Components;
    - MVC vs Flux;
    - Tipando componente;
    - Hooks;
      - useState;
      - useCallback;
      - useMemo;
      - useRef;
      - useContext;
      - useReducer;

- Arquitetura sugerida:
  - Camada de funcionalidades/features;
    - Componentes de página /PageComponents;
    - Como obter dados externos;
    - Como decidir se um estado é local ou global;
      - Redux;
      - Redux Saga;
    - Salvando dados no estado global;
  - Camada de componentes/componentes/shared-componentes;
  - Camada de infraestrutura:
    - API's;
    - LocalStorage;
    - Data/Hora;
- Estratégia de testes:
  - Testes de unidade vs Testes integrados;
  - Como escrever componentes com TDD no React;
  - React e Funções puras;
  - Testes integrados como substituição para testes e2e;

---
