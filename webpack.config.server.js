var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssImport = require('postcss-import');
var postcssCssnext =require('postcss-cssnext');
var SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;
var AssetsPlugin = require('assets-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');


module.exports = {
    context: SRC_DIR,
    entry: path.resolve(SRC_DIR, 'server.js'),

    output: {
        filename: 'server.js',
        chunkFilename: 'server.[name].js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: false,
                    babelrc: true
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader/locals?modules=true' +
                '&localIdentName=[hash:base64:10]' +
                '!postcss'
            }
        ]
    },

    postcss() {
        return [
            postcssImport(),
            postcssCssnext()
        ];
    },

    resolve: {
        root: SRC_DIR,
        modulesDirectories: ['node_modules']
    },
    target: "node",
    devtool: 'source-map'
};
