import React from 'react'
import { FaCarAlt } from 'react-icons/fa'
import { FaMotorcycle } from 'react-icons/fa6'

const SectionOne = () => {
  return (
      <div className='h-[550px] flex text-center gap-3 flex-col items-center justify-center rounded bg-[linear-gradient(to_bottom,rgba(11,15,46,0.7),rgba(0,0,0,0.7)),url(https://i.pinimg.com/1200x/76/ed/99/76ed99cee9382671d9ef540ebf3318b3.jpg)] bg-cover bg-center'>
        <p className='text-4xl md:text-6xl  leading-tight inter-700'>Your Perfect Ride, On Demand</p>
        <p className='inter-400 text-lg  leading-tight md:text-xl max-w-3xl '>Rent bikes and cars effortlessly. Find the best vehicle for your journey, anytime, anywhere.</p>
        <div className='flex  gap-5 mt-5'>
            <div className='flex items-center inter-600 transition-all duration-200 hover:shadow-[0_0px_5px_5px_rgba(0,128,128,0.5)] justify-center gap-2 text-lg bg-teal-500 px-8 py-4 rounded-xl '>
                <FaMotorcycle className='text-2xl' />
                <p>Rent a Bike</p>
            </div>
            <div className='flex items-center hover:bg-white hover:text-black transition-all duration-500 inter-600 justify-center gap-2 text-lg border px-8 py-4 rounded-xl '>
                <FaCarAlt className='text-2xl' />
                <p>Rent a Car</p>
            </div>
        </div>

    </div>
  )
}

export default SectionOne