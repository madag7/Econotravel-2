import { config } from './config'
import { Client } from 'pg'

const url = config();

const client = new Client (url);

export const connection = async () =>{
    try{
        await client.connect();
        console.log('Connected successfully to server');      
    } catch (error){
        console.log(error)
    }
    return client;
}