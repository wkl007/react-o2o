const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
KoaBody({multipart: true});

const app = new Koa();
const router = new Router();

//首页————广告（超值特惠）
let homeAdData = require('./home/ad');
router.get('/api/homeAd', (ctx, next) => {
  ctx.body = homeAdData;
});

//首页————推荐列表（猜你喜欢）
let homeListData = require('./home/list.js');
router.get('/api/homeList/:city/:page', function (ctx) {
  const params = ctx.params;
  const paramsCity = params.city;
  const paramsPage = params.page;
  console.log(`当前城市：${paramsCity} 当前页数：${paramsPage}`);

  ctx.body = homeListData
});

// 搜索结果页————搜索结果 - 三个参数
let searchListData = require('./search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', function (ctx) {
  const params = ctx.params;
  const paramsPage = params.page;
  const paramsCity = params.city;
  const paramsCategory = params.category;
  const paramsKeyword = params.keyword;

  console.log(`当前页数：${paramsPage} 当前城市：${paramsCity} 当前类别：${paramsCategory} 关键字：${paramsKeyword}`);

  ctx.body = searchListData
});

// 搜索结果页————搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function (ctx) {
  const params = ctx.params;
  const paramsPage = params.page;
  const paramsCity = params.city;
  const paramsCategory = params.category;

  console.log(`当前页数：${paramsPage} 当前城市：${paramsCity} 当前类别：${paramsCategory}`);

  ctx.body = searchListData
});

// 详情页————商户信息
let detailInfo = require('./detail/info.js');
router.get('/api/detail/info/:id', function (ctx) {
  const params = ctx.params;
  const id = params.id;

  ctx.body = detailInfo
});

// 详情页————用户评论
const detailComment = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id', function (ctx) {
  const params = ctx.params;
  const page = params.page;
  const id = params.id;

  console.log(`商户id:${id} 当前页数:${page}`);

  ctx.body = detailComment
});

//订单列表
const orderList = require('./orderlist/orderList.js');
router.get('/api/orderList/:username', function (ctx) {
  const params = ctx.params;
  const username = params.username;

  console.log(`用户名：${username}`);

  ctx.body = orderList
});

//提交评论
router.post('/api/submitComment', function (ctx) {
  let data = ctx.request.body;
  if (data.id && data.comment) {
    console.log(data.id, data.comment);
    ctx.body = {
      errno: 0,
      msg: 'ok'
    }
  }
});

app
  .use(KoaBody())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.error(`服务器启动成功：localhost:${8080}`)
});
