//imports
import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';
import style from '../design/style.css'
import authlogo from '../design/authlogo.png'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom";

export default function LogInpage() {

  //const declaration
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth() //calling login from AuthContext
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false) //by default we are not loading at all, this will only be true once we have logged in
  const navigate = useNavigate() //to redirect us to a page

  //async function
  async function handleSubmit(e) {
    e.preventDefault()
  

    try{
      setError('')
      setLoading(true) //prevents user from clicking 'login' button multiple times 
      await login(emailRef.current.value, passwordRef.current.value) //checks if user email and pass is valid through firebase
      navigate('/meals')//redirects user to home page, ie. meals page
    } catch{
      setError('Failed to log in')
    }
    
    setLoading(false)
  }



  //how structure of login page looks
  //html
  return (

    
        <div className="banner2">
          <div className="loginbox">
                <img src ={authlogo} className="authlogo"/>
                  <h1>PALATE</h1>
                  {error && <Alert className="alertbox" variant="danger">{error}</Alert>}<br/>
                  <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input type="email" ref={emailRef} name="" placeholder="Enter Email"/>
                    <p>Password</p>
                    <input type="password" ref={passwordRef} name="" placeholder="Enter Password"/>
                    <input type="submit" disabled={loading} name="" value="Log In"/>
                    <a href="/forgot-password">Forgot Password?</a><br/>
                    <a href="/signup">Create New Account</a>
                  </form>
          </div>
        </div>

  )
}