import React from 'react'
import Available from './Available'
import NotAvailable from './NotAvailable'

const VehicleCard = (props) => {
  return (
    <div className=' px-5 py-4 gap-5 bg-[#131C2E] flex rounded-xl w-full shadow-md hover:shadow-lg transition-shadow duration-300'>
        {/* Vehicle Type Box */}
        <div className=' flex items-center inter-700 text-4xl rounded-lg bg-[#253144] justify-center w-[140px] text-teal-400 shadow-inner'>
            {props.vehicle.type}
        </div>

        {/* Vehicle Details */}
        <div className='flex-1 border border-gray-700 rounded-lg flex justify-between items-center px-6 py-3 bg-[#1E293B]'>
            <div className='flex flex-col gap-1 text-gray-200'>
                <p className='text-lg inter-600 text-white'>{props.vehicle.make}&nbsp;{props.vehicle.model}</p>
                <p className='text-gray-400'>Price:&nbsp;<span className="text-teal-400">&#8377;{props.vehicle.pricePerDay}</span>/day</p>
                <p className='text-gray-400'>{props.vehicle.location}</p>
                <p className='mt-2'>{props.vehicle.isAvailable ? <Available /> : <NotAvailable />}</p>
            </div>

            <button className='text-md px-4 py-2 bg-teal-500 text-white rounded-lg inter-600 hover:bg-teal-600 hover:shadow-[0px_0px_10px_2px_rgba(20,184,166,0.4)] transition-all duration-300'>
              Edit Listing
            </button>
        </div>
    </div>
  )
}

export default VehicleCard
