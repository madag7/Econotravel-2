import {Request,Response} from 'express';

const loginController = (req: Request, res: Response) =>{
    res.json({token: req.body.token, rol: req.body.rol})
}

export default loginController