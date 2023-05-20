import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../../Firebase.config";

export const authContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const Authproviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return()=>{
        unsubscribe();
    }
},[])

const authInfo={
    user,
    createUser,
    login,
    logout,
    loading,
    googleLogin
    
}
  return (
    <authContext.Provider value={authInfo}>
         {children} 
   </authContext.Provider>
  )
   
};

export default Authproviders;
