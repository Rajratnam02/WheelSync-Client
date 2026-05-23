import React, { useState } from 'react'
import LoginBlur from '../components/LoginBlur'
import { useNavigate } from 'react-router-dom'
import authStore from '../zustand/AuthStore';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = authStore();
    
    const [data, setData] = useState({
        email: "",
        password: "",
        botField: "" 
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.botField || isSubmitting) return;

        setIsSubmitting(true);
        try {
            const response = await loginUser({
                email: data.email,
                password: data.password
            });

            if (response.success) {
                toast.success("Login successful");
                navigate("/");
            } else {
                toast.error(response.error || "Authentication failed");
            }
        } catch (err) {
            toast.error("An error occurred during login");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className='min-h-screen flex py-10 text-slate-100 items-center justify-center bg-cover bg-fixed bg-center relative' 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1575833885699-bae73b593ca2?q=80&w=1920')" }}>
            
            <LoginBlur />
            
            <div className='relative z-10 w-full max-w-[440px] px-8 py-12 bg-black/40 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl'>
                
                {/* Branding */}
                <div className='text-center mb-10'>
                    <h2 onClick={() => navigate("/")} className='text-3xl cursor-pointer uppercase font-black tracking-tighter italic'>
                        Wheel<span className='text-blue-500'>Sync</span>
                    </h2>
                    <p className='text-slate-300 mt-2 text-sm uppercase tracking-widest font-medium'>
                        Welcome Back
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Honeypot */}
                    <input type="text" name="botField" value={data.botField} onChange={handleChange} style={{ position: 'absolute', opacity: 0, width: 0, height: 0, zIndex: -1 }} tabIndex="-1" autoComplete="off" />

                    {/* Email */}
                    <div className='space-y-2'>
                        <h3 className='text-xs font-semibold text-blue-400/80 ml-5 uppercase tracking-wider'>Email Address</h3>
                        <input 
                            name='email' 
                            onChange={handleChange} 
                            type="email" 
                            autoComplete="email"
                            required
                            placeholder='driver@wheelsync.com' 
                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all placeholder:text-white/30' 
                        />
                    </div>

                    {/* Password */}
                    <div className='space-y-2'>
                        <h3 className='text-xs font-semibold text-blue-400/80 ml-5 uppercase tracking-wider'>Password</h3>
                        <input 
                            name='password' 
                            onChange={handleChange} 
                            type="password" 
                            autoComplete="current-password"
                            required
                            placeholder='••••••••••••' 
                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all placeholder:text-white/30' 
                        />
                        <div className="flex justify-end px-4">
                            <button type="button" className="text-xs text-gray-400 hover:text-blue-300 transition-colors">
                                Forgot password?
                            </button>
                        </div>
                    </div>

                    <button 
                        disabled={isSubmitting}
                        className='w-full mt-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 py-4 text-sm font-bold text-white shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all disabled:bg-slate-700'
                    >
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <p className='mt-8 text-center text-sm text-gray-400'>
                    Don't have an account?
                    <span onClick={() => navigate("/register")} className='text-blue-400 cursor-pointer font-bold hover:underline ml-2'>
                        Join the club
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login