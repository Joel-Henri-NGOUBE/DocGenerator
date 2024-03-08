const { connection } = require("../Connection/connection")

function logUserOut(id){
    connection("UPDATE users SET token = NULL WHERE id = ?", () => {}, false, [id])
}

module.exports = { logUserOut }