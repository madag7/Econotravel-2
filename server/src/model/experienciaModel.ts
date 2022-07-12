import connection from '../services/database.service'

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
}

export default new Experiencia(); 