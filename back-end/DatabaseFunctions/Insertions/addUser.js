const {connection} = require("../Connection/connection")

const bcrypt = require("bcryptjs")

function addUser(username, password, res){
    let newConnect = connection("SELECT * FROM users WHERE username = ?", (err, rows, data) => {
        // console.log(rows)
        if(rows.length){
            return res.json({message: "Un utilisateur est déjà enregistré avec cet identifiant"})
        }
        password = bcrypt.hashSync(password, bcrypt.genSaltSync())
        newConnect.query(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], () => {
            return res.json({message: "Votre compte a été créé"})
        })
    }, true, [username])
}

module.exports = { addUser }