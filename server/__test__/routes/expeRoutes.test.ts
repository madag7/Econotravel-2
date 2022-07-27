import express from 'express';
import request from 'supertest';
import experienciaRoute from "../../src/route/experienciaRoute";

const app = express();
app.use(express.json())
app.use(experienciaRoute);

describe('GET/experiencias', ()=>
    test('should return status 200 if get experiences is  successfully',async ()=>{
        const response = await request(app)
        .get('/experiencias')
        expect(response.status).toEqual(200);
    })
)

describe("POST/experiencias", () => {
    test("should return a 500 status when experience cannot be created", async () => {
        const response = await request(app)
            .post('/admin/experiencias')
            .send({ titulo: "000000" });
        expect(response.status).toEqual(500);
    }) 
})
