# 🧢 Pokémon API REST

API REST desenvolvida com Node.js, Express.js, TypeScript, Prisma ORM e PostgreSQL para gerenciamento de Pokémons e usuários autenticados.

---

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-black)

---

# 🚀 Tecnologias utilizadas

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt
- Zod
- Helmet
- CORS
- Express Rate Limit
- Morgan
- Winston

---

# 📦 Instalação do projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/DouglasGomes0/atividade_avaliativa_API.git
```

---

## 2. Entrar na pasta do projeto

```bash
cd atividade_avaliativa_API
```

---

## 3. Instalar dependências

```bash
npm install
```

---

# ⚙️ Configuração do PostgreSQL

Abra o PostgreSQL ou pgAdmin e execute:

```sql
CREATE DATABASE atividade;
```

---

# 🔐 Configuração do arquivo .env

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/atividade?schema=public"

JWT_SECRET="coloque_uma_chave_jwt_segura"
```



# 🛠 Executando as migrations do Prisma

```bash
npx prisma migrate dev
```

---

# ▶️ Executando o projeto

```bash
npm run dev
```

Servidor iniciado em:

```txt
http://localhost:3000
```

---

# 🔒 Segurança da aplicação

A API utiliza:

- Criptografia de senhas com bcrypt
- Autenticação JWT
- Proteção de rotas privadas
- Validação de dados com Zod
- Helmet para segurança HTTP
- CORS
- Rate Limit
- Logs com Morgan
- Logs estruturados com Winston
- Middleware global de tratamento de erros

---

# 📚 Endpoints da API

# 👤 Usuários


## Criar usuário

### POST `/users`

### Body

```json
{
  "name": "usuario",
  "email": "usuario@email.com",
  "password": "senha123"
}
```

---

## Listar usuários

### GET `/users`

---

## Buscar usuário por ID

### GET `/users/:id`

---

## Atualizar usuário

### PUT `/users/:id`

---

## Remover usuário

### DELETE `/users/:id`

---

# 🔑 Autenticação

## Login

### POST `/login`

### Body

```json
{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

### Retorno

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "id": 1,
    "name": "usuario",
    "email": "usuario@email.com"
  }
}
```

---

# 🔐 Utilizando rotas protegidas

Após realizar login, copie o token JWT retornado.

Envie o token no Header das requisições protegidas:

```txt
Authorization: Bearer SEU_TOKEN
```

---

# 🧢 Pokémons

---

## Listar Pokémons

### GET `/pokemon`

---

## Buscar Pokémon por ID

### GET `/pokemon/:id`

---

## Criar Pokémon

### POST `/pokemon`

🔒 Rota protegida por JWT

### Headers

```txt
Authorization: Bearer SEU_TOKEN
```

### Body

```json
{
  "nome": "Pikachu",
  "numeroPokedex": 25,
  "peso": 6,
  "altura": 0.4,
  "tipo1Id": 5,
  "tipo2Id": null
}
```

---

## Atualizar Pokémon

### PUT `/pokemon/:id`

🔒 Rota protegida por JWT

---

## Remover Pokémon

### DELETE `/pokemon/:id`

🔒 Rota protegida por JWT

---

# 🛡 Middlewares implementados

- Middleware de autenticação JWT
- Middleware de validação com Zod
- Middleware global de tratamento de erros
- Middleware de Rate Limit
- Middleware de logs HTTP

---

# ✅ Funcionalidades

- CRUD de usuários
- CRUD de Pokémons
- Persistência de dados PostgreSQL
- Relacionamento entre tabelas
- Prisma ORM
- Autenticação JWT
- Criptografia de senhas
- Proteção de rotas privadas
- Validação com Zod
- Logs com Morgan e Winston
- Segurança HTTP com Helmet
- Controle de acesso com CORS
- Rate Limit para proteção contra excesso de requisições

---

# 🧪 Testes realizados

Os testes da API foram realizados utilizando:

- Thunder Client