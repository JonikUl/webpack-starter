//Core
const webpack = require('webpack');
const chalk = require('chalk');

//Config
const getConfig = require('./webpack.config.js');

//Compiler Webpack
const compiler = webpack(getConfig());

//Run
compiler.run((error, stats) => {
  if (error) {
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }
    return null;
  }

  const info = stats.toString({
    hash: true,
    version: true,
    colors: true,
    modules: false,
    entrypoints: false,
  });

  console.log(chalk.greenBright('Build completed'));
  console.log(info);

  if (stats.hasErrors()) {
    console.log(chalk.redBright('Error!'));
    console.error(info);
  }
  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright('Warning!'));
    console.warn(info);
  }
});