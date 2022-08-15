import { UserDatabase } from "../data/user";
import { createUser } from "../model/createUser";
import { generateId } from "../services/generateId";

export class UserBusiness {
  public create = async (input: createUser): Promise<void> => {
    try {
      const { email, name, password } = input;
      const id: string = generateId();

      const userDatabase = new UserDatabase();

      await userDatabase.create({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
