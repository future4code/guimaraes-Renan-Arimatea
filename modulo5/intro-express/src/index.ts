import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from 'net';
import { users } from "./data";


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req :Request, res :Response) => {
    res.send("Its ok")
})

app.get('/registration', (req :Request,res :Response) => {
    console.log(req.body)
    console.log(req.query)
    console.log(req.headers)
    res.status(200).send("Registered User")
})

app.get("/user:id",(req :Request, res :Response) => {

    res.status(200).send("User found.")
})

app.get('/post', (req: Request, res: Response)=> {

    try{

    const postID = Number(req.query.id)    
    let postUsuario: {}[] = []

    for(let element of users){
        for(let post of element.post){
            if(post.id === postID){
                postUsuario.push(users)
            }
        }
    }

    res.status(200).send(postUsuario)
    }
    catch(error){
        res.status(400).end("Nothing found")
    }
})

app.listen(3003,() => {
    console.log("server started.")
})
