/**
 * Created by vik_kod on 19.06.17.
 */

import Router from 'koa-router';
import messages from '../models/messages';
import convert from 'koa-convert';
import KoaBody from 'koa-body';

const router = new Router(),
    koaBody = convert(KoaBody());

router
    .get('/api.get', async (ctx, next) => {

        ctx.body = await messages.getAll()
    })

    .post('/api.post', koaBody, async (ctx, next) => {
        ctx.status = 201;
        console.log(ctx.request.body);
        ctx.body = await messages.create(ctx.request.body)
    });

export function routes () { return router.routes() }
export function allowedMethods () { return router.allowedMethods() }