const connection = require("../Connection/connection")

function addPDF(id, data, modalities){
    let newConnect = connection(`INSERT INTO data (
        user_id, 
        companyName,
        companySiren, 
        companyStreet, 
        companyZipcode, 
        companyCity, 
        companyCountry, 
        companyPhone, 
        companyMail, 
        companySite, 
        clientName, 
        clientZipcode, 
        clientCity, 
        clientPhone, 
        quotationDate, 
        quotationReference, 
        quotationValidity, 
        quotationSender, 
        quotationPerformanceDate, 
        wantsToSign,
        date) 
        VALUES ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}', '${data[5]}', '${data[6]}', '${data[7]}', '${data[8]}', '${data[9]}',  '${data[10]}', '${data[11]}', '${data[12]}', '${data[13]}', '${data[14]}', '${data[15]}', '${data[16]}', '${data[17]}','${data[18]}', '${data[19]}', CURRENT_TIMESTAMP)`)

        newConnect.query("SELECT LAST_INSERTED_ID()", (err, rows, fields) => {            
            const modString = modalities.map((element) => `('${rows[0].id}', '${element.performanceTitle}', '${element.performanceDescription}', '${element.quantity}', '${element.unitPrice}', '${element.tva}')`).join(", ")
            newConnect.query(`INSERT INTO data_devis (data_id, performanceTitle, performanceDescription, quantity, unitPrice, tva) VALUES ${modString}`)
        }, true)
    }

module.exports = { addPDF }

// `INSERT INTO client (prenom, nom, ville, age)
// VALUES
// ('Rébecca', 'Armand', 'Saint-Didier-des-Bois', 24),
// ('Aimée', 'Hebert', 'Marigny-le-Châtel', 36),
// ('Marielle', 'Ribeiro', 'Maillères', 27),
// ('Hilaire', 'Savary', 'Conie-Molitard', 58);`
