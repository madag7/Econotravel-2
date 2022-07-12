import connection from '../services/database.service'
import iExperiencia from './interface/iExperiencia'

class Experiencia{  
    async getExperiences(){
        const queryStr = 'SELECT * FROM experiencias;'
        console.log(queryStr)
        const result:any = await connection.query(queryStr,[])
        console.log(result.rows)
        return result.rows;
    }

    async getOneExperience(experiencia_id: any){
        const queryStr = 'SELECT * FROM experiencias WHERE experiencia_id=$1;'
        const result:any = await connection.query(queryStr,[experiencia_id])
        return result.rows;
    }
 
    async saveExperiencia(exp: iExperiencia){
        const queryStr = 'INSERT INTO experiencias (img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte,et_duracion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *'
        const result:any= await connection.query(queryStr,[exp.img, exp.titulo, exp.descripcion, exp.precio, exp.duracion, exp.accesibilidad,exp.et_ubicacion, exp.et_transporte, exp.et_duracion]);
        return result.rows;
    }
}

export default new Experiencia(); 