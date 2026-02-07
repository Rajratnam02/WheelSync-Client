import React, { useState } from 'react'
import HomeCard from '../components/HomeCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const [val, setVal] = useState("Car");

    const handleChange = (e) => {
        setVal(e.target.value);
    }
    const explore = (e) => {
        e.preventDefault();
        navigate(`/explore`,
            {
                state: {
                    type: val
                }
            }
        );
    }

    return (
        <div className='min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pb-20 mt-10 md:mt-16 text-center flex flex-col items-center text-white relative'>
            
            <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold mb-2 drop-shadow-lg leading-tight'>
                Your Ride,
            </h1>
            <h1 className='text-4xl sm:text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-400 font-extrabold leading-tight'>
                Your Vibe.
            </h1>
            
            <p className='text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto px-2'>
                Unlock the freedom of peer-to-peer rides. Find cool cars and bikes from local owners and hit the road your way.
            </p>

            <div className='bg-white/10 backdrop-blur-xl w-full sm:w-4/5 md:w-2/3 border border-white/20 p-2 md:p-4 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center max-w-4xl mx-auto mb-16 md:mb-20'>
               <div className='border-b md:border-b-0 md:border-r text-center md:text-start flex-1 border-white/20 w-full px-6 py-3 md:py-2'>
                <p className='font-semibold uppercase text-[10px] md:text-xs text-blue-400'>Vehicle Type</p>
                <select onChange={handleChange} className='bg-transparent outline-none w-full mt-1 appearance-none cursor-pointer text-center md:text-left'>
                    <option value="Car" className="bg-gray-900">Cars</option>
                    <option value="Bike" className="bg-gray-900">Bike</option>
                </select>
               </div>

               <div 
                onClick={explore} 
                className='w-full md:flex-1 bg-gradient-to-r from-blue-600 to-blue-400 hover:brightness-110 active:scale-95 transition-all py-4 rounded-2xl md:rounded-full font-bold text-base md:text-lg shadow-lg cursor-pointer'
               >
                Search Wheels
               </div>                    
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full'>
                <HomeCard 
                    emoji="🛡️" 
                    title="Verified Users" 
                    description="Safety first. Every member of WheelSync is identity-verified for your peace of mind." />
                
                <HomeCard 
                    emoji="💰" 
                    title="Flexible Pricing" 
                    description="Daily, weekly, or monthly rates set by owners. No hidden agency fees." />

                <HomeCard 
                    emoji="⚡" 
                    title="Instant Booking" 
                    description="See something you like? Book it instantly and pick it up from the owner." />
            </div>
        
        </div>
    )
}

export default Home