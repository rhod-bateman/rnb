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
import serverRender from './orchestration/serverRender';


const app = express();
app.disable('x-powered-by');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

// Allow access to bundle.
app.use('/static', express.static(path.resolve(config.build.staticDir)));

app.use('/', (req, res, next) => {

    let html = serverRender({});
    res.send(html);
    next();
});

const options = {};

app.server = http.createServer(app);
app.server.listen(config.server.port);

export default app;
