import React from 'react'
import InputLabel from './InputLabel'

export default function Login({login, setLogin, setRedirect, setLoggedIn, setMessages}) {
    
// Refaire à chaque fois la requête de connexion pour que ça passe par le middleware de vérification de token
// Supprimer le token au clic de déconnexion pour que le middleware fasse un set de loggedIn à false

    function logIn(e,login){
        e.preventDefault()
        fetch("http://localhost:3250/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(login)
        })
        .then((res) => res.json())
        // Plutôt enregistrer login dans le localStorage
        // Renvoie également les identifiants pour refaire à chaque fois la requête vers login
        .then((res) => res.loggedIn ? setLoggedIn(true) : setMessages(res.message))
    }
    return (
    <div>
        <form>
        <InputLabel
        id="username"
        label="Nom d'utilisateur"
        value={login.username}
        onChange={(e) => setLogin({...login, username: e.target.value})}
        />
        <InputLabel
        id="password"
        label="Mot de passe"
        value={login.password}
        onChange={(e) => setLogin({...login, password: e.target.value})}
        />
        <button onClick={(e) => logIn(e,login)}>Se connecter</button>
        <button onClick={() => setRedirect(r => !r)}>Inscrivez-vous</button>

        </form>
    </div>
  )
}
