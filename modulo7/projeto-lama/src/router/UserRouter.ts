import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDataBase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

const hashGenerator = new HashGenerator();
const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();

const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(
  userDatabase,
  hashGenerator,
  idGenerator,
  tokenGenerator
);
const userController = new UserController(userBusiness);

export const userRouter = express.Router();

userRouter.post("/signup", (req, res) => userController.signup(req, res));
userRouter.post("/login", (req, res) => userController.login(req, res));
