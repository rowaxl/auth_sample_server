import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import router from './router';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3090;

// apply middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

// start server
server.listen(port, () => {
    console.log('server listen on port:', port);
});


