import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase.config";


export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    const [userFinal, final] = useState()
    const [setLoading, loading] = useState()

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

   const AuthInfo = {userFinal, setLoading,createUser,Login,googleLog}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Authprovider;