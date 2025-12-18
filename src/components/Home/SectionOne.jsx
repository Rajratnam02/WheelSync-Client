import React from 'react'
import { FaCarAlt } from 'react-icons/fa'
import { FaMotorcycle } from 'react-icons/fa6'

const SectionOne = () => {
  return (
    /* 1. Changed fixed height h-[550px] to min-h-[550px] or min-h-screen for better mobile view */
    /* 2. Added px-6 to prevent text from touching screen edges on mobile */
    <div className='min-h-[600px] md:h-[550px] w-full flex text-center gap-6 flex-col items-center justify-center px-6 rounded bg-[linear-gradient(to_bottom,rgba(11,15,46,0.7),rgba(0,0,0,0.7)),url(https://i.pinimg.com/1200x/76/ed/99/76ed99cee9382671d9ef540ebf3318b3.jpg)] bg-cover bg-center'>
        
        {/* Title: Adjusted text size and leading for mobile */}
        <p className='text-4xl md:text-6xl leading-tight inter-700 text-white'>
          Your Perfect Ride, On Demand
        </p>

        {/* Subtitle: Limited width and adjusted font size */}
        <p className='inter-400 text-base md:text-xl max-w-3xl text-gray-200 leading-relaxed'>
          Rent bikes and cars effortlessly. Find the best vehicle for your journey, anytime, anywhere.
        </p>

        {/* Button Container: Column on mobile (full width), Row on desktop */}
        <div className='flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto'>
            
            {/* Bike Button */}
            <div className='flex items-center inter-600 cursor-pointer transition-all duration-200 hover:shadow-[0_0px_5px_5px_rgba(0,128,128,0.5)] justify-center gap-2 text-lg bg-teal-500 text-white px-8 py-4 rounded-xl w-full sm:w-auto'>
                <FaMotorcycle className='text-2xl' />
                <p>Rent a Bike</p>
            </div>

            {/* Car Button */}
            <div className='flex items-center cursor-pointer hover:bg-white hover:text-black text-white transition-all duration-500 inter-600 justify-center gap-2 text-lg border border-white px-8 py-4 rounded-xl w-full sm:w-auto'>
                <FaCarAlt className='text-2xl' />
                <p>Rent a Car</p>
            </div>
            
        </div>
    </div>
  )
}

export default SectionOne