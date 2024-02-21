function addBoard(document, modalities){
    
    document
    .moveTo(51,400)
    .lineTo(560, 400)
    .lineWidth(2)
    .fillAndStroke("#11EBCD", "#11EBCD")
    console.log(modalities)
    const rows = modalities.map((element) => {
        let priceHT = parseInt(element.quantity) * parseFloat(element.unitPrice)
        let priceTTC = priceHT * (1 + parseInt(element.tva))
        return [`${element.performanceTitle}\n${element.performanceDescription}`, element.quantity, element.unitPrice, element.tva, priceHT, priceTTC]
    })

    let totalHT = 0 
    let totalTTC = 0 
    for(prestation of rows){
        totalHT += prestation[4]
    }
    for(prestation of rows){
        totalTTC += prestation[5]
    }

    const table = {
        headers: [ "Prestation", "Quantité", "Prix unitaire", "TVA (%)", "Total HT", "Total TTC" ],
        rows: rows,
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
        columnSpacing: 15
    })
    
    document
    .font("./Fonts/TT Chocolates Trial Bold.otf")

    console.log(document.x,document.y,document.page.width,document.page.height)

    const stringHeight = document.fontSize(13).heightOfString(`Bonjour `)
    
    document
    .moveDown(1)
    // .moveTo(51,500)
    .fontSize(13)
    .font("./Fonts/TT Chocolates Trial Bold.otf")
    .fillColor("#000000")
    .text(`Total HT\n${totalHT} €`, document.page.width - 200, document.y, {
        columns: 2,
        columnGap: 10,
        height: stringHeight,
        width: 200,
        align: "left",
    }) 
    
    document
    .moveDown(0.5)
    // .moveTo(51,500)
    .fontSize(13)
    .font("./Fonts/TT Chocolates Trial Bold.otf")
    .fillColor("#11EBCD")
    .text(`Total TTC\n${totalTTC} €`, document.page.width - 200, document.y, {
        columns: 2,
        columnGap: 10,
        height: stringHeight,
        width: 200,
        align: "left",
    })

}

module.exports = { addBoard }