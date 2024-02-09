const PDFDocument = require('pdfkit');

// const {addSample} = require('./functionstest');

function addSample(document){

    // doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
    document.fontSize(25).text('Here is some vector graphics...', 100, 80);

    // some vector graphics
    document
    .save()
    .moveTo(100, 150)
    .lineTo(100, 250)
    .lineTo(200, 250)
    .fill('#FF3300');

    document.circle(280, 200, 50).fill('#6600FF');

    // an SVG path
    document
    .scale(0.6)
    .translate(470, 130)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore();

    // and some justified text wrapped into columns
    document
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

function createQuotation(document, number){

    // doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
    // document.
    document
    .font("./Fonts/TT Chocolates Trial Bold.otf")
    .fillColor("#11EBCD")
    .fontSize(45)
    .text(`DEVIS N° ${number}`)
    // document.fontSize(40).font("./Fonts/couture-bld.otf").text(`DEVIS N${number}`, 300, 85);

    // document
    // .moveDown(1)

    document
    .moveTo(51,120)
    .lineTo(560, 120)
    .lineWidth(4)
    .fillAndStroke("#11EBCD", "#11EBCD")

    let height = document.fontSize(10).heightOfString(`Bonjour \n Bonsoir \n Bonne après-midi \n Bonne nuit`, {
        width: 250,
        align: "left"})
    
    console.log(height)

    document
    .moveDown(4)
    .fontSize(10)
    .fillColor("#000000",0.65)
    .text(`Baptiste Gauthier \n17 Avenue \n60356 Austanville\n06 84 73 94 85 \n Baptiste Gauthier \n17 Avenue \n60356 Austanville\n06 84 73 94 85`, {
        columns: 2,
        columnGap: 10,
        height: height,
        width: 750,
        align: "left",
        // continued: true,
        // width: 150
    })
    
    // document.list(["lorem ipsum lorem ipsum lorem ipsum", "lorem ipsumum"], 100, 200, "bulletRadius")

    document.fill("#FFFF00")

    // // some vector graphics
    // document
    // .save()
    // .moveTo(100, 150)
    // .lineTo(100, 250)
    // .lineTo(200, 250)
    // .fill('#FF3300');

    // document.circle(280, 200, 50).fill('#6600FF');

    // // an SVG path
    // document
    // .scale(0.6)
    // .translate(470, 130)
    // .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    // .fill('red', 'even-odd')
    // .restore();

    // // and some justified text wrapped into columns
    // document
    // .text('And here is some wrapped text...', 100, 300)
    // .font('Times-Roman', 13)
    // .moveDown()
    // .text("lorem", {
    //     width: 412,
    //     align: 'justify',
    //     indent: 30,
    //     columns: 2,
    //     height: 300,
    //     ellipsis: true
    // });
}


// #14B3C5

function createPDF(visualize, response, onData, onEnd, whichFunction, addHeaders){
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
        createQuotation(doc,20)
    }

    if(!visualize){
        addHeaders()
    }
    // response.writeHead(200,{"Content-Type": "application/pdf", "Content-Disposition": `attachment;filename=output.pdf`})
    
    doc.end();
}



module.exports = { createPDF }