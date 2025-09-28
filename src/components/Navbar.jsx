import React from 'react'
import { FaMotorcycle } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className='px-6 py-4 flex bg-[rgba(30,41,59,0.8)]  backdrop:blur-[10px] fixed top-0 w-screen justify-between items-center'>
        <div className='flex gap-3 items-center'>
            <FaMotorcycle className='text-4xl text-[#14B8A6] ' />
            <p className='text-3xl inter-700'>Wheel<span className='text-[#14B8A6]'>Sync</span></p>
        </div>
        <div className='inter-400 flex gap-4 '>
            <p>How it Works</p>
            <p>Our Fleet</p>
            <p>Why Us</p>
            <p>Contact</p>
        </div>
        <div className='flex items-center gap-3'>
            <p className='inter-600 px-3 rounded text-lg py-2 hover:bg-[#1C3D44] transition-all duration-300 text-[#14B8A6]  '>Log in</p>
            <p className='inter-600 hover:shadow-[0_0px_5px_5px_rgba(0,128,128,0.5)] flex items-center transition-all duration-300 justify-center px-3 rounded text-lg py-2 bg-[#14B8A6]'>Sign Up</p>
        </div>
    </div>
  )
}

export default Navbar