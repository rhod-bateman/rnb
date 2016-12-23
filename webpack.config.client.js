var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var appConfig = require(path.resolve(SRC_DIR, 'orchestration/config'));
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: SRC_DIR + '/client/index.js',
    output: {
        path: path.resolve(DIST_DIR, appConfig.build.jsDirectory),
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : SRC_DIR,
                exclude: /node_modules/,
                loader : 'babel'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/to/file.txt
            { from: 'src/client/index.html', to: path.resolve(DIST_DIR, appConfig.build.indexHtmlLocation) },
        ])
    ]
};

module.exports = config;
