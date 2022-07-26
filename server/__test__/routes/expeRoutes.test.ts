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
    })
)

describe("when missing info", () => {
    test("should return a 500 status when user has an error.", async () => {
        const response = await request(app)
            .post('/experiencias')
            .send({ titulo: "000000" });
        expect(response.status).toEqual(500);
    }) 
})
