import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import { userRoutes } from "./routes/userRoutes";

const app = express();
const prisma = new PrismaClient();

// Middleware para habilitar CORS
app.use(cors());

// Middleware de logging para ajudar na depuração
app.use((req: Request, res: Response, next) => {
  console.log(`Requisição recebida para ${req.method} ${req.path}`);
  next();
});

// Registrar as rotas de usuário corretamente
app.use("/users", userRoutes);

// Rota principal
app.get("/", (req: Request, res: Response) => {
  res.send("Hellodjdjdhjhj!");
});

// Rota para obter todos os clientes
app.get("/clientes", async (req: Request, res: Response) => {
  try {
    const clientes = await prisma.cliente.findMany();

    // Criar um objeto contendo os dados desejados
    const dadosClientes = clientes.map((cliente) => ({
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      diaPagamento: cliente.diaPagamento,
    }));

    // Enviar os dados de uma vez só
    res.json(dadosClientes);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ error: "Erro ao obter clientes" });
  }
});

// Iniciar o servidor
app.listen(3700, () => {
  console.log("Server está rodando na porta 3700");
});
