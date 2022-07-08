import {config as dotenvConfig} from 'dotenv'

dotenvConfig();

export const config = () =>{
    const uri= process.env.POSTGRES_URL as string;
    const secret= process.env.SECRET as string;
       
    return {
        uri,
        secret 
    }  
}