var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: SRC_DIR + '/client/index.js',
    output: {
        path: BUILD_DIR,
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
            { from: 'src/client/index.html', to: 'index.html' },
        ])
    ]
};

module.exports = config;
