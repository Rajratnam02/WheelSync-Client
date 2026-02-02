import React from 'react'
import { useNavigate } from 'react-router-dom'

const VechGridCard = (props) => {
  // Destructuring for cleaner code
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/booking/${props.motor._id}`);
  }


  return (
    <div className='group bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] overflow-hidden shadow-2xl hover:bg-white/15 transition-all duration-500'>
      
      
      <div className='relative  flex justify-between h-56 overflow-hidden'>
        <img className='w-full absolute h-full object-cover group-hover:scale-110 transition-transform duration-700' 
          src={props.motor.imageUrls[0]} 
          alt={props.motor.make + ' ' + props.motor.model} 
        />
        
        <div className='h-5 m-5  bg-blue-600/90 backdrop-blur-md px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-lg'>
          {props.motor.type}
        </div>

        <div className='h-6 m-5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold border border-white/10'>
          {props.motor.year}
        </div>
      </div>

      
      <div className='p-8'>
        <div className='flex justify-between items-start mb-6'>
          <div>
            <h3 className='text-2xl font-black italic uppercase tracking-tighter leading-tight'>
              {props.motor.make} {props.motor.model}
            </h3>
            
            
            <div className='flex items-center gap-2 mt-2'>
              <div className={`h-2 w-2 rounded-full ${props.motor.isAvailable ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className={`text-[9px] font-bold uppercase tracking-widest ${props.motor.isAvailable ? 'text-emerald-400' : 'text-red-400'}`}>
                {props.motor.isAvailable ? 'Available Now' : 'Currently Booked'}
              </span>
            </div>
          </div>

          
          <div className='text-right'>
            <p className='text-2xl font-black text-blue-400 italic'>₹{props.motor.pricePerDay}</p>
            <p className='text-[8px] text-gray-500 font-bold uppercase tracking-tighter'>per day</p>
          </div>
        </div>

        
        <div className='grid grid-cols-2 gap-4 mb-8'>
           <div className='bg-white/5 p-3 rounded-2xl border border-white/5'>
              <p className='text-[8px] text-gray-500 uppercase font-bold mb-1'>Reg. No</p>
              <p className='text-[10px] font-black tracking-widest uppercase'>{props.motor.registrationNumber}</p>
           </div>
           <div className='bg-white/5 p-3 rounded-2xl border border-white/5'>
              <p className='text-[8px] text-gray-500 uppercase font-bold mb-1'>Location</p>
              <p className='text-[10px] font-black tracking-tight truncate'>{props.motor.location.split(',')[0]}</p>
           </div>
        </div>

        
        <button onClick={clickHandler}
          disabled={!props.motor.isAvailable}
          className={`w-full py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-lg ${
            props.motor.isAvailable 
            ? 'bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-95 text-white' 
            : 'bg-white/5 text-gray-600 cursor-not-allowed border border-white/5'
          }`}
        >
          {props.motor.isAvailable ? 'Rent This Ride' : 'Out of Service'}
        </button>

      </div>
    </div>
  )
}

export default VechGridCard