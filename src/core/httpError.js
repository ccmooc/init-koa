//错误返回格式
class HttpError extends Error {
    constructor(msg, errorCode, code) {
        super()
        this.mag = msg
        this.errorCode = errorCode
        this.code = code
        
    }
}
class ServerError extends HttpError {
    constructor(msg, errorCode) {
        super()
        this.errorCode = errorCode || 10000
        this.code = 500
        this.msg = msg || '服务器异常'
    }
}
class NotFound extends Error {
    constructor(msg, errorCode ) {
        super()
        this.errorCode = errorCode || 10000
        this.code = 404
        this.msg = msg || '资源未找到'
    }
}


module.exports = {
    HttpError,
    ServerError,
    NotFound
}