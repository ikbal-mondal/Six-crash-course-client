import React, { createContext, useState } from 'react';
import app from '../Firebase.init/firebase.init';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const Context = ({children}) => {

    const [user,setUser] = useState({displayName: 'Mr: Hello World '})
 
  const createUser = (email,password)  => {

    return createUserWithEmailAndPassword(auth,email,password)
  }

 const loginUser = (email, password) => {

    return signInWithEmailAndPassword(auth,email,password)
 }



   const loginWithGitHub = (provider) => {
       
      return signInWithPopup(auth,provider)

   }

   const loginWithGoogle = (provider) => {
       
     return signInWithPopup(auth,provider)
   }


    const authInfo = {user,loginWithGitHub,loginWithGoogle,createUser,loginUser}

    return (
       
       <AuthContext.Provider value={authInfo}>
       {children}
       </AuthContext.Provider>
    );
};

export default Context;