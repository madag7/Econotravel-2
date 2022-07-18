import { Pool } from 'pg';
import { config } from './config';

class Database {
    client: Pool;
    
    constructor(config: any) {
        this.client = new Pool({connectionString: config.uri , ssl: {rejectUnauthorized: false}});
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
            const result = await this.client.query(query, values)
            return result;

        } catch (error) {
            console.log(error);
        }
    }
}

export default new Database(config());