import {Request,Response} from 'express';
import experienciaModel from '../model/experienciaModel'
import iExperiencia from '../model/interface/iExperiencia';

const experienciaController = {
        getAllExperiences: async (req:Request,res:Response) =>{
                try{
                        const experiences: any = await experienciaModel.getExperiences();
                        res.json(experiences);
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },
        
        getOneExperience: async (req:Request,res:Response) =>{
                try{
                        const param = req.params['experiencia_id'];
                        const experiences: any = await experienciaModel.getOneExperience(param);
                        res.json(experiences);
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },

        saveExperiencia: async (req:Request,res:Response)=>{
                try{
                        const{img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte, et_duracion, ...experiencias}: iExperiencia= req.body

                        if(!img || !titulo || !descripcion || !precio || !duracion || !accesibilidad || !et_ubicacion || !et_transporte || !et_duracion){
                                res.status(400).json({message:'Falta alguno de los apartados'});
                        }

                        const result = await experienciaModel.saveExperiencia({img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte, et_duracion, ...experiencias});
                        result
                                ? res.status(201).json({ result: result.rows})
                                : res.status(500).send('No se pudo crear una nueva experiencia');
                }catch (error: any){
                    res.status(400).send(error.message);
                }
        },

        modifExperience: async (req:Request,res:Response) => {
                try{
                        const{img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte, et_duracion, ...experiencias}: iExperiencia= req.body
                        const result = await experienciaModel.modifExperience({img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte, et_duracion, ...experiencias});

                        result
                        ? res.status(201).json({ result: result.rows})
                        : res.status(500).send('No se pudo modificar la experiencia');
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        }

}

export default experienciaController;