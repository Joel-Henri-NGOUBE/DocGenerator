const mysql = require("mysql")

function connection(query, callback){

    const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pdfgenerator",
    port: 3306
    })

    connect.connect((err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("Connexion à la base de données réussie")
    })

    // connect.query("SELECT * FROM users", (error, rows, fields) => {
    //     if(error){
    //     console.log(error)
    //     return
    //     }
    //     console.log(rows.map((element) => `${element.username} a l'ID ${element.id} et son mot de passe est ${element.password}`))
    // })
    connect.query(query, callback)
}

module.exports = { connection }