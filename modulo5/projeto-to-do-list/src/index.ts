import { createUser, searchId, changeUser } from './api';
import app from "./app";
import { Request, Response } from 'express'


app.get('/ping', (req: Request, res: Response)=>{
    res.send('Pong!')
})
app.get('/user/:id', searchId)

app.post('/user', createUser)

app.put('/user/edit/:id', changeUser) 

