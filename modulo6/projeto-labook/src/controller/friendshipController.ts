import { Request, Response } from 'express'
import { FriendshipBusiness } from '../business/friendshipBusiness'
import { createFriendship } from '../model/createFriendship'


export class FriendshipController {
    async follow(req: Request, res: Response):Promise<void> {
        try {
            const {followed_id, follower_id} = req.body
            const input:createFriendship ={
                followed_id, follower_id
              }

            const friendshipBusiness = new FriendshipBusiness()
            await friendshipBusiness.follow(input)

            res.status(201).send({ message: "Nova Amizade" });
             } catch (error: any) {
            res.status(400).send(error.message);
             }
            }

    async unfollow(req: Request, res: Response):Promise<void> {
        try {
        const {id} = req.body
        const input = {id}
        const friendshipBusiness = new FriendshipBusiness()
        await friendshipBusiness.unfollow(input)

            res.status(200).send({ message: "Amizade desfeita..." })

        } catch (error: any) {
            res.status(400).send(error.message);
    }
    }
} 
