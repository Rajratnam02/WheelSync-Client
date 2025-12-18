import React from 'react'
import { FaCamera, FaCheckCircle } from 'react-icons/fa'
import authStore from '../../Zustand(State Management)/AuthManagement'

const PersonalDetails = () => {
    const user = authStore((state) => state.user); 

  return (
    /* 1. REMOVED min-h-screen and overflow-y-auto to stop double scrolling */
    /* 2. Changed flex to flex-col on mobile and flex-row on desktop */
    <div className='mt-10 border-[#787c80] border-2 rounded-2xl flex flex-col lg:flex-row text-white bg-[#0F172A]'>
        
        {/* Left Section: Avatar & Status */}
        <div className='flex flex-col items-center px-6 lg:px-10 py-10 lg:pt-20 border-b lg:border-b-0 lg:border-r border-[#787c80]'>
            <div className='w-[120px] lg:w-[150px] bg-teal-500 text-white flex items-center justify-center text-5xl lg:text-7xl inter-700 aspect-square rounded-full border border-white/20 shadow-xl'>
                {user.name[0]}
            </div>
            
            <button className='w-full max-w-[220px] py-2 px-4 text-white inter-600 flex bg-[#1E293B] items-center justify-center gap-3 rounded-xl hover:bg-[#475569] transition-all mt-6 shadow-lg'>
                <FaCamera /> Upload Photo
            </button>

            <p className='mt-10 text-xl inter-600 text-gray-300'>Account Status</p>
            <div className='w-full max-w-[220px] py-2 px-4 text-white inter-600 flex bg-[#1E293B]/50 items-center justify-center gap-3 rounded-xl mt-2 border border-green-500/30'>
                <FaCheckCircle className='text-green-500' /> Email Verified
            </div>
        </div>

        {/* Right Section: Forms */}
        <div className='flex-1 py-10 px-6 lg:px-10'>
            <div className='flex flex-col gap-8'>
                
                {/* Personal Details Header */}
                <div className='border-b border-b-[#787c80] pb-3'>
                    <p className='text-2xl lg:text-3xl inter-600'>Personal Details</p>
                </div>

                {/* Form Group 1 */}
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='flex flex-1 flex-col gap-2'>
                        <label className='inter-500 text-sm text-gray-400'>Full Name</label>
                        <input className="px-4 py-3 text-white bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" type="text" placeholder={user.name} />
                    </div>
                    <div className='flex flex-1 flex-col gap-2'>
                        <label className='inter-500 text-sm text-gray-400'>Email Address</label>
                        <input className="px-4 py-3 text-white bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" type="text" placeholder={user.email} />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='inter-500 text-sm text-gray-400'>Phone Number</label>
                    <input className="px-4 py-3 text-white bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" type="text" placeholder="9876543210" />
                </div>

                <div className='flex justify-end'>
                    <button className='w-full md:w-auto px-8 py-3 bg-teal-500 text-white rounded-lg inter-600 hover:shadow-[0px_0px_15px_rgba(20,184,166,0.6)] transition-all'>
                        Save Changes
                    </button>
                </div>

                {/* Account Security Header */}
                <div className='border-b border-b-[#787c80] pb-3 mt-4'>
                    <p className='text-2xl lg:text-3xl inter-600'>Account Security</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='inter-500 text-sm text-gray-400'>Current Password</label>
                    <input className="px-4 py-3 text-white bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" type="password" placeholder="••••••••" />
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='flex flex-1 flex-col gap-2'>
                        <label className='inter-500 text-sm text-gray-400'>New Password</label>
                        <input className="px-4 py-3 text-white bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" type="password" placeholder="••••••••" />
                    </div>
                    <div className='flex flex-1 flex-col gap-2'>
                        <label className='inter-500 text-sm text-gray-400'>Confirm New Password</label>
                        <input className="px-4 py-3 text-white bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" type="password" placeholder="••••••••" />
                    </div>
                </div>

                <div className='flex justify-end'>
                    <button className='w-full md:w-auto px-8 py-3 bg-teal-500 text-white rounded-lg inter-600 hover:shadow-[0px_0px_15px_rgba(20,184,166,0.6)] transition-all'>
                        Update Password
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalDetails