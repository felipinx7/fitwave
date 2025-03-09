import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class UserController {
  public async list(_request: Request, response: Response) {
    const prisma = new PrismaClient();

    const cliente = await prisma.cliente.findMany();

    return response.status(200).json(cliente);
  }

  public async show(_request: Request, response: Response) {
    const prisma = new PrismaClient();

    const id = Number(_request.params.id); // Conversão para número

    if (isNaN(id)) {
      return response.status(400).json({ error: "ID inválido" });
    }

    const user = await prisma.cliente.findUnique({
      where: { id },
    });

    if (!user) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }

    return response.status(200).json(user);
  }
}
