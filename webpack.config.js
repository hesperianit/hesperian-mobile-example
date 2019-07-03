const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const preProcess = require('./webpack.preprocess');
const appConfig = require('./app-config.json');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'www'),
  entry: './js/app.js',
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(appConfig.version),
      __PREPROCESS__: JSON.stringify(preProcess.getPageInfo())
    }),
    new HtmlWebpackPlugin({
      title: 'Hello',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([{
        from: 'img/**/*',
        to: '.'
      },
      {
        from: 'locales/**/*',
        to: '.'
      }
    ], {})
  ],
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',
                {
                  debug: true,
                  "useBuiltIns": "entry",
                  "corejs": {
                    "version": 3,
                    "proposals": true
                  },
                  "targets": {
                    "android": "4.4",
                    "ios": "9"
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader', {
          loader: "sass-loader",
          options: {
            includePaths: ['./www/css']
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};