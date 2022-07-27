import connection from '../services/database.service'
import iReservation from './interface/iReservation'

class Reserva {  
    async getReservations() {
        const queryStr = 'SELECT * FROM reservas;'
        console.log(queryStr)
        const result:any = await connection.query(queryStr,[])
        return result.rows;
    }

    async getOneReservation (reserva_id: any){
        const queryStr = 'SELECT * FROM reservas WHERE reserva_id=$1;'
        const result:any = await connection.query(queryStr,[reserva_id])
        return result.rows;
    }
 
    async saveReservation (booking: iReservation){
        
        const queryStr =  'INSERT INTO reservas  ( experiencia_id, user_id, nombre, apellidos, telefono, direccion, email_reserva, titulo_experiencia, cantidad_contratada, fecha, precio_total) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)' 
       
       /*
       'INSERT INTO reservas (experiencia_id,titulo_experiencia, user_id,email,nombre) SELECT r.experiencia_id, titulo_experiencia, r.user_id, r.email, r.nombre FROM reservas r INNER JOIN experiencias e ON r.experiencia_id = e.experiencia_id AND r.titulo_experiencia = e.tituloINNER JOIN  users u ON r.user_id = u.user_id AND  r.email = u.email AND r.nombre = u.nombre'

       INSERT INTO users (user_id= u.user_id INNER JOIN experiencias e ON reservas.experiencia_id=e.experiencia_id RETURNING *'*/
        
        const result:any= await connection.query(queryStr,[booking.experiencia_id, booking.user_id, booking.nombre,booking.apellidos,booking.telefono, booking.direccion, booking.email_reserva, booking.titulo, booking.cantidad_contratada, booking.fecha, booking.precio_total]);
        return result.row[0];
    }

    async modifReservation(booking: iReservation){
        const queryStr='UPDATE reservas SET (experiencia_id, user_id, nombre, apellidos, telefono, direccion, email, titulo_experiencia, cantidad_contratada,fecha, precio_total) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)  WHERE reserva_id = $12 RETURNING *';
        const result:any = await connection.query(queryStr,[booking.experiencia_id, booking.user_id, booking.nombre,booking.apellidos,booking.telefono, booking.direccion, booking.email_reserva, booking.titulo, booking.cantidad_contratada, booking.fecha, booking.precio_total]);
        console.log(result)
        return result.rows;
    }

    async deleteReservation (reserva_id:any){
        const queryStr = 'DELETE FROM reservas WHERE reserva_id=$1 RETURNING *';
        const result:any= await connection.query(queryStr, [reserva_id]);
        return result.rows;
    }
}

export default new Reserva(); 