const sequelize = require('../db/index')
const { DataTypes } = require('sequelize')
const User = sequelize.define('bbb', {
    user: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps: false
})
// sequelize.sync({ force: true })

module.exports = User