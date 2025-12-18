import React, { useState } from 'react'
import authStore from '../../Zustand(State Management)/AuthManagement';
import { IoIosLogOut, IoMdAddCircle, IoMdSpeedometer, IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaCarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = authStore((state) => state.user); 
  const logout = authStore((state) => state.logout);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/login");
  }

  return (
    <>
      {/* Mobile Top Bar - Only visible on small screens */}
      <div className="md:hidden flex items-center justify-between px-6 py-4 bg-[#162033] border-b border-white/10 w-full z-50">
        <p className="inter-700 text-[#14B8A6] text-xl">WheelSync</p>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div className={`
        bg-[#162033] w-[280px] lg:w-[320px] 
        fixed md:relative h-full z-[70] md:z-auto
        flex flex-col px-7 pt-10 md:pt-25 pb-5
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className='flex flex-col items-center gap-5 flex-1'>
            
            <div className='flex flex-col items-center'>
                <div className='w-[80px] md:w-[100px] aspect-square rounded-full flex justify-center items-center text-3xl border text-white'>
                  {user.name[0]}
                </div>
                <p className='text-xl md:text-2xl text-white mt-5 inter-700 text-center'>{user.name}</p>
                <p className='text-sm text-[#9CA3AB] inter-500 text-center break-all'>{user.email}</p>
            </div>
        
            <div className='mt-10 w-full flex flex-col gap-3'>
                <div onClick={() => {navigate("/"); setIsOpen(false)}} className='flex items-center pl-3 pr-7 gap-3 w-full py-3 text-md hover:text-white text-[#9CA3AB] cursor-pointer transition-all duration-200 hover:bg-teal-500 rounded-lg'>
                    <IoMdSpeedometer />
                    <p>Dashboard</p>
                </div>
                <div onClick={() => {navigate("/"); setIsOpen(false)}} className='flex items-center pl-3 pr-7 gap-3 w-full py-3 text-md hover:text-white text-[#9CA3AB] cursor-pointer transition-all duration-200 hover:bg-teal-500 rounded-lg'>
                    <FaCarAlt />
                    <p className='inter-500'>Find a Ride</p>
                </div>
                <div onClick={() => {navigate("/list-vehicle"); setIsOpen(false)}} className='flex items-center pl-3 pr-7 gap-3 w-full py-3 text-md hover:text-white text-[#9CA3AB] cursor-pointer transition-all duration-200 hover:bg-teal-500 rounded-lg'>
                    <IoMdAddCircle />
                    <p className='inter-500'>List a Vehicle</p>
                </div>
            </div>
        </div>

        <div onClick={logoutHandler} className='flex items-center pl-3 pr-7 gap-3 w-full py-3 text-md text-red-400 hover:text-white cursor-pointer transition-all duration-200 hover:bg-red-500 rounded-lg mt-auto'>
            <IoIosLogOut />
            <p className='inter-500'>Logout</p>
        </div>
      </div>
    </>
  )
}

export default SideBar