const {connection} = require("../Connection/connection")

function getPDF(id, res){
    let newConnect = connection(`SELECT * FROM data_devis WHERE id = :id`, (err, rows, fields) => {
        const dataString = rows.map((element) => `data_id = ${element.id}`).join(" OR ")
        newConnect.query(`SELECT * FROM modalities WHERE ${dataString}`, (err, rows2, fields2) => {
            // Designer l'objet
            res.json({quotationData: rows, modalities: rows2})
        })
    }, true)

}

module.exports = { getPDF }