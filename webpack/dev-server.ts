import webpack from 'webpack';
import Koa from 'koa';
import e2k from 'express-to-koa';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {server as debug} from '../src/lib/debug';
import webpackConfig from './webpack.dev';

export default (app: Koa): void => {
  debug(`Serving from ${webpackConfig.output.publicPath}`);
  const webpackCompiler = webpack(webpackConfig);

  app.use(e2k(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath
  })));
  app.use(e2k(webpackHotMiddleware(webpackCompiler)));
};
