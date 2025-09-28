import React from 'react'
import Section4card from './Section4card'
import { FaShieldAlt, FaWallet } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { BiSupport } from 'react-icons/bi'

const SectionFour = () => {
    const CardDetails = [{
        icon:(<FaWallet className='text-teal-500 text-5xl' />),
        title:"Affordable Rates",
        description:"Transparent pricing with no hidden fees. Pay for what you use."
    },{
        icon:(<FaMapLocationDot className='text-teal-500 text-5xl' />),
        title:"Wide Network",
        description:"Find our vehicles at convenient locations all over the city."
    },{
        icon:(<FaShieldAlt className='text-teal-500 text-5xl' />),
        title:"Safety First",
        description:"All our vehicles are regularly maintained and insured for your safety."
    },{
        icon:(<BiSupport className='text-teal-500 text-5xl' />),
        title:"24/7 Support",
        description:"Our customer support team is always here to help you out."
    }]


  return (
    <div className='bg-[#0F172A] py-15 px-10'>
        <h1 className='text-center text-4xl inter-700'>Why WheelSync?</h1>
        <div className='flex [@media(max-width:1100px)]:flex-col justify-around gap-10 mt-10 items-center '>
            {CardDetails.map((item)=>(
                <Section4card icon = {item.icon} title = {item.title} description = {item.description} />
            ))}
        </div>
        
    </div>
  )
}

export default SectionFour