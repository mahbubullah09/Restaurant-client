import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
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

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


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

   const updateUserProfile = (name, image) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      })
   }

    const authInfo ={

        user,
        loading,
        createUser,
        singin,
        singout,
        updateUserProfile,
        googleLogin


    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;