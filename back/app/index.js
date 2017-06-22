/**
 * Created by vik_kod on 19.06.17.
 */

import Koa from 'koa';
import config from '../config/default';
import {routes, allowedMethods} from './middleware/routes';
import cors from 'kcors';
const app = new Koa();

app
    .use(cors())
    .use(routes())
    .use(allowedMethods());

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});