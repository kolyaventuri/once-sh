const path = require('path');
const webpack = require('webpack');

const cssLoaderOpts = 'css-loader?modules&importLoaders=true&localIdentName=[name]__[local]___[hash:base64:5]';

module.exports = {
  entry: [
    path.join(process.cwd(), 'src/client/index.tsx')
  ],
  plugins: [
    new webpack.EnvironmentPlugin({
      ENV: 'local',
      GA_TRACKING: process.env.GA_TRACKING || null
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: cssLoaderOpts
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ] // JS is still required so that HMR resolves
  },
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.join(process.cwd(), 'static/javascripts'),
    publicPath: '/javascripts/'
  }
};
