import request from 'supertest';
import { Response } from 'supertest';
import app from '../src/app';

describe('testing api',()=>{
    let response: Response;

    test('Testing route "/experiencias"', ()=>{
        beforeEach(async()=>{
            response = await request(app)
                .get('/experiencias')
        })

        test('Should return ',async () => {
            
        })

    })
})