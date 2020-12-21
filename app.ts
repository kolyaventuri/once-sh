import path from 'path';
import fs from 'fs';
import Koa from 'koa';
import cors from 'koa-cors';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import send from 'koa-send';
import serve from 'koa-static';

import {server as debug} from './src/lib/debug';
import {isLocal, origin} from './src/constants/environment';

const app = new Koa();

if (isLocal) {
  require('./webpack/dev-server').default(app);

  if (fs.existsSync(path.join(__dirname, '.env'))) {
    const dotenv = require('dotenv');
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }
  }
}

app.use(logger());
app.use(cors({
  origin
}));
app.use(helmet());

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  debug(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(serve('./static'));

app.use(async ctx => {
  await send(ctx, 'src/views/index.html');
});

app.on('error', (err, ctx) => {
  const context = ctx ? ctx.toString() : '';
  const error = `Server Error:\n${err.stack}${context}`;

  debug(new Error(error));
});

export default app;
