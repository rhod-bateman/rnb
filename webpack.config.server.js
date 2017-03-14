// https://github.com/dimaip/server-side-rendering/commit/6e36b9690816d414ca36775c6487e0b6dbd8abe3

var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssImport = require('postcss-import');
var postcssCssnext =require('postcss-cssnext');
var SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;
var AssetsPlugin = require('assets-webpack-plugin');

// var nodeExternals = require('webpack-node-externals');
var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    context: SRC_DIR,
    entry: path.resolve(SRC_DIR, 'serverRender/index.js'),

    externals: [nodeExternals()],
    output: {
        filename: 'index.js',
        chunkFilename: 'server.[name].js',
        libraryTarget: 'commonjs2',
        path: path.resolve(DIST_DIR, '/serverRender'),
        publicPath: path.resolve(DIST_DIR, '/serverRender')
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
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader' +
                '?name=images/[name].[hash:5].[ext]'
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
