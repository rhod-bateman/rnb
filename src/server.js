/**
 * Created by qtj929 on 20/12/2016.
 */
import express from 'express';
import session from 'express-session';
import config from './config/config';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path';

import serverRender from './serverRender/index';


const app = express();
app.disable('x-powered-by');
app.use(session({ secret: 'secret'}));
app.use(bodyParser.json());

// Allow access to bundle.
app.use('/static', express.static(path.resolve(config.build.staticDir)));

// Temporary fix for a build issue
app.use('/images', express.static(path.resolve(config.build.staticDir, 'images')));


app.get('/', (req, res, next) => {

     let html = serverRender({});
     res.send(html);
    next();
});

app.get('/rsvp', (req, res, next) => {
    res.status(200);
    res.json({success: true});
});


const options = {};

app.server = http.createServer(app);
app.server.listen(config.server.port);

export default app;
