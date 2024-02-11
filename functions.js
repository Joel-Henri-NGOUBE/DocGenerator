// const { heightOfString } = require('pdfkit');
const PDFDocument = require('pdfkit-table');

// const table = require('pdfkit-table');

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

function signing(document){

    let width = document.page.width - 115 - document.fontSize(8).widthOfString("Signature du client")
    console.log(width)
    document
    .moveDown(3)
    // .moveTo(51,500)
    .fontSize(8)
    .font("./Fonts/TT Chocolates Trial Regular.otf")
    .fillColor("#000")
    .text(`Signature du client`, width, document.y)

    document
    .moveDown(0.5)
    .rect(document.page.width - 250, document.y + 0, 200, 50)
    document.fill("#EFEFEF",0.5)
}

function addBottom(document){
        
    let height1 = document.fontSize(8).heightOfString(`Bonjour`)
    let height2 = document.fontSize(8).heightOfString(`Bonjour \nBonjour \nBonjour \nBonjour`)
    
    document
    .moveTo(51, document.page.height - 50 - height1 -  height2)
    .lineTo(560, document.page.height - 50 - height1 -  height2)
    .lineWidth(1)
    .fillAndStroke("#ADADAD", "#ADADAD")

    // console.log("moveTo")
    document
    .moveDown(1)
    // .moveTo(51,500)
    .fontSize(8)
    .font("./Fonts/TT Chocolates Trial Bold.otf")
    .fillColor("#000000")
    .text(`                              Siège social\nCoordonnées`, 51, document.page.height - 30 - height1 -  height2, {
        columns: 2,
        columnGap: 10,
        height: height1,
        width: 600,
        align: "left",
        // continued: true,
        // width: 150
    })
    
    document
    // .moveDown(1)
    // .fontSize(8)
    .font("./Fonts/TT Chocolates Trial Regular.otf")
    .fillColor("#000000")
    .text(`                              Numéro SIREN: Z5ETR7FRGHD8UEH\n                              22 Rue du Bourget \n                              19000 Nouvelle\n                              France\nTéléphone: 0678754335\nEmail: ryr@fhdhd.com\nSite Web: www.djdjhdhss.fr`, 51, document.page.height - 30 - height2, {
        columns: 2,
        columnGap: 10,
        height: height2,
        width: 600,
        align: "left",
        // continued: true,
        // width: 150
    })
    
    document
    .moveTo(0,document.page.height - 10)
    .lineTo(document.page.width, document.page.height - 10)
    .lineWidth(20)
    .fillAndStroke("#11EBCD", "#11EBCD")
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

    let height1 = document.fontSize(10).heightOfString(`ENTREPRISE`, {
        width: 250,
        align: "left"})

    let height2 = document.heightOfString(`Bonjour \nBonjour \nBonjour \nBonjour`, {
        width: 250,
        align: "left"})
    
    // console.log(height)


    document
    .moveDown(4)
    .fontSize(10)
    .fillColor("#000000")
    .text(`ENTREPRISE \nDESTINATAIRE`, {
        columns: 2,
        columnGap: 10,
        height: height1,
        width: 750,
        align: "left",
        // continued: true,
        // width: 150
    })

    document
    // .moveDown(4)
    .font("./Fonts/TT Chocolates Trial Regular.otf")
    .fontSize(10)
    .fillColor("#000000",0.65)
    .text(`Baptiste Gauthier \n17 Avenue \n60356 Austanville\n06 84 73 94 85 \nBaptiste Gauthier \n17 Avenue \n60356 Austanville\n06 84 73 94 85`, {
        columns: 2,
        columnGap: 10,
        height: height2,
        width: 750,
        align: "left",
        // continued: true,
        // width: 150
    })

    document
    // .moveDown(4)
    .rect(50, 250, 330, 105)
    document.fill("#EFEFEF")

    const heightLevel3 = document.heightOfString(`Bonjour \nBonjour \nBonjour \nBonjour \nBonjour`)

    // console.log(`Bonjour\nBonjour\n\tBonjour`)

    document
    .moveDown(5)
    .fillColor("#000000",0.65)
    .text(`            Date du devis:\n            Référence du devis:\n            Durée de validité du devis\n            Emis par:\n            Date de début de prestation:\n${"Date du devis"}:\n${"Référence du devis"}:\n${"Durée de validité du devis:"}\n${"Emis par:"}\n${"Date de début de prestation:"}`, {
        // .text(`\n\n\n\n\nDate du devis:\nRéférence du devis:\nDurée de validité du devis\nEmis par:\nDate de début de prestation:\n${"Date du devis"}:\n${"Référence"}:\n${"Durée de validité du devis"}\n${"Emis par"}:\n${"Date de début de prestation:"}`, {
        columns: 2,
        columnGap: 25,
        height: heightLevel3,
        width: 330,
        align: "left",
        // continued: true,
        // width: 150
    }).lineWidth(50)
    
    document
    .moveTo(51,400)
    .lineTo(560, 400)
    .lineWidth(2)
    .fillAndStroke("#11EBCD", "#11EBCD")

    let table = {
        headers: [ "Prestation", "Quantité", "Prix unitaire", "TVA (%)", "Total HT", "Total TTC" ],
        rows: [
          [ "Switzerland", "12%", "+1.12%", "Switzerland", "12%", "+1.12%" ],
          [ "France", "67%", "-0.98%","France", "67%", "-0.98%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
          [ "England", "33%", "+4.44%","England", "33%", "+4.44%" ],
        ],

      }

    document
    .moveDown(10)
    .table(table, {
                    width: 510, 
                    fontFamily: "./Fonts/TT Chocolates Trial Regular.otf",
                    divider: {
                        header: { disabled: true, width: 1, opacity: 1 },
                        horizontal: { disabled: false, width: 0.5, opacity: 0.5 },
                    },
                    padding: 3,
                    columnSpacing: 15,})
    
    document
    .font("./Fonts/TT Chocolates Trial Bold.otf")

    console.log(document.x,document.y,document.page.width,document.page.height)

    let heightLevel4 = document.fontSize(13).heightOfString(`Bonjour `)
    
    document
    .moveDown(1)
    // .moveTo(51,500)
    .fontSize(13)
    .font("./Fonts/TT Chocolates Trial Bold.otf")
    .fillColor("#000000")
    .text(`Total HT\n${"1000£"}`, document.page.width - 200, document.y, {
        columns: 2,
        columnGap: 10,
        height: heightLevel4,
        width: 200,
        align: "left",
        // continued: true,
        // width: 150
    }) 
    
    document
    .moveDown(0.5)
    // .moveTo(51,500)
    .fontSize(13)
    .font("./Fonts/TT Chocolates Trial Bold.otf")
    .fillColor("#11EBCD")
    .text(`Total TTC\n${"1000£"}`, document.page.width - 200, document.y, {
        columns: 2,
        columnGap: 10,
        height: heightLevel4,
        width: 200,
        align: "left",
        // continued: true,
        // width: 150
    })

    

    // console.log(document.page)

    if(true){
        signing(document)
    }

    addBottom(document)
    // document.addPage()
    // addBottomLine()

    // .fontSize(10)
    // .fillColor("#000000",0.65)
    
    // document.list(["lorem ipsum lorem ipsum lorem ipsum", "lorem ipsumum"], 100, 200, "bulletRadius")

    // document.fill("#FFFF00")

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