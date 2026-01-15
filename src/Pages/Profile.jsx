import React, { useEffect, useState } from 'react'
import authStore from '../zustand/AuthStore';
import motorStore from '../zustand/MotorStore';
import { toast } from 'react-toastify';
import VechileCard from '../Components/VechileCard';

const Profile = () => {
    const {user} = authStore();
    const getMyMotors = motorStore(state => state.getMyMotors);

    const [myMotors, setMyMotors] = useState([]);

    const formattedDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
      month: 'short', 
      year: 'numeric' 
    }) 
  : "Oct 2025";

    useEffect(() => {
      console.log("useEffect fired");
      const fetchMyMotors = async () => {
        console.log("Calling getMyMotors...");
        const response = await getMyMotors();
        if(response.success){
          setMyMotors(response.data.motors);
          toast.success("Motors fetched successfully");
        }else{
          toast.error(response.error);
        }
      };

  fetchMyMotors();
}, []);

    

  return (
    <div className='max-w-7xl relative mx-auto px-6 mt-8  text-white '>
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/3  bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[40px] p-10 flex flex-col items-center justify-center shadow-2xl">
                <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 p-1 mb-6 shadow-xl shadow-blue-500/20">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="rounded-full bg-slate-900 w-full h-full" alt="avatar" />
                </div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter">{user.name}</h1>
            </div>

            <div className="bg-white/10 flex-2 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 flex flex-col justify-center items-center shadow-xl hover:bg-white/15 transition-all">
              <p className='text-3xl mb-2'>📅</p><br />
              <p className='text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1'>Member Since</p>
              <h1 className="text-3xl font-black italic tracking-tighter">{formattedDate}</h1>
            </div>

            <div className="bg-white/10 flex-2 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 flex flex-col justify-center items-center shadow-xl hover:bg-white/15 transition-all">
              <p className='text-3xl mb-2'>🏎️</p><br />
              <p className='text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1'>Fleet Size</p>
              <h1 className="text-3xl font-black italic tracking-tighter">{user.__v}</h1>
            </div>

            <div className="bg-white/10 flex-2 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 flex flex-col justify-center items-center shadow-xl hover:bg-white/15 transition-all">
              <p className='text-3xl mb-2'>⭐</p><br />
              <p className='text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1'>Ratings</p>
              <h1 className="text-3xl font-black italic tracking-tighter">5.0</h1>
            </div>
        </div>

        {/* Section 2 */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>

          {/* Fleets owned by me */}
          <div className='lg:col-span-7 space-y-8'>
            {/* heading */}
            <div className='flex justify-between items-end px-4'>
              <div className=''>
                  <h2 className='text-3xl font-black italic uppercase tracking-tighter'>
                    My Garage
                  </h2>
                  <p className='text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]'>
                    Manage your fleets
                  </p>
              </div>
              <button className='bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/40 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all'>
                + Add new
              </button>
            </div>

            {/* Vechiles */}
            <div className='grid grid-cols-1 gap-6 max-h-screen overflow-scroll'>
              {myMotors.map((motor) => (
                <VechileCard motor={motor} />
              ))}
            </div>

          </div>

        </div>
    </div>
  )
}

export default Profile