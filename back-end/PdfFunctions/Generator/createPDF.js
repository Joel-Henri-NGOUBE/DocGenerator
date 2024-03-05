const PDFDocument = require('pdfkit-table');

// const table = require('pdfkit-table');

const {addSample} = require('../Utils/Sample/addSample');

const {createQuotation} = require('../Choices/createQuotation');


function createPDF(visualize, response, onData, onEnd, whichFunction, addHeaders, data){
    const doc = new PDFDocument({ 
        bufferPages: true,
        font: 'Courier-Bold',
        margin: 50
      })

    
    if(visualize){
        doc.pipe(response)
    }  
    
    if(!visualize){
        doc.on("data", onData)
        doc.on("end", onEnd)
    }

    // doc.fill

    if(whichFunction === "addSample"){
        addSample(doc)
    }

    if(whichFunction === "createQuotation"){
        createQuotation(doc, data[0], data[1], data[2], data[3], data[4], data[5])
    }

    if(!visualize){
        addHeaders()
    }
    // response.writeHead(200,{"Content-Type": "application/pdf", "Content-Disposition": `attachment;filename=output.pdf`})
    
    doc.end();
}



module.exports = { createPDF }