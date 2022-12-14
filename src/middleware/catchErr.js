//统一错误处理
const { HttpError }  = require('../core/httpError')
exports.catchErr = async (ctx, next) => {
     try {
        await next()
     } catch (err) {
         if (err instanceof HttpError) {
             ctx.body = {
                 code: err.code,
                 errorCode: err.errorCode,
                 msg: err.msg
             }
         }
         
    }
}

