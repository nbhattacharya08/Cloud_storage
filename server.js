const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const indexRoute = require('./controller/index.route')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/' , indexRoute)

mongoose.connect('mongodb://localhost:27017/Cloud_storage',{
    useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    useUnifiedTopology: true,
}).then(app.listen(3000,()=>{
    console.log("Server is running on port 3000")
}))