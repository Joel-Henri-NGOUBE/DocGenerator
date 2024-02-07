const express = require("express")

const fs = require("fs")

const PDFDocument = require('pdfkit');

const blobStream  = require('blob-stream');

const app = express()

const port = 3250

app.use(express.json())






app.get("", (req, res) => {
  
    const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

    // doc.pipe(fs.createWriteStream('output.pdf'));
    
    // const stream = doc.pipe(blobStream());
    // doc.pipe(fs.createWriteStream('./file.pdf'))
    // const PDF = require("./file.pdf")
    // Attacher le PDF directement à la réponse dès la fin de la création du document
    doc.pipe(res)
        
    // doc.on("data", (data) => {res.write(data)})
    // doc.on("end", () => {res.end()})

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
    .text('here is some wrapped text...', 100, 300)
    .font('Times-Roman', 13)
    .moveDown()
    .text("lorem", {
        width: 412,
        align: 'justify',
        indent: 30,
        columns: 2,
        height: 30,
        ellipsis: true
    });

    // res.writeHead(200,{"Content-Type": "application/pdf", "Content-Disposition": `attachment;filename=output.pdf`})
    
    doc.end();
    // res.header("Content-Type", "application/pdf").send(doc)

    // stream.on('finish', () => {
    //   // get a blob you can do whatever you like with
    //   const blob = stream.toBlob('application/pdf');
    //   // console.log(blob)
    //   // const url = URL.createObjectURL(blob)
    //   // console.log(url)
    
    //   res.header("Content-Type", "application/pdf").send(blob)

      
    //   // or get a blob URL for display in the browser
    //   // const url = stream.toBlobURL('application/pdf');
    // //   iframe.src = url;
    //   // console.log(url)
    //   // console.log(doc)
    // // res.header("Content-Type", "application/pdf").send(url)${url}
    // // res.header("Content-Type", "application/pdf").header(`Content-Disposition", "attachment;filename=hehe.pdf`).send('Here is some vector graphics...').end()
    // // res.header("Content-Type", "text/html").header("Content-Disposition", "attachment;filname=hehe.pdf").send(`<iframe src="blob:http://127.0.0.1:3250/00fc1af2-268a-4af7-a010-4db27b9fcecd" width="500px" height="500px"></iframe>`)
    // // res.header("Content-Type", "text/html").send(`<iframe src="${url}" width="500px" height="500px"></iframe>`)
    // // res.header("Content-Type", "application/pdf").send(PDF)
    // //   res.header("Content-Type", "application/pdf").send(`<script > window.open(${url})</script>`)
    // //   res.header("Content-Type", "text/html").send(`<iframe src="http://localhost:3250/${url}" width="200px"></iframe>`)
    // //   res.header("Content-Type", "text/html").send(`<embed type="application/pdf" original-url="${url}">`)
    // });
})

app.get("/getfile", (req,res) => {
  console.log(__dirname + "\\file.pdf")
  res.header("Content-Type", "application/pdf").sendFile(__dirname + "\\output.pdf")
})



app.listen(port, () => {
    console.log(`Initiation de l'écoute sur le port ${port}`)
})