const hesperianWebpack = require('hesperian-mobile/webpack');
const preProcess = require('./webpack.preprocess');
const appConfig = require('./app-config.json');

const configSpec = {
  rootDir: __dirname,
  preProcess: preProcess,
  appConfig: appConfig
}

const webpackConfig = hesperianWebpack.createConfig(configSpec);
module.exports = webpackConfig;