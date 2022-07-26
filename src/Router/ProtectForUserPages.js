import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectForUserPages({ IsloggedIn, children }) {
    if (IsloggedIn === false) {
        return <Navigate to='/' replace />
    }
    return children;
}

export default ProtectForUserPages