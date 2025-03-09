import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRoutes = Router();
const controller = new UserController();

userRoutes.get("/list", async (req, res) => {
  await controller.list(req, res);
});

userRoutes.get('/show/:id', async (req, res) => {
  await controller.show(req, res)
})

export { userRoutes };
