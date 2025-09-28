import React from 'react'

const Section3Card = () => {
  return (
    <div className='h-[380px] shadow-[7px_7px_5px_5px_rgba(0,0,0,0.5)] rounded hover:-translate-y-5 transition-all duration-700 flex flex-col   w-[420px]'>
        <div className='flex-1 bg-teal-400/10 '>

        </div>
        <div className='flex flex-col bg-[#0F172A] w-full px-10 py-5'>
            <h3 className='text-2xl inter-600'>City Cruiser</h3>
            <h5 className='text-[#9CA3AB] inter-500 text-sm '>Perfect for navigating city streets with ease and style.</h5>
            <div className='flex justify-between '>
                <p className='inter-700 text-2xl '><span className='text-teal-500'>&#8377; 15</span>/hour</p>
                <p className='inter-600 hover:shadow-[0_0px_5px_5px_rgba(0,128,128,0.5)] flex items-center transition-all duration-300 justify-center px-3 rounded text-lg py-2 bg-[#14B8A6]'>Rent Now</p>
            </div>
        </div>
    </div>
  )
}

export default Section3Card