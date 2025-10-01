import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authStore from '../Zustand(State Management)/AuthManagement';

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    
    const loginUser = authStore((state) => state.loginUser);
    const resendOtp = authStore((state) => state.resendOtp);
    const loading = authStore((state) => state.loading);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await loginUser(data);

        // Safety check to prevent crashes
        if (!result) {
            toast.error("An unexpected error occurred. Please try again.");
            return;
        }
    
        // Case 1: The specific flow for an unverified user
        if (result.message === "User not verified") {
            toast.info("Your account is not verified. Resending a new OTP...");
            const otpResult = await resendOtp();

            if (otpResult.error) {
                toast.error(otpResult.error);
            } else {
                toast.success(otpResult.message || "New OTP sent to your email!");
                navigate("/verify");
            }
            return; // Stop here
        }

        // Case 2: Handle any other error from the API (e.g., wrong password)
        if (result.error) {
            toast.error(result.error);
            return; // Stop here
        }

        // Case 3: Handle a successful login
        if (result.user) {
            toast.success(result.message || "Successfully logged in!");
            navigate("/");
        }
    };

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-[linear-gradient(to_right,rgba(11,15,46,0.7),rgba(0,0,0,0.7)),url("./assets/photo-1503376780353-7e6692767b70.jpeg")] bg-cover bg-center'>
            <div className='w-[90%] max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8'>
                <h2 className='text-3xl font-semibold text-white text-center mb-6'>Login</h2>
                
                <form className='flex flex-col space-y-5' onSubmit={handleSubmit}>
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

                    <button 
                        type='submit'
                        disabled={loading}
                        className='w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold py-3 rounded-lg transition duration-300'
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <p className='text-gray-300 text-sm text-center mt-6'>
                    Don’t have an account? <span onClick={() => navigate("/register")} className='text-blue-400 cursor-pointer hover:underline'>Sign up</span>
                </p>
            </div>
        </div>
    );
};

export default Login;