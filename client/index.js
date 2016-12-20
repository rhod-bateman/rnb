/**
 * Created by qtj929 on 20/12/2016.
 */



import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(counterApp, preloadedState)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
