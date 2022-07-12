import {Request,Response} from 'express';
import experienciaModel from '../model/experienciaModel'

const experienciaController = {
        getAllExperiences: async (req:Request,res:Response) =>{
                const experiences: any = await experienciaModel.getExperiences();
                res.json(experiences);
        },
        
        getOneExperience: async (req:Request,res:Response) =>{
                const param = req.params['id'];
                const experiences: any = await experienciaModel.getOneExperience(param);
                res.json(experiences);
        }
        
}

export default experienciaController;