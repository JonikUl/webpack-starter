//Core
const {
  HotModuleReplacementPlugin
} = require('webpack');
const {
  merge
} = require('webpack-merge');

//Constants
/* const {
  BUILD_DIRECTORY,
  PROJECT_ROOT,
  SOURCE_DIRECTORY,
} = require('./constants'); */

//Common config
const getCommonConfig = require('./webpack.common');

/**
 * Config types
 * Function
 * Object
 * Promise
 */
module.exports = () => {
  return merge(getCommonConfig(), {
    entry: [
      'webpack-hot-middleware/client?reload=true&quiet=true',
    ],
    mode: 'none',
    devtool: false,
    plugins: [
      new HotModuleReplacementPlugin(),
    ]
  });
}