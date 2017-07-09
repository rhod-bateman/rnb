/**
 * Created by qtj929 on 28/02/2017.
 */
import React, { PropTypes } from 'react';

const getStateHtml = state => {
    const stateString = {__html:`<script>try{window.__PRELOADED_STATE__ = (${state});} catch(err) { console.log(err); }</script>`};
    console.log(stateString);
    return stateString;
}

const Html = ({ bundle, children, title, state, css }) => (
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        {title && <title>{title}</title>}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/css?family=Mystery Quest|Rancho" rel="stylesheet"/>
        <link href={css} rel="stylesheet"/>
    </head>
    <body>
    <div id="root"><div>
        {children}
    </div></div>
    <script type="text/javascript" src={bundle}/>
    <div dangerouslySetInnerHTML={getStateHtml(state)}></div>
    </body>
    </html>
)

export default Html;
