//Core
const {
  HotModuleReplacementPlugin
} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

//Constants
const {
  BUILD_DIRECTORY,
  PROJECT_ROOT,
  SOURCE_DIRECTORY,
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
    entry: [
      'webpack-hot-middleware/client?reload=true&quiet=true',
      SOURCE_DIRECTORY,
    ],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'main.js'
    },
    mode: 'none',
    devtool: false,
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, ]
    },
    plugins: [
      //Every plugin is constructor
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Webpack',
        /* favicon: './static/favicon.ico', */
      }),
      new CleanWebpackPlugin(cleanOptions),
      new HotModuleReplacementPlugin(),
    ]
  }
}