import { Request, Response } from "express";
import { User } from "../types";
import transporter from "../services/mailTransporter";
import { readPurchasesRepository } from "../repository/purchases";
import {
  createUserRepository,
  readPurchasesByUserRepository,
  readUsersRepository,
} from "../repository/users";

const Errors: { [key: string]: { status: number; message: string } } = {
  USER_NOT_FOUND: { status: 404, message: "Usuário não encontrado" },
  USERS_NOT_FOUND: { status: 404, message: "Não há usuários cadastrados" },
  MISSING_PARAMETERS: {
    status: 422,
    message: "É necessário informar todos os campos",
  },
  EMAIL_ALREADY_REGISTERED: { status: 409, message: "E-mail já cadastrado" },
  EMAIL_INVALID: { status: 422, message: "E-mail invalido" },
  SOME_ERROR: { status: 500, message: "Algo deu errado" },
};

export const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !password || !email) {
      throw new Error(Errors.MISSING_PARAMETERS.message);
    }

    const checkEmail = (email: string) => {
      let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      return regex.test(email);
    };

    if (!checkEmail(email)) {
      throw new Error(Errors.EMAIL_INVALID.message);
    }

    const users = await readUsersRepository();

    users.map((user: User) => {
      if (user.email === email) {
        throw new Error(Errors.EMAIL_ALREADY_REGISTERED.message);
      }
    });

    const user: User = {
      id: users.length + 1,
      name,
      email,
      password,
    };

    await createUserRepository(user);

    await transporter.sendMail({
      from: `<${process.env.NODEMAILER_USER}>`,
      to: `${email}, <${process.env.NODEMAILER_USER}>`,
      subject: "Mensagem de confrimação",
      text: `Olá ${name} sua conta foi criada om sucesso!`,
      html: `<p>Olá ${name} sua conta foi criada com sucesso!</p>`,
    });

    res.status(200).send(`Usuário ${user.name} criado com sucesso!`);
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETERS.message:
        res
          .status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      case Errors.EMAIL_ALREADY_REGISTERED.message:
        res
          .status(Errors.EMAIL_ALREADY_REGISTERED.status)
          .send(Errors.EMAIL_ALREADY_REGISTERED.message);
        break;
      case Errors.EMAIL_INVALID.message:
        res
          .status(Errors.EMAIL_INVALID.status)
          .send(Errors.EMAIL_INVALID.message);
        break;
      default:
        res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message);
    }
  }
};

export const readUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await readUsersRepository();

    if (!users.length) {
      throw new Error(Errors.USERS_NOT_FOUND.message);
    }

    const allPurchases = await readPurchasesRepository();

    const allUsers = await users.map((user: User) => {
      let userSelected: {};

      let purchases = [];
      for (let purchase of allPurchases) {
        if (purchase.user_id === user.id) {
          purchases.push(purchase);
        }
      }
      return (userSelected = {
        id: user.id,
        name: user.name,
        purchases,
      });
    });

    res.send(allUsers);
  } catch (error: any) {
    switch (error.message) {
      case Errors.USERS_NOT_FOUND.message:
        res
          .status(Errors.USERS_NOT_FOUND.status)
          .send(Errors.USERS_NOT_FOUND.message);
        break;
      default:
        res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message);
    }
  }
};

export const readPurchasesByUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.user_id as string;

    if (!id) {
      throw new Error(Errors.MISSING_PARAMETERS.message);
    }

    let user = await readPurchasesByUserRepository(id);

    if (!user.length) {
      throw new Error(Errors.USER_NOT_FOUND.message);
    }

    const purchases = await readPurchasesRepository();

    let userPurchases = [];

    for (let purchase of purchases) {
      if (purchase.user_id === id) {
        userPurchases.push(purchase);
      }
    }

    let userSelected = {
      id: user[0].id,
      name: user[0].name,
      userPurchases,
    };

    res.send(userSelected);
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETERS.message:
        res
          .status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      case Errors.USER_NOT_FOUND.message:
        res
          .status(Errors.USER_NOT_FOUND.status)
          .send(Errors.USER_NOT_FOUND.message);
        break;
      default:
        res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message);
    }
  }
};
