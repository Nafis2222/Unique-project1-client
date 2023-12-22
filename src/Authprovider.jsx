import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";


export AuthContext = createContext(null)

const Authprovider = ({children}) => {
    const [userFinal, final] = useState()
    const [setLoading, loading] = useState()

    const auth = getAuth(app)
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

   const AuthInfo = {userFinal, setLoading,createUser}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Authprovider;