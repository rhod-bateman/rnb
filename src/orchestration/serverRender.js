/**
 * Created by qtj929 on 20/12/2016.
 */

import react from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import AppComponent from '../components/App';
import reducers from '../reducers/index';
import React from 'react';

import fs from 'fs';

const handleRender = (state) => {
    // Create a new Redux store instance
    const store = createStore(reducers, state);

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <AppComponent />
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // TODO: merge state.

    // Send the rendered page back to the client
    return renderFullPage(html, preloadedState);
};

const renderFullPage = (html, preloadedState)  => {
    const rootElement = `<div id="root">${html}</div>`;
    const stateElement = `<script id="state">${JSON.stringify(preloadedState)}</script>`;

    let indexHtml = fs.readFileSync(path.resolve('../index.html', 'utf8');
    indexHtml = indexHtml.replace('<div id="root"></div>', rootElement);
    indexHtml = indexHtml.replace('<script id="state"></script>', stateElement);

    return indexHtml;
};

export default handleRender;
