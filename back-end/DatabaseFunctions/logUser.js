const bcrypt = require("bcryptjs")
const {connection} = require("./connection")

function logUser(username, password, res){
    connection("SELECT * FROM users WHERE username = ?", (err, rows, data) => {
        console.log(rows)
        if(!rows.length){
            return res.json({message: "Vous n'avez pas de compte utilisateur"})
        }
        // password = bcrypt.hashSync(password, bcrypt.genSaltSync())
        if(bcrypt.compareSync(password, rows[0].password)){
          return res.json({loggedIn: true})
          // return 
        }
        return res.json({message: "Votre mot de passe est erroné"})
        // newConnect.query(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], () => {
        // })
    }, false, [username])}

module.exports = { logUser }