import React from 'react'
import { useState } from 'react'
import './App.css'
import NavBar from './layout/NavBar' 
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Login from './pages/auth/Login'
import Instant from './pages/Instant'
import Home from './pages/Home'
import Verification from './pages/Verification'
import SignUp from './pages/auth/SignUp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Instant' element={<Instant/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Verification' element={<Verification />} />

       </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
