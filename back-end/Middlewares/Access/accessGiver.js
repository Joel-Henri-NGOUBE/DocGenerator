const jwt = require("jsonwebtoken")

const { connection } = require("../../DatabaseFunctions/Connection/connection")

const accessGiver = (req, res, next) => {

  const authHeader = req.header("Authorization")

  if(!authHeader){
    return res.json({access: "denied", message: "User not authentified"})
  }

  const token = authHeader.replace("Bearer ", "")

  if(!token){
    return res.json({access: "denied", message: "User not authentified"})
  }

  const payload = jwt.verify(token, "THESECRETTOSIGN")

  if(!payload || !payload?.id){
    return res.json({access: "denied", message: "Invalid token"})
  }

  const { id } = payload

  connection("SELECT token FROM users WHERE id = ?", (err, rows, fields) => {
    if(err){
      console.log(err)
        return res.json({access: "denied", message: "Unkwown identity"})
    }
    if(rows[0].token === token){
        req.token = token
        req.payload = payload
        next()
    }
    else{
        return res.json({access: "denied", message: "Unkwown identity"})
    }
    
  }, false, [id])


}

module.exports = { accessGiver }