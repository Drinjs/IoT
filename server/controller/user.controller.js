const router = require('koa-router')()

router.post('/login', (ctx) => {
  console.log(ctx)
})

module.exports = router
