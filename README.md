# Formula 1 API

Uma API simples construída com Node.js, TypeScript e Fastify para fornecer dados sobre equipes e pilotos da Fórmula 1.

## ✨ Features

- Listagem de todas as equipes.
- Listagem de todos os pilotos.
- Busca de um piloto específico por ID.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Fastify](https://www.fastify.io/)**: Framework web rápido e de baixa sobrecarga para Node.js.
- **[tsx](https://github.com/esbuild-kit/tsx)**: Executa arquivos TypeScript e ESM no Node.js sem a necessidade de pré-compilação.
- **[tsup](https://tsup.egoist.dev/)**: Ferramenta para compilar bibliotecas TypeScript com o poder do esbuild.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🏁 Como Começar

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/evelynnnie/podcast-manager.git
    cd formula1-api
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

## ▶️ Como Usar

O projeto possui scripts para facilitar o desenvolvimento e a execução.

- **Modo de Desenvolvimento (com hot-reload):**
  Este comando iniciará o servidor e o reiniciará automaticamente a cada alteração nos arquivos.
  ```bash
  npm run start:watch
  ```

- **Build para Produção:**
  O comando a seguir irá compilar o projeto TypeScript para JavaScript na pasta `dist/`.
  ```bash
  npm run dist
  ```

- **Executar em modo de Produção:**
  Este comando primeiro faz o build e depois executa o servidor a partir dos arquivos compilados.
  ```bash
  npm run start:dist
  ```

Após iniciar, o servidor estará disponível em `http://localhost:3333`.

## 🏎️ Endpoints da API

### Listar todas as equipes

- **URL:** `/teams`
- **Método:** `GET`
- **Resposta de Sucesso (Código `200 OK`):**
  ```json
  [
      { "id": 1, "name": "Mclaren", "base": "Woking, United Kingdom" },
      { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" }
  ]
  ```

### Listar todos os pilotos

- **URL:** `/drivers`
- **Método:** `GET`
- **Resposta de Sucesso (Código `200 OK`):**
  ```json
  [
      { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
      { "id": 2, "name": "Lewis Hamilton", "team": "Mercedes" }
  ]
  ```

### Buscar piloto por ID

- **URL:** `/drivers/:id`
- **Método:** `GET`
- **Exemplo:** `/drivers/3`
- **Resposta de Sucesso (Código `200 OK`):**
  ```json
  { "driver": { "id": 3, "name": "Lando Norris", "team": "Mclaren" } }
  ```
- **Resposta de Erro (Código `404 Not Found`):**
  ```json
  { "message": "Driver not found" }
  ```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

