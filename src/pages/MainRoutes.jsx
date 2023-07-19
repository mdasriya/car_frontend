import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import Register from './Register'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

    </Routes>
  )
}

export default MainRoutes
