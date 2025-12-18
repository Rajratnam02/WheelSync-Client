import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'
import Verify from './pages/Verify'
import ProfilePage from './pages/ProfilePage'
import Rent from './pages/Rent'
import Confirm from './pages/Confirm'
import Footer from './components/Footer'
import Billing from './pages/Billing'

const App = () => {
  return (
    <div className=' bg-zinc-900  text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/rent/:motorId' element={<Rent />} />
          <Route path='/profile/*' element={<ProfilePage />} />
          <Route path = "/confirm" element={<Confirm />} />
          <Route path= "billing" element={<Billing />} />
        </Routes>
        <Footer />
        <ToastContainer />
    </div>
  )
}

export default App