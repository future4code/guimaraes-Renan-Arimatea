import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import Authenticator from "../services/Authenticator";

export default async function getAnotherUserProfile(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const idParams = req.params.id;
    const token = new Authenticator().getData(
      req.headers.authorization as string
    );

    if (!token) {
      throw new Error(
        "Você não está logado. Certifique-se de fazer o login antes de continuar!"
      );
    }

    const user = await new UserDataBase().getUserById(token.id);

    if (!idParams) {
      throw new Error("Por favor, verifique o ID!");
    }

    const data = await new UserDataBase().getUserById(idParams);

    res.status(200).send({
      id: data.id,
      name: data.name,
      email: data.email,
      role: data.role,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
}
