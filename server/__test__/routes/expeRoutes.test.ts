import express from 'express';
import request from 'supertest';
import {experienciaRoute} from '../../src/route';

const app = express();
app.use(express.json())
app.use(experienciaRoute);

describe('/experiencias', ()=>
    test('should return status 200 ',async ()=>{
        const response = await request(app)
        .get('/experiencias')
        expect(response.status).toBe(200);
    }))

