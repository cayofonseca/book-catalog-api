import express from "express";
import helmet from "helmet";
import booksRouter from "./routes/books";
import cors from "cors";

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/books", booksRouter);

server.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});
