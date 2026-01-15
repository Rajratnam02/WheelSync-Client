import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Blur from './Components/Blur'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import MainApp from './Pages/MainApp'
import Register from './Pages/Register'
import { ToastContainer } from 'react-toastify'
import Verify from './Pages/Verify'

const App = () => {
  return (
    <div >
        <Routes>
          <Route path="/*" element={<MainApp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} /> 
          <Route path='/verify' element={<Verify />} />
        </Routes>
        <ToastContainer position='top-right' autoClose={3000} />
    </div>
  )
}

export default App