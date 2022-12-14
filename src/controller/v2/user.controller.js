class UserController {
    async login(ctx) {
        ctx.body = 'v2/login'
    }
}


module.exports = new UserController()