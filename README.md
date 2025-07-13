📚 Book Catalog API
API REST simples para cadastro, listagem, atualização e exclusão de livros.
Feita em Node.js, Express e Prisma, usando banco de dados SQLite.

✅ Funcionalidades
Listar todos os livros

Cadastrar um novo livro

Atualizar um livro existente

Deletar um livro

🚀 Tecnologias usadas
Node.js

Express

Prisma ORM

SQLite (como banco local)

TypeScript

⚙️ Como rodar o projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/book-catalog-api.git
cd book-catalog-api
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o Prisma:

bash
Copiar
Editar
npx prisma init
No arquivo .env que o Prisma cria, defina a variável DATABASE_URL:

env
Copiar
Editar
DATABASE_URL="file:./dev.db"
Crie o banco e gere o client do Prisma:

bash
Copiar
Editar
npx prisma migrate dev --name init
Ou se preferir só criar sem migrations:
npx prisma db push

Inicie o servidor:

bash
Copiar
Editar
npm run dev
O servidor vai rodar por padrão em http://localhost:3000.

📌 Estrutura de pastas
bash
Copiar
Editar
book-catalog-api/
├── node_modules/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── routes/
│ │ └── books.ts
│ └── server.ts
├── package.json
└── tsconfig.json
📦 Rotas da API
Todas as rotas começam com /books.

🔍 Listar todos os livros
GET /books

Retorna um array de livros cadastrados.

json
Copiar
Editar
[
{
"title": "Dom Quixote",
"author": "Miguel de Cervantes"
},
...
]
➕ Cadastrar um novo livro
POST /books

Body (JSON):

json
Copiar
Editar
{
"title": "Novo Livro",
"author": "Nome do Autor"
}
Resposta (201):

json
Copiar
Editar
{
"id": 1,
"title": "Novo Livro",
"author": "Nome do Autor"
}
✏️ Atualizar um livro
PUT /books/:id

Body (JSON):

json
Copiar
Editar
{
"title": "Título atualizado",
"author": "Autor atualizado"
}
🗑️ Deletar um livro
DELETE /books/:id

📄 Exemplo de requisições
Recomendo usar o Postman ou Insomnia para testar.
Você também pode criar um arquivo books.http ou exportar uma collection do Postman para incluir no repositório.

✍️ Autor
Cayo Fonseca
