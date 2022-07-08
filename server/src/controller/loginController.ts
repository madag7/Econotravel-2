import {Request,Response} from 'express';

const loginController = (req: Request, res: Response) =>{
    res.send(req.body.token)
}

export default loginController