var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var appConfig = require(path.resolve(SRC_DIR, 'orchestration/config'));
var CopyWebpackPlugin = require('copy-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

var config = {
    devtool: 'sourcemap',
    entry: path.resolve(SRC_DIR, 'server.js'),
    externals: /^[a-z\-0-9]+$/,
    output: {
        path: path.resolve(DIST_DIR),
        filename: 'server.js',
        libraryTarget: 'commonjs'
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
            { from: 'package.json', to: path.resolve(DIST_DIR, 'package.json') },
        ])
    ],
    target: 'node'
};

module.exports = config;
