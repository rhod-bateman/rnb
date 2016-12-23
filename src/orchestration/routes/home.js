/**
 * Created by qtj929 on 20/12/2016.
 */

import serverRender from '../serverRender';


const config = (app) => {
    app.get('/home', handle);
};

/**
 * Handles a request to the home route
 * @param req
 * @param res
 * @param next
 */
const handle = (req, res, next) => {

    serverRender({}).then((html) => {
        res.send(html);
        next();
    });
};

export default {config, handle};
