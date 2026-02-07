import React from 'react';
import VechileCard from './VechileCard';
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { LoaderOne } from './ui/loader';

const Garage = (props) => {
  const { 
    myMotors: myFleet, 
    setAddMotorActive, 
    setMotorId, 
    setEditMotors, 
    loading 
  } = props;

  const clickHandler = () => {
    setAddMotorActive(true);
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center mt-8 px-4 min-h-[200px]'>
        <LoaderOne />
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 px-4 md:px-0">
      
      {/* HEADER AREA */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white">
            My Garage
          </h2>
          <p className="text-[8px] md:text-[9px] text-gray-500 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mt-1">
            Lending Management & Fleet Assets
          </p>
        </div>

        {/* Action Button */}
        <button 
          onClick={clickHandler} 
          className="w-full sm:w-auto bg-white/5 border border-white/10 px-6 md:px-8 py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95"
        >
          + List New Vehicle
        </button>
      </div>

      {/* VEHICLE LISTING */}
      <div className="w-full">
        {/* On mobile we use standard overflow, on desktop we use PerfectScrollbar */}
        <div className="block md:hidden space-y-4">
            {myFleet.length > 0 ? (
                myFleet.map((vehicle) => (
                    <VechileCard key={vehicle._id} motor={vehicle} setMotorId={setMotorId} setEditMotors={setEditMotors} />
                ))
            ) : (
                <EmptyState />
            )}
        </div>

        <div className="hidden md:block">
            <PerfectScrollbar style={{ maxHeight: "720px", paddingRight: "10px" }}>
                <div className="space-y-4">
                    {myFleet.length > 0 ? (
                        myFleet.map((vehicle) => (
                            <VechileCard key={vehicle._id} motor={vehicle} setMotorId={setMotorId} setEditMotors={setEditMotors} />
                        ))
                    ) : (
                        <EmptyState />
                    )}
                </div>
            </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

// Extracted Empty State for cleaner code
const EmptyState = () => (
  <div className="py-16 md:py-20 text-center bg-white/5 rounded-[30px] md:rounded-[40px] border border-white/10 border-dashed px-6">
    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-600">
      No vehicles listed in your garage.
    </p>
  </div>
);

export default Garage;