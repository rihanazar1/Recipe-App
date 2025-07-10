import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from '../components/Home'
import Register from '../views/Register/Register'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes 

