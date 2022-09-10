import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { UserConnection } from "../data/UserConnection";

export default async function unfollowUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { userToUnfollowId } = req.body;
    const tokenFollower = req.headers.authorization as string;

    if (!userToUnfollowId) {
      throw new Error(
        "Por favor, insira o ID do usuário que você deseja seguir!"
      );
    }

    const data = new Authenticator().getData(tokenFollower);

    const follower = await new UserDataBase().getUserById(data.id);
    const followed = await new UserDataBase().getUserById(userToUnfollowId);

    if (!follower || !followed) {
      throw new Error("Usuário não encontrado!");
    }

    await new UserConnection().unfollowUser(followed.id, followed.id);

    res.status(201).send({ message: "Deixou de ser seguido!" });
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      message: error.message,
    });
  }
}
