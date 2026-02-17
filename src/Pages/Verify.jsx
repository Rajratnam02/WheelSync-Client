import React, { useState } from 'react'
import LoginBlur from '../components/LoginBlur'
import { useNavigate, useLocation } from 'react-router-dom'
import authStore from '../zustand/AuthStore'
import { toast } from 'react-toastify'

const Verify = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { verifyUser, resendOtp } = authStore()

  const email = location.state?.email || ""

  const [data, setData] = useState({
    email: email,
    otp: ""
  })

  const [isVerifying, setIsVerifying] = useState(false)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isVerifying) return
    
    setIsVerifying(true)
    try {
      const response = await verifyUser(data)
      if (response.success) {
        toast.success("Account verified successfully")
        navigate("/")
      } else {
        toast.error(response.error || "Verification failed")
      }
    } catch (err) {
      toast.error("An error occurred during verification")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResend = async () => {
    try {
      const response = await resendOtp()
      if (response.success) {
        toast.success("A new code has been sent to your email")
      } else {
        toast.error(response.error || "Failed to resend code")
      }
    } catch (err) {
      toast.error("An error occurred while resending the code")
    }
  }

  return (
    <div className='py-10 min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center relative'
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588911627153-1a980838ccd3?q=80&w=1920')" }}>
      
      <LoginBlur />

      <div className='relative z-10 w-full max-w-[440px] px-8 py-12 bg-black/40 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl flex flex-col items-center'>
        
        {/* Branding */}
        <div className='text-center mb-10'>
          <h2 onClick={() => navigate("/")} className='text-3xl cursor-pointer uppercase font-black tracking-tighter italic text-white'>
            Wheel<span className='text-blue-500'>Sync</span>
          </h2>
          <p className='text-slate-300 mt-2 text-sm uppercase tracking-widest font-medium'>
            Verify Account
          </p>
        </div>

        <form onSubmit={handleSubmit} className='w-full space-y-6'>
          
          {/* Email (Read Only) */}
          <div className='space-y-2'>
            <h3 className='text-xs font-semibold text-blue-400/80 ml-5 uppercase tracking-wider'>Email Address</h3>
            <input
              value={email}
              disabled
              className='w-full px-6 py-4 bg-white/5 border border-white/5 rounded-full text-slate-400 text-sm cursor-not-allowed opacity-70'
            />
          </div>

          {/* OTP Input */}
          <div className='space-y-2'>
            <h3 className='text-xs font-semibold text-blue-400/80 ml-5 uppercase tracking-wider'>Verification Code</h3>
            <input
              onChange={handleChange}
              name='otp'
              type="text"
              required
              placeholder='Enter 6-digit code'
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all'
            />
            <div className='text-right px-4'>
              <button 
                type="button"
                onClick={handleResend}
                className='text-xs text-gray-400 hover:text-blue-400 transition-colors'
              >
                Didn't receive a code? Resend
              </button>
            </div>
          </div>

          <button
            disabled={isVerifying}
            className='w-full mt-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 py-4 text-sm font-bold text-white shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all disabled:bg-slate-700'
          >
            {isVerifying ? "Verifying..." : "Confirm Verification"}
          </button>

        </form>

        <p className='mt-10 text-center text-sm text-gray-400'>
          Already verified?
          <span
            onClick={() => navigate("/login")}
            className='text-blue-400 cursor-pointer font-bold hover:underline ml-2'
          >
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default Verify