const registerRoute = require('./register.route')
const Router = require("express").Router()

Router.use('/register' , registerRoute)

module.exports = Router
