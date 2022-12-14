const KoaRouter = require('koa-router')

const {login} = require('../../controller/v2/user.controller')

const router = new KoaRouter({prefix:'/api/v2'})

router.get('/login',login)

module.exports = router