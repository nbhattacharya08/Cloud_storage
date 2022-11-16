const Router = require('express').Router()
const register = require('../repository/register.repository')
Router.post('/',(req,res)=>{
    const data = register({
        username:req.username,
        password:req.password
    })
    res.status(200).json(data)
})
module.exports = Router
