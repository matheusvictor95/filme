# Nome do Projeto

> Projeto desenvolvido com [AdonisJS](https://adonisjs.com/) - um framework Node.js estruturado para construção de aplicações web.

## 🚀 Funcionalidades


- [x] CRUD de usuários
- [x] Integração com banco de dados
- [x] API RESTful
- [ ] Outras funcionalidades...

## 🧰 Tecnologias

- Node.js
- AdonisJS (v5+)
- SQLite / MySQL / PostgreSQL *(ajustar conforme seu projeto)*
- JavaScript / TypeScript *(dependendo do que estiver usando)*

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js (v22)
- NPM ou Yarn
- Git

### Passos para rodar localmente

```bash
# Clone o repositório
git clone https://github.com/matheusvictor95/filme.git
cd seu-projeto

# Instale as dependências
npm install
# ou
yarn install

#Renomei o env.example para .env ou crie o arquivo .env
cp .env.example .env

#Gerar a key
node ace generate:key

#Rodar as migrations
node ace migration:run

#Para iniciar o serve
npm run dev
