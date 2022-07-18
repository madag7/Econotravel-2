import express from 'express';
import {experienciaRoute, userRoute, loginRoute} from './route'
import cors from 'cors'

const app = express();
app.use(cors())
app.use (express.json())
app.use(express.urlencoded({extended:false}));
app.use(experienciaRoute)
app.use(userRoute);
app.use(loginRoute)

export default app;