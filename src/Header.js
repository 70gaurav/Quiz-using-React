
 import React from 'react'
import { Link } from 'react-router-dom'
 
 function Header() {
   return (
     <header>
        <h1>Check your skills</h1>
        <Link to="/Register"><h2>Register</h2></Link>
     </header>
   )
 }
 
 export default Header