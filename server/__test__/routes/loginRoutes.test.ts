import express from 'express';
import request from 'supertest';
import {loginRoute} from '../../src/route';


const app = express();
app.use(express.json())
app.use(loginRoute);

describe('POST/login', ()=>
    test('when received fields are not correct,should return status 404 ',async ()=>{
        const response = await request(app)
        .post('/login')
        .send ({nombre:'Belén'})
        expect(response.status).toBe(400);
    })
)

describe("POST/login", () => {
   

        test('when user and password are correct, should respond with a 201', async () => {
            const response = await request(app)
                .post('/login')
                .send({
            
                    email: "antonio@antonio.com",
                    password: "123456"
                });

            expect(response.status).toEqual(200);
        })

    })



  