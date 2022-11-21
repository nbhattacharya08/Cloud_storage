const user = require('../models/user.model')

const getUser = async () => {
    return user.find({})
}

module.exports=getUser