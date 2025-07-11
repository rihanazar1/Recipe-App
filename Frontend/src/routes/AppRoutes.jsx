import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from '../views/home/Home'
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes 

