import { Request, Response } from "express";
import { Product, Purchase } from "../types";
import {
  createPurchaseRepository,
  readPurchasesRepository,
} from "../repository/purchases";
import { readProductsRepository } from "../repository/products";

const Errors: { [key: string]: { status: number; message: string } } = {
  PURCHASE_NOT_FOUND: { status: 404, message: "Compra não localizada" },
  PURCHASES_NOT_FOUND: { status: 404, message: "Não existem compras cadastradas" },
  MISSING_PARAMETERS: {
    status: 422,
    message: "Campos obrigatórios",
  },
  INVALID_QUANTITY: { status: 422, message: "A quantidade informada deve ser um número" },
  SOME_ERROR: { status: 500, message: "Não foi possível concluir" },
};

export const createPurchaseController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
      throw new Error(Errors.MISSING_PARAMETERS.message);
    }

    if (!Number(quantity)) {
      throw new Error(Errors.INVALID_QUANTITY.message);
    }

    const purchases = await readPurchasesRepository();

    const products = await readProductsRepository();

    let product = products.find(
      (product: Product) => product.id === product_id
    );

    let total_price = quantity * product.price;

    const purchase: Purchase = {
      id: purchases.length + 1,
      user_id,
      product_id,
      quantity,
      total_price,
    };

    await createPurchaseRepository(purchase);

    res.status(200).send(`Compra Nº${purchase.id} cadastrada com sucesso!`);
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETERS.message:
        res
          .status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      case Errors.INVALID_QUANTITY.message:
        res
          .status(Errors.INVALID_QUANTITY.status)
          .send(Errors.INVALID_QUANTITY.message);
        break;
      default:
        res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message);
    }
  }
};

export const readPurchasesController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const purchases = await readPurchasesRepository();

    if (!purchases.length) {
      throw new Error(Errors.PURCHASES_NOT_FOUND.message);
    }

    res.send(purchases);
  } catch (error: any) {
    switch (error.message) {
      case Errors.PURCHASES_NOT_FOUND.message:
        res
          .status(Errors.PURCHASES_NOT_FOUND.status)
          .send(Errors.PURCHASES_NOT_FOUND.message);
        break;
      default:
        res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message);
    }
  }
};
