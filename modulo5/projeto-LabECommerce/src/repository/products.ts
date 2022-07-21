import { connection } from "../data/connections";

export const createProductRepository = async (product: {}) => {
  try {
    return await connection("labecommerce_products").insert(product);
  } catch (error: any) {
    return error.message;
  }
};

export const readProductsRepository = async () => {
  try {
    return await connection("labecommerce_products").select();
  } catch (error: any) {
    return error.message;
  }
};

export const readProductsByOrderRepository = async (
  sort?: any,
  order?: any
) => {
  try {
    return await connection("labecommerce_products")
      .select()
      .orderBy(sort, order);
  } catch (error: any) {
    return error.message;
  }
};

export const readProductByNameRepository = async (name?: any) => {
  try {
    return await connection("labecommerce_products")
      .select()
      .where("name", "like", `%${name}%`);
  } catch (error: any) {
    return error.message;
  }
};
