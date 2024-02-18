const express = require("express")

const { createPDF } = require("./functions")

// const { addSample } = require("./functions")

// const fs = require("fs")

// const PDFDocument = require('pdfkit');

// const blobStream  = require('blob-stream');

const app = express()

const port = 3250

app.use(express.json())

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
      quotation.date
      // quotation.reference
      quotation.validity
      quotation.sender
      quotation.performanceDate

*/

const contentExaminator = (req, res, next) => {
  // En principe les requêtes arrivent au format JSON
  // Si méthode vaut GET analyser req.query
  // Si méthode vaut POST analyser req.body

}
// En post
app.get("/", (req, res) => {
  
  const resWrite = (data) => {
    res.write(data)
  }

  const resEnd = () => {
    res.end()
  }

  const resWriteHead = () => {
    res.writeHead(200, {"Content-Disposition": `attachment;filename=output.pdf`})
  }

  createPDF(false, res, resWrite, resEnd, "addSample", resWriteHead)

})
// Analyser toutes les données reçues en GET via l'URL (query string transformée potentiellement en JSON)
app.get("/getfile", (req,res) => {

  const resWrite = (data) => {
    res.write(data)
  }

  const resEnd = () => {
    res.end()
  }

  const resWriteHead = () => {
    res.writeHead(200, {"Content-Disposition": `attachment;filename=output.pdf`})
  }

  // createPDF(true, res, resWrite, resEnd, "addSample", resWriteHead)
  createPDF(true, res, resWrite, resEnd, "createQuotation", resWriteHead)

})



app.listen(port, () => {
    console.log(`Initiation de l'écoute sur le port port}`)
})