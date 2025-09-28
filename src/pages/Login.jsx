import React, { useState } from 'react'
import authStore from '../Zustand(State Management)/AuthManagement'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })

  // ✅ Use the correct function name from store
  const loginUser = authStore((state) => state.loginUser)
  const loading = authStore((state) => state.loading)
  const error = authStore((state) => state.error)
  const message = authStore((state) => state.message)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser(data)
    navigate("/")
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-[linear-gradient(to_right,rgba(11,15,46,0.7),rgba(0,0,0,0.7)),url("./assets/photo-1503376780353-7e6692767b70.jpeg")] bg-cover bg-center'>
      
      <div className='w-[90%] max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8'>
        <h2 className='text-3xl font-semibold text-white text-center mb-6'>Login</h2>
        
        <form className='flex flex-col space-y-5' onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className='block text-sm text-gray-200 mb-2'>Email</label>
            <input 
              onChange={handleChange}
              value={data.email}
              name='email'
              type='email' 
              placeholder='Enter your email'
              className='w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className='block text-sm text-gray-200 mb-2'>Password</label>
            <input 
              onChange={handleChange}
              value={data.password}
              name='password'
              type='password' 
              placeholder='Enter your password'
              className='w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
              required
            />
          </div>

          {/* Button */}
          <button 
            type='submit'
            disabled={loading}
            className='w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold py-3 rounded-lg transition duration-300'
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        
        {error && <p className="text-red-400 text-center mt-4">{error}</p>}
        {message && <p className="text-green-400 text-center mt-4">{message}</p>}

        <p className='text-gray-300 text-sm text-center mt-6'>
          Don’t have an account? <a href='#' className='text-blue-400 hover:underline'>Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default Login
