import { createContext } from "react";


const AuthContext = createContext(null);


const AuthProviders = ({ children }) => {

    const authInfo = {
        name: "user"
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
 * 3. set a default value
 * 4. [ attention Please !!! ]
 */