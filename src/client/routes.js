/**
 * Created by qtj929 on 20/12/2016.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../src/components/App';
import HomeContainer from '../src/components/IndexContainer';
import NotFound from '../src/components/Common/NotFound';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="error" component={NotFound} />
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;
