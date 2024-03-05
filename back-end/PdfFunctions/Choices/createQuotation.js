const {signing} = require('../Options/signing');

const {addBottom} = require('../Utils/addBottom');

const {addBoard} = require('../Utils/addBoard');

function createQuotation(document, company, client, modalities, quotation, wantsToSign, number){
    console.log(quotation)
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

    const stringHeight1 = document.fontSize(10).heightOfString(`ENTREPRISE`, {
        width: 250,
        align: "left"})

    const stringHeight2 = document.heightOfString(`Bonjour \nBonjour \nBonjour \nBonjour`, {
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
        height: stringHeight1,
        width: 750,
        align: "left",
    })

    document
    // .moveDown(4)
    .font("./Fonts/TT Chocolates Trial Regular.otf")
    .fontSize(10)
    .fillColor("#000000",0.65)
    .text(`${company.name} \n${company.street} \n${company.zipcode} ${company.city}\n${company.phone} \n${client.name} \n${client.street} \n${client.zipcode} ${client.city}\n${client.phone}`, {
        columns: 2,
        columnGap: 10,
        height: stringHeight2,
        width: 750,
        align: "left",
    })

    document
    // .moveDown(4)
    .rect(50, 250, 330, 105)
    document.fill("#EFEFEF")

    const stringHeight3 = document.heightOfString(`Bonjour \nBonjour \nBonjour \nBonjour \nBonjour`)

    // console.log(`Bonjour\nBonjour\n\tBonjour`)

    document
    .moveDown(5)
    .fillColor("#000000",0.65)
    .text(`            Date du devis:\n            Référence du devis:\n            Durée de validité du devis\n            Emis par:\n            Date de début de prestation:\n${quotation.date}:\n${quotation.reference}:\n${quotation.validity}\n${quotation.sender}\n${quotation.performanceDate}`, {
        // .text(`\n\n\n\n\nDate du devis:\nRéférence du devis:\nDurée de validité du devis\nEmis par:\nDate de début de prestation:\n${"Date du devis"}:\n${"Référence"}:\n${"Durée de validité du devis"}\n${"Emis par"}:\n${"Date de début de prestation:"}`, {
        columns: 2,
        columnGap: 25,
        height: stringHeight3,
        width: 330,
        align: "left",
    }).lineWidth(50)
    
    addBoard(document,modalities)

    if(wantsToSign){
        signing(document)
    }

    addBottom(document, company)
}

module.exports = { createQuotation }
