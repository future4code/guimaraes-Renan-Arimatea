import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { RecipeDataBase } from "../data/RecipeDataBase";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";

export default async function editRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const recipeId = req.params.id;
    const token = new Authenticator().getData(
      req.headers.authorization as string
    );

    if (token.role !== "NORMAL") {
      throw new Error("Apenas usuários normais podem editar a receita!");
    }

    const userData = await new UserDataBase().getUserById(token.id);

    if (!userData) {
      throw new Error(
        "Certifique-se de estar logado antes de editar receitas!"
      );
    }

    const recipes = {
      title: req.body.title,
      description: req.body.description,
    };

    if (!recipeId) {
      throw new Error(
        "Por favor, insira o id da receita que você está procurando!"
      );
    }

    if (!recipes.title || !recipes.description) {
      throw new Error("Por favor, preencha os campos obrigatórios!");
    }

    const recipeData = await new RecipeDataBase().getRecipeById(recipeId);

    console.log(recipeData);
    if (!recipeData.creator_user_id !== !userData.id) {
      throw new Error("Você só pode alterar suas receitas!");
    }

    const recipeDB = await new RecipeDataBase().update(
      recipeId,
      recipes.title,
      recipes.description
    );

    res.status(200).send({
      message: "Receita atualizada com sucesso!",
      recipeDB,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
}
