import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectForLoginAndRegister({ IsloggedIn, children }) {
    if (IsloggedIn === true) {
        return <Navigate to='/' replace />
    }
    return children;
}

export default ProtectForLoginAndRegister