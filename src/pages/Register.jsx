import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import authStore from '../Zustand(State Management)/AuthManagement';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    
    const [data,setData] = useState({});
    
    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const register = authStore((state)=>state.registerUser);
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const result =await register(data);
        if(result.message){
            toast.success(result.message);
            // In Register.jsx (after successful register)
            navigate("/verify")
        }
        if(result.error){
            toast.error(result.error);
        }
    }




  return (
    <div className='min-h-screen flex items-center justify-center bg-[linear-gradient(to_right,rgba(11,15,46,0.7),rgba(0,0,0,0.7)),url("./assets/photo-1503376780353-7e6692767b70.jpeg")] bg-cover bg-center'>
        <div className='w-[90%] max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8'>
            <p className='text-3xl font-semibold inter-600 text-white text-center mb-6'>Register</p>
            <form className='flex flex-col space-y-5' >
                <div>
                    <label className='block text-sm text-gray-200 mb-2'>Name</label>
                    <input onChange={changeHandler} name='name' type='text' placeholder='Enter your name' className='w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400' required />
                 </div>

                 <div>
                    <label className='block text-sm text-gray-200 mb-2'>Email</label>
                    <input onChange={changeHandler} name='email' type="email" placeholder='Enter your email' className='w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400' required/>
                 </div>

                 <div>
                    <label className='block text-sm text-gray-200 mb-2'>Password</label>
                    <input onChange={changeHandler} name='password' type='password' placeholder='Enter your password' className='w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400' required/>
                 </div>
                <button onClick={submitHandler} className='px-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300'>Register</button>
                <p className='text-gray-300 text-sm text-center mt-6'>Already have an account? <span onClick={()=>{navigate("/login")}} className='text-blue-400 cursor-pointer hover:underline'>Login</span></p>
            </form>
        </div>
    </div>
  )
}

export default Register