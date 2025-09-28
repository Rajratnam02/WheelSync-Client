import React from 'react'
import Section2Card from './Section2Card'
import { MdLocationOn } from 'react-icons/md'
import { IoIosPhonePortrait } from 'react-icons/io'
import { TbBikeFilled } from 'react-icons/tb'



const SectionTwo = () => {

  const steps = [
    {
      icon:(<MdLocationOn className='text-teal-500 text-5xl' />),
      text:"Find a Vehicle",
      description:"Search for available bikes and cars near you with our easy-to-use map."
    },{
      icon:(<IoIosPhonePortrait className='text-teal-500 text-5xl' />),
      text:"Book & Unlock",
      description:"Choose your vehicle, book instantly, and unlock it with your phone."
    },{
      text:"Ride & Return",
      description:"Enjoy your ride! Return the vehicle to a designated spot when you're done.",
      icon:(<TbBikeFilled className='text-teal-500 text-5xl' />)
    }
  ]


  return (
    <div className='bg-[#0F172A] pt-15 px-10 '>
      <h1 className='text-4xl text-center  inter-700 text-white '>How it Works</h1>
      <h6 className='text-center text-md mt-0.5 inter-400 text-[#9CA3AB]  '>Renting your ride is as easy as 1-2-3.</h6>
      <div className='flex  w-full [@media(max-width:1100px)]:flex-col px-10 justify-around items-center'>
        {steps.map((item,index)=>(
          <Section2Card icon={item.icon} index={index+1} text={item.text} description={item.description} />
        ))}

      </div>
    </div>
  )
}

export default SectionTwo