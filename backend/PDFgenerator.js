const express = require("express")

const cors = require("cors")

const { treatPdfData } = require("./PdfFunctions/treatPdfData")

const mysql = require("mysql")

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pdfgenerator",
  port: 3306
})

connect.connect((err) => {
  if(err){
    console.log(err)
    return
  }
  console.log("Connexion à la base de données réussie")
})

connect.query("SELECT * FROM users", (error, rows, fields) => {
    if(error){
      console.log(error)
      return
    }
    console.log(rows.map((element) => `${element.username} a l'ID ${element.id} et son mot de passe est ${element.password}`))
})
// const { addSample } = require("./functions")

// const fs = require("fs")

// const PDFDocument = require('pdfkit');

// const blobStream  = require('blob-stream');

const app = express()

const port = 3250

app.use(express.json())
app.use(cors())

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
// En post
app.get("/download", (req, res) => {
  
  // const resWrite = (data) => {
  //   res.write(data)
  // }

  // const resEnd = () => {
  //   res.end()
  // }

  // const resWriteHead = () => {
  //   res.writeHead(200, {"Content-Disposition": `attachment;filename=output.pdf`})
  // }

  // const data = treatData(req.query)
  treatPdfData(false, req, res)
  // createPDF(false, res, resWrite, resEnd, "createQuotation", resWriteHead, data)

})
// Analyser toutes les données reçues en GET via l'URL (query string transformée potentiellement en JSON)
app.get("/getfile", (req,res) => {

  treatPdfData(true, req, res)


  // const resWrite = (data) => {
  //   res.write(data)
  // }

  // const resEnd = () => {
  //   res.end()
  // }

  // const resWriteHead = () => {
  //   res.writeHead(200, {"Content-Disposition": `attachment;filename=output.pdf`})
  // }
  // // console.log(req.query)
  // // const { company, client, quotation, wantsToSign, modalities } = req.query
  // // const newQuotation = {...(quotation.toString())), reference: "JUG4GRZGFH78EG5R8ZE", date: new Date().toLocaleDateString()} 
  // // console.log(JSON.parse(company.toString()))
  // // const data = [JSON.parse(company.toString()), JSON.parse(client.toString()), JSON.parse(modalities.toString()), newQuotation, wantsToSign, 1]
  
  // const data = treatData(req.query)
  // // createPDF(true, res, resWrite, resEnd, "addSample", resWriteHead)
  // createPDF(true, res, resWrite, resEnd, "createQuotation", resWriteHead, data)
  // // console.log(req.query)
  // // console.log(req.body.company)
  // // console.log(req.body.wantsToSign)
  // // console.log(req.query.company)
  // // console.log(req.query.wantsToSign)
})



app.listen(port, () => {
    console.log(`Initiation de l'écoute sur le port ${port}`)
})