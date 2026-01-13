import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Blur from './Components/Blur'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import MainApp from './Pages/MainApp'
import Register from './Pages/Register'

const App = () => {
  return (
    <div >
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} /> 
        </Routes>
    </div>
  )
}

export default App