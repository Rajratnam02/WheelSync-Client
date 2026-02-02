import React, { useState } from 'react';
import VechileCard from './VechileCard'; // Assuming same directory
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { LoaderOne } from './ui/loader';

const Garage = (props) => {
  // 1. LOCAL FLEET DATA (Using your schema)
  const myFleet = props.myMotors
  const setAddMotorActive = props.setAddMotorActive
  const setMotorId = props.setMotorId
  const setEditMotors = props.setEditMotors
  const loading = props.loading
  const clickHanlder = () => {
    setAddMotorActive(true);
  }

  if(loading){
    return (
    <div className='flex justify-center items-center mt-8 px-4 min-h-[200px]'>
          <LoaderOne />
      </div>
    )
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER AREA */}
      <div className="flex justify-between items-end mb-8 px-4">
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            My Garage
          </h2>
          <p className="text-[9px] text-gray-500 font-black uppercase tracking-[0.3em] mt-1">
            Lending Management & Fleet Assets
          </p>
        </div>

        {/* Action Button */}
        <button onClick={clickHanlder} className="bg-white/5 border border-white/10 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
          + List New Vehicle
        </button>
      </div>

      {/* VEHICLE LISTING */}
      <div className="space-y-2">
        <PerfectScrollbar style={{maxHeight:"720px"}}>
            {myFleet.length > 0 ? (
          myFleet.map((vehicle) => (

            <VechileCard key={vehicle.id} motor={vehicle} setMotorId={setMotorId} setEditMotors={setEditMotors} />
          ))
        ) : (
          <div className="py-20 text-center bg-white/5 rounded-[40px] border border-white/10 border-dashed">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
              No vehicles listed in your garage.
            </p>
          </div>
        )}
        </PerfectScrollbar>
      </div>

      

    </div>
  );
};

export default Garage;