const { tokenGetter } = require("./token")

const { checkTokenValidity } = require("./token")

const accessGiver = (req, res, next) => {
    let token = tokenGetter(req)
    if(!token){
      return res.redirect("http://localhost:3000/")
      // return res.status(401).json({message: "You're not authorized to connect"})
      // res.
    }
    checkTokenValidity(req, res, token, next)
}

module.exports = { accessGiver }