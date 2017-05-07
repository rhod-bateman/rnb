/**
 * Created by qtj929 on 07/05/2017.
 */
import path from 'path';
import buildtools from 'ukwebbuildtools';

import { getClientConfigByBrand, serverConfig } from './webpack.config';

const serverAppDir = path.resolve(__dirname, 'src/server');
const serverDistPath = path.resolve(__dirname, 'dist/server.js');

const brandConfig = getClientConfigByBrand(process.env.BRAND || 'default');

const modifiedServerConfig = buildtools.config.merge(
    serverConfig,
    {
        entry: { server: `${serverAppDir}/index.js` }
    }
);

buildtools.bundle(modifiedServerConfig)
    .then(() => {
        // eslint-disable-next-line global-require
        const server = require(serverDistPath).default;

        const devMiddleware = buildtools.devServerMiddleware.createDevMiddleware(buildtools.config.merge(brandConfig, {
            output: {
                publicPath: 'http://localhost:8080/static/'
            }
        }));

        server.start(devMiddleware);
    })
    .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Error', err);
    });
