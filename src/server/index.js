/**
 * Created by qtj929 on 20/12/2016.
 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import AppComponent from '../components/App';
import reducer from '../reducers/index';
import config from '../config/server.config';
import Html from '../components/Html'
import thunk from 'redux-thunk'


/**
 * Handles the initial server-side render
 * @param state
 * @returns {Promise}
 */
const handleRender = (state) => {
    // Create a new Redux store instance
    const store = createStore(
        reducer/*,
        applyMiddleware([thunk]),
        state*/
    );

    const content = renderToString(
        <Provider store={store}>
            <AppComponent />
        </Provider>);


    let stateString = JSON.stringify(store.getState());

    // Render the component to a string
    const html = renderToStaticMarkup(
        <Html bundle={config.app.bundleName} title={config.app.title} state={stateString} css={config.app.css}>
            {content}
        </Html>
    );

    return `<!DOCTYPE html>${html}`;
};

export default handleRender;
