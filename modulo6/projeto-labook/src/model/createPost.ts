import { POST_TYPES } from "../types/postTypes"

export type createPost = {
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: string,
    author_id: string,
} 
