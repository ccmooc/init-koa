const requireDirectory = require('require-directory')
const Router = require('koa-router')
const path = require('path')
//初始化

class Init{
    static initCore(app) {
        Init.app = app
        Init.initRouter()
        
    }
    static initRouter() {
        let paths = `${process.cwd()}/src/router/`
        requireDirectory(module, paths, { visit: loadModule })
        function loadModule(obj) {
            if (obj instanceof Router) {
                Init.app.use(obj.routes())
            }
        }
    }
}

module.exports = Init