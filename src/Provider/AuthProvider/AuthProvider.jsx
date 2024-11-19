import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider()
import {auth} from '../../firebase/firebase.init'

const AuthProvider = ({ children }) => {

    //Sign In with Google // 

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }






  const authInfo = {
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
