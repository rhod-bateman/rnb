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

exports.asset = {
    client: {
        image: {
            test: /\.(png|jpg|svg)$/,
            loader: 'file-loader' +
            '?name=images/[name].[hash:5].[ext]'

        },
        font: {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader' +
            '?name=fonts/[name].[hash:5].[ext]'
        }
    },
    server: {
        image: {
            test: /\.(png|jpg|svg)$/,
            loader: 'file-loader' +
            '?emitFile=false' +
            '&name=images/[name].[hash:5].[ext]'

        },
        font: {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader' +
            '?emitFile=false' +
            '&name=fonts/[name].[hash:5].[ext]'
        }
    }
};

exports.babelLoader = {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    query: {
        cacheDirectory: true,
        babelrc: true
    }
};

exports.babelEnv = {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    query: {
        cacheDirectory: true,
        extends: {
            "presets": ["es2015", "stage-2"]
        },
        presets: [
            [
                'env',
                {
                    targets: {
                        node: 6.8
                    },
                    debug: true,
                    useBuiltIns: true
                }
            ]
        ]
    }
};


exports.css = {
    loader: {
        client: {
            prod: {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader' +
                    '?sourceMap' +
                    '&modules=true' +
                    '&importLoaders=1' +
                    '&minimize=true' +
                    '&localIdentName=[hash:base64:10]' +
                    '!postcss')
            },
            debug: {
                test: /\.css$/,
                loader: 'style-loader' +
                    '!css-loader' +
                    '?sourceMap' +
                    '&modules=true' +
                    '&importLoaders=1' +
                    '&localIdentName=[name]__[local]---[hash:base64:5]' +
                    '!postcss'
            }
        },
        server: {
            prod: {
                test: /\.css$/,
                loader: 'css-loader/locals?modules=true' +
                '&localIdentName=[hash:base64:10]' +
                '!postcss'
            },
            debug: {
                test: /\.css$/,
                loader: 'css-loader/locals?modules=true' +
                '&localIdentName=[name]__[local]---[hash:base64:5]' +
                '!postcss'
            }
        }
    },
    postcss() {
        return [
            postcssImport(),
            postcssCssnext()
        ];
    }
};

exports.jsonLoader = {
        test: /\.json$/,
        loader: 'json-loader'
    };

exports.txtLoader = {
        test: /\.txt$/,
        loader: 'raw-loader'
    };


