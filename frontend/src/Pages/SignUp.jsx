import React, { useEffect } from 'react'
import InputLabel from '../Components/Inputs/InputLabel'
import { onAccessRight } from '../authMonitor/onAccessRight'
import { useAccessChecker } from '../authMonitor/hooks/useAccessChecker'

export default function SignUp({signup, setSignup, setMessages}) {
    
    const [token, isSecondMount] = useAccessChecker(() => {window.location.href = "/"}, "http://localhost:3000/signup")

    // useEffect(() => {              
    //     onAccessRight("http://localhost:3250/access", token, () => {window.location.href = "/"}, "http://localhost:3000/signup")
    // }, [])

    function signUp(e,signup){
        e.preventDefault()
        console.log(signup)
        fetch("http://localhost:3250/signup",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(signup)
        })
        .then((res) => res.json())
        .then((res) => setMessages(res.message))
    }
    return (
    <div>
        {isSecondMount}
        <form>
        <InputLabel
        id="username"
        label="Nom d'utilisateur"
        value={signup.username}
        onChange={(e) => setSignup({...signup, username: e.target.value})}
        />
        <InputLabel
        id="password"
        label="Mot de passe"
        value={signup.password}
        onChange={(e) => setSignup({...signup, password: e.target.value})}
        />
        <button onClick={(e) => signUp(e,signup)}>S'inscrire</button>
        <button onClick={() => window.location.href = "/login"} type="button">Connectez-vous</button>
        {/* <button onClick={() => setRedirect(r => !r)}>Connectez-vous</button> */}

        </form>
    </div>
  )
}
