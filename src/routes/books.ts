import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (req, res) => {
    try {
        const books = await prisma.book.findMany({
            select: {
                title: true,
                author: true,
            },
            orderBy: {
                title: "asc",
            },
        });
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar livros" });
    }
});

router.post("/", async (req, res) => {
    const { title, author } = req.body;
    if (title && author) {
        try {
            const result = await prisma.book.create({
                data: {
                    title,
                    author,
                },
            });
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao cadastrar livro" });
        }
    } else
        res.status(400).json({
            error: "Os dados 'título' e 'autor' são obrigatórios",
        });
});

router.put("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { title, author } = req.body;
    if (title && author) {
        try {
            const result = await prisma.book.update({
                where: {
                    id: id,
                },
                data: {
                    title: title,
                    author: author,
                },
            });
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar o livro" });
        }
    } else {
        res.status(400).json({ error: "Digite o titulo e o autor" });
    }
});

router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
        const result = await prisma.book.delete({
            where: {
                id: id,
            },
        });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar o livro" });
    }
});

export default router;
