
//项目初始化

const Koa = require('koa')
const init = require('../core/init')
const { catchErr }  = require('../middleware/catchErr')
const app = new Koa()
//错误中间件
app.use(catchErr)
//初始化路由
init.initCore(app)
module.exports = app