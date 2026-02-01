import React from 'react'

const VechileCard = (props) => {
  const editHandler = () => {
    props.setEditMotors(true);
    props.setMotorId(props.motor._id);
  }
  return (
    <div className='bg-white/10 mt-5 backdrop-blur-2xl border border-white/20 rounded-[40px] p-4 flex gap-8 items-center group hover:bg-white/15 transition-all'>
        <div className='h-32 w-48 rounded-[30px] overflow-hidden'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' src={props.motor.imageUrls[0]} alt="" />
        </div>

        <div className='flex-1'>
            <p className="text-blue-400 text-[8px] font-black uppercase tracking-widest">{props.motor.type}</p>
            <h3 className="text-2xl font-bold uppercase italic tracking-tighter">{props.motor.make}&nbsp; {props.motor.model} </h3>

            <div className="mt-4 flex items-center gap-4">
                         <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase ${props.motor.isAvailable  ? 'bg-emerald-500/20 text-emerald-400' : 'bg-orange-500/20 text-orange-400'}`}>
                            {props.motor.isAvailable ? 'Available' : 'Unavailable'}
                         </span>
                         <button onClick={editHandler} className="text-[10px] cursor-pointer font-bold text-gray-500 uppercase hover:text-white transition-colors">Edit</button>
                      </div>
        </div>
    </div>
  )
}

export default VechileCard