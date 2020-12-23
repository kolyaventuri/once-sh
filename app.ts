import path from 'path';
import fs from 'fs';
import Koa from 'koa';
import cors from 'koa-cors';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
// We need to import the regular helmet since default CSP directives aren't properly exported from koa-helmet
import helmet2 from 'helmet';
import send from 'koa-send';
import serve from 'koa-static';

import {server as debug} from './src/lib/debug';
import {isLocal, origin} from './src/constants/environment';

const app = new Koa();

if (isLocal) {
  /* eslint-disable @typescript-eslint/no-var-requires */
  require('./webpack/dev-server').default(app);

  if (fs.existsSync(path.join(__dirname, '.env'))) {
    const dotenv = require('dotenv');
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }
  }
  /* eslint-enable @typescript-eslint/no-var-requires */
}

app.use(logger());
app.use(cors({
  origin
}));
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet2.contentSecurityPolicy.getDefaultDirectives(),
      'script-src': ['\'self\'', 'https://*.fontawesome.com', '\'unsafe-inline\''],
      'connect-src': ['\'self\'', 'https://*.fontawesome.com']
    }
  }
}));

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
  const context: string = ctx ? ctx.toString() : '';
  const error = `Server Error:\n${err.stack as string}${context}`;

  debug(new Error(error));
});

export default app;
