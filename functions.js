const PDFDocument = require('pdfkit');


function createPDF(visualize, response, onData, onEnd, whichFunction, addHeaders){
    const doc = new PDFDocument({ bufferPages: true, font: 'Courier' })
    
    function addSample(){

        doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
    
        // some vector graphics
        doc
        .save()
        .moveTo(100, 150)
        .lineTo(100, 250)
        .lineTo(200, 250)
        .fill('#FF3300');
    
        doc.circle(280, 200, 50).fill('#6600FF');
    
        // an SVG path
        doc
        .scale(0.6)
        .translate(470, 130)
        .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
        .fill('red', 'even-odd')
        .restore();
    
        // and some justified text wrapped into columns
        doc
        .text('And here is some wrapped text...', 100, 300)
        .font('Times-Roman', 13)
        .moveDown()
        .text("lorem", {
            width: 412,
            align: 'justify',
            indent: 30,
            columns: 2,
            height: 300,
            ellipsis: true
        });
    }

    if(visualize){
        doc.pipe(response)
    }  
    
    if(!visualize){
        doc.on("data", onData)
        doc.on("end", onEnd)
    }

    if(whichFunction === "addSample"){
        addSample()
    }

    if(!visualize){
        addHeaders()
    }
    // response.writeHead(200,{"Content-Type": "application/pdf", "Content-Disposition": `attachment;filename=output.pdf`})
    
    doc.end();
}



module.exports = { createPDF }