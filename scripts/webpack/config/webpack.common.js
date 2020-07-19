//Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Constants
const {
  BUILD_DIRECTORY,
  SOURCE_DIRECTORY,
} = require('../constants');

/**
 * Config types
 * Function
 * Object
 * Promise
 */
module.exports = () => {
  return {
    entry: [
      SOURCE_DIRECTORY,
    ],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'main.js'
    },
    mode: 'none',
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
    ]
  }
}