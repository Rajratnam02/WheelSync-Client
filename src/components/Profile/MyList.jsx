import React from 'react'
import authStore from '../../Zustand(State Management)/AuthManagement';
import VehicleCard from './VehicleCard';


const MyList = () => {
    const user = authStore((state) => state.user); 

    return (
    <div className=' mt-10  border-[#787c80] border-2 rounded-2xl flex'>
        <div className='px-10 pt-10 w-full '>
            <p className='text-3xl inter-600'>My Vechile List</p>
            <div className='flex flex-col gap-5 mt-10 mb-5'>
                {user.motor && user.motor.length > 0 ?user.motor.map((items)=>(<VehicleCard key={items.id} vehicle={items} />)): <p className='w-full flex items-center justify-center text-xl inter-600'>Nothing to Show here</p> }
            </div>
        </div>
    </div>
  )
}

export default MyList