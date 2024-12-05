import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase.init';


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const signUpFunc=(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const loginFunc=(email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }
    const userValue={
        signUpFunc,
        setUser,
        user,
        loginFunc
    }
    return (
        <div>
            <AuthContext.Provider value={userValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;