import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className='sticky top-0 text-white z-50 flex justify-between items-center px-8 py-6'>
        <div onClick={()=>{navigate("/")}} className='text-2xl cursor-pointer font-bold uppercase tracking-tighter italic'>
            Wheel
            <span className='text-blue-500'>
                Sync
            </span>
        </div>

        <div className='hidden justify-between gap-8 bg-white/10 px-6 py-2 border border-white/20 text-white rounded-full md:flex items-center'>
            <p className='hover:text-blue-400 cursor-pointer transition'>Rent</p>
            <p className='hover:text-blue-400 cursor-pointer transition'>Lend</p>
            <p className='hover:text-blue-400 cursor-pointer transition'>How it works</p>
        </div>

        <div onClick={()=>{navigate("/login")}} className='bg-blue-600/80 backdrop-blur-md hover:bg-blue-500 px-6 py-2 rounded-full border border-white/30 transition cursor-pointer'>
            Login
        </div>
    </div>
  )
}

export default Navbar