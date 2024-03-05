const { createPDF } = require("../Generator/createPDF")

function treatPdfData(visualize, req, res){
const resWrite = (data) => {
    res.write(data)
  }

  const resEnd = () => {
    res.end()
  }

  const resWriteHead = () => {
    res.writeHead(200, {"Content-Disposition": `attachment;filename=output.pdf`})
  }

  const { company, client, quotation, wantsToSign, modalities } = req.query
//   console.log(object)
  const newQuotation = {...(JSON.parse(quotation.toString())), reference: Math.floor(Date.now()*Math.random()).toString(16).toUpperCase(), date: new Date().toLocaleDateString()} 
  // console.log(JSON.parse(company.toString()))
  const data = [JSON.parse(company.toString()), JSON.parse(client.toString()), JSON.parse(modalities.toString()), newQuotation, wantsToSign, 1]
//   return dataconst data = treatData(req.query)

  createPDF(visualize, res, resWrite, resEnd, "createQuotation", resWriteHead, data)
}

module.exports = { treatPdfData }