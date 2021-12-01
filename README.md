# Clean Architecture com nestjs

Projeto rest api com arquitetura clean e framework nestjs

## Setup Projeto

### Depêndencias

- Nodejs >= v12
- Git
- yarn
- docker
- docker-compose

### Download projeto

```
git clone git@github.com:everton-roliveira/clean-architecture-nestjs.git
```

---

## Iniciar repositório.

### Instalação

```bash
yarn install
```

---

### Rodar banco de dados

```
yarn db:up
```

### Efetuar migração de tabelas

```
yarn migration:up
```

---

### Rodar o App

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

---

### Teste

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```

---

## Contato

- Author - [Everton Roberto](https://www.linkedin.com/in/evertonrobertodeoliveira/)
- github - [https://github.com/everton-roliveira](https://github.com/everton-roliveira)

## License

[[MIT licensed]](license.md).

---

## Clean Architecture

Arquitetura limpa é uma filosofia de design de software que separa os elementos de um design em níveis de anel. Um objetivo importante da arquitetura limpa é fornecer aos desenvolvedores uma maneira de organizar o código de forma que ele encapsule a lógica de negócios, mas o mantenha separado do mecanismo de entrega.

Concretamente, existem 3 pacotes principais: domain, usecases e infrastructure. Esses pacotes devem respeitar as seguintes regras:

- **domain** -> contém o código de negócios e sua lógica e não tem dependência externa: nem em frameworks (NestJS nesse caso), nem em usecases ou pacotes de infrastructure.
- **usecases** -> é como um condutor. Dependerá apenas do pacote de domain para executar a lógica de negócios. usecases não deve ter nenhuma dependência na infrastructure (incluindo framework ou módulo npm).
- **infrastructure** -> contém todos os detalhes técnicos, configurações, implementações (banco de dados, serviços web, módulo npm, etc.) e não deve conter nenhuma lógica de negócios. a infrastructure tem dependências de domain, usecases e estruturas.

---

## Convetional Commits

Convencional Commits fornece um conjunto fácil de regras para criar um histórico de commits explícito.

[[Saber mais]](https://www.conventionalcommits.org/en/v1.0.0/)

### Estrutura

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

A mensagem deve ser escrita com letras minúsculas, com um espaço entre o dois pontos e a descrição e sem ponto final.

### Tipos

- **chore**: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.
- **feat**: São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.
- **fix**: Essencialmente definem o tratamento de correções de bugs.
- **refactor**: Utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.
- **docs**: Inclusão ou alteração somente de arquivos de documentação.
- **perf**: Uma alteração de código que melhora o desempenho.
- **style**: Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
- **test**: Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD).
- **build**: Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm).
- **ci**: Mudanças em nossos arquivos e scripts de configuração de CI (exemplo de escopos: Travis, Circle, BrowserStack, SauceLabs).
- **env**: Utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.

### Exemplos de Commits:

- `chore: add commitlint e husky`
- `chore(eslint): obrigar o uso de aspas duplas no jsx`
- `refactor: refatorando a tipagem`
- `feat: add axios / buscando e tratando os dados`
- `feat(page/home): criando o roteamentento no next`

---

## Versionamento Semântico

Conjunto simples de regras e requisitos que ditam como os números das versões são atribuídos e incrementados.

[[Saber mais]](https://semver.org/lang/pt-BR/)

Dado um número de versão MAJOR.MINOR.PATCH, incremente a:

- **versão Maior** (MAJOR): quando fizer mudanças incompatíveis na API.
- **versão Menor** (MINOR): quando adicionar funcionalidades mantendo compatibilidade.
- **versão de Correção** (PATCH): quando corrigir falhas mantendo compatibilidade.

Rótulos adicionais para pré-lançamento(pre-release) e metadados de construção(build) estão disponíveis como extensão ao formato `MAJOR.MINOR.PATCH`.
