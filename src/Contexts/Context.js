import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase.init/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const Context = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGitHub = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const loginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };


 const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
 }


  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (logInUser) => {
      setUser(logInUser);
      console.log("auth change", logInUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loginWithGitHub,
    loginWithGoogle,
    createUser,
    loginUser,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
