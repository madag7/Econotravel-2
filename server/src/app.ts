import express from 'express';
import {experienciaRoute} from './route'

const app = express();

app.use(experienciaRoute)

export default app;