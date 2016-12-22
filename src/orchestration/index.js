/**
 * Created by qtj929 on 20/12/2016.
 */
import express from 'express';
//import session from 'express-session';
import config from './config.json';
import http from 'http';
//import bodyParser from 'bodyparser';

import homeRoute from './routes/home';

const app = express();
app.disable('x-powered-by');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', homeRoute.handle);

const options = {};

app.server = http.createServer(app);
app.server.listen(config.server.port);
