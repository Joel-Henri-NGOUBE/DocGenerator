function addSample(document){

    document.fontSize(25).text('Here is some vector graphics...', 100, 80);

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

module.exports = {addSample}