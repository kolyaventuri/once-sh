const webpack = require('webpack');
const merge = require('webpack-merge').default;
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ],
  devServer: {
    hot: true
  }
});
