import React, { useEffect, useState } from 'react'
import { useAccessChecker } from '../authMonitor/hooks/useAccessChecker'
import { onLogOut } from '../authMonitor/onLogOut'
// import { hasAccess } from '../AuthMonitor/hasAccess'
// import { onAccessRight } from '../authMonitor/onAccessRight'

export default function Doc() {
    
    const [token, isSecondMount] = useAccessChecker()

    return (
        <div>
            {isSecondMount}
            <button onClick={() => onLogOut(token)}>Se déconnecter</button>
        </div>
    )
}
