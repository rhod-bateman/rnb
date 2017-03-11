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
    entry: {
        js: "./src/client.js",
        html: './src/index.html'
    },
    output: {
        path: './dist/',
        filename: "client.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader' +
                    '?sourceMap' +
                    '&modules=true' +
                    '&importLoaders=1' +
                    '&localIdentName=[name]__[local]---[hash:base64:10]' +
                    '!postcss'
                )
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader' +
                '?name=images/[name].[hash:5].[ext]'

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
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader' +
                '?name=fonts/[name].[hash:5].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('client.css'), /* '[name].[contenthash].css' */
        new AssetsPlugin({
            path: path.resolve(process.cwd(), './dist')
        }),
        new SourceMapDevToolPlugin({
            test: /.*.(css|js)/, // All CSS or JS files
            filename: '[file].map',

            /*
             *  Provide a template String for the URI to the source file.
             *  This is provided to harmonise resource paths
             *
             *  @param {string} info.identifier - Path to the source file
             *  @param {string} info.resourcePath - Path to the source file
             *  @see {@link https://webpack.github.io/docs/configuration.html#output-devtoolmodulefilenametemplate }
             */
            moduleFilenameTemplate(info) {
                // Regex should match:
                // [0] webpack:///common/css/global.css
                // [1] ./AppComponent.js
                const regexes = [
                    /^webpack:\/\/\//,
                    /^\.\//
                ];

                const match = regexes.find(r => r.test(info.identifier));

                // info.resourcePath gives a nicer string for .js files mapping to other assets, e.g. images
                const resourcePath = match ? info.identifier.replace(match, '') : info.resourcePath;

                return `webpack://ukweb/${resourcePath}`;
            }
        })
    ],
    postcss() {
        return [
            postcssImport(),
            postcssCssnext()
        ];
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    target: "web"
};
