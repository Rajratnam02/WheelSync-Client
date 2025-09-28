import React from 'react'

const Section4card = (props) => {
  return (
    <div className='bg-[#1E293B] rounded  gap-3 shadow-[2px_2px_5px_5px_rgba(0,0,0,0.2)] py-5 flex flex-col items-center justify-center w-[330px]'>
        {props.icon}
        <h1 className='inter-600 text-xl text-center'>{props.title}</h1>
        <h2 className='text-md text-[#9CA3AB] inter-500 text-center'>{props.description}</h2>
    </div>
  )
}

export default Section4card