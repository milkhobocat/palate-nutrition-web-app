import { initializeApp } from "firebase/app";
//importing authentication module from firebase
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


//creating the app
const app = initializeApp({
    //value from .env file 
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

//initialising firebase
//const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(app);

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     // ...

//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID

//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(app);

//to b able to export this everywhere in our app


export const auth = getAuth(app);
export default app;