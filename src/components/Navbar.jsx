import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../zustand/AuthStore';

const Navbar = () => {
    const navigate = useNavigate();
    const {user} = authStore();

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

        {!user && 
            <div onClick={()=>{navigate("/login")}} className='bg-blue-600/80 backdrop-blur-md hover:bg-blue-500 px-6 py-2 rounded-full border border-white/30 transition cursor-pointer'>
                Login
            </div>
        }

        { user &&
            <div onClick={()=>{navigate("/profile")}} className='flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 pl-4 pr-1.5 py-1.5 rounded-full group cursor-pointer hover:bg-white/10 transition-all'>
                <p className="text-xs uppercase font-bold text-white hidden sm:block">
                    {user.name}
                </p>
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 p-0.5 shadow-lg shadow-blue-500/20">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="rounded-full bg-slate-900 w-full h-full" alt="profile" />
                </div>
            </div>
        }

    </div>
  )
}

export default Navbar