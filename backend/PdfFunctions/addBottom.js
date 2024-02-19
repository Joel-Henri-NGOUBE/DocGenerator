function addBottom(document,company){
        
    const stringHeight1 = document.fontSize(8).heightOfString(`Bonjour`)
    const stringHeight2 = document.fontSize(8).heightOfString(`Bonjour \nBonjour \nBonjour \nBonjour`)
    
    document
    .moveTo(51, document.page.height - 50 - stringHeight1 -  stringHeight2)
    .lineTo(560, document.page.height - 50 - stringHeight1 -  stringHeight2)
    .lineWidth(1)
    .fillAndStroke("#ADADAD", "#ADADAD")

    // console.log("moveTo")
    document
    .moveDown(1)
    // .moveTo(51,500)
    .fontSize(8)
    .font("./Fonts/TT Chocolates Trial Bold.otf")
    .fillColor("#000000")
    .text(`                              Siège social\nCoordonnées`, 51, document.page.height - 30 - stringHeight1 -  stringHeight2, {
        columns: 2,
        columnGap: 10,
        height: stringHeight1,
        width: 600,
        align: "left",
    })
    
    document
    // .moveDown(1)
    // .fontSize(8)
    .font("./Fonts/TT Chocolates Trial Regular.otf")
    .fillColor("#000000")
    .text(`                              Numéro SIREN: ${company.siren}\n                              ${company.street} \n                              ${company.zipcode} ${company.city}\n                              ${company.country}\nTéléphone: ${company.phone}\nEmail: ${company.mail}\nSite Web: ${company.site}`, 51, document.page.height - 30 - stringHeight2, {
        columns: 2,
        columnGap: 10,
        height: stringHeight2,
        width: 600,
        align: "left",
    })
    
    document
    .moveTo(0,document.page.height - 10)
    .lineTo(document.page.width, document.page.height - 10)
    .lineWidth(20)
    .fillAndStroke("#11EBCD", "#11EBCD")
}

module.exports = { addBottom }