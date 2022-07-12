import {Request,Response} from 'express';
import {iUser} from '../model/interface/iUser';
import userModel from '../model/userModel';

const userController = {
    saveUser: async (req: Request, res: Response)=>{
        try{
            const {nombre, email, password, rol, permisos, ...users}: iUser = req.body;
            
            if(!email  || !password || !nombre || !rol || !permisos){
                res.status(400).send('Falta el correo electrónico o contraseña');
            }
            
            const result = await userModel.saveUser({nombre, email, password, ...users});
            result
                ? res.status(201).json({ result: result.rows}) 
                : res.status(500).send('No se pudo crear un nuevo usuario');
        }catch(error: any){
            res.status(400).send(error.message);
        }
    },

    getAllUsers:  async (req: Request, res: Response) => {
        try {
            const result = await userModel.getAllUsers();
        
            result
                ? res.status(201).json(result)
                : res.status(500).send('Hubo un error en la obtención los datos');
        
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
    
}
export default userController;