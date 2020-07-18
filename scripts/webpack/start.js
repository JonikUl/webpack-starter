//Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');

//Config
const getConfig = require('./webpack.config.js');

//Utils
const {
  choosePort
} = require('./utils.js');

//Constants
const {
  HOST,
  PORT
} = require('./constants');

//Compiler Webpack
const compiler = webpack(getConfig());

(async () => {
  const choosenPort = await choosePort(PORT);
  try {
    if (!choosenPort) {
      console.log(chalk.yellowBright('→ It\'s impossible to run the app :(('));
      return null;
    }
    const server = new DevServer(compiler, {
      host: HOST,
      port: port,
      historyApiFallback: true,
      overlay: true,
      quiet: true,
      clientLogLevel: 'none',
      noInfo: true,
      after: (app) => {
        app.use(
          hot(compiler, {
            log: false,
          }),
        );
      },
    });

    server.listen(PORT, HOST, () => {
      console.log(`${chalk.greenBright('→ Server listening on ')} ${chalk.blueBright(`http://${HOST}:${PORT}`)}`);
    });
  } catch (error) {
    console.log(chalk.redBright('→ Error!'));
    console.error(error.message || error);
  }
})()