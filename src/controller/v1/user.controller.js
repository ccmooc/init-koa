
const { ServerError } = require('../../core/httpError')

class UserController {
    async login (ctx) {
        ctx.body = 'v1/login'
    }
    async add(ctx) {
        if (true) {
            throw new ServerError()
        }
        ctx.body = 'v1/add'
    }
}

module.exports = new UserController()