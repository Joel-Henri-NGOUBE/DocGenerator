const express = require("express")

const cors = require("cors")

const { createPDF } = require("./functions")

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

function treatDataGet(object){
  const { company, client, quotation, wantsToSign, modalities } = object
  console.log(object)
  const newQuotation = {...(JSON.parse(quotation.toString())), reference: "JUG4GRZGFH78EG5R8ZE", date: new Date().toLocaleDateString()} 
  // console.log(JSON.parse(company.toString()))
  const data = [JSON.parse(company.toString()), JSON.parse(client.toString()), JSON.parse(modalities.toString()), newQuotation, wantsToSign, 1]
  return data
}

// function treatDataPost(object){
//   const { company, client, quotation, wantsToSign, modalities } = object
//   console.log(object)
//   const newQuotation = {...quotation, reference: "JUG4GRZGFH78EG5R8ZE", date: new Date().toLocaleDateString()} 
//   // console.log(company))
//   const data = [company, client, modalities, newQuotation, wantsToSign, 1]
//   return data
// }

const contentExaminator = (req, res, next) => {
  req.body.company
  req.body.wantsToSign
  // En principe les requêtes arrivent au format JSON
  // Si méthode vaut GET analyser req.query
  // Si méthode vaut POST analyser req.body

}
// En post
app.get("/download", (req, res) => {
  
  const resWrite = (data) => {
    res.write(data)
  }

  const resEnd = () => {
    res.end()
  }

  const resWriteHead = () => {
    res.writeHead(200, {"Content-Disposition": `attachment;filename=output.pdf`})
  }

  const data = treatDataGet(req.query)

  createPDF(false, res, resWrite, resEnd, "createQuotation", resWriteHead, data)

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
  // console.log(req.query)
  // const { company, client, quotation, wantsToSign, modalities } = req.query
  // const newQuotation = {...(quotation.toString())), reference: "JUG4GRZGFH78EG5R8ZE", date: new Date().toLocaleDateString()} 
  // console.log(JSON.parse(company.toString()))
  // const data = [JSON.parse(company.toString()), JSON.parse(client.toString()), JSON.parse(modalities.toString()), newQuotation, wantsToSign, 1]
  
  const data = treatDataGet(req.query)
  // createPDF(true, res, resWrite, resEnd, "addSample", resWriteHead)
  createPDF(true, res, resWrite, resEnd, "createQuotation", resWriteHead, data)
  // console.log(req.query)
  // console.log(req.body.company)
  // console.log(req.body.wantsToSign)
  // console.log(req.query.company)
  // console.log(req.query.wantsToSign)
})



app.listen(port, () => {
    console.log(`Initiation de l'écoute sur le port ${port}`)
})