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
    <div className='min-h-screen max-w-6xl mx-auto px-6 pb-20 mt-16 text-center flex flex-col  items-center  text-white relative'>
        
            <h1 className='text-5xl md:text-7xl font-extrabold mb-2 drop-shadow-lg'>
                Your Ride,
            </h1>
            <h1 className='text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-emerald-400 font-extrabold'>
                Your Vibe.
            </h1>
            <p className='text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto'>
                Unlock the freedom of peer-to-peer rides.Find cool cars and bikes from local owners and hit the road your way.
            </p>

            <div className='bg-white/10 backdrop-blur-xl w-2/3 border  border-white/20 p-4 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto mb-20'>
               <div className='border-r text-start flex-1 border-r-white/20 px-6 py-2'>
                <p className=' font-semibold  uppercase text-xs text-blue-400'>Vehicle Type</p>
                <select onChange={handleChange} className='bg-transparent outline-none w-full mt-1 appearance-none'>
                    <option className="bg-gray-900">Cars</option>
                    <option className="bg-gray-900">Bike</option>
                </select>
               </div>

               <div onClick={explore} className='flex-1 bg-linear-to-r from-blue-600 to-blue-400 hover:scale-105 transition-transform py-4 rounded-full font-bold text-lg shadow-lg'>
                Search Wheels
               </div>                     
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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