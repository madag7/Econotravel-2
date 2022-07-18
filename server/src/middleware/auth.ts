import {Request, Response,  NextFunction} from 'express';
import bcrypt  from 'bcrypt';
import userModel from '../model/userModel';

export const encryptPassword= async (req: Request,res: Response, next: NextFunction) =>{
    try{
        if(!req.body.password){ 
            res.send('password missing')
        } else{ 
            const saltRounds= 10;
            const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
            req.body.password= passwordHash;
            next();        
        }
    }catch(error){
        res.status(500).send('error auth')
    }
}

const validateUser = async (req: Request,res: Response, next: NextFunction)=>{
    try {
        const {email, password} =req.body;

        if(!email || !password){
           throw new Error(' email or password not exist');
        }

        const result = await userModel.getUser({email, password});
        const comparePassword = await bcrypt.compare(password, result.password);

        if(comparePassword){
            req.body.rol= result.rol
            next();
        } else {
            throw new Error('password not valid');
        }
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}

export default {validateUser}