//Core
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

//Constants
const {
  PROJECT_ROOT,
} = require('../constants');

//the clean options to use
const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
}

//Common config
const getCommonConfig = require('./webpack.common');
const {
  merge
} = require('webpack-merge');

/**
 * Config types
 * Function
 * Object
 * Promise
 */
module.exports = () => {
  return merge(getCommonConfig(), {
    mode: 'none',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin(cleanOptions),
    ]
  });
}