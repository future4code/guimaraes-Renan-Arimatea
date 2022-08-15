import express from "express";
import { PostController } from "../controller/postController";

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/create", postController.create);
postRouter.get("/get/:id", postController.getPostById);
