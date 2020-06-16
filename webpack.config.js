//Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
const pathToClean = ['dist'];

//the clean options to use
const cleanOptions = {
  verbose: true,
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
      new CleanWebpackPlugin(pathToClean, cleanOptions),
    ]
  }
}