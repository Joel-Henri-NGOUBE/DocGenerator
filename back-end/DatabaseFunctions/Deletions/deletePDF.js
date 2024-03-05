const {connection} = require("../Connection/connection")

function deletePDF(id){
    connection(`DELETE FROM data_devis WHERE id = :id`, () => {
    }, false)
}

module.exports = { deletePDF }