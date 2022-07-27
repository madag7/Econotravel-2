import {Request,Response} from 'express';
import reservationModel from '../model/reservationModel'
import iReservation from '../model/interface/iReservation';
import userModel from '../model/userModel';
import { iUser } from '../model/interface/iUser';

const reservationController = {
        getAllReservations: async (req:Request,res:Response) =>{
                try{
                        const reservas: any = await reservationModel.getReservations();
                        res.json(reservas);
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },
        
        getOneReservation: async (req:Request,res:Response) =>{
                try{
                        const param = req.params['reserva_id'];
                        const reserva: any = await reservationModel.getOneReservation(param);
                        res.json(reserva);
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },

        saveReservation: async (req:Request,res:Response)=>{
                try{
                        const{experiencia_id, nombre, apellidos,telefono, direccion, email, email_reserva, titulo, cantidad_contratada,fecha, precio_total, ...reservas}: any= req.body

                        const user: iUser = await userModel.getUserByEmail(email)

                        if(!experiencia_id || !user.user_id || !nombre || !apellidos || !telefono || !direccion || !email || !titulo || !cantidad_contratada || !fecha|| !precio_total){
                                res.status(400).json({message:'Falta alguno de los campos'});
                        }

                        const result = await reservationModel.saveReservation({experiencia_id, user_id:user.user_id, nombre, apellidos, telefono, direccion, email_reserva, titulo, cantidad_contratada,fecha, precio_total, ...reservas});
                        result
                                ? res.status(201).json({ result: result.rows})
                                : res.status(500).send('No se pudo crear una nueva reserva');
                }catch (error: any){
                    res.status(400).send(error.message);
                }
        },

        modifReservation: async (req:Request,res:Response) => {
                try{
                        const{experiencia_id, user_id, nombre, apellidos,telefono, direccion, email_reserva, titulo, cantidad_contratada,fecha, precio_total, ...reservas}: iReservation= req.body
                        console.dir(req.body)
                        const result = await reservationModel.modifReservation({experiencia_id, user_id, nombre, apellidos,telefono, direccion, email_reserva, titulo, cantidad_contratada,fecha, precio_total, ...reservas});

                        result
                        ? res.status(201).json({ result: result.rows})
                        : res.status(500).send('No se pudo modificar la reserva');
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },

        deleteReservation: async (req:Request,res:Response)=>{
                try{
                    const param = req.params.reserva_id;
                   
                    const result = await reservationModel.deleteReservation(param);
                
                    result
                            ? res.status(201).json({ result: `Reserva deleted with ID: ${param}`})
                            : res.status(500).send('No se pudo borrar la reserva seleccionada');
                }catch (error: any){
                    res.status(400).send(error.message);
                }
        }
}

export default reservationController