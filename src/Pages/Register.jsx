import React, { useState } from 'react'
import LoginBlur from '../components/LoginBlur'
import { useNavigate } from 'react-router-dom'
import authStore from '../zustand/AuthStore'
import { toast } from 'react-toastify'

const Register = () => {
  const navigate = useNavigate()
  const { registerUser } = authStore()

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    botField: ""
  })

  const [registering, setRegistering] = useState(false)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.botField || registering) return

    setRegistering(true)

    try {
      const response = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password
      })

      if (response.success) {
        toast.success("Registration successful")
        navigate("/verify", {
          state: { email: data.email },
        })
      } else {
        toast.error(response.error || "Registration failed")
      }
    } catch (err) {
      toast.error("An error occurred during registration")
      console.error(err)
    } finally {
      setRegistering(false)
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
            Create Account
          </p>
        </div>

        <form onSubmit={handleSubmit} className='w-full space-y-6'>
          {/* Honeypot */}
          <input type="text" name="botField" value={data.botField} onChange={handleChange} style={{ position: 'absolute', opacity: 0, width: 0, height: 0, zIndex: -1 }} tabIndex="-1" autoComplete="off" />

          {/* Name */}
          <div className='space-y-2'>
            <h3 className='text-xs font-semibold text-blue-400/80 ml-5 uppercase tracking-wider'>Full Name</h3>
            <input
              onChange={handleChange}
              name='name'
              type='text'
              autoComplete="name"
              required
              placeholder='Alex Commuter'
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all'
            />
          </div>

          {/* Email */}
          <div className='space-y-2'>
            <h3 className='text-xs font-semibold text-blue-400/80 ml-5 uppercase tracking-wider'>Email Address</h3>
            <input
              onChange={handleChange}
              name='email'
              type='email'
              autoComplete="email"
              required
              placeholder='driver@wheelsync.com'
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all'
            />
          </div>

          {/* Password */}
          <div className='space-y-2'>
            <h3 className='text-xs font-semibold text-blue-400/80 ml-5 uppercase tracking-wider'>Password</h3>
            <input
              onChange={handleChange}
              name='password'
              type='password'
              autoComplete="new-password"
              required
              placeholder='••••••••••••'
              className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all'
            />
          </div>

          <button
            disabled={registering}
            className='w-full mt-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 py-4 text-sm font-bold text-white shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all disabled:bg-slate-700'
          >
            {registering ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className='mt-8 text-sm text-gray-400'>
          Already a member?
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

export default Register