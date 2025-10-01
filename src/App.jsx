import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className=' bg-zinc-900 text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>

        <ToastContainer />
    </div>
  )
}

export default App