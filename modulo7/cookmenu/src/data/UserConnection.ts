import { BaseDatabase } from "./BaseDatabase";

export class UserConnection extends BaseDatabase {
  static TABLE_NAME = "UserFollowConnection";

  public async followUser(
    followerId: string,
    followedId: string
  ): Promise<any> {
    await BaseDatabase.connection()
      .insert({
        follower_id: followerId,
        followed_id: followedId,
      })
      .into(UserConnection.TABLE_NAME);
  }

  public async unfollowUser(
    follower_id: string,
    followed_id: string
  ): Promise<any> {
    await BaseDatabase.connection()
      .delete()
      .from(UserConnection.TABLE_NAME)
      .where({ follower_id: follower_id })
      .andWhere({ followed_id: followed_id });
  }

  public async delete(id: string): Promise<any> {
    const result = await BaseDatabase.connection()
      .delete()
      .from(UserConnection.TABLE_NAME)
      .where("followed_id", id)
      .orWhere("follower_id", id);
    return result;
  }
}
