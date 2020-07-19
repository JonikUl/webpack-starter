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
    /*     entry: [
          'webpack-hot-middleware/client?reload=true&quiet=true',
          SOURCE_DIRECTORY,
        ], */
    /*     output: {
          path: BUILD_DIRECTORY,
          filename: 'main.js'
        }, */
    mode: 'none',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin(cleanOptions),
    ]
  });
}