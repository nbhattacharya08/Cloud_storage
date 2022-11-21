const express = require('express')
const Router = express.Router()

const users = require('../models/user.model')

Router.use(express.json())
Router.get('/' , async (req , res) => {
    res.send((await users.findOne({username : req.headers.username})).files)
    //console.log(await users.findOne({username : "password"}))
})
module.exports=Router