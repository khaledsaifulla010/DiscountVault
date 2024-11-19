import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]= useState(true)

  //Sign In with Google //

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Register with email & password //

  const signUp = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email & password //

  const logIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };


  // Sign Out User //


  const signOutUser = ()=>{
    setLoading(false);
    return signOut(auth)
  }

  // Current User //

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User Logged in", currentUser);
        setUser(currentUser);
        setLoading(false)
      } else {
        console.log("No User Logged in!");
        setUser(null);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    googleSignIn,
    signUp,
    logIn,
    user,
    signOutUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
