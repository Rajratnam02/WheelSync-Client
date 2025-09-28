import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div className=' bg-zinc-900 text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App