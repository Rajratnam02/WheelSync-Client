import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Blur from '../components/Blur'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import { Explore } from './Explore'
import Booking from './Booking'
import Footer from '../components/Footer'
import gsap from 'gsap'
import HowItWorks from '../Pages/HowItWorks'


const MainApp = () => {

  useEffect(() => {
    
    gsap.to(".hero-bg", {
      scale: 1.1,
      duration: 20,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020205] overflow-hidden">
        
    
        <div className="fixed inset-0 z-0">
            <div 
                className="hero-bg w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
                style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')",
                    filter: "brightness(0.6) contrast(1.1)" 
                }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/40 via-transparent to-[#020205]" />
        </div>


        <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <Blur />
            
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/booking/:motorId' element={<Booking />} />
                    <Route path='/working' element={<HowItWorks />} />
                </Routes>
            </main>

            <Footer />
        </div>
    </div>
  )
}

export default MainApp