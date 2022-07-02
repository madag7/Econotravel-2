import {Request,Response} from 'express';
import experienciaModel from '../model/experienciaModel'
import iExperiencia from '../model/interface/iExperiencia';

const experienciaController = (req: Request, res: Response) =>{
        const experiencias: iExperiencia[] = experienciaModel.getExperiencias()
        res.json(experiencias);
}

export default experienciaController;