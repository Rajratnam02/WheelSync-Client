import React from 'react'
import Section2Card from './Section2Card'
import { MdLocationOn } from 'react-icons/md'
import { IoIosPhonePortrait } from 'react-icons/io'
import { TbBikeFilled } from 'react-icons/tb'

const SectionTwo = () => {
  const steps = [
    {
      icon: <MdLocationOn className='text-teal-500 text-5xl' />,
      text: "Find a Vehicle",
      description: "Search for available bikes and cars near you with our easy-to-use map."
    },
    {
      icon: <IoIosPhonePortrait className='text-teal-500 text-5xl' />,
      text: "Book & Unlock",
      description: "Choose your vehicle, book instantly, and unlock it with your phone."
    },
    {
      text: "Ride & Return",
      description: "Enjoy your ride! Return the vehicle to a designated spot when you're done.",
      icon: <TbBikeFilled className='text-teal-500 text-5xl' />
    }
  ]

  return (
    /* 1. Added responsive padding: px-6 on mobile, px-10 on larger screens */
    /* 2. Changed pt-15 to py-16 to give equal space at top and bottom */
    <div className='bg-[#0F172A] py-16 px-6 md:px-10 w-full'>
      
      <h1 className='text-3xl md:text-4xl text-center inter-700 text-white'>
        How it Works
      </h1>
      
      <h6 className='text-center text-sm md:text-base mt-2 inter-400 text-[#9CA3AB]'>
        Renting your ride is as easy as 1-2-3.
      </h6>

      {/* 3. Grid Layout: 
          - 1 column on mobile 
          - 3 columns on large screens (lg)
          - Gap-8 ensures cards don't touch on mobile 
      */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto'>
        {steps.map((item, index) => (
          <div key={index} className="flex justify-center w-full">
            <Section2Card 
              icon={item.icon} 
              index={index + 1} 
              text={item.text} 
              description={item.description} 
            />
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default SectionTwo