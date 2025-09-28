import React from 'react'

const Section2Card = (props) => {
  return (
    <div className='w-[350px] aspect-square  flex flex-col justify-center items-center text-center'>
        <div className=' w-[100px] border-teal-500 bg-teal-500/20 border h-[100px] flex items-center justify-center rounded-full'>
            {props.icon}
        </div>
        <h6 className='text-2xl inter-600 mt-2 '>{props.index}. {props.text}</h6>
        <h6 className='text-md mt-1 text-[#9CA3AB] '>{props.description}</h6>
    </div>
  )
}

export default Section2Card