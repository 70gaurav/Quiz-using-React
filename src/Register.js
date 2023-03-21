import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name , setname ] = useState("")
  const [email , setemail ] = useState("")
  const [password , setpassword ] = useState("")
  const navigate = useNavigate()
  function registerhandler  (e) {
    e.preventDefault()
    console.log(name, email , password)
    navigate("/")
  }
  return (
    <div className='register'>
      <form onSubmit={registerhandler}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setname(e.target.value)} autoFocus required></input><br/>
        <input type="email" placeholder='Enter your e-mail' value={email}  onChange={(e)=>setemail(e.target.value)} required></input><br/>
        <input type="password" placeholder='Enter your password'value={password}  onChange={(e)=>setpassword(e.target.value)} required></input><br/>
        <button type='submit' >Register</button>
      </form>

    </div>
  )
}

export default Register