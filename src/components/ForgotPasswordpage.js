import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import style from '../design/style.css'
import authlogo from '../design/authlogo.png'
//import { useNavigate } from "react-router-dom";
// this page deals with resetting password to an email


export default function ForgotPasswordpage() {

//const declaration

  const emailRef = useRef()
  const { resetPassword } = useAuth() //calling resetpassword from AuthContext
  const [error, setError] = useState('')
  const[message, setMessage]= useState('')
  const [loading, setLoading] = useState(false) //by default we are not loading at all, this will only be true once we have inputted valid email
//  const navigate = useNavigate()

  //async function ie. a function that always return a promise
  async function handleSubmit(e) {
    e.preventDefault()
  

    try{
      setMessage('')
      setError('')
      setLoading(true) //prevents user from clicking 'Reset Password' button multiple times 
      await resetPassword(emailRef.current.value)//checks if user email already exists through firebase
      setMessage('An email has been sent for password reset')
    } catch{
      setError('Failed to reset password')
    }
    
    setLoading(false)
  }


  //skeleton of what forgotpassword page looks like
  return (
    <body>
        <div class="banner2">
          <div class="forgotpasswordbox">
                <img src ={authlogo} class="authlogo"/>
                  <h1>PALATE</h1>
                  {error && <Alert className="alertbox" variant="danger">{error}</Alert>}<br/>
                  <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input type="email" ref={emailRef} name="" placeholder="Enter Email"/>
                    <input type="submit" disabled={loading} name="" value="Reset Password"/>
                    <a href="/signup">Create New Account</a>
                  </form>
          </div>
        </div>
    </body>
  )
}