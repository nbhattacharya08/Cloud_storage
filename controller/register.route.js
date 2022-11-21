const express = require('express')
const Router = express.Router()
const register = require('../repository/register.repository')
Router.use(express.json())
Router.post('/',(req,res)=>{
    const data = register({username : req.body.username , password : req.body.password})
    res.status(200).json(data)
})
module.exports = Router
