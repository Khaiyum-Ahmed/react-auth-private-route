/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase.init'

export const AuthContext = createContext(null);


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currently logged user', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a value with something (authinfo)
 * 4. [ attention Please !!! ]
 * 5. use the authProvider  in the main.jsx
 * 6. access the children inside the authProvider in the main.jsx
 * 7. export authContext
 */