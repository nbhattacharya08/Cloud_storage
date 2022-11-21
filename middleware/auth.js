const getUsers = require('../repository/user.repository')
const users = getUsers()
const verifyUser = async (req , res , next) => {
    if(req.headers.username){
        if(req.headers.password){
            const collection = (await users).findOne({username : req.headers.username , password: req.headers.password})
            if(collection){
                next()
            }
            else{
                res.status(401).json({
                    status: "failure",
                    message: "Invalid username or password"
                })
            }
        }
        else{
            res.status(401).json({
                status : "failure",
                message : "Password Missing"
            })
        }
    }
    else{
        res.status(401).json({
            status: "Failure",
            message: "Authorization Required"
        })
    }
}
module.exports = verifyUser
