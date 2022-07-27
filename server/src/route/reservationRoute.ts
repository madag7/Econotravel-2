import { Router } from "express";
import reservationController from "../controller/reservationController";
import jwt from '../middleware/jwt';

const router = Router();

router.get('/reservas', jwt.validateToken, reservationController.getAllReservations);
router.get('/reservas/:reserva_id', jwt.validateToken, reservationController.getOneReservation);
router.post('/reservas', jwt.validateToken, reservationController.saveReservation)
router.put('/reservas/:reserva_id', jwt.validateToken, reservationController.modifReservation)
router.delete('/reservas/:reserva_id', jwt.validateToken, reservationController.deleteReservation)

export default router;