const router = require('koa-router')();

router.get('/simple/get', async (ctx, next) => {
  ctx.body = {
    title: 'hello axios',
  };
});
router.get('/base/get', async (ctx, next) => {
  // todo 获取get请求体??
  ctx.body = {
    body: ctx.request.url,
  };
});
router.post('/base/post', async (ctx, next) => {
  console.log('ctx.request.body-------', ctx.request.body);
  ctx.body = {
    body: { ...ctx.request.body },
  };
});
router.post('/base/buffer', async (ctx, next) => {
  let msg = [];
  ctx.req.on('data', chunk => {
    if (chunk) {
      return msg.push(chunk);
    }
  });
  ctx.req.on('end', () => {
    let buf = Buffer.concat(msg);
    ctx.body = {
      body: buf.toJSON(),
    };
  });
});
module.exports = router;
