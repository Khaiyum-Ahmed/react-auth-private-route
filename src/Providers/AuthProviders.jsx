import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from '../Firebase.init'
import React from "react";

export const AuthContext = createContext(null);


const AuthProviders = ({ children }) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        name: "user",
        createUser
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