import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase.config";


export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    const [userFinal, SetUserFinal] = useState(null)
    const [setLoading, loading] = useState(true)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLog = ()=>{
        return signInWithPopup(auth,provider)
    }
    const Login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const Logout = () =>{
        return signOut(auth)
    }


   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        SetUserFinal(currentUser)
    })
    return unSubscribe
   },[])

   const AuthInfo = {userFinal, setLoading,createUser,Login,googleLog,Logout}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Authprovider;