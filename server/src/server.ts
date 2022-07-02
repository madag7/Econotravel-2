import http from 'http';
import app from './app';

const server = http.createServer(app);

const PORT = process.env.PORT || 5432;

server.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})
