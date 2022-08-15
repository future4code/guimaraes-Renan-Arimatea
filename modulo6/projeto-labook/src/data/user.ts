import { BaseDatabase } from "./base";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }
}