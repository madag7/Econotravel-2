import  connection  from "../services/database.service";
import { iUser, iUserLogin } from "./interface/iUser";

class User {
    async saveUser(users: iUser){
        const queryStr='INSERT INTO users (nombre, email, password, rol, permisos) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [users.nombre, users.email, users.password, users.rol, users.permisos] as string[]
        const result:any = await connection.query(queryStr,values)
        console.log(values)
        return result.rows[0];
       
    }

    async getUser(users: iUserLogin){
        const queryStr = 'SELECT * FROM users WHERE email= $1'
        const values = [users.email]
        const result:any = await connection.query(queryStr,values)
        return result.rows[0];
    }

    async getAllUsers (){
        const queryStr = 'SELECT * FROM users';
        console.log(queryStr)
        const result:any = await connection.query(queryStr,[])
        return result.rows;
    }
}

export default new User();