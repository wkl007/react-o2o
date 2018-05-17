const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//首页————广告（超值特惠）
let homeAdData = require('./home/ad');
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = homeAdData;
  console.log(2222)
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(8080, () => {
  console.error(`服务器启动成功：localhost:${8080}`)
});
