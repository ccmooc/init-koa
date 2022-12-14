const koaRouter = require('koa-router')

const { login ,add} = require('../../controller/v1/user.controller')

const router = new koaRouter({ prefix: '/api/v1' })

router.get('/login', login)
router.get('/add',add)

module.exports = router