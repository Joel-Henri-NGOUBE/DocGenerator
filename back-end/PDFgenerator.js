const express = require("express")

const jwt = require("jsonwebtoken")

const cors = require("cors")

const { treatPdfData } = require("./PdfFunctions/treatPdfData")

const { addUser } = require("./DatabaseFunctions/addUser")

// const { addUser } = require("./DatabaseFunctions/addUser")

// const { connection } = require("./DatabaseFunctions/connection")

const { logUser } = require("./DatabaseFunctions/logUser")

const { accessGiver } = require("./Middlewares/accessGiver")


const app = express()

const port = 3250

app.use(express.urlencoded({"extended" : true}))
app.use(express.json())
app.use(cors())

// app.use(cookies())

// Données à avoir
/*
  company 
      company.name
      company.siren
      company.street
      company.zipcode
      company.city
      company.country
      company.phone
      company.mail
      company.site
  
  modalities
      performaneTitle
      performaneDescription
      quantity
      unitPrice
      tva

  client
      client.name
      client.street
      client.zipcode
      client.city
      client.phone

  quotation
      // quotation.date
      // quotation.reference
      quotation.validity
      quotation.sender
      quotation.performanceDate

*/

const contentExaminator = (req, res, next) => {
  req.body.company
  req.body.wantsToSign
  // En principe les requêtes arrivent au format JSON
  // Si méthode vaut GET analyser req.query
  // Si méthode vaut POST analyser req.body

}



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

// app.use(accessGiver)

// En post
app.get("/download", (req, res) => {
  
    treatPdfData(false, req, res)

})

app.get("/getfile", (req,res) => {

    treatPdfData(true, req, res)

})

app.use((req, res, next) => {
  // const { token } = req.
})
// app.use((req, res, next) => {
//   console.log("HEY", req.session)
//   next()
// })

// getPDF
app.get("/getallfiles", (req, res) => {

})

// addUser
// app.post("/adduser", (req, res) => {
  
// })

// deletePDF
app.delete("/deletefile", (req, res) => {
  
})



// addPDF
app.post("/addfile", (req, res) => {
  
})



app.listen(port, () => {
    console.log(`Initiation de l'écoute sur le port ${port}`)
})