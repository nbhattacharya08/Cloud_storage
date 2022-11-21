const User = require('../models/user.model')
 
const register = async (data) => {
     const newUser = new User(data)
     return await newUser.save()
}
module.exports = register