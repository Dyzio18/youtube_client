"use strict";

const WEBPACK = require('webpack'),
    CONFIG = require('./package.json'),
    PATH = require('path');

require('dotenv').config();
const NAME = 'index', /*process.env.NAME,*/
    TARGET = process.env.TARGET,
    PROD = process.argv.indexOf('-p') !== -1;

var plugins = [];

var libconfig = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: (PROD) ? NAME + '.min.js' : NAME + '.js',
        library: NAME,
        libraryTarget: TARGET,
        umdNamedDefine: TARGET === 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'es2016']
                }
            }
        ]
    },
    plugins: plugins
};

module.exports = libconfig;
