import { BaseDatabase } from "./BaseDatabase";
import { Request, Response } from "express";
import { user } from "../model/user";
import { RecipeDataBase } from "./RecipeDataBase";
import { UserConnection } from "./UserConnection";
import moment from "moment";


export class UserDataBase extends BaseDatabase {
    private static TABLE_NAME = "User"

    public async createUser(user: user): Promise<void> {
        await BaseDatabase.connection()
            .insert(user)
            .into('User')
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ email })
        return result[0]
    }

    public async getProfile(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ id })
        return result[0]
    }

    public async getUserById(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ id })
        return result[0]
    }

    public async getFeed(id: string) {
        const result = await BaseDatabase.connection()
            .select("*")
            .from("UserFollowConnection")
            .innerJoin("User", "User.id", "UserFollowConnection.followed_id")
            .innerJoin("Recipes", "Recipes.creator_user_id", "UserFollowConnection.follower_id")
            .where("UserFollowConnection.followed_id", `${id}`)

        const arrayRecipes = result.map((recipe: { created_at: number }) => {
            return {
                ...recipe,
                created_at: moment.unix(recipe.created_at / 1000).format("DD/MM/YYYY")
            }
        })
        return arrayRecipes
    }    

    public async deleteUser(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .delete()
            .from(UserDataBase.TABLE_NAME)
            .where('id', id)
        return result
    }
}
