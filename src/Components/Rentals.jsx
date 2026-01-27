import React, { useState } from "react";
import SecVecCard from "./SecVecCard"; // Using your exact component
import SecVecCard2 from "./SecVecCard2";

const Rentals = (props) => {
  // 1. LOCAL DATA (History of past rentals)
  const pastRentals = props.rentals

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* SECTION HEADER */}
      <div className="mb-10 px-4">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
          Travel Log
        </h2>
        <p className="text-[9px] text-gray-500 font-black uppercase tracking-[0.4em] mt-1">
          History of completed journeys
        </p>
      </div>

      {/* RENTALS LIST CONTAINER */}
      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
        
        {/* Subtle background branding */}
        <div className="absolute -bottom-10 -right-10 text-white/5 text-8xl font-black italic select-none">
          HISTORY
        </div>

        {pastRentals.length > 0 ? (
          <div className="space-y-2 relative z-10">
            {pastRentals.map((rental) => (
              <SecVecCard2 key={rental._id} order={rental} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 italic">
              No past rentals recorded yet.
            </p>
          </div>
        )}

        {/* FOOTER ACTION */}
        <div className="mt-8 pt-8 border-t border-white/5 flex justify-center relative z-10">
          <button className="text-[9px] font-black uppercase text-gray-500 hover:text-blue-400 transition-all tracking-[0.2em]">
            Load Older Transactions
          </button>
        </div>
      </div>

    </div>
  );
};

export default Rentals;