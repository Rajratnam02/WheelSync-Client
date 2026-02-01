import React from 'react'
import Navbar from '../components/Navbar'
import Blur from '../components/Blur'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import { Explore } from './Explore'
import Booking from './Booking'

const MainApp = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-fixed bg-center relative  min-h-screen">
        <Navbar />
        <Blur />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/booking/:motorId' element={<Booking />} />
        </Routes>
    </div>
  )
}

export default MainApp