import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HomePage from '../HomePage/HomePage'
import LoginPageMain from '../LoginPage'

const RouthPath = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPageMain />} />
      </Routes>
    </div>
  )
}

export default RouthPath
