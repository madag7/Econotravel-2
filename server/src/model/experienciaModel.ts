import connection from '../services/database.service'
import iExperiencia from './interface/iExperiencia'

class Experiencia{  
    async getExperiences(){
        const queryStr = 'SELECT * FROM experiencias;'
        console.log(queryStr)
        const result:any = await connection.query(queryStr,[])
        return result.rows;
    }

    async getOneExperience(experiencia_id: any){
        const queryStr = 'SELECT * FROM experiencias WHERE experiencia_id=$1;'
        const result:any = await connection.query(queryStr,[experiencia_id])
        return result.rows;
    }
 
    async saveExperience(exp: iExperiencia){
        const queryStr = 'INSERT INTO experiencias (img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte,et_duracion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *'
        const result:any= await connection.query(queryStr,[exp.img, exp.titulo, exp.descripcion, exp.precio, exp.duracion, exp.accesibilidad,exp.et_ubicacion, exp.et_transporte, exp.et_duracion]);
        return result.rows;
    }

    async modifExperience(exp: iExperiencia){
        const queryStr='UPDATE experiencias SET (img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte,et_duracion) = ($1,$2,$3,$4,$5,$6,$7,$8,$9)  WHERE experiencia_id = $10 RETURNING *';
        const result:any = await connection.query(queryStr,[exp.img, exp.titulo, exp.descripcion, exp.precio, exp.duracion, exp.accesibilidad,exp.et_ubicacion, exp.et_transporte, exp.et_duracion, exp.experiencia_id]);
        console.log(result)
        return result.rows;
    }

    async deleteExperience(experiencia_id:any){
        const queryStr = 'DELETE FROM experiencias WHERE experiencia_id=$1 RETURNING *';
        const result:any= await connection.query(queryStr, [experiencia_id]);
        return result.rows;
    }
}

export default new Experiencia(); 