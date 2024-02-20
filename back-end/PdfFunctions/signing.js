function signing(document){

    const width = document.page.width - 115 - document.fontSize(8).widthOfString("Signature du client")

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

module.exports = { signing }