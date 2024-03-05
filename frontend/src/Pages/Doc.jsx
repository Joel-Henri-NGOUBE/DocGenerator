import React, { useEffect, useState } from 'react'
// import { hasAccess } from '../AuthMonitor/hasAccess'
import { onAccessRight } from '../authMonitor/onAccessRight'

export default function Doc({ token, setToken }) {
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        setToken(token)           
    }, [])

    // useEffect(() => {
    //     localStorage.setItem("token", token)
    // })

    // useEffect(() => {
    //     // console.log(token)
    //         onAccessRight("http://localhost:3250/access", token, () => {})
    // }, [])

    useEffect(() => {
        // console.log(token)
        if(token){
            onAccessRight("http://localhost:3250/access", token, () => {})
        }
    }, [token])

    return (
        <div>{token}</div>
    )
}
