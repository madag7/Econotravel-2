import connection from '../services/database.service'

class Experiencia{  
    async getExperiences(){
        const queryStr = 'SELECT * FROM experiencias;'
        console.log(queryStr)
        const result:any = await connection.query(queryStr,[])
        console.log(result.rows)
        return result.rows;
    }

    async getOneExperience(id: any){
        const queryStr = 'SELECT * FROM experiencias WHERE id=$1;'
        const result:any = await connection.query(queryStr,[id])
        return result.rows;
    }
}

export default new Experiencia(); 