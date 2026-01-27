import React, { useState } from 'react'
import LoginBlur from '../Components/LoginBlur'
import { useNavigate } from 'react-router-dom'
import Blur from '../Components/Blur'
import authStore from '../zustand/AuthStore'
import { toast } from 'react-toastify'

const Register = () => {
   const navigate = useNavigate()
   
   const [data,setData] = useState({});
   const {registerUser} = authStore();

   const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value}); 
   }

   const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(data);
    if(response.success){
        toast.success("Registration Successful");
        alert(response.message)
        navigate("/verify",{state:{
            email:data.email}});
    }else{
        alert(response.error)
        toast.error(response.error)
    }
   }
   
  return (
    <div className='py-10 bg-[url(https://images.unsplash.com/photo-1588911627153-1a980838ccd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center'>
        <LoginBlur />
        
        <div className=' flex flex-col items-center px-10 py-8 relative w-90 md:w-100 bg-white/10 backdrop-blur-sm rounded-4xl'>
            <div className='text-center mb-8'>
                <h2 onClick={()=>{navigate("/")}} className='text-3xl cursor-pointer uppercase font-extrabold text-white tracking-tighter italic'>
                    Wheel
                    <span className='text-blue-500'>Sync</span>
                </h2>
                <p className='text-gray-300 mt-2 text-sm uppercase tracking-widest'>
                    Welcome Back
                </p>
            </div>

            
            <form onSubmit={handleSubmit} className='w-full space-y-6'>
                <div className='text-start flex flex-col gap-2 w-full'>
                    <h3 className='text-xs font-semibold text-blue-400/80 ml-4 uppercase'>Name</h3>
                    <input onChange={handleChange} name='name' type="text" placeholder='Commuter' className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all' />
                </div>

                <div className='text-start flex flex-col gap-2 w-full'>
                    <h3 className='text-xs font-semibold text-blue-400/80 ml-4 uppercase'>Email Address</h3>
                    <input onChange={handleChange} name='email' type="email" placeholder='driver@wheelsync.com' className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all' />
                </div>

                <div className='text-start flex flex-col  gap-2 w-full'>
                    <h3 className='text-xs font-semibold text-blue-400/80 ml-4 uppercase'>Password</h3>
                    <input onChange={handleChange} name='password' type="password" placeholder='***************' className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all' />
                    <div className="text-right">
                        <p className="text-xs text-gray-400 hover:text-blue-300 transition-colors mr-4">Forgot Password?</p>
                    </div>
                </div>

                <button className='bg-linear-to-r from-blue-600 to-blue-400 w-full mt-4 font-bold text-white shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center py-4 rounded-full'>
                    Sign Up
                </button>

                </form>

                <div className="flex items-center w-full my-8">

                    <div className="flex-grow border-t border-white/10"></div>
                    <p className="px-4 text-xs text-gray-400 uppercase">Or continue with</p>
                    <div className="flex-grow border-t border-white/10"></div>

                </div>

                <div className='flex justify-between w-full gap-4 items-center'>
                    
                    <div className='flex-1 border py-4 flex items-center justify-center border-white/10 rounded-full'>
                        <img className='h-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png" alt="" />
                    </div>
                    
                    <div className='flex-1 border py-4 flex items-center justify-center border-white/10 rounded-full'>
                        <img className='h-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/1280px-Microsoft_icon.svg.png" alt="" />
                    </div>

                </div>

                <p className='mt-8 text-sm text-gray-400'>
                    Already a member?
                    <span onClick={()=>{navigate("/login")}} className='text-blue-400 cursor-pointer font-semibold hover:underline ml-1'>
                        Login
                    </span>
                </p>

        </div>

    </div>
  )
}

export default Register