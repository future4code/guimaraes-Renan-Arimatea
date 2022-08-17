import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { createUser } from "../model/createUser";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;
      const input: createUser = {
        email,
        name,
        password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Novo usuário cadastrado" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
