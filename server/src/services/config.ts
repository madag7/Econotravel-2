import {config as dotenvConfig} from 'dotenv'

dotenvConfig();

export const config = () =>{
    const uri: string = process.env.POSTGRES_URL as string;
    return uri;
}