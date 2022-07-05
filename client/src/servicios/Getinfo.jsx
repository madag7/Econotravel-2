import axios from "axios"

const Getinfo = {   
    async getAll(){  
        const result = await axios.get (process.env.REACT_API_URL+"/experiencias")
        return result.data    
    },   
    
    async getOne(){
        const result = await axios.get (process.env.REACT_API_URL+"/experiencias/:id")
        return result.data 
    }
}

export default Getinfo;