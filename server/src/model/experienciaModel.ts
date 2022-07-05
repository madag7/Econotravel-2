import {connection} from '../services/database.service'

class Experiencia{  
    async getExperiences(){
        const queryStr = 'SELECT * FROM experiencias'
        const client = await connection();
        const result = await client.query(queryStr);
        return result.rows;
    }

    async getOneExperience(id: any){
        const queryStr = 'SELECT * FROM experiencias WHERE id=$1'
        const client = await connection();
        const result = await client.query(queryStr,[id]);
        return result.rows;
    }
}

export default new Experiencia(); 