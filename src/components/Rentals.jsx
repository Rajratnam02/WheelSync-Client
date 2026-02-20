import React, { useState } from "react";
import SecVecCard2 from "./SecVecCard2";
import { LoaderOne } from "./ui/loader";

const Rentals = (props) => {
  const rentals = props.rentals || [];
  const loading = props.loading;

  // 🔹 Filter state
  const [filter, setFilter] = useState("All");

  // 🔹 Apply filter
  const filteredRentals =
    filter === "All"
      ? rentals
      : rentals.filter(
          (r) => r.status?.toLowerCase() === filter.toLowerCase()
        );

  if (loading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <LoaderOne />
      </div>
    );
  }

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

      {/* 🔶 FILTER BAR */}
      <div className="flex flex-wrap gap-2 mb-6 px-4">
        {["All", "Pending", "Approved", "Completed", "Rejected"].map(
          (type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all
              ${
                filter === type
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {type}
            </button>
          )
        )}
      </div>

      {/* RENTALS LIST CONTAINER */}
      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
        
        {/* Subtle background branding */}
        <div className="absolute -bottom-10 -right-10 text-white/5 text-8xl font-black italic select-none">
          HISTORY
        </div>

        {filteredRentals.length > 0 ? (
          <div className="space-y-2 relative z-10">
            {filteredRentals.map((rental) => (
              <SecVecCard2 key={rental._id} order={rental} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 italic">
              No rentals found for this filter.
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