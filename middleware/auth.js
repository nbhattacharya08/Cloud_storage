const getUsers = require('../repository/user.repository')
const users = getUsers()
const verifyUser = async (req , res , next) => {
    if(req.body.username){
        if(req.body.password){
            const collection = users.find({username : req.body.username , password: req.body.password})
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
