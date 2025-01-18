import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';
import style from '../design/style.css'
import authlogo from '../design/authlogo.png'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

//this page deals withh the sign up function
export default function SignUp() {
  
  //const declaration
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const { signup } = useAuth(); //calling signup from AuthContext
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); //by default we are not loading at all, this will only be true once we have signed in
  const navigate = useNavigate()

  //async function
  async function handleSubmit(e) {
    e.preventDefault()
    
    //if passwords do not match
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
     return setError('Passwords mismatched !') //error pops up to user
    }

    try{
     // console.log("helloim here first") //debugging
      setError('')
      setLoading(true) //prevents user from clicking 'Sign In' button multiple times which could lead to creating multiple accounts
      await signup(emailRef.current.value, passwordRef.current.value)
     //console.log("helloim here") //debugging
      navigate('/meals') //redirects user to stats page
     //console.log("helloim here 43") //debugging
    } catch{
      setError('Failed to create account') //alert pops up to user
    }
    
    setLoading(false)
  }


  //the structure of what signup page looks like 
  //html
  return (
    <>
        <div className="banner2">
          <div className="signupbox">
                <img src ={authlogo} className="authlogo"/>
                  <h1>PALATE</h1>
                  {error && <Alert className="alertbox" variant="danger">{error}</Alert>}<br/>
                  <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input type="email" ref={emailRef} required name="" placeholder="Enter Email"/>
                    <p>Password</p>
                    <input type="password" name="" ref={passwordRef} required placeholder="Enter Password"/>
                    <p>Confirm Password</p>
                    <input type="password" name="" ref={passwordConfirmRef} required placeholder="Confirm Password"/>
                    <input type="submit" disabled={loading} name="" value="Sign Up"/> 
                    <a href="/login">Already have an account?</a><br/>
                  </form>
          </div>
        </div>
        </>

  )
}