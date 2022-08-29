import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";

export default async function deleteRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const recipeId = req.params.id;
    const token = new Authenticator().getData(
      req.headers.authorization as string
    );

    const userData = await new UserDataBase().getUserById(token.id);
    if (!userData) {
      throw new Error("Verifique se você está logado!");
    }

    if (!recipeId) {
      throw new Error("Digite o id da receita que você está procurando!");
    }

    const recipeDataBase = new RecipeDataBase();
    const recipeData = await new RecipeDataBase().getRecipeById(recipeId);

    if (recipeData.creator_user_id !== userData.id) {
      throw new Error("Você só pode excluir suas próprias receitas!");
    }

    await recipeDataBase.deleteRecipeById(recipeId);

    res.status(200).send({
      message: "Receita excluída com sucesso!",
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
}
