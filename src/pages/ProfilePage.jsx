import React from 'react'
import SideBar from '../components/Profile/SideBar'
import MainHead from '../components/Profile/MainHead'
import PersonalDetails from '../components/Profile/PersonalDetails'
import MyList from '../components/Profile/MyList'
import Rentals from '../components/Profile/Rentals'
import History from '../components/Profile/History'
import { Route, Routes } from 'react-router-dom'


const ProfilePage = () => {


  return (
    <div className='h-screen overflow-hidden bg-[#0F172A] flex'>
        <SideBar  />
        <div className='flex-1 px-10 overflow-y-auto pb-10 flex flex-col'>
          <MainHead  /> 
            <Routes>
              <Route path='/' element={<PersonalDetails />} />
              <Route path='/info' element={<PersonalDetails />} />
              <Route path='/listing' element={<MyList />} />
              <Route path='/rentals' element={<Rentals />} />
              <Route path='/history' element={<History />} />

            </Routes>
        </div>
    </div>
  )
}

export default ProfilePage