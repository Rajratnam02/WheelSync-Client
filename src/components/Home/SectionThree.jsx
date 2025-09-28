import React from 'react'
import Section3Card from './Section3Card'

const SectionThree = () => {
  return (
    <div className='pt-15 bg-[#1E293B] '>
        <h1 className='text-4xl inter-700 text-center uppercase'>Explore our fleet </h1>
        <div className='flex py-10 [@media(max-width:1100px)]:flex-col items-center gap-10 justify-around'>
          <Section3Card />
          <Section3Card />
          <Section3Card />
        </div>
    </div>
  )
}

export default SectionThree