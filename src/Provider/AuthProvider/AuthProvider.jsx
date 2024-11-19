import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  //Sign In with Google //

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Register with email & password //

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email & password //

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    googleSignIn,
    signUp,
    logIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
