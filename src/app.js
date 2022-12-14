//入口文件
const app = require('./app/index')

const { APP_PORT } = require('./config/config.default')
app.listen(APP_PORT, () => {
    console.log(`server is start port : ${APP_PORT}`)
})