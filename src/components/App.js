//importing all of the files used for the Web App.
//this is what ties the project together
import REACT, {useState, useEffect} from "react"
import { getAuth } from "firebase/auth";
import { auth } from '../firebase';
import Mainpage from "./Mainpage";
import LogInpage from "./LogInpage";
import SignUp from "./SignUp";
import Mealspage from "./Mealspage";
import ForgotPasswordpage from "./ForgotPasswordpage";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom'

//import Test from "./Test";
import AppControlsCounter from './AppControls/AppControlsCounter'
import AppControlsDelete from './AppControls/AppControlsDelete'
import AppControlsInput from './AppControls/AppControlsInput'
import AppMealsList from './AppMealsList/AppMealsList'
//this is the routing page which is used for url navigation
//This is essential as I am using an authentication feature
function App() {

  return(
    
     <Router>
      <AuthProvider>
      <Routes>
        <Route path= '' element = {<Mainpage/>}/>
        <Route path= '/login' element = {<LogInpage/>}/>
        <Route path= '/signup' element = {<SignUp/>}/>
        <Route path= '/forgot-password' element = {<ForgotPasswordpage/>}/>
        <Route path= '/meals' element = {<Mealspage/>}/>
      </Routes>
      </AuthProvider>
     </Router>
  ) 
}

export default App;