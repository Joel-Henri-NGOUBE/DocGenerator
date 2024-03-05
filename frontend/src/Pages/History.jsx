import React, { useEffect, useState } from 'react'
import { onAccessRight } from '../authMonitor/onAccessRight'

export default function History({ token }) {

    const [fetchPDF, setFetchPDF] = useState(false)

    useEffect(() => {              
        onAccessRight("http://localhost:3250/access", token, () => setFetchPDF(true))
    }, [])

    useEffect(() => {              
        onAccessRight("http://localhost:3250/getallfiles", token, () => {})
    }, [fetchPDF])

    return (
        <div>History</div>
    )
}
