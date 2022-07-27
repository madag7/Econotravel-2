import express from 'express';
import request from 'supertest';
import userRoute from '../../src/route/userRoute';

const app = express();
app.use(express.json())
app.use(userRoute);


describe('DELETE/user/:id', ()=>{
    test( "Responds a message 'Selected user was not deleted'",async ()=>{
              
              const response = await request(app)
               .delete('/admin/user/28')
                expect(response.status).toBe(500);
    });
    });
           
          
             

    


