import React from 'react'
import SideBar from '../components/Profile/SideBar'
import MainHead from '../components/Profile/MainHead'
import PersonalDetails from '../components/Profile/PersonalDetails'
import MyList from '../components/Profile/MyList'
import Rentals from '../components/Profile/Rentals'
import History from '../components/Profile/History'
import { Route, Routes } from 'react-router-dom'
import MyBookingList from '../components/Profile/MyBookingList'

const ProfilePage = () => {
  return (
    // min-h-screen for mobile flexibility, h-screen overflow-hidden for desktop "app" feel
    <div className='min-h-screen md:h-screen overflow-hidden bg-[#0F172A] flex flex-col md:flex-row'>
        
        <SideBar />

        {/* Main Content Area */}
        <div className='flex-1 px-4 md:px-10 overflow-y-auto pb-10 flex flex-col'>
          <MainHead /> 
          
          <div className="mt-8">
            <Routes>
              <Route path='/' element={<PersonalDetails />} />
              <Route path='/info' element={<PersonalDetails />} />
              <Route path='/listing' element={<MyList />} />
              <Route path='/rentals' element={<Rentals />} />
              <Route path='/history' element={<History />} />
              <Route path='/myBookinglist' element={<MyBookingList />} />
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default ProfilePage