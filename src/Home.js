import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate  = useNavigate()
  function loginhandler (e) {
    e.preventDefault()
    navigate("/Question")

  }
  return (
    <div className='home'>
      <form onSubmit={loginhandler}>
        <input type="text" placeholder='Enter your name' autoFocus required></input><br/>
        <input type="password" placeholder='Enter your password' required></input><br/>
        <button type='submit' >Log in</button>
      </form>
        
    </div>
  )
}

export default Home