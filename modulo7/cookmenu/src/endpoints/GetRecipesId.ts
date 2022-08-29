import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { UserDataBase } from "../data/UserDataBase";
import moment from "moment";

export default async function getRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const recipeId = req.params.id;
    const token = new Authenticator().getData(
      req.headers.authorization as string
    );

    const user = await new UserDataBase().getUserById(token.id);

    if (!user) {
      throw new Error(
        "Certifique-se de estar logado antes de pesquisar receitas!"
      );
    }

    if (!recipeId) {
      throw new Error(
        "Por favor, insira o id da receita que deseja pesquisar!"
      );
    }

    const recipe = await new RecipeDataBase().getRecipeById(recipeId);

    res.status(200).send({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      created_at: moment.unix(recipe.created_at / 1000).format("DD/MM/YYYY"),
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
}
