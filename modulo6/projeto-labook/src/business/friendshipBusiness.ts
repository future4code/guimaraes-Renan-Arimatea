import { FriendshipDatabase } from "../data/friendship";
import { createFriendship } from "../model/createFriendship";
import { generateId } from "../services/generateId";

export class FriendshipBusiness {
  public async follow(input: createFriendship) {
    try {
      const { followed_id, follower_id } = input;
      const id: string = generateId();
      const friendshipDatabase = new FriendshipDatabase();
      await friendshipDatabase.follow({
        id,
        followed_id,
        follower_id,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async unfollow(input: any) {
    try {
      const { id } = input;
      return await new FriendshipDatabase().unfollow(input);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
