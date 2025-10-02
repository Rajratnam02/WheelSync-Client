import React from 'react'
import authStore from '../../Zustand(State Management)/AuthManagement';
import { IoIosLogOut, IoMdAddCircle, IoMdSpeedometer } from 'react-icons/io';
import { FaCarAlt } from 'react-icons/fa';

const SideBar = () => {
  const user = authStore((state) => state.user); 
  return (
    <div className='bg-[#162033] w-[300px] items-center justify-between  min-h-screen flex flex-col px-7 pt-25'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center'>
                <div className=' w-[100px] aspect-square rounded-full text-center flex justify-center items-center text-3xl border'>{user.name[0]}</div>
                <p className='text-2xl  text-white mt-5 inter-700'>{user.name}</p>
                <p className='text-lg text-[#9CA3AB] inter-500'>{user.email}</p>
            </div>
        
            <div className='mt-10 w-full flex flex-col gap-3'>
                <div className='flex items-center pl-3 pr-7 gap-3 w-full py-3 text-md hover:text-white text-[#9CA3AB] cursor-pointer transition-all duration-200 hover:bg-teal-500 rounded-lg'>
                    <IoMdSpeedometer />
                    <p>Dashboard</p>
                </div>
                <div className='flex items-center pl-3 pr-7 gap-3 w-full py-3 text-md hover:text-white text-[#9CA3AB] cursor-pointer transition-all duration-200 hover:bg-teal-500 rounded-lg'>
                    <FaCarAlt />
                    <p className='inter-500'>Find a Ride</p>
                </div>
                <div className='flex items-center pl-3 pr-7 gap-3 w-full py-3 text-md hover:text-white text-[#9CA3AB] cursor-pointer transition-all duration-200 hover:bg-teal-500 rounded-lg'>
                    <IoMdAddCircle />
                    <p className='inter-500'>List a Vehicle</p>
                </div>
            </div>
        </div>
        <div className='flex items-center pl-3 pr-7 gap-3 w-full py-3 text-md hover:text-white text-[#9CA3AB] cursor-pointer transition-all duration-200 hover:bg-teal-500 rounded-lg'>
            <IoIosLogOut />
            <p className='inter-500'>Logout</p>
        </div>

    </div>
  )
}

export default SideBar