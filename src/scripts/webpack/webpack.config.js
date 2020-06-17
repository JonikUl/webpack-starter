//Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//Constants
const {
  BUILD_DIRECTORY,
  PROJECT_ROOT,
} = require('./constants');

//the clean options to use
const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
}

/**
 * Config types
 * Function
 * Object
 * Promise
 */
module.exports = () => {
  return {
    mode: 'none',
    devtool: false,
    plugins: [
      //Every plugin is constructor
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Webpack',
        /* favicon: './static/favicon.ico', */
      }),
      new CleanWebpackPlugin(cleanOptions),
    ]
  }
}