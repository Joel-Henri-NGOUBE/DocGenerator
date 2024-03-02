const { connection } = require("../DatabaseFunctions/connection")

const tokenGetter = (req) => {
    return req.header("Authorization").replace("Bearer ", "")
}

const getUserData = (req) => {
    const token = tokenGetter(req)
    const data = jwt.verify(token, "THESECRETTOSIGN" )
    return data
}

const checkTokenValidity = (req, res, token, next) => {
    const { id } = getUserData(req)
    connection("SELECT token FROM users WHERE id = ?", (err, rows, fields) => {
        if(err){
            console.log(err)
            return
        }
        if(rows[0].token === token){
            next()
        }
        return res.redirect("http://localhost:3000/")
    }, false, [id])
}


module.exports = { tokenGetter, checkTokenValidity, getUserData }