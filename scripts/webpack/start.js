//Core
const webpack = require('webpack');
const chalk = require('chalk');

//Config
const getConfig = require('./webpack.config.js');

//Compiler Webpack
const compiler = webpack(getConfig());