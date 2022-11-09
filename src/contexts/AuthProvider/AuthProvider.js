import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../../components/firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);



 const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);

   const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
       const unsubscibe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            return unsubscibe();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;