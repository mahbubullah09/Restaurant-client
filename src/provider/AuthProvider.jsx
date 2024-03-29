import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
      const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });

        return ()=>{
            return unsubscribe();
        }
    },[])


    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const singin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo ={

        user,
        loading,
        createUser,
        singin,


    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;