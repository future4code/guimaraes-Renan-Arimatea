import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { UserConnection } from "../data/UserConnection";

export default async function deleteUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const deleteUserId = req.params.id;
    const token = new Authenticator().getData(
      req.headers.authorization as string
    );

    const userData = await new UserDataBase().getUserById(token.id);

    if (!userData || userData.role !== "ADMIN") {
      throw new Error("Credenciais inválidas!");
    }

    if (!deleteUserId) {
      throw new Error("Por favor, insira um ID de usuário válido!");
    }

    await new RecipeDataBase().deleteRecipeCreator(deleteUserId);

    await new UserConnection().delete(deleteUserId);

    await new UserDataBase().deleteUser(deleteUserId);

    res.status(200).send({
      message: "Usuário deletado com sucesso!",
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
}
