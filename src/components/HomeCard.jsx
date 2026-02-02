import React from 'react'

const HomeCard = (props) => {
  return (
    <div className='bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition group'>
        <div className='text-4xl mb-4 group-hover:scale-110 transition-transform inline-block'>
            {props.emoji}
        </div>
        <h3 className='text-xl font-bold mb-2'>
            {props.title}
        </h3>
        <p className='text-gray-400 leading-relaxed'>
            {props.description}
        </p>
    </div>
  )
}

export default HomeCard