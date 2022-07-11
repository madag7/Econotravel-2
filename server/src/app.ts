import express from 'express';
import {experienciaRoute, userRoute, loginRoute} from './route'

const app = express();
app.use (express.json())
app.use(experienciaRoute)
app.use(userRoute);
app.use(loginRoute)

export default app;