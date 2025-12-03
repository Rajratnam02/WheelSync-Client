import React from 'react'
import { FaCamera, FaCheckCircle } from 'react-icons/fa'
import authStore from '../../Zustand(State Management)/AuthManagement'

const PersonalDetails = () => {
    const user = authStore((state) => state.user); 

  return (
    <div className='min-h-screen mt-10 overflow-y-auto border-[#787c80] border-2 rounded-2xl flex'>
        <div className='flex flex-col   items-center  px-10 pt-25 '>
            <div className='w-[150px] bg-teal-500 text-white flex items-center justify-center text-7xl inter-700 aspect-square rounded-full border'>{user.name[0]}</div>
            <div className='px-15 py-2 text-white inter-600 flex bg-[#1E293B]  items-center justify-center gap-3 rounded-xl hover:bg-[#475569]  mt-5'><FaCamera />Upload Photo</div>
            <p className='mt-10 text-xl inter-600'>Account Status</p>
            <div className='px-15 py-2 text-white inter-600 flex bg-[#1E293B]  items-center justify-center gap-3 rounded-xl hover:bg-[#475569]  mt-2'><FaCheckCircle className='text-green-500' />Email Verified</div>
        </div>
        <div className='flex-1  py-10 px-10'>
            <div className='flex flex-col gap-5'>
                        <div className='border-b border-b-[#787c80] py-3'>
                            <p className='text-3xl inter-600'>Personal Details</p>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-1 flex-col gap-1'>
                                <label className='inter-500 text-md'>Full Name</label>
                                <input className="px-4 py-2 text-gray-200 bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400" type="text" placeholder={user.name} />
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <label className='inter-500 text-md'>Email Address</label>
                                <input className="px-4 py-2  text-gray-200 bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400" type="text" placeholder={user.email} />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <label className='inter-500 text-md'>Phone Number</label>
                                <input className="px-4 py-2  text-gray-200 bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400" type="text" placeholder="9876543210" />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='px-5 py-3 bg-teal-500 text-white rounded inter-600 hover:shadow-[0px_0px_5px_5px_rgba(20,184,166,0.5)] '>Save Changes</button>
                        </div>

                        <div className='border-b border-b-[#787c80] py-3'>
                            <p className='text-3xl inter-600'>Account Security</p>
                        </div>
                        <div className='flex flex-1 flex-col gap-1'>
                                <label className='inter-500 text-md'>Current Password</label>
                                <input className="px-4 py-2  text-gray-200 bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400" type="password" placeholder="Current Password....." />
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-1 flex-col gap-1'>
                                <label className='inter-500 text-md'>New Password</label>
                                <input className="px-4 py-2 text-gray-200 bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400" type="password" placeholder="New Password....." />
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <label className='inter-500 text-md'>Confirm New Password</label>
                                <input className="px-4 py-2 text-gray-200 bg-[#1E293B] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400" type="password" placeholder="Confirm New Password....." />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='px-5 py-3 bg-teal-500 text-white rounded inter-600 hover:shadow-[0px_0px_5px_5px_rgba(20,184,166,0.5)] '>Save Changes</button>
                        </div>
            </div>

        </div>
    </div>
  )
}

export default PersonalDetails