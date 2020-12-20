import Koa from 'koa';
import cors from 'koa-cors';
import logger from 'koa-logger';
import helmet from 'koa-helmet';

import router from './src/router';
import {origin} from './src/constants/environment';

const app = new Koa();

app.use(logger());
app.use(cors({
  origin
}));
app.use(helmet());

app.use(router.routes()).use(router.allowedMethods());

export default app;
