import {Pool} from 'pg';
import { config } from './config';

class Database {
    client: Pool;
    
    constructor(config: any) {
        this.client = new Pool({connectionString: config.uri});
        console.log('Connecting to PostgreSQL...');
    }

    async connect() {
        try {
            this.client.connect();
        } catch (error) {
            console.error('Connection to Postgres failed!', error);
            process.exit();
        }
    }

    async query(query: string, values?: any) {
        try {
            await this.connect();
            const result = await this.client.query(query, values);
            return result;

        } catch (error) {
            console.log(error);
        }
    }
}

export default new Database(config());