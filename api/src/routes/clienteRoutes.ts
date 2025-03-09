import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const clienteRoutes = Router();

// Rota para listar clientes
clienteRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter clientes" });
  }
});

export default clienteRoutes;
