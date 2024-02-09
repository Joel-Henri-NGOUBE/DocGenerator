const express = require("express")

const { createPDF } = require("./functions")

// const { addSample } = require("./functions")

// const fs = require("fs")

// const PDFDocument = require('pdfkit');

// const blobStream  = require('blob-stream');

const app = express()

const port = 3250

app.use(express.json())



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
    console.log(`Initiation de l'écoute sur le port ${port}`)
})