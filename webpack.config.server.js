var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var appConfig = require(path.resolve(SRC_DIR, 'orchestration/config'));
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: SRC_DIR + '/server.js',
    output: {
        path: path.resolve(DIST_DIR),
        filename: 'server.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/to/file.txt
            { from: 'src/client/index.html', to: path.resolve(DIST_DIR, appConfig.build.indexHtmlLocation) },
        ])
    ]
};

module.exports = config;
