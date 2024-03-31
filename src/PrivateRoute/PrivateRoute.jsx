import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContex)
    const location = useLocation();


    if(loading){
        return <h2>loading</h2>
    }
    if (user){
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;