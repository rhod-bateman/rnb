/**
 * Created by qtj929 on 28/02/2017.
 */
import React, { PropTypes } from 'react';

const Html = ({ bundle, children, title, state, css }) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            {title && <title>{title}</title>}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href={css} rel="stylesheet"/>
        </head>
        <body>
            <div id="app">{children}</div>
            <script type="text/javascript" src={bundle} />
            {state && <script type="text/javascript">__window.PRELOADED_STATE={state}</script>}
        </body>
    </html>
);

export default Html;
