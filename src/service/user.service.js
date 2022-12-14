
const User = require('../model/user.model')

class UserService {
    async add() {
        User.create({
            user:'揽风'
        })
    }
}


module.exports = new UserService()