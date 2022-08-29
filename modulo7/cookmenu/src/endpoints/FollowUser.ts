import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { UserConnection } from "../data/UserConnection";

export default async function followUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { userToFollowId } = req.body;

    const tokenFollower = req.headers.authorization as string;

    if (!userToFollowId) {
      throw new Error(
        "Por favor, insira o ID do usuário que você deseja seguir!"
      );
    }

    const data = new Authenticator().getData(tokenFollower);

    const follower = await new UserDataBase().getUserById(data.id);
    const followed = await new UserDataBase().getUserById(userToFollowId);

    if (!follower || !followed) {
      throw new Error("Usuário não localizado!");
    }

    await new UserConnection().followUser(followed.id, follower.id);

    res.status(201).send({ message: "Seguido com sucesso" });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
}
