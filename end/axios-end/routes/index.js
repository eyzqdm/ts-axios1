const router = require('koa-router')();

router.get('/simple/get', async (ctx, next) => {
  console.log('simple-get');
  ctx.body = {
    title: 'hello axios',
  };
});

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  };
});

module.exports = router;
