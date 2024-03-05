const jwt = require("jsonwebtoken")

const { connection } = require("../../DatabaseFunctions/Connection/connection")

const accessGiver = (req, res, next) => {
  
  const authHeader = req.header("Authorization")
  // console.log(req.headers)
  // console.log(req.headers.authorization)
  if(!authHeader){
    // console.log("Le header est:", authHeader)
    return res.json({access: "denied", message: "User not authentified"})
  }

  const token = authHeader.replace("Bearer ", "")
  // console.log("Le token est:", token)
  if(!token){
    return res.json({access: "denied", message: "User not authentified"})
  }

  const payload = jwt.verify(token, "THESECRETTOSIGN")

  console.log(payload)

  if(!payload || !payload?.id){
    return res.json({access: "denied", message: "Invalid token"})
  }

  const { id } = payload
  console.log(id)

  connection("SELECT token FROM users WHERE id = ?", (err, rows, fields) => {
    if(err){
        console.log(err)
        return res.json({access: "denied", message: "Unkwown identity"})

    }
    if(rows[0].token === token){
        req.token = token
        next()
    }
    // else{
    // return res.redirect("http://localhost:3000/")
    return res.json({access: "denied", message: "Unkwown identity"})
    // }
  }, false, [id])

  // req.data = payload

}

module.exports = { accessGiver }