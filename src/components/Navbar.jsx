import React from 'react'
import { FaMotorcycle } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import authStore from '../Zustand(State Management)/AuthManagement';

const Navbar = () => {
  const navigate = useNavigate();
  const user = authStore((state) => state.user);
  const logout = authStore((state) => state.logout);

  return (
    <div className='px-6 py-4 flex bg-[rgba(30,41,59,0.8)]  backdrop:blur-[10px] fixed top-0 w-screen justify-between items-center'>
        <div onClick={()=>{navigate("/")}} className='flex gap-3 items-center'>
            <FaMotorcycle className='text-4xl cursor-pointer text-[#14B8A6] ' />
            <p className='text-3xl cursor-pointer inter-700'>Wheel<span className='text-[#14B8A6]'>Sync</span></p>
        </div>
        <div className='inter-400 flex gap-4 '>
            <p className='cursor-pointer'>How it Works</p>
            <p className='cursor-pointer'>Our Fleet</p>
            <p className='cursor-pointer'>Why Us</p>
            <p className='cursor-pointer'>Contact</p>
        </div>
        
        {/* Login SignUp Button */}
        {!user && (<div className='flex items-center gap-3'>
            <p onClick={()=>{navigate("/login")}} className='inter-600 px-3 cursor-pointer rounded text-lg py-2 hover:bg-[#1C3D44] transition-all duration-300 text-[#14B8A6]  '>Log in</p>
            <p onClick={()=>{navigate("/register")}} className='inter-600 cursor-pointer hover:shadow-[0_0px_5px_5px_rgba(0,128,128,0.5)] flex items-center transition-all duration-300 justify-center px-3 rounded text-lg py-2 bg-[#14B8A6]'>Sign Up</p>
        </div>)}

        {/* Profile Circle */}
        { user && (<div className='flex gap-5 items-center justify-center'>
                      <div onClick={()=>{navigate("/profile")}} className='h-10 cursor-pointer flex items-center justify-center inter-600 text-2xl aspect-square rounded-full border'>
                        <p>{user.name[0]}</p>
                      </div>
                    <button onClick={logout} className='inter-600 cursor-pointer hover:shadow-[0_0px_5px_5px_rgba(0,128,128,0.5)] flex bg-teal-500 rounded px-5 py-3 '>LogOut</button>
        </div>)}
        
        {/* Logout Button */}
        

    </div>
  )
}

export default Navbar