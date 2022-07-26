import  connection  from "../services/database.service";
import { iUser, iUserLogin } from "./interface/iUser";

class User {
    async saveUser(users: iUser){
        const queryStr='INSERT INTO users (nombre, email, password, rol, permisos) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [users.nombre, users.email, users.password, users.rol, users.permisos] as string[]
        const result:any = await connection.query(queryStr,values)
        return result.rows[0];
       
    }
    async getUser(users: iUserLogin){
        const queryStr = 'SELECT * FROM users WHERE email= $1'
        const values = [users.email]
        const result:any = await connection.query(queryStr,values)
        return result.rows[0];
    }

    async getOneUser(user_id: any){
        const queryStr = 'SELECT * FROM users WHERE user_id= $1'
        const result:any = await connection.query(queryStr,[user_id])
        return result.rows[0];
    }

    async getAllUsers (){
        const queryStr = 'SELECT * FROM users';
        const result:any = await connection.query(queryStr, [])
        return result.rows;
    }

    async getUserByEmail(email: string){
        const queryStr = 'SELECT * FROM users WHERE email= $1'
        const values = [email]
        const result:any = await connection.query(queryStr,values)
        return result.rows[0];
    }

    async modifUser(id: any, fields: any){
        const user= await this.getOneUser(id)
        const queryStr='UPDATE users SET (nombre, email, rol, permisos) = ($1, $2, $3, $4)  WHERE user_id = $5 RETURNING *';
        const result:any = await connection.query(queryStr,[fields.nombre || user.nombre, fields.email || user.email, fields.rol || user.rol, fields.permisos || user.permisos, id]);
        console.log(fields.nombre, fields.email, fields.rol, fields.permisos, id)
        console.log(result.rows[0])
        return result.rows[0];
    }

    async deleteUser(user_id:any){
        const queryStr = 'DELETE FROM users WHERE user_id=$1 RETURNING *';
        const result:any= await connection.query(queryStr, [user_id]);
        return result.rows;
    }
}

export default new User();