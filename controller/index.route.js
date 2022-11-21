const registerRoute = require('./register.route')
const dashboardRoute = require('./dashboard.route')
const Router = require("express").Router()

const verifyUser = require('../middleware/auth')

Router.use('/register' , registerRoute)
Router.use('/dashboard' , verifyUser , dashboardRoute)

module.exports = Router
 