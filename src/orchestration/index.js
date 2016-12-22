/**
 * Created by qtj929 on 20/12/2016.
 */
import express from 'express';
import session from 'express-session';
import config from './config';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path';

import homeRoute from './routes/home';

const app = express();
app.disable('x-powered-by');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

// Allow access to bundle.
app.use('/js', express.static(path.resolve(config.build.jsDirectory)));

app.use('/', homeRoute.handle);

const options = {};

app.server = http.createServer(app);
app.server.listen(config.server.port);

export default app;
