import React, { useState } from 'react'
import LoginBlur from '../components/LoginBlur'
import { useNavigate } from 'react-router-dom'
import authStore from '../zustand/AuthStore';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({});
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const {loginUser} = authStore();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser(data);
        if(response.success){
            toast.success("Login Successful");
            navigate("/");
        }else{
            toast.error(response.error);
        }

       }


  return (
    <div className='min-h-screen flex py-10  text-white items-center justify-center bg-[url("https://images.unsplash.com/photo-1575833885699-bae73b593ca2?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-fixed bg-center '>
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
                    <h3 className='text-xs font-semibold text-blue-400/80 ml-4 uppercase'>Email Address</h3>
                    <input name='email' onChange={handleChange} type="email" placeholder='driver@wheelsync.com' className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all' />
                </div>

                <div className='text-start flex flex-col  gap-2 w-full'>
                    <h3 className='text-xs font-semibold text-blue-400/80 ml-4 uppercase'>Password</h3>
                    <input name='password' onChange={handleChange} type="password" placeholder='driver@wheelsync.com' className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all' />
                    <div className="text-right">
                        <p className="text-xs text-gray-400 hover:text-blue-300 transition-colors mr-4">Forgot Password?</p>
                    </div>
                </div>

                <button className='bg-linear-to-r from-blue-600 to-blue-400 w-full mt-4 font-bold text-white shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center py-4 rounded-full'>
                    Sign In
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
                    Don't have an account?
                    <span onClick={()=>{navigate("/register")}} className='text-blue-400 cursor-pointer font-semibold hover:underline ml-1'>
                        Join The Club
                    </span>
                </p>

        </div>
    </div>
  )
}

export default Login