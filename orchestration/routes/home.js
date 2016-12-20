/**
 * Created by qtj929 on 20/12/2016.
 */

import serverRender from '../serverRender';


const config = (app) => {
    app.get('/home', handle);
};

const handle = (req, res, next) => {

    const html = serverRender({});
    res.send(html);
    next();
};

export default {config, handle};
