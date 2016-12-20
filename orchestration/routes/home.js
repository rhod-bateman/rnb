/**
 * Created by qtj929 on 20/12/2016.
 */

import express from 'express';
import serverRender from '../serverRender';

const router = express.router();

router.get('/home', (req, res, next) => {

    const html = serverRender({});
    res.send(html);
    next();
});
