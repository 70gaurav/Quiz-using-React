import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Selection from './Selection'
import Question from './Question'
import "./Quiz.css"

export default function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Home' element={<Home />}></Route>
    <Route path='/Register' element={<Register />}></Route>
    <Route path='/Selection' element={<Selection />}></Route>
    <Route path='/Question' element={<Question />}></Route>
  </Routes>
  </BrowserRouter>
  )
}

