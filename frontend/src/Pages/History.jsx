import React, { useEffect, useState } from 'react'
import { onAccessRight } from '../authMonitor/onAccessRight'
import { useAccessChecker } from '../authMonitor/hooks/useAccessChecker'
import { onLogOut } from '../authMonitor/onLogOut'

export default function History() {

    // const [fetchPDF, setFetchPDF] = useState(false)

    const [token, isSecondMount] = useAccessChecker()

    // useEffect(() => {              
    //     onAccessRight("http://localhost:3250/access", token, () => setFetchPDF(true))
    // }, [])

    // useEffect(() => {              
    //     onAccessRight("http://localhost:3250/getallfiles", token, () => {})
    // }, [fetchPDF])

    return (
        <div>
            {isSecondMount}
            History
            <button onClick={() => onLogOut(token)}>Se déconnecter</button>
        </div>
    )
}
