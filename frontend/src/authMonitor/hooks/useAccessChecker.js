import { useEffect, useState } from "react"
import { onAccessRight } from "../onAccessRight"

export function useAccessChecker(onAccessGiven = () => {}, defaultUrl = "http://localhost:3000/login"){
    
    const [token, setToken] = useState("")

    const [isSecondMount, setIsSecondMount] = useState(false)

    useEffect(() => {
        // console.log(1)
        const token = localStorage.getItem("token")
        setToken(token)
    }, [])

    // useEffect(() => {
    //     localStorage.setItem("token", token)
    // })

    useEffect(() => {
        // console.log(token)
        // console.log(2)
        if(token && !isSecondMount){
            console.log("2 bis")
            onAccessRight("http://localhost:3250/access", token, onAccessGiven, defaultUrl)
        }
        setIsSecondMount(true)        
    }, [token, isSecondMount])

    // if(isSecondMount){
        useEffect(() => {
            // console.log(token)
            // console.log(3)
            if(!token && isSecondMount){
                console.log("2 bis")
                onAccessRight("http://localhost:3250/access", token, onAccessGiven, defaultUrl)
            }
            // console.log("Bonjour")
            if(token){
                setIsSecondMount(false)        
            }
        }, [token, isSecondMount])
    // }
        return [token, isSecondMount]
    }