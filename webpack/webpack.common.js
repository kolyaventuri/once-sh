const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    path.join(process.cwd(), 'src/client/index.tsx')
  ],
  plugins: [
    new webpack.EnvironmentPlugin({
      ENV: 'local',
      GA_TRACKING: process.env.GA_TRACKING || null
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.css' ] // JS is still required so that HMR resolves
  },
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.join(process.cwd(), 'static/javascripts'),
    publicPath: '/javascripts/'
  }
};
