/**
 * Created by qtj929 on 20/12/2016.
 */

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;



import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'
import reducer from './reducers'
import App from './components/App'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    //middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware),
    preloadedState
)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
