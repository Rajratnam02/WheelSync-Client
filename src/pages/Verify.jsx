import React, { useState } from 'react'
import authStore from '../Zustand(State Management)/AuthManagement'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
  const navigate = useNavigate();

  const verifyUser = authStore((state) => state.verifyUser)
  const resendOtp = authStore((state) => state.resendOtp)
  const loading = authStore((state) => state.loading)

  const [data, setData] = useState({ otp: "" })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!data.otp) {
      toast.error("Please enter OTP")
      return
    }

    const result = await verifyUser(data)
    if (!result.success) {
      toast.error(result.message || "Verification failed")
      return
    }
    toast.success(result.message || "Account verified successfully")
    navigate("/")
  }

  const handleResend = async () => {
    const result = await resendOtp()
    if (!result.success) {
      toast.error(result.message || "Failed to resend OTP")
      return
    }
    toast.success(result.message || "OTP resent successfully")
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[linear-gradient(to_right,rgba(11,15,46,0.7),rgba(0,0,0,0.7)),url("./assets/photo-1503376780353-7e6692767b70.jpeg")] bg-cover bg-center'>
      <form 
        onSubmit={handleSubmit} 
        className='bg-white/20 backdrop-blur-lg w-[500px] rounded px-10 py-5 flex flex-col space-y-5'
      >
        <p className='text-3xl font-semibold inter-600 text-white text-center mb-6'>
          Verify your account
        </p>
        <div className='flex flex-col space-y-2'>
          <label className='block text-sm text-gray-200 mb-2'>OTP</label>
          <input 
            name="otp" 
            placeholder='Enter OTP' 
            type="text" 
            value={data.otp}
            onChange={handleChange}
            className='w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400' 
            required
          />
        </div>
        <button 
          type="submit"
          disabled={loading}
          className='px-3 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold py-3 rounded-lg transition duration-300'
        >
          {loading ? "Verifying..." : "Submit"}
        </button>
        <p className='text-gray-300 text-sm text-center mt-6'>
          Didn't Receive OTP?{" "}
          <span 
            onClick={handleResend}
            className='text-blue-400 cursor-pointer hover:underline'
          >
            Resend OTP
          </span>
        </p>
      </form>
    </div>
  )
}

export default Verify
