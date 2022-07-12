import {Request, Response,  NextFunction} from 'express';
import jwt from 'jsonwebtoken'
import { config } from '../services/config';

const {secret} = config()

const generateToken = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const token = await jwt.sign(req.body.email, secret)
        console.log(token)
        req.body.token = token
        
        next()
    }catch(error: any){
        res.status(400).send("Error al generar el token");
    }
}

const validateToken= (req: any, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        jwt.verify(req.token, secret, (err: any) => {
            if(err) {
            res.status(403).send("token no válido");
            } else {
                next();
            }
        });
        next();
    } else {
        res.sendStatus(403);
    }
}
  
export default {generateToken, validateToken}