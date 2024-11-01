import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        // const {employees} = getLocalStorage()
        const {employees} = getLocalStorage()
        console.log(employees)
        setUserData({employees})
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider