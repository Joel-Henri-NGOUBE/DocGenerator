const bcrypt = require("bcryptjs")
const {connection} = require("./connection")
const jwt = require("jsonwebtoken")


function logUser(username, password, res, req){
    let newConnect = connection("SELECT * FROM users WHERE username = ?", (err, rows) => {
        console.log(rows)
        if(!rows.length){
            return res.json({message: "Vous n'avez pas de compte utilisateur"})
        }
        
        // password = bcrypt.hashSync(password, bcrypt.genSaltSync())
        if(bcrypt.compareSync(password, rows[0].password)){
            // req.session.authorized = true
            // req.session.data = {id: rows[0].id, username: username, password: password}        
            // console.log(req.session)
            const token = jwt.sign({id: rows[0].id, username: username},"THESECRETTOSIGN")
            newConnect.query("UPDATE users SET token = ? WHERE id = ?", [token, rows[0].id], (err) => {
                if(err){
                    console.log(err)
                }
            })

            // console.log(token)
            res.json({loggedIn: true, token: token})
          // return 
        }
        else{
            res.json({message: "Votre mot de passe est erroné"})

        }
        // newConnect.query(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], () => {
        // })
    }, true, [username])}

module.exports = { logUser }