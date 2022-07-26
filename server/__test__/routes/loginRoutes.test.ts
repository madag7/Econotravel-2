import express from 'express';
import request from 'supertest';
import {loginRoute} from '../../src/route';

const app = express();
app.use(express.json())
app.use(loginRoute);

describe('/login', ()=>
    test('should return status 200 ',async ()=>{
        const response = await request(app)
        .get('/login')
        expect(response.status).toBe(200);
    })
)

describe("POST /user", () => {
    describe("when user and password are correct", () => {

        test('should respond with a 201', async () => {
            const response = await request(app)
                .post('/user')
                .send({
                    name:"Belen",
                    email: "mi@mail.com",
                    password: "1234"
                });

            expect(response.status).toEqual(201);
        })

    })
})