//this is the page the user first sees when they go to the web app
//a welcome page

import React from 'react'
import style from '../design/style.css'
import logo from '../design/logo.png'



//the structure of the main page, html
export default function Mainpage() {
  return (

    <body>
       <div className="banner">
        <div className="navbar">
          <img src={logo} class="logo"/>
          <ul>
            <li><a href="/login">LOG IN</a></li>
            
          </ul>
        </div>

        <div className="content">
            <h1>PALATE</h1>
            <p>We keep your nutrition at our best interest!<br/> Sign up today for a healthier life.</p>
            <div>
                <a href="/signup">
                    <button type="button"><span></span>SIGN UP</button>
                </a>
            </div>
           </div>
       </div>
       
    </body>
  )
}