import React, { useState } from "react";
import SecVecCard from "../components/SecVecCard";
import { LoaderOne } from "../components/ui/loader";


const Rides = (props) => {
  const loading = props.loading
  if(loading){
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <LoaderOne />
      </div>
    )
  }

  const activeOrders = props.myBookinglist 
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* SECTION HEADER */}
      <div className="mb-10 px-4">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
          Active Rides
        </h2>
        <p className="text-[9px] text-blue-400 font-black uppercase tracking-[0.4em] mt-1">
          Currently Ongoing Journeys
        </p>
      </div>

      {/* RIDES LIST CONTAINER */}
      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 shadow-2xl">
        {activeOrders.length > 0 ? (
          <div className="space-y-2">
            {activeOrders.map((order) => (
              <SecVecCard key={order._id} order={order} />
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="py-20 text-center">
            <div className="text-4xl mb-4 opacity-20">🗺️</div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 italic">
              No active rentals found.
            </p>
          </div>
        )}

        {/* BOTTOM ACTION / INFO */}
        <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">
            Total Active Sessions: {activeOrders.length}
          </p>
          <button className="text-[9px] font-black uppercase text-blue-400 hover:text-white transition-all">
            Refresh Status
          </button>
        </div>
      </div>

    </div>
  );
};

export default Rides;