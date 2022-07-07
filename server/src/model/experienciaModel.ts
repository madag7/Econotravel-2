import {connection} from '../services/database.service'

class Experiencia{  
    async getExperiences(){
        const queryStr = 'SELECT * FROM experiencias'
        const result:any = await connection(queryStr)
        return result.rows;
    }

    async getOneExperience(id: any){
        const queryStr = 'SELECT * FROM experiencias WHERE id=$1'
        const result:any = await connection(queryStr,[id])
        return result.rows;
    }
}

export default new Experiencia(); 