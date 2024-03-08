import React, { useEffect } from 'react'
import InputLabel from '../Components/Inputs/InputLabel'
// import { onAccessRight } from '../authMonitor/onAccessRight'
import { useAccessChecker } from '../authMonitor/hooks/useAccessChecker'

export default function Login({login, setLogin, setMessages}) {
    
// Refaire à chaque fois la requête de connexion pour que ça passe par le middleware de vérification de token
// Supprimer le token au clic de déconnexion pour que le middleware fasse un set de loggedIn à false

    // useEffect(() => {              
    //     onAccessRight("http://localhost:3250/access", token, () => {window.location.href = "/"})
    // }, [])

    const [token, isSecondMount] = useAccessChecker(() => {window.location.href = "/"})

    // function logIn(e,login){
    //     e.preventDefault()
    //     fetch("http://localhost:3250/login",{
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify(login)
    //     })
    //     .then((res) => res.json())
    //     // Plutôt enregistrer login dans le localStorage
    //     // Renvoie également les identifiants pour refaire à chaque fois la requête vers login
    //     .then((res) => res.loggedIn ? setLoggedIn(true) : setMessages(res.message))
    // }

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
        .then((res) => res.loggedIn ? (() => {localStorage.setItem("token", res.token); window.location.href = "/" })() : setMessages(res.message))
    }

    return (
    <div>
        {isSecondMount}
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
        <button onClick={() => window.location.href = "/signup"} type="button">Inscrivez-vous</button>
        {/* <button onClick={() => setRedirect(r => !r)}>Inscrivez-vous</button> */}

        </form>
    </div>
  )
}
