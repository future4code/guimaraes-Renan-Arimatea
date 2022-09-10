import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { recipe } from "../model/user";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { UserDataBase } from "../data/UserDataBase";

export default async function registerRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = new Authenticator().getData(
      req.headers.authorization as string
    );

    const data = await new UserDataBase().getUserById(token.id);

    if (!data) {
      throw new Error(
        "Certifique-se de estar logado antes de registrar receitas!"
      );
    }
    const { title, description } = req.body;

    const newRecipe: recipe = {
      id: generateId(),
      title,
      description,
      created_at: new Date(),
      creator_user_id: token.id,
    };

    if (!title || !description) {
      throw new Error("Credenciais não fornecidas!");
    }

    await new RecipeDataBase().createRecipe(newRecipe);
    res.status(201).send({ message: "Receita criada com sucesso!", token });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
}
