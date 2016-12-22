/**
 * Created by qtj929 on 20/12/2016.
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import AppComponent from '../components/App';
import reducers from '../reducers/index';

import fs from "fs";
import path from 'path';
let indexHtml = null;

/**
 * Builds the serverside page from a the client template.
 * @param htmlFragment
 * @param preloadedState
 * @returns {Promise}
 */
const renderServersidePage = (htmlFragment, preloadedState)  => {
    return new Promise((resolve, reject) => {

        if (indexHtml) {
            return resolve(buildHtml(indexHtml, htmlFragment, preloadedState));
        }

        const filePath = path.resolve("../index.html");
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }

            if (!data) {
                return reject("no template found");
            }

            // Cache result
            indexHtml = data;

            resolve(buildHtml(indexHtml, htmlFragment, preloadedState));
        });
    });
};

/**
 * Injects an html fragement and some initial state into a template.
 * @param sourceHtml
 * @param htmlFragment
 * @param state
 * @returns {*|string|XML|void}
 */
const buildHtml = (sourceHtml, htmlFragment, state) => {
    const rootElement = `<div id="root">${htmlFragment}</div>`;
    const stateElement = `<script id="state">${JSON.stringify(state)}</script>`;

    let html = sourceHtml.replace('<div id="root"></div>', rootElement);
    html = html.replace('<script id="state"></script>', stateElement);

    return html;
};

/**
 * Handles the initial server-side render
 * @param state
 * @returns {Promise}
 */
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
    return renderServersidePage(html, preloadedState);
};

export default handleRender;
