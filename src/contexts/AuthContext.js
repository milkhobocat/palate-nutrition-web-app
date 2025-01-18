import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase' //importing firebase
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
//this page deals with Authentication functions such as login, signup and forgot password

 //const auth = getAuth(app);
 //creating const object
 const AuthContext = React.createContext()
 


 export function useAuth(){
    return useContext(AuthContext)
 }

 export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true) //by default, we are loading in 


    //sign up function
    //takes in email and password
   function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password)
  }

  //login function
  //takes in email and password
  function login(email, password){
   return signInWithEmailAndPassword(auth, email, password)
  }


  //reset password
  //takes in email and password
  function resetPassword(email){
    return sendPasswordResetEmail(auth, email)
  }

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
        setLoading(false) //when we have a user, we stop loading
        
    })

    return unsubscribe
 }, [])


  //exporting our functions here to it's respective .js files
    const value = {
       currentUser, 
       login,
       signup,
       resetPassword
    }

 return (
   <AuthContext.Provider  value={value}>
      {/* so that we are not rendering the rest of our app without the user having been loaded in */}
     {!loading && children} 
    </AuthContext.Provider>
  )
 }


/// --------------------------------------------------------------
// https://firebase.google.com/docs/auth/web/start

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });