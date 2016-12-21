var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

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
                loader : 'babel'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                include: SRC_DIR,
                loader: "file"
            },
            {
                test: /\.(html)$/,
                loader: "file?name=[path][name].[ext]&context=./app/static"
            }
        ]
    }
};

module.exports = config;
