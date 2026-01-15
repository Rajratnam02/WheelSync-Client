import React, { useState } from 'react'
import LoginBlur from '../Components/LoginBlur'
import { useNavigate, useLocation } from 'react-router-dom'
import authStore from '../zustand/AuthStore'
import { toast } from 'react-toastify'

const Verify = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const email = location.state?.email || ""

  const [data, setData] = useState({
    email: email,
    otp: ""
  })

  const { verifyUser, resendOtp } = authStore()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await verifyUser(data)

    if (response.success) {
      toast.success("Account Verified Successfully")
      navigate("/")
    } else {
      toast.error(response.error || response.message || "Verification failed")
    }
  }

  const handleResend = async () => {
    const response = await resendOtp()

    if (response.success) {
      toast.success(response.message)
    } else {
      toast.error(response.error || "Failed to resend OTP")
    }
  }

  return (
    <div className='py-10 bg-[url(https://images.unsplash.com/photo-1588911627153-1a980838ccd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center'>
      <LoginBlur />

      <div className='flex flex-col items-center px-10 py-8 relative w-90 md:w-100 bg-white/10 backdrop-blur-sm rounded-4xl'>
        
        <div className='text-center mb-8'>
          <h2 onClick={() => navigate("/")} className='text-3xl cursor-pointer uppercase font-extrabold text-white tracking-tighter italic'>
            Wheel
            <span className='text-blue-500'>Sync</span>
          </h2>
          <p className='text-gray-300 mt-2 text-sm uppercase tracking-widest'>
            Verify Your Account
          </p>
        </div>

        <form onSubmit={handleSubmit} className='w-full space-y-6'>
          
          <div className='text-start flex flex-col gap-2 w-full'>
            <h3 className='text-xs font-semibold text-blue-400/80 ml-4 uppercase'>Email</h3>
            <input
              value={email}
              disabled
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-gray-400'
            />
          </div>

          <div className='text-start flex flex-col gap-2 w-full'>
            <h3 className='text-xs font-semibold text-blue-400/80 ml-4 uppercase'>OTP Code</h3>
            <input
              onChange={handleChange}
              name='otp'
              type="text"
              placeholder='Enter 6-digit OTP'
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all'
            />
          </div>

          <button className='bg-linear-to-r from-blue-600 to-blue-400 w-full mt-4 font-bold text-white shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center py-4 rounded-full'>
            Verify OTP
          </button>

        </form>

        <p
          onClick={handleResend}
          className='mt-6 text-sm text-blue-400 cursor-pointer hover:underline'
        >
          Resend OTP
        </p>

        <p className='mt-8 text-sm text-gray-400'>
          Already verified?
          <span onClick={() => navigate("/login")} className='text-blue-400 cursor-pointer font-semibold hover:underline ml-1'>
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default Verify
