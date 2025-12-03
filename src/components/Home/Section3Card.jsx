import React from 'react'

const Section3Card = (props) => {
  return (
    <div className='h-[380px] shadow-[7px_7px_5px_5px_rgba(0,0,0,0.5)] rounded hover:-translate-y-5 transition-all duration-700 flex flex-col   w-[350px]'>
        <div className='flex-1 flex items-center justify-center text-6xl inter-700 bg-teal-400/10 '>
          {props.items.type}
        </div>
        <div className='flex flex-col bg-[#0F172A] w-full px-10 gap-5 py-5'>
            <h3 className='text-2xl inter-600'>{props.items.make}&nbsp;{props.items.model}</h3>
            <div className='flex justify-between '>
                <p className='inter-700 text-2xl '><span className='text-teal-500'>&#8377; {props.items.pricePerDay}</span>/day</p>
                <p className='inter-600 hover:shadow-[0_0px_5px_5px_rgba(0,128,128,0.5)] flex items-center transition-all duration-300 justify-center px-3 rounded text-lg py-2 bg-[#14B8A6]'>Rent Now</p>
            </div>
        </div>
    </div>
  )
}

export default Section3Card