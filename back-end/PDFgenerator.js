const express = require("express")

const cors = require("cors")

const { treatPdfData } = require("./PdfFunctions/RequestAnalyzer/treatPdfData")

const { addUser } = require("./DatabaseFunctions/Insertions/addUser")

const { logUser } = require("./DatabaseFunctions/Selections/logUser")

const { accessGiver } = require("./Middlewares/Access/accessGiver")

const { contentExaminator } = require("./Middlewares/Content/contentExaminator")
const { logUserOut } = require("./DatabaseFunctions/Updations/logUserOut")

const app = express()

const port = 3250

app.use(express.urlencoded({"extended" : true}))
app.use(express.json())
app.use(cors("http://localhost:3000"))

app.post("/login", (req, res) => {

  const { username, password } = req.body

  if( username && password ){
    logUser(username, password, res, req)
  }
  
})

// Inscription terminée
app.post("/signup", (req, res) => {

  const { username, password } = req.body

  if( username && password ){
    addUser(username, password, res)
  }
  
})

// app.use(contentExaminator)

app.get("/download", (req, res) => {
  
    treatPdfData(false, req, res)

})

app.get("/getfile", (req,res) => {

    treatPdfData(true, req, res)

})
app.use(accessGiver)

app.get("/access", (req, res) => {

  return res.json({access: "given", token: req.token, message: "User authentified"})

})

app.get("/logout", (req, res) => {

    logUserOut(req.payload.id)

    return res.json({message: "User disconnected"})
  
})
// getPDF
app.get("/getallfiles", (req, res) => {

})

// deletePDF
app.delete("/deletefile", (req, res) => {
  
})

// addPDF on createPDF

// app.post("/addfile", (req, res) => {
  
// })



app.listen(port, () => {
    console.log(`Initiation de l'écoute sur le port ${port}`)
})