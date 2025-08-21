import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(user){
        return children;
    }
   

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoutes;